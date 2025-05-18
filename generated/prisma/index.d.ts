
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_logs
 * 
 */
export type audit_logs = $Result.DefaultSelection<Prisma.$audit_logsPayload>
/**
 * Model networks
 * 
 */
export type networks = $Result.DefaultSelection<Prisma.$networksPayload>
/**
 * Model token_networks
 * 
 */
export type token_networks = $Result.DefaultSelection<Prisma.$token_networksPayload>
/**
 * Model tokens
 * 
 */
export type tokens = $Result.DefaultSelection<Prisma.$tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model wallet_network_tokens
 * 
 */
export type wallet_network_tokens = $Result.DefaultSelection<Prisma.$wallet_network_tokensPayload>
/**
 * Model wallet_networks
 * 
 */
export type wallet_networks = $Result.DefaultSelection<Prisma.$wallet_networksPayload>
/**
 * Model wallets
 * 
 */
export type wallets = $Result.DefaultSelection<Prisma.$walletsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_logs
 * const audit_logs = await prisma.audit_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit_logs`: Exposes CRUD operations for the **audit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_logs.findMany()
    * ```
    */
  get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networks`: Exposes CRUD operations for the **networks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Networks
    * const networks = await prisma.networks.findMany()
    * ```
    */
  get networks(): Prisma.networksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token_networks`: Exposes CRUD operations for the **token_networks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Token_networks
    * const token_networks = await prisma.token_networks.findMany()
    * ```
    */
  get token_networks(): Prisma.token_networksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet_network_tokens`: Exposes CRUD operations for the **wallet_network_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallet_network_tokens
    * const wallet_network_tokens = await prisma.wallet_network_tokens.findMany()
    * ```
    */
  get wallet_network_tokens(): Prisma.wallet_network_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet_networks`: Exposes CRUD operations for the **wallet_networks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallet_networks
    * const wallet_networks = await prisma.wallet_networks.findMany()
    * ```
    */
  get wallet_networks(): Prisma.wallet_networksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.walletsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audit_logs: 'audit_logs',
    networks: 'networks',
    token_networks: 'token_networks',
    tokens: 'tokens',
    users: 'users',
    wallet_network_tokens: 'wallet_network_tokens',
    wallet_networks: 'wallet_networks',
    wallets: 'wallets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit_logs" | "networks" | "token_networks" | "tokens" | "users" | "wallet_network_tokens" | "wallet_networks" | "wallets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      audit_logs: {
        payload: Prisma.$audit_logsPayload<ExtArgs>
        fields: Prisma.audit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findFirst: {
            args: Prisma.audit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findMany: {
            args: Prisma.audit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          create: {
            args: Prisma.audit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          createMany: {
            args: Prisma.audit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          delete: {
            args: Prisma.audit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          update: {
            args: Prisma.audit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          deleteMany: {
            args: Prisma.audit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          upsert: {
            args: Prisma.audit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          aggregate: {
            args: Prisma.Audit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_logs>
          }
          groupBy: {
            args: Prisma.audit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsCountAggregateOutputType> | number
          }
        }
      }
      networks: {
        payload: Prisma.$networksPayload<ExtArgs>
        fields: Prisma.networksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.networksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.networksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          findFirst: {
            args: Prisma.networksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.networksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          findMany: {
            args: Prisma.networksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>[]
          }
          create: {
            args: Prisma.networksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          createMany: {
            args: Prisma.networksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.networksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>[]
          }
          delete: {
            args: Prisma.networksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          update: {
            args: Prisma.networksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          deleteMany: {
            args: Prisma.networksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.networksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.networksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>[]
          }
          upsert: {
            args: Prisma.networksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networksPayload>
          }
          aggregate: {
            args: Prisma.NetworksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworks>
          }
          groupBy: {
            args: Prisma.networksGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworksGroupByOutputType>[]
          }
          count: {
            args: Prisma.networksCountArgs<ExtArgs>
            result: $Utils.Optional<NetworksCountAggregateOutputType> | number
          }
        }
      }
      token_networks: {
        payload: Prisma.$token_networksPayload<ExtArgs>
        fields: Prisma.token_networksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.token_networksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.token_networksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          findFirst: {
            args: Prisma.token_networksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.token_networksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          findMany: {
            args: Prisma.token_networksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>[]
          }
          create: {
            args: Prisma.token_networksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          createMany: {
            args: Prisma.token_networksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.token_networksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>[]
          }
          delete: {
            args: Prisma.token_networksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          update: {
            args: Prisma.token_networksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          deleteMany: {
            args: Prisma.token_networksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.token_networksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.token_networksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>[]
          }
          upsert: {
            args: Prisma.token_networksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networksPayload>
          }
          aggregate: {
            args: Prisma.Token_networksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken_networks>
          }
          groupBy: {
            args: Prisma.token_networksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Token_networksGroupByOutputType>[]
          }
          count: {
            args: Prisma.token_networksCountArgs<ExtArgs>
            result: $Utils.Optional<Token_networksCountAggregateOutputType> | number
          }
        }
      }
      tokens: {
        payload: Prisma.$tokensPayload<ExtArgs>
        fields: Prisma.tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findFirst: {
            args: Prisma.tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findMany: {
            args: Prisma.tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          create: {
            args: Prisma.tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          createMany: {
            args: Prisma.tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          delete: {
            args: Prisma.tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          update: {
            args: Prisma.tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          deleteMany: {
            args: Prisma.tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          upsert: {
            args: Prisma.tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wallet_network_tokens: {
        payload: Prisma.$wallet_network_tokensPayload<ExtArgs>
        fields: Prisma.wallet_network_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wallet_network_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wallet_network_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          findFirst: {
            args: Prisma.wallet_network_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wallet_network_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          findMany: {
            args: Prisma.wallet_network_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>[]
          }
          create: {
            args: Prisma.wallet_network_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          createMany: {
            args: Prisma.wallet_network_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wallet_network_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>[]
          }
          delete: {
            args: Prisma.wallet_network_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          update: {
            args: Prisma.wallet_network_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          deleteMany: {
            args: Prisma.wallet_network_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wallet_network_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wallet_network_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>[]
          }
          upsert: {
            args: Prisma.wallet_network_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_network_tokensPayload>
          }
          aggregate: {
            args: Prisma.Wallet_network_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet_network_tokens>
          }
          groupBy: {
            args: Prisma.wallet_network_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Wallet_network_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.wallet_network_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Wallet_network_tokensCountAggregateOutputType> | number
          }
        }
      }
      wallet_networks: {
        payload: Prisma.$wallet_networksPayload<ExtArgs>
        fields: Prisma.wallet_networksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wallet_networksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wallet_networksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          findFirst: {
            args: Prisma.wallet_networksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wallet_networksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          findMany: {
            args: Prisma.wallet_networksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>[]
          }
          create: {
            args: Prisma.wallet_networksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          createMany: {
            args: Prisma.wallet_networksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wallet_networksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>[]
          }
          delete: {
            args: Prisma.wallet_networksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          update: {
            args: Prisma.wallet_networksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          deleteMany: {
            args: Prisma.wallet_networksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wallet_networksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wallet_networksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>[]
          }
          upsert: {
            args: Prisma.wallet_networksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wallet_networksPayload>
          }
          aggregate: {
            args: Prisma.Wallet_networksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet_networks>
          }
          groupBy: {
            args: Prisma.wallet_networksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Wallet_networksGroupByOutputType>[]
          }
          count: {
            args: Prisma.wallet_networksCountArgs<ExtArgs>
            result: $Utils.Optional<Wallet_networksCountAggregateOutputType> | number
          }
        }
      }
      wallets: {
        payload: Prisma.$walletsPayload<ExtArgs>
        fields: Prisma.walletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findFirst: {
            args: Prisma.walletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          findMany: {
            args: Prisma.walletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          create: {
            args: Prisma.walletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          createMany: {
            args: Prisma.walletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          delete: {
            args: Prisma.walletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          update: {
            args: Prisma.walletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          deleteMany: {
            args: Prisma.walletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>[]
          }
          upsert: {
            args: Prisma.walletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.walletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    audit_logs?: audit_logsOmit
    networks?: networksOmit
    token_networks?: token_networksOmit
    tokens?: tokensOmit
    users?: usersOmit
    wallet_network_tokens?: wallet_network_tokensOmit
    wallet_networks?: wallet_networksOmit
    wallets?: walletsOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NetworksCountOutputType
   */

  export type NetworksCountOutputType = {
    token_networks: number
    wallet_networks: number
  }

  export type NetworksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | NetworksCountOutputTypeCountToken_networksArgs
    wallet_networks?: boolean | NetworksCountOutputTypeCountWallet_networksArgs
  }

  // Custom InputTypes
  /**
   * NetworksCountOutputType without action
   */
  export type NetworksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworksCountOutputType
     */
    select?: NetworksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NetworksCountOutputType without action
   */
  export type NetworksCountOutputTypeCountToken_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networksWhereInput
  }

  /**
   * NetworksCountOutputType without action
   */
  export type NetworksCountOutputTypeCountWallet_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_networksWhereInput
  }


  /**
   * Count Type Token_networksCountOutputType
   */

  export type Token_networksCountOutputType = {
    wallet_network_tokens: number
  }

  export type Token_networksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet_network_tokens?: boolean | Token_networksCountOutputTypeCountWallet_network_tokensArgs
  }

  // Custom InputTypes
  /**
   * Token_networksCountOutputType without action
   */
  export type Token_networksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token_networksCountOutputType
     */
    select?: Token_networksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Token_networksCountOutputType without action
   */
  export type Token_networksCountOutputTypeCountWallet_network_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_network_tokensWhereInput
  }


  /**
   * Count Type TokensCountOutputType
   */

  export type TokensCountOutputType = {
    token_networks: number
  }

  export type TokensCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | TokensCountOutputTypeCountToken_networksArgs
  }

  // Custom InputTypes
  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokensCountOutputType
     */
    select?: TokensCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokensCountOutputType without action
   */
  export type TokensCountOutputTypeCountToken_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networksWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    audit_logs: number
    networks: number
    wallets: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | UsersCountOutputTypeCountAudit_logsArgs
    networks?: boolean | UsersCountOutputTypeCountNetworksArgs
    wallets?: boolean | UsersCountOutputTypeCountWalletsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNetworksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: networksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
  }


  /**
   * Count Type WalletsCountOutputType
   */

  export type WalletsCountOutputType = {
    wallet_network_tokens: number
    wallet_networks: number
  }

  export type WalletsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet_network_tokens?: boolean | WalletsCountOutputTypeCountWallet_network_tokensArgs
    wallet_networks?: boolean | WalletsCountOutputTypeCountWallet_networksArgs
  }

  // Custom InputTypes
  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletsCountOutputType
     */
    select?: WalletsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeCountWallet_network_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_network_tokensWhereInput
  }

  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeCountWallet_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_networksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model audit_logs
   */

  export type AggregateAudit_logs = {
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  export type Audit_logsMinAggregateOutputType = {
    log_id: string | null
    user_id: string | null
    action: string | null
    target_table: string | null
    target_id: string | null
    created_at: Date | null
  }

  export type Audit_logsMaxAggregateOutputType = {
    log_id: string | null
    user_id: string | null
    action: string | null
    target_table: string | null
    target_id: string | null
    created_at: Date | null
  }

  export type Audit_logsCountAggregateOutputType = {
    log_id: number
    user_id: number
    action: number
    target_table: number
    target_id: number
    created_at: number
    _all: number
  }


  export type Audit_logsMinAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    target_table?: true
    target_id?: true
    created_at?: true
  }

  export type Audit_logsMaxAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    target_table?: true
    target_id?: true
    created_at?: true
  }

  export type Audit_logsCountAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    target_table?: true
    target_id?: true
    created_at?: true
    _all?: true
  }

  export type Audit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to aggregate.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logsMaxAggregateInputType
  }

  export type GetAudit_logsAggregateType<T extends Audit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_logs[P]>
      : GetScalarType<T[P], AggregateAudit_logs[P]>
  }




  export type audit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithAggregationInput | audit_logsOrderByWithAggregationInput[]
    by: Audit_logsScalarFieldEnum[] | Audit_logsScalarFieldEnum
    having?: audit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logsCountAggregateInputType | true
    _min?: Audit_logsMinAggregateInputType
    _max?: Audit_logsMaxAggregateInputType
  }

  export type Audit_logsGroupByOutputType = {
    log_id: string
    user_id: string | null
    action: string
    target_table: string | null
    target_id: string | null
    created_at: Date | null
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  type GetAudit_logsGroupByPayload<T extends audit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
        }
      >
    >


  export type audit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    target_table?: boolean
    target_id?: boolean
    created_at?: boolean
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    target_table?: boolean
    target_id?: boolean
    created_at?: boolean
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    target_table?: boolean
    target_id?: boolean
    created_at?: boolean
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectScalar = {
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    target_table?: boolean
    target_id?: boolean
    created_at?: boolean
  }

  export type audit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "user_id" | "action" | "target_table" | "target_id" | "created_at", ExtArgs["result"]["audit_logs"]>
  export type audit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }
  export type audit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }
  export type audit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | audit_logs$usersArgs<ExtArgs>
  }

  export type $audit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: string
      user_id: string | null
      action: string
      target_table: string | null
      target_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["audit_logs"]>
    composites: {}
  }

  type audit_logsGetPayload<S extends boolean | null | undefined | audit_logsDefaultArgs> = $Result.GetResult<Prisma.$audit_logsPayload, S>

  type audit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logsCountAggregateInputType | true
    }

  export interface audit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_logs'], meta: { name: 'audit_logs' } }
    /**
     * Find zero or one Audit_logs that matches the filter.
     * @param {audit_logsFindUniqueArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logsFindUniqueArgs>(args: SelectSubset<T, audit_logsFindUniqueArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logsFindUniqueOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logsFindFirstArgs>(args?: SelectSubset<T, audit_logsFindFirstArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const audit_logsWithLog_idOnly = await prisma.audit_logs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends audit_logsFindManyArgs>(args?: SelectSubset<T, audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_logs.
     * @param {audit_logsCreateArgs} args - Arguments to create a Audit_logs.
     * @example
     * // Create one Audit_logs
     * const Audit_logs = await prisma.audit_logs.create({
     *   data: {
     *     // ... data to create a Audit_logs
     *   }
     * })
     * 
     */
    create<T extends audit_logsCreateArgs>(args: SelectSubset<T, audit_logsCreateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logsCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logsCreateManyArgs>(args?: SelectSubset<T, audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logsCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `log_id`
     * const audit_logsWithLog_idOnly = await prisma.audit_logs.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_logs.
     * @param {audit_logsDeleteArgs} args - Arguments to delete one Audit_logs.
     * @example
     * // Delete one Audit_logs
     * const Audit_logs = await prisma.audit_logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_logs
     *   }
     * })
     * 
     */
    delete<T extends audit_logsDeleteArgs>(args: SelectSubset<T, audit_logsDeleteArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_logs.
     * @param {audit_logsUpdateArgs} args - Arguments to update one Audit_logs.
     * @example
     * // Update one Audit_logs
     * const audit_logs = await prisma.audit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logsUpdateArgs>(args: SelectSubset<T, audit_logsUpdateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logsDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logsDeleteManyArgs>(args?: SelectSubset<T, audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logsUpdateManyArgs>(args: SelectSubset<T, audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logsUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `log_id`
     * const audit_logsWithLog_idOnly = await prisma.audit_logs.updateManyAndReturn({
     *   select: { log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_logs.
     * @param {audit_logsUpsertArgs} args - Arguments to update or create a Audit_logs.
     * @example
     * // Update or create a Audit_logs
     * const audit_logs = await prisma.audit_logs.upsert({
     *   create: {
     *     // ... data to create a Audit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_logs we want to update
     *   }
     * })
     */
    upsert<T extends audit_logsUpsertArgs>(args: SelectSubset<T, audit_logsUpsertArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_logs.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logsCountArgs>(
      args?: Subset<T, audit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_logsAggregateArgs>(args: Subset<T, Audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_logsAggregateType<T>>

    /**
     * Group by Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsGroupByArgs} args - Group by arguments.
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
      T extends audit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logsGroupByArgs['orderBy'] }
        : { orderBy?: audit_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_logs model
   */
  readonly fields: audit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends audit_logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, audit_logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_logs model
   */
  interface audit_logsFieldRefs {
    readonly log_id: FieldRef<"audit_logs", 'String'>
    readonly user_id: FieldRef<"audit_logs", 'String'>
    readonly action: FieldRef<"audit_logs", 'String'>
    readonly target_table: FieldRef<"audit_logs", 'String'>
    readonly target_id: FieldRef<"audit_logs", 'String'>
    readonly created_at: FieldRef<"audit_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_logs findUnique
   */
  export type audit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findUniqueOrThrow
   */
  export type audit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findFirst
   */
  export type audit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findFirstOrThrow
   */
  export type audit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findMany
   */
  export type audit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs create
   */
  export type audit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_logs.
     */
    data: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
  }

  /**
   * audit_logs createMany
   */
  export type audit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_logs createManyAndReturn
   */
  export type audit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs update
   */
  export type audit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_logs.
     */
    data: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
    /**
     * Choose, which audit_logs to update.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs updateMany
   */
  export type audit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_logs updateManyAndReturn
   */
  export type audit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs upsert
   */
  export type audit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_logs to update in case it exists.
     */
    where: audit_logsWhereUniqueInput
    /**
     * In case the audit_logs found by the `where` argument doesn't exist, create a new audit_logs with this data.
     */
    create: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
    /**
     * In case the audit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
  }

  /**
   * audit_logs delete
   */
  export type audit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter which audit_logs to delete.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs deleteMany
   */
  export type audit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_logs.users
   */
  export type audit_logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * audit_logs without action
   */
  export type audit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
  }


  /**
   * Model networks
   */

  export type AggregateNetworks = {
    _count: NetworksCountAggregateOutputType | null
    _min: NetworksMinAggregateOutputType | null
    _max: NetworksMaxAggregateOutputType | null
  }

  export type NetworksMinAggregateOutputType = {
    network_id: string | null
    network_name: string | null
    symbol: string | null
    thumbnail: string | null
    chain_id: string | null
    block_explorer_url: string | null
    price_feed_id: string | null
    is_default_network: boolean | null
    is_testnet: boolean | null
    rpc_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    creator_id: string | null
    isEVM: boolean | null
  }

  export type NetworksMaxAggregateOutputType = {
    network_id: string | null
    network_name: string | null
    symbol: string | null
    thumbnail: string | null
    chain_id: string | null
    block_explorer_url: string | null
    price_feed_id: string | null
    is_default_network: boolean | null
    is_testnet: boolean | null
    rpc_url: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    creator_id: string | null
    isEVM: boolean | null
  }

  export type NetworksCountAggregateOutputType = {
    network_id: number
    network_name: number
    symbol: number
    thumbnail: number
    chain_id: number
    block_explorer_url: number
    price_feed_id: number
    is_default_network: number
    is_testnet: number
    rpc_url: number
    created_at: number
    updated_at: number
    deleted_at: number
    creator_id: number
    isEVM: number
    _all: number
  }


  export type NetworksMinAggregateInputType = {
    network_id?: true
    network_name?: true
    symbol?: true
    thumbnail?: true
    chain_id?: true
    block_explorer_url?: true
    price_feed_id?: true
    is_default_network?: true
    is_testnet?: true
    rpc_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    creator_id?: true
    isEVM?: true
  }

  export type NetworksMaxAggregateInputType = {
    network_id?: true
    network_name?: true
    symbol?: true
    thumbnail?: true
    chain_id?: true
    block_explorer_url?: true
    price_feed_id?: true
    is_default_network?: true
    is_testnet?: true
    rpc_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    creator_id?: true
    isEVM?: true
  }

  export type NetworksCountAggregateInputType = {
    network_id?: true
    network_name?: true
    symbol?: true
    thumbnail?: true
    chain_id?: true
    block_explorer_url?: true
    price_feed_id?: true
    is_default_network?: true
    is_testnet?: true
    rpc_url?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    creator_id?: true
    isEVM?: true
    _all?: true
  }

  export type NetworksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networks to aggregate.
     */
    where?: networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networksOrderByWithRelationInput | networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned networks
    **/
    _count?: true | NetworksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworksMaxAggregateInputType
  }

  export type GetNetworksAggregateType<T extends NetworksAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworks[P]>
      : GetScalarType<T[P], AggregateNetworks[P]>
  }




  export type networksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: networksWhereInput
    orderBy?: networksOrderByWithAggregationInput | networksOrderByWithAggregationInput[]
    by: NetworksScalarFieldEnum[] | NetworksScalarFieldEnum
    having?: networksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworksCountAggregateInputType | true
    _min?: NetworksMinAggregateInputType
    _max?: NetworksMaxAggregateInputType
  }

  export type NetworksGroupByOutputType = {
    network_id: string
    network_name: string
    symbol: string
    thumbnail: string | null
    chain_id: string
    block_explorer_url: string | null
    price_feed_id: string | null
    is_default_network: boolean
    is_testnet: boolean
    rpc_url: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    creator_id: string | null
    isEVM: boolean
    _count: NetworksCountAggregateOutputType | null
    _min: NetworksMinAggregateOutputType | null
    _max: NetworksMaxAggregateOutputType | null
  }

  type GetNetworksGroupByPayload<T extends networksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworksGroupByOutputType[P]>
            : GetScalarType<T[P], NetworksGroupByOutputType[P]>
        }
      >
    >


  export type networksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    network_id?: boolean
    network_name?: boolean
    symbol?: boolean
    thumbnail?: boolean
    chain_id?: boolean
    block_explorer_url?: boolean
    price_feed_id?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    creator_id?: boolean
    isEVM?: boolean
    users?: boolean | networks$usersArgs<ExtArgs>
    token_networks?: boolean | networks$token_networksArgs<ExtArgs>
    wallet_networks?: boolean | networks$wallet_networksArgs<ExtArgs>
    _count?: boolean | NetworksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networks"]>

  export type networksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    network_id?: boolean
    network_name?: boolean
    symbol?: boolean
    thumbnail?: boolean
    chain_id?: boolean
    block_explorer_url?: boolean
    price_feed_id?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    creator_id?: boolean
    isEVM?: boolean
    users?: boolean | networks$usersArgs<ExtArgs>
  }, ExtArgs["result"]["networks"]>

  export type networksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    network_id?: boolean
    network_name?: boolean
    symbol?: boolean
    thumbnail?: boolean
    chain_id?: boolean
    block_explorer_url?: boolean
    price_feed_id?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    creator_id?: boolean
    isEVM?: boolean
    users?: boolean | networks$usersArgs<ExtArgs>
  }, ExtArgs["result"]["networks"]>

  export type networksSelectScalar = {
    network_id?: boolean
    network_name?: boolean
    symbol?: boolean
    thumbnail?: boolean
    chain_id?: boolean
    block_explorer_url?: boolean
    price_feed_id?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    creator_id?: boolean
    isEVM?: boolean
  }

  export type networksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"network_id" | "network_name" | "symbol" | "thumbnail" | "chain_id" | "block_explorer_url" | "price_feed_id" | "is_default_network" | "is_testnet" | "rpc_url" | "created_at" | "updated_at" | "deleted_at" | "creator_id" | "isEVM", ExtArgs["result"]["networks"]>
  export type networksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | networks$usersArgs<ExtArgs>
    token_networks?: boolean | networks$token_networksArgs<ExtArgs>
    wallet_networks?: boolean | networks$wallet_networksArgs<ExtArgs>
    _count?: boolean | NetworksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type networksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | networks$usersArgs<ExtArgs>
  }
  export type networksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | networks$usersArgs<ExtArgs>
  }

  export type $networksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "networks"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      token_networks: Prisma.$token_networksPayload<ExtArgs>[]
      wallet_networks: Prisma.$wallet_networksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      network_id: string
      network_name: string
      symbol: string
      thumbnail: string | null
      chain_id: string
      block_explorer_url: string | null
      price_feed_id: string | null
      is_default_network: boolean
      is_testnet: boolean
      rpc_url: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      creator_id: string | null
      isEVM: boolean
    }, ExtArgs["result"]["networks"]>
    composites: {}
  }

  type networksGetPayload<S extends boolean | null | undefined | networksDefaultArgs> = $Result.GetResult<Prisma.$networksPayload, S>

  type networksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<networksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworksCountAggregateInputType | true
    }

  export interface networksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['networks'], meta: { name: 'networks' } }
    /**
     * Find zero or one Networks that matches the filter.
     * @param {networksFindUniqueArgs} args - Arguments to find a Networks
     * @example
     * // Get one Networks
     * const networks = await prisma.networks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends networksFindUniqueArgs>(args: SelectSubset<T, networksFindUniqueArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Networks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {networksFindUniqueOrThrowArgs} args - Arguments to find a Networks
     * @example
     * // Get one Networks
     * const networks = await prisma.networks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends networksFindUniqueOrThrowArgs>(args: SelectSubset<T, networksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksFindFirstArgs} args - Arguments to find a Networks
     * @example
     * // Get one Networks
     * const networks = await prisma.networks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends networksFindFirstArgs>(args?: SelectSubset<T, networksFindFirstArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Networks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksFindFirstOrThrowArgs} args - Arguments to find a Networks
     * @example
     * // Get one Networks
     * const networks = await prisma.networks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends networksFindFirstOrThrowArgs>(args?: SelectSubset<T, networksFindFirstOrThrowArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Networks
     * const networks = await prisma.networks.findMany()
     * 
     * // Get first 10 Networks
     * const networks = await prisma.networks.findMany({ take: 10 })
     * 
     * // Only select the `network_id`
     * const networksWithNetwork_idOnly = await prisma.networks.findMany({ select: { network_id: true } })
     * 
     */
    findMany<T extends networksFindManyArgs>(args?: SelectSubset<T, networksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Networks.
     * @param {networksCreateArgs} args - Arguments to create a Networks.
     * @example
     * // Create one Networks
     * const Networks = await prisma.networks.create({
     *   data: {
     *     // ... data to create a Networks
     *   }
     * })
     * 
     */
    create<T extends networksCreateArgs>(args: SelectSubset<T, networksCreateArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Networks.
     * @param {networksCreateManyArgs} args - Arguments to create many Networks.
     * @example
     * // Create many Networks
     * const networks = await prisma.networks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends networksCreateManyArgs>(args?: SelectSubset<T, networksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Networks and returns the data saved in the database.
     * @param {networksCreateManyAndReturnArgs} args - Arguments to create many Networks.
     * @example
     * // Create many Networks
     * const networks = await prisma.networks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Networks and only return the `network_id`
     * const networksWithNetwork_idOnly = await prisma.networks.createManyAndReturn({
     *   select: { network_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends networksCreateManyAndReturnArgs>(args?: SelectSubset<T, networksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Networks.
     * @param {networksDeleteArgs} args - Arguments to delete one Networks.
     * @example
     * // Delete one Networks
     * const Networks = await prisma.networks.delete({
     *   where: {
     *     // ... filter to delete one Networks
     *   }
     * })
     * 
     */
    delete<T extends networksDeleteArgs>(args: SelectSubset<T, networksDeleteArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Networks.
     * @param {networksUpdateArgs} args - Arguments to update one Networks.
     * @example
     * // Update one Networks
     * const networks = await prisma.networks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends networksUpdateArgs>(args: SelectSubset<T, networksUpdateArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Networks.
     * @param {networksDeleteManyArgs} args - Arguments to filter Networks to delete.
     * @example
     * // Delete a few Networks
     * const { count } = await prisma.networks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends networksDeleteManyArgs>(args?: SelectSubset<T, networksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Networks
     * const networks = await prisma.networks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends networksUpdateManyArgs>(args: SelectSubset<T, networksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Networks and returns the data updated in the database.
     * @param {networksUpdateManyAndReturnArgs} args - Arguments to update many Networks.
     * @example
     * // Update many Networks
     * const networks = await prisma.networks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Networks and only return the `network_id`
     * const networksWithNetwork_idOnly = await prisma.networks.updateManyAndReturn({
     *   select: { network_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends networksUpdateManyAndReturnArgs>(args: SelectSubset<T, networksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Networks.
     * @param {networksUpsertArgs} args - Arguments to update or create a Networks.
     * @example
     * // Update or create a Networks
     * const networks = await prisma.networks.upsert({
     *   create: {
     *     // ... data to create a Networks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Networks we want to update
     *   }
     * })
     */
    upsert<T extends networksUpsertArgs>(args: SelectSubset<T, networksUpsertArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksCountArgs} args - Arguments to filter Networks to count.
     * @example
     * // Count the number of Networks
     * const count = await prisma.networks.count({
     *   where: {
     *     // ... the filter for the Networks we want to count
     *   }
     * })
    **/
    count<T extends networksCountArgs>(
      args?: Subset<T, networksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworksAggregateArgs>(args: Subset<T, NetworksAggregateArgs>): Prisma.PrismaPromise<GetNetworksAggregateType<T>>

    /**
     * Group by Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networksGroupByArgs} args - Group by arguments.
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
      T extends networksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: networksGroupByArgs['orderBy'] }
        : { orderBy?: networksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, networksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the networks model
   */
  readonly fields: networksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for networks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__networksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends networks$usersArgs<ExtArgs> = {}>(args?: Subset<T, networks$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token_networks<T extends networks$token_networksArgs<ExtArgs> = {}>(args?: Subset<T, networks$token_networksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallet_networks<T extends networks$wallet_networksArgs<ExtArgs> = {}>(args?: Subset<T, networks$wallet_networksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the networks model
   */
  interface networksFieldRefs {
    readonly network_id: FieldRef<"networks", 'String'>
    readonly network_name: FieldRef<"networks", 'String'>
    readonly symbol: FieldRef<"networks", 'String'>
    readonly thumbnail: FieldRef<"networks", 'String'>
    readonly chain_id: FieldRef<"networks", 'String'>
    readonly block_explorer_url: FieldRef<"networks", 'String'>
    readonly price_feed_id: FieldRef<"networks", 'String'>
    readonly is_default_network: FieldRef<"networks", 'Boolean'>
    readonly is_testnet: FieldRef<"networks", 'Boolean'>
    readonly rpc_url: FieldRef<"networks", 'String'>
    readonly created_at: FieldRef<"networks", 'DateTime'>
    readonly updated_at: FieldRef<"networks", 'DateTime'>
    readonly deleted_at: FieldRef<"networks", 'DateTime'>
    readonly creator_id: FieldRef<"networks", 'String'>
    readonly isEVM: FieldRef<"networks", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * networks findUnique
   */
  export type networksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where: networksWhereUniqueInput
  }

  /**
   * networks findUniqueOrThrow
   */
  export type networksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where: networksWhereUniqueInput
  }

  /**
   * networks findFirst
   */
  export type networksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where?: networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networksOrderByWithRelationInput | networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networks.
     */
    distinct?: NetworksScalarFieldEnum | NetworksScalarFieldEnum[]
  }

  /**
   * networks findFirstOrThrow
   */
  export type networksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where?: networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networksOrderByWithRelationInput | networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of networks.
     */
    distinct?: NetworksScalarFieldEnum | NetworksScalarFieldEnum[]
  }

  /**
   * networks findMany
   */
  export type networksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where?: networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networksOrderByWithRelationInput | networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing networks.
     */
    cursor?: networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` networks.
     */
    skip?: number
    distinct?: NetworksScalarFieldEnum | NetworksScalarFieldEnum[]
  }

  /**
   * networks create
   */
  export type networksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * The data needed to create a networks.
     */
    data: XOR<networksCreateInput, networksUncheckedCreateInput>
  }

  /**
   * networks createMany
   */
  export type networksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many networks.
     */
    data: networksCreateManyInput | networksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * networks createManyAndReturn
   */
  export type networksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * The data used to create many networks.
     */
    data: networksCreateManyInput | networksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * networks update
   */
  export type networksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * The data needed to update a networks.
     */
    data: XOR<networksUpdateInput, networksUncheckedUpdateInput>
    /**
     * Choose, which networks to update.
     */
    where: networksWhereUniqueInput
  }

  /**
   * networks updateMany
   */
  export type networksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update networks.
     */
    data: XOR<networksUpdateManyMutationInput, networksUncheckedUpdateManyInput>
    /**
     * Filter which networks to update
     */
    where?: networksWhereInput
    /**
     * Limit how many networks to update.
     */
    limit?: number
  }

  /**
   * networks updateManyAndReturn
   */
  export type networksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * The data used to update networks.
     */
    data: XOR<networksUpdateManyMutationInput, networksUncheckedUpdateManyInput>
    /**
     * Filter which networks to update
     */
    where?: networksWhereInput
    /**
     * Limit how many networks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * networks upsert
   */
  export type networksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * The filter to search for the networks to update in case it exists.
     */
    where: networksWhereUniqueInput
    /**
     * In case the networks found by the `where` argument doesn't exist, create a new networks with this data.
     */
    create: XOR<networksCreateInput, networksUncheckedCreateInput>
    /**
     * In case the networks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<networksUpdateInput, networksUncheckedUpdateInput>
  }

  /**
   * networks delete
   */
  export type networksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    /**
     * Filter which networks to delete.
     */
    where: networksWhereUniqueInput
  }

  /**
   * networks deleteMany
   */
  export type networksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networks to delete
     */
    where?: networksWhereInput
    /**
     * Limit how many networks to delete.
     */
    limit?: number
  }

  /**
   * networks.users
   */
  export type networks$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * networks.token_networks
   */
  export type networks$token_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    where?: token_networksWhereInput
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    cursor?: token_networksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Token_networksScalarFieldEnum | Token_networksScalarFieldEnum[]
  }

  /**
   * networks.wallet_networks
   */
  export type networks$wallet_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    where?: wallet_networksWhereInput
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    cursor?: wallet_networksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wallet_networksScalarFieldEnum | Wallet_networksScalarFieldEnum[]
  }

  /**
   * networks without action
   */
  export type networksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
  }


  /**
   * Model token_networks
   */

  export type AggregateToken_networks = {
    _count: Token_networksCountAggregateOutputType | null
    _min: Token_networksMinAggregateOutputType | null
    _max: Token_networksMaxAggregateOutputType | null
  }

  export type Token_networksMinAggregateOutputType = {
    token_network_id: string | null
    token_id: string | null
    network_id: string | null
    contract_address: string | null
  }

  export type Token_networksMaxAggregateOutputType = {
    token_network_id: string | null
    token_id: string | null
    network_id: string | null
    contract_address: string | null
  }

  export type Token_networksCountAggregateOutputType = {
    token_network_id: number
    token_id: number
    network_id: number
    contract_address: number
    _all: number
  }


  export type Token_networksMinAggregateInputType = {
    token_network_id?: true
    token_id?: true
    network_id?: true
    contract_address?: true
  }

  export type Token_networksMaxAggregateInputType = {
    token_network_id?: true
    token_id?: true
    network_id?: true
    contract_address?: true
  }

  export type Token_networksCountAggregateInputType = {
    token_network_id?: true
    token_id?: true
    network_id?: true
    contract_address?: true
    _all?: true
  }

  export type Token_networksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_networks to aggregate.
     */
    where?: token_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: token_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned token_networks
    **/
    _count?: true | Token_networksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Token_networksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Token_networksMaxAggregateInputType
  }

  export type GetToken_networksAggregateType<T extends Token_networksAggregateArgs> = {
        [P in keyof T & keyof AggregateToken_networks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken_networks[P]>
      : GetScalarType<T[P], AggregateToken_networks[P]>
  }




  export type token_networksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networksWhereInput
    orderBy?: token_networksOrderByWithAggregationInput | token_networksOrderByWithAggregationInput[]
    by: Token_networksScalarFieldEnum[] | Token_networksScalarFieldEnum
    having?: token_networksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Token_networksCountAggregateInputType | true
    _min?: Token_networksMinAggregateInputType
    _max?: Token_networksMaxAggregateInputType
  }

  export type Token_networksGroupByOutputType = {
    token_network_id: string
    token_id: string | null
    network_id: string | null
    contract_address: string
    _count: Token_networksCountAggregateOutputType | null
    _min: Token_networksMinAggregateOutputType | null
    _max: Token_networksMaxAggregateOutputType | null
  }

  type GetToken_networksGroupByPayload<T extends token_networksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Token_networksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Token_networksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Token_networksGroupByOutputType[P]>
            : GetScalarType<T[P], Token_networksGroupByOutputType[P]>
        }
      >
    >


  export type token_networksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    token_id?: boolean
    network_id?: boolean
    contract_address?: boolean
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
    wallet_network_tokens?: boolean | token_networks$wallet_network_tokensArgs<ExtArgs>
    _count?: boolean | Token_networksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token_networks"]>

  export type token_networksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    token_id?: boolean
    network_id?: boolean
    contract_address?: boolean
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
  }, ExtArgs["result"]["token_networks"]>

  export type token_networksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    token_id?: boolean
    network_id?: boolean
    contract_address?: boolean
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
  }, ExtArgs["result"]["token_networks"]>

  export type token_networksSelectScalar = {
    token_network_id?: boolean
    token_id?: boolean
    network_id?: boolean
    contract_address?: boolean
  }

  export type token_networksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_network_id" | "token_id" | "network_id" | "contract_address", ExtArgs["result"]["token_networks"]>
  export type token_networksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
    wallet_network_tokens?: boolean | token_networks$wallet_network_tokensArgs<ExtArgs>
    _count?: boolean | Token_networksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type token_networksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
  }
  export type token_networksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | token_networks$networksArgs<ExtArgs>
    tokens?: boolean | token_networks$tokensArgs<ExtArgs>
  }

  export type $token_networksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token_networks"
    objects: {
      networks: Prisma.$networksPayload<ExtArgs> | null
      tokens: Prisma.$tokensPayload<ExtArgs> | null
      wallet_network_tokens: Prisma.$wallet_network_tokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      token_network_id: string
      token_id: string | null
      network_id: string | null
      contract_address: string
    }, ExtArgs["result"]["token_networks"]>
    composites: {}
  }

  type token_networksGetPayload<S extends boolean | null | undefined | token_networksDefaultArgs> = $Result.GetResult<Prisma.$token_networksPayload, S>

  type token_networksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<token_networksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Token_networksCountAggregateInputType | true
    }

  export interface token_networksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token_networks'], meta: { name: 'token_networks' } }
    /**
     * Find zero or one Token_networks that matches the filter.
     * @param {token_networksFindUniqueArgs} args - Arguments to find a Token_networks
     * @example
     * // Get one Token_networks
     * const token_networks = await prisma.token_networks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends token_networksFindUniqueArgs>(args: SelectSubset<T, token_networksFindUniqueArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token_networks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {token_networksFindUniqueOrThrowArgs} args - Arguments to find a Token_networks
     * @example
     * // Get one Token_networks
     * const token_networks = await prisma.token_networks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends token_networksFindUniqueOrThrowArgs>(args: SelectSubset<T, token_networksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksFindFirstArgs} args - Arguments to find a Token_networks
     * @example
     * // Get one Token_networks
     * const token_networks = await prisma.token_networks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends token_networksFindFirstArgs>(args?: SelectSubset<T, token_networksFindFirstArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_networks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksFindFirstOrThrowArgs} args - Arguments to find a Token_networks
     * @example
     * // Get one Token_networks
     * const token_networks = await prisma.token_networks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends token_networksFindFirstOrThrowArgs>(args?: SelectSubset<T, token_networksFindFirstOrThrowArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Token_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Token_networks
     * const token_networks = await prisma.token_networks.findMany()
     * 
     * // Get first 10 Token_networks
     * const token_networks = await prisma.token_networks.findMany({ take: 10 })
     * 
     * // Only select the `token_network_id`
     * const token_networksWithToken_network_idOnly = await prisma.token_networks.findMany({ select: { token_network_id: true } })
     * 
     */
    findMany<T extends token_networksFindManyArgs>(args?: SelectSubset<T, token_networksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token_networks.
     * @param {token_networksCreateArgs} args - Arguments to create a Token_networks.
     * @example
     * // Create one Token_networks
     * const Token_networks = await prisma.token_networks.create({
     *   data: {
     *     // ... data to create a Token_networks
     *   }
     * })
     * 
     */
    create<T extends token_networksCreateArgs>(args: SelectSubset<T, token_networksCreateArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Token_networks.
     * @param {token_networksCreateManyArgs} args - Arguments to create many Token_networks.
     * @example
     * // Create many Token_networks
     * const token_networks = await prisma.token_networks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends token_networksCreateManyArgs>(args?: SelectSubset<T, token_networksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Token_networks and returns the data saved in the database.
     * @param {token_networksCreateManyAndReturnArgs} args - Arguments to create many Token_networks.
     * @example
     * // Create many Token_networks
     * const token_networks = await prisma.token_networks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Token_networks and only return the `token_network_id`
     * const token_networksWithToken_network_idOnly = await prisma.token_networks.createManyAndReturn({
     *   select: { token_network_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends token_networksCreateManyAndReturnArgs>(args?: SelectSubset<T, token_networksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token_networks.
     * @param {token_networksDeleteArgs} args - Arguments to delete one Token_networks.
     * @example
     * // Delete one Token_networks
     * const Token_networks = await prisma.token_networks.delete({
     *   where: {
     *     // ... filter to delete one Token_networks
     *   }
     * })
     * 
     */
    delete<T extends token_networksDeleteArgs>(args: SelectSubset<T, token_networksDeleteArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token_networks.
     * @param {token_networksUpdateArgs} args - Arguments to update one Token_networks.
     * @example
     * // Update one Token_networks
     * const token_networks = await prisma.token_networks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends token_networksUpdateArgs>(args: SelectSubset<T, token_networksUpdateArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Token_networks.
     * @param {token_networksDeleteManyArgs} args - Arguments to filter Token_networks to delete.
     * @example
     * // Delete a few Token_networks
     * const { count } = await prisma.token_networks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends token_networksDeleteManyArgs>(args?: SelectSubset<T, token_networksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Token_networks
     * const token_networks = await prisma.token_networks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends token_networksUpdateManyArgs>(args: SelectSubset<T, token_networksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_networks and returns the data updated in the database.
     * @param {token_networksUpdateManyAndReturnArgs} args - Arguments to update many Token_networks.
     * @example
     * // Update many Token_networks
     * const token_networks = await prisma.token_networks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Token_networks and only return the `token_network_id`
     * const token_networksWithToken_network_idOnly = await prisma.token_networks.updateManyAndReturn({
     *   select: { token_network_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends token_networksUpdateManyAndReturnArgs>(args: SelectSubset<T, token_networksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token_networks.
     * @param {token_networksUpsertArgs} args - Arguments to update or create a Token_networks.
     * @example
     * // Update or create a Token_networks
     * const token_networks = await prisma.token_networks.upsert({
     *   create: {
     *     // ... data to create a Token_networks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token_networks we want to update
     *   }
     * })
     */
    upsert<T extends token_networksUpsertArgs>(args: SelectSubset<T, token_networksUpsertArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksCountArgs} args - Arguments to filter Token_networks to count.
     * @example
     * // Count the number of Token_networks
     * const count = await prisma.token_networks.count({
     *   where: {
     *     // ... the filter for the Token_networks we want to count
     *   }
     * })
    **/
    count<T extends token_networksCountArgs>(
      args?: Subset<T, token_networksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Token_networksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Token_networksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Token_networksAggregateArgs>(args: Subset<T, Token_networksAggregateArgs>): Prisma.PrismaPromise<GetToken_networksAggregateType<T>>

    /**
     * Group by Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networksGroupByArgs} args - Group by arguments.
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
      T extends token_networksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: token_networksGroupByArgs['orderBy'] }
        : { orderBy?: token_networksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, token_networksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_networksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token_networks model
   */
  readonly fields: token_networksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token_networks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__token_networksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    networks<T extends token_networks$networksArgs<ExtArgs> = {}>(args?: Subset<T, token_networks$networksArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tokens<T extends token_networks$tokensArgs<ExtArgs> = {}>(args?: Subset<T, token_networks$tokensArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallet_network_tokens<T extends token_networks$wallet_network_tokensArgs<ExtArgs> = {}>(args?: Subset<T, token_networks$wallet_network_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the token_networks model
   */
  interface token_networksFieldRefs {
    readonly token_network_id: FieldRef<"token_networks", 'String'>
    readonly token_id: FieldRef<"token_networks", 'String'>
    readonly network_id: FieldRef<"token_networks", 'String'>
    readonly contract_address: FieldRef<"token_networks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * token_networks findUnique
   */
  export type token_networksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where: token_networksWhereUniqueInput
  }

  /**
   * token_networks findUniqueOrThrow
   */
  export type token_networksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where: token_networksWhereUniqueInput
  }

  /**
   * token_networks findFirst
   */
  export type token_networksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where?: token_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_networks.
     */
    cursor?: token_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_networks.
     */
    distinct?: Token_networksScalarFieldEnum | Token_networksScalarFieldEnum[]
  }

  /**
   * token_networks findFirstOrThrow
   */
  export type token_networksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where?: token_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_networks.
     */
    cursor?: token_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_networks.
     */
    distinct?: Token_networksScalarFieldEnum | Token_networksScalarFieldEnum[]
  }

  /**
   * token_networks findMany
   */
  export type token_networksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where?: token_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing token_networks.
     */
    cursor?: token_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_networks.
     */
    skip?: number
    distinct?: Token_networksScalarFieldEnum | Token_networksScalarFieldEnum[]
  }

  /**
   * token_networks create
   */
  export type token_networksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * The data needed to create a token_networks.
     */
    data: XOR<token_networksCreateInput, token_networksUncheckedCreateInput>
  }

  /**
   * token_networks createMany
   */
  export type token_networksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many token_networks.
     */
    data: token_networksCreateManyInput | token_networksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token_networks createManyAndReturn
   */
  export type token_networksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * The data used to create many token_networks.
     */
    data: token_networksCreateManyInput | token_networksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * token_networks update
   */
  export type token_networksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * The data needed to update a token_networks.
     */
    data: XOR<token_networksUpdateInput, token_networksUncheckedUpdateInput>
    /**
     * Choose, which token_networks to update.
     */
    where: token_networksWhereUniqueInput
  }

  /**
   * token_networks updateMany
   */
  export type token_networksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update token_networks.
     */
    data: XOR<token_networksUpdateManyMutationInput, token_networksUncheckedUpdateManyInput>
    /**
     * Filter which token_networks to update
     */
    where?: token_networksWhereInput
    /**
     * Limit how many token_networks to update.
     */
    limit?: number
  }

  /**
   * token_networks updateManyAndReturn
   */
  export type token_networksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * The data used to update token_networks.
     */
    data: XOR<token_networksUpdateManyMutationInput, token_networksUncheckedUpdateManyInput>
    /**
     * Filter which token_networks to update
     */
    where?: token_networksWhereInput
    /**
     * Limit how many token_networks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * token_networks upsert
   */
  export type token_networksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * The filter to search for the token_networks to update in case it exists.
     */
    where: token_networksWhereUniqueInput
    /**
     * In case the token_networks found by the `where` argument doesn't exist, create a new token_networks with this data.
     */
    create: XOR<token_networksCreateInput, token_networksUncheckedCreateInput>
    /**
     * In case the token_networks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<token_networksUpdateInput, token_networksUncheckedUpdateInput>
  }

  /**
   * token_networks delete
   */
  export type token_networksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    /**
     * Filter which token_networks to delete.
     */
    where: token_networksWhereUniqueInput
  }

  /**
   * token_networks deleteMany
   */
  export type token_networksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_networks to delete
     */
    where?: token_networksWhereInput
    /**
     * Limit how many token_networks to delete.
     */
    limit?: number
  }

  /**
   * token_networks.networks
   */
  export type token_networks$networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    where?: networksWhereInput
  }

  /**
   * token_networks.tokens
   */
  export type token_networks$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    where?: tokensWhereInput
  }

  /**
   * token_networks.wallet_network_tokens
   */
  export type token_networks$wallet_network_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    where?: wallet_network_tokensWhereInput
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    cursor?: wallet_network_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wallet_network_tokensScalarFieldEnum | Wallet_network_tokensScalarFieldEnum[]
  }

  /**
   * token_networks without action
   */
  export type token_networksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
  }


  /**
   * Model tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    decimals: number | null
  }

  export type TokensSumAggregateOutputType = {
    decimals: number | null
  }

  export type TokensMinAggregateOutputType = {
    token_id: string | null
    token_name: string | null
    symbol: string | null
    decimals: number | null
    thumbnail: string | null
    price_feed_id: string | null
    percent_change_24h: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    token_id: string | null
    token_name: string | null
    symbol: string | null
    decimals: number | null
    thumbnail: string | null
    price_feed_id: string | null
    percent_change_24h: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TokensCountAggregateOutputType = {
    token_id: number
    token_name: number
    symbol: number
    decimals: number
    thumbnail: number
    price_feed_id: number
    percent_change_24h: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    decimals?: true
  }

  export type TokensSumAggregateInputType = {
    decimals?: true
  }

  export type TokensMinAggregateInputType = {
    token_id?: true
    token_name?: true
    symbol?: true
    decimals?: true
    thumbnail?: true
    price_feed_id?: true
    percent_change_24h?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TokensMaxAggregateInputType = {
    token_id?: true
    token_name?: true
    symbol?: true
    decimals?: true
    thumbnail?: true
    price_feed_id?: true
    percent_change_24h?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TokensCountAggregateInputType = {
    token_id?: true
    token_name?: true
    symbol?: true
    decimals?: true
    thumbnail?: true
    price_feed_id?: true
    percent_change_24h?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to aggregate.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithAggregationInput | tokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    token_id: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail: string | null
    price_feed_id: string | null
    percent_change_24h: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token_name?: boolean
    symbol?: boolean
    decimals?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    percent_change_24h?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    token_networks?: boolean | tokens$token_networksArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token_name?: boolean
    symbol?: boolean
    decimals?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    percent_change_24h?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    token_name?: boolean
    symbol?: boolean
    decimals?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    percent_change_24h?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectScalar = {
    token_id?: boolean
    token_name?: boolean
    symbol?: boolean
    decimals?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    percent_change_24h?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_id" | "token_name" | "symbol" | "decimals" | "thumbnail" | "price_feed_id" | "percent_change_24h" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["tokens"]>
  export type tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | tokens$token_networksArgs<ExtArgs>
    _count?: boolean | TokensCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokens"
    objects: {
      token_networks: Prisma.$token_networksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: string
      token_name: string
      symbol: string
      decimals: number
      thumbnail: string | null
      price_feed_id: string | null
      percent_change_24h: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type tokensGetPayload<S extends boolean | null | undefined | tokensDefaultArgs> = $Result.GetResult<Prisma.$tokensPayload, S>

  type tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokens'], meta: { name: 'tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {tokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokensFindUniqueArgs>(args: SelectSubset<T, tokensFindUniqueArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokensFindFirstArgs>(args?: SelectSubset<T, tokensFindFirstArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const tokensWithToken_idOnly = await prisma.tokens.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends tokensFindManyArgs>(args?: SelectSubset<T, tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {tokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends tokensCreateArgs>(args: SelectSubset<T, tokensCreateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {tokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokensCreateManyArgs>(args?: SelectSubset<T, tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {tokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `token_id`
     * const tokensWithToken_idOnly = await prisma.tokens.createManyAndReturn({
     *   select: { token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {tokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends tokensDeleteArgs>(args: SelectSubset<T, tokensDeleteArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {tokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokensUpdateArgs>(args: SelectSubset<T, tokensUpdateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokensDeleteManyArgs>(args?: SelectSubset<T, tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokensUpdateManyArgs>(args: SelectSubset<T, tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {tokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `token_id`
     * const tokensWithToken_idOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { token_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {tokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends tokensUpsertArgs>(args: SelectSubset<T, tokensUpsertArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokensCountArgs>(
      args?: Subset<T, tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensGroupByArgs} args - Group by arguments.
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
      T extends tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokensGroupByArgs['orderBy'] }
        : { orderBy?: tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokens model
   */
  readonly fields: tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token_networks<T extends tokens$token_networksArgs<ExtArgs> = {}>(args?: Subset<T, tokens$token_networksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tokens model
   */
  interface tokensFieldRefs {
    readonly token_id: FieldRef<"tokens", 'String'>
    readonly token_name: FieldRef<"tokens", 'String'>
    readonly symbol: FieldRef<"tokens", 'String'>
    readonly decimals: FieldRef<"tokens", 'Int'>
    readonly thumbnail: FieldRef<"tokens", 'String'>
    readonly price_feed_id: FieldRef<"tokens", 'String'>
    readonly percent_change_24h: FieldRef<"tokens", 'String'>
    readonly created_at: FieldRef<"tokens", 'DateTime'>
    readonly updated_at: FieldRef<"tokens", 'DateTime'>
    readonly deleted_at: FieldRef<"tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tokens findUnique
   */
  export type tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findUniqueOrThrow
   */
  export type tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findFirst
   */
  export type tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findFirstOrThrow
   */
  export type tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findMany
   */
  export type tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens create
   */
  export type tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a tokens.
     */
    data: XOR<tokensCreateInput, tokensUncheckedCreateInput>
  }

  /**
   * tokens createMany
   */
  export type tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokens createManyAndReturn
   */
  export type tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokens update
   */
  export type tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a tokens.
     */
    data: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
    /**
     * Choose, which tokens to update.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens updateMany
   */
  export type tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * tokens updateManyAndReturn
   */
  export type tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * tokens upsert
   */
  export type tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the tokens to update in case it exists.
     */
    where: tokensWhereUniqueInput
    /**
     * In case the tokens found by the `where` argument doesn't exist, create a new tokens with this data.
     */
    create: XOR<tokensCreateInput, tokensUncheckedCreateInput>
    /**
     * In case the tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
  }

  /**
   * tokens delete
   */
  export type tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter which tokens to delete.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens deleteMany
   */
  export type tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * tokens.token_networks
   */
  export type tokens$token_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    where?: token_networksWhereInput
    orderBy?: token_networksOrderByWithRelationInput | token_networksOrderByWithRelationInput[]
    cursor?: token_networksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Token_networksScalarFieldEnum | Token_networksScalarFieldEnum[]
  }

  /**
   * tokens without action
   */
  export type tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    avatar: string | null
    bio: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    notiToken: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    avatar: string | null
    bio: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    notiToken: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    avatar: number
    bio: number
    email: number
    password_hash: number
    created_at: number
    updated_at: number
    deleted_at: number
    notiToken: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    avatar?: true
    bio?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    notiToken?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    avatar?: true
    bio?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    notiToken?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    avatar?: true
    bio?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    notiToken?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    username: string
    avatar: string | null
    bio: string | null
    email: string
    password_hash: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    notiToken: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    avatar?: boolean
    bio?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    notiToken?: boolean
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    networks?: boolean | users$networksArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    avatar?: boolean
    bio?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    notiToken?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    avatar?: boolean
    bio?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    notiToken?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    username?: boolean
    avatar?: boolean
    bio?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    notiToken?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "avatar" | "bio" | "email" | "password_hash" | "created_at" | "updated_at" | "deleted_at" | "notiToken", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    networks?: boolean | users$networksArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      networks: Prisma.$networksPayload<ExtArgs>[]
      wallets: Prisma.$walletsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      avatar: string | null
      bio: string | null
      email: string
      password_hash: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      notiToken: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends users$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    networks<T extends users$networksArgs<ExtArgs> = {}>(args?: Subset<T, users$networksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallets<T extends users$walletsArgs<ExtArgs> = {}>(args?: Subset<T, users$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly notiToken: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.audit_logs
   */
  export type users$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * users.networks
   */
  export type users$networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    where?: networksWhereInput
    orderBy?: networksOrderByWithRelationInput | networksOrderByWithRelationInput[]
    cursor?: networksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworksScalarFieldEnum | NetworksScalarFieldEnum[]
  }

  /**
   * users.wallets
   */
  export type users$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    cursor?: walletsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model wallet_network_tokens
   */

  export type AggregateWallet_network_tokens = {
    _count: Wallet_network_tokensCountAggregateOutputType | null
    _avg: Wallet_network_tokensAvgAggregateOutputType | null
    _sum: Wallet_network_tokensSumAggregateOutputType | null
    _min: Wallet_network_tokensMinAggregateOutputType | null
    _max: Wallet_network_tokensMaxAggregateOutputType | null
  }

  export type Wallet_network_tokensAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type Wallet_network_tokensSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type Wallet_network_tokensMinAggregateOutputType = {
    wallet_network_token_id: string | null
    token_network_id: string | null
    wallet_id: string | null
    balance: Decimal | null
    updated_at: Date | null
  }

  export type Wallet_network_tokensMaxAggregateOutputType = {
    wallet_network_token_id: string | null
    token_network_id: string | null
    wallet_id: string | null
    balance: Decimal | null
    updated_at: Date | null
  }

  export type Wallet_network_tokensCountAggregateOutputType = {
    wallet_network_token_id: number
    token_network_id: number
    wallet_id: number
    balance: number
    updated_at: number
    _all: number
  }


  export type Wallet_network_tokensAvgAggregateInputType = {
    balance?: true
  }

  export type Wallet_network_tokensSumAggregateInputType = {
    balance?: true
  }

  export type Wallet_network_tokensMinAggregateInputType = {
    wallet_network_token_id?: true
    token_network_id?: true
    wallet_id?: true
    balance?: true
    updated_at?: true
  }

  export type Wallet_network_tokensMaxAggregateInputType = {
    wallet_network_token_id?: true
    token_network_id?: true
    wallet_id?: true
    balance?: true
    updated_at?: true
  }

  export type Wallet_network_tokensCountAggregateInputType = {
    wallet_network_token_id?: true
    token_network_id?: true
    wallet_id?: true
    balance?: true
    updated_at?: true
    _all?: true
  }

  export type Wallet_network_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_network_tokens to aggregate.
     */
    where?: wallet_network_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_network_tokens to fetch.
     */
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wallet_network_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallet_network_tokens
    **/
    _count?: true | Wallet_network_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Wallet_network_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Wallet_network_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wallet_network_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wallet_network_tokensMaxAggregateInputType
  }

  export type GetWallet_network_tokensAggregateType<T extends Wallet_network_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet_network_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet_network_tokens[P]>
      : GetScalarType<T[P], AggregateWallet_network_tokens[P]>
  }




  export type wallet_network_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_network_tokensWhereInput
    orderBy?: wallet_network_tokensOrderByWithAggregationInput | wallet_network_tokensOrderByWithAggregationInput[]
    by: Wallet_network_tokensScalarFieldEnum[] | Wallet_network_tokensScalarFieldEnum
    having?: wallet_network_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wallet_network_tokensCountAggregateInputType | true
    _avg?: Wallet_network_tokensAvgAggregateInputType
    _sum?: Wallet_network_tokensSumAggregateInputType
    _min?: Wallet_network_tokensMinAggregateInputType
    _max?: Wallet_network_tokensMaxAggregateInputType
  }

  export type Wallet_network_tokensGroupByOutputType = {
    wallet_network_token_id: string
    token_network_id: string | null
    wallet_id: string | null
    balance: Decimal
    updated_at: Date | null
    _count: Wallet_network_tokensCountAggregateOutputType | null
    _avg: Wallet_network_tokensAvgAggregateOutputType | null
    _sum: Wallet_network_tokensSumAggregateOutputType | null
    _min: Wallet_network_tokensMinAggregateOutputType | null
    _max: Wallet_network_tokensMaxAggregateOutputType | null
  }

  type GetWallet_network_tokensGroupByPayload<T extends wallet_network_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wallet_network_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wallet_network_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wallet_network_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Wallet_network_tokensGroupByOutputType[P]>
        }
      >
    >


  export type wallet_network_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_token_id?: boolean
    token_network_id?: boolean
    wallet_id?: boolean
    balance?: boolean
    updated_at?: boolean
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_network_tokens"]>

  export type wallet_network_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_token_id?: boolean
    token_network_id?: boolean
    wallet_id?: boolean
    balance?: boolean
    updated_at?: boolean
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_network_tokens"]>

  export type wallet_network_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_token_id?: boolean
    token_network_id?: boolean
    wallet_id?: boolean
    balance?: boolean
    updated_at?: boolean
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_network_tokens"]>

  export type wallet_network_tokensSelectScalar = {
    wallet_network_token_id?: boolean
    token_network_id?: boolean
    wallet_id?: boolean
    balance?: boolean
    updated_at?: boolean
  }

  export type wallet_network_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wallet_network_token_id" | "token_network_id" | "wallet_id" | "balance" | "updated_at", ExtArgs["result"]["wallet_network_tokens"]>
  export type wallet_network_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }
  export type wallet_network_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }
  export type wallet_network_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_networks?: boolean | wallet_network_tokens$token_networksArgs<ExtArgs>
    wallets?: boolean | wallet_network_tokens$walletsArgs<ExtArgs>
  }

  export type $wallet_network_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet_network_tokens"
    objects: {
      token_networks: Prisma.$token_networksPayload<ExtArgs> | null
      wallets: Prisma.$walletsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      wallet_network_token_id: string
      token_network_id: string | null
      wallet_id: string | null
      balance: Prisma.Decimal
      updated_at: Date | null
    }, ExtArgs["result"]["wallet_network_tokens"]>
    composites: {}
  }

  type wallet_network_tokensGetPayload<S extends boolean | null | undefined | wallet_network_tokensDefaultArgs> = $Result.GetResult<Prisma.$wallet_network_tokensPayload, S>

  type wallet_network_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wallet_network_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wallet_network_tokensCountAggregateInputType | true
    }

  export interface wallet_network_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet_network_tokens'], meta: { name: 'wallet_network_tokens' } }
    /**
     * Find zero or one Wallet_network_tokens that matches the filter.
     * @param {wallet_network_tokensFindUniqueArgs} args - Arguments to find a Wallet_network_tokens
     * @example
     * // Get one Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wallet_network_tokensFindUniqueArgs>(args: SelectSubset<T, wallet_network_tokensFindUniqueArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet_network_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wallet_network_tokensFindUniqueOrThrowArgs} args - Arguments to find a Wallet_network_tokens
     * @example
     * // Get one Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wallet_network_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, wallet_network_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_network_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensFindFirstArgs} args - Arguments to find a Wallet_network_tokens
     * @example
     * // Get one Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wallet_network_tokensFindFirstArgs>(args?: SelectSubset<T, wallet_network_tokensFindFirstArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_network_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensFindFirstOrThrowArgs} args - Arguments to find a Wallet_network_tokens
     * @example
     * // Get one Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wallet_network_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, wallet_network_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallet_network_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findMany()
     * 
     * // Get first 10 Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.findMany({ take: 10 })
     * 
     * // Only select the `wallet_network_token_id`
     * const wallet_network_tokensWithWallet_network_token_idOnly = await prisma.wallet_network_tokens.findMany({ select: { wallet_network_token_id: true } })
     * 
     */
    findMany<T extends wallet_network_tokensFindManyArgs>(args?: SelectSubset<T, wallet_network_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet_network_tokens.
     * @param {wallet_network_tokensCreateArgs} args - Arguments to create a Wallet_network_tokens.
     * @example
     * // Create one Wallet_network_tokens
     * const Wallet_network_tokens = await prisma.wallet_network_tokens.create({
     *   data: {
     *     // ... data to create a Wallet_network_tokens
     *   }
     * })
     * 
     */
    create<T extends wallet_network_tokensCreateArgs>(args: SelectSubset<T, wallet_network_tokensCreateArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallet_network_tokens.
     * @param {wallet_network_tokensCreateManyArgs} args - Arguments to create many Wallet_network_tokens.
     * @example
     * // Create many Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wallet_network_tokensCreateManyArgs>(args?: SelectSubset<T, wallet_network_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallet_network_tokens and returns the data saved in the database.
     * @param {wallet_network_tokensCreateManyAndReturnArgs} args - Arguments to create many Wallet_network_tokens.
     * @example
     * // Create many Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallet_network_tokens and only return the `wallet_network_token_id`
     * const wallet_network_tokensWithWallet_network_token_idOnly = await prisma.wallet_network_tokens.createManyAndReturn({
     *   select: { wallet_network_token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wallet_network_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, wallet_network_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet_network_tokens.
     * @param {wallet_network_tokensDeleteArgs} args - Arguments to delete one Wallet_network_tokens.
     * @example
     * // Delete one Wallet_network_tokens
     * const Wallet_network_tokens = await prisma.wallet_network_tokens.delete({
     *   where: {
     *     // ... filter to delete one Wallet_network_tokens
     *   }
     * })
     * 
     */
    delete<T extends wallet_network_tokensDeleteArgs>(args: SelectSubset<T, wallet_network_tokensDeleteArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet_network_tokens.
     * @param {wallet_network_tokensUpdateArgs} args - Arguments to update one Wallet_network_tokens.
     * @example
     * // Update one Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wallet_network_tokensUpdateArgs>(args: SelectSubset<T, wallet_network_tokensUpdateArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallet_network_tokens.
     * @param {wallet_network_tokensDeleteManyArgs} args - Arguments to filter Wallet_network_tokens to delete.
     * @example
     * // Delete a few Wallet_network_tokens
     * const { count } = await prisma.wallet_network_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wallet_network_tokensDeleteManyArgs>(args?: SelectSubset<T, wallet_network_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wallet_network_tokensUpdateManyArgs>(args: SelectSubset<T, wallet_network_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_network_tokens and returns the data updated in the database.
     * @param {wallet_network_tokensUpdateManyAndReturnArgs} args - Arguments to update many Wallet_network_tokens.
     * @example
     * // Update many Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallet_network_tokens and only return the `wallet_network_token_id`
     * const wallet_network_tokensWithWallet_network_token_idOnly = await prisma.wallet_network_tokens.updateManyAndReturn({
     *   select: { wallet_network_token_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wallet_network_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, wallet_network_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet_network_tokens.
     * @param {wallet_network_tokensUpsertArgs} args - Arguments to update or create a Wallet_network_tokens.
     * @example
     * // Update or create a Wallet_network_tokens
     * const wallet_network_tokens = await prisma.wallet_network_tokens.upsert({
     *   create: {
     *     // ... data to create a Wallet_network_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet_network_tokens we want to update
     *   }
     * })
     */
    upsert<T extends wallet_network_tokensUpsertArgs>(args: SelectSubset<T, wallet_network_tokensUpsertArgs<ExtArgs>>): Prisma__wallet_network_tokensClient<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallet_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensCountArgs} args - Arguments to filter Wallet_network_tokens to count.
     * @example
     * // Count the number of Wallet_network_tokens
     * const count = await prisma.wallet_network_tokens.count({
     *   where: {
     *     // ... the filter for the Wallet_network_tokens we want to count
     *   }
     * })
    **/
    count<T extends wallet_network_tokensCountArgs>(
      args?: Subset<T, wallet_network_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wallet_network_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wallet_network_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wallet_network_tokensAggregateArgs>(args: Subset<T, Wallet_network_tokensAggregateArgs>): Prisma.PrismaPromise<GetWallet_network_tokensAggregateType<T>>

    /**
     * Group by Wallet_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_network_tokensGroupByArgs} args - Group by arguments.
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
      T extends wallet_network_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wallet_network_tokensGroupByArgs['orderBy'] }
        : { orderBy?: wallet_network_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, wallet_network_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallet_network_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet_network_tokens model
   */
  readonly fields: wallet_network_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet_network_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wallet_network_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token_networks<T extends wallet_network_tokens$token_networksArgs<ExtArgs> = {}>(args?: Subset<T, wallet_network_tokens$token_networksArgs<ExtArgs>>): Prisma__token_networksClient<$Result.GetResult<Prisma.$token_networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallets<T extends wallet_network_tokens$walletsArgs<ExtArgs> = {}>(args?: Subset<T, wallet_network_tokens$walletsArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet_network_tokens model
   */
  interface wallet_network_tokensFieldRefs {
    readonly wallet_network_token_id: FieldRef<"wallet_network_tokens", 'String'>
    readonly token_network_id: FieldRef<"wallet_network_tokens", 'String'>
    readonly wallet_id: FieldRef<"wallet_network_tokens", 'String'>
    readonly balance: FieldRef<"wallet_network_tokens", 'Decimal'>
    readonly updated_at: FieldRef<"wallet_network_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallet_network_tokens findUnique
   */
  export type wallet_network_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter, which wallet_network_tokens to fetch.
     */
    where: wallet_network_tokensWhereUniqueInput
  }

  /**
   * wallet_network_tokens findUniqueOrThrow
   */
  export type wallet_network_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter, which wallet_network_tokens to fetch.
     */
    where: wallet_network_tokensWhereUniqueInput
  }

  /**
   * wallet_network_tokens findFirst
   */
  export type wallet_network_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter, which wallet_network_tokens to fetch.
     */
    where?: wallet_network_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_network_tokens to fetch.
     */
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_network_tokens.
     */
    cursor?: wallet_network_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_network_tokens.
     */
    distinct?: Wallet_network_tokensScalarFieldEnum | Wallet_network_tokensScalarFieldEnum[]
  }

  /**
   * wallet_network_tokens findFirstOrThrow
   */
  export type wallet_network_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter, which wallet_network_tokens to fetch.
     */
    where?: wallet_network_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_network_tokens to fetch.
     */
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_network_tokens.
     */
    cursor?: wallet_network_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_network_tokens.
     */
    distinct?: Wallet_network_tokensScalarFieldEnum | Wallet_network_tokensScalarFieldEnum[]
  }

  /**
   * wallet_network_tokens findMany
   */
  export type wallet_network_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter, which wallet_network_tokens to fetch.
     */
    where?: wallet_network_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_network_tokens to fetch.
     */
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallet_network_tokens.
     */
    cursor?: wallet_network_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_network_tokens.
     */
    skip?: number
    distinct?: Wallet_network_tokensScalarFieldEnum | Wallet_network_tokensScalarFieldEnum[]
  }

  /**
   * wallet_network_tokens create
   */
  export type wallet_network_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet_network_tokens.
     */
    data?: XOR<wallet_network_tokensCreateInput, wallet_network_tokensUncheckedCreateInput>
  }

  /**
   * wallet_network_tokens createMany
   */
  export type wallet_network_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallet_network_tokens.
     */
    data: wallet_network_tokensCreateManyInput | wallet_network_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet_network_tokens createManyAndReturn
   */
  export type wallet_network_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many wallet_network_tokens.
     */
    data: wallet_network_tokensCreateManyInput | wallet_network_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_network_tokens update
   */
  export type wallet_network_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet_network_tokens.
     */
    data: XOR<wallet_network_tokensUpdateInput, wallet_network_tokensUncheckedUpdateInput>
    /**
     * Choose, which wallet_network_tokens to update.
     */
    where: wallet_network_tokensWhereUniqueInput
  }

  /**
   * wallet_network_tokens updateMany
   */
  export type wallet_network_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallet_network_tokens.
     */
    data: XOR<wallet_network_tokensUpdateManyMutationInput, wallet_network_tokensUncheckedUpdateManyInput>
    /**
     * Filter which wallet_network_tokens to update
     */
    where?: wallet_network_tokensWhereInput
    /**
     * Limit how many wallet_network_tokens to update.
     */
    limit?: number
  }

  /**
   * wallet_network_tokens updateManyAndReturn
   */
  export type wallet_network_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * The data used to update wallet_network_tokens.
     */
    data: XOR<wallet_network_tokensUpdateManyMutationInput, wallet_network_tokensUncheckedUpdateManyInput>
    /**
     * Filter which wallet_network_tokens to update
     */
    where?: wallet_network_tokensWhereInput
    /**
     * Limit how many wallet_network_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_network_tokens upsert
   */
  export type wallet_network_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet_network_tokens to update in case it exists.
     */
    where: wallet_network_tokensWhereUniqueInput
    /**
     * In case the wallet_network_tokens found by the `where` argument doesn't exist, create a new wallet_network_tokens with this data.
     */
    create: XOR<wallet_network_tokensCreateInput, wallet_network_tokensUncheckedCreateInput>
    /**
     * In case the wallet_network_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wallet_network_tokensUpdateInput, wallet_network_tokensUncheckedUpdateInput>
  }

  /**
   * wallet_network_tokens delete
   */
  export type wallet_network_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    /**
     * Filter which wallet_network_tokens to delete.
     */
    where: wallet_network_tokensWhereUniqueInput
  }

  /**
   * wallet_network_tokens deleteMany
   */
  export type wallet_network_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_network_tokens to delete
     */
    where?: wallet_network_tokensWhereInput
    /**
     * Limit how many wallet_network_tokens to delete.
     */
    limit?: number
  }

  /**
   * wallet_network_tokens.token_networks
   */
  export type wallet_network_tokens$token_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_networks
     */
    select?: token_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_networks
     */
    omit?: token_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networksInclude<ExtArgs> | null
    where?: token_networksWhereInput
  }

  /**
   * wallet_network_tokens.wallets
   */
  export type wallet_network_tokens$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
  }

  /**
   * wallet_network_tokens without action
   */
  export type wallet_network_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
  }


  /**
   * Model wallet_networks
   */

  export type AggregateWallet_networks = {
    _count: Wallet_networksCountAggregateOutputType | null
    _min: Wallet_networksMinAggregateOutputType | null
    _max: Wallet_networksMaxAggregateOutputType | null
  }

  export type Wallet_networksMinAggregateOutputType = {
    wallet_network_id: string | null
    wallet_id: string | null
    network_id: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Wallet_networksMaxAggregateOutputType = {
    wallet_network_id: string | null
    wallet_id: string | null
    network_id: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Wallet_networksCountAggregateOutputType = {
    wallet_network_id: number
    wallet_id: number
    network_id: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Wallet_networksMinAggregateInputType = {
    wallet_network_id?: true
    wallet_id?: true
    network_id?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type Wallet_networksMaxAggregateInputType = {
    wallet_network_id?: true
    wallet_id?: true
    network_id?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type Wallet_networksCountAggregateInputType = {
    wallet_network_id?: true
    wallet_id?: true
    network_id?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Wallet_networksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_networks to aggregate.
     */
    where?: wallet_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_networks to fetch.
     */
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wallet_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallet_networks
    **/
    _count?: true | Wallet_networksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wallet_networksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wallet_networksMaxAggregateInputType
  }

  export type GetWallet_networksAggregateType<T extends Wallet_networksAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet_networks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet_networks[P]>
      : GetScalarType<T[P], AggregateWallet_networks[P]>
  }




  export type wallet_networksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wallet_networksWhereInput
    orderBy?: wallet_networksOrderByWithAggregationInput | wallet_networksOrderByWithAggregationInput[]
    by: Wallet_networksScalarFieldEnum[] | Wallet_networksScalarFieldEnum
    having?: wallet_networksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wallet_networksCountAggregateInputType | true
    _min?: Wallet_networksMinAggregateInputType
    _max?: Wallet_networksMaxAggregateInputType
  }

  export type Wallet_networksGroupByOutputType = {
    wallet_network_id: string
    wallet_id: string | null
    network_id: string | null
    address: string
    created_at: Date | null
    updated_at: Date | null
    _count: Wallet_networksCountAggregateOutputType | null
    _min: Wallet_networksMinAggregateOutputType | null
    _max: Wallet_networksMaxAggregateOutputType | null
  }

  type GetWallet_networksGroupByPayload<T extends wallet_networksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wallet_networksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wallet_networksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wallet_networksGroupByOutputType[P]>
            : GetScalarType<T[P], Wallet_networksGroupByOutputType[P]>
        }
      >
    >


  export type wallet_networksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_id?: boolean
    wallet_id?: boolean
    network_id?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_networks"]>

  export type wallet_networksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_id?: boolean
    wallet_id?: boolean
    network_id?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_networks"]>

  export type wallet_networksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_network_id?: boolean
    wallet_id?: boolean
    network_id?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }, ExtArgs["result"]["wallet_networks"]>

  export type wallet_networksSelectScalar = {
    wallet_network_id?: boolean
    wallet_id?: boolean
    network_id?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type wallet_networksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wallet_network_id" | "wallet_id" | "network_id" | "address" | "created_at" | "updated_at", ExtArgs["result"]["wallet_networks"]>
  export type wallet_networksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }
  export type wallet_networksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }
  export type wallet_networksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networks?: boolean | wallet_networks$networksArgs<ExtArgs>
    wallets?: boolean | wallet_networks$walletsArgs<ExtArgs>
  }

  export type $wallet_networksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet_networks"
    objects: {
      networks: Prisma.$networksPayload<ExtArgs> | null
      wallets: Prisma.$walletsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      wallet_network_id: string
      wallet_id: string | null
      network_id: string | null
      address: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["wallet_networks"]>
    composites: {}
  }

  type wallet_networksGetPayload<S extends boolean | null | undefined | wallet_networksDefaultArgs> = $Result.GetResult<Prisma.$wallet_networksPayload, S>

  type wallet_networksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wallet_networksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wallet_networksCountAggregateInputType | true
    }

  export interface wallet_networksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet_networks'], meta: { name: 'wallet_networks' } }
    /**
     * Find zero or one Wallet_networks that matches the filter.
     * @param {wallet_networksFindUniqueArgs} args - Arguments to find a Wallet_networks
     * @example
     * // Get one Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wallet_networksFindUniqueArgs>(args: SelectSubset<T, wallet_networksFindUniqueArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet_networks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wallet_networksFindUniqueOrThrowArgs} args - Arguments to find a Wallet_networks
     * @example
     * // Get one Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wallet_networksFindUniqueOrThrowArgs>(args: SelectSubset<T, wallet_networksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksFindFirstArgs} args - Arguments to find a Wallet_networks
     * @example
     * // Get one Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wallet_networksFindFirstArgs>(args?: SelectSubset<T, wallet_networksFindFirstArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet_networks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksFindFirstOrThrowArgs} args - Arguments to find a Wallet_networks
     * @example
     * // Get one Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wallet_networksFindFirstOrThrowArgs>(args?: SelectSubset<T, wallet_networksFindFirstOrThrowArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallet_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findMany()
     * 
     * // Get first 10 Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.findMany({ take: 10 })
     * 
     * // Only select the `wallet_network_id`
     * const wallet_networksWithWallet_network_idOnly = await prisma.wallet_networks.findMany({ select: { wallet_network_id: true } })
     * 
     */
    findMany<T extends wallet_networksFindManyArgs>(args?: SelectSubset<T, wallet_networksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet_networks.
     * @param {wallet_networksCreateArgs} args - Arguments to create a Wallet_networks.
     * @example
     * // Create one Wallet_networks
     * const Wallet_networks = await prisma.wallet_networks.create({
     *   data: {
     *     // ... data to create a Wallet_networks
     *   }
     * })
     * 
     */
    create<T extends wallet_networksCreateArgs>(args: SelectSubset<T, wallet_networksCreateArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallet_networks.
     * @param {wallet_networksCreateManyArgs} args - Arguments to create many Wallet_networks.
     * @example
     * // Create many Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wallet_networksCreateManyArgs>(args?: SelectSubset<T, wallet_networksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallet_networks and returns the data saved in the database.
     * @param {wallet_networksCreateManyAndReturnArgs} args - Arguments to create many Wallet_networks.
     * @example
     * // Create many Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallet_networks and only return the `wallet_network_id`
     * const wallet_networksWithWallet_network_idOnly = await prisma.wallet_networks.createManyAndReturn({
     *   select: { wallet_network_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wallet_networksCreateManyAndReturnArgs>(args?: SelectSubset<T, wallet_networksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet_networks.
     * @param {wallet_networksDeleteArgs} args - Arguments to delete one Wallet_networks.
     * @example
     * // Delete one Wallet_networks
     * const Wallet_networks = await prisma.wallet_networks.delete({
     *   where: {
     *     // ... filter to delete one Wallet_networks
     *   }
     * })
     * 
     */
    delete<T extends wallet_networksDeleteArgs>(args: SelectSubset<T, wallet_networksDeleteArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet_networks.
     * @param {wallet_networksUpdateArgs} args - Arguments to update one Wallet_networks.
     * @example
     * // Update one Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wallet_networksUpdateArgs>(args: SelectSubset<T, wallet_networksUpdateArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallet_networks.
     * @param {wallet_networksDeleteManyArgs} args - Arguments to filter Wallet_networks to delete.
     * @example
     * // Delete a few Wallet_networks
     * const { count } = await prisma.wallet_networks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wallet_networksDeleteManyArgs>(args?: SelectSubset<T, wallet_networksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wallet_networksUpdateManyArgs>(args: SelectSubset<T, wallet_networksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallet_networks and returns the data updated in the database.
     * @param {wallet_networksUpdateManyAndReturnArgs} args - Arguments to update many Wallet_networks.
     * @example
     * // Update many Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallet_networks and only return the `wallet_network_id`
     * const wallet_networksWithWallet_network_idOnly = await prisma.wallet_networks.updateManyAndReturn({
     *   select: { wallet_network_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wallet_networksUpdateManyAndReturnArgs>(args: SelectSubset<T, wallet_networksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet_networks.
     * @param {wallet_networksUpsertArgs} args - Arguments to update or create a Wallet_networks.
     * @example
     * // Update or create a Wallet_networks
     * const wallet_networks = await prisma.wallet_networks.upsert({
     *   create: {
     *     // ... data to create a Wallet_networks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet_networks we want to update
     *   }
     * })
     */
    upsert<T extends wallet_networksUpsertArgs>(args: SelectSubset<T, wallet_networksUpsertArgs<ExtArgs>>): Prisma__wallet_networksClient<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallet_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksCountArgs} args - Arguments to filter Wallet_networks to count.
     * @example
     * // Count the number of Wallet_networks
     * const count = await prisma.wallet_networks.count({
     *   where: {
     *     // ... the filter for the Wallet_networks we want to count
     *   }
     * })
    **/
    count<T extends wallet_networksCountArgs>(
      args?: Subset<T, wallet_networksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wallet_networksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wallet_networksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wallet_networksAggregateArgs>(args: Subset<T, Wallet_networksAggregateArgs>): Prisma.PrismaPromise<GetWallet_networksAggregateType<T>>

    /**
     * Group by Wallet_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wallet_networksGroupByArgs} args - Group by arguments.
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
      T extends wallet_networksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wallet_networksGroupByArgs['orderBy'] }
        : { orderBy?: wallet_networksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, wallet_networksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallet_networksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet_networks model
   */
  readonly fields: wallet_networksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet_networks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wallet_networksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    networks<T extends wallet_networks$networksArgs<ExtArgs> = {}>(args?: Subset<T, wallet_networks$networksArgs<ExtArgs>>): Prisma__networksClient<$Result.GetResult<Prisma.$networksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallets<T extends wallet_networks$walletsArgs<ExtArgs> = {}>(args?: Subset<T, wallet_networks$walletsArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet_networks model
   */
  interface wallet_networksFieldRefs {
    readonly wallet_network_id: FieldRef<"wallet_networks", 'String'>
    readonly wallet_id: FieldRef<"wallet_networks", 'String'>
    readonly network_id: FieldRef<"wallet_networks", 'String'>
    readonly address: FieldRef<"wallet_networks", 'String'>
    readonly created_at: FieldRef<"wallet_networks", 'DateTime'>
    readonly updated_at: FieldRef<"wallet_networks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallet_networks findUnique
   */
  export type wallet_networksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter, which wallet_networks to fetch.
     */
    where: wallet_networksWhereUniqueInput
  }

  /**
   * wallet_networks findUniqueOrThrow
   */
  export type wallet_networksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter, which wallet_networks to fetch.
     */
    where: wallet_networksWhereUniqueInput
  }

  /**
   * wallet_networks findFirst
   */
  export type wallet_networksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter, which wallet_networks to fetch.
     */
    where?: wallet_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_networks to fetch.
     */
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_networks.
     */
    cursor?: wallet_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_networks.
     */
    distinct?: Wallet_networksScalarFieldEnum | Wallet_networksScalarFieldEnum[]
  }

  /**
   * wallet_networks findFirstOrThrow
   */
  export type wallet_networksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter, which wallet_networks to fetch.
     */
    where?: wallet_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_networks to fetch.
     */
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallet_networks.
     */
    cursor?: wallet_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallet_networks.
     */
    distinct?: Wallet_networksScalarFieldEnum | Wallet_networksScalarFieldEnum[]
  }

  /**
   * wallet_networks findMany
   */
  export type wallet_networksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter, which wallet_networks to fetch.
     */
    where?: wallet_networksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallet_networks to fetch.
     */
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallet_networks.
     */
    cursor?: wallet_networksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallet_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallet_networks.
     */
    skip?: number
    distinct?: Wallet_networksScalarFieldEnum | Wallet_networksScalarFieldEnum[]
  }

  /**
   * wallet_networks create
   */
  export type wallet_networksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet_networks.
     */
    data: XOR<wallet_networksCreateInput, wallet_networksUncheckedCreateInput>
  }

  /**
   * wallet_networks createMany
   */
  export type wallet_networksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallet_networks.
     */
    data: wallet_networksCreateManyInput | wallet_networksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet_networks createManyAndReturn
   */
  export type wallet_networksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * The data used to create many wallet_networks.
     */
    data: wallet_networksCreateManyInput | wallet_networksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_networks update
   */
  export type wallet_networksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet_networks.
     */
    data: XOR<wallet_networksUpdateInput, wallet_networksUncheckedUpdateInput>
    /**
     * Choose, which wallet_networks to update.
     */
    where: wallet_networksWhereUniqueInput
  }

  /**
   * wallet_networks updateMany
   */
  export type wallet_networksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallet_networks.
     */
    data: XOR<wallet_networksUpdateManyMutationInput, wallet_networksUncheckedUpdateManyInput>
    /**
     * Filter which wallet_networks to update
     */
    where?: wallet_networksWhereInput
    /**
     * Limit how many wallet_networks to update.
     */
    limit?: number
  }

  /**
   * wallet_networks updateManyAndReturn
   */
  export type wallet_networksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * The data used to update wallet_networks.
     */
    data: XOR<wallet_networksUpdateManyMutationInput, wallet_networksUncheckedUpdateManyInput>
    /**
     * Filter which wallet_networks to update
     */
    where?: wallet_networksWhereInput
    /**
     * Limit how many wallet_networks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet_networks upsert
   */
  export type wallet_networksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet_networks to update in case it exists.
     */
    where: wallet_networksWhereUniqueInput
    /**
     * In case the wallet_networks found by the `where` argument doesn't exist, create a new wallet_networks with this data.
     */
    create: XOR<wallet_networksCreateInput, wallet_networksUncheckedCreateInput>
    /**
     * In case the wallet_networks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wallet_networksUpdateInput, wallet_networksUncheckedUpdateInput>
  }

  /**
   * wallet_networks delete
   */
  export type wallet_networksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    /**
     * Filter which wallet_networks to delete.
     */
    where: wallet_networksWhereUniqueInput
  }

  /**
   * wallet_networks deleteMany
   */
  export type wallet_networksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet_networks to delete
     */
    where?: wallet_networksWhereInput
    /**
     * Limit how many wallet_networks to delete.
     */
    limit?: number
  }

  /**
   * wallet_networks.networks
   */
  export type wallet_networks$networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the networks
     */
    select?: networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the networks
     */
    omit?: networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networksInclude<ExtArgs> | null
    where?: networksWhereInput
  }

  /**
   * wallet_networks.wallets
   */
  export type wallet_networks$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    where?: walletsWhereInput
  }

  /**
   * wallet_networks without action
   */
  export type wallet_networksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
  }


  /**
   * Model wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    wallet_balance: Decimal | null
  }

  export type WalletsSumAggregateOutputType = {
    wallet_balance: Decimal | null
  }

  export type WalletsMinAggregateOutputType = {
    wallet_id: string | null
    user_id: string | null
    wallet_name: string | null
    wallet_balance: Decimal | null
    wallet_address: string | null
    wallet_phrase: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type WalletsMaxAggregateOutputType = {
    wallet_id: string | null
    user_id: string | null
    wallet_name: string | null
    wallet_balance: Decimal | null
    wallet_address: string | null
    wallet_phrase: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type WalletsCountAggregateOutputType = {
    wallet_id: number
    user_id: number
    wallet_name: number
    wallet_balance: number
    wallet_address: number
    wallet_phrase: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    wallet_balance?: true
  }

  export type WalletsSumAggregateInputType = {
    wallet_balance?: true
  }

  export type WalletsMinAggregateInputType = {
    wallet_id?: true
    user_id?: true
    wallet_name?: true
    wallet_balance?: true
    wallet_address?: true
    wallet_phrase?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type WalletsMaxAggregateInputType = {
    wallet_id?: true
    user_id?: true
    wallet_name?: true
    wallet_balance?: true
    wallet_address?: true
    wallet_phrase?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type WalletsCountAggregateInputType = {
    wallet_id?: true
    user_id?: true
    wallet_name?: true
    wallet_balance?: true
    wallet_address?: true
    wallet_phrase?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to aggregate.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type walletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletsWhereInput
    orderBy?: walletsOrderByWithAggregationInput | walletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: walletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    wallet_id: string
    user_id: string | null
    wallet_name: string
    wallet_balance: Decimal
    wallet_address: string
    wallet_phrase: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type walletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    wallet_name?: boolean
    wallet_balance?: boolean
    wallet_address?: boolean
    wallet_phrase?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    wallet_network_tokens?: boolean | wallets$wallet_network_tokensArgs<ExtArgs>
    wallet_networks?: boolean | wallets$wallet_networksArgs<ExtArgs>
    users?: boolean | wallets$usersArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    wallet_name?: boolean
    wallet_balance?: boolean
    wallet_address?: boolean
    wallet_phrase?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    users?: boolean | wallets$usersArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    wallet_name?: boolean
    wallet_balance?: boolean
    wallet_address?: boolean
    wallet_phrase?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    users?: boolean | wallets$usersArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type walletsSelectScalar = {
    wallet_id?: boolean
    user_id?: boolean
    wallet_name?: boolean
    wallet_balance?: boolean
    wallet_address?: boolean
    wallet_phrase?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type walletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wallet_id" | "user_id" | "wallet_name" | "wallet_balance" | "wallet_address" | "wallet_phrase" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["wallets"]>
  export type walletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet_network_tokens?: boolean | wallets$wallet_network_tokensArgs<ExtArgs>
    wallet_networks?: boolean | wallets$wallet_networksArgs<ExtArgs>
    users?: boolean | wallets$usersArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type walletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | wallets$usersArgs<ExtArgs>
  }
  export type walletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | wallets$usersArgs<ExtArgs>
  }

  export type $walletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallets"
    objects: {
      wallet_network_tokens: Prisma.$wallet_network_tokensPayload<ExtArgs>[]
      wallet_networks: Prisma.$wallet_networksPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      wallet_id: string
      user_id: string | null
      wallet_name: string
      wallet_balance: Prisma.Decimal
      wallet_address: string
      wallet_phrase: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = $Result.GetResult<Prisma.$walletsPayload, S>

  type walletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface walletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallets'], meta: { name: 'wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {walletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletsFindUniqueArgs>(args: SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletsFindFirstArgs>(args?: SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `wallet_id`
     * const walletsWithWallet_idOnly = await prisma.wallets.findMany({ select: { wallet_id: true } })
     * 
     */
    findMany<T extends walletsFindManyArgs>(args?: SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallets.
     * @param {walletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends walletsCreateArgs>(args: SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletsCreateManyArgs>(args?: SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletsCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `wallet_id`
     * const walletsWithWallet_idOnly = await prisma.wallets.createManyAndReturn({
     *   select: { wallet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletsCreateManyAndReturnArgs>(args?: SelectSubset<T, walletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallets.
     * @param {walletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends walletsDeleteArgs>(args: SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallets.
     * @param {walletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletsUpdateArgs>(args: SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletsDeleteManyArgs>(args?: SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletsUpdateManyArgs>(args: SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletsUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `wallet_id`
     * const walletsWithWallet_idOnly = await prisma.wallets.updateManyAndReturn({
     *   select: { wallet_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletsUpdateManyAndReturnArgs>(args: SelectSubset<T, walletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallets.
     * @param {walletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends walletsUpsertArgs>(args: SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma__walletsClient<$Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletsCountArgs>(
      args?: Subset<T, walletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletsGroupByArgs} args - Group by arguments.
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
      T extends walletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletsGroupByArgs['orderBy'] }
        : { orderBy?: walletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallets model
   */
  readonly fields: walletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet_network_tokens<T extends wallets$wallet_network_tokensArgs<ExtArgs> = {}>(args?: Subset<T, wallets$wallet_network_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_network_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallet_networks<T extends wallets$wallet_networksArgs<ExtArgs> = {}>(args?: Subset<T, wallets$wallet_networksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wallet_networksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends wallets$usersArgs<ExtArgs> = {}>(args?: Subset<T, wallets$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallets model
   */
  interface walletsFieldRefs {
    readonly wallet_id: FieldRef<"wallets", 'String'>
    readonly user_id: FieldRef<"wallets", 'String'>
    readonly wallet_name: FieldRef<"wallets", 'String'>
    readonly wallet_balance: FieldRef<"wallets", 'Decimal'>
    readonly wallet_address: FieldRef<"wallets", 'String'>
    readonly wallet_phrase: FieldRef<"wallets", 'String'>
    readonly created_at: FieldRef<"wallets", 'DateTime'>
    readonly updated_at: FieldRef<"wallets", 'DateTime'>
    readonly deleted_at: FieldRef<"wallets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallets findUnique
   */
  export type walletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findUniqueOrThrow
   */
  export type walletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets findFirst
   */
  export type walletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findFirstOrThrow
   */
  export type walletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets findMany
   */
  export type walletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletsOrderByWithRelationInput | walletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * wallets create
   */
  export type walletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to create a wallets.
     */
    data: XOR<walletsCreateInput, walletsUncheckedCreateInput>
  }

  /**
   * wallets createMany
   */
  export type walletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallets createManyAndReturn
   */
  export type walletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletsCreateManyInput | walletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets update
   */
  export type walletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The data needed to update a wallets.
     */
    data: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
    /**
     * Choose, which wallets to update.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets updateMany
   */
  export type walletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallets updateManyAndReturn
   */
  export type walletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallets upsert
   */
  export type walletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * The filter to search for the wallets to update in case it exists.
     */
    where: walletsWhereUniqueInput
    /**
     * In case the wallets found by the `where` argument doesn't exist, create a new wallets with this data.
     */
    create: XOR<walletsCreateInput, walletsUncheckedCreateInput>
    /**
     * In case the wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletsUpdateInput, walletsUncheckedUpdateInput>
  }

  /**
   * wallets delete
   */
  export type walletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
    /**
     * Filter which wallets to delete.
     */
    where: walletsWhereUniqueInput
  }

  /**
   * wallets deleteMany
   */
  export type walletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletsWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallets.wallet_network_tokens
   */
  export type wallets$wallet_network_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_network_tokens
     */
    select?: wallet_network_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_network_tokens
     */
    omit?: wallet_network_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_network_tokensInclude<ExtArgs> | null
    where?: wallet_network_tokensWhereInput
    orderBy?: wallet_network_tokensOrderByWithRelationInput | wallet_network_tokensOrderByWithRelationInput[]
    cursor?: wallet_network_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wallet_network_tokensScalarFieldEnum | Wallet_network_tokensScalarFieldEnum[]
  }

  /**
   * wallets.wallet_networks
   */
  export type wallets$wallet_networksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet_networks
     */
    select?: wallet_networksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet_networks
     */
    omit?: wallet_networksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wallet_networksInclude<ExtArgs> | null
    where?: wallet_networksWhereInput
    orderBy?: wallet_networksOrderByWithRelationInput | wallet_networksOrderByWithRelationInput[]
    cursor?: wallet_networksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Wallet_networksScalarFieldEnum | Wallet_networksScalarFieldEnum[]
  }

  /**
   * wallets.users
   */
  export type wallets$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * wallets without action
   */
  export type walletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallets
     */
    select?: walletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallets
     */
    omit?: walletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Audit_logsScalarFieldEnum: {
    log_id: 'log_id',
    user_id: 'user_id',
    action: 'action',
    target_table: 'target_table',
    target_id: 'target_id',
    created_at: 'created_at'
  };

  export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum]


  export const NetworksScalarFieldEnum: {
    network_id: 'network_id',
    network_name: 'network_name',
    symbol: 'symbol',
    thumbnail: 'thumbnail',
    chain_id: 'chain_id',
    block_explorer_url: 'block_explorer_url',
    price_feed_id: 'price_feed_id',
    is_default_network: 'is_default_network',
    is_testnet: 'is_testnet',
    rpc_url: 'rpc_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    creator_id: 'creator_id',
    isEVM: 'isEVM'
  };

  export type NetworksScalarFieldEnum = (typeof NetworksScalarFieldEnum)[keyof typeof NetworksScalarFieldEnum]


  export const Token_networksScalarFieldEnum: {
    token_network_id: 'token_network_id',
    token_id: 'token_id',
    network_id: 'network_id',
    contract_address: 'contract_address'
  };

  export type Token_networksScalarFieldEnum = (typeof Token_networksScalarFieldEnum)[keyof typeof Token_networksScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    token_id: 'token_id',
    token_name: 'token_name',
    symbol: 'symbol',
    decimals: 'decimals',
    thumbnail: 'thumbnail',
    price_feed_id: 'price_feed_id',
    percent_change_24h: 'percent_change_24h',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    avatar: 'avatar',
    bio: 'bio',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    notiToken: 'notiToken'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Wallet_network_tokensScalarFieldEnum: {
    wallet_network_token_id: 'wallet_network_token_id',
    token_network_id: 'token_network_id',
    wallet_id: 'wallet_id',
    balance: 'balance',
    updated_at: 'updated_at'
  };

  export type Wallet_network_tokensScalarFieldEnum = (typeof Wallet_network_tokensScalarFieldEnum)[keyof typeof Wallet_network_tokensScalarFieldEnum]


  export const Wallet_networksScalarFieldEnum: {
    wallet_network_id: 'wallet_network_id',
    wallet_id: 'wallet_id',
    network_id: 'network_id',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Wallet_networksScalarFieldEnum = (typeof Wallet_networksScalarFieldEnum)[keyof typeof Wallet_networksScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    wallet_id: 'wallet_id',
    user_id: 'user_id',
    wallet_name: 'wallet_name',
    wallet_balance: 'wallet_balance',
    wallet_address: 'wallet_address',
    wallet_phrase: 'wallet_phrase',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type audit_logsWhereInput = {
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    log_id?: UuidFilter<"audit_logs"> | string
    user_id?: UuidNullableFilter<"audit_logs"> | string | null
    action?: StringFilter<"audit_logs"> | string
    target_table?: StringNullableFilter<"audit_logs"> | string | null
    target_id?: UuidNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type audit_logsOrderByWithRelationInput = {
    log_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    target_table?: SortOrderInput | SortOrder
    target_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type audit_logsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: string
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    user_id?: UuidNullableFilter<"audit_logs"> | string | null
    action?: StringFilter<"audit_logs"> | string
    target_table?: StringNullableFilter<"audit_logs"> | string | null
    target_id?: UuidNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "log_id">

  export type audit_logsOrderByWithAggregationInput = {
    log_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    target_table?: SortOrderInput | SortOrder
    target_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: audit_logsCountOrderByAggregateInput
    _max?: audit_logsMaxOrderByAggregateInput
    _min?: audit_logsMinOrderByAggregateInput
  }

  export type audit_logsScalarWhereWithAggregatesInput = {
    AND?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    OR?: audit_logsScalarWhereWithAggregatesInput[]
    NOT?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    log_id?: UuidWithAggregatesFilter<"audit_logs"> | string
    user_id?: UuidNullableWithAggregatesFilter<"audit_logs"> | string | null
    action?: StringWithAggregatesFilter<"audit_logs"> | string
    target_table?: StringNullableWithAggregatesFilter<"audit_logs"> | string | null
    target_id?: UuidNullableWithAggregatesFilter<"audit_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"audit_logs"> | Date | string | null
  }

  export type networksWhereInput = {
    AND?: networksWhereInput | networksWhereInput[]
    OR?: networksWhereInput[]
    NOT?: networksWhereInput | networksWhereInput[]
    network_id?: UuidFilter<"networks"> | string
    network_name?: StringFilter<"networks"> | string
    symbol?: StringFilter<"networks"> | string
    thumbnail?: StringNullableFilter<"networks"> | string | null
    chain_id?: StringFilter<"networks"> | string
    block_explorer_url?: StringNullableFilter<"networks"> | string | null
    price_feed_id?: StringNullableFilter<"networks"> | string | null
    is_default_network?: BoolFilter<"networks"> | boolean
    is_testnet?: BoolFilter<"networks"> | boolean
    rpc_url?: StringFilter<"networks"> | string
    created_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    creator_id?: UuidNullableFilter<"networks"> | string | null
    isEVM?: BoolFilter<"networks"> | boolean
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    token_networks?: Token_networksListRelationFilter
    wallet_networks?: Wallet_networksListRelationFilter
  }

  export type networksOrderByWithRelationInput = {
    network_id?: SortOrder
    network_name?: SortOrder
    symbol?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    chain_id?: SortOrder
    block_explorer_url?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    rpc_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    isEVM?: SortOrder
    users?: usersOrderByWithRelationInput
    token_networks?: token_networksOrderByRelationAggregateInput
    wallet_networks?: wallet_networksOrderByRelationAggregateInput
  }

  export type networksWhereUniqueInput = Prisma.AtLeast<{
    network_id?: string
    AND?: networksWhereInput | networksWhereInput[]
    OR?: networksWhereInput[]
    NOT?: networksWhereInput | networksWhereInput[]
    network_name?: StringFilter<"networks"> | string
    symbol?: StringFilter<"networks"> | string
    thumbnail?: StringNullableFilter<"networks"> | string | null
    chain_id?: StringFilter<"networks"> | string
    block_explorer_url?: StringNullableFilter<"networks"> | string | null
    price_feed_id?: StringNullableFilter<"networks"> | string | null
    is_default_network?: BoolFilter<"networks"> | boolean
    is_testnet?: BoolFilter<"networks"> | boolean
    rpc_url?: StringFilter<"networks"> | string
    created_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    creator_id?: UuidNullableFilter<"networks"> | string | null
    isEVM?: BoolFilter<"networks"> | boolean
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    token_networks?: Token_networksListRelationFilter
    wallet_networks?: Wallet_networksListRelationFilter
  }, "network_id">

  export type networksOrderByWithAggregationInput = {
    network_id?: SortOrder
    network_name?: SortOrder
    symbol?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    chain_id?: SortOrder
    block_explorer_url?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    rpc_url?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    isEVM?: SortOrder
    _count?: networksCountOrderByAggregateInput
    _max?: networksMaxOrderByAggregateInput
    _min?: networksMinOrderByAggregateInput
  }

  export type networksScalarWhereWithAggregatesInput = {
    AND?: networksScalarWhereWithAggregatesInput | networksScalarWhereWithAggregatesInput[]
    OR?: networksScalarWhereWithAggregatesInput[]
    NOT?: networksScalarWhereWithAggregatesInput | networksScalarWhereWithAggregatesInput[]
    network_id?: UuidWithAggregatesFilter<"networks"> | string
    network_name?: StringWithAggregatesFilter<"networks"> | string
    symbol?: StringWithAggregatesFilter<"networks"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"networks"> | string | null
    chain_id?: StringWithAggregatesFilter<"networks"> | string
    block_explorer_url?: StringNullableWithAggregatesFilter<"networks"> | string | null
    price_feed_id?: StringNullableWithAggregatesFilter<"networks"> | string | null
    is_default_network?: BoolWithAggregatesFilter<"networks"> | boolean
    is_testnet?: BoolWithAggregatesFilter<"networks"> | boolean
    rpc_url?: StringWithAggregatesFilter<"networks"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"networks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"networks"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"networks"> | Date | string | null
    creator_id?: UuidNullableWithAggregatesFilter<"networks"> | string | null
    isEVM?: BoolWithAggregatesFilter<"networks"> | boolean
  }

  export type token_networksWhereInput = {
    AND?: token_networksWhereInput | token_networksWhereInput[]
    OR?: token_networksWhereInput[]
    NOT?: token_networksWhereInput | token_networksWhereInput[]
    token_network_id?: UuidFilter<"token_networks"> | string
    token_id?: UuidNullableFilter<"token_networks"> | string | null
    network_id?: UuidNullableFilter<"token_networks"> | string | null
    contract_address?: StringFilter<"token_networks"> | string
    networks?: XOR<NetworksNullableScalarRelationFilter, networksWhereInput> | null
    tokens?: XOR<TokensNullableScalarRelationFilter, tokensWhereInput> | null
    wallet_network_tokens?: Wallet_network_tokensListRelationFilter
  }

  export type token_networksOrderByWithRelationInput = {
    token_network_id?: SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    contract_address?: SortOrder
    networks?: networksOrderByWithRelationInput
    tokens?: tokensOrderByWithRelationInput
    wallet_network_tokens?: wallet_network_tokensOrderByRelationAggregateInput
  }

  export type token_networksWhereUniqueInput = Prisma.AtLeast<{
    token_network_id?: string
    token_id_network_id?: token_networksToken_idNetwork_idCompoundUniqueInput
    AND?: token_networksWhereInput | token_networksWhereInput[]
    OR?: token_networksWhereInput[]
    NOT?: token_networksWhereInput | token_networksWhereInput[]
    token_id?: UuidNullableFilter<"token_networks"> | string | null
    network_id?: UuidNullableFilter<"token_networks"> | string | null
    contract_address?: StringFilter<"token_networks"> | string
    networks?: XOR<NetworksNullableScalarRelationFilter, networksWhereInput> | null
    tokens?: XOR<TokensNullableScalarRelationFilter, tokensWhereInput> | null
    wallet_network_tokens?: Wallet_network_tokensListRelationFilter
  }, "token_network_id" | "token_id_network_id">

  export type token_networksOrderByWithAggregationInput = {
    token_network_id?: SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    contract_address?: SortOrder
    _count?: token_networksCountOrderByAggregateInput
    _max?: token_networksMaxOrderByAggregateInput
    _min?: token_networksMinOrderByAggregateInput
  }

  export type token_networksScalarWhereWithAggregatesInput = {
    AND?: token_networksScalarWhereWithAggregatesInput | token_networksScalarWhereWithAggregatesInput[]
    OR?: token_networksScalarWhereWithAggregatesInput[]
    NOT?: token_networksScalarWhereWithAggregatesInput | token_networksScalarWhereWithAggregatesInput[]
    token_network_id?: UuidWithAggregatesFilter<"token_networks"> | string
    token_id?: UuidNullableWithAggregatesFilter<"token_networks"> | string | null
    network_id?: UuidNullableWithAggregatesFilter<"token_networks"> | string | null
    contract_address?: StringWithAggregatesFilter<"token_networks"> | string
  }

  export type tokensWhereInput = {
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    token_id?: UuidFilter<"tokens"> | string
    token_name?: StringFilter<"tokens"> | string
    symbol?: StringFilter<"tokens"> | string
    decimals?: IntFilter<"tokens"> | number
    thumbnail?: StringNullableFilter<"tokens"> | string | null
    price_feed_id?: StringNullableFilter<"tokens"> | string | null
    percent_change_24h?: StringNullableFilter<"tokens"> | string | null
    created_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    token_networks?: Token_networksListRelationFilter
  }

  export type tokensOrderByWithRelationInput = {
    token_id?: SortOrder
    token_name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    percent_change_24h?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    token_networks?: token_networksOrderByRelationAggregateInput
  }

  export type tokensWhereUniqueInput = Prisma.AtLeast<{
    token_id?: string
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    token_name?: StringFilter<"tokens"> | string
    symbol?: StringFilter<"tokens"> | string
    decimals?: IntFilter<"tokens"> | number
    thumbnail?: StringNullableFilter<"tokens"> | string | null
    price_feed_id?: StringNullableFilter<"tokens"> | string | null
    percent_change_24h?: StringNullableFilter<"tokens"> | string | null
    created_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"tokens"> | Date | string | null
    token_networks?: Token_networksListRelationFilter
  }, "token_id">

  export type tokensOrderByWithAggregationInput = {
    token_id?: SortOrder
    token_name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    percent_change_24h?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: tokensCountOrderByAggregateInput
    _avg?: tokensAvgOrderByAggregateInput
    _max?: tokensMaxOrderByAggregateInput
    _min?: tokensMinOrderByAggregateInput
    _sum?: tokensSumOrderByAggregateInput
  }

  export type tokensScalarWhereWithAggregatesInput = {
    AND?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    OR?: tokensScalarWhereWithAggregatesInput[]
    NOT?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    token_id?: UuidWithAggregatesFilter<"tokens"> | string
    token_name?: StringWithAggregatesFilter<"tokens"> | string
    symbol?: StringWithAggregatesFilter<"tokens"> | string
    decimals?: IntWithAggregatesFilter<"tokens"> | number
    thumbnail?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    price_feed_id?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    percent_change_24h?: StringNullableWithAggregatesFilter<"tokens"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tokens"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tokens"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"tokens"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    notiToken?: StringNullableFilter<"users"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    networks?: NetworksListRelationFilter
    wallets?: WalletsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    notiToken?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    networks?: networksOrderByRelationAggregateInput
    wallets?: walletsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    notiToken?: StringNullableFilter<"users"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    networks?: NetworksListRelationFilter
    wallets?: WalletsListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    notiToken?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    notiToken?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type wallet_network_tokensWhereInput = {
    AND?: wallet_network_tokensWhereInput | wallet_network_tokensWhereInput[]
    OR?: wallet_network_tokensWhereInput[]
    NOT?: wallet_network_tokensWhereInput | wallet_network_tokensWhereInput[]
    wallet_network_token_id?: UuidFilter<"wallet_network_tokens"> | string
    token_network_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    wallet_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    balance?: DecimalFilter<"wallet_network_tokens"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableFilter<"wallet_network_tokens"> | Date | string | null
    token_networks?: XOR<Token_networksNullableScalarRelationFilter, token_networksWhereInput> | null
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }

  export type wallet_network_tokensOrderByWithRelationInput = {
    wallet_network_token_id?: SortOrder
    token_network_id?: SortOrderInput | SortOrder
    wallet_id?: SortOrderInput | SortOrder
    balance?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    token_networks?: token_networksOrderByWithRelationInput
    wallets?: walletsOrderByWithRelationInput
  }

  export type wallet_network_tokensWhereUniqueInput = Prisma.AtLeast<{
    wallet_network_token_id?: string
    token_network_id_wallet_id?: wallet_network_tokensToken_network_idWallet_idCompoundUniqueInput
    AND?: wallet_network_tokensWhereInput | wallet_network_tokensWhereInput[]
    OR?: wallet_network_tokensWhereInput[]
    NOT?: wallet_network_tokensWhereInput | wallet_network_tokensWhereInput[]
    token_network_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    wallet_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    balance?: DecimalFilter<"wallet_network_tokens"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableFilter<"wallet_network_tokens"> | Date | string | null
    token_networks?: XOR<Token_networksNullableScalarRelationFilter, token_networksWhereInput> | null
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }, "wallet_network_token_id" | "token_network_id_wallet_id">

  export type wallet_network_tokensOrderByWithAggregationInput = {
    wallet_network_token_id?: SortOrder
    token_network_id?: SortOrderInput | SortOrder
    wallet_id?: SortOrderInput | SortOrder
    balance?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: wallet_network_tokensCountOrderByAggregateInput
    _avg?: wallet_network_tokensAvgOrderByAggregateInput
    _max?: wallet_network_tokensMaxOrderByAggregateInput
    _min?: wallet_network_tokensMinOrderByAggregateInput
    _sum?: wallet_network_tokensSumOrderByAggregateInput
  }

  export type wallet_network_tokensScalarWhereWithAggregatesInput = {
    AND?: wallet_network_tokensScalarWhereWithAggregatesInput | wallet_network_tokensScalarWhereWithAggregatesInput[]
    OR?: wallet_network_tokensScalarWhereWithAggregatesInput[]
    NOT?: wallet_network_tokensScalarWhereWithAggregatesInput | wallet_network_tokensScalarWhereWithAggregatesInput[]
    wallet_network_token_id?: UuidWithAggregatesFilter<"wallet_network_tokens"> | string
    token_network_id?: UuidNullableWithAggregatesFilter<"wallet_network_tokens"> | string | null
    wallet_id?: UuidNullableWithAggregatesFilter<"wallet_network_tokens"> | string | null
    balance?: DecimalWithAggregatesFilter<"wallet_network_tokens"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"wallet_network_tokens"> | Date | string | null
  }

  export type wallet_networksWhereInput = {
    AND?: wallet_networksWhereInput | wallet_networksWhereInput[]
    OR?: wallet_networksWhereInput[]
    NOT?: wallet_networksWhereInput | wallet_networksWhereInput[]
    wallet_network_id?: UuidFilter<"wallet_networks"> | string
    wallet_id?: UuidNullableFilter<"wallet_networks"> | string | null
    network_id?: UuidNullableFilter<"wallet_networks"> | string | null
    address?: StringFilter<"wallet_networks"> | string
    created_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
    networks?: XOR<NetworksNullableScalarRelationFilter, networksWhereInput> | null
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }

  export type wallet_networksOrderByWithRelationInput = {
    wallet_network_id?: SortOrder
    wallet_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    networks?: networksOrderByWithRelationInput
    wallets?: walletsOrderByWithRelationInput
  }

  export type wallet_networksWhereUniqueInput = Prisma.AtLeast<{
    wallet_network_id?: string
    wallet_id_network_id?: wallet_networksWallet_idNetwork_idCompoundUniqueInput
    AND?: wallet_networksWhereInput | wallet_networksWhereInput[]
    OR?: wallet_networksWhereInput[]
    NOT?: wallet_networksWhereInput | wallet_networksWhereInput[]
    wallet_id?: UuidNullableFilter<"wallet_networks"> | string | null
    network_id?: UuidNullableFilter<"wallet_networks"> | string | null
    address?: StringFilter<"wallet_networks"> | string
    created_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
    networks?: XOR<NetworksNullableScalarRelationFilter, networksWhereInput> | null
    wallets?: XOR<WalletsNullableScalarRelationFilter, walletsWhereInput> | null
  }, "wallet_network_id" | "wallet_id_network_id">

  export type wallet_networksOrderByWithAggregationInput = {
    wallet_network_id?: SortOrder
    wallet_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: wallet_networksCountOrderByAggregateInput
    _max?: wallet_networksMaxOrderByAggregateInput
    _min?: wallet_networksMinOrderByAggregateInput
  }

  export type wallet_networksScalarWhereWithAggregatesInput = {
    AND?: wallet_networksScalarWhereWithAggregatesInput | wallet_networksScalarWhereWithAggregatesInput[]
    OR?: wallet_networksScalarWhereWithAggregatesInput[]
    NOT?: wallet_networksScalarWhereWithAggregatesInput | wallet_networksScalarWhereWithAggregatesInput[]
    wallet_network_id?: UuidWithAggregatesFilter<"wallet_networks"> | string
    wallet_id?: UuidNullableWithAggregatesFilter<"wallet_networks"> | string | null
    network_id?: UuidNullableWithAggregatesFilter<"wallet_networks"> | string | null
    address?: StringWithAggregatesFilter<"wallet_networks"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"wallet_networks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"wallet_networks"> | Date | string | null
  }

  export type walletsWhereInput = {
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    wallet_id?: UuidFilter<"wallets"> | string
    user_id?: UuidNullableFilter<"wallets"> | string | null
    wallet_name?: StringFilter<"wallets"> | string
    wallet_balance?: DecimalFilter<"wallets"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFilter<"wallets"> | string
    wallet_phrase?: StringNullableFilter<"wallets"> | string | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    wallet_network_tokens?: Wallet_network_tokensListRelationFilter
    wallet_networks?: Wallet_networksListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type walletsOrderByWithRelationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    wallet_name?: SortOrder
    wallet_balance?: SortOrder
    wallet_address?: SortOrder
    wallet_phrase?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    wallet_network_tokens?: wallet_network_tokensOrderByRelationAggregateInput
    wallet_networks?: wallet_networksOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type walletsWhereUniqueInput = Prisma.AtLeast<{
    wallet_id?: string
    AND?: walletsWhereInput | walletsWhereInput[]
    OR?: walletsWhereInput[]
    NOT?: walletsWhereInput | walletsWhereInput[]
    user_id?: UuidNullableFilter<"wallets"> | string | null
    wallet_name?: StringFilter<"wallets"> | string
    wallet_balance?: DecimalFilter<"wallets"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFilter<"wallets"> | string
    wallet_phrase?: StringNullableFilter<"wallets"> | string | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    wallet_network_tokens?: Wallet_network_tokensListRelationFilter
    wallet_networks?: Wallet_networksListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "wallet_id">

  export type walletsOrderByWithAggregationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    wallet_name?: SortOrder
    wallet_balance?: SortOrder
    wallet_address?: SortOrder
    wallet_phrase?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: walletsCountOrderByAggregateInput
    _avg?: walletsAvgOrderByAggregateInput
    _max?: walletsMaxOrderByAggregateInput
    _min?: walletsMinOrderByAggregateInput
    _sum?: walletsSumOrderByAggregateInput
  }

  export type walletsScalarWhereWithAggregatesInput = {
    AND?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    OR?: walletsScalarWhereWithAggregatesInput[]
    NOT?: walletsScalarWhereWithAggregatesInput | walletsScalarWhereWithAggregatesInput[]
    wallet_id?: UuidWithAggregatesFilter<"wallets"> | string
    user_id?: UuidNullableWithAggregatesFilter<"wallets"> | string | null
    wallet_name?: StringWithAggregatesFilter<"wallets"> | string
    wallet_balance?: DecimalWithAggregatesFilter<"wallets"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringWithAggregatesFilter<"wallets"> | string
    wallet_phrase?: StringNullableWithAggregatesFilter<"wallets"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null
  }

  export type audit_logsCreateInput = {
    log_id?: string
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateInput = {
    log_id?: string
    user_id?: string | null
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsCreateManyInput = {
    log_id?: string
    user_id?: string | null
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsUpdateManyMutationInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type networksCreateInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
    users?: usersCreateNestedOneWithoutNetworksInput
    token_networks?: token_networksCreateNestedManyWithoutNetworksInput
    wallet_networks?: wallet_networksCreateNestedManyWithoutNetworksInput
  }

  export type networksUncheckedCreateInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    creator_id?: string | null
    isEVM?: boolean
    token_networks?: token_networksUncheckedCreateNestedManyWithoutNetworksInput
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutNetworksInput
  }

  export type networksUpdateInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneWithoutNetworksNestedInput
    token_networks?: token_networksUpdateManyWithoutNetworksNestedInput
    wallet_networks?: wallet_networksUpdateManyWithoutNetworksNestedInput
  }

  export type networksUncheckedUpdateInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    token_networks?: token_networksUncheckedUpdateManyWithoutNetworksNestedInput
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutNetworksNestedInput
  }

  export type networksCreateManyInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    creator_id?: string | null
    isEVM?: boolean
  }

  export type networksUpdateManyMutationInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
  }

  export type networksUncheckedUpdateManyInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
  }

  export type token_networksCreateInput = {
    token_network_id?: string
    contract_address: string
    networks?: networksCreateNestedOneWithoutToken_networksInput
    tokens?: tokensCreateNestedOneWithoutToken_networksInput
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksUncheckedCreateInput = {
    token_network_id?: string
    token_id?: string | null
    network_id?: string | null
    contract_address: string
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksUpdateInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    networks?: networksUpdateOneWithoutToken_networksNestedInput
    tokens?: tokensUpdateOneWithoutToken_networksNestedInput
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksCreateManyInput = {
    token_network_id?: string
    token_id?: string | null
    network_id?: string | null
    contract_address: string
  }

  export type token_networksUpdateManyMutationInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type token_networksUncheckedUpdateManyInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type tokensCreateInput = {
    token_id?: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail?: string | null
    price_feed_id?: string | null
    percent_change_24h?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    token_networks?: token_networksCreateNestedManyWithoutTokensInput
  }

  export type tokensUncheckedCreateInput = {
    token_id?: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail?: string | null
    price_feed_id?: string | null
    percent_change_24h?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    token_networks?: token_networksUncheckedCreateNestedManyWithoutTokensInput
  }

  export type tokensUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_networks?: token_networksUpdateManyWithoutTokensNestedInput
  }

  export type tokensUncheckedUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_networks?: token_networksUncheckedUpdateManyWithoutTokensNestedInput
  }

  export type tokensCreateManyInput = {
    token_id?: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail?: string | null
    price_feed_id?: string | null
    percent_change_24h?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type tokensUpdateManyMutationInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokensUncheckedUpdateManyInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type wallet_network_tokensCreateInput = {
    wallet_network_token_id?: string
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
    token_networks?: token_networksCreateNestedOneWithoutWallet_network_tokensInput
    wallets?: walletsCreateNestedOneWithoutWallet_network_tokensInput
  }

  export type wallet_network_tokensUncheckedCreateInput = {
    wallet_network_token_id?: string
    token_network_id?: string | null
    wallet_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensUpdateInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_networks?: token_networksUpdateOneWithoutWallet_network_tokensNestedInput
    wallets?: walletsUpdateOneWithoutWallet_network_tokensNestedInput
  }

  export type wallet_network_tokensUncheckedUpdateInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensCreateManyInput = {
    wallet_network_token_id?: string
    token_network_id?: string | null
    wallet_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensUpdateManyMutationInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensUncheckedUpdateManyInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksCreateInput = {
    wallet_network_id?: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    networks?: networksCreateNestedOneWithoutWallet_networksInput
    wallets?: walletsCreateNestedOneWithoutWallet_networksInput
  }

  export type wallet_networksUncheckedCreateInput = {
    wallet_network_id?: string
    wallet_id?: string | null
    network_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wallet_networksUpdateInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    networks?: networksUpdateOneWithoutWallet_networksNestedInput
    wallets?: walletsUpdateOneWithoutWallet_networksNestedInput
  }

  export type wallet_networksUncheckedUpdateInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksCreateManyInput = {
    wallet_network_id?: string
    wallet_id?: string | null
    network_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wallet_networksUpdateManyMutationInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksUncheckedUpdateManyInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsCreateInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutWalletsInput
    wallet_networks?: wallet_networksCreateNestedManyWithoutWalletsInput
    users?: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateInput = {
    wallet_id?: string
    user_id?: string | null
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutWalletsInput
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutWalletsInput
  }

  export type walletsUpdateInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutWalletsNestedInput
    wallet_networks?: wallet_networksUpdateManyWithoutWalletsNestedInput
    users?: usersUpdateOneWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutWalletsNestedInput
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutWalletsNestedInput
  }

  export type walletsCreateManyInput = {
    wallet_id?: string
    user_id?: string | null
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type walletsUpdateManyMutationInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type walletsUncheckedUpdateManyInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_logsCountOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    target_table?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    target_table?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logsMinOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    target_table?: SortOrder
    target_id?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Token_networksListRelationFilter = {
    every?: token_networksWhereInput
    some?: token_networksWhereInput
    none?: token_networksWhereInput
  }

  export type Wallet_networksListRelationFilter = {
    every?: wallet_networksWhereInput
    some?: wallet_networksWhereInput
    none?: wallet_networksWhereInput
  }

  export type token_networksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type wallet_networksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type networksCountOrderByAggregateInput = {
    network_id?: SortOrder
    network_name?: SortOrder
    symbol?: SortOrder
    thumbnail?: SortOrder
    chain_id?: SortOrder
    block_explorer_url?: SortOrder
    price_feed_id?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    rpc_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    creator_id?: SortOrder
    isEVM?: SortOrder
  }

  export type networksMaxOrderByAggregateInput = {
    network_id?: SortOrder
    network_name?: SortOrder
    symbol?: SortOrder
    thumbnail?: SortOrder
    chain_id?: SortOrder
    block_explorer_url?: SortOrder
    price_feed_id?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    rpc_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    creator_id?: SortOrder
    isEVM?: SortOrder
  }

  export type networksMinOrderByAggregateInput = {
    network_id?: SortOrder
    network_name?: SortOrder
    symbol?: SortOrder
    thumbnail?: SortOrder
    chain_id?: SortOrder
    block_explorer_url?: SortOrder
    price_feed_id?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    rpc_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    creator_id?: SortOrder
    isEVM?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NetworksNullableScalarRelationFilter = {
    is?: networksWhereInput | null
    isNot?: networksWhereInput | null
  }

  export type TokensNullableScalarRelationFilter = {
    is?: tokensWhereInput | null
    isNot?: tokensWhereInput | null
  }

  export type Wallet_network_tokensListRelationFilter = {
    every?: wallet_network_tokensWhereInput
    some?: wallet_network_tokensWhereInput
    none?: wallet_network_tokensWhereInput
  }

  export type wallet_network_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type token_networksToken_idNetwork_idCompoundUniqueInput = {
    token_id: string
    network_id: string
  }

  export type token_networksCountOrderByAggregateInput = {
    token_network_id?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    contract_address?: SortOrder
  }

  export type token_networksMaxOrderByAggregateInput = {
    token_network_id?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    contract_address?: SortOrder
  }

  export type token_networksMinOrderByAggregateInput = {
    token_network_id?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    contract_address?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type tokensCountOrderByAggregateInput = {
    token_id?: SortOrder
    token_name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    percent_change_24h?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tokensAvgOrderByAggregateInput = {
    decimals?: SortOrder
  }

  export type tokensMaxOrderByAggregateInput = {
    token_id?: SortOrder
    token_name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    percent_change_24h?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tokensMinOrderByAggregateInput = {
    token_id?: SortOrder
    token_name?: SortOrder
    symbol?: SortOrder
    decimals?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    percent_change_24h?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tokensSumOrderByAggregateInput = {
    decimals?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Audit_logsListRelationFilter = {
    every?: audit_logsWhereInput
    some?: audit_logsWhereInput
    none?: audit_logsWhereInput
  }

  export type NetworksListRelationFilter = {
    every?: networksWhereInput
    some?: networksWhereInput
    none?: networksWhereInput
  }

  export type WalletsListRelationFilter = {
    every?: walletsWhereInput
    some?: walletsWhereInput
    none?: walletsWhereInput
  }

  export type audit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type networksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type walletsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    notiToken?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    notiToken?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    notiToken?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Token_networksNullableScalarRelationFilter = {
    is?: token_networksWhereInput | null
    isNot?: token_networksWhereInput | null
  }

  export type WalletsNullableScalarRelationFilter = {
    is?: walletsWhereInput | null
    isNot?: walletsWhereInput | null
  }

  export type wallet_network_tokensToken_network_idWallet_idCompoundUniqueInput = {
    token_network_id: string
    wallet_id: string
  }

  export type wallet_network_tokensCountOrderByAggregateInput = {
    wallet_network_token_id?: SortOrder
    token_network_id?: SortOrder
    wallet_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type wallet_network_tokensAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type wallet_network_tokensMaxOrderByAggregateInput = {
    wallet_network_token_id?: SortOrder
    token_network_id?: SortOrder
    wallet_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type wallet_network_tokensMinOrderByAggregateInput = {
    wallet_network_token_id?: SortOrder
    token_network_id?: SortOrder
    wallet_id?: SortOrder
    balance?: SortOrder
    updated_at?: SortOrder
  }

  export type wallet_network_tokensSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type wallet_networksWallet_idNetwork_idCompoundUniqueInput = {
    wallet_id: string
    network_id: string
  }

  export type wallet_networksCountOrderByAggregateInput = {
    wallet_network_id?: SortOrder
    wallet_id?: SortOrder
    network_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type wallet_networksMaxOrderByAggregateInput = {
    wallet_network_id?: SortOrder
    wallet_id?: SortOrder
    network_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type wallet_networksMinOrderByAggregateInput = {
    wallet_network_id?: SortOrder
    wallet_id?: SortOrder
    network_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type walletsCountOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    wallet_name?: SortOrder
    wallet_balance?: SortOrder
    wallet_address?: SortOrder
    wallet_phrase?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type walletsAvgOrderByAggregateInput = {
    wallet_balance?: SortOrder
  }

  export type walletsMaxOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    wallet_name?: SortOrder
    wallet_balance?: SortOrder
    wallet_address?: SortOrder
    wallet_phrase?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type walletsMinOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    wallet_name?: SortOrder
    wallet_balance?: SortOrder
    wallet_address?: SortOrder
    wallet_phrase?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type walletsSumOrderByAggregateInput = {
    wallet_balance?: SortOrder
  }

  export type usersCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAudit_logsInput
    upsert?: usersUpsertWithoutAudit_logsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAudit_logsInput, usersUpdateWithoutAudit_logsInput>, usersUncheckedUpdateWithoutAudit_logsInput>
  }

  export type usersCreateNestedOneWithoutNetworksInput = {
    create?: XOR<usersCreateWithoutNetworksInput, usersUncheckedCreateWithoutNetworksInput>
    connectOrCreate?: usersCreateOrConnectWithoutNetworksInput
    connect?: usersWhereUniqueInput
  }

  export type token_networksCreateNestedManyWithoutNetworksInput = {
    create?: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput> | token_networksCreateWithoutNetworksInput[] | token_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutNetworksInput | token_networksCreateOrConnectWithoutNetworksInput[]
    createMany?: token_networksCreateManyNetworksInputEnvelope
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
  }

  export type wallet_networksCreateNestedManyWithoutNetworksInput = {
    create?: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput> | wallet_networksCreateWithoutNetworksInput[] | wallet_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutNetworksInput | wallet_networksCreateOrConnectWithoutNetworksInput[]
    createMany?: wallet_networksCreateManyNetworksInputEnvelope
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
  }

  export type token_networksUncheckedCreateNestedManyWithoutNetworksInput = {
    create?: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput> | token_networksCreateWithoutNetworksInput[] | token_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutNetworksInput | token_networksCreateOrConnectWithoutNetworksInput[]
    createMany?: token_networksCreateManyNetworksInputEnvelope
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
  }

  export type wallet_networksUncheckedCreateNestedManyWithoutNetworksInput = {
    create?: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput> | wallet_networksCreateWithoutNetworksInput[] | wallet_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutNetworksInput | wallet_networksCreateOrConnectWithoutNetworksInput[]
    createMany?: wallet_networksCreateManyNetworksInputEnvelope
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneWithoutNetworksNestedInput = {
    create?: XOR<usersCreateWithoutNetworksInput, usersUncheckedCreateWithoutNetworksInput>
    connectOrCreate?: usersCreateOrConnectWithoutNetworksInput
    upsert?: usersUpsertWithoutNetworksInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNetworksInput, usersUpdateWithoutNetworksInput>, usersUncheckedUpdateWithoutNetworksInput>
  }

  export type token_networksUpdateManyWithoutNetworksNestedInput = {
    create?: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput> | token_networksCreateWithoutNetworksInput[] | token_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutNetworksInput | token_networksCreateOrConnectWithoutNetworksInput[]
    upsert?: token_networksUpsertWithWhereUniqueWithoutNetworksInput | token_networksUpsertWithWhereUniqueWithoutNetworksInput[]
    createMany?: token_networksCreateManyNetworksInputEnvelope
    set?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    disconnect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    delete?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    update?: token_networksUpdateWithWhereUniqueWithoutNetworksInput | token_networksUpdateWithWhereUniqueWithoutNetworksInput[]
    updateMany?: token_networksUpdateManyWithWhereWithoutNetworksInput | token_networksUpdateManyWithWhereWithoutNetworksInput[]
    deleteMany?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
  }

  export type wallet_networksUpdateManyWithoutNetworksNestedInput = {
    create?: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput> | wallet_networksCreateWithoutNetworksInput[] | wallet_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutNetworksInput | wallet_networksCreateOrConnectWithoutNetworksInput[]
    upsert?: wallet_networksUpsertWithWhereUniqueWithoutNetworksInput | wallet_networksUpsertWithWhereUniqueWithoutNetworksInput[]
    createMany?: wallet_networksCreateManyNetworksInputEnvelope
    set?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    disconnect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    delete?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    update?: wallet_networksUpdateWithWhereUniqueWithoutNetworksInput | wallet_networksUpdateWithWhereUniqueWithoutNetworksInput[]
    updateMany?: wallet_networksUpdateManyWithWhereWithoutNetworksInput | wallet_networksUpdateManyWithWhereWithoutNetworksInput[]
    deleteMany?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
  }

  export type token_networksUncheckedUpdateManyWithoutNetworksNestedInput = {
    create?: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput> | token_networksCreateWithoutNetworksInput[] | token_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutNetworksInput | token_networksCreateOrConnectWithoutNetworksInput[]
    upsert?: token_networksUpsertWithWhereUniqueWithoutNetworksInput | token_networksUpsertWithWhereUniqueWithoutNetworksInput[]
    createMany?: token_networksCreateManyNetworksInputEnvelope
    set?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    disconnect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    delete?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    update?: token_networksUpdateWithWhereUniqueWithoutNetworksInput | token_networksUpdateWithWhereUniqueWithoutNetworksInput[]
    updateMany?: token_networksUpdateManyWithWhereWithoutNetworksInput | token_networksUpdateManyWithWhereWithoutNetworksInput[]
    deleteMany?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
  }

  export type wallet_networksUncheckedUpdateManyWithoutNetworksNestedInput = {
    create?: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput> | wallet_networksCreateWithoutNetworksInput[] | wallet_networksUncheckedCreateWithoutNetworksInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutNetworksInput | wallet_networksCreateOrConnectWithoutNetworksInput[]
    upsert?: wallet_networksUpsertWithWhereUniqueWithoutNetworksInput | wallet_networksUpsertWithWhereUniqueWithoutNetworksInput[]
    createMany?: wallet_networksCreateManyNetworksInputEnvelope
    set?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    disconnect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    delete?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    update?: wallet_networksUpdateWithWhereUniqueWithoutNetworksInput | wallet_networksUpdateWithWhereUniqueWithoutNetworksInput[]
    updateMany?: wallet_networksUpdateManyWithWhereWithoutNetworksInput | wallet_networksUpdateManyWithWhereWithoutNetworksInput[]
    deleteMany?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
  }

  export type networksCreateNestedOneWithoutToken_networksInput = {
    create?: XOR<networksCreateWithoutToken_networksInput, networksUncheckedCreateWithoutToken_networksInput>
    connectOrCreate?: networksCreateOrConnectWithoutToken_networksInput
    connect?: networksWhereUniqueInput
  }

  export type tokensCreateNestedOneWithoutToken_networksInput = {
    create?: XOR<tokensCreateWithoutToken_networksInput, tokensUncheckedCreateWithoutToken_networksInput>
    connectOrCreate?: tokensCreateOrConnectWithoutToken_networksInput
    connect?: tokensWhereUniqueInput
  }

  export type wallet_network_tokensCreateNestedManyWithoutToken_networksInput = {
    create?: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput> | wallet_network_tokensCreateWithoutToken_networksInput[] | wallet_network_tokensUncheckedCreateWithoutToken_networksInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutToken_networksInput | wallet_network_tokensCreateOrConnectWithoutToken_networksInput[]
    createMany?: wallet_network_tokensCreateManyToken_networksInputEnvelope
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
  }

  export type wallet_network_tokensUncheckedCreateNestedManyWithoutToken_networksInput = {
    create?: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput> | wallet_network_tokensCreateWithoutToken_networksInput[] | wallet_network_tokensUncheckedCreateWithoutToken_networksInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutToken_networksInput | wallet_network_tokensCreateOrConnectWithoutToken_networksInput[]
    createMany?: wallet_network_tokensCreateManyToken_networksInputEnvelope
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
  }

  export type networksUpdateOneWithoutToken_networksNestedInput = {
    create?: XOR<networksCreateWithoutToken_networksInput, networksUncheckedCreateWithoutToken_networksInput>
    connectOrCreate?: networksCreateOrConnectWithoutToken_networksInput
    upsert?: networksUpsertWithoutToken_networksInput
    disconnect?: networksWhereInput | boolean
    delete?: networksWhereInput | boolean
    connect?: networksWhereUniqueInput
    update?: XOR<XOR<networksUpdateToOneWithWhereWithoutToken_networksInput, networksUpdateWithoutToken_networksInput>, networksUncheckedUpdateWithoutToken_networksInput>
  }

  export type tokensUpdateOneWithoutToken_networksNestedInput = {
    create?: XOR<tokensCreateWithoutToken_networksInput, tokensUncheckedCreateWithoutToken_networksInput>
    connectOrCreate?: tokensCreateOrConnectWithoutToken_networksInput
    upsert?: tokensUpsertWithoutToken_networksInput
    disconnect?: tokensWhereInput | boolean
    delete?: tokensWhereInput | boolean
    connect?: tokensWhereUniqueInput
    update?: XOR<XOR<tokensUpdateToOneWithWhereWithoutToken_networksInput, tokensUpdateWithoutToken_networksInput>, tokensUncheckedUpdateWithoutToken_networksInput>
  }

  export type wallet_network_tokensUpdateManyWithoutToken_networksNestedInput = {
    create?: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput> | wallet_network_tokensCreateWithoutToken_networksInput[] | wallet_network_tokensUncheckedCreateWithoutToken_networksInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutToken_networksInput | wallet_network_tokensCreateOrConnectWithoutToken_networksInput[]
    upsert?: wallet_network_tokensUpsertWithWhereUniqueWithoutToken_networksInput | wallet_network_tokensUpsertWithWhereUniqueWithoutToken_networksInput[]
    createMany?: wallet_network_tokensCreateManyToken_networksInputEnvelope
    set?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    disconnect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    delete?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    update?: wallet_network_tokensUpdateWithWhereUniqueWithoutToken_networksInput | wallet_network_tokensUpdateWithWhereUniqueWithoutToken_networksInput[]
    updateMany?: wallet_network_tokensUpdateManyWithWhereWithoutToken_networksInput | wallet_network_tokensUpdateManyWithWhereWithoutToken_networksInput[]
    deleteMany?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
  }

  export type wallet_network_tokensUncheckedUpdateManyWithoutToken_networksNestedInput = {
    create?: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput> | wallet_network_tokensCreateWithoutToken_networksInput[] | wallet_network_tokensUncheckedCreateWithoutToken_networksInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutToken_networksInput | wallet_network_tokensCreateOrConnectWithoutToken_networksInput[]
    upsert?: wallet_network_tokensUpsertWithWhereUniqueWithoutToken_networksInput | wallet_network_tokensUpsertWithWhereUniqueWithoutToken_networksInput[]
    createMany?: wallet_network_tokensCreateManyToken_networksInputEnvelope
    set?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    disconnect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    delete?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    update?: wallet_network_tokensUpdateWithWhereUniqueWithoutToken_networksInput | wallet_network_tokensUpdateWithWhereUniqueWithoutToken_networksInput[]
    updateMany?: wallet_network_tokensUpdateManyWithWhereWithoutToken_networksInput | wallet_network_tokensUpdateManyWithWhereWithoutToken_networksInput[]
    deleteMany?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
  }

  export type token_networksCreateNestedManyWithoutTokensInput = {
    create?: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput> | token_networksCreateWithoutTokensInput[] | token_networksUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutTokensInput | token_networksCreateOrConnectWithoutTokensInput[]
    createMany?: token_networksCreateManyTokensInputEnvelope
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
  }

  export type token_networksUncheckedCreateNestedManyWithoutTokensInput = {
    create?: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput> | token_networksCreateWithoutTokensInput[] | token_networksUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutTokensInput | token_networksCreateOrConnectWithoutTokensInput[]
    createMany?: token_networksCreateManyTokensInputEnvelope
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type token_networksUpdateManyWithoutTokensNestedInput = {
    create?: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput> | token_networksCreateWithoutTokensInput[] | token_networksUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutTokensInput | token_networksCreateOrConnectWithoutTokensInput[]
    upsert?: token_networksUpsertWithWhereUniqueWithoutTokensInput | token_networksUpsertWithWhereUniqueWithoutTokensInput[]
    createMany?: token_networksCreateManyTokensInputEnvelope
    set?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    disconnect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    delete?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    update?: token_networksUpdateWithWhereUniqueWithoutTokensInput | token_networksUpdateWithWhereUniqueWithoutTokensInput[]
    updateMany?: token_networksUpdateManyWithWhereWithoutTokensInput | token_networksUpdateManyWithWhereWithoutTokensInput[]
    deleteMany?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
  }

  export type token_networksUncheckedUpdateManyWithoutTokensNestedInput = {
    create?: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput> | token_networksCreateWithoutTokensInput[] | token_networksUncheckedCreateWithoutTokensInput[]
    connectOrCreate?: token_networksCreateOrConnectWithoutTokensInput | token_networksCreateOrConnectWithoutTokensInput[]
    upsert?: token_networksUpsertWithWhereUniqueWithoutTokensInput | token_networksUpsertWithWhereUniqueWithoutTokensInput[]
    createMany?: token_networksCreateManyTokensInputEnvelope
    set?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    disconnect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    delete?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    connect?: token_networksWhereUniqueInput | token_networksWhereUniqueInput[]
    update?: token_networksUpdateWithWhereUniqueWithoutTokensInput | token_networksUpdateWithWhereUniqueWithoutTokensInput[]
    updateMany?: token_networksUpdateManyWithWhereWithoutTokensInput | token_networksUpdateManyWithWhereWithoutTokensInput[]
    deleteMany?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
  }

  export type audit_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type networksCreateNestedManyWithoutUsersInput = {
    create?: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput> | networksCreateWithoutUsersInput[] | networksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: networksCreateOrConnectWithoutUsersInput | networksCreateOrConnectWithoutUsersInput[]
    createMany?: networksCreateManyUsersInputEnvelope
    connect?: networksWhereUniqueInput | networksWhereUniqueInput[]
  }

  export type walletsCreateNestedManyWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
  }

  export type audit_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type networksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput> | networksCreateWithoutUsersInput[] | networksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: networksCreateOrConnectWithoutUsersInput | networksCreateOrConnectWithoutUsersInput[]
    createMany?: networksCreateManyUsersInputEnvelope
    connect?: networksWhereUniqueInput | networksWhereUniqueInput[]
  }

  export type walletsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
  }

  export type audit_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUsersInput | audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUsersInput | audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUsersInput | audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type networksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput> | networksCreateWithoutUsersInput[] | networksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: networksCreateOrConnectWithoutUsersInput | networksCreateOrConnectWithoutUsersInput[]
    upsert?: networksUpsertWithWhereUniqueWithoutUsersInput | networksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: networksCreateManyUsersInputEnvelope
    set?: networksWhereUniqueInput | networksWhereUniqueInput[]
    disconnect?: networksWhereUniqueInput | networksWhereUniqueInput[]
    delete?: networksWhereUniqueInput | networksWhereUniqueInput[]
    connect?: networksWhereUniqueInput | networksWhereUniqueInput[]
    update?: networksUpdateWithWhereUniqueWithoutUsersInput | networksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: networksUpdateManyWithWhereWithoutUsersInput | networksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: networksScalarWhereInput | networksScalarWhereInput[]
  }

  export type walletsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    upsert?: walletsUpsertWithWhereUniqueWithoutUsersInput | walletsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    set?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    disconnect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    delete?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    update?: walletsUpdateWithWhereUniqueWithoutUsersInput | walletsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: walletsUpdateManyWithWhereWithoutUsersInput | walletsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: walletsScalarWhereInput | walletsScalarWhereInput[]
  }

  export type audit_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput> | audit_logsCreateWithoutUsersInput[] | audit_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUsersInput | audit_logsCreateOrConnectWithoutUsersInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUsersInput | audit_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: audit_logsCreateManyUsersInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUsersInput | audit_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUsersInput | audit_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type networksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput> | networksCreateWithoutUsersInput[] | networksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: networksCreateOrConnectWithoutUsersInput | networksCreateOrConnectWithoutUsersInput[]
    upsert?: networksUpsertWithWhereUniqueWithoutUsersInput | networksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: networksCreateManyUsersInputEnvelope
    set?: networksWhereUniqueInput | networksWhereUniqueInput[]
    disconnect?: networksWhereUniqueInput | networksWhereUniqueInput[]
    delete?: networksWhereUniqueInput | networksWhereUniqueInput[]
    connect?: networksWhereUniqueInput | networksWhereUniqueInput[]
    update?: networksUpdateWithWhereUniqueWithoutUsersInput | networksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: networksUpdateManyWithWhereWithoutUsersInput | networksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: networksScalarWhereInput | networksScalarWhereInput[]
  }

  export type walletsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput> | walletsCreateWithoutUsersInput[] | walletsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: walletsCreateOrConnectWithoutUsersInput | walletsCreateOrConnectWithoutUsersInput[]
    upsert?: walletsUpsertWithWhereUniqueWithoutUsersInput | walletsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: walletsCreateManyUsersInputEnvelope
    set?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    disconnect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    delete?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    connect?: walletsWhereUniqueInput | walletsWhereUniqueInput[]
    update?: walletsUpdateWithWhereUniqueWithoutUsersInput | walletsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: walletsUpdateManyWithWhereWithoutUsersInput | walletsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: walletsScalarWhereInput | walletsScalarWhereInput[]
  }

  export type token_networksCreateNestedOneWithoutWallet_network_tokensInput = {
    create?: XOR<token_networksCreateWithoutWallet_network_tokensInput, token_networksUncheckedCreateWithoutWallet_network_tokensInput>
    connectOrCreate?: token_networksCreateOrConnectWithoutWallet_network_tokensInput
    connect?: token_networksWhereUniqueInput
  }

  export type walletsCreateNestedOneWithoutWallet_network_tokensInput = {
    create?: XOR<walletsCreateWithoutWallet_network_tokensInput, walletsUncheckedCreateWithoutWallet_network_tokensInput>
    connectOrCreate?: walletsCreateOrConnectWithoutWallet_network_tokensInput
    connect?: walletsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type token_networksUpdateOneWithoutWallet_network_tokensNestedInput = {
    create?: XOR<token_networksCreateWithoutWallet_network_tokensInput, token_networksUncheckedCreateWithoutWallet_network_tokensInput>
    connectOrCreate?: token_networksCreateOrConnectWithoutWallet_network_tokensInput
    upsert?: token_networksUpsertWithoutWallet_network_tokensInput
    disconnect?: token_networksWhereInput | boolean
    delete?: token_networksWhereInput | boolean
    connect?: token_networksWhereUniqueInput
    update?: XOR<XOR<token_networksUpdateToOneWithWhereWithoutWallet_network_tokensInput, token_networksUpdateWithoutWallet_network_tokensInput>, token_networksUncheckedUpdateWithoutWallet_network_tokensInput>
  }

  export type walletsUpdateOneWithoutWallet_network_tokensNestedInput = {
    create?: XOR<walletsCreateWithoutWallet_network_tokensInput, walletsUncheckedCreateWithoutWallet_network_tokensInput>
    connectOrCreate?: walletsCreateOrConnectWithoutWallet_network_tokensInput
    upsert?: walletsUpsertWithoutWallet_network_tokensInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutWallet_network_tokensInput, walletsUpdateWithoutWallet_network_tokensInput>, walletsUncheckedUpdateWithoutWallet_network_tokensInput>
  }

  export type networksCreateNestedOneWithoutWallet_networksInput = {
    create?: XOR<networksCreateWithoutWallet_networksInput, networksUncheckedCreateWithoutWallet_networksInput>
    connectOrCreate?: networksCreateOrConnectWithoutWallet_networksInput
    connect?: networksWhereUniqueInput
  }

  export type walletsCreateNestedOneWithoutWallet_networksInput = {
    create?: XOR<walletsCreateWithoutWallet_networksInput, walletsUncheckedCreateWithoutWallet_networksInput>
    connectOrCreate?: walletsCreateOrConnectWithoutWallet_networksInput
    connect?: walletsWhereUniqueInput
  }

  export type networksUpdateOneWithoutWallet_networksNestedInput = {
    create?: XOR<networksCreateWithoutWallet_networksInput, networksUncheckedCreateWithoutWallet_networksInput>
    connectOrCreate?: networksCreateOrConnectWithoutWallet_networksInput
    upsert?: networksUpsertWithoutWallet_networksInput
    disconnect?: networksWhereInput | boolean
    delete?: networksWhereInput | boolean
    connect?: networksWhereUniqueInput
    update?: XOR<XOR<networksUpdateToOneWithWhereWithoutWallet_networksInput, networksUpdateWithoutWallet_networksInput>, networksUncheckedUpdateWithoutWallet_networksInput>
  }

  export type walletsUpdateOneWithoutWallet_networksNestedInput = {
    create?: XOR<walletsCreateWithoutWallet_networksInput, walletsUncheckedCreateWithoutWallet_networksInput>
    connectOrCreate?: walletsCreateOrConnectWithoutWallet_networksInput
    upsert?: walletsUpsertWithoutWallet_networksInput
    disconnect?: walletsWhereInput | boolean
    delete?: walletsWhereInput | boolean
    connect?: walletsWhereUniqueInput
    update?: XOR<XOR<walletsUpdateToOneWithWhereWithoutWallet_networksInput, walletsUpdateWithoutWallet_networksInput>, walletsUncheckedUpdateWithoutWallet_networksInput>
  }

  export type wallet_network_tokensCreateNestedManyWithoutWalletsInput = {
    create?: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput> | wallet_network_tokensCreateWithoutWalletsInput[] | wallet_network_tokensUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutWalletsInput | wallet_network_tokensCreateOrConnectWithoutWalletsInput[]
    createMany?: wallet_network_tokensCreateManyWalletsInputEnvelope
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
  }

  export type wallet_networksCreateNestedManyWithoutWalletsInput = {
    create?: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput> | wallet_networksCreateWithoutWalletsInput[] | wallet_networksUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutWalletsInput | wallet_networksCreateOrConnectWithoutWalletsInput[]
    createMany?: wallet_networksCreateManyWalletsInputEnvelope
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    connect?: usersWhereUniqueInput
  }

  export type wallet_network_tokensUncheckedCreateNestedManyWithoutWalletsInput = {
    create?: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput> | wallet_network_tokensCreateWithoutWalletsInput[] | wallet_network_tokensUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutWalletsInput | wallet_network_tokensCreateOrConnectWithoutWalletsInput[]
    createMany?: wallet_network_tokensCreateManyWalletsInputEnvelope
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
  }

  export type wallet_networksUncheckedCreateNestedManyWithoutWalletsInput = {
    create?: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput> | wallet_networksCreateWithoutWalletsInput[] | wallet_networksUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutWalletsInput | wallet_networksCreateOrConnectWithoutWalletsInput[]
    createMany?: wallet_networksCreateManyWalletsInputEnvelope
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
  }

  export type wallet_network_tokensUpdateManyWithoutWalletsNestedInput = {
    create?: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput> | wallet_network_tokensCreateWithoutWalletsInput[] | wallet_network_tokensUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutWalletsInput | wallet_network_tokensCreateOrConnectWithoutWalletsInput[]
    upsert?: wallet_network_tokensUpsertWithWhereUniqueWithoutWalletsInput | wallet_network_tokensUpsertWithWhereUniqueWithoutWalletsInput[]
    createMany?: wallet_network_tokensCreateManyWalletsInputEnvelope
    set?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    disconnect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    delete?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    update?: wallet_network_tokensUpdateWithWhereUniqueWithoutWalletsInput | wallet_network_tokensUpdateWithWhereUniqueWithoutWalletsInput[]
    updateMany?: wallet_network_tokensUpdateManyWithWhereWithoutWalletsInput | wallet_network_tokensUpdateManyWithWhereWithoutWalletsInput[]
    deleteMany?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
  }

  export type wallet_networksUpdateManyWithoutWalletsNestedInput = {
    create?: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput> | wallet_networksCreateWithoutWalletsInput[] | wallet_networksUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutWalletsInput | wallet_networksCreateOrConnectWithoutWalletsInput[]
    upsert?: wallet_networksUpsertWithWhereUniqueWithoutWalletsInput | wallet_networksUpsertWithWhereUniqueWithoutWalletsInput[]
    createMany?: wallet_networksCreateManyWalletsInputEnvelope
    set?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    disconnect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    delete?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    update?: wallet_networksUpdateWithWhereUniqueWithoutWalletsInput | wallet_networksUpdateWithWhereUniqueWithoutWalletsInput[]
    updateMany?: wallet_networksUpdateManyWithWhereWithoutWalletsInput | wallet_networksUpdateManyWithWhereWithoutWalletsInput[]
    deleteMany?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
  }

  export type usersUpdateOneWithoutWalletsNestedInput = {
    create?: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWalletsInput
    upsert?: usersUpsertWithoutWalletsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWalletsInput, usersUpdateWithoutWalletsInput>, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type wallet_network_tokensUncheckedUpdateManyWithoutWalletsNestedInput = {
    create?: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput> | wallet_network_tokensCreateWithoutWalletsInput[] | wallet_network_tokensUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_network_tokensCreateOrConnectWithoutWalletsInput | wallet_network_tokensCreateOrConnectWithoutWalletsInput[]
    upsert?: wallet_network_tokensUpsertWithWhereUniqueWithoutWalletsInput | wallet_network_tokensUpsertWithWhereUniqueWithoutWalletsInput[]
    createMany?: wallet_network_tokensCreateManyWalletsInputEnvelope
    set?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    disconnect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    delete?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    connect?: wallet_network_tokensWhereUniqueInput | wallet_network_tokensWhereUniqueInput[]
    update?: wallet_network_tokensUpdateWithWhereUniqueWithoutWalletsInput | wallet_network_tokensUpdateWithWhereUniqueWithoutWalletsInput[]
    updateMany?: wallet_network_tokensUpdateManyWithWhereWithoutWalletsInput | wallet_network_tokensUpdateManyWithWhereWithoutWalletsInput[]
    deleteMany?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
  }

  export type wallet_networksUncheckedUpdateManyWithoutWalletsNestedInput = {
    create?: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput> | wallet_networksCreateWithoutWalletsInput[] | wallet_networksUncheckedCreateWithoutWalletsInput[]
    connectOrCreate?: wallet_networksCreateOrConnectWithoutWalletsInput | wallet_networksCreateOrConnectWithoutWalletsInput[]
    upsert?: wallet_networksUpsertWithWhereUniqueWithoutWalletsInput | wallet_networksUpsertWithWhereUniqueWithoutWalletsInput[]
    createMany?: wallet_networksCreateManyWalletsInputEnvelope
    set?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    disconnect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    delete?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    connect?: wallet_networksWhereUniqueInput | wallet_networksWhereUniqueInput[]
    update?: wallet_networksUpdateWithWhereUniqueWithoutWalletsInput | wallet_networksUpdateWithWhereUniqueWithoutWalletsInput[]
    updateMany?: wallet_networksUpdateManyWithWhereWithoutWalletsInput | wallet_networksUpdateManyWithWhereWithoutWalletsInput[]
    deleteMany?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type usersCreateWithoutAudit_logsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAudit_logsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAudit_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
  }

  export type usersUpsertWithoutAudit_logsInput = {
    update: XOR<usersUpdateWithoutAudit_logsInput, usersUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<usersCreateWithoutAudit_logsInput, usersUncheckedCreateWithoutAudit_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAudit_logsInput, usersUncheckedUpdateWithoutAudit_logsInput>
  }

  export type usersUpdateWithoutAudit_logsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAudit_logsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutNetworksInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNetworksInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNetworksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNetworksInput, usersUncheckedCreateWithoutNetworksInput>
  }

  export type token_networksCreateWithoutNetworksInput = {
    token_network_id?: string
    contract_address: string
    tokens?: tokensCreateNestedOneWithoutToken_networksInput
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksUncheckedCreateWithoutNetworksInput = {
    token_network_id?: string
    token_id?: string | null
    contract_address: string
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksCreateOrConnectWithoutNetworksInput = {
    where: token_networksWhereUniqueInput
    create: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput>
  }

  export type token_networksCreateManyNetworksInputEnvelope = {
    data: token_networksCreateManyNetworksInput | token_networksCreateManyNetworksInput[]
    skipDuplicates?: boolean
  }

  export type wallet_networksCreateWithoutNetworksInput = {
    wallet_network_id?: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    wallets?: walletsCreateNestedOneWithoutWallet_networksInput
  }

  export type wallet_networksUncheckedCreateWithoutNetworksInput = {
    wallet_network_id?: string
    wallet_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wallet_networksCreateOrConnectWithoutNetworksInput = {
    where: wallet_networksWhereUniqueInput
    create: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput>
  }

  export type wallet_networksCreateManyNetworksInputEnvelope = {
    data: wallet_networksCreateManyNetworksInput | wallet_networksCreateManyNetworksInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutNetworksInput = {
    update: XOR<usersUpdateWithoutNetworksInput, usersUncheckedUpdateWithoutNetworksInput>
    create: XOR<usersCreateWithoutNetworksInput, usersUncheckedCreateWithoutNetworksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNetworksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNetworksInput, usersUncheckedUpdateWithoutNetworksInput>
  }

  export type usersUpdateWithoutNetworksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNetworksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type token_networksUpsertWithWhereUniqueWithoutNetworksInput = {
    where: token_networksWhereUniqueInput
    update: XOR<token_networksUpdateWithoutNetworksInput, token_networksUncheckedUpdateWithoutNetworksInput>
    create: XOR<token_networksCreateWithoutNetworksInput, token_networksUncheckedCreateWithoutNetworksInput>
  }

  export type token_networksUpdateWithWhereUniqueWithoutNetworksInput = {
    where: token_networksWhereUniqueInput
    data: XOR<token_networksUpdateWithoutNetworksInput, token_networksUncheckedUpdateWithoutNetworksInput>
  }

  export type token_networksUpdateManyWithWhereWithoutNetworksInput = {
    where: token_networksScalarWhereInput
    data: XOR<token_networksUpdateManyMutationInput, token_networksUncheckedUpdateManyWithoutNetworksInput>
  }

  export type token_networksScalarWhereInput = {
    AND?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
    OR?: token_networksScalarWhereInput[]
    NOT?: token_networksScalarWhereInput | token_networksScalarWhereInput[]
    token_network_id?: UuidFilter<"token_networks"> | string
    token_id?: UuidNullableFilter<"token_networks"> | string | null
    network_id?: UuidNullableFilter<"token_networks"> | string | null
    contract_address?: StringFilter<"token_networks"> | string
  }

  export type wallet_networksUpsertWithWhereUniqueWithoutNetworksInput = {
    where: wallet_networksWhereUniqueInput
    update: XOR<wallet_networksUpdateWithoutNetworksInput, wallet_networksUncheckedUpdateWithoutNetworksInput>
    create: XOR<wallet_networksCreateWithoutNetworksInput, wallet_networksUncheckedCreateWithoutNetworksInput>
  }

  export type wallet_networksUpdateWithWhereUniqueWithoutNetworksInput = {
    where: wallet_networksWhereUniqueInput
    data: XOR<wallet_networksUpdateWithoutNetworksInput, wallet_networksUncheckedUpdateWithoutNetworksInput>
  }

  export type wallet_networksUpdateManyWithWhereWithoutNetworksInput = {
    where: wallet_networksScalarWhereInput
    data: XOR<wallet_networksUpdateManyMutationInput, wallet_networksUncheckedUpdateManyWithoutNetworksInput>
  }

  export type wallet_networksScalarWhereInput = {
    AND?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
    OR?: wallet_networksScalarWhereInput[]
    NOT?: wallet_networksScalarWhereInput | wallet_networksScalarWhereInput[]
    wallet_network_id?: UuidFilter<"wallet_networks"> | string
    wallet_id?: UuidNullableFilter<"wallet_networks"> | string | null
    network_id?: UuidNullableFilter<"wallet_networks"> | string | null
    address?: StringFilter<"wallet_networks"> | string
    created_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallet_networks"> | Date | string | null
  }

  export type networksCreateWithoutToken_networksInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
    users?: usersCreateNestedOneWithoutNetworksInput
    wallet_networks?: wallet_networksCreateNestedManyWithoutNetworksInput
  }

  export type networksUncheckedCreateWithoutToken_networksInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    creator_id?: string | null
    isEVM?: boolean
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutNetworksInput
  }

  export type networksCreateOrConnectWithoutToken_networksInput = {
    where: networksWhereUniqueInput
    create: XOR<networksCreateWithoutToken_networksInput, networksUncheckedCreateWithoutToken_networksInput>
  }

  export type tokensCreateWithoutToken_networksInput = {
    token_id?: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail?: string | null
    price_feed_id?: string | null
    percent_change_24h?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type tokensUncheckedCreateWithoutToken_networksInput = {
    token_id?: string
    token_name: string
    symbol: string
    decimals: number
    thumbnail?: string | null
    price_feed_id?: string | null
    percent_change_24h?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type tokensCreateOrConnectWithoutToken_networksInput = {
    where: tokensWhereUniqueInput
    create: XOR<tokensCreateWithoutToken_networksInput, tokensUncheckedCreateWithoutToken_networksInput>
  }

  export type wallet_network_tokensCreateWithoutToken_networksInput = {
    wallet_network_token_id?: string
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
    wallets?: walletsCreateNestedOneWithoutWallet_network_tokensInput
  }

  export type wallet_network_tokensUncheckedCreateWithoutToken_networksInput = {
    wallet_network_token_id?: string
    wallet_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensCreateOrConnectWithoutToken_networksInput = {
    where: wallet_network_tokensWhereUniqueInput
    create: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput>
  }

  export type wallet_network_tokensCreateManyToken_networksInputEnvelope = {
    data: wallet_network_tokensCreateManyToken_networksInput | wallet_network_tokensCreateManyToken_networksInput[]
    skipDuplicates?: boolean
  }

  export type networksUpsertWithoutToken_networksInput = {
    update: XOR<networksUpdateWithoutToken_networksInput, networksUncheckedUpdateWithoutToken_networksInput>
    create: XOR<networksCreateWithoutToken_networksInput, networksUncheckedCreateWithoutToken_networksInput>
    where?: networksWhereInput
  }

  export type networksUpdateToOneWithWhereWithoutToken_networksInput = {
    where?: networksWhereInput
    data: XOR<networksUpdateWithoutToken_networksInput, networksUncheckedUpdateWithoutToken_networksInput>
  }

  export type networksUpdateWithoutToken_networksInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneWithoutNetworksNestedInput
    wallet_networks?: wallet_networksUpdateManyWithoutNetworksNestedInput
  }

  export type networksUncheckedUpdateWithoutToken_networksInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutNetworksNestedInput
  }

  export type tokensUpsertWithoutToken_networksInput = {
    update: XOR<tokensUpdateWithoutToken_networksInput, tokensUncheckedUpdateWithoutToken_networksInput>
    create: XOR<tokensCreateWithoutToken_networksInput, tokensUncheckedCreateWithoutToken_networksInput>
    where?: tokensWhereInput
  }

  export type tokensUpdateToOneWithWhereWithoutToken_networksInput = {
    where?: tokensWhereInput
    data: XOR<tokensUpdateWithoutToken_networksInput, tokensUncheckedUpdateWithoutToken_networksInput>
  }

  export type tokensUpdateWithoutToken_networksInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokensUncheckedUpdateWithoutToken_networksInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimals?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    percent_change_24h?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensUpsertWithWhereUniqueWithoutToken_networksInput = {
    where: wallet_network_tokensWhereUniqueInput
    update: XOR<wallet_network_tokensUpdateWithoutToken_networksInput, wallet_network_tokensUncheckedUpdateWithoutToken_networksInput>
    create: XOR<wallet_network_tokensCreateWithoutToken_networksInput, wallet_network_tokensUncheckedCreateWithoutToken_networksInput>
  }

  export type wallet_network_tokensUpdateWithWhereUniqueWithoutToken_networksInput = {
    where: wallet_network_tokensWhereUniqueInput
    data: XOR<wallet_network_tokensUpdateWithoutToken_networksInput, wallet_network_tokensUncheckedUpdateWithoutToken_networksInput>
  }

  export type wallet_network_tokensUpdateManyWithWhereWithoutToken_networksInput = {
    where: wallet_network_tokensScalarWhereInput
    data: XOR<wallet_network_tokensUpdateManyMutationInput, wallet_network_tokensUncheckedUpdateManyWithoutToken_networksInput>
  }

  export type wallet_network_tokensScalarWhereInput = {
    AND?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
    OR?: wallet_network_tokensScalarWhereInput[]
    NOT?: wallet_network_tokensScalarWhereInput | wallet_network_tokensScalarWhereInput[]
    wallet_network_token_id?: UuidFilter<"wallet_network_tokens"> | string
    token_network_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    wallet_id?: UuidNullableFilter<"wallet_network_tokens"> | string | null
    balance?: DecimalFilter<"wallet_network_tokens"> | Decimal | DecimalJsLike | number | string
    updated_at?: DateTimeNullableFilter<"wallet_network_tokens"> | Date | string | null
  }

  export type token_networksCreateWithoutTokensInput = {
    token_network_id?: string
    contract_address: string
    networks?: networksCreateNestedOneWithoutToken_networksInput
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksUncheckedCreateWithoutTokensInput = {
    token_network_id?: string
    network_id?: string | null
    contract_address: string
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutToken_networksInput
  }

  export type token_networksCreateOrConnectWithoutTokensInput = {
    where: token_networksWhereUniqueInput
    create: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput>
  }

  export type token_networksCreateManyTokensInputEnvelope = {
    data: token_networksCreateManyTokensInput | token_networksCreateManyTokensInput[]
    skipDuplicates?: boolean
  }

  export type token_networksUpsertWithWhereUniqueWithoutTokensInput = {
    where: token_networksWhereUniqueInput
    update: XOR<token_networksUpdateWithoutTokensInput, token_networksUncheckedUpdateWithoutTokensInput>
    create: XOR<token_networksCreateWithoutTokensInput, token_networksUncheckedCreateWithoutTokensInput>
  }

  export type token_networksUpdateWithWhereUniqueWithoutTokensInput = {
    where: token_networksWhereUniqueInput
    data: XOR<token_networksUpdateWithoutTokensInput, token_networksUncheckedUpdateWithoutTokensInput>
  }

  export type token_networksUpdateManyWithWhereWithoutTokensInput = {
    where: token_networksScalarWhereInput
    data: XOR<token_networksUpdateManyMutationInput, token_networksUncheckedUpdateManyWithoutTokensInput>
  }

  export type audit_logsCreateWithoutUsersInput = {
    log_id?: string
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsUncheckedCreateWithoutUsersInput = {
    log_id?: string
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
  }

  export type audit_logsCreateOrConnectWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type audit_logsCreateManyUsersInputEnvelope = {
    data: audit_logsCreateManyUsersInput | audit_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type networksCreateWithoutUsersInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
    token_networks?: token_networksCreateNestedManyWithoutNetworksInput
    wallet_networks?: wallet_networksCreateNestedManyWithoutNetworksInput
  }

  export type networksUncheckedCreateWithoutUsersInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
    token_networks?: token_networksUncheckedCreateNestedManyWithoutNetworksInput
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutNetworksInput
  }

  export type networksCreateOrConnectWithoutUsersInput = {
    where: networksWhereUniqueInput
    create: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput>
  }

  export type networksCreateManyUsersInputEnvelope = {
    data: networksCreateManyUsersInput | networksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type walletsCreateWithoutUsersInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutWalletsInput
    wallet_networks?: wallet_networksCreateNestedManyWithoutWalletsInput
  }

  export type walletsUncheckedCreateWithoutUsersInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutWalletsInput
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutWalletsInput
  }

  export type walletsCreateOrConnectWithoutUsersInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type walletsCreateManyUsersInputEnvelope = {
    data: walletsCreateManyUsersInput | walletsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type audit_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutUsersInput, audit_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<audit_logsCreateWithoutUsersInput, audit_logsUncheckedCreateWithoutUsersInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutUsersInput, audit_logsUncheckedUpdateWithoutUsersInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutUsersInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type audit_logsScalarWhereInput = {
    AND?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    OR?: audit_logsScalarWhereInput[]
    NOT?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    log_id?: UuidFilter<"audit_logs"> | string
    user_id?: UuidNullableFilter<"audit_logs"> | string | null
    action?: StringFilter<"audit_logs"> | string
    target_table?: StringNullableFilter<"audit_logs"> | string | null
    target_id?: UuidNullableFilter<"audit_logs"> | string | null
    created_at?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
  }

  export type networksUpsertWithWhereUniqueWithoutUsersInput = {
    where: networksWhereUniqueInput
    update: XOR<networksUpdateWithoutUsersInput, networksUncheckedUpdateWithoutUsersInput>
    create: XOR<networksCreateWithoutUsersInput, networksUncheckedCreateWithoutUsersInput>
  }

  export type networksUpdateWithWhereUniqueWithoutUsersInput = {
    where: networksWhereUniqueInput
    data: XOR<networksUpdateWithoutUsersInput, networksUncheckedUpdateWithoutUsersInput>
  }

  export type networksUpdateManyWithWhereWithoutUsersInput = {
    where: networksScalarWhereInput
    data: XOR<networksUpdateManyMutationInput, networksUncheckedUpdateManyWithoutUsersInput>
  }

  export type networksScalarWhereInput = {
    AND?: networksScalarWhereInput | networksScalarWhereInput[]
    OR?: networksScalarWhereInput[]
    NOT?: networksScalarWhereInput | networksScalarWhereInput[]
    network_id?: UuidFilter<"networks"> | string
    network_name?: StringFilter<"networks"> | string
    symbol?: StringFilter<"networks"> | string
    thumbnail?: StringNullableFilter<"networks"> | string | null
    chain_id?: StringFilter<"networks"> | string
    block_explorer_url?: StringNullableFilter<"networks"> | string | null
    price_feed_id?: StringNullableFilter<"networks"> | string | null
    is_default_network?: BoolFilter<"networks"> | boolean
    is_testnet?: BoolFilter<"networks"> | boolean
    rpc_url?: StringFilter<"networks"> | string
    created_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"networks"> | Date | string | null
    creator_id?: UuidNullableFilter<"networks"> | string | null
    isEVM?: BoolFilter<"networks"> | boolean
  }

  export type walletsUpsertWithWhereUniqueWithoutUsersInput = {
    where: walletsWhereUniqueInput
    update: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
    create: XOR<walletsCreateWithoutUsersInput, walletsUncheckedCreateWithoutUsersInput>
  }

  export type walletsUpdateWithWhereUniqueWithoutUsersInput = {
    where: walletsWhereUniqueInput
    data: XOR<walletsUpdateWithoutUsersInput, walletsUncheckedUpdateWithoutUsersInput>
  }

  export type walletsUpdateManyWithWhereWithoutUsersInput = {
    where: walletsScalarWhereInput
    data: XOR<walletsUpdateManyMutationInput, walletsUncheckedUpdateManyWithoutUsersInput>
  }

  export type walletsScalarWhereInput = {
    AND?: walletsScalarWhereInput | walletsScalarWhereInput[]
    OR?: walletsScalarWhereInput[]
    NOT?: walletsScalarWhereInput | walletsScalarWhereInput[]
    wallet_id?: UuidFilter<"wallets"> | string
    user_id?: UuidNullableFilter<"wallets"> | string | null
    wallet_name?: StringFilter<"wallets"> | string
    wallet_balance?: DecimalFilter<"wallets"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFilter<"wallets"> | string
    wallet_phrase?: StringNullableFilter<"wallets"> | string | null
    created_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"wallets"> | Date | string | null
  }

  export type token_networksCreateWithoutWallet_network_tokensInput = {
    token_network_id?: string
    contract_address: string
    networks?: networksCreateNestedOneWithoutToken_networksInput
    tokens?: tokensCreateNestedOneWithoutToken_networksInput
  }

  export type token_networksUncheckedCreateWithoutWallet_network_tokensInput = {
    token_network_id?: string
    token_id?: string | null
    network_id?: string | null
    contract_address: string
  }

  export type token_networksCreateOrConnectWithoutWallet_network_tokensInput = {
    where: token_networksWhereUniqueInput
    create: XOR<token_networksCreateWithoutWallet_network_tokensInput, token_networksUncheckedCreateWithoutWallet_network_tokensInput>
  }

  export type walletsCreateWithoutWallet_network_tokensInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_networks?: wallet_networksCreateNestedManyWithoutWalletsInput
    users?: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateWithoutWallet_network_tokensInput = {
    wallet_id?: string
    user_id?: string | null
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_networks?: wallet_networksUncheckedCreateNestedManyWithoutWalletsInput
  }

  export type walletsCreateOrConnectWithoutWallet_network_tokensInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutWallet_network_tokensInput, walletsUncheckedCreateWithoutWallet_network_tokensInput>
  }

  export type token_networksUpsertWithoutWallet_network_tokensInput = {
    update: XOR<token_networksUpdateWithoutWallet_network_tokensInput, token_networksUncheckedUpdateWithoutWallet_network_tokensInput>
    create: XOR<token_networksCreateWithoutWallet_network_tokensInput, token_networksUncheckedCreateWithoutWallet_network_tokensInput>
    where?: token_networksWhereInput
  }

  export type token_networksUpdateToOneWithWhereWithoutWallet_network_tokensInput = {
    where?: token_networksWhereInput
    data: XOR<token_networksUpdateWithoutWallet_network_tokensInput, token_networksUncheckedUpdateWithoutWallet_network_tokensInput>
  }

  export type token_networksUpdateWithoutWallet_network_tokensInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    networks?: networksUpdateOneWithoutToken_networksNestedInput
    tokens?: tokensUpdateOneWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateWithoutWallet_network_tokensInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type walletsUpsertWithoutWallet_network_tokensInput = {
    update: XOR<walletsUpdateWithoutWallet_network_tokensInput, walletsUncheckedUpdateWithoutWallet_network_tokensInput>
    create: XOR<walletsCreateWithoutWallet_network_tokensInput, walletsUncheckedCreateWithoutWallet_network_tokensInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutWallet_network_tokensInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutWallet_network_tokensInput, walletsUncheckedUpdateWithoutWallet_network_tokensInput>
  }

  export type walletsUpdateWithoutWallet_network_tokensInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_networks?: wallet_networksUpdateManyWithoutWalletsNestedInput
    users?: usersUpdateOneWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutWallet_network_tokensInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutWalletsNestedInput
  }

  export type networksCreateWithoutWallet_networksInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
    users?: usersCreateNestedOneWithoutNetworksInput
    token_networks?: token_networksCreateNestedManyWithoutNetworksInput
  }

  export type networksUncheckedCreateWithoutWallet_networksInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    creator_id?: string | null
    isEVM?: boolean
    token_networks?: token_networksUncheckedCreateNestedManyWithoutNetworksInput
  }

  export type networksCreateOrConnectWithoutWallet_networksInput = {
    where: networksWhereUniqueInput
    create: XOR<networksCreateWithoutWallet_networksInput, networksUncheckedCreateWithoutWallet_networksInput>
  }

  export type walletsCreateWithoutWallet_networksInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensCreateNestedManyWithoutWalletsInput
    users?: usersCreateNestedOneWithoutWalletsInput
  }

  export type walletsUncheckedCreateWithoutWallet_networksInput = {
    wallet_id?: string
    user_id?: string | null
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedCreateNestedManyWithoutWalletsInput
  }

  export type walletsCreateOrConnectWithoutWallet_networksInput = {
    where: walletsWhereUniqueInput
    create: XOR<walletsCreateWithoutWallet_networksInput, walletsUncheckedCreateWithoutWallet_networksInput>
  }

  export type networksUpsertWithoutWallet_networksInput = {
    update: XOR<networksUpdateWithoutWallet_networksInput, networksUncheckedUpdateWithoutWallet_networksInput>
    create: XOR<networksCreateWithoutWallet_networksInput, networksUncheckedCreateWithoutWallet_networksInput>
    where?: networksWhereInput
  }

  export type networksUpdateToOneWithWhereWithoutWallet_networksInput = {
    where?: networksWhereInput
    data: XOR<networksUpdateWithoutWallet_networksInput, networksUncheckedUpdateWithoutWallet_networksInput>
  }

  export type networksUpdateWithoutWallet_networksInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneWithoutNetworksNestedInput
    token_networks?: token_networksUpdateManyWithoutNetworksNestedInput
  }

  export type networksUncheckedUpdateWithoutWallet_networksInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    token_networks?: token_networksUncheckedUpdateManyWithoutNetworksNestedInput
  }

  export type walletsUpsertWithoutWallet_networksInput = {
    update: XOR<walletsUpdateWithoutWallet_networksInput, walletsUncheckedUpdateWithoutWallet_networksInput>
    create: XOR<walletsCreateWithoutWallet_networksInput, walletsUncheckedCreateWithoutWallet_networksInput>
    where?: walletsWhereInput
  }

  export type walletsUpdateToOneWithWhereWithoutWallet_networksInput = {
    where?: walletsWhereInput
    data: XOR<walletsUpdateWithoutWallet_networksInput, walletsUncheckedUpdateWithoutWallet_networksInput>
  }

  export type walletsUpdateWithoutWallet_networksInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutWalletsNestedInput
    users?: usersUpdateOneWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutWallet_networksInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutWalletsNestedInput
  }

  export type wallet_network_tokensCreateWithoutWalletsInput = {
    wallet_network_token_id?: string
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
    token_networks?: token_networksCreateNestedOneWithoutWallet_network_tokensInput
  }

  export type wallet_network_tokensUncheckedCreateWithoutWalletsInput = {
    wallet_network_token_id?: string
    token_network_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensCreateOrConnectWithoutWalletsInput = {
    where: wallet_network_tokensWhereUniqueInput
    create: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput>
  }

  export type wallet_network_tokensCreateManyWalletsInputEnvelope = {
    data: wallet_network_tokensCreateManyWalletsInput | wallet_network_tokensCreateManyWalletsInput[]
    skipDuplicates?: boolean
  }

  export type wallet_networksCreateWithoutWalletsInput = {
    wallet_network_id?: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    networks?: networksCreateNestedOneWithoutWallet_networksInput
  }

  export type wallet_networksUncheckedCreateWithoutWalletsInput = {
    wallet_network_id?: string
    network_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wallet_networksCreateOrConnectWithoutWalletsInput = {
    where: wallet_networksWhereUniqueInput
    create: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput>
  }

  export type wallet_networksCreateManyWalletsInputEnvelope = {
    data: wallet_networksCreateManyWalletsInput | wallet_networksCreateManyWalletsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWalletsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWalletsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email: string
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWalletsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
  }

  export type wallet_network_tokensUpsertWithWhereUniqueWithoutWalletsInput = {
    where: wallet_network_tokensWhereUniqueInput
    update: XOR<wallet_network_tokensUpdateWithoutWalletsInput, wallet_network_tokensUncheckedUpdateWithoutWalletsInput>
    create: XOR<wallet_network_tokensCreateWithoutWalletsInput, wallet_network_tokensUncheckedCreateWithoutWalletsInput>
  }

  export type wallet_network_tokensUpdateWithWhereUniqueWithoutWalletsInput = {
    where: wallet_network_tokensWhereUniqueInput
    data: XOR<wallet_network_tokensUpdateWithoutWalletsInput, wallet_network_tokensUncheckedUpdateWithoutWalletsInput>
  }

  export type wallet_network_tokensUpdateManyWithWhereWithoutWalletsInput = {
    where: wallet_network_tokensScalarWhereInput
    data: XOR<wallet_network_tokensUpdateManyMutationInput, wallet_network_tokensUncheckedUpdateManyWithoutWalletsInput>
  }

  export type wallet_networksUpsertWithWhereUniqueWithoutWalletsInput = {
    where: wallet_networksWhereUniqueInput
    update: XOR<wallet_networksUpdateWithoutWalletsInput, wallet_networksUncheckedUpdateWithoutWalletsInput>
    create: XOR<wallet_networksCreateWithoutWalletsInput, wallet_networksUncheckedCreateWithoutWalletsInput>
  }

  export type wallet_networksUpdateWithWhereUniqueWithoutWalletsInput = {
    where: wallet_networksWhereUniqueInput
    data: XOR<wallet_networksUpdateWithoutWalletsInput, wallet_networksUncheckedUpdateWithoutWalletsInput>
  }

  export type wallet_networksUpdateManyWithWhereWithoutWalletsInput = {
    where: wallet_networksScalarWhereInput
    data: XOR<wallet_networksUpdateManyMutationInput, wallet_networksUncheckedUpdateManyWithoutWalletsInput>
  }

  export type usersUpsertWithoutWalletsInput = {
    update: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
    create: XOR<usersCreateWithoutWalletsInput, usersUncheckedCreateWithoutWalletsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWalletsInput, usersUncheckedUpdateWithoutWalletsInput>
  }

  export type usersUpdateWithoutWalletsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWalletsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type token_networksCreateManyNetworksInput = {
    token_network_id?: string
    token_id?: string | null
    contract_address: string
  }

  export type wallet_networksCreateManyNetworksInput = {
    wallet_network_id?: string
    wallet_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type token_networksUpdateWithoutNetworksInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    tokens?: tokensUpdateOneWithoutToken_networksNestedInput
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateWithoutNetworksInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateManyWithoutNetworksInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type wallet_networksUpdateWithoutNetworksInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallets?: walletsUpdateOneWithoutWallet_networksNestedInput
  }

  export type wallet_networksUncheckedUpdateWithoutNetworksInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksUncheckedUpdateManyWithoutNetworksInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensCreateManyToken_networksInput = {
    wallet_network_token_id?: string
    wallet_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensUpdateWithoutToken_networksInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallets?: walletsUpdateOneWithoutWallet_network_tokensNestedInput
  }

  export type wallet_network_tokensUncheckedUpdateWithoutToken_networksInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensUncheckedUpdateManyWithoutToken_networksInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type token_networksCreateManyTokensInput = {
    token_network_id?: string
    network_id?: string | null
    contract_address: string
  }

  export type token_networksUpdateWithoutTokensInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    networks?: networksUpdateOneWithoutToken_networksNestedInput
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateWithoutTokensInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutToken_networksNestedInput
  }

  export type token_networksUncheckedUpdateManyWithoutTokensInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type audit_logsCreateManyUsersInput = {
    log_id?: string
    action: string
    target_table?: string | null
    target_id?: string | null
    created_at?: Date | string | null
  }

  export type networksCreateManyUsersInput = {
    network_id?: string
    network_name: string
    symbol: string
    thumbnail?: string | null
    chain_id: string
    block_explorer_url?: string | null
    price_feed_id?: string | null
    is_default_network?: boolean
    is_testnet?: boolean
    rpc_url: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    isEVM?: boolean
  }

  export type walletsCreateManyUsersInput = {
    wallet_id?: string
    wallet_name: string
    wallet_balance?: Decimal | DecimalJsLike | number | string
    wallet_address: string
    wallet_phrase?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type audit_logsUpdateWithoutUsersInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateWithoutUsersInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logsUncheckedUpdateManyWithoutUsersInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_table?: NullableStringFieldUpdateOperationsInput | string | null
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type networksUpdateWithoutUsersInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    token_networks?: token_networksUpdateManyWithoutNetworksNestedInput
    wallet_networks?: wallet_networksUpdateManyWithoutNetworksNestedInput
  }

  export type networksUncheckedUpdateWithoutUsersInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
    token_networks?: token_networksUncheckedUpdateManyWithoutNetworksNestedInput
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutNetworksNestedInput
  }

  export type networksUncheckedUpdateManyWithoutUsersInput = {
    network_id?: StringFieldUpdateOperationsInput | string
    network_name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    chain_id?: StringFieldUpdateOperationsInput | string
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: BoolFieldUpdateOperationsInput | boolean
    is_testnet?: BoolFieldUpdateOperationsInput | boolean
    rpc_url?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEVM?: BoolFieldUpdateOperationsInput | boolean
  }

  export type walletsUpdateWithoutUsersInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUpdateManyWithoutWalletsNestedInput
    wallet_networks?: wallet_networksUpdateManyWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateWithoutUsersInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet_network_tokens?: wallet_network_tokensUncheckedUpdateManyWithoutWalletsNestedInput
    wallet_networks?: wallet_networksUncheckedUpdateManyWithoutWalletsNestedInput
  }

  export type walletsUncheckedUpdateManyWithoutUsersInput = {
    wallet_id?: StringFieldUpdateOperationsInput | string
    wallet_name?: StringFieldUpdateOperationsInput | string
    wallet_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    wallet_phrase?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensCreateManyWalletsInput = {
    wallet_network_token_id?: string
    token_network_id?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    updated_at?: Date | string | null
  }

  export type wallet_networksCreateManyWalletsInput = {
    wallet_network_id?: string
    network_id?: string | null
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type wallet_network_tokensUpdateWithoutWalletsInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_networks?: token_networksUpdateOneWithoutWallet_network_tokensNestedInput
  }

  export type wallet_network_tokensUncheckedUpdateWithoutWalletsInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_network_tokensUncheckedUpdateManyWithoutWalletsInput = {
    wallet_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network_id?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksUpdateWithoutWalletsInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    networks?: networksUpdateOneWithoutWallet_networksNestedInput
  }

  export type wallet_networksUncheckedUpdateWithoutWalletsInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wallet_networksUncheckedUpdateManyWithoutWalletsInput = {
    wallet_network_id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}