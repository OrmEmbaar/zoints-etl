
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model StakeProgramSignature
 */

export type StakeProgramSignature = {
  id: number
  signature: string
  blockTime: Date
  slot: bigint
  recentBlockHash: string | null
  fee: bigint | null
  processed: boolean
}

/**
 * Model Claim
 */

export type Claim = {
  id: number
  signatureId: number
  amount: bigint
  authority: string
  source: string
  destination: string
  claimOrigin: ClaimOrigin
}

/**
 * Model InitInstruction
 */

export type InitInstruction = {
  id: number
  signatureId: number
  payer: string
  settingsAccount: string
  poolAuthority: string
  rewardPool: string
  zeeTokenMint: string
  splTokenProgam: string
  startTime: Date
  unbondingDuration: number
}

/**
 * Model RegisterEndpointInstruction
 */

export type RegisterEndpointInstruction = {
  id: number
  signatureId: number
  payer: string
  endpointAccount: string
  endpointOwnerPubkey: string
  primaryBeneficiaryAuthority: string
  primaryBeneficiaryAccount: string
  secondaryBeneficiaryAuthority: string
  secondaryBeneficiaryAccount: string
  authorityAddress: string
  authorityType: number
}

/**
 * Model InitStakeInstruction
 */

export type InitStakeInstruction = {
  id: number
  signatureId: number
  payer: string
  staker: string
  stakerFund: string
  stakerBeneficiary: string
  endpointAccount: string
  stakeAccount: string
}

/**
 * Model StakeInstruction
 */

export type StakeInstruction = {
  id: number
  signatureId: number
  claimId: number
  stake: bigint
  payer: string
  staker: string
  stakerBeneficiary: string
  stakerFund: string
  stakerZeeTokenAccount: string
  endpoint: string
  endpointPrimaryBeneficiary: string
  endpointSecondaryBeneficiary: string
  poolAuthority: string
  settings: string
  stakeAccount: string
}

/**
 * Model WithdrawUnboundInstruction
 */

export type WithdrawUnboundInstruction = {
  id: number
  signatureId: number
  payer: string
  stakeAccount: string
  staker: string
  stakerFund: string
  stakerZeeTokenAccount: string
  endpoint: string
  settings: string
  poolAuthority: string
}

/**
 * Model ClaimInstruction
 */

export type ClaimInstruction = {
  id: number
  signatureId: number
  claimId: number
  payer: string
  beneficiaryAuthority: string
  beneficiaryAccount: string
  authorityZeeTokenAccount: string
  settings: string
  poolAuthority: string
}

/**
 * Model TransferEndpointInstruction
 */

export type TransferEndpointInstruction = {
  id: number
  signatureId: number
  payer: string
  endpoint: string
  endpointOwnerAccount: string
  endpointOwnerSigner: string
  recipient: string
  authorityAddress: string
  authorityType: number
}

/**
 * Model ChangeBeneficiariesInstruction
 */

export type ChangeBeneficiariesInstruction = {
  id: number
  signatureId: number
  payer: string
  endpoint: string
  endpointOwnerAccount: string
  endpointOwnerSigner: string
  oldPrimaryBeneficiaryAccount: string
  oldSecondaryBeneficiaryAccount: string
  newPrimaryBeneficiaryAuthority: string
  newPrimaryBeneficiaryAccount: string
  newSecondaryBeneficiaryAuthority: string
  newSecondaryBeneficiaryAccount: string
  settings: string
}

/**
 * Model ZeeSplSignature
 */

export type ZeeSplSignature = {
  id: number
  signature: string
  blockTime: Date
  slot: bigint
  recentBlockHash: string | null
  fee: bigint | null
  processed: boolean
}

/**
 * Model PostTransferBalance
 */

