import { PrismaClient, PrismaPromise } from '@prisma/client';
import { AmountSchema, decodeInstructionData, InitSchema, Instructions } from '@zoints/staking';
import {
    PartiallyDecodedInstruction,
    PublicKey,
    ParsedInstruction,
    ParsedInnerInstruction
} from '@solana/web3.js';
import bs58 from 'bs58';

/**
 * Instruction is an abstract class which defines and constructs concrete
 * Instruction types.
 */
export abstract class Instruction {
    static new(
        sigId: number,
        instruction: PartiallyDecodedInstruction,
        inner: ParsedInnerInstruction
    ): Instruction {
        const { data, accounts } = instruction;
        const d = decodeInstructionData(bs58.decode(data));

        switch (d.instructionId) {
            case Instructions.Initialize:
                return new InitInstruction(sigId, accounts, d);
            case Instructions.RegisterCommunity:
                return new RegisterCommunityInstruction(sigId, accounts);
            case Instructions.InitializeStake:
                return new InitStakeInstruction(sigId, accounts);
            case Instructions.Stake:
                return new StakeInstruction(sigId, accounts, d, inner);
            case Instructions.WithdrawUnbond:
                return new WithdrawUnboundInstruction(sigId, accounts);
            case Instructions.Claim:
                return new ClaimInstruction(sigId, accounts, inner);
        }
    }

    /**
     * Insert the instruction into the database.
     */
    public abstract insert(prisma: PrismaClient): PrismaPromise<any>;
}

export class InitInstruction extends Instruction {
    signatureId: number;
    payer: string;
    settingsAccount: string;
    poolAuthority: string;
    rewardPool: string;
    zeeTokenMint: string;
    feeBeneficiaryAuthority: string;
    feeBeneficiary: string;
    splTokenProgam: string;
    startTime: Date;
    unbondingDuration: number;

    constructor(sigId: number, accounts: PublicKey[], instruction: InitSchema) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.settingsAccount = accounts[1].toBase58();
        this.poolAuthority = accounts[2].toBase58();
        this.rewardPool = accounts[3].toBase58();
        this.zeeTokenMint = accounts[4].toBase58();
        this.feeBeneficiaryAuthority = accounts[5].toBase58();
        this.feeBeneficiary = accounts[6].toBase58();
        this.splTokenProgam = accounts[8].toBase58();
        this.startTime = instruction.startTime;
        this.unbondingDuration = instruction.unbondingDuration.toNumber();
    }

    insert(prisma: PrismaClient) {
        return prisma.initInstruction.create({ data: { ...this } });
    }
}

export class RegisterCommunityInstruction extends Instruction {
    signatureId: number;
    payer: string;
    communityOwner: string;
    communityAccount: string;
    primaryBeneficiaryAuthority: string;
    primaryBeneficiary: string;
    secondaryBeneficiaryAuthority: string;
    secondaryBeneficiary: string;

    constructor(sigId: number, accounts: PublicKey[]) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.communityOwner = accounts[1].toBase58();
        this.communityAccount = accounts[2].toBase58();
        this.primaryBeneficiaryAuthority = accounts[3].toBase58();
        this.primaryBeneficiary = accounts[4].toBase58();
        this.secondaryBeneficiaryAuthority = accounts[5].toBase58();
        this.secondaryBeneficiary = accounts[6].toBase58();
    }

    insert(prisma: PrismaClient) {
        return prisma.registerCommunityInstruction.create({
            data: { ...this }
        });
    }
}

export class InitStakeInstruction extends Instruction {
    signatureId: number;
    payer: string;
    staker: string;
    stakerFund: string;
    stakerBeneficiary: string;
    communityAccount: string;
    stakeAccount: string;
    zeeTokenMint: string;

    constructor(sigId: number, accounts: PublicKey[]) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.staker = accounts[1].toBase58();
        this.stakerFund = accounts[2].toBase58();
        this.stakerBeneficiary = accounts[3].toBase58();
        this.communityAccount = accounts[4].toBase58();
        this.stakeAccount = accounts[5].toBase58();
        this.zeeTokenMint = accounts[6].toBase58();
    }

    insert(prisma: PrismaClient) {
        return prisma.stakeInitInstruction.create({ data: { ...this } });
    }
}

export class StakeInstruction extends Instruction {
    signatureId: number;
    payer: string;
    staker: string;
    stakerBeneficiary: string;
    stakerFund: string;
    stakerZeeTokenAccount: string;
    community: string;
    communityPrimaryBeneficiary: string;
    communitySecondaryBeneficiary: string;
    poolAuthority: string;
    rewardPool: string;
    settings: string;
    feeBeneficiary: string;
    stakeAccount: string;
    stake: bigint;
    claim: Claim;

