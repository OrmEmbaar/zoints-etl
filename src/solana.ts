import { PrismaClient } from '.prisma/client';
import {
    Connection,
    ConfirmedSignatureInfo,
    SignaturesForAddressOptions,
    PublicKey,
    ParsedConfirmedTransaction,
    PartiallyDecodedInstruction
} from '@solana/web3.js';
import Bottleneck from 'bottleneck';

import { log } from './logger';
import { ETLParams } from './types';

export interface UnprocessedSignature
    extends Omit<ConfirmedSignatureInfo, 'err' | 'blockTime' | 'memo'> {
    blockTime: Date;
}

/**
 * SolanaETL defines an abstract base class for all Solana ETLs
 */
export abstract class SolanaETL {
    connection: Connection;
    prisma: PrismaClient;
    limiter: SolanaLimiter;

    constructor(params: ETLParams, prisma: PrismaClient) {
        this.connection = params.connection;
        this.prisma = prisma;
        this.limiter = SolanaLimiter.getInstance(params.rateLimit);
    }

    /**
     * Filters and formats transacgion instructions for the given account.
     */
    protected formatAccountInstructions(tx: ParsedConfirmedTransaction, account: PublicKey) {
        return tx.transaction.message.instructions
            .filter((i) => i.programId.equals(account))
            .map((instruction, idx) => {
                const inner = tx.meta?.innerInstructions?.filter((i) => i.index === idx);
                if (!inner) {
                    throw new Error(`Missing inner instructions: ${tx.transaction.signatures[0]}`);
                }
                return { instruction: instruction as PartiallyDecodedInstruction, inner };
            });
    }

    /**
     * Generates all unprocessed signature and transaction pairs.
     */
    protected async *getUnprocessedPairs<
        T extends {
            signature: string;
        }
    >(
        nextSigs: (b: number) => Promise<T[]>
    ): AsyncGenerator<
        {
            signature: T;
            tx: ParsedConfirmedTransaction | null;
        },
        void,
        unknown
    > {
        const batchSize = 100; // Todo: determine best batch size

        for (let finalBatch = false; !finalBatch; ) {
            const sigs = await nextSigs(batchSize);

            if (sigs.length === 0) {
                return;
            }

            if (sigs.length < batchSize) {
                finalBatch = true;
            }

            const txs = await this.limiter.schedule(() =>
                this.connection.getParsedConfirmedTransactions(sigs.map((s) => s.signature))
            );

            const batch = sigs.map((s, i) => ({ signature: s, tx: txs[i] }));

            for (const item of batch) {
                yield item;
            }
        }
    }

    /**
     * Syncs all new signatures for the given account. Returns the number of signatures synced.
     */
    protected async syncAccountSignatures<T>(
        account: PublicKey,
        insert: (data: UnprocessedSignature) => Promise<T>,
        until?: string
    ) {
        const opts: SignaturesForAddressOptions = {
            limit: 1000, // Max is 1000
            until: until
        };

        // Returns signatures in reverse chronological order
        const next = () => {
            return this.limiter.schedule(() =>
                this.connection.getSignaturesForAddress(account, opts)
            );
        };
        const signatures: ConfirmedSignatureInfo[] = [];

        for (let sigs = await next(); sigs.length > 0; sigs = await next()) {
            signatures.push(...sigs);
            opts.before = sigs[sigs.length - 1]?.signature;
        }

        // Reverse signatures to generate in chronological order
        let inserted = 0;
        for (const signature of signatures.reverse()) {
            if (signature.err) {
                log.warn(`Skipping failed signature ${signature.signature} ${signature.err}`);
                continue;
            }
            if (!signature.blockTime) {
                log.error(`Missing block time ${signature.signature}`);
                continue;
            }
            const data = {
                blockTime: new Date(signature.blockTime * 1000),
                signature: signature.signature,
                slot: signature.slot
            };
            await insert(data);
            inserted++;
        }
        return inserted;
    }
}

/**
 * SolanaLimiter can be used to limit the rate of requests to a
 * Solana JSON RPC API.
 */
class SolanaLimiter {
    private static instance?: SolanaLimiter;
    private bottleneck: Bottleneck;

    private constructor(minTime: number) {
        this.bottleneck = new Bottleneck({ minTime });
    }

    public static getInstance(minTime: number = 250) {
        if (SolanaLimiter.instance) {
            return SolanaLimiter.instance;
        }
        SolanaLimiter.instance = new SolanaLimiter(minTime);
        return SolanaLimiter.instance;
    }

    /**
     * Add a job to the queue.
     */
    public schedule<T>(cb: () => Promise<T>): Promise<T> {
        return this.bottleneck.schedule(cb);
    }
}