export type PostTransferBalance = {
  signatureId: number
  account: string
  amount: bigint
  uiAmount: number | null
  uiAmountString: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ClaimOrigin: {
  ClaimInstruction: 'ClaimInstruction',
  StakeInstruction: 'StakeInstruction'
};

export type ClaimOrigin = (typeof ClaimOrigin)[keyof typeof ClaimOrigin]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StakeProgramSignatures
 * const stakeProgramSignatures = await prisma.stakeProgramSignature.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StakeProgramSignatures
   * const stakeProgramSignatures = await prisma.stakeProgramSignature.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.stakeProgramSignature`: Exposes CRUD operations for the **StakeProgramSignature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StakeProgramSignatures
    * const stakeProgramSignatures = await prisma.stakeProgramSignature.findMany()
    * ```
    */
  get stakeProgramSignature(): Prisma.StakeProgramSignatureDelegate<GlobalReject>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<GlobalReject>;

  /**
   * `prisma.initInstruction`: Exposes CRUD operations for the **InitInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InitInstructions
    * const initInstructions = await prisma.initInstruction.findMany()
    * ```
    */
  get initInstruction(): Prisma.InitInstructionDelegate<GlobalReject>;

  /**
   * `prisma.registerEndpointInstruction`: Exposes CRUD operations for the **RegisterEndpointInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegisterEndpointInstructions
    * const registerEndpointInstructions = await prisma.registerEndpointInstruction.findMany()
    * ```
    */
  get registerEndpointInstruction(): Prisma.RegisterEndpointInstructionDelegate<GlobalReject>;

  /**
   * `prisma.initStakeInstruction`: Exposes CRUD operations for the **InitStakeInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InitStakeInstructions
    * const initStakeInstructions = await prisma.initStakeInstruction.findMany()
    * ```
    */
  get initStakeInstruction(): Prisma.InitStakeInstructionDelegate<GlobalReject>;

  /**
   * `prisma.stakeInstruction`: Exposes CRUD operations for the **StakeInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StakeInstructions
    * const stakeInstructions = await prisma.stakeInstruction.findMany()
    * ```
    */
  get stakeInstruction(): Prisma.StakeInstructionDelegate<GlobalReject>;

  /**
   * `prisma.withdrawUnboundInstruction`: Exposes CRUD operations for the **WithdrawUnboundInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawUnboundInstructions
    * const withdrawUnboundInstructions = await prisma.withdrawUnboundInstruction.findMany()
    * ```
    */
  get withdrawUnboundInstruction(): Prisma.WithdrawUnboundInstructionDelegate<GlobalReject>;

  /**
   * `prisma.claimInstruction`: Exposes CRUD operations for the **ClaimInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimInstructions
    * const claimInstructions = await prisma.claimInstruction.findMany()
    * ```
    */
  get claimInstruction(): Prisma.ClaimInstructionDelegate<GlobalReject>;

  /**
   * `prisma.transferEndpointInstruction`: Exposes CRUD operations for the **TransferEndpointInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferEndpointInstructions
    * const transferEndpointInstructions = await prisma.transferEndpointInstruction.findMany()
    * ```
    */
  get transferEndpointInstruction(): Prisma.TransferEndpointInstructionDelegate<GlobalReject>;

  /**
   * `prisma.changeBeneficiariesInstruction`: Exposes CRUD operations for the **ChangeBeneficiariesInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChangeBeneficiariesInstructions
    * const changeBeneficiariesInstructions = await prisma.changeBeneficiariesInstruction.findMany()
    * ```
    */
  get changeBeneficiariesInstruction(): Prisma.ChangeBeneficiariesInstructionDelegate<GlobalReject>;

  /**
   * `prisma.zeeSplSignature`: Exposes CRUD operations for the **ZeeSplSignature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZeeSplSignatures
    * const zeeSplSignatures = await prisma.zeeSplSignature.findMany()
    * ```
    */
  get zeeSplSignature(): Prisma.ZeeSplSignatureDelegate<GlobalReject>;

  /**
   * `prisma.postTransferBalance`: Exposes CRUD operations for the **PostTransferBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTransferBalances
    * const postTransferBalances = await prisma.postTransferBalance.findMany()
    * ```
    */
  get postTransferBalance(): Prisma.PostTransferBalanceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.3.0
   * Query Engine version: 33838b0f78f1fe9052cf9a00e9761c9dc097a63c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StakeProgramSignatureCountOutputType
   */


  export type StakeProgramSignatureCountOutputType = {
    claim: number
    initInstructions: number
    registerEndpointInstructions: number
    initStakeInstruction: number
    stakeInstructions: number
    withdrawUnboundInstructions: number
    claimInstructions: number
    TransferEndpointInstruction: number
    ChangeBeneficiariesInstruction: number
  }

  export type StakeProgramSignatureCountOutputTypeSelect = {
    claim?: boolean
    initInstructions?: boolean
    registerEndpointInstructions?: boolean
    initStakeInstruction?: boolean
    stakeInstructions?: boolean
    withdrawUnboundInstructions?: boolean
    claimInstructions?: boolean
    TransferEndpointInstruction?: boolean
    ChangeBeneficiariesInstruction?: boolean
  }

  export type StakeProgramSignatureCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StakeProgramSignatureCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StakeProgramSignatureCountOutputType
    : S extends undefined
    ? never
    : S extends StakeProgramSignatureCountOutputTypeArgs
    ?'include' extends U
    ? StakeProgramSignatureCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof StakeProgramSignatureCountOutputType ?StakeProgramSignatureCountOutputType [P]
  : 
     never
  } 
    : StakeProgramSignatureCountOutputType
  : StakeProgramSignatureCountOutputType




  // Custom InputTypes

  /**
   * StakeProgramSignatureCountOutputType without action
   */
  export type StakeProgramSignatureCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignatureCountOutputType
     * 
    **/
    select?: StakeProgramSignatureCountOutputTypeSelect | null
  }



  /**
   * Count Type ZeeSplSignatureCountOutputType
   */


  export type ZeeSplSignatureCountOutputType = {
    postBalances: number
  }

  export type ZeeSplSignatureCountOutputTypeSelect = {
    postBalances?: boolean
  }

  export type ZeeSplSignatureCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ZeeSplSignatureCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ZeeSplSignatureCountOutputType
    : S extends undefined
    ? never
    : S extends ZeeSplSignatureCountOutputTypeArgs
    ?'include' extends U
    ? ZeeSplSignatureCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZeeSplSignatureCountOutputType ?ZeeSplSignatureCountOutputType [P]
  : 
     never
  } 
    : ZeeSplSignatureCountOutputType
  : ZeeSplSignatureCountOutputType




  // Custom InputTypes

  /**
   * ZeeSplSignatureCountOutputType without action
   */
  export type ZeeSplSignatureCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignatureCountOutputType
     * 
    **/
    select?: ZeeSplSignatureCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model StakeProgramSignature
   */


  export type AggregateStakeProgramSignature = {
    _count: StakeProgramSignatureCountAggregateOutputType | null
    _avg: StakeProgramSignatureAvgAggregateOutputType | null
    _sum: StakeProgramSignatureSumAggregateOutputType | null
    _min: StakeProgramSignatureMinAggregateOutputType | null
    _max: StakeProgramSignatureMaxAggregateOutputType | null
  }

  export type StakeProgramSignatureAvgAggregateOutputType = {
    id: number | null
    slot: number | null
    fee: number | null
  }

  export type StakeProgramSignatureSumAggregateOutputType = {
    id: number | null
    slot: bigint | null
    fee: bigint | null
  }

  export type StakeProgramSignatureMinAggregateOutputType = {
    id: number | null
    signature: string | null
    blockTime: Date | null
    slot: bigint | null
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean | null
  }

  export type StakeProgramSignatureMaxAggregateOutputType = {
    id: number | null
    signature: string | null
    blockTime: Date | null
    slot: bigint | null
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean | null
  }

  export type StakeProgramSignatureCountAggregateOutputType = {
    id: number
    signature: number
    blockTime: number
    slot: number
    recentBlockHash: number
    fee: number
    processed: number
    _all: number
  }


  export type StakeProgramSignatureAvgAggregateInputType = {
    id?: true
    slot?: true
    fee?: true
  }

  export type StakeProgramSignatureSumAggregateInputType = {
    id?: true
    slot?: true
    fee?: true
  }

  export type StakeProgramSignatureMinAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
  }

  export type StakeProgramSignatureMaxAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
  }

  export type StakeProgramSignatureCountAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
    _all?: true
  }

  export type StakeProgramSignatureAggregateArgs = {
    /**
     * Filter which StakeProgramSignature to aggregate.
     * 
    **/
    where?: StakeProgramSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeProgramSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeProgramSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StakeProgramSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeProgramSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeProgramSignatures.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StakeProgramSignatures
    **/
    _count?: true | StakeProgramSignatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakeProgramSignatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakeProgramSignatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeProgramSignatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeProgramSignatureMaxAggregateInputType
  }

  export type GetStakeProgramSignatureAggregateType<T extends StakeProgramSignatureAggregateArgs> = {
        [P in keyof T & keyof AggregateStakeProgramSignature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStakeProgramSignature[P]>
      : GetScalarType<T[P], AggregateStakeProgramSignature[P]>
  }


    
    
  export type StakeProgramSignatureGroupByArgs = {
    where?: StakeProgramSignatureWhereInput
    orderBy?: Enumerable<StakeProgramSignatureOrderByWithAggregationInput>
    by: Array<StakeProgramSignatureScalarFieldEnum>
    having?: StakeProgramSignatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeProgramSignatureCountAggregateInputType | true
    _avg?: StakeProgramSignatureAvgAggregateInputType
    _sum?: StakeProgramSignatureSumAggregateInputType
    _min?: StakeProgramSignatureMinAggregateInputType
    _max?: StakeProgramSignatureMaxAggregateInputType
  }


  export type StakeProgramSignatureGroupByOutputType = {
    id: number
    signature: string
    blockTime: Date
    slot: bigint
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean
    _count: StakeProgramSignatureCountAggregateOutputType | null
    _avg: StakeProgramSignatureAvgAggregateOutputType | null
    _sum: StakeProgramSignatureSumAggregateOutputType | null
    _min: StakeProgramSignatureMinAggregateOutputType | null
    _max: StakeProgramSignatureMaxAggregateOutputType | null
  }

  type GetStakeProgramSignatureGroupByPayload<T extends StakeProgramSignatureGroupByArgs> = Promise<
    Array<
      PickArray<StakeProgramSignatureGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StakeProgramSignatureGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StakeProgramSignatureGroupByOutputType[P]> 
            : GetScalarType<T[P], StakeProgramSignatureGroupByOutputType[P]>
        }
      > 
    >


  export type StakeProgramSignatureSelect = {
    id?: boolean
    signature?: boolean
    blockTime?: boolean
    slot?: boolean
    recentBlockHash?: boolean
    fee?: boolean
    processed?: boolean
    claim?: boolean | ClaimFindManyArgs
    initInstructions?: boolean | InitInstructionFindManyArgs
    registerEndpointInstructions?: boolean | RegisterEndpointInstructionFindManyArgs
    initStakeInstruction?: boolean | InitStakeInstructionFindManyArgs
    stakeInstructions?: boolean | StakeInstructionFindManyArgs
    withdrawUnboundInstructions?: boolean | WithdrawUnboundInstructionFindManyArgs
    claimInstructions?: boolean | ClaimInstructionFindManyArgs
    TransferEndpointInstruction?: boolean | TransferEndpointInstructionFindManyArgs
    ChangeBeneficiariesInstruction?: boolean | ChangeBeneficiariesInstructionFindManyArgs
    _count?: boolean | StakeProgramSignatureCountOutputTypeArgs
  }

  export type StakeProgramSignatureInclude = {
    claim?: boolean | ClaimFindManyArgs
    initInstructions?: boolean | InitInstructionFindManyArgs
    registerEndpointInstructions?: boolean | RegisterEndpointInstructionFindManyArgs
    initStakeInstruction?: boolean | InitStakeInstructionFindManyArgs
    stakeInstructions?: boolean | StakeInstructionFindManyArgs
    withdrawUnboundInstructions?: boolean | WithdrawUnboundInstructionFindManyArgs
    claimInstructions?: boolean | ClaimInstructionFindManyArgs
    TransferEndpointInstruction?: boolean | TransferEndpointInstructionFindManyArgs
    ChangeBeneficiariesInstruction?: boolean | ChangeBeneficiariesInstructionFindManyArgs
    _count?: boolean | StakeProgramSignatureCountOutputTypeArgs
  }

  export type StakeProgramSignatureGetPayload<
    S extends boolean | null | undefined | StakeProgramSignatureArgs,
    U = keyof S
      > = S extends true
        ? StakeProgramSignature
    : S extends undefined
    ? never
    : S extends StakeProgramSignatureArgs | StakeProgramSignatureFindManyArgs
    ?'include' extends U
    ? StakeProgramSignature  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'claim'
        ? Array < ClaimGetPayload<S['include'][P]>>  :
        P extends 'initInstructions'
        ? Array < InitInstructionGetPayload<S['include'][P]>>  :
        P extends 'registerEndpointInstructions'
        ? Array < RegisterEndpointInstructionGetPayload<S['include'][P]>>  :
        P extends 'initStakeInstruction'
        ? Array < InitStakeInstructionGetPayload<S['include'][P]>>  :
        P extends 'stakeInstructions'
        ? Array < StakeInstructionGetPayload<S['include'][P]>>  :
        P extends 'withdrawUnboundInstructions'
        ? Array < WithdrawUnboundInstructionGetPayload<S['include'][P]>>  :
        P extends 'claimInstructions'
        ? Array < ClaimInstructionGetPayload<S['include'][P]>>  :
        P extends 'TransferEndpointInstruction'
        ? Array < TransferEndpointInstructionGetPayload<S['include'][P]>>  :
        P extends 'ChangeBeneficiariesInstruction'
        ? Array < ChangeBeneficiariesInstructionGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? StakeProgramSignatureCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof StakeProgramSignature ?StakeProgramSignature [P]
  : 
          P extends 'claim'
        ? Array < ClaimGetPayload<S['select'][P]>>  :
        P extends 'initInstructions'
        ? Array < InitInstructionGetPayload<S['select'][P]>>  :
        P extends 'registerEndpointInstructions'
        ? Array < RegisterEndpointInstructionGetPayload<S['select'][P]>>  :
        P extends 'initStakeInstruction'
        ? Array < InitStakeInstructionGetPayload<S['select'][P]>>  :
        P extends 'stakeInstructions'
        ? Array < StakeInstructionGetPayload<S['select'][P]>>  :
        P extends 'withdrawUnboundInstructions'
        ? Array < WithdrawUnboundInstructionGetPayload<S['select'][P]>>  :
        P extends 'claimInstructions'
        ? Array < ClaimInstructionGetPayload<S['select'][P]>>  :
        P extends 'TransferEndpointInstruction'
        ? Array < TransferEndpointInstructionGetPayload<S['select'][P]>>  :
        P extends 'ChangeBeneficiariesInstruction'
        ? Array < ChangeBeneficiariesInstructionGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? StakeProgramSignatureCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : StakeProgramSignature
  : StakeProgramSignature


  type StakeProgramSignatureCountArgs = Merge<
    Omit<StakeProgramSignatureFindManyArgs, 'select' | 'include'> & {
      select?: StakeProgramSignatureCountAggregateInputType | true
    }
  >

  export interface StakeProgramSignatureDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one StakeProgramSignature that matches the filter.
     * @param {StakeProgramSignatureFindUniqueArgs} args - Arguments to find a StakeProgramSignature
     * @example
     * // Get one StakeProgramSignature
     * const stakeProgramSignature = await prisma.stakeProgramSignature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StakeProgramSignatureFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StakeProgramSignatureFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StakeProgramSignature'> extends True ? CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>> : CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>

    /**
     * Find the first StakeProgramSignature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureFindFirstArgs} args - Arguments to find a StakeProgramSignature
     * @example
     * // Get one StakeProgramSignature
     * const stakeProgramSignature = await prisma.stakeProgramSignature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StakeProgramSignatureFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StakeProgramSignatureFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StakeProgramSignature'> extends True ? CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>> : CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>

    /**
     * Find zero or more StakeProgramSignatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StakeProgramSignatures
     * const stakeProgramSignatures = await prisma.stakeProgramSignature.findMany()
     * 
     * // Get first 10 StakeProgramSignatures
     * const stakeProgramSignatures = await prisma.stakeProgramSignature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeProgramSignatureWithIdOnly = await prisma.stakeProgramSignature.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StakeProgramSignatureFindManyArgs>(
      args?: SelectSubset<T, StakeProgramSignatureFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<StakeProgramSignature>>, PrismaPromise<Array<StakeProgramSignatureGetPayload<T>>>>

    /**
     * Create a StakeProgramSignature.
     * @param {StakeProgramSignatureCreateArgs} args - Arguments to create a StakeProgramSignature.
     * @example
     * // Create one StakeProgramSignature
     * const StakeProgramSignature = await prisma.stakeProgramSignature.create({
     *   data: {
     *     // ... data to create a StakeProgramSignature
     *   }
     * })
     * 
    **/
    create<T extends StakeProgramSignatureCreateArgs>(
      args: SelectSubset<T, StakeProgramSignatureCreateArgs>
    ): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>>

    /**
     * Create many StakeProgramSignatures.
     *     @param {StakeProgramSignatureCreateManyArgs} args - Arguments to create many StakeProgramSignatures.
     *     @example
     *     // Create many StakeProgramSignatures
     *     const stakeProgramSignature = await prisma.stakeProgramSignature.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StakeProgramSignatureCreateManyArgs>(
      args?: SelectSubset<T, StakeProgramSignatureCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StakeProgramSignature.
     * @param {StakeProgramSignatureDeleteArgs} args - Arguments to delete one StakeProgramSignature.
     * @example
     * // Delete one StakeProgramSignature
     * const StakeProgramSignature = await prisma.stakeProgramSignature.delete({
     *   where: {
     *     // ... filter to delete one StakeProgramSignature
     *   }
     * })
     * 
    **/
    delete<T extends StakeProgramSignatureDeleteArgs>(
      args: SelectSubset<T, StakeProgramSignatureDeleteArgs>
    ): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>>

    /**
     * Update one StakeProgramSignature.
     * @param {StakeProgramSignatureUpdateArgs} args - Arguments to update one StakeProgramSignature.
     * @example
     * // Update one StakeProgramSignature
     * const stakeProgramSignature = await prisma.stakeProgramSignature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StakeProgramSignatureUpdateArgs>(
      args: SelectSubset<T, StakeProgramSignatureUpdateArgs>
    ): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>>

    /**
     * Delete zero or more StakeProgramSignatures.
     * @param {StakeProgramSignatureDeleteManyArgs} args - Arguments to filter StakeProgramSignatures to delete.
     * @example
     * // Delete a few StakeProgramSignatures
     * const { count } = await prisma.stakeProgramSignature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StakeProgramSignatureDeleteManyArgs>(
      args?: SelectSubset<T, StakeProgramSignatureDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StakeProgramSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StakeProgramSignatures
     * const stakeProgramSignature = await prisma.stakeProgramSignature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StakeProgramSignatureUpdateManyArgs>(
      args: SelectSubset<T, StakeProgramSignatureUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StakeProgramSignature.
     * @param {StakeProgramSignatureUpsertArgs} args - Arguments to update or create a StakeProgramSignature.
     * @example
     * // Update or create a StakeProgramSignature
     * const stakeProgramSignature = await prisma.stakeProgramSignature.upsert({
     *   create: {
     *     // ... data to create a StakeProgramSignature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StakeProgramSignature we want to update
     *   }
     * })
    **/
    upsert<T extends StakeProgramSignatureUpsertArgs>(
      args: SelectSubset<T, StakeProgramSignatureUpsertArgs>
    ): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature>, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T>>>

    /**
     * Count the number of StakeProgramSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureCountArgs} args - Arguments to filter StakeProgramSignatures to count.
     * @example
     * // Count the number of StakeProgramSignatures
     * const count = await prisma.stakeProgramSignature.count({
     *   where: {
     *     // ... the filter for the StakeProgramSignatures we want to count
     *   }
     * })
    **/
    count<T extends StakeProgramSignatureCountArgs>(
      args?: Subset<T, StakeProgramSignatureCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeProgramSignatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StakeProgramSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StakeProgramSignatureAggregateArgs>(args: Subset<T, StakeProgramSignatureAggregateArgs>): PrismaPromise<GetStakeProgramSignatureAggregateType<T>>

    /**
     * Group by StakeProgramSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeProgramSignatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StakeProgramSignatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StakeProgramSignatureGroupByArgs['orderBy'] }
        : { orderBy?: StakeProgramSignatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StakeProgramSignatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeProgramSignatureGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for StakeProgramSignature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StakeProgramSignatureClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    claim<T extends ClaimFindManyArgs = {}>(args?: Subset<T, ClaimFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Claim>>, PrismaPromise<Array<ClaimGetPayload<T>>>>;

    initInstructions<T extends InitInstructionFindManyArgs = {}>(args?: Subset<T, InitInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InitInstruction>>, PrismaPromise<Array<InitInstructionGetPayload<T>>>>;

    registerEndpointInstructions<T extends RegisterEndpointInstructionFindManyArgs = {}>(args?: Subset<T, RegisterEndpointInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RegisterEndpointInstruction>>, PrismaPromise<Array<RegisterEndpointInstructionGetPayload<T>>>>;

    initStakeInstruction<T extends InitStakeInstructionFindManyArgs = {}>(args?: Subset<T, InitStakeInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InitStakeInstruction>>, PrismaPromise<Array<InitStakeInstructionGetPayload<T>>>>;

    stakeInstructions<T extends StakeInstructionFindManyArgs = {}>(args?: Subset<T, StakeInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<StakeInstruction>>, PrismaPromise<Array<StakeInstructionGetPayload<T>>>>;

    withdrawUnboundInstructions<T extends WithdrawUnboundInstructionFindManyArgs = {}>(args?: Subset<T, WithdrawUnboundInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<WithdrawUnboundInstruction>>, PrismaPromise<Array<WithdrawUnboundInstructionGetPayload<T>>>>;

    claimInstructions<T extends ClaimInstructionFindManyArgs = {}>(args?: Subset<T, ClaimInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ClaimInstruction>>, PrismaPromise<Array<ClaimInstructionGetPayload<T>>>>;

    TransferEndpointInstruction<T extends TransferEndpointInstructionFindManyArgs = {}>(args?: Subset<T, TransferEndpointInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TransferEndpointInstruction>>, PrismaPromise<Array<TransferEndpointInstructionGetPayload<T>>>>;

    ChangeBeneficiariesInstruction<T extends ChangeBeneficiariesInstructionFindManyArgs = {}>(args?: Subset<T, ChangeBeneficiariesInstructionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ChangeBeneficiariesInstruction>>, PrismaPromise<Array<ChangeBeneficiariesInstructionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * StakeProgramSignature findUnique
   */
  export type StakeProgramSignatureFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * Throw an Error if a StakeProgramSignature can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which StakeProgramSignature to fetch.
     * 
    **/
    where: StakeProgramSignatureWhereUniqueInput
  }


  /**
   * StakeProgramSignature findFirst
   */
  export type StakeProgramSignatureFindFirstArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * Throw an Error if a StakeProgramSignature can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which StakeProgramSignature to fetch.
     * 
    **/
    where?: StakeProgramSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeProgramSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeProgramSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StakeProgramSignatures.
     * 
    **/
    cursor?: StakeProgramSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeProgramSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeProgramSignatures.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StakeProgramSignatures.
     * 
    **/
    distinct?: Enumerable<StakeProgramSignatureScalarFieldEnum>
  }


  /**
   * StakeProgramSignature findMany
   */
  export type StakeProgramSignatureFindManyArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * Filter, which StakeProgramSignatures to fetch.
     * 
    **/
    where?: StakeProgramSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeProgramSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeProgramSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StakeProgramSignatures.
     * 
    **/
    cursor?: StakeProgramSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeProgramSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeProgramSignatures.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StakeProgramSignatureScalarFieldEnum>
  }


  /**
   * StakeProgramSignature create
   */
  export type StakeProgramSignatureCreateArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * The data needed to create a StakeProgramSignature.
     * 
    **/
    data: XOR<StakeProgramSignatureCreateInput, StakeProgramSignatureUncheckedCreateInput>
  }


  /**
   * StakeProgramSignature createMany
   */
  export type StakeProgramSignatureCreateManyArgs = {
    data: Enumerable<StakeProgramSignatureCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StakeProgramSignature update
   */
  export type StakeProgramSignatureUpdateArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * The data needed to update a StakeProgramSignature.
     * 
    **/
    data: XOR<StakeProgramSignatureUpdateInput, StakeProgramSignatureUncheckedUpdateInput>
    /**
     * Choose, which StakeProgramSignature to update.
     * 
    **/
    where: StakeProgramSignatureWhereUniqueInput
  }


  /**
   * StakeProgramSignature updateMany
   */
  export type StakeProgramSignatureUpdateManyArgs = {
    data: XOR<StakeProgramSignatureUpdateManyMutationInput, StakeProgramSignatureUncheckedUpdateManyInput>
    where?: StakeProgramSignatureWhereInput
  }


  /**
   * StakeProgramSignature upsert
   */
  export type StakeProgramSignatureUpsertArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * The filter to search for the StakeProgramSignature to update in case it exists.
     * 
    **/
    where: StakeProgramSignatureWhereUniqueInput
    /**
     * In case the StakeProgramSignature found by the `where` argument doesn't exist, create a new StakeProgramSignature with this data.
     * 
    **/
    create: XOR<StakeProgramSignatureCreateInput, StakeProgramSignatureUncheckedCreateInput>
    /**
     * In case the StakeProgramSignature was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StakeProgramSignatureUpdateInput, StakeProgramSignatureUncheckedUpdateInput>
  }


  /**
   * StakeProgramSignature delete
   */
  export type StakeProgramSignatureDeleteArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
    /**
     * Filter which StakeProgramSignature to delete.
     * 
    **/
    where: StakeProgramSignatureWhereUniqueInput
  }


  /**
   * StakeProgramSignature deleteMany
   */
  export type StakeProgramSignatureDeleteManyArgs = {
    where?: StakeProgramSignatureWhereInput
  }


  /**
   * StakeProgramSignature without action
   */
  export type StakeProgramSignatureArgs = {
    /**
     * Select specific fields to fetch from the StakeProgramSignature
     * 
    **/
    select?: StakeProgramSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeProgramSignatureInclude | null
  }



  /**
   * Model Claim
   */


  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    amount: number | null
  }

  export type ClaimSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    amount: bigint | null
  }

  export type ClaimMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    amount: bigint | null
    authority: string | null
    source: string | null
    destination: string | null
    claimOrigin: ClaimOrigin | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    amount: bigint | null
    authority: string | null
    source: string | null
    destination: string | null
    claimOrigin: ClaimOrigin | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    signatureId: number
    amount: number
    authority: number
    source: number
    destination: number
    claimOrigin: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    id?: true
    signatureId?: true
    amount?: true
  }

  export type ClaimSumAggregateInputType = {
    id?: true
    signatureId?: true
    amount?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    signatureId?: true
    amount?: true
    authority?: true
    source?: true
    destination?: true
    claimOrigin?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    signatureId?: true
    amount?: true
    authority?: true
    source?: true
    destination?: true
    claimOrigin?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    signatureId?: true
    amount?: true
    authority?: true
    source?: true
    destination?: true
    claimOrigin?: true
    _all?: true
  }

  export type ClaimAggregateArgs = {
    /**
     * Filter which Claim to aggregate.
     * 
    **/
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }


    
    
  export type ClaimGroupByArgs = {
    where?: ClaimWhereInput
    orderBy?: Enumerable<ClaimOrderByWithAggregationInput>
    by: Array<ClaimScalarFieldEnum>
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }


  export type ClaimGroupByOutputType = {
    id: number
    signatureId: number
    amount: bigint
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Promise<
    Array<
      PickArray<ClaimGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ClaimGroupByOutputType[P]> 
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      > 
    >


  export type ClaimSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    amount?: boolean
    authority?: boolean
    source?: boolean
    destination?: boolean
    claimOrigin?: boolean
    claimInstruction?: boolean | ClaimInstructionArgs
    stakeInstruction?: boolean | StakeInstructionArgs
  }

  export type ClaimInclude = {
    signature?: boolean | StakeProgramSignatureArgs
    claimInstruction?: boolean | ClaimInstructionArgs
    stakeInstruction?: boolean | StakeInstructionArgs
  }

  export type ClaimGetPayload<
    S extends boolean | null | undefined | ClaimArgs,
    U = keyof S
      > = S extends true
        ? Claim
    : S extends undefined
    ? never
    : S extends ClaimArgs | ClaimFindManyArgs
    ?'include' extends U
    ? Claim  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> :
        P extends 'claimInstruction'
        ? ClaimInstructionGetPayload<S['include'][P]> | null :
        P extends 'stakeInstruction'
        ? StakeInstructionGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Claim ?Claim [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> :
        P extends 'claimInstruction'
        ? ClaimInstructionGetPayload<S['select'][P]> | null :
        P extends 'stakeInstruction'
        ? StakeInstructionGetPayload<S['select'][P]> | null : never
  } 
    : Claim
  : Claim


  type ClaimCountArgs = Merge<
    Omit<ClaimFindManyArgs, 'select' | 'include'> & {
      select?: ClaimCountAggregateInputType | true
    }
  >

  export interface ClaimDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClaimFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClaimFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Claim'> extends True ? CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>> : CheckSelect<T, Prisma__ClaimClient<Claim | null >, Prisma__ClaimClient<ClaimGetPayload<T> | null >>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClaimFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClaimFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Claim'> extends True ? CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>> : CheckSelect<T, Prisma__ClaimClient<Claim | null >, Prisma__ClaimClient<ClaimGetPayload<T> | null >>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClaimFindManyArgs>(
      args?: SelectSubset<T, ClaimFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Claim>>, PrismaPromise<Array<ClaimGetPayload<T>>>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
    **/
    create<T extends ClaimCreateArgs>(
      args: SelectSubset<T, ClaimCreateArgs>
    ): CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>>

    /**
     * Create many Claims.
     *     @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     *     @example
     *     // Create many Claims
     *     const claim = await prisma.claim.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClaimCreateManyArgs>(
      args?: SelectSubset<T, ClaimCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
    **/
    delete<T extends ClaimDeleteArgs>(
      args: SelectSubset<T, ClaimDeleteArgs>
    ): CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClaimUpdateArgs>(
      args: SelectSubset<T, ClaimUpdateArgs>
    ): CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClaimDeleteManyArgs>(
      args?: SelectSubset<T, ClaimDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClaimUpdateManyArgs>(
      args: SelectSubset<T, ClaimUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
    **/
    upsert<T extends ClaimUpsertArgs>(
      args: SelectSubset<T, ClaimUpsertArgs>
    ): CheckSelect<T, Prisma__ClaimClient<Claim>, Prisma__ClaimClient<ClaimGetPayload<T>>>

    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClaimClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    claimInstruction<T extends ClaimInstructionArgs = {}>(args?: Subset<T, ClaimInstructionArgs>): CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction | null >, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T> | null >>;

    stakeInstruction<T extends StakeInstructionArgs = {}>(args?: Subset<T, StakeInstructionArgs>): CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction | null >, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * Throw an Error if a Claim can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Claim to fetch.
     * 
    **/
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * Throw an Error if a Claim can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Claim to fetch.
     * 
    **/
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     * 
    **/
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     * 
    **/
    distinct?: Enumerable<ClaimScalarFieldEnum>
  }


  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * Filter, which Claims to fetch.
     * 
    **/
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     * 
    **/
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClaimScalarFieldEnum>
  }


  /**
   * Claim create
   */
  export type ClaimCreateArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * The data needed to create a Claim.
     * 
    **/
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }


  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs = {
    data: Enumerable<ClaimCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Claim update
   */
  export type ClaimUpdateArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * The data needed to update a Claim.
     * 
    **/
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     * 
    **/
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs = {
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    where?: ClaimWhereInput
  }


  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * The filter to search for the Claim to update in case it exists.
     * 
    **/
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     * 
    **/
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }


  /**
   * Claim delete
   */
  export type ClaimDeleteArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
    /**
     * Filter which Claim to delete.
     * 
    **/
    where: ClaimWhereUniqueInput
  }


  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs = {
    where?: ClaimWhereInput
  }


  /**
   * Claim without action
   */
  export type ClaimArgs = {
    /**
     * Select specific fields to fetch from the Claim
     * 
    **/
    select?: ClaimSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInclude | null
  }



  /**
   * Model InitInstruction
   */


  export type AggregateInitInstruction = {
    _count: InitInstructionCountAggregateOutputType | null
    _avg: InitInstructionAvgAggregateOutputType | null
    _sum: InitInstructionSumAggregateOutputType | null
    _min: InitInstructionMinAggregateOutputType | null
    _max: InitInstructionMaxAggregateOutputType | null
  }

  export type InitInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    unbondingDuration: number | null
  }

  export type InitInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    unbondingDuration: number | null
  }

  export type InitInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    settingsAccount: string | null
    poolAuthority: string | null
    rewardPool: string | null
    zeeTokenMint: string | null
    splTokenProgam: string | null
    startTime: Date | null
    unbondingDuration: number | null
  }

  export type InitInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    settingsAccount: string | null
    poolAuthority: string | null
    rewardPool: string | null
    zeeTokenMint: string | null
    splTokenProgam: string | null
    startTime: Date | null
    unbondingDuration: number | null
  }

  export type InitInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    settingsAccount: number
    poolAuthority: number
    rewardPool: number
    zeeTokenMint: number
    splTokenProgam: number
    startTime: number
    unbondingDuration: number
    _all: number
  }


  export type InitInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
    unbondingDuration?: true
  }

  export type InitInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
    unbondingDuration?: true
  }

  export type InitInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    settingsAccount?: true
    poolAuthority?: true
    rewardPool?: true
    zeeTokenMint?: true
    splTokenProgam?: true
    startTime?: true
    unbondingDuration?: true
  }

  export type InitInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    settingsAccount?: true
    poolAuthority?: true
    rewardPool?: true
    zeeTokenMint?: true
    splTokenProgam?: true
    startTime?: true
    unbondingDuration?: true
  }

  export type InitInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    settingsAccount?: true
    poolAuthority?: true
    rewardPool?: true
    zeeTokenMint?: true
    splTokenProgam?: true
    startTime?: true
    unbondingDuration?: true
    _all?: true
  }

  export type InitInstructionAggregateArgs = {
    /**
     * Filter which InitInstruction to aggregate.
     * 
    **/
    where?: InitInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InitInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InitInstructions
    **/
    _count?: true | InitInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InitInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InitInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InitInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InitInstructionMaxAggregateInputType
  }

  export type GetInitInstructionAggregateType<T extends InitInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateInitInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInitInstruction[P]>
      : GetScalarType<T[P], AggregateInitInstruction[P]>
  }


    
    
  export type InitInstructionGroupByArgs = {
    where?: InitInstructionWhereInput
    orderBy?: Enumerable<InitInstructionOrderByWithAggregationInput>
    by: Array<InitInstructionScalarFieldEnum>
    having?: InitInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InitInstructionCountAggregateInputType | true
    _avg?: InitInstructionAvgAggregateInputType
    _sum?: InitInstructionSumAggregateInputType
    _min?: InitInstructionMinAggregateInputType
    _max?: InitInstructionMaxAggregateInputType
  }


  export type InitInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date
    unbondingDuration: number
    _count: InitInstructionCountAggregateOutputType | null
    _avg: InitInstructionAvgAggregateOutputType | null
    _sum: InitInstructionSumAggregateOutputType | null
    _min: InitInstructionMinAggregateOutputType | null
    _max: InitInstructionMaxAggregateOutputType | null
  }

  type GetInitInstructionGroupByPayload<T extends InitInstructionGroupByArgs> = Promise<
    Array<
      PickArray<InitInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof InitInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], InitInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], InitInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type InitInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    settingsAccount?: boolean
    poolAuthority?: boolean
    rewardPool?: boolean
    zeeTokenMint?: boolean
    splTokenProgam?: boolean
    startTime?: boolean
    unbondingDuration?: boolean
  }

  export type InitInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type InitInstructionGetPayload<
    S extends boolean | null | undefined | InitInstructionArgs,
    U = keyof S
      > = S extends true
        ? InitInstruction
    : S extends undefined
    ? never
    : S extends InitInstructionArgs | InitInstructionFindManyArgs
    ?'include' extends U
    ? InitInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof InitInstruction ?InitInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : InitInstruction
  : InitInstruction


  type InitInstructionCountArgs = Merge<
    Omit<InitInstructionFindManyArgs, 'select' | 'include'> & {
      select?: InitInstructionCountAggregateInputType | true
    }
  >

  export interface InitInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InitInstruction that matches the filter.
     * @param {InitInstructionFindUniqueArgs} args - Arguments to find a InitInstruction
     * @example
     * // Get one InitInstruction
     * const initInstruction = await prisma.initInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InitInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InitInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InitInstruction'> extends True ? CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>> : CheckSelect<T, Prisma__InitInstructionClient<InitInstruction | null >, Prisma__InitInstructionClient<InitInstructionGetPayload<T> | null >>

    /**
     * Find the first InitInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionFindFirstArgs} args - Arguments to find a InitInstruction
     * @example
     * // Get one InitInstruction
     * const initInstruction = await prisma.initInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InitInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InitInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InitInstruction'> extends True ? CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>> : CheckSelect<T, Prisma__InitInstructionClient<InitInstruction | null >, Prisma__InitInstructionClient<InitInstructionGetPayload<T> | null >>

    /**
     * Find zero or more InitInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InitInstructions
     * const initInstructions = await prisma.initInstruction.findMany()
     * 
     * // Get first 10 InitInstructions
     * const initInstructions = await prisma.initInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const initInstructionWithIdOnly = await prisma.initInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InitInstructionFindManyArgs>(
      args?: SelectSubset<T, InitInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InitInstruction>>, PrismaPromise<Array<InitInstructionGetPayload<T>>>>

    /**
     * Create a InitInstruction.
     * @param {InitInstructionCreateArgs} args - Arguments to create a InitInstruction.
     * @example
     * // Create one InitInstruction
     * const InitInstruction = await prisma.initInstruction.create({
     *   data: {
     *     // ... data to create a InitInstruction
     *   }
     * })
     * 
    **/
    create<T extends InitInstructionCreateArgs>(
      args: SelectSubset<T, InitInstructionCreateArgs>
    ): CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>>

    /**
     * Create many InitInstructions.
     *     @param {InitInstructionCreateManyArgs} args - Arguments to create many InitInstructions.
     *     @example
     *     // Create many InitInstructions
     *     const initInstruction = await prisma.initInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InitInstructionCreateManyArgs>(
      args?: SelectSubset<T, InitInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InitInstruction.
     * @param {InitInstructionDeleteArgs} args - Arguments to delete one InitInstruction.
     * @example
     * // Delete one InitInstruction
     * const InitInstruction = await prisma.initInstruction.delete({
     *   where: {
     *     // ... filter to delete one InitInstruction
     *   }
     * })
     * 
    **/
    delete<T extends InitInstructionDeleteArgs>(
      args: SelectSubset<T, InitInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>>

    /**
     * Update one InitInstruction.
     * @param {InitInstructionUpdateArgs} args - Arguments to update one InitInstruction.
     * @example
     * // Update one InitInstruction
     * const initInstruction = await prisma.initInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InitInstructionUpdateArgs>(
      args: SelectSubset<T, InitInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>>

    /**
     * Delete zero or more InitInstructions.
     * @param {InitInstructionDeleteManyArgs} args - Arguments to filter InitInstructions to delete.
     * @example
     * // Delete a few InitInstructions
     * const { count } = await prisma.initInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InitInstructionDeleteManyArgs>(
      args?: SelectSubset<T, InitInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InitInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InitInstructions
     * const initInstruction = await prisma.initInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InitInstructionUpdateManyArgs>(
      args: SelectSubset<T, InitInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InitInstruction.
     * @param {InitInstructionUpsertArgs} args - Arguments to update or create a InitInstruction.
     * @example
     * // Update or create a InitInstruction
     * const initInstruction = await prisma.initInstruction.upsert({
     *   create: {
     *     // ... data to create a InitInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InitInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends InitInstructionUpsertArgs>(
      args: SelectSubset<T, InitInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__InitInstructionClient<InitInstruction>, Prisma__InitInstructionClient<InitInstructionGetPayload<T>>>

    /**
     * Count the number of InitInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionCountArgs} args - Arguments to filter InitInstructions to count.
     * @example
     * // Count the number of InitInstructions
     * const count = await prisma.initInstruction.count({
     *   where: {
     *     // ... the filter for the InitInstructions we want to count
     *   }
     * })
    **/
    count<T extends InitInstructionCountArgs>(
      args?: Subset<T, InitInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InitInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InitInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InitInstructionAggregateArgs>(args: Subset<T, InitInstructionAggregateArgs>): PrismaPromise<GetInitInstructionAggregateType<T>>

    /**
     * Group by InitInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InitInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InitInstructionGroupByArgs['orderBy'] }
        : { orderBy?: InitInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InitInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInitInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InitInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InitInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * InitInstruction findUnique
   */
  export type InitInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * Throw an Error if a InitInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which InitInstruction to fetch.
     * 
    **/
    where: InitInstructionWhereUniqueInput
  }


  /**
   * InitInstruction findFirst
   */
  export type InitInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * Throw an Error if a InitInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which InitInstruction to fetch.
     * 
    **/
    where?: InitInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InitInstructions.
     * 
    **/
    cursor?: InitInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InitInstructions.
     * 
    **/
    distinct?: Enumerable<InitInstructionScalarFieldEnum>
  }


  /**
   * InitInstruction findMany
   */
  export type InitInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * Filter, which InitInstructions to fetch.
     * 
    **/
    where?: InitInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InitInstructions.
     * 
    **/
    cursor?: InitInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InitInstructionScalarFieldEnum>
  }


  /**
   * InitInstruction create
   */
  export type InitInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * The data needed to create a InitInstruction.
     * 
    **/
    data: XOR<InitInstructionCreateInput, InitInstructionUncheckedCreateInput>
  }


  /**
   * InitInstruction createMany
   */
  export type InitInstructionCreateManyArgs = {
    data: Enumerable<InitInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InitInstruction update
   */
  export type InitInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * The data needed to update a InitInstruction.
     * 
    **/
    data: XOR<InitInstructionUpdateInput, InitInstructionUncheckedUpdateInput>
    /**
     * Choose, which InitInstruction to update.
     * 
    **/
    where: InitInstructionWhereUniqueInput
  }


  /**
   * InitInstruction updateMany
   */
  export type InitInstructionUpdateManyArgs = {
    data: XOR<InitInstructionUpdateManyMutationInput, InitInstructionUncheckedUpdateManyInput>
    where?: InitInstructionWhereInput
  }


  /**
   * InitInstruction upsert
   */
  export type InitInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * The filter to search for the InitInstruction to update in case it exists.
     * 
    **/
    where: InitInstructionWhereUniqueInput
    /**
     * In case the InitInstruction found by the `where` argument doesn't exist, create a new InitInstruction with this data.
     * 
    **/
    create: XOR<InitInstructionCreateInput, InitInstructionUncheckedCreateInput>
    /**
     * In case the InitInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InitInstructionUpdateInput, InitInstructionUncheckedUpdateInput>
  }


  /**
   * InitInstruction delete
   */
  export type InitInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
    /**
     * Filter which InitInstruction to delete.
     * 
    **/
    where: InitInstructionWhereUniqueInput
  }


  /**
   * InitInstruction deleteMany
   */
  export type InitInstructionDeleteManyArgs = {
    where?: InitInstructionWhereInput
  }


  /**
   * InitInstruction without action
   */
  export type InitInstructionArgs = {
    /**
     * Select specific fields to fetch from the InitInstruction
     * 
    **/
    select?: InitInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitInstructionInclude | null
  }



  /**
   * Model RegisterEndpointInstruction
   */


  export type AggregateRegisterEndpointInstruction = {
    _count: RegisterEndpointInstructionCountAggregateOutputType | null
    _avg: RegisterEndpointInstructionAvgAggregateOutputType | null
    _sum: RegisterEndpointInstructionSumAggregateOutputType | null
    _min: RegisterEndpointInstructionMinAggregateOutputType | null
    _max: RegisterEndpointInstructionMaxAggregateOutputType | null
  }

  export type RegisterEndpointInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    authorityType: number | null
  }

  export type RegisterEndpointInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    authorityType: number | null
  }

  export type RegisterEndpointInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpointAccount: string | null
    endpointOwnerPubkey: string | null
    primaryBeneficiaryAuthority: string | null
    primaryBeneficiaryAccount: string | null
    secondaryBeneficiaryAuthority: string | null
    secondaryBeneficiaryAccount: string | null
    authorityAddress: string | null
    authorityType: number | null
  }

  export type RegisterEndpointInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpointAccount: string | null
    endpointOwnerPubkey: string | null
    primaryBeneficiaryAuthority: string | null
    primaryBeneficiaryAccount: string | null
    secondaryBeneficiaryAuthority: string | null
    secondaryBeneficiaryAccount: string | null
    authorityAddress: string | null
    authorityType: number | null
  }

  export type RegisterEndpointInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    endpointAccount: number
    endpointOwnerPubkey: number
    primaryBeneficiaryAuthority: number
    primaryBeneficiaryAccount: number
    secondaryBeneficiaryAuthority: number
    secondaryBeneficiaryAccount: number
    authorityAddress: number
    authorityType: number
    _all: number
  }


  export type RegisterEndpointInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
    authorityType?: true
  }

  export type RegisterEndpointInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
    authorityType?: true
  }

  export type RegisterEndpointInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpointAccount?: true
    endpointOwnerPubkey?: true
    primaryBeneficiaryAuthority?: true
    primaryBeneficiaryAccount?: true
    secondaryBeneficiaryAuthority?: true
    secondaryBeneficiaryAccount?: true
    authorityAddress?: true
    authorityType?: true
  }

  export type RegisterEndpointInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpointAccount?: true
    endpointOwnerPubkey?: true
    primaryBeneficiaryAuthority?: true
    primaryBeneficiaryAccount?: true
    secondaryBeneficiaryAuthority?: true
    secondaryBeneficiaryAccount?: true
    authorityAddress?: true
    authorityType?: true
  }

  export type RegisterEndpointInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpointAccount?: true
    endpointOwnerPubkey?: true
    primaryBeneficiaryAuthority?: true
    primaryBeneficiaryAccount?: true
    secondaryBeneficiaryAuthority?: true
    secondaryBeneficiaryAccount?: true
    authorityAddress?: true
    authorityType?: true
    _all?: true
  }

  export type RegisterEndpointInstructionAggregateArgs = {
    /**
     * Filter which RegisterEndpointInstruction to aggregate.
     * 
    **/
    where?: RegisterEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RegisterEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RegisterEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterEndpointInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegisterEndpointInstructions
    **/
    _count?: true | RegisterEndpointInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegisterEndpointInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegisterEndpointInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisterEndpointInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisterEndpointInstructionMaxAggregateInputType
  }

  export type GetRegisterEndpointInstructionAggregateType<T extends RegisterEndpointInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisterEndpointInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisterEndpointInstruction[P]>
      : GetScalarType<T[P], AggregateRegisterEndpointInstruction[P]>
  }


    
    
  export type RegisterEndpointInstructionGroupByArgs = {
    where?: RegisterEndpointInstructionWhereInput
    orderBy?: Enumerable<RegisterEndpointInstructionOrderByWithAggregationInput>
    by: Array<RegisterEndpointInstructionScalarFieldEnum>
    having?: RegisterEndpointInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisterEndpointInstructionCountAggregateInputType | true
    _avg?: RegisterEndpointInstructionAvgAggregateInputType
    _sum?: RegisterEndpointInstructionSumAggregateInputType
    _min?: RegisterEndpointInstructionMinAggregateInputType
    _max?: RegisterEndpointInstructionMaxAggregateInputType
  }


  export type RegisterEndpointInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
    _count: RegisterEndpointInstructionCountAggregateOutputType | null
    _avg: RegisterEndpointInstructionAvgAggregateOutputType | null
    _sum: RegisterEndpointInstructionSumAggregateOutputType | null
    _min: RegisterEndpointInstructionMinAggregateOutputType | null
    _max: RegisterEndpointInstructionMaxAggregateOutputType | null
  }

  type GetRegisterEndpointInstructionGroupByPayload<T extends RegisterEndpointInstructionGroupByArgs> = Promise<
    Array<
      PickArray<RegisterEndpointInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RegisterEndpointInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RegisterEndpointInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], RegisterEndpointInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type RegisterEndpointInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    endpointAccount?: boolean
    endpointOwnerPubkey?: boolean
    primaryBeneficiaryAuthority?: boolean
    primaryBeneficiaryAccount?: boolean
    secondaryBeneficiaryAuthority?: boolean
    secondaryBeneficiaryAccount?: boolean
    authorityAddress?: boolean
    authorityType?: boolean
  }

  export type RegisterEndpointInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type RegisterEndpointInstructionGetPayload<
    S extends boolean | null | undefined | RegisterEndpointInstructionArgs,
    U = keyof S
      > = S extends true
        ? RegisterEndpointInstruction
    : S extends undefined
    ? never
    : S extends RegisterEndpointInstructionArgs | RegisterEndpointInstructionFindManyArgs
    ?'include' extends U
    ? RegisterEndpointInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof RegisterEndpointInstruction ?RegisterEndpointInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : RegisterEndpointInstruction
  : RegisterEndpointInstruction


  type RegisterEndpointInstructionCountArgs = Merge<
    Omit<RegisterEndpointInstructionFindManyArgs, 'select' | 'include'> & {
      select?: RegisterEndpointInstructionCountAggregateInputType | true
    }
  >

  export interface RegisterEndpointInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RegisterEndpointInstruction that matches the filter.
     * @param {RegisterEndpointInstructionFindUniqueArgs} args - Arguments to find a RegisterEndpointInstruction
     * @example
     * // Get one RegisterEndpointInstruction
     * const registerEndpointInstruction = await prisma.registerEndpointInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegisterEndpointInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RegisterEndpointInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RegisterEndpointInstruction'> extends True ? CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>> : CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction | null >, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T> | null >>

    /**
     * Find the first RegisterEndpointInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionFindFirstArgs} args - Arguments to find a RegisterEndpointInstruction
     * @example
     * // Get one RegisterEndpointInstruction
     * const registerEndpointInstruction = await prisma.registerEndpointInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegisterEndpointInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RegisterEndpointInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RegisterEndpointInstruction'> extends True ? CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>> : CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction | null >, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T> | null >>

    /**
     * Find zero or more RegisterEndpointInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegisterEndpointInstructions
     * const registerEndpointInstructions = await prisma.registerEndpointInstruction.findMany()
     * 
     * // Get first 10 RegisterEndpointInstructions
     * const registerEndpointInstructions = await prisma.registerEndpointInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registerEndpointInstructionWithIdOnly = await prisma.registerEndpointInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegisterEndpointInstructionFindManyArgs>(
      args?: SelectSubset<T, RegisterEndpointInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RegisterEndpointInstruction>>, PrismaPromise<Array<RegisterEndpointInstructionGetPayload<T>>>>

    /**
     * Create a RegisterEndpointInstruction.
     * @param {RegisterEndpointInstructionCreateArgs} args - Arguments to create a RegisterEndpointInstruction.
     * @example
     * // Create one RegisterEndpointInstruction
     * const RegisterEndpointInstruction = await prisma.registerEndpointInstruction.create({
     *   data: {
     *     // ... data to create a RegisterEndpointInstruction
     *   }
     * })
     * 
    **/
    create<T extends RegisterEndpointInstructionCreateArgs>(
      args: SelectSubset<T, RegisterEndpointInstructionCreateArgs>
    ): CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>>

    /**
     * Create many RegisterEndpointInstructions.
     *     @param {RegisterEndpointInstructionCreateManyArgs} args - Arguments to create many RegisterEndpointInstructions.
     *     @example
     *     // Create many RegisterEndpointInstructions
     *     const registerEndpointInstruction = await prisma.registerEndpointInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegisterEndpointInstructionCreateManyArgs>(
      args?: SelectSubset<T, RegisterEndpointInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RegisterEndpointInstruction.
     * @param {RegisterEndpointInstructionDeleteArgs} args - Arguments to delete one RegisterEndpointInstruction.
     * @example
     * // Delete one RegisterEndpointInstruction
     * const RegisterEndpointInstruction = await prisma.registerEndpointInstruction.delete({
     *   where: {
     *     // ... filter to delete one RegisterEndpointInstruction
     *   }
     * })
     * 
    **/
    delete<T extends RegisterEndpointInstructionDeleteArgs>(
      args: SelectSubset<T, RegisterEndpointInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>>

    /**
     * Update one RegisterEndpointInstruction.
     * @param {RegisterEndpointInstructionUpdateArgs} args - Arguments to update one RegisterEndpointInstruction.
     * @example
     * // Update one RegisterEndpointInstruction
     * const registerEndpointInstruction = await prisma.registerEndpointInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegisterEndpointInstructionUpdateArgs>(
      args: SelectSubset<T, RegisterEndpointInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>>

    /**
     * Delete zero or more RegisterEndpointInstructions.
     * @param {RegisterEndpointInstructionDeleteManyArgs} args - Arguments to filter RegisterEndpointInstructions to delete.
     * @example
     * // Delete a few RegisterEndpointInstructions
     * const { count } = await prisma.registerEndpointInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegisterEndpointInstructionDeleteManyArgs>(
      args?: SelectSubset<T, RegisterEndpointInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisterEndpointInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegisterEndpointInstructions
     * const registerEndpointInstruction = await prisma.registerEndpointInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegisterEndpointInstructionUpdateManyArgs>(
      args: SelectSubset<T, RegisterEndpointInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RegisterEndpointInstruction.
     * @param {RegisterEndpointInstructionUpsertArgs} args - Arguments to update or create a RegisterEndpointInstruction.
     * @example
     * // Update or create a RegisterEndpointInstruction
     * const registerEndpointInstruction = await prisma.registerEndpointInstruction.upsert({
     *   create: {
     *     // ... data to create a RegisterEndpointInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegisterEndpointInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends RegisterEndpointInstructionUpsertArgs>(
      args: SelectSubset<T, RegisterEndpointInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstruction>, Prisma__RegisterEndpointInstructionClient<RegisterEndpointInstructionGetPayload<T>>>

    /**
     * Count the number of RegisterEndpointInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionCountArgs} args - Arguments to filter RegisterEndpointInstructions to count.
     * @example
     * // Count the number of RegisterEndpointInstructions
     * const count = await prisma.registerEndpointInstruction.count({
     *   where: {
     *     // ... the filter for the RegisterEndpointInstructions we want to count
     *   }
     * })
    **/
    count<T extends RegisterEndpointInstructionCountArgs>(
      args?: Subset<T, RegisterEndpointInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisterEndpointInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegisterEndpointInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegisterEndpointInstructionAggregateArgs>(args: Subset<T, RegisterEndpointInstructionAggregateArgs>): PrismaPromise<GetRegisterEndpointInstructionAggregateType<T>>

    /**
     * Group by RegisterEndpointInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterEndpointInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegisterEndpointInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisterEndpointInstructionGroupByArgs['orderBy'] }
        : { orderBy?: RegisterEndpointInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegisterEndpointInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisterEndpointInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegisterEndpointInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RegisterEndpointInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RegisterEndpointInstruction findUnique
   */
  export type RegisterEndpointInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * Throw an Error if a RegisterEndpointInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RegisterEndpointInstruction to fetch.
     * 
    **/
    where: RegisterEndpointInstructionWhereUniqueInput
  }


  /**
   * RegisterEndpointInstruction findFirst
   */
  export type RegisterEndpointInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * Throw an Error if a RegisterEndpointInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which RegisterEndpointInstruction to fetch.
     * 
    **/
    where?: RegisterEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RegisterEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisterEndpointInstructions.
     * 
    **/
    cursor?: RegisterEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterEndpointInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisterEndpointInstructions.
     * 
    **/
    distinct?: Enumerable<RegisterEndpointInstructionScalarFieldEnum>
  }


  /**
   * RegisterEndpointInstruction findMany
   */
  export type RegisterEndpointInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * Filter, which RegisterEndpointInstructions to fetch.
     * 
    **/
    where?: RegisterEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<RegisterEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegisterEndpointInstructions.
     * 
    **/
    cursor?: RegisterEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterEndpointInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RegisterEndpointInstructionScalarFieldEnum>
  }


  /**
   * RegisterEndpointInstruction create
   */
  export type RegisterEndpointInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * The data needed to create a RegisterEndpointInstruction.
     * 
    **/
    data: XOR<RegisterEndpointInstructionCreateInput, RegisterEndpointInstructionUncheckedCreateInput>
  }


  /**
   * RegisterEndpointInstruction createMany
   */
  export type RegisterEndpointInstructionCreateManyArgs = {
    data: Enumerable<RegisterEndpointInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RegisterEndpointInstruction update
   */
  export type RegisterEndpointInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * The data needed to update a RegisterEndpointInstruction.
     * 
    **/
    data: XOR<RegisterEndpointInstructionUpdateInput, RegisterEndpointInstructionUncheckedUpdateInput>
    /**
     * Choose, which RegisterEndpointInstruction to update.
     * 
    **/
    where: RegisterEndpointInstructionWhereUniqueInput
  }


  /**
   * RegisterEndpointInstruction updateMany
   */
  export type RegisterEndpointInstructionUpdateManyArgs = {
    data: XOR<RegisterEndpointInstructionUpdateManyMutationInput, RegisterEndpointInstructionUncheckedUpdateManyInput>
    where?: RegisterEndpointInstructionWhereInput
  }


  /**
   * RegisterEndpointInstruction upsert
   */
  export type RegisterEndpointInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * The filter to search for the RegisterEndpointInstruction to update in case it exists.
     * 
    **/
    where: RegisterEndpointInstructionWhereUniqueInput
    /**
     * In case the RegisterEndpointInstruction found by the `where` argument doesn't exist, create a new RegisterEndpointInstruction with this data.
     * 
    **/
    create: XOR<RegisterEndpointInstructionCreateInput, RegisterEndpointInstructionUncheckedCreateInput>
    /**
     * In case the RegisterEndpointInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RegisterEndpointInstructionUpdateInput, RegisterEndpointInstructionUncheckedUpdateInput>
  }


  /**
   * RegisterEndpointInstruction delete
   */
  export type RegisterEndpointInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
    /**
     * Filter which RegisterEndpointInstruction to delete.
     * 
    **/
    where: RegisterEndpointInstructionWhereUniqueInput
  }


  /**
   * RegisterEndpointInstruction deleteMany
   */
  export type RegisterEndpointInstructionDeleteManyArgs = {
    where?: RegisterEndpointInstructionWhereInput
  }


  /**
   * RegisterEndpointInstruction without action
   */
  export type RegisterEndpointInstructionArgs = {
    /**
     * Select specific fields to fetch from the RegisterEndpointInstruction
     * 
    **/
    select?: RegisterEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RegisterEndpointInstructionInclude | null
  }



  /**
   * Model InitStakeInstruction
   */


  export type AggregateInitStakeInstruction = {
    _count: InitStakeInstructionCountAggregateOutputType | null
    _avg: InitStakeInstructionAvgAggregateOutputType | null
    _sum: InitStakeInstructionSumAggregateOutputType | null
    _min: InitStakeInstructionMinAggregateOutputType | null
    _max: InitStakeInstructionMaxAggregateOutputType | null
  }

  export type InitStakeInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type InitStakeInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type InitStakeInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    staker: string | null
    stakerFund: string | null
    stakerBeneficiary: string | null
    endpointAccount: string | null
    stakeAccount: string | null
  }

  export type InitStakeInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    staker: string | null
    stakerFund: string | null
    stakerBeneficiary: string | null
    endpointAccount: string | null
    stakeAccount: string | null
  }

  export type InitStakeInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    staker: number
    stakerFund: number
    stakerBeneficiary: number
    endpointAccount: number
    stakeAccount: number
    _all: number
  }


  export type InitStakeInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type InitStakeInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type InitStakeInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    staker?: true
    stakerFund?: true
    stakerBeneficiary?: true
    endpointAccount?: true
    stakeAccount?: true
  }

  export type InitStakeInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    staker?: true
    stakerFund?: true
    stakerBeneficiary?: true
    endpointAccount?: true
    stakeAccount?: true
  }

  export type InitStakeInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    staker?: true
    stakerFund?: true
    stakerBeneficiary?: true
    endpointAccount?: true
    stakeAccount?: true
    _all?: true
  }

  export type InitStakeInstructionAggregateArgs = {
    /**
     * Filter which InitStakeInstruction to aggregate.
     * 
    **/
    where?: InitStakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitStakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitStakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InitStakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitStakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitStakeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InitStakeInstructions
    **/
    _count?: true | InitStakeInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InitStakeInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InitStakeInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InitStakeInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InitStakeInstructionMaxAggregateInputType
  }

  export type GetInitStakeInstructionAggregateType<T extends InitStakeInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateInitStakeInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInitStakeInstruction[P]>
      : GetScalarType<T[P], AggregateInitStakeInstruction[P]>
  }


    
    
  export type InitStakeInstructionGroupByArgs = {
    where?: InitStakeInstructionWhereInput
    orderBy?: Enumerable<InitStakeInstructionOrderByWithAggregationInput>
    by: Array<InitStakeInstructionScalarFieldEnum>
    having?: InitStakeInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InitStakeInstructionCountAggregateInputType | true
    _avg?: InitStakeInstructionAvgAggregateInputType
    _sum?: InitStakeInstructionSumAggregateInputType
    _min?: InitStakeInstructionMinAggregateInputType
    _max?: InitStakeInstructionMaxAggregateInputType
  }


  export type InitStakeInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
    _count: InitStakeInstructionCountAggregateOutputType | null
    _avg: InitStakeInstructionAvgAggregateOutputType | null
    _sum: InitStakeInstructionSumAggregateOutputType | null
    _min: InitStakeInstructionMinAggregateOutputType | null
    _max: InitStakeInstructionMaxAggregateOutputType | null
  }

  type GetInitStakeInstructionGroupByPayload<T extends InitStakeInstructionGroupByArgs> = Promise<
    Array<
      PickArray<InitStakeInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof InitStakeInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], InitStakeInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], InitStakeInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type InitStakeInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    staker?: boolean
    stakerFund?: boolean
    stakerBeneficiary?: boolean
    endpointAccount?: boolean
    stakeAccount?: boolean
  }

  export type InitStakeInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type InitStakeInstructionGetPayload<
    S extends boolean | null | undefined | InitStakeInstructionArgs,
    U = keyof S
      > = S extends true
        ? InitStakeInstruction
    : S extends undefined
    ? never
    : S extends InitStakeInstructionArgs | InitStakeInstructionFindManyArgs
    ?'include' extends U
    ? InitStakeInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof InitStakeInstruction ?InitStakeInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : InitStakeInstruction
  : InitStakeInstruction


  type InitStakeInstructionCountArgs = Merge<
    Omit<InitStakeInstructionFindManyArgs, 'select' | 'include'> & {
      select?: InitStakeInstructionCountAggregateInputType | true
    }
  >

  export interface InitStakeInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InitStakeInstruction that matches the filter.
     * @param {InitStakeInstructionFindUniqueArgs} args - Arguments to find a InitStakeInstruction
     * @example
     * // Get one InitStakeInstruction
     * const initStakeInstruction = await prisma.initStakeInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InitStakeInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InitStakeInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InitStakeInstruction'> extends True ? CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction | null >, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T> | null >>

    /**
     * Find the first InitStakeInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionFindFirstArgs} args - Arguments to find a InitStakeInstruction
     * @example
     * // Get one InitStakeInstruction
     * const initStakeInstruction = await prisma.initStakeInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InitStakeInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InitStakeInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InitStakeInstruction'> extends True ? CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction | null >, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T> | null >>

    /**
     * Find zero or more InitStakeInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InitStakeInstructions
     * const initStakeInstructions = await prisma.initStakeInstruction.findMany()
     * 
     * // Get first 10 InitStakeInstructions
     * const initStakeInstructions = await prisma.initStakeInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const initStakeInstructionWithIdOnly = await prisma.initStakeInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InitStakeInstructionFindManyArgs>(
      args?: SelectSubset<T, InitStakeInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InitStakeInstruction>>, PrismaPromise<Array<InitStakeInstructionGetPayload<T>>>>

    /**
     * Create a InitStakeInstruction.
     * @param {InitStakeInstructionCreateArgs} args - Arguments to create a InitStakeInstruction.
     * @example
     * // Create one InitStakeInstruction
     * const InitStakeInstruction = await prisma.initStakeInstruction.create({
     *   data: {
     *     // ... data to create a InitStakeInstruction
     *   }
     * })
     * 
    **/
    create<T extends InitStakeInstructionCreateArgs>(
      args: SelectSubset<T, InitStakeInstructionCreateArgs>
    ): CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>>

    /**
     * Create many InitStakeInstructions.
     *     @param {InitStakeInstructionCreateManyArgs} args - Arguments to create many InitStakeInstructions.
     *     @example
     *     // Create many InitStakeInstructions
     *     const initStakeInstruction = await prisma.initStakeInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InitStakeInstructionCreateManyArgs>(
      args?: SelectSubset<T, InitStakeInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InitStakeInstruction.
     * @param {InitStakeInstructionDeleteArgs} args - Arguments to delete one InitStakeInstruction.
     * @example
     * // Delete one InitStakeInstruction
     * const InitStakeInstruction = await prisma.initStakeInstruction.delete({
     *   where: {
     *     // ... filter to delete one InitStakeInstruction
     *   }
     * })
     * 
    **/
    delete<T extends InitStakeInstructionDeleteArgs>(
      args: SelectSubset<T, InitStakeInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>>

    /**
     * Update one InitStakeInstruction.
     * @param {InitStakeInstructionUpdateArgs} args - Arguments to update one InitStakeInstruction.
     * @example
     * // Update one InitStakeInstruction
     * const initStakeInstruction = await prisma.initStakeInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InitStakeInstructionUpdateArgs>(
      args: SelectSubset<T, InitStakeInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>>

    /**
     * Delete zero or more InitStakeInstructions.
     * @param {InitStakeInstructionDeleteManyArgs} args - Arguments to filter InitStakeInstructions to delete.
     * @example
     * // Delete a few InitStakeInstructions
     * const { count } = await prisma.initStakeInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InitStakeInstructionDeleteManyArgs>(
      args?: SelectSubset<T, InitStakeInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InitStakeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InitStakeInstructions
     * const initStakeInstruction = await prisma.initStakeInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InitStakeInstructionUpdateManyArgs>(
      args: SelectSubset<T, InitStakeInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InitStakeInstruction.
     * @param {InitStakeInstructionUpsertArgs} args - Arguments to update or create a InitStakeInstruction.
     * @example
     * // Update or create a InitStakeInstruction
     * const initStakeInstruction = await prisma.initStakeInstruction.upsert({
     *   create: {
     *     // ... data to create a InitStakeInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InitStakeInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends InitStakeInstructionUpsertArgs>(
      args: SelectSubset<T, InitStakeInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__InitStakeInstructionClient<InitStakeInstruction>, Prisma__InitStakeInstructionClient<InitStakeInstructionGetPayload<T>>>

    /**
     * Count the number of InitStakeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionCountArgs} args - Arguments to filter InitStakeInstructions to count.
     * @example
     * // Count the number of InitStakeInstructions
     * const count = await prisma.initStakeInstruction.count({
     *   where: {
     *     // ... the filter for the InitStakeInstructions we want to count
     *   }
     * })
    **/
    count<T extends InitStakeInstructionCountArgs>(
      args?: Subset<T, InitStakeInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InitStakeInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InitStakeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InitStakeInstructionAggregateArgs>(args: Subset<T, InitStakeInstructionAggregateArgs>): PrismaPromise<GetInitStakeInstructionAggregateType<T>>

    /**
     * Group by InitStakeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InitStakeInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InitStakeInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InitStakeInstructionGroupByArgs['orderBy'] }
        : { orderBy?: InitStakeInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InitStakeInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInitStakeInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InitStakeInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InitStakeInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * InitStakeInstruction findUnique
   */
  export type InitStakeInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * Throw an Error if a InitStakeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which InitStakeInstruction to fetch.
     * 
    **/
    where: InitStakeInstructionWhereUniqueInput
  }


  /**
   * InitStakeInstruction findFirst
   */
  export type InitStakeInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * Throw an Error if a InitStakeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which InitStakeInstruction to fetch.
     * 
    **/
    where?: InitStakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitStakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitStakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InitStakeInstructions.
     * 
    **/
    cursor?: InitStakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitStakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitStakeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InitStakeInstructions.
     * 
    **/
    distinct?: Enumerable<InitStakeInstructionScalarFieldEnum>
  }


  /**
   * InitStakeInstruction findMany
   */
  export type InitStakeInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * Filter, which InitStakeInstructions to fetch.
     * 
    **/
    where?: InitStakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InitStakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<InitStakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InitStakeInstructions.
     * 
    **/
    cursor?: InitStakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InitStakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InitStakeInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InitStakeInstructionScalarFieldEnum>
  }


  /**
   * InitStakeInstruction create
   */
  export type InitStakeInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * The data needed to create a InitStakeInstruction.
     * 
    **/
    data: XOR<InitStakeInstructionCreateInput, InitStakeInstructionUncheckedCreateInput>
  }


  /**
   * InitStakeInstruction createMany
   */
  export type InitStakeInstructionCreateManyArgs = {
    data: Enumerable<InitStakeInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InitStakeInstruction update
   */
  export type InitStakeInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * The data needed to update a InitStakeInstruction.
     * 
    **/
    data: XOR<InitStakeInstructionUpdateInput, InitStakeInstructionUncheckedUpdateInput>
    /**
     * Choose, which InitStakeInstruction to update.
     * 
    **/
    where: InitStakeInstructionWhereUniqueInput
  }


  /**
   * InitStakeInstruction updateMany
   */
  export type InitStakeInstructionUpdateManyArgs = {
    data: XOR<InitStakeInstructionUpdateManyMutationInput, InitStakeInstructionUncheckedUpdateManyInput>
    where?: InitStakeInstructionWhereInput
  }


  /**
   * InitStakeInstruction upsert
   */
  export type InitStakeInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * The filter to search for the InitStakeInstruction to update in case it exists.
     * 
    **/
    where: InitStakeInstructionWhereUniqueInput
    /**
     * In case the InitStakeInstruction found by the `where` argument doesn't exist, create a new InitStakeInstruction with this data.
     * 
    **/
    create: XOR<InitStakeInstructionCreateInput, InitStakeInstructionUncheckedCreateInput>
    /**
     * In case the InitStakeInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InitStakeInstructionUpdateInput, InitStakeInstructionUncheckedUpdateInput>
  }


  /**
   * InitStakeInstruction delete
   */
  export type InitStakeInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
    /**
     * Filter which InitStakeInstruction to delete.
     * 
    **/
    where: InitStakeInstructionWhereUniqueInput
  }


  /**
   * InitStakeInstruction deleteMany
   */
  export type InitStakeInstructionDeleteManyArgs = {
    where?: InitStakeInstructionWhereInput
  }


  /**
   * InitStakeInstruction without action
   */
  export type InitStakeInstructionArgs = {
    /**
     * Select specific fields to fetch from the InitStakeInstruction
     * 
    **/
    select?: InitStakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InitStakeInstructionInclude | null
  }



  /**
   * Model StakeInstruction
   */


  export type AggregateStakeInstruction = {
    _count: StakeInstructionCountAggregateOutputType | null
    _avg: StakeInstructionAvgAggregateOutputType | null
    _sum: StakeInstructionSumAggregateOutputType | null
    _min: StakeInstructionMinAggregateOutputType | null
    _max: StakeInstructionMaxAggregateOutputType | null
  }

  export type StakeInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    stake: number | null
  }

  export type StakeInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    stake: bigint | null
  }

  export type StakeInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    stake: bigint | null
    payer: string | null
    staker: string | null
    stakerBeneficiary: string | null
    stakerFund: string | null
    stakerZeeTokenAccount: string | null
    endpoint: string | null
    endpointPrimaryBeneficiary: string | null
    endpointSecondaryBeneficiary: string | null
    poolAuthority: string | null
    settings: string | null
    stakeAccount: string | null
  }

  export type StakeInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    stake: bigint | null
    payer: string | null
    staker: string | null
    stakerBeneficiary: string | null
    stakerFund: string | null
    stakerZeeTokenAccount: string | null
    endpoint: string | null
    endpointPrimaryBeneficiary: string | null
    endpointSecondaryBeneficiary: string | null
    poolAuthority: string | null
    settings: string | null
    stakeAccount: string | null
  }

  export type StakeInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    claimId: number
    stake: number
    payer: number
    staker: number
    stakerBeneficiary: number
    stakerFund: number
    stakerZeeTokenAccount: number
    endpoint: number
    endpointPrimaryBeneficiary: number
    endpointSecondaryBeneficiary: number
    poolAuthority: number
    settings: number
    stakeAccount: number
    _all: number
  }


  export type StakeInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    stake?: true
  }

  export type StakeInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    stake?: true
  }

  export type StakeInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    stake?: true
    payer?: true
    staker?: true
    stakerBeneficiary?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    endpointPrimaryBeneficiary?: true
    endpointSecondaryBeneficiary?: true
    poolAuthority?: true
    settings?: true
    stakeAccount?: true
  }

  export type StakeInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    stake?: true
    payer?: true
    staker?: true
    stakerBeneficiary?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    endpointPrimaryBeneficiary?: true
    endpointSecondaryBeneficiary?: true
    poolAuthority?: true
    settings?: true
    stakeAccount?: true
  }

  export type StakeInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    stake?: true
    payer?: true
    staker?: true
    stakerBeneficiary?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    endpointPrimaryBeneficiary?: true
    endpointSecondaryBeneficiary?: true
    poolAuthority?: true
    settings?: true
    stakeAccount?: true
    _all?: true
  }

  export type StakeInstructionAggregateArgs = {
    /**
     * Filter which StakeInstruction to aggregate.
     * 
    **/
    where?: StakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StakeInstructions
    **/
    _count?: true | StakeInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakeInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakeInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeInstructionMaxAggregateInputType
  }

  export type GetStakeInstructionAggregateType<T extends StakeInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateStakeInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStakeInstruction[P]>
      : GetScalarType<T[P], AggregateStakeInstruction[P]>
  }


    
    
  export type StakeInstructionGroupByArgs = {
    where?: StakeInstructionWhereInput
    orderBy?: Enumerable<StakeInstructionOrderByWithAggregationInput>
    by: Array<StakeInstructionScalarFieldEnum>
    having?: StakeInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeInstructionCountAggregateInputType | true
    _avg?: StakeInstructionAvgAggregateInputType
    _sum?: StakeInstructionSumAggregateInputType
    _min?: StakeInstructionMinAggregateInputType
    _max?: StakeInstructionMaxAggregateInputType
  }


  export type StakeInstructionGroupByOutputType = {
    id: number
    signatureId: number
    claimId: number
    stake: bigint
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
    _count: StakeInstructionCountAggregateOutputType | null
    _avg: StakeInstructionAvgAggregateOutputType | null
    _sum: StakeInstructionSumAggregateOutputType | null
    _min: StakeInstructionMinAggregateOutputType | null
    _max: StakeInstructionMaxAggregateOutputType | null
  }

  type GetStakeInstructionGroupByPayload<T extends StakeInstructionGroupByArgs> = Promise<
    Array<
      PickArray<StakeInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StakeInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StakeInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], StakeInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type StakeInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    claim?: boolean | ClaimArgs
    claimId?: boolean
    stake?: boolean
    payer?: boolean
    staker?: boolean
    stakerBeneficiary?: boolean
    stakerFund?: boolean
    stakerZeeTokenAccount?: boolean
    endpoint?: boolean
    endpointPrimaryBeneficiary?: boolean
    endpointSecondaryBeneficiary?: boolean
    poolAuthority?: boolean
    settings?: boolean
    stakeAccount?: boolean
  }

  export type StakeInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
    claim?: boolean | ClaimArgs
  }

  export type StakeInstructionGetPayload<
    S extends boolean | null | undefined | StakeInstructionArgs,
    U = keyof S
      > = S extends true
        ? StakeInstruction
    : S extends undefined
    ? never
    : S extends StakeInstructionArgs | StakeInstructionFindManyArgs
    ?'include' extends U
    ? StakeInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> :
        P extends 'claim'
        ? ClaimGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof StakeInstruction ?StakeInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> :
        P extends 'claim'
        ? ClaimGetPayload<S['select'][P]> : never
  } 
    : StakeInstruction
  : StakeInstruction


  type StakeInstructionCountArgs = Merge<
    Omit<StakeInstructionFindManyArgs, 'select' | 'include'> & {
      select?: StakeInstructionCountAggregateInputType | true
    }
  >

  export interface StakeInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one StakeInstruction that matches the filter.
     * @param {StakeInstructionFindUniqueArgs} args - Arguments to find a StakeInstruction
     * @example
     * // Get one StakeInstruction
     * const stakeInstruction = await prisma.stakeInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StakeInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StakeInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StakeInstruction'> extends True ? CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction | null >, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T> | null >>

    /**
     * Find the first StakeInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionFindFirstArgs} args - Arguments to find a StakeInstruction
     * @example
     * // Get one StakeInstruction
     * const stakeInstruction = await prisma.stakeInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StakeInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StakeInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StakeInstruction'> extends True ? CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>> : CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction | null >, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T> | null >>

    /**
     * Find zero or more StakeInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StakeInstructions
     * const stakeInstructions = await prisma.stakeInstruction.findMany()
     * 
     * // Get first 10 StakeInstructions
     * const stakeInstructions = await prisma.stakeInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeInstructionWithIdOnly = await prisma.stakeInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StakeInstructionFindManyArgs>(
      args?: SelectSubset<T, StakeInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<StakeInstruction>>, PrismaPromise<Array<StakeInstructionGetPayload<T>>>>

    /**
     * Create a StakeInstruction.
     * @param {StakeInstructionCreateArgs} args - Arguments to create a StakeInstruction.
     * @example
     * // Create one StakeInstruction
     * const StakeInstruction = await prisma.stakeInstruction.create({
     *   data: {
     *     // ... data to create a StakeInstruction
     *   }
     * })
     * 
    **/
    create<T extends StakeInstructionCreateArgs>(
      args: SelectSubset<T, StakeInstructionCreateArgs>
    ): CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>>

    /**
     * Create many StakeInstructions.
     *     @param {StakeInstructionCreateManyArgs} args - Arguments to create many StakeInstructions.
     *     @example
     *     // Create many StakeInstructions
     *     const stakeInstruction = await prisma.stakeInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StakeInstructionCreateManyArgs>(
      args?: SelectSubset<T, StakeInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StakeInstruction.
     * @param {StakeInstructionDeleteArgs} args - Arguments to delete one StakeInstruction.
     * @example
     * // Delete one StakeInstruction
     * const StakeInstruction = await prisma.stakeInstruction.delete({
     *   where: {
     *     // ... filter to delete one StakeInstruction
     *   }
     * })
     * 
    **/
    delete<T extends StakeInstructionDeleteArgs>(
      args: SelectSubset<T, StakeInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>>

    /**
     * Update one StakeInstruction.
     * @param {StakeInstructionUpdateArgs} args - Arguments to update one StakeInstruction.
     * @example
     * // Update one StakeInstruction
     * const stakeInstruction = await prisma.stakeInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StakeInstructionUpdateArgs>(
      args: SelectSubset<T, StakeInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>>

    /**
     * Delete zero or more StakeInstructions.
     * @param {StakeInstructionDeleteManyArgs} args - Arguments to filter StakeInstructions to delete.
     * @example
     * // Delete a few StakeInstructions
     * const { count } = await prisma.stakeInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StakeInstructionDeleteManyArgs>(
      args?: SelectSubset<T, StakeInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StakeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StakeInstructions
     * const stakeInstruction = await prisma.stakeInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StakeInstructionUpdateManyArgs>(
      args: SelectSubset<T, StakeInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StakeInstruction.
     * @param {StakeInstructionUpsertArgs} args - Arguments to update or create a StakeInstruction.
     * @example
     * // Update or create a StakeInstruction
     * const stakeInstruction = await prisma.stakeInstruction.upsert({
     *   create: {
     *     // ... data to create a StakeInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StakeInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends StakeInstructionUpsertArgs>(
      args: SelectSubset<T, StakeInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__StakeInstructionClient<StakeInstruction>, Prisma__StakeInstructionClient<StakeInstructionGetPayload<T>>>

    /**
     * Count the number of StakeInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionCountArgs} args - Arguments to filter StakeInstructions to count.
     * @example
     * // Count the number of StakeInstructions
     * const count = await prisma.stakeInstruction.count({
     *   where: {
     *     // ... the filter for the StakeInstructions we want to count
     *   }
     * })
    **/
    count<T extends StakeInstructionCountArgs>(
      args?: Subset<T, StakeInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StakeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StakeInstructionAggregateArgs>(args: Subset<T, StakeInstructionAggregateArgs>): PrismaPromise<GetStakeInstructionAggregateType<T>>

    /**
     * Group by StakeInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StakeInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StakeInstructionGroupByArgs['orderBy'] }
        : { orderBy?: StakeInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StakeInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for StakeInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StakeInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    claim<T extends ClaimArgs = {}>(args?: Subset<T, ClaimArgs>): CheckSelect<T, Prisma__ClaimClient<Claim | null >, Prisma__ClaimClient<ClaimGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * StakeInstruction findUnique
   */
  export type StakeInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * Throw an Error if a StakeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which StakeInstruction to fetch.
     * 
    **/
    where: StakeInstructionWhereUniqueInput
  }


  /**
   * StakeInstruction findFirst
   */
  export type StakeInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * Throw an Error if a StakeInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which StakeInstruction to fetch.
     * 
    **/
    where?: StakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StakeInstructions.
     * 
    **/
    cursor?: StakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StakeInstructions.
     * 
    **/
    distinct?: Enumerable<StakeInstructionScalarFieldEnum>
  }


  /**
   * StakeInstruction findMany
   */
  export type StakeInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * Filter, which StakeInstructions to fetch.
     * 
    **/
    where?: StakeInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StakeInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<StakeInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StakeInstructions.
     * 
    **/
    cursor?: StakeInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StakeInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StakeInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StakeInstructionScalarFieldEnum>
  }


  /**
   * StakeInstruction create
   */
  export type StakeInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * The data needed to create a StakeInstruction.
     * 
    **/
    data: XOR<StakeInstructionCreateInput, StakeInstructionUncheckedCreateInput>
  }


  /**
   * StakeInstruction createMany
   */
  export type StakeInstructionCreateManyArgs = {
    data: Enumerable<StakeInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StakeInstruction update
   */
  export type StakeInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * The data needed to update a StakeInstruction.
     * 
    **/
    data: XOR<StakeInstructionUpdateInput, StakeInstructionUncheckedUpdateInput>
    /**
     * Choose, which StakeInstruction to update.
     * 
    **/
    where: StakeInstructionWhereUniqueInput
  }


  /**
   * StakeInstruction updateMany
   */
  export type StakeInstructionUpdateManyArgs = {
    data: XOR<StakeInstructionUpdateManyMutationInput, StakeInstructionUncheckedUpdateManyInput>
    where?: StakeInstructionWhereInput
  }


  /**
   * StakeInstruction upsert
   */
  export type StakeInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * The filter to search for the StakeInstruction to update in case it exists.
     * 
    **/
    where: StakeInstructionWhereUniqueInput
    /**
     * In case the StakeInstruction found by the `where` argument doesn't exist, create a new StakeInstruction with this data.
     * 
    **/
    create: XOR<StakeInstructionCreateInput, StakeInstructionUncheckedCreateInput>
    /**
     * In case the StakeInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StakeInstructionUpdateInput, StakeInstructionUncheckedUpdateInput>
  }


  /**
   * StakeInstruction delete
   */
  export type StakeInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
    /**
     * Filter which StakeInstruction to delete.
     * 
    **/
    where: StakeInstructionWhereUniqueInput
  }


  /**
   * StakeInstruction deleteMany
   */
  export type StakeInstructionDeleteManyArgs = {
    where?: StakeInstructionWhereInput
  }


  /**
   * StakeInstruction without action
   */
  export type StakeInstructionArgs = {
    /**
     * Select specific fields to fetch from the StakeInstruction
     * 
    **/
    select?: StakeInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StakeInstructionInclude | null
  }



  /**
   * Model WithdrawUnboundInstruction
   */


  export type AggregateWithdrawUnboundInstruction = {
    _count: WithdrawUnboundInstructionCountAggregateOutputType | null
    _avg: WithdrawUnboundInstructionAvgAggregateOutputType | null
    _sum: WithdrawUnboundInstructionSumAggregateOutputType | null
    _min: WithdrawUnboundInstructionMinAggregateOutputType | null
    _max: WithdrawUnboundInstructionMaxAggregateOutputType | null
  }

  export type WithdrawUnboundInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type WithdrawUnboundInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type WithdrawUnboundInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    stakeAccount: string | null
    staker: string | null
    stakerFund: string | null
    stakerZeeTokenAccount: string | null
    endpoint: string | null
    settings: string | null
    poolAuthority: string | null
  }

  export type WithdrawUnboundInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    stakeAccount: string | null
    staker: string | null
    stakerFund: string | null
    stakerZeeTokenAccount: string | null
    endpoint: string | null
    settings: string | null
    poolAuthority: string | null
  }

  export type WithdrawUnboundInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    stakeAccount: number
    staker: number
    stakerFund: number
    stakerZeeTokenAccount: number
    endpoint: number
    settings: number
    poolAuthority: number
    _all: number
  }


  export type WithdrawUnboundInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type WithdrawUnboundInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type WithdrawUnboundInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    stakeAccount?: true
    staker?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    settings?: true
    poolAuthority?: true
  }

  export type WithdrawUnboundInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    stakeAccount?: true
    staker?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    settings?: true
    poolAuthority?: true
  }

  export type WithdrawUnboundInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    stakeAccount?: true
    staker?: true
    stakerFund?: true
    stakerZeeTokenAccount?: true
    endpoint?: true
    settings?: true
    poolAuthority?: true
    _all?: true
  }

  export type WithdrawUnboundInstructionAggregateArgs = {
    /**
     * Filter which WithdrawUnboundInstruction to aggregate.
     * 
    **/
    where?: WithdrawUnboundInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawUnboundInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<WithdrawUnboundInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WithdrawUnboundInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawUnboundInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawUnboundInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawUnboundInstructions
    **/
    _count?: true | WithdrawUnboundInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawUnboundInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawUnboundInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawUnboundInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawUnboundInstructionMaxAggregateInputType
  }

  export type GetWithdrawUnboundInstructionAggregateType<T extends WithdrawUnboundInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawUnboundInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawUnboundInstruction[P]>
      : GetScalarType<T[P], AggregateWithdrawUnboundInstruction[P]>
  }


    
    
  export type WithdrawUnboundInstructionGroupByArgs = {
    where?: WithdrawUnboundInstructionWhereInput
    orderBy?: Enumerable<WithdrawUnboundInstructionOrderByWithAggregationInput>
    by: Array<WithdrawUnboundInstructionScalarFieldEnum>
    having?: WithdrawUnboundInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawUnboundInstructionCountAggregateInputType | true
    _avg?: WithdrawUnboundInstructionAvgAggregateInputType
    _sum?: WithdrawUnboundInstructionSumAggregateInputType
    _min?: WithdrawUnboundInstructionMinAggregateInputType
    _max?: WithdrawUnboundInstructionMaxAggregateInputType
  }


  export type WithdrawUnboundInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
    _count: WithdrawUnboundInstructionCountAggregateOutputType | null
    _avg: WithdrawUnboundInstructionAvgAggregateOutputType | null
    _sum: WithdrawUnboundInstructionSumAggregateOutputType | null
    _min: WithdrawUnboundInstructionMinAggregateOutputType | null
    _max: WithdrawUnboundInstructionMaxAggregateOutputType | null
  }

  type GetWithdrawUnboundInstructionGroupByPayload<T extends WithdrawUnboundInstructionGroupByArgs> = Promise<
    Array<
      PickArray<WithdrawUnboundInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof WithdrawUnboundInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], WithdrawUnboundInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], WithdrawUnboundInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type WithdrawUnboundInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    stakeAccount?: boolean
    staker?: boolean
    stakerFund?: boolean
    stakerZeeTokenAccount?: boolean
    endpoint?: boolean
    settings?: boolean
    poolAuthority?: boolean
  }

  export type WithdrawUnboundInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type WithdrawUnboundInstructionGetPayload<
    S extends boolean | null | undefined | WithdrawUnboundInstructionArgs,
    U = keyof S
      > = S extends true
        ? WithdrawUnboundInstruction
    : S extends undefined
    ? never
    : S extends WithdrawUnboundInstructionArgs | WithdrawUnboundInstructionFindManyArgs
    ?'include' extends U
    ? WithdrawUnboundInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof WithdrawUnboundInstruction ?WithdrawUnboundInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : WithdrawUnboundInstruction
  : WithdrawUnboundInstruction


  type WithdrawUnboundInstructionCountArgs = Merge<
    Omit<WithdrawUnboundInstructionFindManyArgs, 'select' | 'include'> & {
      select?: WithdrawUnboundInstructionCountAggregateInputType | true
    }
  >

  export interface WithdrawUnboundInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one WithdrawUnboundInstruction that matches the filter.
     * @param {WithdrawUnboundInstructionFindUniqueArgs} args - Arguments to find a WithdrawUnboundInstruction
     * @example
     * // Get one WithdrawUnboundInstruction
     * const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WithdrawUnboundInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WithdrawUnboundInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WithdrawUnboundInstruction'> extends True ? CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>> : CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction | null >, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T> | null >>

    /**
     * Find the first WithdrawUnboundInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionFindFirstArgs} args - Arguments to find a WithdrawUnboundInstruction
     * @example
     * // Get one WithdrawUnboundInstruction
     * const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WithdrawUnboundInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WithdrawUnboundInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WithdrawUnboundInstruction'> extends True ? CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>> : CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction | null >, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T> | null >>

    /**
     * Find zero or more WithdrawUnboundInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawUnboundInstructions
     * const withdrawUnboundInstructions = await prisma.withdrawUnboundInstruction.findMany()
     * 
     * // Get first 10 WithdrawUnboundInstructions
     * const withdrawUnboundInstructions = await prisma.withdrawUnboundInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawUnboundInstructionWithIdOnly = await prisma.withdrawUnboundInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WithdrawUnboundInstructionFindManyArgs>(
      args?: SelectSubset<T, WithdrawUnboundInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<WithdrawUnboundInstruction>>, PrismaPromise<Array<WithdrawUnboundInstructionGetPayload<T>>>>

    /**
     * Create a WithdrawUnboundInstruction.
     * @param {WithdrawUnboundInstructionCreateArgs} args - Arguments to create a WithdrawUnboundInstruction.
     * @example
     * // Create one WithdrawUnboundInstruction
     * const WithdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.create({
     *   data: {
     *     // ... data to create a WithdrawUnboundInstruction
     *   }
     * })
     * 
    **/
    create<T extends WithdrawUnboundInstructionCreateArgs>(
      args: SelectSubset<T, WithdrawUnboundInstructionCreateArgs>
    ): CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>>

    /**
     * Create many WithdrawUnboundInstructions.
     *     @param {WithdrawUnboundInstructionCreateManyArgs} args - Arguments to create many WithdrawUnboundInstructions.
     *     @example
     *     // Create many WithdrawUnboundInstructions
     *     const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WithdrawUnboundInstructionCreateManyArgs>(
      args?: SelectSubset<T, WithdrawUnboundInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WithdrawUnboundInstruction.
     * @param {WithdrawUnboundInstructionDeleteArgs} args - Arguments to delete one WithdrawUnboundInstruction.
     * @example
     * // Delete one WithdrawUnboundInstruction
     * const WithdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.delete({
     *   where: {
     *     // ... filter to delete one WithdrawUnboundInstruction
     *   }
     * })
     * 
    **/
    delete<T extends WithdrawUnboundInstructionDeleteArgs>(
      args: SelectSubset<T, WithdrawUnboundInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>>

    /**
     * Update one WithdrawUnboundInstruction.
     * @param {WithdrawUnboundInstructionUpdateArgs} args - Arguments to update one WithdrawUnboundInstruction.
     * @example
     * // Update one WithdrawUnboundInstruction
     * const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WithdrawUnboundInstructionUpdateArgs>(
      args: SelectSubset<T, WithdrawUnboundInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>>

    /**
     * Delete zero or more WithdrawUnboundInstructions.
     * @param {WithdrawUnboundInstructionDeleteManyArgs} args - Arguments to filter WithdrawUnboundInstructions to delete.
     * @example
     * // Delete a few WithdrawUnboundInstructions
     * const { count } = await prisma.withdrawUnboundInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WithdrawUnboundInstructionDeleteManyArgs>(
      args?: SelectSubset<T, WithdrawUnboundInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawUnboundInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawUnboundInstructions
     * const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WithdrawUnboundInstructionUpdateManyArgs>(
      args: SelectSubset<T, WithdrawUnboundInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WithdrawUnboundInstruction.
     * @param {WithdrawUnboundInstructionUpsertArgs} args - Arguments to update or create a WithdrawUnboundInstruction.
     * @example
     * // Update or create a WithdrawUnboundInstruction
     * const withdrawUnboundInstruction = await prisma.withdrawUnboundInstruction.upsert({
     *   create: {
     *     // ... data to create a WithdrawUnboundInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawUnboundInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends WithdrawUnboundInstructionUpsertArgs>(
      args: SelectSubset<T, WithdrawUnboundInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstruction>, Prisma__WithdrawUnboundInstructionClient<WithdrawUnboundInstructionGetPayload<T>>>

    /**
     * Count the number of WithdrawUnboundInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionCountArgs} args - Arguments to filter WithdrawUnboundInstructions to count.
     * @example
     * // Count the number of WithdrawUnboundInstructions
     * const count = await prisma.withdrawUnboundInstruction.count({
     *   where: {
     *     // ... the filter for the WithdrawUnboundInstructions we want to count
     *   }
     * })
    **/
    count<T extends WithdrawUnboundInstructionCountArgs>(
      args?: Subset<T, WithdrawUnboundInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawUnboundInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawUnboundInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawUnboundInstructionAggregateArgs>(args: Subset<T, WithdrawUnboundInstructionAggregateArgs>): PrismaPromise<GetWithdrawUnboundInstructionAggregateType<T>>

    /**
     * Group by WithdrawUnboundInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawUnboundInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WithdrawUnboundInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawUnboundInstructionGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawUnboundInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WithdrawUnboundInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawUnboundInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawUnboundInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WithdrawUnboundInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * WithdrawUnboundInstruction findUnique
   */
  export type WithdrawUnboundInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * Throw an Error if a WithdrawUnboundInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which WithdrawUnboundInstruction to fetch.
     * 
    **/
    where: WithdrawUnboundInstructionWhereUniqueInput
  }


  /**
   * WithdrawUnboundInstruction findFirst
   */
  export type WithdrawUnboundInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * Throw an Error if a WithdrawUnboundInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which WithdrawUnboundInstruction to fetch.
     * 
    **/
    where?: WithdrawUnboundInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawUnboundInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<WithdrawUnboundInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawUnboundInstructions.
     * 
    **/
    cursor?: WithdrawUnboundInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawUnboundInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawUnboundInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawUnboundInstructions.
     * 
    **/
    distinct?: Enumerable<WithdrawUnboundInstructionScalarFieldEnum>
  }


  /**
   * WithdrawUnboundInstruction findMany
   */
  export type WithdrawUnboundInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * Filter, which WithdrawUnboundInstructions to fetch.
     * 
    **/
    where?: WithdrawUnboundInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawUnboundInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<WithdrawUnboundInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawUnboundInstructions.
     * 
    **/
    cursor?: WithdrawUnboundInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawUnboundInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawUnboundInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WithdrawUnboundInstructionScalarFieldEnum>
  }


  /**
   * WithdrawUnboundInstruction create
   */
  export type WithdrawUnboundInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * The data needed to create a WithdrawUnboundInstruction.
     * 
    **/
    data: XOR<WithdrawUnboundInstructionCreateInput, WithdrawUnboundInstructionUncheckedCreateInput>
  }


  /**
   * WithdrawUnboundInstruction createMany
   */
  export type WithdrawUnboundInstructionCreateManyArgs = {
    data: Enumerable<WithdrawUnboundInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WithdrawUnboundInstruction update
   */
  export type WithdrawUnboundInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * The data needed to update a WithdrawUnboundInstruction.
     * 
    **/
    data: XOR<WithdrawUnboundInstructionUpdateInput, WithdrawUnboundInstructionUncheckedUpdateInput>
    /**
     * Choose, which WithdrawUnboundInstruction to update.
     * 
    **/
    where: WithdrawUnboundInstructionWhereUniqueInput
  }


  /**
   * WithdrawUnboundInstruction updateMany
   */
  export type WithdrawUnboundInstructionUpdateManyArgs = {
    data: XOR<WithdrawUnboundInstructionUpdateManyMutationInput, WithdrawUnboundInstructionUncheckedUpdateManyInput>
    where?: WithdrawUnboundInstructionWhereInput
  }


  /**
   * WithdrawUnboundInstruction upsert
   */
  export type WithdrawUnboundInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * The filter to search for the WithdrawUnboundInstruction to update in case it exists.
     * 
    **/
    where: WithdrawUnboundInstructionWhereUniqueInput
    /**
     * In case the WithdrawUnboundInstruction found by the `where` argument doesn't exist, create a new WithdrawUnboundInstruction with this data.
     * 
    **/
    create: XOR<WithdrawUnboundInstructionCreateInput, WithdrawUnboundInstructionUncheckedCreateInput>
    /**
     * In case the WithdrawUnboundInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WithdrawUnboundInstructionUpdateInput, WithdrawUnboundInstructionUncheckedUpdateInput>
  }


  /**
   * WithdrawUnboundInstruction delete
   */
  export type WithdrawUnboundInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
    /**
     * Filter which WithdrawUnboundInstruction to delete.
     * 
    **/
    where: WithdrawUnboundInstructionWhereUniqueInput
  }


  /**
   * WithdrawUnboundInstruction deleteMany
   */
  export type WithdrawUnboundInstructionDeleteManyArgs = {
    where?: WithdrawUnboundInstructionWhereInput
  }


  /**
   * WithdrawUnboundInstruction without action
   */
  export type WithdrawUnboundInstructionArgs = {
    /**
     * Select specific fields to fetch from the WithdrawUnboundInstruction
     * 
    **/
    select?: WithdrawUnboundInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WithdrawUnboundInstructionInclude | null
  }



  /**
   * Model ClaimInstruction
   */


  export type AggregateClaimInstruction = {
    _count: ClaimInstructionCountAggregateOutputType | null
    _avg: ClaimInstructionAvgAggregateOutputType | null
    _sum: ClaimInstructionSumAggregateOutputType | null
    _min: ClaimInstructionMinAggregateOutputType | null
    _max: ClaimInstructionMaxAggregateOutputType | null
  }

  export type ClaimInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
  }

  export type ClaimInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
  }

  export type ClaimInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    payer: string | null
    beneficiaryAuthority: string | null
    beneficiaryAccount: string | null
    authorityZeeTokenAccount: string | null
    settings: string | null
    poolAuthority: string | null
  }

  export type ClaimInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    claimId: number | null
    payer: string | null
    beneficiaryAuthority: string | null
    beneficiaryAccount: string | null
    authorityZeeTokenAccount: string | null
    settings: string | null
    poolAuthority: string | null
  }

  export type ClaimInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    claimId: number
    payer: number
    beneficiaryAuthority: number
    beneficiaryAccount: number
    authorityZeeTokenAccount: number
    settings: number
    poolAuthority: number
    _all: number
  }


  export type ClaimInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
  }

  export type ClaimInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
  }

  export type ClaimInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    payer?: true
    beneficiaryAuthority?: true
    beneficiaryAccount?: true
    authorityZeeTokenAccount?: true
    settings?: true
    poolAuthority?: true
  }

  export type ClaimInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    payer?: true
    beneficiaryAuthority?: true
    beneficiaryAccount?: true
    authorityZeeTokenAccount?: true
    settings?: true
    poolAuthority?: true
  }

  export type ClaimInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    claimId?: true
    payer?: true
    beneficiaryAuthority?: true
    beneficiaryAccount?: true
    authorityZeeTokenAccount?: true
    settings?: true
    poolAuthority?: true
    _all?: true
  }

  export type ClaimInstructionAggregateArgs = {
    /**
     * Filter which ClaimInstruction to aggregate.
     * 
    **/
    where?: ClaimInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClaimInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimInstructions
    **/
    _count?: true | ClaimInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimInstructionMaxAggregateInputType
  }

  export type GetClaimInstructionAggregateType<T extends ClaimInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimInstruction[P]>
      : GetScalarType<T[P], AggregateClaimInstruction[P]>
  }


    
    
  export type ClaimInstructionGroupByArgs = {
    where?: ClaimInstructionWhereInput
    orderBy?: Enumerable<ClaimInstructionOrderByWithAggregationInput>
    by: Array<ClaimInstructionScalarFieldEnum>
    having?: ClaimInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimInstructionCountAggregateInputType | true
    _avg?: ClaimInstructionAvgAggregateInputType
    _sum?: ClaimInstructionSumAggregateInputType
    _min?: ClaimInstructionMinAggregateInputType
    _max?: ClaimInstructionMaxAggregateInputType
  }


  export type ClaimInstructionGroupByOutputType = {
    id: number
    signatureId: number
    claimId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
    _count: ClaimInstructionCountAggregateOutputType | null
    _avg: ClaimInstructionAvgAggregateOutputType | null
    _sum: ClaimInstructionSumAggregateOutputType | null
    _min: ClaimInstructionMinAggregateOutputType | null
    _max: ClaimInstructionMaxAggregateOutputType | null
  }

  type GetClaimInstructionGroupByPayload<T extends ClaimInstructionGroupByArgs> = Promise<
    Array<
      PickArray<ClaimInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ClaimInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ClaimInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], ClaimInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type ClaimInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    claim?: boolean | ClaimArgs
    claimId?: boolean
    payer?: boolean
    beneficiaryAuthority?: boolean
    beneficiaryAccount?: boolean
    authorityZeeTokenAccount?: boolean
    settings?: boolean
    poolAuthority?: boolean
  }

  export type ClaimInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
    claim?: boolean | ClaimArgs
  }

  export type ClaimInstructionGetPayload<
    S extends boolean | null | undefined | ClaimInstructionArgs,
    U = keyof S
      > = S extends true
        ? ClaimInstruction
    : S extends undefined
    ? never
    : S extends ClaimInstructionArgs | ClaimInstructionFindManyArgs
    ?'include' extends U
    ? ClaimInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> :
        P extends 'claim'
        ? ClaimGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ClaimInstruction ?ClaimInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> :
        P extends 'claim'
        ? ClaimGetPayload<S['select'][P]> : never
  } 
    : ClaimInstruction
  : ClaimInstruction


  type ClaimInstructionCountArgs = Merge<
    Omit<ClaimInstructionFindManyArgs, 'select' | 'include'> & {
      select?: ClaimInstructionCountAggregateInputType | true
    }
  >

  export interface ClaimInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ClaimInstruction that matches the filter.
     * @param {ClaimInstructionFindUniqueArgs} args - Arguments to find a ClaimInstruction
     * @example
     * // Get one ClaimInstruction
     * const claimInstruction = await prisma.claimInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClaimInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClaimInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClaimInstruction'> extends True ? CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>> : CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction | null >, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T> | null >>

    /**
     * Find the first ClaimInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionFindFirstArgs} args - Arguments to find a ClaimInstruction
     * @example
     * // Get one ClaimInstruction
     * const claimInstruction = await prisma.claimInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClaimInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClaimInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClaimInstruction'> extends True ? CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>> : CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction | null >, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T> | null >>

    /**
     * Find zero or more ClaimInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimInstructions
     * const claimInstructions = await prisma.claimInstruction.findMany()
     * 
     * // Get first 10 ClaimInstructions
     * const claimInstructions = await prisma.claimInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimInstructionWithIdOnly = await prisma.claimInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClaimInstructionFindManyArgs>(
      args?: SelectSubset<T, ClaimInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ClaimInstruction>>, PrismaPromise<Array<ClaimInstructionGetPayload<T>>>>

    /**
     * Create a ClaimInstruction.
     * @param {ClaimInstructionCreateArgs} args - Arguments to create a ClaimInstruction.
     * @example
     * // Create one ClaimInstruction
     * const ClaimInstruction = await prisma.claimInstruction.create({
     *   data: {
     *     // ... data to create a ClaimInstruction
     *   }
     * })
     * 
    **/
    create<T extends ClaimInstructionCreateArgs>(
      args: SelectSubset<T, ClaimInstructionCreateArgs>
    ): CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>>

    /**
     * Create many ClaimInstructions.
     *     @param {ClaimInstructionCreateManyArgs} args - Arguments to create many ClaimInstructions.
     *     @example
     *     // Create many ClaimInstructions
     *     const claimInstruction = await prisma.claimInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClaimInstructionCreateManyArgs>(
      args?: SelectSubset<T, ClaimInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClaimInstruction.
     * @param {ClaimInstructionDeleteArgs} args - Arguments to delete one ClaimInstruction.
     * @example
     * // Delete one ClaimInstruction
     * const ClaimInstruction = await prisma.claimInstruction.delete({
     *   where: {
     *     // ... filter to delete one ClaimInstruction
     *   }
     * })
     * 
    **/
    delete<T extends ClaimInstructionDeleteArgs>(
      args: SelectSubset<T, ClaimInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>>

    /**
     * Update one ClaimInstruction.
     * @param {ClaimInstructionUpdateArgs} args - Arguments to update one ClaimInstruction.
     * @example
     * // Update one ClaimInstruction
     * const claimInstruction = await prisma.claimInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClaimInstructionUpdateArgs>(
      args: SelectSubset<T, ClaimInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>>

    /**
     * Delete zero or more ClaimInstructions.
     * @param {ClaimInstructionDeleteManyArgs} args - Arguments to filter ClaimInstructions to delete.
     * @example
     * // Delete a few ClaimInstructions
     * const { count } = await prisma.claimInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClaimInstructionDeleteManyArgs>(
      args?: SelectSubset<T, ClaimInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimInstructions
     * const claimInstruction = await prisma.claimInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClaimInstructionUpdateManyArgs>(
      args: SelectSubset<T, ClaimInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClaimInstruction.
     * @param {ClaimInstructionUpsertArgs} args - Arguments to update or create a ClaimInstruction.
     * @example
     * // Update or create a ClaimInstruction
     * const claimInstruction = await prisma.claimInstruction.upsert({
     *   create: {
     *     // ... data to create a ClaimInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends ClaimInstructionUpsertArgs>(
      args: SelectSubset<T, ClaimInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__ClaimInstructionClient<ClaimInstruction>, Prisma__ClaimInstructionClient<ClaimInstructionGetPayload<T>>>

    /**
     * Count the number of ClaimInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionCountArgs} args - Arguments to filter ClaimInstructions to count.
     * @example
     * // Count the number of ClaimInstructions
     * const count = await prisma.claimInstruction.count({
     *   where: {
     *     // ... the filter for the ClaimInstructions we want to count
     *   }
     * })
    **/
    count<T extends ClaimInstructionCountArgs>(
      args?: Subset<T, ClaimInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimInstructionAggregateArgs>(args: Subset<T, ClaimInstructionAggregateArgs>): PrismaPromise<GetClaimInstructionAggregateType<T>>

    /**
     * Group by ClaimInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimInstructionGroupByArgs['orderBy'] }
        : { orderBy?: ClaimInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClaimInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    claim<T extends ClaimArgs = {}>(args?: Subset<T, ClaimArgs>): CheckSelect<T, Prisma__ClaimClient<Claim | null >, Prisma__ClaimClient<ClaimGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ClaimInstruction findUnique
   */
  export type ClaimInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * Throw an Error if a ClaimInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClaimInstruction to fetch.
     * 
    **/
    where: ClaimInstructionWhereUniqueInput
  }


  /**
   * ClaimInstruction findFirst
   */
  export type ClaimInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * Throw an Error if a ClaimInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClaimInstruction to fetch.
     * 
    **/
    where?: ClaimInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimInstructions.
     * 
    **/
    cursor?: ClaimInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimInstructions.
     * 
    **/
    distinct?: Enumerable<ClaimInstructionScalarFieldEnum>
  }


  /**
   * ClaimInstruction findMany
   */
  export type ClaimInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * Filter, which ClaimInstructions to fetch.
     * 
    **/
    where?: ClaimInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ClaimInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimInstructions.
     * 
    **/
    cursor?: ClaimInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClaimInstructionScalarFieldEnum>
  }


  /**
   * ClaimInstruction create
   */
  export type ClaimInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * The data needed to create a ClaimInstruction.
     * 
    **/
    data: XOR<ClaimInstructionCreateInput, ClaimInstructionUncheckedCreateInput>
  }


  /**
   * ClaimInstruction createMany
   */
  export type ClaimInstructionCreateManyArgs = {
    data: Enumerable<ClaimInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClaimInstruction update
   */
  export type ClaimInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * The data needed to update a ClaimInstruction.
     * 
    **/
    data: XOR<ClaimInstructionUpdateInput, ClaimInstructionUncheckedUpdateInput>
    /**
     * Choose, which ClaimInstruction to update.
     * 
    **/
    where: ClaimInstructionWhereUniqueInput
  }


  /**
   * ClaimInstruction updateMany
   */
  export type ClaimInstructionUpdateManyArgs = {
    data: XOR<ClaimInstructionUpdateManyMutationInput, ClaimInstructionUncheckedUpdateManyInput>
    where?: ClaimInstructionWhereInput
  }


  /**
   * ClaimInstruction upsert
   */
  export type ClaimInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * The filter to search for the ClaimInstruction to update in case it exists.
     * 
    **/
    where: ClaimInstructionWhereUniqueInput
    /**
     * In case the ClaimInstruction found by the `where` argument doesn't exist, create a new ClaimInstruction with this data.
     * 
    **/
    create: XOR<ClaimInstructionCreateInput, ClaimInstructionUncheckedCreateInput>
    /**
     * In case the ClaimInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClaimInstructionUpdateInput, ClaimInstructionUncheckedUpdateInput>
  }


  /**
   * ClaimInstruction delete
   */
  export type ClaimInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
    /**
     * Filter which ClaimInstruction to delete.
     * 
    **/
    where: ClaimInstructionWhereUniqueInput
  }


  /**
   * ClaimInstruction deleteMany
   */
  export type ClaimInstructionDeleteManyArgs = {
    where?: ClaimInstructionWhereInput
  }


  /**
   * ClaimInstruction without action
   */
  export type ClaimInstructionArgs = {
    /**
     * Select specific fields to fetch from the ClaimInstruction
     * 
    **/
    select?: ClaimInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClaimInstructionInclude | null
  }



  /**
   * Model TransferEndpointInstruction
   */


  export type AggregateTransferEndpointInstruction = {
    _count: TransferEndpointInstructionCountAggregateOutputType | null
    _avg: TransferEndpointInstructionAvgAggregateOutputType | null
    _sum: TransferEndpointInstructionSumAggregateOutputType | null
    _min: TransferEndpointInstructionMinAggregateOutputType | null
    _max: TransferEndpointInstructionMaxAggregateOutputType | null
  }

  export type TransferEndpointInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
    authorityType: number | null
  }

  export type TransferEndpointInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
    authorityType: number | null
  }

  export type TransferEndpointInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpoint: string | null
    endpointOwnerAccount: string | null
    endpointOwnerSigner: string | null
    recipient: string | null
    authorityAddress: string | null
    authorityType: number | null
  }

  export type TransferEndpointInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpoint: string | null
    endpointOwnerAccount: string | null
    endpointOwnerSigner: string | null
    recipient: string | null
    authorityAddress: string | null
    authorityType: number | null
  }

  export type TransferEndpointInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    endpoint: number
    endpointOwnerAccount: number
    endpointOwnerSigner: number
    recipient: number
    authorityAddress: number
    authorityType: number
    _all: number
  }


  export type TransferEndpointInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
    authorityType?: true
  }

  export type TransferEndpointInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
    authorityType?: true
  }

  export type TransferEndpointInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    recipient?: true
    authorityAddress?: true
    authorityType?: true
  }

  export type TransferEndpointInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    recipient?: true
    authorityAddress?: true
    authorityType?: true
  }

  export type TransferEndpointInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    recipient?: true
    authorityAddress?: true
    authorityType?: true
    _all?: true
  }

  export type TransferEndpointInstructionAggregateArgs = {
    /**
     * Filter which TransferEndpointInstruction to aggregate.
     * 
    **/
    where?: TransferEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransferEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TransferEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferEndpointInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferEndpointInstructions
    **/
    _count?: true | TransferEndpointInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferEndpointInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferEndpointInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferEndpointInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferEndpointInstructionMaxAggregateInputType
  }

  export type GetTransferEndpointInstructionAggregateType<T extends TransferEndpointInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferEndpointInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferEndpointInstruction[P]>
      : GetScalarType<T[P], AggregateTransferEndpointInstruction[P]>
  }


    
    
  export type TransferEndpointInstructionGroupByArgs = {
    where?: TransferEndpointInstructionWhereInput
    orderBy?: Enumerable<TransferEndpointInstructionOrderByWithAggregationInput>
    by: Array<TransferEndpointInstructionScalarFieldEnum>
    having?: TransferEndpointInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferEndpointInstructionCountAggregateInputType | true
    _avg?: TransferEndpointInstructionAvgAggregateInputType
    _sum?: TransferEndpointInstructionSumAggregateInputType
    _min?: TransferEndpointInstructionMinAggregateInputType
    _max?: TransferEndpointInstructionMaxAggregateInputType
  }


  export type TransferEndpointInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
    _count: TransferEndpointInstructionCountAggregateOutputType | null
    _avg: TransferEndpointInstructionAvgAggregateOutputType | null
    _sum: TransferEndpointInstructionSumAggregateOutputType | null
    _min: TransferEndpointInstructionMinAggregateOutputType | null
    _max: TransferEndpointInstructionMaxAggregateOutputType | null
  }

  type GetTransferEndpointInstructionGroupByPayload<T extends TransferEndpointInstructionGroupByArgs> = Promise<
    Array<
      PickArray<TransferEndpointInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TransferEndpointInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TransferEndpointInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], TransferEndpointInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type TransferEndpointInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    endpoint?: boolean
    endpointOwnerAccount?: boolean
    endpointOwnerSigner?: boolean
    recipient?: boolean
    authorityAddress?: boolean
    authorityType?: boolean
  }

  export type TransferEndpointInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type TransferEndpointInstructionGetPayload<
    S extends boolean | null | undefined | TransferEndpointInstructionArgs,
    U = keyof S
      > = S extends true
        ? TransferEndpointInstruction
    : S extends undefined
    ? never
    : S extends TransferEndpointInstructionArgs | TransferEndpointInstructionFindManyArgs
    ?'include' extends U
    ? TransferEndpointInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TransferEndpointInstruction ?TransferEndpointInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : TransferEndpointInstruction
  : TransferEndpointInstruction


  type TransferEndpointInstructionCountArgs = Merge<
    Omit<TransferEndpointInstructionFindManyArgs, 'select' | 'include'> & {
      select?: TransferEndpointInstructionCountAggregateInputType | true
    }
  >

  export interface TransferEndpointInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TransferEndpointInstruction that matches the filter.
     * @param {TransferEndpointInstructionFindUniqueArgs} args - Arguments to find a TransferEndpointInstruction
     * @example
     * // Get one TransferEndpointInstruction
     * const transferEndpointInstruction = await prisma.transferEndpointInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransferEndpointInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransferEndpointInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TransferEndpointInstruction'> extends True ? CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>> : CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction | null >, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T> | null >>

    /**
     * Find the first TransferEndpointInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionFindFirstArgs} args - Arguments to find a TransferEndpointInstruction
     * @example
     * // Get one TransferEndpointInstruction
     * const transferEndpointInstruction = await prisma.transferEndpointInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransferEndpointInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransferEndpointInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TransferEndpointInstruction'> extends True ? CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>> : CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction | null >, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T> | null >>

    /**
     * Find zero or more TransferEndpointInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferEndpointInstructions
     * const transferEndpointInstructions = await prisma.transferEndpointInstruction.findMany()
     * 
     * // Get first 10 TransferEndpointInstructions
     * const transferEndpointInstructions = await prisma.transferEndpointInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferEndpointInstructionWithIdOnly = await prisma.transferEndpointInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransferEndpointInstructionFindManyArgs>(
      args?: SelectSubset<T, TransferEndpointInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TransferEndpointInstruction>>, PrismaPromise<Array<TransferEndpointInstructionGetPayload<T>>>>

    /**
     * Create a TransferEndpointInstruction.
     * @param {TransferEndpointInstructionCreateArgs} args - Arguments to create a TransferEndpointInstruction.
     * @example
     * // Create one TransferEndpointInstruction
     * const TransferEndpointInstruction = await prisma.transferEndpointInstruction.create({
     *   data: {
     *     // ... data to create a TransferEndpointInstruction
     *   }
     * })
     * 
    **/
    create<T extends TransferEndpointInstructionCreateArgs>(
      args: SelectSubset<T, TransferEndpointInstructionCreateArgs>
    ): CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>>

    /**
     * Create many TransferEndpointInstructions.
     *     @param {TransferEndpointInstructionCreateManyArgs} args - Arguments to create many TransferEndpointInstructions.
     *     @example
     *     // Create many TransferEndpointInstructions
     *     const transferEndpointInstruction = await prisma.transferEndpointInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransferEndpointInstructionCreateManyArgs>(
      args?: SelectSubset<T, TransferEndpointInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TransferEndpointInstruction.
     * @param {TransferEndpointInstructionDeleteArgs} args - Arguments to delete one TransferEndpointInstruction.
     * @example
     * // Delete one TransferEndpointInstruction
     * const TransferEndpointInstruction = await prisma.transferEndpointInstruction.delete({
     *   where: {
     *     // ... filter to delete one TransferEndpointInstruction
     *   }
     * })
     * 
    **/
    delete<T extends TransferEndpointInstructionDeleteArgs>(
      args: SelectSubset<T, TransferEndpointInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>>

    /**
     * Update one TransferEndpointInstruction.
     * @param {TransferEndpointInstructionUpdateArgs} args - Arguments to update one TransferEndpointInstruction.
     * @example
     * // Update one TransferEndpointInstruction
     * const transferEndpointInstruction = await prisma.transferEndpointInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransferEndpointInstructionUpdateArgs>(
      args: SelectSubset<T, TransferEndpointInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>>

    /**
     * Delete zero or more TransferEndpointInstructions.
     * @param {TransferEndpointInstructionDeleteManyArgs} args - Arguments to filter TransferEndpointInstructions to delete.
     * @example
     * // Delete a few TransferEndpointInstructions
     * const { count } = await prisma.transferEndpointInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransferEndpointInstructionDeleteManyArgs>(
      args?: SelectSubset<T, TransferEndpointInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferEndpointInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferEndpointInstructions
     * const transferEndpointInstruction = await prisma.transferEndpointInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransferEndpointInstructionUpdateManyArgs>(
      args: SelectSubset<T, TransferEndpointInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TransferEndpointInstruction.
     * @param {TransferEndpointInstructionUpsertArgs} args - Arguments to update or create a TransferEndpointInstruction.
     * @example
     * // Update or create a TransferEndpointInstruction
     * const transferEndpointInstruction = await prisma.transferEndpointInstruction.upsert({
     *   create: {
     *     // ... data to create a TransferEndpointInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferEndpointInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends TransferEndpointInstructionUpsertArgs>(
      args: SelectSubset<T, TransferEndpointInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__TransferEndpointInstructionClient<TransferEndpointInstruction>, Prisma__TransferEndpointInstructionClient<TransferEndpointInstructionGetPayload<T>>>

    /**
     * Count the number of TransferEndpointInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionCountArgs} args - Arguments to filter TransferEndpointInstructions to count.
     * @example
     * // Count the number of TransferEndpointInstructions
     * const count = await prisma.transferEndpointInstruction.count({
     *   where: {
     *     // ... the filter for the TransferEndpointInstructions we want to count
     *   }
     * })
    **/
    count<T extends TransferEndpointInstructionCountArgs>(
      args?: Subset<T, TransferEndpointInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferEndpointInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferEndpointInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransferEndpointInstructionAggregateArgs>(args: Subset<T, TransferEndpointInstructionAggregateArgs>): PrismaPromise<GetTransferEndpointInstructionAggregateType<T>>

    /**
     * Group by TransferEndpointInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferEndpointInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransferEndpointInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferEndpointInstructionGroupByArgs['orderBy'] }
        : { orderBy?: TransferEndpointInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransferEndpointInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferEndpointInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferEndpointInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransferEndpointInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TransferEndpointInstruction findUnique
   */
  export type TransferEndpointInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * Throw an Error if a TransferEndpointInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransferEndpointInstruction to fetch.
     * 
    **/
    where: TransferEndpointInstructionWhereUniqueInput
  }


  /**
   * TransferEndpointInstruction findFirst
   */
  export type TransferEndpointInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * Throw an Error if a TransferEndpointInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransferEndpointInstruction to fetch.
     * 
    **/
    where?: TransferEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransferEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferEndpointInstructions.
     * 
    **/
    cursor?: TransferEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferEndpointInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferEndpointInstructions.
     * 
    **/
    distinct?: Enumerable<TransferEndpointInstructionScalarFieldEnum>
  }


  /**
   * TransferEndpointInstruction findMany
   */
  export type TransferEndpointInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * Filter, which TransferEndpointInstructions to fetch.
     * 
    **/
    where?: TransferEndpointInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferEndpointInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransferEndpointInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferEndpointInstructions.
     * 
    **/
    cursor?: TransferEndpointInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferEndpointInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferEndpointInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransferEndpointInstructionScalarFieldEnum>
  }


  /**
   * TransferEndpointInstruction create
   */
  export type TransferEndpointInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * The data needed to create a TransferEndpointInstruction.
     * 
    **/
    data: XOR<TransferEndpointInstructionCreateInput, TransferEndpointInstructionUncheckedCreateInput>
  }


  /**
   * TransferEndpointInstruction createMany
   */
  export type TransferEndpointInstructionCreateManyArgs = {
    data: Enumerable<TransferEndpointInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TransferEndpointInstruction update
   */
  export type TransferEndpointInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * The data needed to update a TransferEndpointInstruction.
     * 
    **/
    data: XOR<TransferEndpointInstructionUpdateInput, TransferEndpointInstructionUncheckedUpdateInput>
    /**
     * Choose, which TransferEndpointInstruction to update.
     * 
    **/
    where: TransferEndpointInstructionWhereUniqueInput
  }


  /**
   * TransferEndpointInstruction updateMany
   */
  export type TransferEndpointInstructionUpdateManyArgs = {
    data: XOR<TransferEndpointInstructionUpdateManyMutationInput, TransferEndpointInstructionUncheckedUpdateManyInput>
    where?: TransferEndpointInstructionWhereInput
  }


  /**
   * TransferEndpointInstruction upsert
   */
  export type TransferEndpointInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * The filter to search for the TransferEndpointInstruction to update in case it exists.
     * 
    **/
    where: TransferEndpointInstructionWhereUniqueInput
    /**
     * In case the TransferEndpointInstruction found by the `where` argument doesn't exist, create a new TransferEndpointInstruction with this data.
     * 
    **/
    create: XOR<TransferEndpointInstructionCreateInput, TransferEndpointInstructionUncheckedCreateInput>
    /**
     * In case the TransferEndpointInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TransferEndpointInstructionUpdateInput, TransferEndpointInstructionUncheckedUpdateInput>
  }


  /**
   * TransferEndpointInstruction delete
   */
  export type TransferEndpointInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
    /**
     * Filter which TransferEndpointInstruction to delete.
     * 
    **/
    where: TransferEndpointInstructionWhereUniqueInput
  }


  /**
   * TransferEndpointInstruction deleteMany
   */
  export type TransferEndpointInstructionDeleteManyArgs = {
    where?: TransferEndpointInstructionWhereInput
  }


  /**
   * TransferEndpointInstruction without action
   */
  export type TransferEndpointInstructionArgs = {
    /**
     * Select specific fields to fetch from the TransferEndpointInstruction
     * 
    **/
    select?: TransferEndpointInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransferEndpointInstructionInclude | null
  }



  /**
   * Model ChangeBeneficiariesInstruction
   */


  export type AggregateChangeBeneficiariesInstruction = {
    _count: ChangeBeneficiariesInstructionCountAggregateOutputType | null
    _avg: ChangeBeneficiariesInstructionAvgAggregateOutputType | null
    _sum: ChangeBeneficiariesInstructionSumAggregateOutputType | null
    _min: ChangeBeneficiariesInstructionMinAggregateOutputType | null
    _max: ChangeBeneficiariesInstructionMaxAggregateOutputType | null
  }

  export type ChangeBeneficiariesInstructionAvgAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type ChangeBeneficiariesInstructionSumAggregateOutputType = {
    id: number | null
    signatureId: number | null
  }

  export type ChangeBeneficiariesInstructionMinAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpoint: string | null
    endpointOwnerAccount: string | null
    endpointOwnerSigner: string | null
    oldPrimaryBeneficiaryAccount: string | null
    oldSecondaryBeneficiaryAccount: string | null
    newPrimaryBeneficiaryAuthority: string | null
    newPrimaryBeneficiaryAccount: string | null
    newSecondaryBeneficiaryAuthority: string | null
    newSecondaryBeneficiaryAccount: string | null
    settings: string | null
  }

  export type ChangeBeneficiariesInstructionMaxAggregateOutputType = {
    id: number | null
    signatureId: number | null
    payer: string | null
    endpoint: string | null
    endpointOwnerAccount: string | null
    endpointOwnerSigner: string | null
    oldPrimaryBeneficiaryAccount: string | null
    oldSecondaryBeneficiaryAccount: string | null
    newPrimaryBeneficiaryAuthority: string | null
    newPrimaryBeneficiaryAccount: string | null
    newSecondaryBeneficiaryAuthority: string | null
    newSecondaryBeneficiaryAccount: string | null
    settings: string | null
  }

  export type ChangeBeneficiariesInstructionCountAggregateOutputType = {
    id: number
    signatureId: number
    payer: number
    endpoint: number
    endpointOwnerAccount: number
    endpointOwnerSigner: number
    oldPrimaryBeneficiaryAccount: number
    oldSecondaryBeneficiaryAccount: number
    newPrimaryBeneficiaryAuthority: number
    newPrimaryBeneficiaryAccount: number
    newSecondaryBeneficiaryAuthority: number
    newSecondaryBeneficiaryAccount: number
    settings: number
    _all: number
  }


  export type ChangeBeneficiariesInstructionAvgAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type ChangeBeneficiariesInstructionSumAggregateInputType = {
    id?: true
    signatureId?: true
  }

  export type ChangeBeneficiariesInstructionMinAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    oldPrimaryBeneficiaryAccount?: true
    oldSecondaryBeneficiaryAccount?: true
    newPrimaryBeneficiaryAuthority?: true
    newPrimaryBeneficiaryAccount?: true
    newSecondaryBeneficiaryAuthority?: true
    newSecondaryBeneficiaryAccount?: true
    settings?: true
  }

  export type ChangeBeneficiariesInstructionMaxAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    oldPrimaryBeneficiaryAccount?: true
    oldSecondaryBeneficiaryAccount?: true
    newPrimaryBeneficiaryAuthority?: true
    newPrimaryBeneficiaryAccount?: true
    newSecondaryBeneficiaryAuthority?: true
    newSecondaryBeneficiaryAccount?: true
    settings?: true
  }

  export type ChangeBeneficiariesInstructionCountAggregateInputType = {
    id?: true
    signatureId?: true
    payer?: true
    endpoint?: true
    endpointOwnerAccount?: true
    endpointOwnerSigner?: true
    oldPrimaryBeneficiaryAccount?: true
    oldSecondaryBeneficiaryAccount?: true
    newPrimaryBeneficiaryAuthority?: true
    newPrimaryBeneficiaryAccount?: true
    newSecondaryBeneficiaryAuthority?: true
    newSecondaryBeneficiaryAccount?: true
    settings?: true
    _all?: true
  }

  export type ChangeBeneficiariesInstructionAggregateArgs = {
    /**
     * Filter which ChangeBeneficiariesInstruction to aggregate.
     * 
    **/
    where?: ChangeBeneficiariesInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeBeneficiariesInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ChangeBeneficiariesInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ChangeBeneficiariesInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeBeneficiariesInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeBeneficiariesInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChangeBeneficiariesInstructions
    **/
    _count?: true | ChangeBeneficiariesInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChangeBeneficiariesInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChangeBeneficiariesInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChangeBeneficiariesInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChangeBeneficiariesInstructionMaxAggregateInputType
  }

  export type GetChangeBeneficiariesInstructionAggregateType<T extends ChangeBeneficiariesInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateChangeBeneficiariesInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChangeBeneficiariesInstruction[P]>
      : GetScalarType<T[P], AggregateChangeBeneficiariesInstruction[P]>
  }


    
    
  export type ChangeBeneficiariesInstructionGroupByArgs = {
    where?: ChangeBeneficiariesInstructionWhereInput
    orderBy?: Enumerable<ChangeBeneficiariesInstructionOrderByWithAggregationInput>
    by: Array<ChangeBeneficiariesInstructionScalarFieldEnum>
    having?: ChangeBeneficiariesInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChangeBeneficiariesInstructionCountAggregateInputType | true
    _avg?: ChangeBeneficiariesInstructionAvgAggregateInputType
    _sum?: ChangeBeneficiariesInstructionSumAggregateInputType
    _min?: ChangeBeneficiariesInstructionMinAggregateInputType
    _max?: ChangeBeneficiariesInstructionMaxAggregateInputType
  }


  export type ChangeBeneficiariesInstructionGroupByOutputType = {
    id: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
    _count: ChangeBeneficiariesInstructionCountAggregateOutputType | null
    _avg: ChangeBeneficiariesInstructionAvgAggregateOutputType | null
    _sum: ChangeBeneficiariesInstructionSumAggregateOutputType | null
    _min: ChangeBeneficiariesInstructionMinAggregateOutputType | null
    _max: ChangeBeneficiariesInstructionMaxAggregateOutputType | null
  }

  type GetChangeBeneficiariesInstructionGroupByPayload<T extends ChangeBeneficiariesInstructionGroupByArgs> = Promise<
    Array<
      PickArray<ChangeBeneficiariesInstructionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ChangeBeneficiariesInstructionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ChangeBeneficiariesInstructionGroupByOutputType[P]> 
            : GetScalarType<T[P], ChangeBeneficiariesInstructionGroupByOutputType[P]>
        }
      > 
    >


  export type ChangeBeneficiariesInstructionSelect = {
    id?: boolean
    signature?: boolean | StakeProgramSignatureArgs
    signatureId?: boolean
    payer?: boolean
    endpoint?: boolean
    endpointOwnerAccount?: boolean
    endpointOwnerSigner?: boolean
    oldPrimaryBeneficiaryAccount?: boolean
    oldSecondaryBeneficiaryAccount?: boolean
    newPrimaryBeneficiaryAuthority?: boolean
    newPrimaryBeneficiaryAccount?: boolean
    newSecondaryBeneficiaryAuthority?: boolean
    newSecondaryBeneficiaryAccount?: boolean
    settings?: boolean
  }

  export type ChangeBeneficiariesInstructionInclude = {
    signature?: boolean | StakeProgramSignatureArgs
  }

  export type ChangeBeneficiariesInstructionGetPayload<
    S extends boolean | null | undefined | ChangeBeneficiariesInstructionArgs,
    U = keyof S
      > = S extends true
        ? ChangeBeneficiariesInstruction
    : S extends undefined
    ? never
    : S extends ChangeBeneficiariesInstructionArgs | ChangeBeneficiariesInstructionFindManyArgs
    ?'include' extends U
    ? ChangeBeneficiariesInstruction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ChangeBeneficiariesInstruction ?ChangeBeneficiariesInstruction [P]
  : 
          P extends 'signature'
        ? StakeProgramSignatureGetPayload<S['select'][P]> : never
  } 
    : ChangeBeneficiariesInstruction
  : ChangeBeneficiariesInstruction


  type ChangeBeneficiariesInstructionCountArgs = Merge<
    Omit<ChangeBeneficiariesInstructionFindManyArgs, 'select' | 'include'> & {
      select?: ChangeBeneficiariesInstructionCountAggregateInputType | true
    }
  >

  export interface ChangeBeneficiariesInstructionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ChangeBeneficiariesInstruction that matches the filter.
     * @param {ChangeBeneficiariesInstructionFindUniqueArgs} args - Arguments to find a ChangeBeneficiariesInstruction
     * @example
     * // Get one ChangeBeneficiariesInstruction
     * const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChangeBeneficiariesInstructionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ChangeBeneficiariesInstruction'> extends True ? CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>> : CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction | null >, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T> | null >>

    /**
     * Find the first ChangeBeneficiariesInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionFindFirstArgs} args - Arguments to find a ChangeBeneficiariesInstruction
     * @example
     * // Get one ChangeBeneficiariesInstruction
     * const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChangeBeneficiariesInstructionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChangeBeneficiariesInstructionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ChangeBeneficiariesInstruction'> extends True ? CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>> : CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction | null >, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T> | null >>

    /**
     * Find zero or more ChangeBeneficiariesInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChangeBeneficiariesInstructions
     * const changeBeneficiariesInstructions = await prisma.changeBeneficiariesInstruction.findMany()
     * 
     * // Get first 10 ChangeBeneficiariesInstructions
     * const changeBeneficiariesInstructions = await prisma.changeBeneficiariesInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const changeBeneficiariesInstructionWithIdOnly = await prisma.changeBeneficiariesInstruction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChangeBeneficiariesInstructionFindManyArgs>(
      args?: SelectSubset<T, ChangeBeneficiariesInstructionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ChangeBeneficiariesInstruction>>, PrismaPromise<Array<ChangeBeneficiariesInstructionGetPayload<T>>>>

    /**
     * Create a ChangeBeneficiariesInstruction.
     * @param {ChangeBeneficiariesInstructionCreateArgs} args - Arguments to create a ChangeBeneficiariesInstruction.
     * @example
     * // Create one ChangeBeneficiariesInstruction
     * const ChangeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.create({
     *   data: {
     *     // ... data to create a ChangeBeneficiariesInstruction
     *   }
     * })
     * 
    **/
    create<T extends ChangeBeneficiariesInstructionCreateArgs>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionCreateArgs>
    ): CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>>

    /**
     * Create many ChangeBeneficiariesInstructions.
     *     @param {ChangeBeneficiariesInstructionCreateManyArgs} args - Arguments to create many ChangeBeneficiariesInstructions.
     *     @example
     *     // Create many ChangeBeneficiariesInstructions
     *     const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChangeBeneficiariesInstructionCreateManyArgs>(
      args?: SelectSubset<T, ChangeBeneficiariesInstructionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ChangeBeneficiariesInstruction.
     * @param {ChangeBeneficiariesInstructionDeleteArgs} args - Arguments to delete one ChangeBeneficiariesInstruction.
     * @example
     * // Delete one ChangeBeneficiariesInstruction
     * const ChangeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.delete({
     *   where: {
     *     // ... filter to delete one ChangeBeneficiariesInstruction
     *   }
     * })
     * 
    **/
    delete<T extends ChangeBeneficiariesInstructionDeleteArgs>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionDeleteArgs>
    ): CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>>

    /**
     * Update one ChangeBeneficiariesInstruction.
     * @param {ChangeBeneficiariesInstructionUpdateArgs} args - Arguments to update one ChangeBeneficiariesInstruction.
     * @example
     * // Update one ChangeBeneficiariesInstruction
     * const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChangeBeneficiariesInstructionUpdateArgs>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionUpdateArgs>
    ): CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>>

    /**
     * Delete zero or more ChangeBeneficiariesInstructions.
     * @param {ChangeBeneficiariesInstructionDeleteManyArgs} args - Arguments to filter ChangeBeneficiariesInstructions to delete.
     * @example
     * // Delete a few ChangeBeneficiariesInstructions
     * const { count } = await prisma.changeBeneficiariesInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChangeBeneficiariesInstructionDeleteManyArgs>(
      args?: SelectSubset<T, ChangeBeneficiariesInstructionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChangeBeneficiariesInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChangeBeneficiariesInstructions
     * const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChangeBeneficiariesInstructionUpdateManyArgs>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ChangeBeneficiariesInstruction.
     * @param {ChangeBeneficiariesInstructionUpsertArgs} args - Arguments to update or create a ChangeBeneficiariesInstruction.
     * @example
     * // Update or create a ChangeBeneficiariesInstruction
     * const changeBeneficiariesInstruction = await prisma.changeBeneficiariesInstruction.upsert({
     *   create: {
     *     // ... data to create a ChangeBeneficiariesInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChangeBeneficiariesInstruction we want to update
     *   }
     * })
    **/
    upsert<T extends ChangeBeneficiariesInstructionUpsertArgs>(
      args: SelectSubset<T, ChangeBeneficiariesInstructionUpsertArgs>
    ): CheckSelect<T, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstruction>, Prisma__ChangeBeneficiariesInstructionClient<ChangeBeneficiariesInstructionGetPayload<T>>>

    /**
     * Count the number of ChangeBeneficiariesInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionCountArgs} args - Arguments to filter ChangeBeneficiariesInstructions to count.
     * @example
     * // Count the number of ChangeBeneficiariesInstructions
     * const count = await prisma.changeBeneficiariesInstruction.count({
     *   where: {
     *     // ... the filter for the ChangeBeneficiariesInstructions we want to count
     *   }
     * })
    **/
    count<T extends ChangeBeneficiariesInstructionCountArgs>(
      args?: Subset<T, ChangeBeneficiariesInstructionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChangeBeneficiariesInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChangeBeneficiariesInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChangeBeneficiariesInstructionAggregateArgs>(args: Subset<T, ChangeBeneficiariesInstructionAggregateArgs>): PrismaPromise<GetChangeBeneficiariesInstructionAggregateType<T>>

    /**
     * Group by ChangeBeneficiariesInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeBeneficiariesInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChangeBeneficiariesInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChangeBeneficiariesInstructionGroupByArgs['orderBy'] }
        : { orderBy?: ChangeBeneficiariesInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChangeBeneficiariesInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangeBeneficiariesInstructionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChangeBeneficiariesInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChangeBeneficiariesInstructionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends StakeProgramSignatureArgs = {}>(args?: Subset<T, StakeProgramSignatureArgs>): CheckSelect<T, Prisma__StakeProgramSignatureClient<StakeProgramSignature | null >, Prisma__StakeProgramSignatureClient<StakeProgramSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ChangeBeneficiariesInstruction findUnique
   */
  export type ChangeBeneficiariesInstructionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * Throw an Error if a ChangeBeneficiariesInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ChangeBeneficiariesInstruction to fetch.
     * 
    **/
    where: ChangeBeneficiariesInstructionWhereUniqueInput
  }


  /**
   * ChangeBeneficiariesInstruction findFirst
   */
  export type ChangeBeneficiariesInstructionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * Throw an Error if a ChangeBeneficiariesInstruction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ChangeBeneficiariesInstruction to fetch.
     * 
    **/
    where?: ChangeBeneficiariesInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeBeneficiariesInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ChangeBeneficiariesInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChangeBeneficiariesInstructions.
     * 
    **/
    cursor?: ChangeBeneficiariesInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeBeneficiariesInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeBeneficiariesInstructions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChangeBeneficiariesInstructions.
     * 
    **/
    distinct?: Enumerable<ChangeBeneficiariesInstructionScalarFieldEnum>
  }


  /**
   * ChangeBeneficiariesInstruction findMany
   */
  export type ChangeBeneficiariesInstructionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * Filter, which ChangeBeneficiariesInstructions to fetch.
     * 
    **/
    where?: ChangeBeneficiariesInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeBeneficiariesInstructions to fetch.
     * 
    **/
    orderBy?: Enumerable<ChangeBeneficiariesInstructionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChangeBeneficiariesInstructions.
     * 
    **/
    cursor?: ChangeBeneficiariesInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeBeneficiariesInstructions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeBeneficiariesInstructions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ChangeBeneficiariesInstructionScalarFieldEnum>
  }


  /**
   * ChangeBeneficiariesInstruction create
   */
  export type ChangeBeneficiariesInstructionCreateArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * The data needed to create a ChangeBeneficiariesInstruction.
     * 
    **/
    data: XOR<ChangeBeneficiariesInstructionCreateInput, ChangeBeneficiariesInstructionUncheckedCreateInput>
  }


  /**
   * ChangeBeneficiariesInstruction createMany
   */
  export type ChangeBeneficiariesInstructionCreateManyArgs = {
    data: Enumerable<ChangeBeneficiariesInstructionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ChangeBeneficiariesInstruction update
   */
  export type ChangeBeneficiariesInstructionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * The data needed to update a ChangeBeneficiariesInstruction.
     * 
    **/
    data: XOR<ChangeBeneficiariesInstructionUpdateInput, ChangeBeneficiariesInstructionUncheckedUpdateInput>
    /**
     * Choose, which ChangeBeneficiariesInstruction to update.
     * 
    **/
    where: ChangeBeneficiariesInstructionWhereUniqueInput
  }


  /**
   * ChangeBeneficiariesInstruction updateMany
   */
  export type ChangeBeneficiariesInstructionUpdateManyArgs = {
    data: XOR<ChangeBeneficiariesInstructionUpdateManyMutationInput, ChangeBeneficiariesInstructionUncheckedUpdateManyInput>
    where?: ChangeBeneficiariesInstructionWhereInput
  }


  /**
   * ChangeBeneficiariesInstruction upsert
   */
  export type ChangeBeneficiariesInstructionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * The filter to search for the ChangeBeneficiariesInstruction to update in case it exists.
     * 
    **/
    where: ChangeBeneficiariesInstructionWhereUniqueInput
    /**
     * In case the ChangeBeneficiariesInstruction found by the `where` argument doesn't exist, create a new ChangeBeneficiariesInstruction with this data.
     * 
    **/
    create: XOR<ChangeBeneficiariesInstructionCreateInput, ChangeBeneficiariesInstructionUncheckedCreateInput>
    /**
     * In case the ChangeBeneficiariesInstruction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ChangeBeneficiariesInstructionUpdateInput, ChangeBeneficiariesInstructionUncheckedUpdateInput>
  }


  /**
   * ChangeBeneficiariesInstruction delete
   */
  export type ChangeBeneficiariesInstructionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
    /**
     * Filter which ChangeBeneficiariesInstruction to delete.
     * 
    **/
    where: ChangeBeneficiariesInstructionWhereUniqueInput
  }


  /**
   * ChangeBeneficiariesInstruction deleteMany
   */
  export type ChangeBeneficiariesInstructionDeleteManyArgs = {
    where?: ChangeBeneficiariesInstructionWhereInput
  }


  /**
   * ChangeBeneficiariesInstruction without action
   */
  export type ChangeBeneficiariesInstructionArgs = {
    /**
     * Select specific fields to fetch from the ChangeBeneficiariesInstruction
     * 
    **/
    select?: ChangeBeneficiariesInstructionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChangeBeneficiariesInstructionInclude | null
  }



  /**
   * Model ZeeSplSignature
   */


  export type AggregateZeeSplSignature = {
    _count: ZeeSplSignatureCountAggregateOutputType | null
    _avg: ZeeSplSignatureAvgAggregateOutputType | null
    _sum: ZeeSplSignatureSumAggregateOutputType | null
    _min: ZeeSplSignatureMinAggregateOutputType | null
    _max: ZeeSplSignatureMaxAggregateOutputType | null
  }

  export type ZeeSplSignatureAvgAggregateOutputType = {
    id: number | null
    slot: number | null
    fee: number | null
  }

  export type ZeeSplSignatureSumAggregateOutputType = {
    id: number | null
    slot: bigint | null
    fee: bigint | null
  }

  export type ZeeSplSignatureMinAggregateOutputType = {
    id: number | null
    signature: string | null
    blockTime: Date | null
    slot: bigint | null
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean | null
  }

  export type ZeeSplSignatureMaxAggregateOutputType = {
    id: number | null
    signature: string | null
    blockTime: Date | null
    slot: bigint | null
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean | null
  }

  export type ZeeSplSignatureCountAggregateOutputType = {
    id: number
    signature: number
    blockTime: number
    slot: number
    recentBlockHash: number
    fee: number
    processed: number
    _all: number
  }


  export type ZeeSplSignatureAvgAggregateInputType = {
    id?: true
    slot?: true
    fee?: true
  }

  export type ZeeSplSignatureSumAggregateInputType = {
    id?: true
    slot?: true
    fee?: true
  }

  export type ZeeSplSignatureMinAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
  }

  export type ZeeSplSignatureMaxAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
  }

  export type ZeeSplSignatureCountAggregateInputType = {
    id?: true
    signature?: true
    blockTime?: true
    slot?: true
    recentBlockHash?: true
    fee?: true
    processed?: true
    _all?: true
  }

  export type ZeeSplSignatureAggregateArgs = {
    /**
     * Filter which ZeeSplSignature to aggregate.
     * 
    **/
    where?: ZeeSplSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZeeSplSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<ZeeSplSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZeeSplSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZeeSplSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZeeSplSignatures.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZeeSplSignatures
    **/
    _count?: true | ZeeSplSignatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZeeSplSignatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZeeSplSignatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZeeSplSignatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZeeSplSignatureMaxAggregateInputType
  }

  export type GetZeeSplSignatureAggregateType<T extends ZeeSplSignatureAggregateArgs> = {
        [P in keyof T & keyof AggregateZeeSplSignature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZeeSplSignature[P]>
      : GetScalarType<T[P], AggregateZeeSplSignature[P]>
  }


    
    
  export type ZeeSplSignatureGroupByArgs = {
    where?: ZeeSplSignatureWhereInput
    orderBy?: Enumerable<ZeeSplSignatureOrderByWithAggregationInput>
    by: Array<ZeeSplSignatureScalarFieldEnum>
    having?: ZeeSplSignatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZeeSplSignatureCountAggregateInputType | true
    _avg?: ZeeSplSignatureAvgAggregateInputType
    _sum?: ZeeSplSignatureSumAggregateInputType
    _min?: ZeeSplSignatureMinAggregateInputType
    _max?: ZeeSplSignatureMaxAggregateInputType
  }


  export type ZeeSplSignatureGroupByOutputType = {
    id: number
    signature: string
    blockTime: Date
    slot: bigint
    recentBlockHash: string | null
    fee: bigint | null
    processed: boolean
    _count: ZeeSplSignatureCountAggregateOutputType | null
    _avg: ZeeSplSignatureAvgAggregateOutputType | null
    _sum: ZeeSplSignatureSumAggregateOutputType | null
    _min: ZeeSplSignatureMinAggregateOutputType | null
    _max: ZeeSplSignatureMaxAggregateOutputType | null
  }

  type GetZeeSplSignatureGroupByPayload<T extends ZeeSplSignatureGroupByArgs> = Promise<
    Array<
      PickArray<ZeeSplSignatureGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZeeSplSignatureGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZeeSplSignatureGroupByOutputType[P]> 
            : GetScalarType<T[P], ZeeSplSignatureGroupByOutputType[P]>
        }
      > 
    >


  export type ZeeSplSignatureSelect = {
    id?: boolean
    signature?: boolean
    blockTime?: boolean
    slot?: boolean
    recentBlockHash?: boolean
    fee?: boolean
    processed?: boolean
    postBalances?: boolean | PostTransferBalanceFindManyArgs
    _count?: boolean | ZeeSplSignatureCountOutputTypeArgs
  }

  export type ZeeSplSignatureInclude = {
    postBalances?: boolean | PostTransferBalanceFindManyArgs
    _count?: boolean | ZeeSplSignatureCountOutputTypeArgs
  }

  export type ZeeSplSignatureGetPayload<
    S extends boolean | null | undefined | ZeeSplSignatureArgs,
    U = keyof S
      > = S extends true
        ? ZeeSplSignature
    : S extends undefined
    ? never
    : S extends ZeeSplSignatureArgs | ZeeSplSignatureFindManyArgs
    ?'include' extends U
    ? ZeeSplSignature  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'postBalances'
        ? Array < PostTransferBalanceGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ZeeSplSignatureCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZeeSplSignature ?ZeeSplSignature [P]
  : 
          P extends 'postBalances'
        ? Array < PostTransferBalanceGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ZeeSplSignatureCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : ZeeSplSignature
  : ZeeSplSignature


  type ZeeSplSignatureCountArgs = Merge<
    Omit<ZeeSplSignatureFindManyArgs, 'select' | 'include'> & {
      select?: ZeeSplSignatureCountAggregateInputType | true
    }
  >

  export interface ZeeSplSignatureDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZeeSplSignature that matches the filter.
     * @param {ZeeSplSignatureFindUniqueArgs} args - Arguments to find a ZeeSplSignature
     * @example
     * // Get one ZeeSplSignature
     * const zeeSplSignature = await prisma.zeeSplSignature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZeeSplSignatureFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZeeSplSignatureFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZeeSplSignature'> extends True ? CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>> : CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature | null >, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T> | null >>

    /**
     * Find the first ZeeSplSignature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureFindFirstArgs} args - Arguments to find a ZeeSplSignature
     * @example
     * // Get one ZeeSplSignature
     * const zeeSplSignature = await prisma.zeeSplSignature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZeeSplSignatureFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZeeSplSignatureFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZeeSplSignature'> extends True ? CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>> : CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature | null >, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T> | null >>

    /**
     * Find zero or more ZeeSplSignatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZeeSplSignatures
     * const zeeSplSignatures = await prisma.zeeSplSignature.findMany()
     * 
     * // Get first 10 ZeeSplSignatures
     * const zeeSplSignatures = await prisma.zeeSplSignature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zeeSplSignatureWithIdOnly = await prisma.zeeSplSignature.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ZeeSplSignatureFindManyArgs>(
      args?: SelectSubset<T, ZeeSplSignatureFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZeeSplSignature>>, PrismaPromise<Array<ZeeSplSignatureGetPayload<T>>>>

    /**
     * Create a ZeeSplSignature.
     * @param {ZeeSplSignatureCreateArgs} args - Arguments to create a ZeeSplSignature.
     * @example
     * // Create one ZeeSplSignature
     * const ZeeSplSignature = await prisma.zeeSplSignature.create({
     *   data: {
     *     // ... data to create a ZeeSplSignature
     *   }
     * })
     * 
    **/
    create<T extends ZeeSplSignatureCreateArgs>(
      args: SelectSubset<T, ZeeSplSignatureCreateArgs>
    ): CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>>

    /**
     * Create many ZeeSplSignatures.
     *     @param {ZeeSplSignatureCreateManyArgs} args - Arguments to create many ZeeSplSignatures.
     *     @example
     *     // Create many ZeeSplSignatures
     *     const zeeSplSignature = await prisma.zeeSplSignature.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZeeSplSignatureCreateManyArgs>(
      args?: SelectSubset<T, ZeeSplSignatureCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZeeSplSignature.
     * @param {ZeeSplSignatureDeleteArgs} args - Arguments to delete one ZeeSplSignature.
     * @example
     * // Delete one ZeeSplSignature
     * const ZeeSplSignature = await prisma.zeeSplSignature.delete({
     *   where: {
     *     // ... filter to delete one ZeeSplSignature
     *   }
     * })
     * 
    **/
    delete<T extends ZeeSplSignatureDeleteArgs>(
      args: SelectSubset<T, ZeeSplSignatureDeleteArgs>
    ): CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>>

    /**
     * Update one ZeeSplSignature.
     * @param {ZeeSplSignatureUpdateArgs} args - Arguments to update one ZeeSplSignature.
     * @example
     * // Update one ZeeSplSignature
     * const zeeSplSignature = await prisma.zeeSplSignature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZeeSplSignatureUpdateArgs>(
      args: SelectSubset<T, ZeeSplSignatureUpdateArgs>
    ): CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>>

    /**
     * Delete zero or more ZeeSplSignatures.
     * @param {ZeeSplSignatureDeleteManyArgs} args - Arguments to filter ZeeSplSignatures to delete.
     * @example
     * // Delete a few ZeeSplSignatures
     * const { count } = await prisma.zeeSplSignature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZeeSplSignatureDeleteManyArgs>(
      args?: SelectSubset<T, ZeeSplSignatureDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZeeSplSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZeeSplSignatures
     * const zeeSplSignature = await prisma.zeeSplSignature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZeeSplSignatureUpdateManyArgs>(
      args: SelectSubset<T, ZeeSplSignatureUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZeeSplSignature.
     * @param {ZeeSplSignatureUpsertArgs} args - Arguments to update or create a ZeeSplSignature.
     * @example
     * // Update or create a ZeeSplSignature
     * const zeeSplSignature = await prisma.zeeSplSignature.upsert({
     *   create: {
     *     // ... data to create a ZeeSplSignature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZeeSplSignature we want to update
     *   }
     * })
    **/
    upsert<T extends ZeeSplSignatureUpsertArgs>(
      args: SelectSubset<T, ZeeSplSignatureUpsertArgs>
    ): CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature>, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T>>>

    /**
     * Count the number of ZeeSplSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureCountArgs} args - Arguments to filter ZeeSplSignatures to count.
     * @example
     * // Count the number of ZeeSplSignatures
     * const count = await prisma.zeeSplSignature.count({
     *   where: {
     *     // ... the filter for the ZeeSplSignatures we want to count
     *   }
     * })
    **/
    count<T extends ZeeSplSignatureCountArgs>(
      args?: Subset<T, ZeeSplSignatureCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZeeSplSignatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZeeSplSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZeeSplSignatureAggregateArgs>(args: Subset<T, ZeeSplSignatureAggregateArgs>): PrismaPromise<GetZeeSplSignatureAggregateType<T>>

    /**
     * Group by ZeeSplSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZeeSplSignatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZeeSplSignatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZeeSplSignatureGroupByArgs['orderBy'] }
        : { orderBy?: ZeeSplSignatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZeeSplSignatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZeeSplSignatureGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZeeSplSignature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZeeSplSignatureClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    postBalances<T extends PostTransferBalanceFindManyArgs = {}>(args?: Subset<T, PostTransferBalanceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostTransferBalance>>, PrismaPromise<Array<PostTransferBalanceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZeeSplSignature findUnique
   */
  export type ZeeSplSignatureFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * Throw an Error if a ZeeSplSignature can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZeeSplSignature to fetch.
     * 
    **/
    where: ZeeSplSignatureWhereUniqueInput
  }


  /**
   * ZeeSplSignature findFirst
   */
  export type ZeeSplSignatureFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * Throw an Error if a ZeeSplSignature can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZeeSplSignature to fetch.
     * 
    **/
    where?: ZeeSplSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZeeSplSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<ZeeSplSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZeeSplSignatures.
     * 
    **/
    cursor?: ZeeSplSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZeeSplSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZeeSplSignatures.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZeeSplSignatures.
     * 
    **/
    distinct?: Enumerable<ZeeSplSignatureScalarFieldEnum>
  }


  /**
   * ZeeSplSignature findMany
   */
  export type ZeeSplSignatureFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * Filter, which ZeeSplSignatures to fetch.
     * 
    **/
    where?: ZeeSplSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZeeSplSignatures to fetch.
     * 
    **/
    orderBy?: Enumerable<ZeeSplSignatureOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZeeSplSignatures.
     * 
    **/
    cursor?: ZeeSplSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZeeSplSignatures from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZeeSplSignatures.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZeeSplSignatureScalarFieldEnum>
  }


  /**
   * ZeeSplSignature create
   */
  export type ZeeSplSignatureCreateArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * The data needed to create a ZeeSplSignature.
     * 
    **/
    data: XOR<ZeeSplSignatureCreateInput, ZeeSplSignatureUncheckedCreateInput>
  }


  /**
   * ZeeSplSignature createMany
   */
  export type ZeeSplSignatureCreateManyArgs = {
    data: Enumerable<ZeeSplSignatureCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZeeSplSignature update
   */
  export type ZeeSplSignatureUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * The data needed to update a ZeeSplSignature.
     * 
    **/
    data: XOR<ZeeSplSignatureUpdateInput, ZeeSplSignatureUncheckedUpdateInput>
    /**
     * Choose, which ZeeSplSignature to update.
     * 
    **/
    where: ZeeSplSignatureWhereUniqueInput
  }


  /**
   * ZeeSplSignature updateMany
   */
  export type ZeeSplSignatureUpdateManyArgs = {
    data: XOR<ZeeSplSignatureUpdateManyMutationInput, ZeeSplSignatureUncheckedUpdateManyInput>
    where?: ZeeSplSignatureWhereInput
  }


  /**
   * ZeeSplSignature upsert
   */
  export type ZeeSplSignatureUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * The filter to search for the ZeeSplSignature to update in case it exists.
     * 
    **/
    where: ZeeSplSignatureWhereUniqueInput
    /**
     * In case the ZeeSplSignature found by the `where` argument doesn't exist, create a new ZeeSplSignature with this data.
     * 
    **/
    create: XOR<ZeeSplSignatureCreateInput, ZeeSplSignatureUncheckedCreateInput>
    /**
     * In case the ZeeSplSignature was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZeeSplSignatureUpdateInput, ZeeSplSignatureUncheckedUpdateInput>
  }


  /**
   * ZeeSplSignature delete
   */
  export type ZeeSplSignatureDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
    /**
     * Filter which ZeeSplSignature to delete.
     * 
    **/
    where: ZeeSplSignatureWhereUniqueInput
  }


  /**
   * ZeeSplSignature deleteMany
   */
  export type ZeeSplSignatureDeleteManyArgs = {
    where?: ZeeSplSignatureWhereInput
  }


  /**
   * ZeeSplSignature without action
   */
  export type ZeeSplSignatureArgs = {
    /**
     * Select specific fields to fetch from the ZeeSplSignature
     * 
    **/
    select?: ZeeSplSignatureSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZeeSplSignatureInclude | null
  }



  /**
   * Model PostTransferBalance
   */


  export type AggregatePostTransferBalance = {
    _count: PostTransferBalanceCountAggregateOutputType | null
    _avg: PostTransferBalanceAvgAggregateOutputType | null
    _sum: PostTransferBalanceSumAggregateOutputType | null
    _min: PostTransferBalanceMinAggregateOutputType | null
    _max: PostTransferBalanceMaxAggregateOutputType | null
  }

  export type PostTransferBalanceAvgAggregateOutputType = {
    signatureId: number | null
    amount: number | null
    uiAmount: number | null
  }

  export type PostTransferBalanceSumAggregateOutputType = {
    signatureId: number | null
    amount: bigint | null
    uiAmount: number | null
  }

  export type PostTransferBalanceMinAggregateOutputType = {
    signatureId: number | null
    account: string | null
    amount: bigint | null
    uiAmount: number | null
    uiAmountString: string | null
  }

  export type PostTransferBalanceMaxAggregateOutputType = {
    signatureId: number | null
    account: string | null
    amount: bigint | null
    uiAmount: number | null
    uiAmountString: string | null
  }

  export type PostTransferBalanceCountAggregateOutputType = {
    signatureId: number
    account: number
    amount: number
    uiAmount: number
    uiAmountString: number
    _all: number
  }


  export type PostTransferBalanceAvgAggregateInputType = {
    signatureId?: true
    amount?: true
    uiAmount?: true
  }

  export type PostTransferBalanceSumAggregateInputType = {
    signatureId?: true
    amount?: true
    uiAmount?: true
  }

  export type PostTransferBalanceMinAggregateInputType = {
    signatureId?: true
    account?: true
    amount?: true
    uiAmount?: true
    uiAmountString?: true
  }

  export type PostTransferBalanceMaxAggregateInputType = {
    signatureId?: true
    account?: true
    amount?: true
    uiAmount?: true
    uiAmountString?: true
  }

  export type PostTransferBalanceCountAggregateInputType = {
    signatureId?: true
    account?: true
    amount?: true
    uiAmount?: true
    uiAmountString?: true
    _all?: true
  }

  export type PostTransferBalanceAggregateArgs = {
    /**
     * Filter which PostTransferBalance to aggregate.
     * 
    **/
    where?: PostTransferBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTransferBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTransferBalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostTransferBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTransferBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTransferBalances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTransferBalances
    **/
    _count?: true | PostTransferBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostTransferBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostTransferBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTransferBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTransferBalanceMaxAggregateInputType
  }

  export type GetPostTransferBalanceAggregateType<T extends PostTransferBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTransferBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTransferBalance[P]>
      : GetScalarType<T[P], AggregatePostTransferBalance[P]>
  }


    
    
  export type PostTransferBalanceGroupByArgs = {
    where?: PostTransferBalanceWhereInput
    orderBy?: Enumerable<PostTransferBalanceOrderByWithAggregationInput>
    by: Array<PostTransferBalanceScalarFieldEnum>
    having?: PostTransferBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTransferBalanceCountAggregateInputType | true
    _avg?: PostTransferBalanceAvgAggregateInputType
    _sum?: PostTransferBalanceSumAggregateInputType
    _min?: PostTransferBalanceMinAggregateInputType
    _max?: PostTransferBalanceMaxAggregateInputType
  }


  export type PostTransferBalanceGroupByOutputType = {
    signatureId: number
    account: string
    amount: bigint
    uiAmount: number | null
    uiAmountString: string | null
    _count: PostTransferBalanceCountAggregateOutputType | null
    _avg: PostTransferBalanceAvgAggregateOutputType | null
    _sum: PostTransferBalanceSumAggregateOutputType | null
    _min: PostTransferBalanceMinAggregateOutputType | null
    _max: PostTransferBalanceMaxAggregateOutputType | null
  }

  type GetPostTransferBalanceGroupByPayload<T extends PostTransferBalanceGroupByArgs> = Promise<
    Array<
      PickArray<PostTransferBalanceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostTransferBalanceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostTransferBalanceGroupByOutputType[P]> 
            : GetScalarType<T[P], PostTransferBalanceGroupByOutputType[P]>
        }
      > 
    >


  export type PostTransferBalanceSelect = {
    signature?: boolean | ZeeSplSignatureArgs
    signatureId?: boolean
    account?: boolean
    amount?: boolean
    uiAmount?: boolean
    uiAmountString?: boolean
  }

  export type PostTransferBalanceInclude = {
    signature?: boolean | ZeeSplSignatureArgs
  }

  export type PostTransferBalanceGetPayload<
    S extends boolean | null | undefined | PostTransferBalanceArgs,
    U = keyof S
      > = S extends true
        ? PostTransferBalance
    : S extends undefined
    ? never
    : S extends PostTransferBalanceArgs | PostTransferBalanceFindManyArgs
    ?'include' extends U
    ? PostTransferBalance  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'signature'
        ? ZeeSplSignatureGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostTransferBalance ?PostTransferBalance [P]
  : 
          P extends 'signature'
        ? ZeeSplSignatureGetPayload<S['select'][P]> : never
  } 
    : PostTransferBalance
  : PostTransferBalance


  type PostTransferBalanceCountArgs = Merge<
    Omit<PostTransferBalanceFindManyArgs, 'select' | 'include'> & {
      select?: PostTransferBalanceCountAggregateInputType | true
    }
  >

  export interface PostTransferBalanceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostTransferBalance that matches the filter.
     * @param {PostTransferBalanceFindUniqueArgs} args - Arguments to find a PostTransferBalance
     * @example
     * // Get one PostTransferBalance
     * const postTransferBalance = await prisma.postTransferBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostTransferBalanceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostTransferBalanceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostTransferBalance'> extends True ? CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>> : CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance | null >, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T> | null >>

    /**
     * Find the first PostTransferBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceFindFirstArgs} args - Arguments to find a PostTransferBalance
     * @example
     * // Get one PostTransferBalance
     * const postTransferBalance = await prisma.postTransferBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostTransferBalanceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostTransferBalanceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostTransferBalance'> extends True ? CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>> : CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance | null >, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T> | null >>

    /**
     * Find zero or more PostTransferBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTransferBalances
     * const postTransferBalances = await prisma.postTransferBalance.findMany()
     * 
     * // Get first 10 PostTransferBalances
     * const postTransferBalances = await prisma.postTransferBalance.findMany({ take: 10 })
     * 
     * // Only select the `signatureId`
     * const postTransferBalanceWithSignatureIdOnly = await prisma.postTransferBalance.findMany({ select: { signatureId: true } })
     * 
    **/
    findMany<T extends PostTransferBalanceFindManyArgs>(
      args?: SelectSubset<T, PostTransferBalanceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostTransferBalance>>, PrismaPromise<Array<PostTransferBalanceGetPayload<T>>>>

    /**
     * Create a PostTransferBalance.
     * @param {PostTransferBalanceCreateArgs} args - Arguments to create a PostTransferBalance.
     * @example
     * // Create one PostTransferBalance
     * const PostTransferBalance = await prisma.postTransferBalance.create({
     *   data: {
     *     // ... data to create a PostTransferBalance
     *   }
     * })
     * 
    **/
    create<T extends PostTransferBalanceCreateArgs>(
      args: SelectSubset<T, PostTransferBalanceCreateArgs>
    ): CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>>

    /**
     * Create many PostTransferBalances.
     *     @param {PostTransferBalanceCreateManyArgs} args - Arguments to create many PostTransferBalances.
     *     @example
     *     // Create many PostTransferBalances
     *     const postTransferBalance = await prisma.postTransferBalance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostTransferBalanceCreateManyArgs>(
      args?: SelectSubset<T, PostTransferBalanceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostTransferBalance.
     * @param {PostTransferBalanceDeleteArgs} args - Arguments to delete one PostTransferBalance.
     * @example
     * // Delete one PostTransferBalance
     * const PostTransferBalance = await prisma.postTransferBalance.delete({
     *   where: {
     *     // ... filter to delete one PostTransferBalance
     *   }
     * })
     * 
    **/
    delete<T extends PostTransferBalanceDeleteArgs>(
      args: SelectSubset<T, PostTransferBalanceDeleteArgs>
    ): CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>>

    /**
     * Update one PostTransferBalance.
     * @param {PostTransferBalanceUpdateArgs} args - Arguments to update one PostTransferBalance.
     * @example
     * // Update one PostTransferBalance
     * const postTransferBalance = await prisma.postTransferBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostTransferBalanceUpdateArgs>(
      args: SelectSubset<T, PostTransferBalanceUpdateArgs>
    ): CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>>

    /**
     * Delete zero or more PostTransferBalances.
     * @param {PostTransferBalanceDeleteManyArgs} args - Arguments to filter PostTransferBalances to delete.
     * @example
     * // Delete a few PostTransferBalances
     * const { count } = await prisma.postTransferBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostTransferBalanceDeleteManyArgs>(
      args?: SelectSubset<T, PostTransferBalanceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTransferBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTransferBalances
     * const postTransferBalance = await prisma.postTransferBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostTransferBalanceUpdateManyArgs>(
      args: SelectSubset<T, PostTransferBalanceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostTransferBalance.
     * @param {PostTransferBalanceUpsertArgs} args - Arguments to update or create a PostTransferBalance.
     * @example
     * // Update or create a PostTransferBalance
     * const postTransferBalance = await prisma.postTransferBalance.upsert({
     *   create: {
     *     // ... data to create a PostTransferBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTransferBalance we want to update
     *   }
     * })
    **/
    upsert<T extends PostTransferBalanceUpsertArgs>(
      args: SelectSubset<T, PostTransferBalanceUpsertArgs>
    ): CheckSelect<T, Prisma__PostTransferBalanceClient<PostTransferBalance>, Prisma__PostTransferBalanceClient<PostTransferBalanceGetPayload<T>>>

    /**
     * Count the number of PostTransferBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceCountArgs} args - Arguments to filter PostTransferBalances to count.
     * @example
     * // Count the number of PostTransferBalances
     * const count = await prisma.postTransferBalance.count({
     *   where: {
     *     // ... the filter for the PostTransferBalances we want to count
     *   }
     * })
    **/
    count<T extends PostTransferBalanceCountArgs>(
      args?: Subset<T, PostTransferBalanceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTransferBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTransferBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTransferBalanceAggregateArgs>(args: Subset<T, PostTransferBalanceAggregateArgs>): PrismaPromise<GetPostTransferBalanceAggregateType<T>>

    /**
     * Group by PostTransferBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTransferBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTransferBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTransferBalanceGroupByArgs['orderBy'] }
        : { orderBy?: PostTransferBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTransferBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTransferBalanceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTransferBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostTransferBalanceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    signature<T extends ZeeSplSignatureArgs = {}>(args?: Subset<T, ZeeSplSignatureArgs>): CheckSelect<T, Prisma__ZeeSplSignatureClient<ZeeSplSignature | null >, Prisma__ZeeSplSignatureClient<ZeeSplSignatureGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostTransferBalance findUnique
   */
  export type PostTransferBalanceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * Throw an Error if a PostTransferBalance can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostTransferBalance to fetch.
     * 
    **/
    where: PostTransferBalanceWhereUniqueInput
  }


  /**
   * PostTransferBalance findFirst
   */
  export type PostTransferBalanceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * Throw an Error if a PostTransferBalance can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostTransferBalance to fetch.
     * 
    **/
    where?: PostTransferBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTransferBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTransferBalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTransferBalances.
     * 
    **/
    cursor?: PostTransferBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTransferBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTransferBalances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTransferBalances.
     * 
    **/
    distinct?: Enumerable<PostTransferBalanceScalarFieldEnum>
  }


  /**
   * PostTransferBalance findMany
   */
  export type PostTransferBalanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * Filter, which PostTransferBalances to fetch.
     * 
    **/
    where?: PostTransferBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTransferBalances to fetch.
     * 
    **/
    orderBy?: Enumerable<PostTransferBalanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTransferBalances.
     * 
    **/
    cursor?: PostTransferBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTransferBalances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTransferBalances.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostTransferBalanceScalarFieldEnum>
  }


  /**
   * PostTransferBalance create
   */
  export type PostTransferBalanceCreateArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * The data needed to create a PostTransferBalance.
     * 
    **/
    data: XOR<PostTransferBalanceCreateInput, PostTransferBalanceUncheckedCreateInput>
  }


  /**
   * PostTransferBalance createMany
   */
  export type PostTransferBalanceCreateManyArgs = {
    data: Enumerable<PostTransferBalanceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostTransferBalance update
   */
  export type PostTransferBalanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * The data needed to update a PostTransferBalance.
     * 
    **/
    data: XOR<PostTransferBalanceUpdateInput, PostTransferBalanceUncheckedUpdateInput>
    /**
     * Choose, which PostTransferBalance to update.
     * 
    **/
    where: PostTransferBalanceWhereUniqueInput
  }


  /**
   * PostTransferBalance updateMany
   */
  export type PostTransferBalanceUpdateManyArgs = {
    data: XOR<PostTransferBalanceUpdateManyMutationInput, PostTransferBalanceUncheckedUpdateManyInput>
    where?: PostTransferBalanceWhereInput
  }


  /**
   * PostTransferBalance upsert
   */
  export type PostTransferBalanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * The filter to search for the PostTransferBalance to update in case it exists.
     * 
    **/
    where: PostTransferBalanceWhereUniqueInput
    /**
     * In case the PostTransferBalance found by the `where` argument doesn't exist, create a new PostTransferBalance with this data.
     * 
    **/
    create: XOR<PostTransferBalanceCreateInput, PostTransferBalanceUncheckedCreateInput>
    /**
     * In case the PostTransferBalance was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostTransferBalanceUpdateInput, PostTransferBalanceUncheckedUpdateInput>
  }


  /**
   * PostTransferBalance delete
   */
  export type PostTransferBalanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
    /**
     * Filter which PostTransferBalance to delete.
     * 
    **/
    where: PostTransferBalanceWhereUniqueInput
  }


  /**
   * PostTransferBalance deleteMany
   */
  export type PostTransferBalanceDeleteManyArgs = {
    where?: PostTransferBalanceWhereInput
  }


  /**
   * PostTransferBalance without action
   */
  export type PostTransferBalanceArgs = {
    /**
     * Select specific fields to fetch from the PostTransferBalance
     * 
    **/
    select?: PostTransferBalanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostTransferBalanceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const StakeProgramSignatureScalarFieldEnum: {
    id: 'id',
    signature: 'signature',
    blockTime: 'blockTime',
    slot: 'slot',
    recentBlockHash: 'recentBlockHash',
    fee: 'fee',
    processed: 'processed'
  };

  export type StakeProgramSignatureScalarFieldEnum = (typeof StakeProgramSignatureScalarFieldEnum)[keyof typeof StakeProgramSignatureScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    signatureId: 'signatureId',
    amount: 'amount',
    authority: 'authority',
    source: 'source',
    destination: 'destination',
    claimOrigin: 'claimOrigin'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const InitInstructionScalarFieldEnum: {
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
  };

  export type InitInstructionScalarFieldEnum = (typeof InitInstructionScalarFieldEnum)[keyof typeof InitInstructionScalarFieldEnum]


  export const RegisterEndpointInstructionScalarFieldEnum: {
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
  };

  export type RegisterEndpointInstructionScalarFieldEnum = (typeof RegisterEndpointInstructionScalarFieldEnum)[keyof typeof RegisterEndpointInstructionScalarFieldEnum]


  export const InitStakeInstructionScalarFieldEnum: {
    id: 'id',
    signatureId: 'signatureId',
    payer: 'payer',
    staker: 'staker',
    stakerFund: 'stakerFund',
    stakerBeneficiary: 'stakerBeneficiary',
    endpointAccount: 'endpointAccount',
    stakeAccount: 'stakeAccount'
  };

  export type InitStakeInstructionScalarFieldEnum = (typeof InitStakeInstructionScalarFieldEnum)[keyof typeof InitStakeInstructionScalarFieldEnum]


  export const StakeInstructionScalarFieldEnum: {
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
  };

  export type StakeInstructionScalarFieldEnum = (typeof StakeInstructionScalarFieldEnum)[keyof typeof StakeInstructionScalarFieldEnum]


  export const WithdrawUnboundInstructionScalarFieldEnum: {
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
  };

  export type WithdrawUnboundInstructionScalarFieldEnum = (typeof WithdrawUnboundInstructionScalarFieldEnum)[keyof typeof WithdrawUnboundInstructionScalarFieldEnum]


  export const ClaimInstructionScalarFieldEnum: {
    id: 'id',
    signatureId: 'signatureId',
    claimId: 'claimId',
    payer: 'payer',
    beneficiaryAuthority: 'beneficiaryAuthority',
    beneficiaryAccount: 'beneficiaryAccount',
    authorityZeeTokenAccount: 'authorityZeeTokenAccount',
    settings: 'settings',
    poolAuthority: 'poolAuthority'
  };

  export type ClaimInstructionScalarFieldEnum = (typeof ClaimInstructionScalarFieldEnum)[keyof typeof ClaimInstructionScalarFieldEnum]


  export const TransferEndpointInstructionScalarFieldEnum: {
    id: 'id',
    signatureId: 'signatureId',
    payer: 'payer',
    endpoint: 'endpoint',
    endpointOwnerAccount: 'endpointOwnerAccount',
    endpointOwnerSigner: 'endpointOwnerSigner',
    recipient: 'recipient',
    authorityAddress: 'authorityAddress',
    authorityType: 'authorityType'
  };

  export type TransferEndpointInstructionScalarFieldEnum = (typeof TransferEndpointInstructionScalarFieldEnum)[keyof typeof TransferEndpointInstructionScalarFieldEnum]


  export const ChangeBeneficiariesInstructionScalarFieldEnum: {
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
  };

  export type ChangeBeneficiariesInstructionScalarFieldEnum = (typeof ChangeBeneficiariesInstructionScalarFieldEnum)[keyof typeof ChangeBeneficiariesInstructionScalarFieldEnum]


  export const ZeeSplSignatureScalarFieldEnum: {
    id: 'id',
    signature: 'signature',
    blockTime: 'blockTime',
    slot: 'slot',
    recentBlockHash: 'recentBlockHash',
    fee: 'fee',
    processed: 'processed'
  };

  export type ZeeSplSignatureScalarFieldEnum = (typeof ZeeSplSignatureScalarFieldEnum)[keyof typeof ZeeSplSignatureScalarFieldEnum]


  export const PostTransferBalanceScalarFieldEnum: {
    signatureId: 'signatureId',
    account: 'account',
    amount: 'amount',
    uiAmount: 'uiAmount',
    uiAmountString: 'uiAmountString'
  };

  export type PostTransferBalanceScalarFieldEnum = (typeof PostTransferBalanceScalarFieldEnum)[keyof typeof PostTransferBalanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type StakeProgramSignatureWhereInput = {
    AND?: Enumerable<StakeProgramSignatureWhereInput>
    OR?: Enumerable<StakeProgramSignatureWhereInput>
    NOT?: Enumerable<StakeProgramSignatureWhereInput>
    id?: IntFilter | number
    signature?: StringFilter | string
    blockTime?: DateTimeFilter | Date | string
    slot?: BigIntFilter | bigint | number
    recentBlockHash?: StringNullableFilter | string | null
    fee?: BigIntNullableFilter | bigint | number | null
    processed?: BoolFilter | boolean
    claim?: ClaimListRelationFilter
    initInstructions?: InitInstructionListRelationFilter
    registerEndpointInstructions?: RegisterEndpointInstructionListRelationFilter
    initStakeInstruction?: InitStakeInstructionListRelationFilter
    stakeInstructions?: StakeInstructionListRelationFilter
    withdrawUnboundInstructions?: WithdrawUnboundInstructionListRelationFilter
    claimInstructions?: ClaimInstructionListRelationFilter
    TransferEndpointInstruction?: TransferEndpointInstructionListRelationFilter
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionListRelationFilter
  }

  export type StakeProgramSignatureOrderByWithRelationInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
    claim?: ClaimOrderByRelationAggregateInput
    initInstructions?: InitInstructionOrderByRelationAggregateInput
    registerEndpointInstructions?: RegisterEndpointInstructionOrderByRelationAggregateInput
    initStakeInstruction?: InitStakeInstructionOrderByRelationAggregateInput
    stakeInstructions?: StakeInstructionOrderByRelationAggregateInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionOrderByRelationAggregateInput
    claimInstructions?: ClaimInstructionOrderByRelationAggregateInput
    TransferEndpointInstruction?: TransferEndpointInstructionOrderByRelationAggregateInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionOrderByRelationAggregateInput
  }

  export type StakeProgramSignatureWhereUniqueInput = {
    id?: number
    signature?: string
  }

  export type StakeProgramSignatureOrderByWithAggregationInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
    _count?: StakeProgramSignatureCountOrderByAggregateInput
    _avg?: StakeProgramSignatureAvgOrderByAggregateInput
    _max?: StakeProgramSignatureMaxOrderByAggregateInput
    _min?: StakeProgramSignatureMinOrderByAggregateInput
    _sum?: StakeProgramSignatureSumOrderByAggregateInput
  }

  export type StakeProgramSignatureScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StakeProgramSignatureScalarWhereWithAggregatesInput>
    OR?: Enumerable<StakeProgramSignatureScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StakeProgramSignatureScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signature?: StringWithAggregatesFilter | string
    blockTime?: DateTimeWithAggregatesFilter | Date | string
    slot?: BigIntWithAggregatesFilter | bigint | number
    recentBlockHash?: StringNullableWithAggregatesFilter | string | null
    fee?: BigIntNullableWithAggregatesFilter | bigint | number | null
    processed?: BoolWithAggregatesFilter | boolean
  }

  export type ClaimWhereInput = {
    AND?: Enumerable<ClaimWhereInput>
    OR?: Enumerable<ClaimWhereInput>
    NOT?: Enumerable<ClaimWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    amount?: BigIntFilter | bigint | number
    authority?: StringFilter | string
    source?: StringFilter | string
    destination?: StringFilter | string
    claimOrigin?: EnumClaimOriginFilter | ClaimOrigin
    claimInstruction?: XOR<ClaimInstructionRelationFilter, ClaimInstructionWhereInput> | null
    stakeInstruction?: XOR<StakeInstructionRelationFilter, StakeInstructionWhereInput> | null
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    amount?: SortOrder
    authority?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    claimOrigin?: SortOrder
    claimInstruction?: ClaimInstructionOrderByWithRelationInput
    stakeInstruction?: StakeInstructionOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = {
    id?: number
  }

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
    authority?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    claimOrigin?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _avg?: ClaimAvgOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
    _sum?: ClaimSumOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClaimScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClaimScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClaimScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    amount?: BigIntWithAggregatesFilter | bigint | number
    authority?: StringWithAggregatesFilter | string
    source?: StringWithAggregatesFilter | string
    destination?: StringWithAggregatesFilter | string
    claimOrigin?: EnumClaimOriginWithAggregatesFilter | ClaimOrigin
  }

  export type InitInstructionWhereInput = {
    AND?: Enumerable<InitInstructionWhereInput>
    OR?: Enumerable<InitInstructionWhereInput>
    NOT?: Enumerable<InitInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    settingsAccount?: StringFilter | string
    poolAuthority?: StringFilter | string
    rewardPool?: StringFilter | string
    zeeTokenMint?: StringFilter | string
    splTokenProgam?: StringFilter | string
    startTime?: DateTimeFilter | Date | string
    unbondingDuration?: IntFilter | number
  }

  export type InitInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    settingsAccount?: SortOrder
    poolAuthority?: SortOrder
    rewardPool?: SortOrder
    zeeTokenMint?: SortOrder
    splTokenProgam?: SortOrder
    startTime?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type InitInstructionWhereUniqueInput = {
    id?: number
  }

  export type InitInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    settingsAccount?: SortOrder
    poolAuthority?: SortOrder
    rewardPool?: SortOrder
    zeeTokenMint?: SortOrder
    splTokenProgam?: SortOrder
    startTime?: SortOrder
    unbondingDuration?: SortOrder
    _count?: InitInstructionCountOrderByAggregateInput
    _avg?: InitInstructionAvgOrderByAggregateInput
    _max?: InitInstructionMaxOrderByAggregateInput
    _min?: InitInstructionMinOrderByAggregateInput
    _sum?: InitInstructionSumOrderByAggregateInput
  }

  export type InitInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InitInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<InitInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InitInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    settingsAccount?: StringWithAggregatesFilter | string
    poolAuthority?: StringWithAggregatesFilter | string
    rewardPool?: StringWithAggregatesFilter | string
    zeeTokenMint?: StringWithAggregatesFilter | string
    splTokenProgam?: StringWithAggregatesFilter | string
    startTime?: DateTimeWithAggregatesFilter | Date | string
    unbondingDuration?: IntWithAggregatesFilter | number
  }

  export type RegisterEndpointInstructionWhereInput = {
    AND?: Enumerable<RegisterEndpointInstructionWhereInput>
    OR?: Enumerable<RegisterEndpointInstructionWhereInput>
    NOT?: Enumerable<RegisterEndpointInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpointAccount?: StringFilter | string
    endpointOwnerPubkey?: StringFilter | string
    primaryBeneficiaryAuthority?: StringFilter | string
    primaryBeneficiaryAccount?: StringFilter | string
    secondaryBeneficiaryAuthority?: StringFilter | string
    secondaryBeneficiaryAccount?: StringFilter | string
    authorityAddress?: StringFilter | string
    authorityType?: IntFilter | number
  }

  export type RegisterEndpointInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    endpointAccount?: SortOrder
    endpointOwnerPubkey?: SortOrder
    primaryBeneficiaryAuthority?: SortOrder
    primaryBeneficiaryAccount?: SortOrder
    secondaryBeneficiaryAuthority?: SortOrder
    secondaryBeneficiaryAccount?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type RegisterEndpointInstructionWhereUniqueInput = {
    id?: number
  }

  export type RegisterEndpointInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpointAccount?: SortOrder
    endpointOwnerPubkey?: SortOrder
    primaryBeneficiaryAuthority?: SortOrder
    primaryBeneficiaryAccount?: SortOrder
    secondaryBeneficiaryAuthority?: SortOrder
    secondaryBeneficiaryAccount?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
    _count?: RegisterEndpointInstructionCountOrderByAggregateInput
    _avg?: RegisterEndpointInstructionAvgOrderByAggregateInput
    _max?: RegisterEndpointInstructionMaxOrderByAggregateInput
    _min?: RegisterEndpointInstructionMinOrderByAggregateInput
    _sum?: RegisterEndpointInstructionSumOrderByAggregateInput
  }

  export type RegisterEndpointInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RegisterEndpointInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<RegisterEndpointInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RegisterEndpointInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    endpointAccount?: StringWithAggregatesFilter | string
    endpointOwnerPubkey?: StringWithAggregatesFilter | string
    primaryBeneficiaryAuthority?: StringWithAggregatesFilter | string
    primaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    secondaryBeneficiaryAuthority?: StringWithAggregatesFilter | string
    secondaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    authorityAddress?: StringWithAggregatesFilter | string
    authorityType?: IntWithAggregatesFilter | number
  }

  export type InitStakeInstructionWhereInput = {
    AND?: Enumerable<InitStakeInstructionWhereInput>
    OR?: Enumerable<InitStakeInstructionWhereInput>
    NOT?: Enumerable<InitStakeInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    staker?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerBeneficiary?: StringFilter | string
    endpointAccount?: StringFilter | string
    stakeAccount?: StringFilter | string
  }

  export type InitStakeInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerBeneficiary?: SortOrder
    endpointAccount?: SortOrder
    stakeAccount?: SortOrder
  }

  export type InitStakeInstructionWhereUniqueInput = {
    id?: number
  }

  export type InitStakeInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerBeneficiary?: SortOrder
    endpointAccount?: SortOrder
    stakeAccount?: SortOrder
    _count?: InitStakeInstructionCountOrderByAggregateInput
    _avg?: InitStakeInstructionAvgOrderByAggregateInput
    _max?: InitStakeInstructionMaxOrderByAggregateInput
    _min?: InitStakeInstructionMinOrderByAggregateInput
    _sum?: InitStakeInstructionSumOrderByAggregateInput
  }

  export type InitStakeInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InitStakeInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<InitStakeInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InitStakeInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    staker?: StringWithAggregatesFilter | string
    stakerFund?: StringWithAggregatesFilter | string
    stakerBeneficiary?: StringWithAggregatesFilter | string
    endpointAccount?: StringWithAggregatesFilter | string
    stakeAccount?: StringWithAggregatesFilter | string
  }

  export type StakeInstructionWhereInput = {
    AND?: Enumerable<StakeInstructionWhereInput>
    OR?: Enumerable<StakeInstructionWhereInput>
    NOT?: Enumerable<StakeInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    claim?: XOR<ClaimRelationFilter, ClaimWhereInput>
    claimId?: IntFilter | number
    stake?: BigIntFilter | bigint | number
    payer?: StringFilter | string
    staker?: StringFilter | string
    stakerBeneficiary?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerZeeTokenAccount?: StringFilter | string
    endpoint?: StringFilter | string
    endpointPrimaryBeneficiary?: StringFilter | string
    endpointSecondaryBeneficiary?: StringFilter | string
    poolAuthority?: StringFilter | string
    settings?: StringFilter | string
    stakeAccount?: StringFilter | string
  }

  export type StakeInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    claim?: ClaimOrderByWithRelationInput
    claimId?: SortOrder
    stake?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerBeneficiary?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    endpointPrimaryBeneficiary?: SortOrder
    endpointSecondaryBeneficiary?: SortOrder
    poolAuthority?: SortOrder
    settings?: SortOrder
    stakeAccount?: SortOrder
  }

  export type StakeInstructionWhereUniqueInput = {
    id?: number
    claimId?: number
  }

  export type StakeInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerBeneficiary?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    endpointPrimaryBeneficiary?: SortOrder
    endpointSecondaryBeneficiary?: SortOrder
    poolAuthority?: SortOrder
    settings?: SortOrder
    stakeAccount?: SortOrder
    _count?: StakeInstructionCountOrderByAggregateInput
    _avg?: StakeInstructionAvgOrderByAggregateInput
    _max?: StakeInstructionMaxOrderByAggregateInput
    _min?: StakeInstructionMinOrderByAggregateInput
    _sum?: StakeInstructionSumOrderByAggregateInput
  }

  export type StakeInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StakeInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<StakeInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StakeInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    claimId?: IntWithAggregatesFilter | number
    stake?: BigIntWithAggregatesFilter | bigint | number
    payer?: StringWithAggregatesFilter | string
    staker?: StringWithAggregatesFilter | string
    stakerBeneficiary?: StringWithAggregatesFilter | string
    stakerFund?: StringWithAggregatesFilter | string
    stakerZeeTokenAccount?: StringWithAggregatesFilter | string
    endpoint?: StringWithAggregatesFilter | string
    endpointPrimaryBeneficiary?: StringWithAggregatesFilter | string
    endpointSecondaryBeneficiary?: StringWithAggregatesFilter | string
    poolAuthority?: StringWithAggregatesFilter | string
    settings?: StringWithAggregatesFilter | string
    stakeAccount?: StringWithAggregatesFilter | string
  }

  export type WithdrawUnboundInstructionWhereInput = {
    AND?: Enumerable<WithdrawUnboundInstructionWhereInput>
    OR?: Enumerable<WithdrawUnboundInstructionWhereInput>
    NOT?: Enumerable<WithdrawUnboundInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    stakeAccount?: StringFilter | string
    staker?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerZeeTokenAccount?: StringFilter | string
    endpoint?: StringFilter | string
    settings?: StringFilter | string
    poolAuthority?: StringFilter | string
  }

  export type WithdrawUnboundInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    stakeAccount?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type WithdrawUnboundInstructionWhereUniqueInput = {
    id?: number
  }

  export type WithdrawUnboundInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    stakeAccount?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
    _count?: WithdrawUnboundInstructionCountOrderByAggregateInput
    _avg?: WithdrawUnboundInstructionAvgOrderByAggregateInput
    _max?: WithdrawUnboundInstructionMaxOrderByAggregateInput
    _min?: WithdrawUnboundInstructionMinOrderByAggregateInput
    _sum?: WithdrawUnboundInstructionSumOrderByAggregateInput
  }

  export type WithdrawUnboundInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WithdrawUnboundInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<WithdrawUnboundInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WithdrawUnboundInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    stakeAccount?: StringWithAggregatesFilter | string
    staker?: StringWithAggregatesFilter | string
    stakerFund?: StringWithAggregatesFilter | string
    stakerZeeTokenAccount?: StringWithAggregatesFilter | string
    endpoint?: StringWithAggregatesFilter | string
    settings?: StringWithAggregatesFilter | string
    poolAuthority?: StringWithAggregatesFilter | string
  }

  export type ClaimInstructionWhereInput = {
    AND?: Enumerable<ClaimInstructionWhereInput>
    OR?: Enumerable<ClaimInstructionWhereInput>
    NOT?: Enumerable<ClaimInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    claim?: XOR<ClaimRelationFilter, ClaimWhereInput>
    claimId?: IntFilter | number
    payer?: StringFilter | string
    beneficiaryAuthority?: StringFilter | string
    beneficiaryAccount?: StringFilter | string
    authorityZeeTokenAccount?: StringFilter | string
    settings?: StringFilter | string
    poolAuthority?: StringFilter | string
  }

  export type ClaimInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    claim?: ClaimOrderByWithRelationInput
    claimId?: SortOrder
    payer?: SortOrder
    beneficiaryAuthority?: SortOrder
    beneficiaryAccount?: SortOrder
    authorityZeeTokenAccount?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type ClaimInstructionWhereUniqueInput = {
    id?: number
    claimId?: number
  }

  export type ClaimInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    payer?: SortOrder
    beneficiaryAuthority?: SortOrder
    beneficiaryAccount?: SortOrder
    authorityZeeTokenAccount?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
    _count?: ClaimInstructionCountOrderByAggregateInput
    _avg?: ClaimInstructionAvgOrderByAggregateInput
    _max?: ClaimInstructionMaxOrderByAggregateInput
    _min?: ClaimInstructionMinOrderByAggregateInput
    _sum?: ClaimInstructionSumOrderByAggregateInput
  }

  export type ClaimInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClaimInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClaimInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClaimInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    claimId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    beneficiaryAuthority?: StringWithAggregatesFilter | string
    beneficiaryAccount?: StringWithAggregatesFilter | string
    authorityZeeTokenAccount?: StringWithAggregatesFilter | string
    settings?: StringWithAggregatesFilter | string
    poolAuthority?: StringWithAggregatesFilter | string
  }

  export type TransferEndpointInstructionWhereInput = {
    AND?: Enumerable<TransferEndpointInstructionWhereInput>
    OR?: Enumerable<TransferEndpointInstructionWhereInput>
    NOT?: Enumerable<TransferEndpointInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpoint?: StringFilter | string
    endpointOwnerAccount?: StringFilter | string
    endpointOwnerSigner?: StringFilter | string
    recipient?: StringFilter | string
    authorityAddress?: StringFilter | string
    authorityType?: IntFilter | number
  }

  export type TransferEndpointInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    recipient?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type TransferEndpointInstructionWhereUniqueInput = {
    id?: number
  }

  export type TransferEndpointInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    recipient?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
    _count?: TransferEndpointInstructionCountOrderByAggregateInput
    _avg?: TransferEndpointInstructionAvgOrderByAggregateInput
    _max?: TransferEndpointInstructionMaxOrderByAggregateInput
    _min?: TransferEndpointInstructionMinOrderByAggregateInput
    _sum?: TransferEndpointInstructionSumOrderByAggregateInput
  }

  export type TransferEndpointInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransferEndpointInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransferEndpointInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransferEndpointInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    endpoint?: StringWithAggregatesFilter | string
    endpointOwnerAccount?: StringWithAggregatesFilter | string
    endpointOwnerSigner?: StringWithAggregatesFilter | string
    recipient?: StringWithAggregatesFilter | string
    authorityAddress?: StringWithAggregatesFilter | string
    authorityType?: IntWithAggregatesFilter | number
  }

  export type ChangeBeneficiariesInstructionWhereInput = {
    AND?: Enumerable<ChangeBeneficiariesInstructionWhereInput>
    OR?: Enumerable<ChangeBeneficiariesInstructionWhereInput>
    NOT?: Enumerable<ChangeBeneficiariesInstructionWhereInput>
    id?: IntFilter | number
    signature?: XOR<StakeProgramSignatureRelationFilter, StakeProgramSignatureWhereInput>
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpoint?: StringFilter | string
    endpointOwnerAccount?: StringFilter | string
    endpointOwnerSigner?: StringFilter | string
    oldPrimaryBeneficiaryAccount?: StringFilter | string
    oldSecondaryBeneficiaryAccount?: StringFilter | string
    newPrimaryBeneficiaryAuthority?: StringFilter | string
    newPrimaryBeneficiaryAccount?: StringFilter | string
    newSecondaryBeneficiaryAuthority?: StringFilter | string
    newSecondaryBeneficiaryAccount?: StringFilter | string
    settings?: StringFilter | string
  }

  export type ChangeBeneficiariesInstructionOrderByWithRelationInput = {
    id?: SortOrder
    signature?: StakeProgramSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    oldPrimaryBeneficiaryAccount?: SortOrder
    oldSecondaryBeneficiaryAccount?: SortOrder
    newPrimaryBeneficiaryAuthority?: SortOrder
    newPrimaryBeneficiaryAccount?: SortOrder
    newSecondaryBeneficiaryAuthority?: SortOrder
    newSecondaryBeneficiaryAccount?: SortOrder
    settings?: SortOrder
  }

  export type ChangeBeneficiariesInstructionWhereUniqueInput = {
    id?: number
  }

  export type ChangeBeneficiariesInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    oldPrimaryBeneficiaryAccount?: SortOrder
    oldSecondaryBeneficiaryAccount?: SortOrder
    newPrimaryBeneficiaryAuthority?: SortOrder
    newPrimaryBeneficiaryAccount?: SortOrder
    newSecondaryBeneficiaryAuthority?: SortOrder
    newSecondaryBeneficiaryAccount?: SortOrder
    settings?: SortOrder
    _count?: ChangeBeneficiariesInstructionCountOrderByAggregateInput
    _avg?: ChangeBeneficiariesInstructionAvgOrderByAggregateInput
    _max?: ChangeBeneficiariesInstructionMaxOrderByAggregateInput
    _min?: ChangeBeneficiariesInstructionMinOrderByAggregateInput
    _sum?: ChangeBeneficiariesInstructionSumOrderByAggregateInput
  }

  export type ChangeBeneficiariesInstructionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChangeBeneficiariesInstructionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChangeBeneficiariesInstructionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChangeBeneficiariesInstructionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signatureId?: IntWithAggregatesFilter | number
    payer?: StringWithAggregatesFilter | string
    endpoint?: StringWithAggregatesFilter | string
    endpointOwnerAccount?: StringWithAggregatesFilter | string
    endpointOwnerSigner?: StringWithAggregatesFilter | string
    oldPrimaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    oldSecondaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    newPrimaryBeneficiaryAuthority?: StringWithAggregatesFilter | string
    newPrimaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    newSecondaryBeneficiaryAuthority?: StringWithAggregatesFilter | string
    newSecondaryBeneficiaryAccount?: StringWithAggregatesFilter | string
    settings?: StringWithAggregatesFilter | string
  }

  export type ZeeSplSignatureWhereInput = {
    AND?: Enumerable<ZeeSplSignatureWhereInput>
    OR?: Enumerable<ZeeSplSignatureWhereInput>
    NOT?: Enumerable<ZeeSplSignatureWhereInput>
    id?: IntFilter | number
    signature?: StringFilter | string
    blockTime?: DateTimeFilter | Date | string
    slot?: BigIntFilter | bigint | number
    recentBlockHash?: StringNullableFilter | string | null
    fee?: BigIntNullableFilter | bigint | number | null
    processed?: BoolFilter | boolean
    postBalances?: PostTransferBalanceListRelationFilter
  }

  export type ZeeSplSignatureOrderByWithRelationInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
    postBalances?: PostTransferBalanceOrderByRelationAggregateInput
  }

  export type ZeeSplSignatureWhereUniqueInput = {
    id?: number
    signature?: string
  }

  export type ZeeSplSignatureOrderByWithAggregationInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
    _count?: ZeeSplSignatureCountOrderByAggregateInput
    _avg?: ZeeSplSignatureAvgOrderByAggregateInput
    _max?: ZeeSplSignatureMaxOrderByAggregateInput
    _min?: ZeeSplSignatureMinOrderByAggregateInput
    _sum?: ZeeSplSignatureSumOrderByAggregateInput
  }

  export type ZeeSplSignatureScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZeeSplSignatureScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZeeSplSignatureScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZeeSplSignatureScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    signature?: StringWithAggregatesFilter | string
    blockTime?: DateTimeWithAggregatesFilter | Date | string
    slot?: BigIntWithAggregatesFilter | bigint | number
    recentBlockHash?: StringNullableWithAggregatesFilter | string | null
    fee?: BigIntNullableWithAggregatesFilter | bigint | number | null
    processed?: BoolWithAggregatesFilter | boolean
  }

  export type PostTransferBalanceWhereInput = {
    AND?: Enumerable<PostTransferBalanceWhereInput>
    OR?: Enumerable<PostTransferBalanceWhereInput>
    NOT?: Enumerable<PostTransferBalanceWhereInput>
    signature?: XOR<ZeeSplSignatureRelationFilter, ZeeSplSignatureWhereInput>
    signatureId?: IntFilter | number
    account?: StringFilter | string
    amount?: BigIntFilter | bigint | number
    uiAmount?: FloatNullableFilter | number | null
    uiAmountString?: StringNullableFilter | string | null
  }

  export type PostTransferBalanceOrderByWithRelationInput = {
    signature?: ZeeSplSignatureOrderByWithRelationInput
    signatureId?: SortOrder
    account?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
    uiAmountString?: SortOrder
  }

  export type PostTransferBalanceWhereUniqueInput = {
    signatureId_account?: PostTransferBalanceSignatureIdAccountCompoundUniqueInput
  }

  export type PostTransferBalanceOrderByWithAggregationInput = {
    signatureId?: SortOrder
    account?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
    uiAmountString?: SortOrder
    _count?: PostTransferBalanceCountOrderByAggregateInput
    _avg?: PostTransferBalanceAvgOrderByAggregateInput
    _max?: PostTransferBalanceMaxOrderByAggregateInput
    _min?: PostTransferBalanceMinOrderByAggregateInput
    _sum?: PostTransferBalanceSumOrderByAggregateInput
  }

  export type PostTransferBalanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostTransferBalanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostTransferBalanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostTransferBalanceScalarWhereWithAggregatesInput>
    signatureId?: IntWithAggregatesFilter | number
    account?: StringWithAggregatesFilter | string
    amount?: BigIntWithAggregatesFilter | bigint | number
    uiAmount?: FloatNullableWithAggregatesFilter | number | null
    uiAmountString?: StringNullableWithAggregatesFilter | string | null
  }

  export type StakeProgramSignatureCreateInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUpdateInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateManyInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
  }

  export type StakeProgramSignatureUpdateManyMutationInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StakeProgramSignatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaimCreateInput = {
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    signature: StakeProgramSignatureCreateNestedOneWithoutClaimInput
    claimInstruction?: ClaimInstructionCreateNestedOneWithoutClaimInput
    stakeInstruction?: StakeInstructionCreateNestedOneWithoutClaimInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: number
    signatureId: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedCreateNestedOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUncheckedCreateNestedOneWithoutClaimInput
  }

  export type ClaimUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutClaimInput
    claimInstruction?: ClaimInstructionUpdateOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUpdateOneWithoutClaimInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedUpdateOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUncheckedUpdateOneWithoutClaimInput
  }

  export type ClaimCreateManyInput = {
    id?: number
    signatureId: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
  }

  export type ClaimUpdateManyMutationInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
  }

  export type InitInstructionCreateInput = {
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
    signature: StakeProgramSignatureCreateNestedOneWithoutInitInstructionsInput
  }

  export type InitInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
  }

  export type InitInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutInitInstructionsInput
  }

  export type InitInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type InitInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
  }

  export type InitInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type InitInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionCreateInput = {
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
    signature: StakeProgramSignatureCreateNestedOneWithoutRegisterEndpointInstructionsInput
  }

  export type RegisterEndpointInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
  }

  export type RegisterEndpointInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutRegisterEndpointInstructionsInput
  }

  export type RegisterEndpointInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
  }

  export type RegisterEndpointInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type InitStakeInstructionCreateInput = {
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
    signature: StakeProgramSignatureCreateNestedOneWithoutInitStakeInstructionInput
  }

  export type InitStakeInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
  }

  export type InitStakeInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutInitStakeInstructionInput
  }

  export type InitStakeInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type InitStakeInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
  }

  export type InitStakeInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type InitStakeInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionCreateInput = {
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
    signature: StakeProgramSignatureCreateNestedOneWithoutStakeInstructionsInput
    claim: ClaimCreateNestedOneWithoutStakeInstructionInput
  }

  export type StakeInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    claimId: number
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
  }

  export type StakeInstructionUpdateInput = {
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutStakeInstructionsInput
    claim?: ClaimUpdateOneRequiredWithoutStakeInstructionInput
  }

  export type StakeInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionCreateManyInput = {
    id?: number
    signatureId: number
    claimId: number
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
  }

  export type StakeInstructionUpdateManyMutationInput = {
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionCreateInput = {
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
    signature: StakeProgramSignatureCreateNestedOneWithoutWithdrawUnboundInstructionsInput
  }

  export type WithdrawUnboundInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
  }

  export type WithdrawUnboundInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutWithdrawUnboundInstructionsInput
  }

  export type WithdrawUnboundInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
  }

  export type WithdrawUnboundInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimInstructionCreateInput = {
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
    signature: StakeProgramSignatureCreateNestedOneWithoutClaimInstructionsInput
    claim: ClaimCreateNestedOneWithoutClaimInstructionInput
  }

  export type ClaimInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    claimId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
  }

  export type ClaimInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutClaimInstructionsInput
    claim?: ClaimUpdateOneRequiredWithoutClaimInstructionInput
  }

  export type ClaimInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimInstructionCreateManyInput = {
    id?: number
    signatureId: number
    claimId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
  }

  export type ClaimInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type TransferEndpointInstructionCreateInput = {
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
    signature: StakeProgramSignatureCreateNestedOneWithoutTransferEndpointInstructionInput
  }

  export type TransferEndpointInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
  }

  export type TransferEndpointInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutTransferEndpointInstructionInput
  }

  export type TransferEndpointInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type TransferEndpointInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
  }

  export type TransferEndpointInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type TransferEndpointInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type ChangeBeneficiariesInstructionCreateInput = {
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
    signature: StakeProgramSignatureCreateNestedOneWithoutChangeBeneficiariesInstructionInput
  }

  export type ChangeBeneficiariesInstructionUncheckedCreateInput = {
    id?: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
  }

  export type ChangeBeneficiariesInstructionUpdateInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutChangeBeneficiariesInstructionInput
  }

  export type ChangeBeneficiariesInstructionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeBeneficiariesInstructionCreateManyInput = {
    id?: number
    signatureId: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
  }

  export type ChangeBeneficiariesInstructionUpdateManyMutationInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeBeneficiariesInstructionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type ZeeSplSignatureCreateInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    postBalances?: PostTransferBalanceCreateNestedManyWithoutSignatureInput
  }

  export type ZeeSplSignatureUncheckedCreateInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    postBalances?: PostTransferBalanceUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type ZeeSplSignatureUpdateInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    postBalances?: PostTransferBalanceUpdateManyWithoutSignatureInput
  }

  export type ZeeSplSignatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    postBalances?: PostTransferBalanceUncheckedUpdateManyWithoutSignatureInput
  }

  export type ZeeSplSignatureCreateManyInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
  }

  export type ZeeSplSignatureUpdateManyMutationInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ZeeSplSignatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostTransferBalanceCreateInput = {
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
    signature: ZeeSplSignatureCreateNestedOneWithoutPostBalancesInput
  }

  export type PostTransferBalanceUncheckedCreateInput = {
    signatureId: number
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
  }

  export type PostTransferBalanceUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: ZeeSplSignatureUpdateOneRequiredWithoutPostBalancesInput
  }

  export type PostTransferBalanceUncheckedUpdateInput = {
    signatureId?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostTransferBalanceCreateManyInput = {
    signatureId: number
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
  }

  export type PostTransferBalanceUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostTransferBalanceUncheckedUpdateManyInput = {
    signatureId?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type InitInstructionListRelationFilter = {
    every?: InitInstructionWhereInput
    some?: InitInstructionWhereInput
    none?: InitInstructionWhereInput
  }

  export type RegisterEndpointInstructionListRelationFilter = {
    every?: RegisterEndpointInstructionWhereInput
    some?: RegisterEndpointInstructionWhereInput
    none?: RegisterEndpointInstructionWhereInput
  }

  export type InitStakeInstructionListRelationFilter = {
    every?: InitStakeInstructionWhereInput
    some?: InitStakeInstructionWhereInput
    none?: InitStakeInstructionWhereInput
  }

  export type StakeInstructionListRelationFilter = {
    every?: StakeInstructionWhereInput
    some?: StakeInstructionWhereInput
    none?: StakeInstructionWhereInput
  }

  export type WithdrawUnboundInstructionListRelationFilter = {
    every?: WithdrawUnboundInstructionWhereInput
    some?: WithdrawUnboundInstructionWhereInput
    none?: WithdrawUnboundInstructionWhereInput
  }

  export type ClaimInstructionListRelationFilter = {
    every?: ClaimInstructionWhereInput
    some?: ClaimInstructionWhereInput
    none?: ClaimInstructionWhereInput
  }

  export type TransferEndpointInstructionListRelationFilter = {
    every?: TransferEndpointInstructionWhereInput
    some?: TransferEndpointInstructionWhereInput
    none?: TransferEndpointInstructionWhereInput
  }

  export type ChangeBeneficiariesInstructionListRelationFilter = {
    every?: ChangeBeneficiariesInstructionWhereInput
    some?: ChangeBeneficiariesInstructionWhereInput
    none?: ChangeBeneficiariesInstructionWhereInput
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InitInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegisterEndpointInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InitStakeInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawUnboundInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferEndpointInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChangeBeneficiariesInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StakeProgramSignatureCountOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type StakeProgramSignatureAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    fee?: SortOrder
  }

  export type StakeProgramSignatureMaxOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type StakeProgramSignatureMinOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type StakeProgramSignatureSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    fee?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StakeProgramSignatureRelationFilter = {
    is?: StakeProgramSignatureWhereInput
    isNot?: StakeProgramSignatureWhereInput
  }

  export type EnumClaimOriginFilter = {
    equals?: ClaimOrigin
    in?: Enumerable<ClaimOrigin>
    notIn?: Enumerable<ClaimOrigin>
    not?: NestedEnumClaimOriginFilter | ClaimOrigin
  }

  export type ClaimInstructionRelationFilter = {
    is?: ClaimInstructionWhereInput | null
    isNot?: ClaimInstructionWhereInput | null
  }

  export type StakeInstructionRelationFilter = {
    is?: StakeInstructionWhereInput | null
    isNot?: StakeInstructionWhereInput | null
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
    authority?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    claimOrigin?: SortOrder
  }

  export type ClaimAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
    authority?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    claimOrigin?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
    authority?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    claimOrigin?: SortOrder
  }

  export type ClaimSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    amount?: SortOrder
  }

  export type EnumClaimOriginWithAggregatesFilter = {
    equals?: ClaimOrigin
    in?: Enumerable<ClaimOrigin>
    notIn?: Enumerable<ClaimOrigin>
    not?: NestedEnumClaimOriginWithAggregatesFilter | ClaimOrigin
    _count?: NestedIntFilter
    _min?: NestedEnumClaimOriginFilter
    _max?: NestedEnumClaimOriginFilter
  }

  export type InitInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    settingsAccount?: SortOrder
    poolAuthority?: SortOrder
    rewardPool?: SortOrder
    zeeTokenMint?: SortOrder
    splTokenProgam?: SortOrder
    startTime?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type InitInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type InitInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    settingsAccount?: SortOrder
    poolAuthority?: SortOrder
    rewardPool?: SortOrder
    zeeTokenMint?: SortOrder
    splTokenProgam?: SortOrder
    startTime?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type InitInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    settingsAccount?: SortOrder
    poolAuthority?: SortOrder
    rewardPool?: SortOrder
    zeeTokenMint?: SortOrder
    splTokenProgam?: SortOrder
    startTime?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type InitInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    unbondingDuration?: SortOrder
  }

  export type RegisterEndpointInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpointAccount?: SortOrder
    endpointOwnerPubkey?: SortOrder
    primaryBeneficiaryAuthority?: SortOrder
    primaryBeneficiaryAccount?: SortOrder
    secondaryBeneficiaryAuthority?: SortOrder
    secondaryBeneficiaryAccount?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type RegisterEndpointInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    authorityType?: SortOrder
  }

  export type RegisterEndpointInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpointAccount?: SortOrder
    endpointOwnerPubkey?: SortOrder
    primaryBeneficiaryAuthority?: SortOrder
    primaryBeneficiaryAccount?: SortOrder
    secondaryBeneficiaryAuthority?: SortOrder
    secondaryBeneficiaryAccount?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type RegisterEndpointInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpointAccount?: SortOrder
    endpointOwnerPubkey?: SortOrder
    primaryBeneficiaryAuthority?: SortOrder
    primaryBeneficiaryAccount?: SortOrder
    secondaryBeneficiaryAuthority?: SortOrder
    secondaryBeneficiaryAccount?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type RegisterEndpointInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    authorityType?: SortOrder
  }

  export type InitStakeInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerBeneficiary?: SortOrder
    endpointAccount?: SortOrder
    stakeAccount?: SortOrder
  }

  export type InitStakeInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type InitStakeInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerBeneficiary?: SortOrder
    endpointAccount?: SortOrder
    stakeAccount?: SortOrder
  }

  export type InitStakeInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerBeneficiary?: SortOrder
    endpointAccount?: SortOrder
    stakeAccount?: SortOrder
  }

  export type InitStakeInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type ClaimRelationFilter = {
    is?: ClaimWhereInput
    isNot?: ClaimWhereInput
  }

  export type StakeInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerBeneficiary?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    endpointPrimaryBeneficiary?: SortOrder
    endpointSecondaryBeneficiary?: SortOrder
    poolAuthority?: SortOrder
    settings?: SortOrder
    stakeAccount?: SortOrder
  }

  export type StakeInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
  }

  export type StakeInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerBeneficiary?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    endpointPrimaryBeneficiary?: SortOrder
    endpointSecondaryBeneficiary?: SortOrder
    poolAuthority?: SortOrder
    settings?: SortOrder
    stakeAccount?: SortOrder
  }

  export type StakeInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
    payer?: SortOrder
    staker?: SortOrder
    stakerBeneficiary?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    endpointPrimaryBeneficiary?: SortOrder
    endpointSecondaryBeneficiary?: SortOrder
    poolAuthority?: SortOrder
    settings?: SortOrder
    stakeAccount?: SortOrder
  }

  export type StakeInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    stake?: SortOrder
  }

  export type WithdrawUnboundInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    stakeAccount?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type WithdrawUnboundInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type WithdrawUnboundInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    stakeAccount?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type WithdrawUnboundInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    stakeAccount?: SortOrder
    staker?: SortOrder
    stakerFund?: SortOrder
    stakerZeeTokenAccount?: SortOrder
    endpoint?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type WithdrawUnboundInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type ClaimInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    payer?: SortOrder
    beneficiaryAuthority?: SortOrder
    beneficiaryAccount?: SortOrder
    authorityZeeTokenAccount?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type ClaimInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
  }

  export type ClaimInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    payer?: SortOrder
    beneficiaryAuthority?: SortOrder
    beneficiaryAccount?: SortOrder
    authorityZeeTokenAccount?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type ClaimInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
    payer?: SortOrder
    beneficiaryAuthority?: SortOrder
    beneficiaryAccount?: SortOrder
    authorityZeeTokenAccount?: SortOrder
    settings?: SortOrder
    poolAuthority?: SortOrder
  }

  export type ClaimInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    claimId?: SortOrder
  }

  export type TransferEndpointInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    recipient?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type TransferEndpointInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    authorityType?: SortOrder
  }

  export type TransferEndpointInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    recipient?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type TransferEndpointInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    recipient?: SortOrder
    authorityAddress?: SortOrder
    authorityType?: SortOrder
  }

  export type TransferEndpointInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    authorityType?: SortOrder
  }

  export type ChangeBeneficiariesInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    oldPrimaryBeneficiaryAccount?: SortOrder
    oldSecondaryBeneficiaryAccount?: SortOrder
    newPrimaryBeneficiaryAuthority?: SortOrder
    newPrimaryBeneficiaryAccount?: SortOrder
    newSecondaryBeneficiaryAuthority?: SortOrder
    newSecondaryBeneficiaryAccount?: SortOrder
    settings?: SortOrder
  }

  export type ChangeBeneficiariesInstructionAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type ChangeBeneficiariesInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    oldPrimaryBeneficiaryAccount?: SortOrder
    oldSecondaryBeneficiaryAccount?: SortOrder
    newPrimaryBeneficiaryAuthority?: SortOrder
    newPrimaryBeneficiaryAccount?: SortOrder
    newSecondaryBeneficiaryAuthority?: SortOrder
    newSecondaryBeneficiaryAccount?: SortOrder
    settings?: SortOrder
  }

  export type ChangeBeneficiariesInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
    payer?: SortOrder
    endpoint?: SortOrder
    endpointOwnerAccount?: SortOrder
    endpointOwnerSigner?: SortOrder
    oldPrimaryBeneficiaryAccount?: SortOrder
    oldSecondaryBeneficiaryAccount?: SortOrder
    newPrimaryBeneficiaryAuthority?: SortOrder
    newPrimaryBeneficiaryAccount?: SortOrder
    newSecondaryBeneficiaryAuthority?: SortOrder
    newSecondaryBeneficiaryAccount?: SortOrder
    settings?: SortOrder
  }

  export type ChangeBeneficiariesInstructionSumOrderByAggregateInput = {
    id?: SortOrder
    signatureId?: SortOrder
  }

  export type PostTransferBalanceListRelationFilter = {
    every?: PostTransferBalanceWhereInput
    some?: PostTransferBalanceWhereInput
    none?: PostTransferBalanceWhereInput
  }

  export type PostTransferBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZeeSplSignatureCountOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type ZeeSplSignatureAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    fee?: SortOrder
  }

  export type ZeeSplSignatureMaxOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type ZeeSplSignatureMinOrderByAggregateInput = {
    id?: SortOrder
    signature?: SortOrder
    blockTime?: SortOrder
    slot?: SortOrder
    recentBlockHash?: SortOrder
    fee?: SortOrder
    processed?: SortOrder
  }

  export type ZeeSplSignatureSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    fee?: SortOrder
  }

  export type ZeeSplSignatureRelationFilter = {
    is?: ZeeSplSignatureWhereInput
    isNot?: ZeeSplSignatureWhereInput
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type PostTransferBalanceSignatureIdAccountCompoundUniqueInput = {
    signatureId: number
    account: string
  }

  export type PostTransferBalanceCountOrderByAggregateInput = {
    signatureId?: SortOrder
    account?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
    uiAmountString?: SortOrder
  }

  export type PostTransferBalanceAvgOrderByAggregateInput = {
    signatureId?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
  }

  export type PostTransferBalanceMaxOrderByAggregateInput = {
    signatureId?: SortOrder
    account?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
    uiAmountString?: SortOrder
  }

  export type PostTransferBalanceMinOrderByAggregateInput = {
    signatureId?: SortOrder
    account?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
    uiAmountString?: SortOrder
  }

  export type PostTransferBalanceSumOrderByAggregateInput = {
    signatureId?: SortOrder
    amount?: SortOrder
    uiAmount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type ClaimCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimCreateWithoutSignatureInput>, Enumerable<ClaimUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimCreateOrConnectWithoutSignatureInput>
    createMany?: ClaimCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimWhereUniqueInput>
  }

  export type InitInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitInstructionCreateWithoutSignatureInput>, Enumerable<InitInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: InitInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitInstructionWhereUniqueInput>
  }

  export type RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<RegisterEndpointInstructionCreateWithoutSignatureInput>, Enumerable<RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<RegisterEndpointInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: RegisterEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
  }

  export type InitStakeInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitStakeInstructionCreateWithoutSignatureInput>, Enumerable<InitStakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitStakeInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: InitStakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitStakeInstructionWhereUniqueInput>
  }

  export type StakeInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<StakeInstructionCreateWithoutSignatureInput>, Enumerable<StakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<StakeInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: StakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<StakeInstructionWhereUniqueInput>
  }

  export type WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<WithdrawUnboundInstructionCreateWithoutSignatureInput>, Enumerable<WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<WithdrawUnboundInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: WithdrawUnboundInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
  }

  export type ClaimInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimInstructionCreateWithoutSignatureInput>, Enumerable<ClaimInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: ClaimInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimInstructionWhereUniqueInput>
  }

  export type TransferEndpointInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<TransferEndpointInstructionCreateWithoutSignatureInput>, Enumerable<TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<TransferEndpointInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: TransferEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
  }

  export type ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ChangeBeneficiariesInstructionCreateWithoutSignatureInput>, Enumerable<ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ChangeBeneficiariesInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: ChangeBeneficiariesInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
  }

  export type ClaimUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimCreateWithoutSignatureInput>, Enumerable<ClaimUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimCreateOrConnectWithoutSignatureInput>
    createMany?: ClaimCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimWhereUniqueInput>
  }

  export type InitInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitInstructionCreateWithoutSignatureInput>, Enumerable<InitInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: InitInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitInstructionWhereUniqueInput>
  }

  export type RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<RegisterEndpointInstructionCreateWithoutSignatureInput>, Enumerable<RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<RegisterEndpointInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: RegisterEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
  }

  export type InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitStakeInstructionCreateWithoutSignatureInput>, Enumerable<InitStakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitStakeInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: InitStakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitStakeInstructionWhereUniqueInput>
  }

  export type StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<StakeInstructionCreateWithoutSignatureInput>, Enumerable<StakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<StakeInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: StakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<StakeInstructionWhereUniqueInput>
  }

  export type WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<WithdrawUnboundInstructionCreateWithoutSignatureInput>, Enumerable<WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<WithdrawUnboundInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: WithdrawUnboundInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
  }

  export type ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimInstructionCreateWithoutSignatureInput>, Enumerable<ClaimInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: ClaimInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimInstructionWhereUniqueInput>
  }

  export type TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<TransferEndpointInstructionCreateWithoutSignatureInput>, Enumerable<TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<TransferEndpointInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: TransferEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
  }

  export type ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ChangeBeneficiariesInstructionCreateWithoutSignatureInput>, Enumerable<ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ChangeBeneficiariesInstructionCreateOrConnectWithoutSignatureInput>
    createMany?: ChangeBeneficiariesInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClaimUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimCreateWithoutSignatureInput>, Enumerable<ClaimUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ClaimUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ClaimCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimWhereUniqueInput>
    set?: Enumerable<ClaimWhereUniqueInput>
    disconnect?: Enumerable<ClaimWhereUniqueInput>
    delete?: Enumerable<ClaimWhereUniqueInput>
    update?: Enumerable<ClaimUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ClaimUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ClaimScalarWhereInput>
  }

  export type InitInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitInstructionCreateWithoutSignatureInput>, Enumerable<InitInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<InitInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: InitInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitInstructionWhereUniqueInput>
    set?: Enumerable<InitInstructionWhereUniqueInput>
    disconnect?: Enumerable<InitInstructionWhereUniqueInput>
    delete?: Enumerable<InitInstructionWhereUniqueInput>
    update?: Enumerable<InitInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<InitInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<InitInstructionScalarWhereInput>
  }

  export type RegisterEndpointInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<RegisterEndpointInstructionCreateWithoutSignatureInput>, Enumerable<RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<RegisterEndpointInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<RegisterEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: RegisterEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    set?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    disconnect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    delete?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    update?: Enumerable<RegisterEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<RegisterEndpointInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<RegisterEndpointInstructionScalarWhereInput>
  }

  export type InitStakeInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitStakeInstructionCreateWithoutSignatureInput>, Enumerable<InitStakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitStakeInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<InitStakeInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: InitStakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitStakeInstructionWhereUniqueInput>
    set?: Enumerable<InitStakeInstructionWhereUniqueInput>
    disconnect?: Enumerable<InitStakeInstructionWhereUniqueInput>
    delete?: Enumerable<InitStakeInstructionWhereUniqueInput>
    update?: Enumerable<InitStakeInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<InitStakeInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<InitStakeInstructionScalarWhereInput>
  }

  export type StakeInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<StakeInstructionCreateWithoutSignatureInput>, Enumerable<StakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<StakeInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<StakeInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: StakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<StakeInstructionWhereUniqueInput>
    set?: Enumerable<StakeInstructionWhereUniqueInput>
    disconnect?: Enumerable<StakeInstructionWhereUniqueInput>
    delete?: Enumerable<StakeInstructionWhereUniqueInput>
    update?: Enumerable<StakeInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<StakeInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<StakeInstructionScalarWhereInput>
  }

  export type WithdrawUnboundInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<WithdrawUnboundInstructionCreateWithoutSignatureInput>, Enumerable<WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<WithdrawUnboundInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<WithdrawUnboundInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: WithdrawUnboundInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    set?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    disconnect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    delete?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    update?: Enumerable<WithdrawUnboundInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<WithdrawUnboundInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<WithdrawUnboundInstructionScalarWhereInput>
  }

  export type ClaimInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimInstructionCreateWithoutSignatureInput>, Enumerable<ClaimInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ClaimInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ClaimInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimInstructionWhereUniqueInput>
    set?: Enumerable<ClaimInstructionWhereUniqueInput>
    disconnect?: Enumerable<ClaimInstructionWhereUniqueInput>
    delete?: Enumerable<ClaimInstructionWhereUniqueInput>
    update?: Enumerable<ClaimInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ClaimInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ClaimInstructionScalarWhereInput>
  }

  export type TransferEndpointInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<TransferEndpointInstructionCreateWithoutSignatureInput>, Enumerable<TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<TransferEndpointInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<TransferEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: TransferEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    set?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    disconnect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    delete?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    update?: Enumerable<TransferEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<TransferEndpointInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<TransferEndpointInstructionScalarWhereInput>
  }

  export type ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ChangeBeneficiariesInstructionCreateWithoutSignatureInput>, Enumerable<ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ChangeBeneficiariesInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ChangeBeneficiariesInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ChangeBeneficiariesInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    set?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    disconnect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    delete?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    update?: Enumerable<ChangeBeneficiariesInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ChangeBeneficiariesInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ChangeBeneficiariesInstructionScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClaimUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimCreateWithoutSignatureInput>, Enumerable<ClaimUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ClaimUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ClaimCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimWhereUniqueInput>
    set?: Enumerable<ClaimWhereUniqueInput>
    disconnect?: Enumerable<ClaimWhereUniqueInput>
    delete?: Enumerable<ClaimWhereUniqueInput>
    update?: Enumerable<ClaimUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ClaimUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ClaimScalarWhereInput>
  }

  export type InitInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitInstructionCreateWithoutSignatureInput>, Enumerable<InitInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<InitInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: InitInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitInstructionWhereUniqueInput>
    set?: Enumerable<InitInstructionWhereUniqueInput>
    disconnect?: Enumerable<InitInstructionWhereUniqueInput>
    delete?: Enumerable<InitInstructionWhereUniqueInput>
    update?: Enumerable<InitInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<InitInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<InitInstructionScalarWhereInput>
  }

  export type RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<RegisterEndpointInstructionCreateWithoutSignatureInput>, Enumerable<RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<RegisterEndpointInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<RegisterEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: RegisterEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    set?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    disconnect?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    delete?: Enumerable<RegisterEndpointInstructionWhereUniqueInput>
    update?: Enumerable<RegisterEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<RegisterEndpointInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<RegisterEndpointInstructionScalarWhereInput>
  }

  export type InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<InitStakeInstructionCreateWithoutSignatureInput>, Enumerable<InitStakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<InitStakeInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<InitStakeInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: InitStakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<InitStakeInstructionWhereUniqueInput>
    set?: Enumerable<InitStakeInstructionWhereUniqueInput>
    disconnect?: Enumerable<InitStakeInstructionWhereUniqueInput>
    delete?: Enumerable<InitStakeInstructionWhereUniqueInput>
    update?: Enumerable<InitStakeInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<InitStakeInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<InitStakeInstructionScalarWhereInput>
  }

  export type StakeInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<StakeInstructionCreateWithoutSignatureInput>, Enumerable<StakeInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<StakeInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<StakeInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: StakeInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<StakeInstructionWhereUniqueInput>
    set?: Enumerable<StakeInstructionWhereUniqueInput>
    disconnect?: Enumerable<StakeInstructionWhereUniqueInput>
    delete?: Enumerable<StakeInstructionWhereUniqueInput>
    update?: Enumerable<StakeInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<StakeInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<StakeInstructionScalarWhereInput>
  }

  export type WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<WithdrawUnboundInstructionCreateWithoutSignatureInput>, Enumerable<WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<WithdrawUnboundInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<WithdrawUnboundInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: WithdrawUnboundInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    set?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    disconnect?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    delete?: Enumerable<WithdrawUnboundInstructionWhereUniqueInput>
    update?: Enumerable<WithdrawUnboundInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<WithdrawUnboundInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<WithdrawUnboundInstructionScalarWhereInput>
  }

  export type ClaimInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ClaimInstructionCreateWithoutSignatureInput>, Enumerable<ClaimInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ClaimInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ClaimInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ClaimInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ClaimInstructionWhereUniqueInput>
    set?: Enumerable<ClaimInstructionWhereUniqueInput>
    disconnect?: Enumerable<ClaimInstructionWhereUniqueInput>
    delete?: Enumerable<ClaimInstructionWhereUniqueInput>
    update?: Enumerable<ClaimInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ClaimInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ClaimInstructionScalarWhereInput>
  }

  export type TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<TransferEndpointInstructionCreateWithoutSignatureInput>, Enumerable<TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<TransferEndpointInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<TransferEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: TransferEndpointInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    set?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    disconnect?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    delete?: Enumerable<TransferEndpointInstructionWhereUniqueInput>
    update?: Enumerable<TransferEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<TransferEndpointInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<TransferEndpointInstructionScalarWhereInput>
  }

  export type ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<ChangeBeneficiariesInstructionCreateWithoutSignatureInput>, Enumerable<ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<ChangeBeneficiariesInstructionCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<ChangeBeneficiariesInstructionUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: ChangeBeneficiariesInstructionCreateManySignatureInputEnvelope
    connect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    set?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    disconnect?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    delete?: Enumerable<ChangeBeneficiariesInstructionWhereUniqueInput>
    update?: Enumerable<ChangeBeneficiariesInstructionUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<ChangeBeneficiariesInstructionUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<ChangeBeneficiariesInstructionScalarWhereInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutClaimInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutClaimInput, StakeProgramSignatureUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutClaimInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type ClaimInstructionCreateNestedOneWithoutClaimInput = {
    create?: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: ClaimInstructionCreateOrConnectWithoutClaimInput
    connect?: ClaimInstructionWhereUniqueInput
  }

  export type StakeInstructionCreateNestedOneWithoutClaimInput = {
    create?: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeInstructionCreateOrConnectWithoutClaimInput
    connect?: StakeInstructionWhereUniqueInput
  }

  export type ClaimInstructionUncheckedCreateNestedOneWithoutClaimInput = {
    create?: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: ClaimInstructionCreateOrConnectWithoutClaimInput
    connect?: ClaimInstructionWhereUniqueInput
  }

  export type StakeInstructionUncheckedCreateNestedOneWithoutClaimInput = {
    create?: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeInstructionCreateOrConnectWithoutClaimInput
    connect?: StakeInstructionWhereUniqueInput
  }

  export type EnumClaimOriginFieldUpdateOperationsInput = {
    set?: ClaimOrigin
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutClaimInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutClaimInput, StakeProgramSignatureUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutClaimInput
    upsert?: StakeProgramSignatureUpsertWithoutClaimInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutClaimInput, StakeProgramSignatureUncheckedUpdateWithoutClaimInput>
  }

  export type ClaimInstructionUpdateOneWithoutClaimInput = {
    create?: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: ClaimInstructionCreateOrConnectWithoutClaimInput
    upsert?: ClaimInstructionUpsertWithoutClaimInput
    connect?: ClaimInstructionWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ClaimInstructionUpdateWithoutClaimInput, ClaimInstructionUncheckedUpdateWithoutClaimInput>
  }

  export type StakeInstructionUpdateOneWithoutClaimInput = {
    create?: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeInstructionCreateOrConnectWithoutClaimInput
    upsert?: StakeInstructionUpsertWithoutClaimInput
    connect?: StakeInstructionWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<StakeInstructionUpdateWithoutClaimInput, StakeInstructionUncheckedUpdateWithoutClaimInput>
  }

  export type ClaimInstructionUncheckedUpdateOneWithoutClaimInput = {
    create?: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: ClaimInstructionCreateOrConnectWithoutClaimInput
    upsert?: ClaimInstructionUpsertWithoutClaimInput
    connect?: ClaimInstructionWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ClaimInstructionUpdateWithoutClaimInput, ClaimInstructionUncheckedUpdateWithoutClaimInput>
  }

  export type StakeInstructionUncheckedUpdateOneWithoutClaimInput = {
    create?: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
    connectOrCreate?: StakeInstructionCreateOrConnectWithoutClaimInput
    upsert?: StakeInstructionUpsertWithoutClaimInput
    connect?: StakeInstructionWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<StakeInstructionUpdateWithoutClaimInput, StakeInstructionUncheckedUpdateWithoutClaimInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutInitInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutInitInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutInitInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutInitInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutInitInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutInitInstructionsInput
    upsert?: StakeProgramSignatureUpsertWithoutInitInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutInitInstructionsInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutRegisterEndpointInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutRegisterEndpointInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutRegisterEndpointInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutRegisterEndpointInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutRegisterEndpointInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutRegisterEndpointInstructionsInput
    upsert?: StakeProgramSignatureUpsertWithoutRegisterEndpointInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutRegisterEndpointInstructionsInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutInitStakeInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedCreateWithoutInitStakeInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutInitStakeInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutInitStakeInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedCreateWithoutInitStakeInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutInitStakeInstructionInput
    upsert?: StakeProgramSignatureUpsertWithoutInitStakeInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutInitStakeInstructionInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutStakeInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutStakeInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutStakeInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type ClaimCreateNestedOneWithoutStakeInstructionInput = {
    create?: XOR<ClaimCreateWithoutStakeInstructionInput, ClaimUncheckedCreateWithoutStakeInstructionInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutStakeInstructionInput
    connect?: ClaimWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutStakeInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutStakeInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutStakeInstructionsInput
    upsert?: StakeProgramSignatureUpsertWithoutStakeInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutStakeInstructionsInput>
  }

  export type ClaimUpdateOneRequiredWithoutStakeInstructionInput = {
    create?: XOR<ClaimCreateWithoutStakeInstructionInput, ClaimUncheckedCreateWithoutStakeInstructionInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutStakeInstructionInput
    upsert?: ClaimUpsertWithoutStakeInstructionInput
    connect?: ClaimWhereUniqueInput
    update?: XOR<ClaimUpdateWithoutStakeInstructionInput, ClaimUncheckedUpdateWithoutStakeInstructionInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutWithdrawUnboundInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutWithdrawUnboundInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutWithdrawUnboundInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutWithdrawUnboundInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutWithdrawUnboundInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutWithdrawUnboundInstructionsInput
    upsert?: StakeProgramSignatureUpsertWithoutWithdrawUnboundInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutWithdrawUnboundInstructionsInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutClaimInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutClaimInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutClaimInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type ClaimCreateNestedOneWithoutClaimInstructionInput = {
    create?: XOR<ClaimCreateWithoutClaimInstructionInput, ClaimUncheckedCreateWithoutClaimInstructionInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutClaimInstructionInput
    connect?: ClaimWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutClaimInstructionsInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutClaimInstructionsInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutClaimInstructionsInput
    upsert?: StakeProgramSignatureUpsertWithoutClaimInstructionsInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutClaimInstructionsInput>
  }

  export type ClaimUpdateOneRequiredWithoutClaimInstructionInput = {
    create?: XOR<ClaimCreateWithoutClaimInstructionInput, ClaimUncheckedCreateWithoutClaimInstructionInput>
    connectOrCreate?: ClaimCreateOrConnectWithoutClaimInstructionInput
    upsert?: ClaimUpsertWithoutClaimInstructionInput
    connect?: ClaimWhereUniqueInput
    update?: XOR<ClaimUpdateWithoutClaimInstructionInput, ClaimUncheckedUpdateWithoutClaimInstructionInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutTransferEndpointInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedCreateWithoutTransferEndpointInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutTransferEndpointInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutTransferEndpointInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedCreateWithoutTransferEndpointInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutTransferEndpointInstructionInput
    upsert?: StakeProgramSignatureUpsertWithoutTransferEndpointInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutTransferEndpointInstructionInput>
  }

  export type StakeProgramSignatureCreateNestedOneWithoutChangeBeneficiariesInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedCreateWithoutChangeBeneficiariesInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutChangeBeneficiariesInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
  }

  export type StakeProgramSignatureUpdateOneRequiredWithoutChangeBeneficiariesInstructionInput = {
    create?: XOR<StakeProgramSignatureCreateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedCreateWithoutChangeBeneficiariesInstructionInput>
    connectOrCreate?: StakeProgramSignatureCreateOrConnectWithoutChangeBeneficiariesInstructionInput
    upsert?: StakeProgramSignatureUpsertWithoutChangeBeneficiariesInstructionInput
    connect?: StakeProgramSignatureWhereUniqueInput
    update?: XOR<StakeProgramSignatureUpdateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutChangeBeneficiariesInstructionInput>
  }

  export type PostTransferBalanceCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<PostTransferBalanceCreateWithoutSignatureInput>, Enumerable<PostTransferBalanceUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<PostTransferBalanceCreateOrConnectWithoutSignatureInput>
    createMany?: PostTransferBalanceCreateManySignatureInputEnvelope
    connect?: Enumerable<PostTransferBalanceWhereUniqueInput>
  }

  export type PostTransferBalanceUncheckedCreateNestedManyWithoutSignatureInput = {
    create?: XOR<Enumerable<PostTransferBalanceCreateWithoutSignatureInput>, Enumerable<PostTransferBalanceUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<PostTransferBalanceCreateOrConnectWithoutSignatureInput>
    createMany?: PostTransferBalanceCreateManySignatureInputEnvelope
    connect?: Enumerable<PostTransferBalanceWhereUniqueInput>
  }

  export type PostTransferBalanceUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<PostTransferBalanceCreateWithoutSignatureInput>, Enumerable<PostTransferBalanceUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<PostTransferBalanceCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<PostTransferBalanceUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: PostTransferBalanceCreateManySignatureInputEnvelope
    connect?: Enumerable<PostTransferBalanceWhereUniqueInput>
    set?: Enumerable<PostTransferBalanceWhereUniqueInput>
    disconnect?: Enumerable<PostTransferBalanceWhereUniqueInput>
    delete?: Enumerable<PostTransferBalanceWhereUniqueInput>
    update?: Enumerable<PostTransferBalanceUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<PostTransferBalanceUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<PostTransferBalanceScalarWhereInput>
  }

  export type PostTransferBalanceUncheckedUpdateManyWithoutSignatureInput = {
    create?: XOR<Enumerable<PostTransferBalanceCreateWithoutSignatureInput>, Enumerable<PostTransferBalanceUncheckedCreateWithoutSignatureInput>>
    connectOrCreate?: Enumerable<PostTransferBalanceCreateOrConnectWithoutSignatureInput>
    upsert?: Enumerable<PostTransferBalanceUpsertWithWhereUniqueWithoutSignatureInput>
    createMany?: PostTransferBalanceCreateManySignatureInputEnvelope
    connect?: Enumerable<PostTransferBalanceWhereUniqueInput>
    set?: Enumerable<PostTransferBalanceWhereUniqueInput>
    disconnect?: Enumerable<PostTransferBalanceWhereUniqueInput>
    delete?: Enumerable<PostTransferBalanceWhereUniqueInput>
    update?: Enumerable<PostTransferBalanceUpdateWithWhereUniqueWithoutSignatureInput>
    updateMany?: Enumerable<PostTransferBalanceUpdateManyWithWhereWithoutSignatureInput>
    deleteMany?: Enumerable<PostTransferBalanceScalarWhereInput>
  }

  export type ZeeSplSignatureCreateNestedOneWithoutPostBalancesInput = {
    create?: XOR<ZeeSplSignatureCreateWithoutPostBalancesInput, ZeeSplSignatureUncheckedCreateWithoutPostBalancesInput>
    connectOrCreate?: ZeeSplSignatureCreateOrConnectWithoutPostBalancesInput
    connect?: ZeeSplSignatureWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ZeeSplSignatureUpdateOneRequiredWithoutPostBalancesInput = {
    create?: XOR<ZeeSplSignatureCreateWithoutPostBalancesInput, ZeeSplSignatureUncheckedCreateWithoutPostBalancesInput>
    connectOrCreate?: ZeeSplSignatureCreateOrConnectWithoutPostBalancesInput
    upsert?: ZeeSplSignatureUpsertWithoutPostBalancesInput
    connect?: ZeeSplSignatureWhereUniqueInput
    update?: XOR<ZeeSplSignatureUpdateWithoutPostBalancesInput, ZeeSplSignatureUncheckedUpdateWithoutPostBalancesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumClaimOriginFilter = {
    equals?: ClaimOrigin
    in?: Enumerable<ClaimOrigin>
    notIn?: Enumerable<ClaimOrigin>
    not?: NestedEnumClaimOriginFilter | ClaimOrigin
  }

  export type NestedEnumClaimOriginWithAggregatesFilter = {
    equals?: ClaimOrigin
    in?: Enumerable<ClaimOrigin>
    notIn?: Enumerable<ClaimOrigin>
    not?: NestedEnumClaimOriginWithAggregatesFilter | ClaimOrigin
    _count?: NestedIntFilter
    _min?: NestedEnumClaimOriginFilter
    _max?: NestedEnumClaimOriginFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type ClaimCreateWithoutSignatureInput = {
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    claimInstruction?: ClaimInstructionCreateNestedOneWithoutClaimInput
    stakeInstruction?: StakeInstructionCreateNestedOneWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutSignatureInput = {
    id?: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedCreateNestedOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUncheckedCreateNestedOneWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutSignatureInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutSignatureInput, ClaimUncheckedCreateWithoutSignatureInput>
  }

  export type ClaimCreateManySignatureInputEnvelope = {
    data: Enumerable<ClaimCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type InitInstructionCreateWithoutSignatureInput = {
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
  }

  export type InitInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
  }

  export type InitInstructionCreateOrConnectWithoutSignatureInput = {
    where: InitInstructionWhereUniqueInput
    create: XOR<InitInstructionCreateWithoutSignatureInput, InitInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type InitInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<InitInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type RegisterEndpointInstructionCreateWithoutSignatureInput = {
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
  }

  export type RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
  }

  export type RegisterEndpointInstructionCreateOrConnectWithoutSignatureInput = {
    where: RegisterEndpointInstructionWhereUniqueInput
    create: XOR<RegisterEndpointInstructionCreateWithoutSignatureInput, RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type RegisterEndpointInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<RegisterEndpointInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type InitStakeInstructionCreateWithoutSignatureInput = {
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
  }

  export type InitStakeInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
  }

  export type InitStakeInstructionCreateOrConnectWithoutSignatureInput = {
    where: InitStakeInstructionWhereUniqueInput
    create: XOR<InitStakeInstructionCreateWithoutSignatureInput, InitStakeInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type InitStakeInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<InitStakeInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type StakeInstructionCreateWithoutSignatureInput = {
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
    claim: ClaimCreateNestedOneWithoutStakeInstructionInput
  }

  export type StakeInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    claimId: number
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
  }

  export type StakeInstructionCreateOrConnectWithoutSignatureInput = {
    where: StakeInstructionWhereUniqueInput
    create: XOR<StakeInstructionCreateWithoutSignatureInput, StakeInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type StakeInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<StakeInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type WithdrawUnboundInstructionCreateWithoutSignatureInput = {
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
  }

  export type WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
  }

  export type WithdrawUnboundInstructionCreateOrConnectWithoutSignatureInput = {
    where: WithdrawUnboundInstructionWhereUniqueInput
    create: XOR<WithdrawUnboundInstructionCreateWithoutSignatureInput, WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type WithdrawUnboundInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<WithdrawUnboundInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type ClaimInstructionCreateWithoutSignatureInput = {
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
    claim: ClaimCreateNestedOneWithoutClaimInstructionInput
  }

  export type ClaimInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    claimId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
  }

  export type ClaimInstructionCreateOrConnectWithoutSignatureInput = {
    where: ClaimInstructionWhereUniqueInput
    create: XOR<ClaimInstructionCreateWithoutSignatureInput, ClaimInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type ClaimInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<ClaimInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type TransferEndpointInstructionCreateWithoutSignatureInput = {
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
  }

  export type TransferEndpointInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
  }

  export type TransferEndpointInstructionCreateOrConnectWithoutSignatureInput = {
    where: TransferEndpointInstructionWhereUniqueInput
    create: XOR<TransferEndpointInstructionCreateWithoutSignatureInput, TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type TransferEndpointInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<TransferEndpointInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type ChangeBeneficiariesInstructionCreateWithoutSignatureInput = {
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
  }

  export type ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput = {
    id?: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
  }

  export type ChangeBeneficiariesInstructionCreateOrConnectWithoutSignatureInput = {
    where: ChangeBeneficiariesInstructionWhereUniqueInput
    create: XOR<ChangeBeneficiariesInstructionCreateWithoutSignatureInput, ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type ChangeBeneficiariesInstructionCreateManySignatureInputEnvelope = {
    data: Enumerable<ChangeBeneficiariesInstructionCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutSignatureInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutSignatureInput, ClaimUncheckedUpdateWithoutSignatureInput>
    create: XOR<ClaimCreateWithoutSignatureInput, ClaimUncheckedCreateWithoutSignatureInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutSignatureInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutSignatureInput, ClaimUncheckedUpdateWithoutSignatureInput>
  }

  export type ClaimUpdateManyWithWhereWithoutSignatureInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutClaimInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: Enumerable<ClaimScalarWhereInput>
    OR?: Enumerable<ClaimScalarWhereInput>
    NOT?: Enumerable<ClaimScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    amount?: BigIntFilter | bigint | number
    authority?: StringFilter | string
    source?: StringFilter | string
    destination?: StringFilter | string
    claimOrigin?: EnumClaimOriginFilter | ClaimOrigin
  }

  export type InitInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: InitInstructionWhereUniqueInput
    update: XOR<InitInstructionUpdateWithoutSignatureInput, InitInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<InitInstructionCreateWithoutSignatureInput, InitInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type InitInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: InitInstructionWhereUniqueInput
    data: XOR<InitInstructionUpdateWithoutSignatureInput, InitInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type InitInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: InitInstructionScalarWhereInput
    data: XOR<InitInstructionUpdateManyMutationInput, InitInstructionUncheckedUpdateManyWithoutInitInstructionsInput>
  }

  export type InitInstructionScalarWhereInput = {
    AND?: Enumerable<InitInstructionScalarWhereInput>
    OR?: Enumerable<InitInstructionScalarWhereInput>
    NOT?: Enumerable<InitInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    settingsAccount?: StringFilter | string
    poolAuthority?: StringFilter | string
    rewardPool?: StringFilter | string
    zeeTokenMint?: StringFilter | string
    splTokenProgam?: StringFilter | string
    startTime?: DateTimeFilter | Date | string
    unbondingDuration?: IntFilter | number
  }

  export type RegisterEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: RegisterEndpointInstructionWhereUniqueInput
    update: XOR<RegisterEndpointInstructionUpdateWithoutSignatureInput, RegisterEndpointInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<RegisterEndpointInstructionCreateWithoutSignatureInput, RegisterEndpointInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type RegisterEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: RegisterEndpointInstructionWhereUniqueInput
    data: XOR<RegisterEndpointInstructionUpdateWithoutSignatureInput, RegisterEndpointInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type RegisterEndpointInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: RegisterEndpointInstructionScalarWhereInput
    data: XOR<RegisterEndpointInstructionUpdateManyMutationInput, RegisterEndpointInstructionUncheckedUpdateManyWithoutRegisterEndpointInstructionsInput>
  }

  export type RegisterEndpointInstructionScalarWhereInput = {
    AND?: Enumerable<RegisterEndpointInstructionScalarWhereInput>
    OR?: Enumerable<RegisterEndpointInstructionScalarWhereInput>
    NOT?: Enumerable<RegisterEndpointInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpointAccount?: StringFilter | string
    endpointOwnerPubkey?: StringFilter | string
    primaryBeneficiaryAuthority?: StringFilter | string
    primaryBeneficiaryAccount?: StringFilter | string
    secondaryBeneficiaryAuthority?: StringFilter | string
    secondaryBeneficiaryAccount?: StringFilter | string
    authorityAddress?: StringFilter | string
    authorityType?: IntFilter | number
  }

  export type InitStakeInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: InitStakeInstructionWhereUniqueInput
    update: XOR<InitStakeInstructionUpdateWithoutSignatureInput, InitStakeInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<InitStakeInstructionCreateWithoutSignatureInput, InitStakeInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type InitStakeInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: InitStakeInstructionWhereUniqueInput
    data: XOR<InitStakeInstructionUpdateWithoutSignatureInput, InitStakeInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type InitStakeInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: InitStakeInstructionScalarWhereInput
    data: XOR<InitStakeInstructionUpdateManyMutationInput, InitStakeInstructionUncheckedUpdateManyWithoutInitStakeInstructionInput>
  }

  export type InitStakeInstructionScalarWhereInput = {
    AND?: Enumerable<InitStakeInstructionScalarWhereInput>
    OR?: Enumerable<InitStakeInstructionScalarWhereInput>
    NOT?: Enumerable<InitStakeInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    staker?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerBeneficiary?: StringFilter | string
    endpointAccount?: StringFilter | string
    stakeAccount?: StringFilter | string
  }

  export type StakeInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: StakeInstructionWhereUniqueInput
    update: XOR<StakeInstructionUpdateWithoutSignatureInput, StakeInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<StakeInstructionCreateWithoutSignatureInput, StakeInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type StakeInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: StakeInstructionWhereUniqueInput
    data: XOR<StakeInstructionUpdateWithoutSignatureInput, StakeInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type StakeInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: StakeInstructionScalarWhereInput
    data: XOR<StakeInstructionUpdateManyMutationInput, StakeInstructionUncheckedUpdateManyWithoutStakeInstructionsInput>
  }

  export type StakeInstructionScalarWhereInput = {
    AND?: Enumerable<StakeInstructionScalarWhereInput>
    OR?: Enumerable<StakeInstructionScalarWhereInput>
    NOT?: Enumerable<StakeInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    claimId?: IntFilter | number
    stake?: BigIntFilter | bigint | number
    payer?: StringFilter | string
    staker?: StringFilter | string
    stakerBeneficiary?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerZeeTokenAccount?: StringFilter | string
    endpoint?: StringFilter | string
    endpointPrimaryBeneficiary?: StringFilter | string
    endpointSecondaryBeneficiary?: StringFilter | string
    poolAuthority?: StringFilter | string
    settings?: StringFilter | string
    stakeAccount?: StringFilter | string
  }

  export type WithdrawUnboundInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: WithdrawUnboundInstructionWhereUniqueInput
    update: XOR<WithdrawUnboundInstructionUpdateWithoutSignatureInput, WithdrawUnboundInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<WithdrawUnboundInstructionCreateWithoutSignatureInput, WithdrawUnboundInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type WithdrawUnboundInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: WithdrawUnboundInstructionWhereUniqueInput
    data: XOR<WithdrawUnboundInstructionUpdateWithoutSignatureInput, WithdrawUnboundInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type WithdrawUnboundInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: WithdrawUnboundInstructionScalarWhereInput
    data: XOR<WithdrawUnboundInstructionUpdateManyMutationInput, WithdrawUnboundInstructionUncheckedUpdateManyWithoutWithdrawUnboundInstructionsInput>
  }

  export type WithdrawUnboundInstructionScalarWhereInput = {
    AND?: Enumerable<WithdrawUnboundInstructionScalarWhereInput>
    OR?: Enumerable<WithdrawUnboundInstructionScalarWhereInput>
    NOT?: Enumerable<WithdrawUnboundInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    stakeAccount?: StringFilter | string
    staker?: StringFilter | string
    stakerFund?: StringFilter | string
    stakerZeeTokenAccount?: StringFilter | string
    endpoint?: StringFilter | string
    settings?: StringFilter | string
    poolAuthority?: StringFilter | string
  }

  export type ClaimInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: ClaimInstructionWhereUniqueInput
    update: XOR<ClaimInstructionUpdateWithoutSignatureInput, ClaimInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<ClaimInstructionCreateWithoutSignatureInput, ClaimInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type ClaimInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: ClaimInstructionWhereUniqueInput
    data: XOR<ClaimInstructionUpdateWithoutSignatureInput, ClaimInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type ClaimInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: ClaimInstructionScalarWhereInput
    data: XOR<ClaimInstructionUpdateManyMutationInput, ClaimInstructionUncheckedUpdateManyWithoutClaimInstructionsInput>
  }

  export type ClaimInstructionScalarWhereInput = {
    AND?: Enumerable<ClaimInstructionScalarWhereInput>
    OR?: Enumerable<ClaimInstructionScalarWhereInput>
    NOT?: Enumerable<ClaimInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    claimId?: IntFilter | number
    payer?: StringFilter | string
    beneficiaryAuthority?: StringFilter | string
    beneficiaryAccount?: StringFilter | string
    authorityZeeTokenAccount?: StringFilter | string
    settings?: StringFilter | string
    poolAuthority?: StringFilter | string
  }

  export type TransferEndpointInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: TransferEndpointInstructionWhereUniqueInput
    update: XOR<TransferEndpointInstructionUpdateWithoutSignatureInput, TransferEndpointInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<TransferEndpointInstructionCreateWithoutSignatureInput, TransferEndpointInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type TransferEndpointInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: TransferEndpointInstructionWhereUniqueInput
    data: XOR<TransferEndpointInstructionUpdateWithoutSignatureInput, TransferEndpointInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type TransferEndpointInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: TransferEndpointInstructionScalarWhereInput
    data: XOR<TransferEndpointInstructionUpdateManyMutationInput, TransferEndpointInstructionUncheckedUpdateManyWithoutTransferEndpointInstructionInput>
  }

  export type TransferEndpointInstructionScalarWhereInput = {
    AND?: Enumerable<TransferEndpointInstructionScalarWhereInput>
    OR?: Enumerable<TransferEndpointInstructionScalarWhereInput>
    NOT?: Enumerable<TransferEndpointInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpoint?: StringFilter | string
    endpointOwnerAccount?: StringFilter | string
    endpointOwnerSigner?: StringFilter | string
    recipient?: StringFilter | string
    authorityAddress?: StringFilter | string
    authorityType?: IntFilter | number
  }

  export type ChangeBeneficiariesInstructionUpsertWithWhereUniqueWithoutSignatureInput = {
    where: ChangeBeneficiariesInstructionWhereUniqueInput
    update: XOR<ChangeBeneficiariesInstructionUpdateWithoutSignatureInput, ChangeBeneficiariesInstructionUncheckedUpdateWithoutSignatureInput>
    create: XOR<ChangeBeneficiariesInstructionCreateWithoutSignatureInput, ChangeBeneficiariesInstructionUncheckedCreateWithoutSignatureInput>
  }

  export type ChangeBeneficiariesInstructionUpdateWithWhereUniqueWithoutSignatureInput = {
    where: ChangeBeneficiariesInstructionWhereUniqueInput
    data: XOR<ChangeBeneficiariesInstructionUpdateWithoutSignatureInput, ChangeBeneficiariesInstructionUncheckedUpdateWithoutSignatureInput>
  }

  export type ChangeBeneficiariesInstructionUpdateManyWithWhereWithoutSignatureInput = {
    where: ChangeBeneficiariesInstructionScalarWhereInput
    data: XOR<ChangeBeneficiariesInstructionUpdateManyMutationInput, ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutChangeBeneficiariesInstructionInput>
  }

  export type ChangeBeneficiariesInstructionScalarWhereInput = {
    AND?: Enumerable<ChangeBeneficiariesInstructionScalarWhereInput>
    OR?: Enumerable<ChangeBeneficiariesInstructionScalarWhereInput>
    NOT?: Enumerable<ChangeBeneficiariesInstructionScalarWhereInput>
    id?: IntFilter | number
    signatureId?: IntFilter | number
    payer?: StringFilter | string
    endpoint?: StringFilter | string
    endpointOwnerAccount?: StringFilter | string
    endpointOwnerSigner?: StringFilter | string
    oldPrimaryBeneficiaryAccount?: StringFilter | string
    oldSecondaryBeneficiaryAccount?: StringFilter | string
    newPrimaryBeneficiaryAuthority?: StringFilter | string
    newPrimaryBeneficiaryAccount?: StringFilter | string
    newSecondaryBeneficiaryAuthority?: StringFilter | string
    newSecondaryBeneficiaryAccount?: StringFilter | string
    settings?: StringFilter | string
  }

  export type StakeProgramSignatureCreateWithoutClaimInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutClaimInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutClaimInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutClaimInput, StakeProgramSignatureUncheckedCreateWithoutClaimInput>
  }

  export type ClaimInstructionCreateWithoutClaimInput = {
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
    signature: StakeProgramSignatureCreateNestedOneWithoutClaimInstructionsInput
  }

  export type ClaimInstructionUncheckedCreateWithoutClaimInput = {
    id?: number
    signatureId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
  }

  export type ClaimInstructionCreateOrConnectWithoutClaimInput = {
    where: ClaimInstructionWhereUniqueInput
    create: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
  }

  export type StakeInstructionCreateWithoutClaimInput = {
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
    signature: StakeProgramSignatureCreateNestedOneWithoutStakeInstructionsInput
  }

  export type StakeInstructionUncheckedCreateWithoutClaimInput = {
    id?: number
    signatureId: number
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
  }

  export type StakeInstructionCreateOrConnectWithoutClaimInput = {
    where: StakeInstructionWhereUniqueInput
    create: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
  }

  export type StakeProgramSignatureUpsertWithoutClaimInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutClaimInput, StakeProgramSignatureUncheckedUpdateWithoutClaimInput>
    create: XOR<StakeProgramSignatureCreateWithoutClaimInput, StakeProgramSignatureUncheckedCreateWithoutClaimInput>
  }

  export type StakeProgramSignatureUpdateWithoutClaimInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutClaimInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type ClaimInstructionUpsertWithoutClaimInput = {
    update: XOR<ClaimInstructionUpdateWithoutClaimInput, ClaimInstructionUncheckedUpdateWithoutClaimInput>
    create: XOR<ClaimInstructionCreateWithoutClaimInput, ClaimInstructionUncheckedCreateWithoutClaimInput>
  }

  export type ClaimInstructionUpdateWithoutClaimInput = {
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutClaimInstructionsInput
  }

  export type ClaimInstructionUncheckedUpdateWithoutClaimInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionUpsertWithoutClaimInput = {
    update: XOR<StakeInstructionUpdateWithoutClaimInput, StakeInstructionUncheckedUpdateWithoutClaimInput>
    create: XOR<StakeInstructionCreateWithoutClaimInput, StakeInstructionUncheckedCreateWithoutClaimInput>
  }

  export type StakeInstructionUpdateWithoutClaimInput = {
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutStakeInstructionsInput
  }

  export type StakeInstructionUncheckedUpdateWithoutClaimInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeProgramSignatureCreateWithoutInitInstructionsInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutInitInstructionsInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutInitInstructionsInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutInitInstructionsInput>
  }

  export type StakeProgramSignatureUpsertWithoutInitInstructionsInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutInitInstructionsInput>
    create: XOR<StakeProgramSignatureCreateWithoutInitInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutInitInstructionsInput>
  }

  export type StakeProgramSignatureUpdateWithoutInitInstructionsInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutInitInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateWithoutRegisterEndpointInstructionsInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutRegisterEndpointInstructionsInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutRegisterEndpointInstructionsInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutRegisterEndpointInstructionsInput>
  }

  export type StakeProgramSignatureUpsertWithoutRegisterEndpointInstructionsInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutRegisterEndpointInstructionsInput>
    create: XOR<StakeProgramSignatureCreateWithoutRegisterEndpointInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutRegisterEndpointInstructionsInput>
  }

  export type StakeProgramSignatureUpdateWithoutRegisterEndpointInstructionsInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutRegisterEndpointInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateWithoutInitStakeInstructionInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutInitStakeInstructionInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutInitStakeInstructionInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedCreateWithoutInitStakeInstructionInput>
  }

  export type StakeProgramSignatureUpsertWithoutInitStakeInstructionInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutInitStakeInstructionInput>
    create: XOR<StakeProgramSignatureCreateWithoutInitStakeInstructionInput, StakeProgramSignatureUncheckedCreateWithoutInitStakeInstructionInput>
  }

  export type StakeProgramSignatureUpdateWithoutInitStakeInstructionInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutInitStakeInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateWithoutStakeInstructionsInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutStakeInstructionsInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutStakeInstructionsInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutStakeInstructionsInput>
  }

  export type ClaimCreateWithoutStakeInstructionInput = {
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    signature: StakeProgramSignatureCreateNestedOneWithoutClaimInput
    claimInstruction?: ClaimInstructionCreateNestedOneWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutStakeInstructionInput = {
    id?: number
    signatureId: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedCreateNestedOneWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutStakeInstructionInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutStakeInstructionInput, ClaimUncheckedCreateWithoutStakeInstructionInput>
  }

  export type StakeProgramSignatureUpsertWithoutStakeInstructionsInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutStakeInstructionsInput>
    create: XOR<StakeProgramSignatureCreateWithoutStakeInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutStakeInstructionsInput>
  }

  export type StakeProgramSignatureUpdateWithoutStakeInstructionsInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutStakeInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type ClaimUpsertWithoutStakeInstructionInput = {
    update: XOR<ClaimUpdateWithoutStakeInstructionInput, ClaimUncheckedUpdateWithoutStakeInstructionInput>
    create: XOR<ClaimCreateWithoutStakeInstructionInput, ClaimUncheckedCreateWithoutStakeInstructionInput>
  }

  export type ClaimUpdateWithoutStakeInstructionInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutClaimInput
    claimInstruction?: ClaimInstructionUpdateOneWithoutClaimInput
  }

  export type ClaimUncheckedUpdateWithoutStakeInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedUpdateOneWithoutClaimInput
  }

  export type StakeProgramSignatureCreateWithoutWithdrawUnboundInstructionsInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutWithdrawUnboundInstructionsInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutWithdrawUnboundInstructionsInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutWithdrawUnboundInstructionsInput>
  }

  export type StakeProgramSignatureUpsertWithoutWithdrawUnboundInstructionsInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutWithdrawUnboundInstructionsInput>
    create: XOR<StakeProgramSignatureCreateWithoutWithdrawUnboundInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutWithdrawUnboundInstructionsInput>
  }

  export type StakeProgramSignatureUpdateWithoutWithdrawUnboundInstructionsInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutWithdrawUnboundInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateWithoutClaimInstructionsInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutClaimInstructionsInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutClaimInstructionsInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutClaimInstructionsInput>
  }

  export type ClaimCreateWithoutClaimInstructionInput = {
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    signature: StakeProgramSignatureCreateNestedOneWithoutClaimInput
    stakeInstruction?: StakeInstructionCreateNestedOneWithoutClaimInput
  }

  export type ClaimUncheckedCreateWithoutClaimInstructionInput = {
    id?: number
    signatureId: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
    stakeInstruction?: StakeInstructionUncheckedCreateNestedOneWithoutClaimInput
  }

  export type ClaimCreateOrConnectWithoutClaimInstructionInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutClaimInstructionInput, ClaimUncheckedCreateWithoutClaimInstructionInput>
  }

  export type StakeProgramSignatureUpsertWithoutClaimInstructionsInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedUpdateWithoutClaimInstructionsInput>
    create: XOR<StakeProgramSignatureCreateWithoutClaimInstructionsInput, StakeProgramSignatureUncheckedCreateWithoutClaimInstructionsInput>
  }

  export type StakeProgramSignatureUpdateWithoutClaimInstructionsInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutClaimInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type ClaimUpsertWithoutClaimInstructionInput = {
    update: XOR<ClaimUpdateWithoutClaimInstructionInput, ClaimUncheckedUpdateWithoutClaimInstructionInput>
    create: XOR<ClaimCreateWithoutClaimInstructionInput, ClaimUncheckedCreateWithoutClaimInstructionInput>
  }

  export type ClaimUpdateWithoutClaimInstructionInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    signature?: StakeProgramSignatureUpdateOneRequiredWithoutClaimInput
    stakeInstruction?: StakeInstructionUpdateOneWithoutClaimInput
  }

  export type ClaimUncheckedUpdateWithoutClaimInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureId?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    stakeInstruction?: StakeInstructionUncheckedUpdateOneWithoutClaimInput
  }

  export type StakeProgramSignatureCreateWithoutTransferEndpointInstructionInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutTransferEndpointInstructionInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutTransferEndpointInstructionInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedCreateWithoutTransferEndpointInstructionInput>
  }

  export type StakeProgramSignatureUpsertWithoutTransferEndpointInstructionInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutTransferEndpointInstructionInput>
    create: XOR<StakeProgramSignatureCreateWithoutTransferEndpointInstructionInput, StakeProgramSignatureUncheckedCreateWithoutTransferEndpointInstructionInput>
  }

  export type StakeProgramSignatureUpdateWithoutTransferEndpointInstructionInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutTransferEndpointInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    ChangeBeneficiariesInstruction?: ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateWithoutChangeBeneficiariesInstructionInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedCreateWithoutChangeBeneficiariesInstructionInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
    claim?: ClaimUncheckedCreateNestedManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedCreateNestedManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedCreateNestedManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedCreateNestedManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedCreateNestedManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedCreateNestedManyWithoutSignatureInput
  }

  export type StakeProgramSignatureCreateOrConnectWithoutChangeBeneficiariesInstructionInput = {
    where: StakeProgramSignatureWhereUniqueInput
    create: XOR<StakeProgramSignatureCreateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedCreateWithoutChangeBeneficiariesInstructionInput>
  }

  export type StakeProgramSignatureUpsertWithoutChangeBeneficiariesInstructionInput = {
    update: XOR<StakeProgramSignatureUpdateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedUpdateWithoutChangeBeneficiariesInstructionInput>
    create: XOR<StakeProgramSignatureCreateWithoutChangeBeneficiariesInstructionInput, StakeProgramSignatureUncheckedCreateWithoutChangeBeneficiariesInstructionInput>
  }

  export type StakeProgramSignatureUpdateWithoutChangeBeneficiariesInstructionInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUpdateManyWithoutSignatureInput
  }

  export type StakeProgramSignatureUncheckedUpdateWithoutChangeBeneficiariesInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    claim?: ClaimUncheckedUpdateManyWithoutSignatureInput
    initInstructions?: InitInstructionUncheckedUpdateManyWithoutSignatureInput
    registerEndpointInstructions?: RegisterEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
    initStakeInstruction?: InitStakeInstructionUncheckedUpdateManyWithoutSignatureInput
    stakeInstructions?: StakeInstructionUncheckedUpdateManyWithoutSignatureInput
    withdrawUnboundInstructions?: WithdrawUnboundInstructionUncheckedUpdateManyWithoutSignatureInput
    claimInstructions?: ClaimInstructionUncheckedUpdateManyWithoutSignatureInput
    TransferEndpointInstruction?: TransferEndpointInstructionUncheckedUpdateManyWithoutSignatureInput
  }

  export type PostTransferBalanceCreateWithoutSignatureInput = {
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
  }

  export type PostTransferBalanceUncheckedCreateWithoutSignatureInput = {
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
  }

  export type PostTransferBalanceCreateOrConnectWithoutSignatureInput = {
    where: PostTransferBalanceWhereUniqueInput
    create: XOR<PostTransferBalanceCreateWithoutSignatureInput, PostTransferBalanceUncheckedCreateWithoutSignatureInput>
  }

  export type PostTransferBalanceCreateManySignatureInputEnvelope = {
    data: Enumerable<PostTransferBalanceCreateManySignatureInput>
    skipDuplicates?: boolean
  }

  export type PostTransferBalanceUpsertWithWhereUniqueWithoutSignatureInput = {
    where: PostTransferBalanceWhereUniqueInput
    update: XOR<PostTransferBalanceUpdateWithoutSignatureInput, PostTransferBalanceUncheckedUpdateWithoutSignatureInput>
    create: XOR<PostTransferBalanceCreateWithoutSignatureInput, PostTransferBalanceUncheckedCreateWithoutSignatureInput>
  }

  export type PostTransferBalanceUpdateWithWhereUniqueWithoutSignatureInput = {
    where: PostTransferBalanceWhereUniqueInput
    data: XOR<PostTransferBalanceUpdateWithoutSignatureInput, PostTransferBalanceUncheckedUpdateWithoutSignatureInput>
  }

  export type PostTransferBalanceUpdateManyWithWhereWithoutSignatureInput = {
    where: PostTransferBalanceScalarWhereInput
    data: XOR<PostTransferBalanceUpdateManyMutationInput, PostTransferBalanceUncheckedUpdateManyWithoutPostBalancesInput>
  }

  export type PostTransferBalanceScalarWhereInput = {
    AND?: Enumerable<PostTransferBalanceScalarWhereInput>
    OR?: Enumerable<PostTransferBalanceScalarWhereInput>
    NOT?: Enumerable<PostTransferBalanceScalarWhereInput>
    signatureId?: IntFilter | number
    account?: StringFilter | string
    amount?: BigIntFilter | bigint | number
    uiAmount?: FloatNullableFilter | number | null
    uiAmountString?: StringNullableFilter | string | null
  }

  export type ZeeSplSignatureCreateWithoutPostBalancesInput = {
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
  }

  export type ZeeSplSignatureUncheckedCreateWithoutPostBalancesInput = {
    id?: number
    signature: string
    blockTime: Date | string
    slot: bigint | number
    recentBlockHash?: string | null
    fee?: bigint | number | null
    processed?: boolean
  }

  export type ZeeSplSignatureCreateOrConnectWithoutPostBalancesInput = {
    where: ZeeSplSignatureWhereUniqueInput
    create: XOR<ZeeSplSignatureCreateWithoutPostBalancesInput, ZeeSplSignatureUncheckedCreateWithoutPostBalancesInput>
  }

  export type ZeeSplSignatureUpsertWithoutPostBalancesInput = {
    update: XOR<ZeeSplSignatureUpdateWithoutPostBalancesInput, ZeeSplSignatureUncheckedUpdateWithoutPostBalancesInput>
    create: XOR<ZeeSplSignatureCreateWithoutPostBalancesInput, ZeeSplSignatureUncheckedCreateWithoutPostBalancesInput>
  }

  export type ZeeSplSignatureUpdateWithoutPostBalancesInput = {
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ZeeSplSignatureUncheckedUpdateWithoutPostBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    blockTime?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: BigIntFieldUpdateOperationsInput | bigint | number
    recentBlockHash?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    processed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClaimCreateManySignatureInput = {
    id?: number
    amount: bigint | number
    authority: string
    source: string
    destination: string
    claimOrigin: ClaimOrigin
  }

  export type InitInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    settingsAccount: string
    poolAuthority: string
    rewardPool: string
    zeeTokenMint: string
    splTokenProgam: string
    startTime: Date | string
    unbondingDuration: number
  }

  export type RegisterEndpointInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    endpointAccount: string
    endpointOwnerPubkey: string
    primaryBeneficiaryAuthority: string
    primaryBeneficiaryAccount: string
    secondaryBeneficiaryAuthority: string
    secondaryBeneficiaryAccount: string
    authorityAddress: string
    authorityType: number
  }

  export type InitStakeInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    staker: string
    stakerFund: string
    stakerBeneficiary: string
    endpointAccount: string
    stakeAccount: string
  }

  export type StakeInstructionCreateManySignatureInput = {
    id?: number
    claimId: number
    stake: bigint | number
    payer: string
    staker: string
    stakerBeneficiary: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    endpointPrimaryBeneficiary: string
    endpointSecondaryBeneficiary: string
    poolAuthority: string
    settings: string
    stakeAccount: string
  }

  export type WithdrawUnboundInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    stakeAccount: string
    staker: string
    stakerFund: string
    stakerZeeTokenAccount: string
    endpoint: string
    settings: string
    poolAuthority: string
  }

  export type ClaimInstructionCreateManySignatureInput = {
    id?: number
    claimId: number
    payer: string
    beneficiaryAuthority: string
    beneficiaryAccount: string
    authorityZeeTokenAccount: string
    settings: string
    poolAuthority: string
  }

  export type TransferEndpointInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    recipient: string
    authorityAddress: string
    authorityType: number
  }

  export type ChangeBeneficiariesInstructionCreateManySignatureInput = {
    id?: number
    payer: string
    endpoint: string
    endpointOwnerAccount: string
    endpointOwnerSigner: string
    oldPrimaryBeneficiaryAccount: string
    oldSecondaryBeneficiaryAccount: string
    newPrimaryBeneficiaryAuthority: string
    newPrimaryBeneficiaryAccount: string
    newSecondaryBeneficiaryAuthority: string
    newSecondaryBeneficiaryAccount: string
    settings: string
  }

  export type ClaimUpdateWithoutSignatureInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    claimInstruction?: ClaimInstructionUpdateOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUpdateOneWithoutClaimInput
  }

  export type ClaimUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
    claimInstruction?: ClaimInstructionUncheckedUpdateOneWithoutClaimInput
    stakeInstruction?: StakeInstructionUncheckedUpdateOneWithoutClaimInput
  }

  export type ClaimUncheckedUpdateManyWithoutClaimInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    authority?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    claimOrigin?: EnumClaimOriginFieldUpdateOperationsInput | ClaimOrigin
  }

  export type InitInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type InitInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type InitInstructionUncheckedUpdateManyWithoutInitInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    settingsAccount?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    rewardPool?: StringFieldUpdateOperationsInput | string
    zeeTokenMint?: StringFieldUpdateOperationsInput | string
    splTokenProgam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    unbondingDuration?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type RegisterEndpointInstructionUncheckedUpdateManyWithoutRegisterEndpointInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerPubkey?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    primaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    secondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type InitStakeInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type InitStakeInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type InitStakeInstructionUncheckedUpdateManyWithoutInitStakeInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointAccount?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionUpdateWithoutSignatureInput = {
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    claim?: ClaimUpdateOneRequiredWithoutStakeInstructionInput
  }

  export type StakeInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type StakeInstructionUncheckedUpdateManyWithoutStakeInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    stake?: BigIntFieldUpdateOperationsInput | bigint | number
    payer?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerBeneficiary?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointPrimaryBeneficiary?: StringFieldUpdateOperationsInput | string
    endpointSecondaryBeneficiary?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type WithdrawUnboundInstructionUncheckedUpdateManyWithoutWithdrawUnboundInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    stakeAccount?: StringFieldUpdateOperationsInput | string
    staker?: StringFieldUpdateOperationsInput | string
    stakerFund?: StringFieldUpdateOperationsInput | string
    stakerZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
    claim?: ClaimUpdateOneRequiredWithoutClaimInstructionInput
  }

  export type ClaimInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type ClaimInstructionUncheckedUpdateManyWithoutClaimInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    claimId?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    beneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    beneficiaryAccount?: StringFieldUpdateOperationsInput | string
    authorityZeeTokenAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
    poolAuthority?: StringFieldUpdateOperationsInput | string
  }

  export type TransferEndpointInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type TransferEndpointInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type TransferEndpointInstructionUncheckedUpdateManyWithoutTransferEndpointInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    authorityAddress?: StringFieldUpdateOperationsInput | string
    authorityType?: IntFieldUpdateOperationsInput | number
  }

  export type ChangeBeneficiariesInstructionUpdateWithoutSignatureInput = {
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeBeneficiariesInstructionUncheckedUpdateWithoutSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeBeneficiariesInstructionUncheckedUpdateManyWithoutChangeBeneficiariesInstructionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payer?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointOwnerAccount?: StringFieldUpdateOperationsInput | string
    endpointOwnerSigner?: StringFieldUpdateOperationsInput | string
    oldPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    oldSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newPrimaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAuthority?: StringFieldUpdateOperationsInput | string
    newSecondaryBeneficiaryAccount?: StringFieldUpdateOperationsInput | string
    settings?: StringFieldUpdateOperationsInput | string
  }

  export type PostTransferBalanceCreateManySignatureInput = {
    account: string
    amount: bigint | number
    uiAmount?: number | null
    uiAmountString?: string | null
  }

  export type PostTransferBalanceUpdateWithoutSignatureInput = {
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostTransferBalanceUncheckedUpdateWithoutSignatureInput = {
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostTransferBalanceUncheckedUpdateManyWithoutPostBalancesInput = {
    account?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    uiAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    uiAmountString?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}