    constructor(
        sigId: number,
        accounts: PublicKey[],
        instruction: AmountSchema,
        inner: ParsedInnerInstruction
    ) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.staker = accounts[1].toBase58();
        this.stakerBeneficiary = accounts[2].toBase58();
        this.stakerFund = accounts[3].toBase58();
        this.stakerZeeTokenAccount = accounts[4].toBase58();
        this.community = accounts[5].toBase58();
        this.communityPrimaryBeneficiary = accounts[6].toBase58();
        this.communitySecondaryBeneficiary = accounts[7].toBase58();
        this.poolAuthority = accounts[8].toBase58();
        this.rewardPool = accounts[9].toBase58();
        this.settings = accounts[10].toBase58();
        this.feeBeneficiary = accounts[11].toBase58();
        this.stakeAccount = accounts[12].toBase58();
        this.stake = instruction.amount;
        this.claim = new Claim(
            sigId,
            inner.instructions[0] as ParsedInstruction,
            ClaimOrigin.StakeInstruction
        );
    }

    insert(prisma: PrismaClient) {
        // The compiler doesn't like it when `this` is spread into `data`.
        return prisma.stakeInstruction.create({
            data: {
                payer: this.payer,
                staker: this.staker,
                stakerBeneficiary: this.stakerBeneficiary,
                stakerFund: this.stakerFund,
                stakerZeeTokenAccount: this.stakerZeeTokenAccount,
                community: this.community,
                communityPrimaryBeneficiary: this.communityPrimaryBeneficiary,
                communitySecondaryBeneficiary: this.communitySecondaryBeneficiary,
                poolAuthority: this.poolAuthority,
                rewardPool: this.rewardPool,
                settings: this.settings,
                feeBeneficiary: this.feeBeneficiary,
                stakeAccount: this.stakeAccount,
                stake: this.stake,
                claim: { create: { ...this.claim } },
                signature: { connect: { id: this.signatureId } }
            }
        });
    }
}

export class WithdrawUnboundInstruction extends Instruction {
    signatureId: number;
    payer: string;
    staker: string;
    stakerFund: string;
    stakerZeeTokenAccount: string;
    community: string;
    settings: string;
    poolAuthority: string;
    stakeAccount: string;

    constructor(sigId: number, accounts: PublicKey[]) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.staker = accounts[1].toBase58();
        this.stakerFund = accounts[2].toBase58();
        this.stakerZeeTokenAccount = accounts[3].toBase58();
        this.community = accounts[4].toBase58();
        this.settings = accounts[5].toBase58();
        this.poolAuthority = accounts[6].toBase58();
        this.stakeAccount = accounts[7].toBase58();
    }

    insert(prisma: PrismaClient) {
        return prisma.withdrawUnboundInstruction.create({ data: { ...this } });
    }
}

export class ClaimInstruction extends Instruction {
    signatureId: number;
    payer: string;
    beneficiaryAuthority: string;
    beneficiaryAccount: string;
    authorityZeeTokenAccount: string;
    settings: string;
    poolAuthority: string;
    rewardPool: string;
    claim: Claim;

    constructor(sigId: number, accounts: PublicKey[], inner: ParsedInnerInstruction) {
        super();
        this.signatureId = sigId;
        this.payer = accounts[0].toBase58();
        this.beneficiaryAuthority = accounts[1].toBase58();
        this.beneficiaryAccount = accounts[2].toBase58();
        this.authorityZeeTokenAccount = accounts[3].toBase58();
        this.settings = accounts[4].toBase58();
        this.poolAuthority = accounts[5].toBase58();
        this.rewardPool = accounts[6].toBase58();
        this.claim = new Claim(
            sigId,
            inner.instructions[0] as ParsedInstruction,
            ClaimOrigin.ClaimInstruction
        );
    }

    insert(prisma: PrismaClient) {
        return prisma.claimInstruction.create({
            data: {
                payer: this.payer,
                beneficiaryAuthority: this.beneficiaryAuthority,
                beneficiaryAccount: this.beneficiaryAccount,
                authorityZeeTokenAccount: this.authorityZeeTokenAccount,
                settings: this.settings,
                poolAuthority: this.poolAuthority,
                rewardPool: this.rewardPool,
                claim: { create: { ...this.claim } },
                signature: { connect: { id: this.signatureId } }
            }
        });
    }
}

export enum ClaimOrigin {
    ClaimInstruction = 'ClaimInstruction',
    StakeInstruction = 'StakeInstruction'
}

export class Claim {
    signatureId: number;
    amount: bigint;
    authority: string;
    source: string;
    destination: string;
    claimOrigin: ClaimOrigin;

    constructor(signatureId: number, innerInstruction: ParsedInstruction, origin: ClaimOrigin) {
        this.signatureId = signatureId;
        this.source = innerInstruction.parsed?.info?.source;
        this.authority = innerInstruction.parsed?.info?.authority;
        this.destination = innerInstruction.parsed?.info?.destination;
        this.amount = BigInt(innerInstruction.parsed?.info?.amount);
        this.claimOrigin = origin;
    }
}
