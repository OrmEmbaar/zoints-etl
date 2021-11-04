import { PrismaClient, ZeeSplSignature, PostTransferBalance } from '../../../client';
import { Connection, PublicKey } from '@solana/web3.js';
import { ETLParams } from '../../types';
import { SolanaETL, UnprocessedSignature } from '../solanaETL';
import log from '../../logger';

/**
 * TokenMintETL extracts, transforms and loads ZEE token transfers
 * associated with the SPL token program.
 */
export default class TokenMintETL extends SolanaETL {
    connection: Connection;
    prisma: PrismaClient;

    constructor(params: ETLParams, prisma: PrismaClient) {
        super(params, prisma);
        this.connection = params.connection;
        this.prisma = prisma;
    }

    /**
     * Processes new signature transactions.
     */
    private async syncSignatures(): Promise<void> {
        const [sig, initInstruction] = await Promise.all([
            this.prisma.zeeSplSignature.findFirst({
                orderBy: { id: 'desc' }
            }),
            this.prisma.initInstruction.findFirst({
                orderBy: { id: 'desc' },
                rejectOnNotFound: true
            })
        ]);
        const zeeTokenMint = new PublicKey(initInstruction.zeeTokenMint);
        const insert = async (data: UnprocessedSignature) => {
            return this.prisma.zeeSplSignature.create({ data });
        };
        const n = await this.syncAccountSignatures(zeeTokenMint, insert, sig?.signature);
        if (n > 0) {
            log.debug(`inserted ${n} new ZEE token mint signatures`);
        }
    }

    private handleMissingTransaction(sig: ZeeSplSignature) {
        log.warn(`Missing transaction ${sig.signature}`);
        return this.prisma.zeeSplSignature.update({
            where: { id: sig.id },
            data: { processed: true }
        });
    }

    private async syncBalanceChanges(): Promise<void> {
        const getUnprocessedSigs = (size: number) => {
            return this.prisma.zeeSplSignature.findMany({
                take: size,
                where: { processed: false },
                orderBy: { id: 'asc' }
            });
        };

        const initInstruction = await this.prisma.initInstruction.findFirst({
            orderBy: { id: 'desc' },
            rejectOnNotFound: true
        });

        let n = 0;
        for await (const { tx, signature } of this.getUnprocessedPairs(getUnprocessedSigs)) {
            if (tx === null) {
                await this.handleMissingTransaction(signature);
                continue;
            }

            const postBalances = tx.meta?.postTokenBalances?.filter(
                (b) => b.mint === initInstruction.zeeTokenMint
            );

            const balances: Omit<PostTransferBalance, 'id'>[] = [];
            for (const pb of postBalances!) {
                const account = tx.transaction.message.accountKeys[pb.accountIndex];

                balances.push({
                    signatureId: signature.id,
                    account: account.pubkey.toBase58(),
                    amount: BigInt(pb.uiTokenAmount.amount),
                    uiAmount: pb.uiTokenAmount.uiAmount,
                    uiAmountString: pb.uiTokenAmount.uiAmountString || null
                });
            }

            const signatureUpdate = {
                where: { id: signature.id },
                data: {
                    processed: true,
                    fee: tx.meta?.fee,
                    recentBlockHash: tx.transaction.message.recentBlockhash
                }
            };

            await this.prisma.$transaction([
                this.prisma.zeeSplSignature.update(signatureUpdate),
                ...balances.map((data) => this.prisma.postTransferBalance.create({ data }))
            ]);

            n += balances.length;
        }
        if (n > 0) {
            log.debug(`${n} new ZEE balance transfers`);
        }
    }

    /**
     * Sync ZEE post balances.
     */
    async sync(): Promise<void> {
        await this.syncSignatures();
        await this.syncBalanceChanges();
    }
}
