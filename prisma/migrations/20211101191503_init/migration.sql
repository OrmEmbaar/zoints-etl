-- CreateEnum
CREATE TYPE "ClaimOrigin" AS ENUM ('ClaimInstruction', 'StakeInstruction');

-- CreateTable
CREATE TABLE "StakeProgramSignature" (
    "id" SERIAL NOT NULL,
    "signature" TEXT NOT NULL,
    "blockTime" TIMESTAMP(3) NOT NULL,
    "slot" BIGINT NOT NULL,
    "recentBlockHash" TEXT,
    "fee" BIGINT,
    "processed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "StakeProgramSignature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Claim" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "authority" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "claimOrigin" "ClaimOrigin" NOT NULL,

    CONSTRAINT "Claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InitInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "settingsAccount" TEXT NOT NULL,
    "poolAuthority" TEXT NOT NULL,
    "rewardPool" TEXT NOT NULL,
    "zeeTokenMint" TEXT NOT NULL,
    "splTokenProgam" TEXT NOT NULL,
    "startTime" TIMESTAMP NOT NULL,
    "unbondingDuration" INTEGER NOT NULL,

    CONSTRAINT "InitInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisterEndpointInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "endpointAccount" TEXT NOT NULL,
    "endpointOwnerPubkey" TEXT NOT NULL,
    "primaryBeneficiaryAuthority" TEXT NOT NULL,
    "primaryBeneficiaryAccount" TEXT NOT NULL,
    "secondaryBeneficiaryAuthority" TEXT NOT NULL,
    "secondaryBeneficiaryAccount" TEXT NOT NULL,
    "authorityAddress" TEXT NOT NULL,
    "authorityType" SMALLINT NOT NULL,

    CONSTRAINT "RegisterEndpointInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InitStakeInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "staker" TEXT NOT NULL,
    "stakerFund" TEXT NOT NULL,
    "stakerBeneficiary" TEXT NOT NULL,
    "endpointAccount" TEXT NOT NULL,
    "stakeAccount" TEXT NOT NULL,

    CONSTRAINT "InitStakeInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StakeInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "claimId" INTEGER NOT NULL,
    "stake" BIGINT NOT NULL,
    "payer" TEXT NOT NULL,
    "staker" TEXT NOT NULL,
    "stakerBeneficiary" TEXT NOT NULL,
    "stakerFund" TEXT NOT NULL,
    "stakerZeeTokenAccount" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "endpointPrimaryBeneficiary" TEXT NOT NULL,
    "endpointSecondaryBeneficiary" TEXT NOT NULL,
    "poolAuthority" TEXT NOT NULL,
    "settings" TEXT NOT NULL,
    "stakeAccount" TEXT NOT NULL,

    CONSTRAINT "StakeInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WithdrawUnboundInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "stakeAccount" TEXT NOT NULL,
    "staker" TEXT NOT NULL,
    "stakerFund" TEXT NOT NULL,
    "stakerZeeTokenAccount" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "settings" TEXT NOT NULL,
    "poolAuthority" TEXT NOT NULL,

    CONSTRAINT "WithdrawUnboundInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClaimInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "claimId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "beneficiaryAuthority" TEXT NOT NULL,
    "beneficiaryAccount" TEXT NOT NULL,
    "authorityZeeTokenAccount" TEXT NOT NULL,
    "settings" TEXT NOT NULL,
    "poolAuthority" TEXT NOT NULL,

    CONSTRAINT "ClaimInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferEndpointInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "endpointOwnerAccount" TEXT NOT NULL,
    "endpointOwnerSigner" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "authorityAddress" TEXT NOT NULL,
    "authorityType" SMALLINT NOT NULL,

    CONSTRAINT "TransferEndpointInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChangeBeneficiariesInstruction" (
    "id" SERIAL NOT NULL,
    "signatureId" INTEGER NOT NULL,
    "payer" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "endpointOwnerAccount" TEXT NOT NULL,
    "endpointOwnerSigner" TEXT NOT NULL,
    "oldPrimaryBeneficiaryAccount" TEXT NOT NULL,
    "oldSecondaryBeneficiaryAccount" TEXT NOT NULL,
    "newPrimaryBeneficiaryAuthority" TEXT NOT NULL,
    "newPrimaryBeneficiaryAccount" TEXT NOT NULL,
    "newSecondaryBeneficiaryAuthority" TEXT NOT NULL,
    "newSecondaryBeneficiaryAccount" TEXT NOT NULL,
    "settings" TEXT NOT NULL,

    CONSTRAINT "ChangeBeneficiariesInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZeeSplSignature" (
    "id" SERIAL NOT NULL,
    "signature" TEXT NOT NULL,
    "blockTime" TIMESTAMP(3) NOT NULL,
    "slot" BIGINT NOT NULL,
    "recentBlockHash" TEXT,
    "fee" BIGINT,
    "processed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ZeeSplSignature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostTransferBalance" (
    "signatureId" INTEGER NOT NULL,
    "account" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "uiAmount" DOUBLE PRECISION,
    "uiAmountString" TEXT,

    CONSTRAINT "PostTransferBalance_pkey" PRIMARY KEY ("signatureId","account")
);

-- CreateIndex
CREATE UNIQUE INDEX "StakeProgramSignature_signature_key" ON "StakeProgramSignature"("signature");

-- CreateIndex
CREATE INDEX "StakeProgramSignature_processed_idx" ON "StakeProgramSignature"("processed");

-- CreateIndex
CREATE INDEX "StakeProgramSignature_blockTime_idx" ON "StakeProgramSignature"("blockTime");

-- CreateIndex
CREATE INDEX "Claim_destination_idx" ON "Claim"("destination");

-- CreateIndex
CREATE UNIQUE INDEX "StakeInstruction_claimId_key" ON "StakeInstruction"("claimId");

-- CreateIndex
CREATE UNIQUE INDEX "ClaimInstruction_claimId_key" ON "ClaimInstruction"("claimId");

-- CreateIndex
CREATE UNIQUE INDEX "ZeeSplSignature_signature_key" ON "ZeeSplSignature"("signature");

-- CreateIndex
CREATE INDEX "ZeeSplSignature_processed_idx" ON "ZeeSplSignature"("processed");

-- CreateIndex
CREATE INDEX "ZeeSplSignature_blockTime_idx" ON "ZeeSplSignature"("blockTime");

-- AddForeignKey
ALTER TABLE "Claim" ADD CONSTRAINT "Claim_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitInstruction" ADD CONSTRAINT "InitInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisterEndpointInstruction" ADD CONSTRAINT "RegisterEndpointInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitStakeInstruction" ADD CONSTRAINT "InitStakeInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StakeInstruction" ADD CONSTRAINT "StakeInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StakeInstruction" ADD CONSTRAINT "StakeInstruction_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WithdrawUnboundInstruction" ADD CONSTRAINT "WithdrawUnboundInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimInstruction" ADD CONSTRAINT "ClaimInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClaimInstruction" ADD CONSTRAINT "ClaimInstruction_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "Claim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferEndpointInstruction" ADD CONSTRAINT "TransferEndpointInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChangeBeneficiariesInstruction" ADD CONSTRAINT "ChangeBeneficiariesInstruction_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "StakeProgramSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTransferBalance" ADD CONSTRAINT "PostTransferBalance_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "ZeeSplSignature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
