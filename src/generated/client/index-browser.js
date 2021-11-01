
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.3.0
 * Query Engine version: 33838b0f78f1fe9052cf9a00e9761c9dc097a63c
 */
Prisma.prismaVersion = {
  client: "3.3.0",
  engine: "33838b0f78f1fe9052cf9a00e9761c9dc097a63c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.StakeProgramSignatureScalarFieldEnum = makeEnum({
  id: 'id',
  signature: 'signature',
  blockTime: 'blockTime',
  slot: 'slot',
  recentBlockHash: 'recentBlockHash',
  fee: 'fee',
  processed: 'processed'
});

exports.Prisma.ClaimScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  amount: 'amount',
  authority: 'authority',
  source: 'source',
  destination: 'destination',
  claimOrigin: 'claimOrigin'
});

exports.Prisma.InitInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  settingsAccount: 'settingsAccount',
  poolAuthority: 'poolAuthority',
  rewardPool: 'rewardPool',
  zeeTokenMint: 'zeeTokenMint',
  splTokenProgam: 'splTokenProgam',
  startTime: 'startTime',
  unbondingDuration: 'unbondingDuration'
});

exports.Prisma.RegisterEndpointInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  endpointAccount: 'endpointAccount',
  endpointOwnerPubkey: 'endpointOwnerPubkey',
  primaryBeneficiaryAuthority: 'primaryBeneficiaryAuthority',
  primaryBeneficiaryAccount: 'primaryBeneficiaryAccount',
  secondaryBeneficiaryAuthority: 'secondaryBeneficiaryAuthority',
  secondaryBeneficiaryAccount: 'secondaryBeneficiaryAccount',
  authorityAddress: 'authorityAddress',
  authorityType: 'authorityType'
});

exports.Prisma.InitStakeInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  staker: 'staker',
  stakerFund: 'stakerFund',
  stakerBeneficiary: 'stakerBeneficiary',
  endpointAccount: 'endpointAccount',
  stakeAccount: 'stakeAccount'
});

exports.Prisma.StakeInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  claimId: 'claimId',
  stake: 'stake',
  payer: 'payer',
  staker: 'staker',
  stakerBeneficiary: 'stakerBeneficiary',
  stakerFund: 'stakerFund',
  stakerZeeTokenAccount: 'stakerZeeTokenAccount',
  endpoint: 'endpoint',
  endpointPrimaryBeneficiary: 'endpointPrimaryBeneficiary',
  endpointSecondaryBeneficiary: 'endpointSecondaryBeneficiary',
  poolAuthority: 'poolAuthority',
  settings: 'settings',
  stakeAccount: 'stakeAccount'
});

exports.Prisma.WithdrawUnboundInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  stakeAccount: 'stakeAccount',
  staker: 'staker',
  stakerFund: 'stakerFund',
  stakerZeeTokenAccount: 'stakerZeeTokenAccount',
  endpoint: 'endpoint',
  settings: 'settings',
  poolAuthority: 'poolAuthority'
});

exports.Prisma.ClaimInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  claimId: 'claimId',
  payer: 'payer',
  beneficiaryAuthority: 'beneficiaryAuthority',
  beneficiaryAccount: 'beneficiaryAccount',
  authorityZeeTokenAccount: 'authorityZeeTokenAccount',
  settings: 'settings',
  poolAuthority: 'poolAuthority'
});

exports.Prisma.TransferEndpointInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  endpoint: 'endpoint',
  endpointOwnerAccount: 'endpointOwnerAccount',
  endpointOwnerSigner: 'endpointOwnerSigner',
  recipient: 'recipient',
  authorityAddress: 'authorityAddress',
  authorityType: 'authorityType'
});

exports.Prisma.ChangeBeneficiariesInstructionScalarFieldEnum = makeEnum({
  id: 'id',
  signatureId: 'signatureId',
  payer: 'payer',
  endpoint: 'endpoint',
  endpointOwnerAccount: 'endpointOwnerAccount',
  endpointOwnerSigner: 'endpointOwnerSigner',
  oldPrimaryBeneficiaryAccount: 'oldPrimaryBeneficiaryAccount',
  oldSecondaryBeneficiaryAccount: 'oldSecondaryBeneficiaryAccount',
  newPrimaryBeneficiaryAuthority: 'newPrimaryBeneficiaryAuthority',
  newPrimaryBeneficiaryAccount: 'newPrimaryBeneficiaryAccount',
  newSecondaryBeneficiaryAuthority: 'newSecondaryBeneficiaryAuthority',
  newSecondaryBeneficiaryAccount: 'newSecondaryBeneficiaryAccount',
  settings: 'settings'
});

exports.Prisma.ZeeSplSignatureScalarFieldEnum = makeEnum({
  id: 'id',
  signature: 'signature',
  blockTime: 'blockTime',
  slot: 'slot',
  recentBlockHash: 'recentBlockHash',
  fee: 'fee',
  processed: 'processed'
});

exports.Prisma.PostTransferBalanceScalarFieldEnum = makeEnum({
  signatureId: 'signatureId',
  account: 'account',
  amount: 'amount',
  uiAmount: 'uiAmount',
  uiAmountString: 'uiAmountString'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.ClaimOrigin = makeEnum({
  ClaimInstruction: 'ClaimInstruction',
  StakeInstruction: 'StakeInstruction'
});

exports.Prisma.ModelName = makeEnum({
  StakeProgramSignature: 'StakeProgramSignature',
  Claim: 'Claim',
  InitInstruction: 'InitInstruction',
  RegisterEndpointInstruction: 'RegisterEndpointInstruction',
  InitStakeInstruction: 'InitStakeInstruction',
  StakeInstruction: 'StakeInstruction',
  WithdrawUnboundInstruction: 'WithdrawUnboundInstruction',
  ClaimInstruction: 'ClaimInstruction',
  TransferEndpointInstruction: 'TransferEndpointInstruction',
  ChangeBeneficiariesInstruction: 'ChangeBeneficiariesInstruction',
  ZeeSplSignature: 'ZeeSplSignature',
  PostTransferBalance: 'PostTransferBalance'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
