
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
 * Model network
 * 
 */
export type network = $Result.DefaultSelection<Prisma.$networkPayload>
/**
 * Model network_swap
 * 
 */
export type network_swap = $Result.DefaultSelection<Prisma.$network_swapPayload>
/**
 * Model token
 * 
 */
export type token = $Result.DefaultSelection<Prisma.$tokenPayload>
/**
 * Model token_network
 * 
 */
export type token_network = $Result.DefaultSelection<Prisma.$token_networkPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_network_token
 * 
 */
export type user_network_token = $Result.DefaultSelection<Prisma.$user_network_tokenPayload>
/**
 * Model user_networks_network
 * 
 */
export type user_networks_network = $Result.DefaultSelection<Prisma.$user_networks_networkPayload>
/**
 * Model user_secret
 * 
 */
export type user_secret = $Result.DefaultSelection<Prisma.$user_secretPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const etransactionstatus: {
  pending: 'pending',
  completed: 'completed',
  canceled: 'canceled',
  failed: 'failed'
};

export type etransactionstatus = (typeof etransactionstatus)[keyof typeof etransactionstatus]

}

export type etransactionstatus = $Enums.etransactionstatus

export const etransactionstatus: typeof $Enums.etransactionstatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Networks
 * const networks = await prisma.network.findMany()
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
   * // Fetch zero or more Networks
   * const networks = await prisma.network.findMany()
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
   * `prisma.network`: Exposes CRUD operations for the **network** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Networks
    * const networks = await prisma.network.findMany()
    * ```
    */
  get network(): Prisma.networkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.network_swap`: Exposes CRUD operations for the **network_swap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Network_swaps
    * const network_swaps = await prisma.network_swap.findMany()
    * ```
    */
  get network_swap(): Prisma.network_swapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token_network`: Exposes CRUD operations for the **token_network** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Token_networks
    * const token_networks = await prisma.token_network.findMany()
    * ```
    */
  get token_network(): Prisma.token_networkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_network_token`: Exposes CRUD operations for the **user_network_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_network_tokens
    * const user_network_tokens = await prisma.user_network_token.findMany()
    * ```
    */
  get user_network_token(): Prisma.user_network_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_networks_network`: Exposes CRUD operations for the **user_networks_network** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_networks_networks
    * const user_networks_networks = await prisma.user_networks_network.findMany()
    * ```
    */
  get user_networks_network(): Prisma.user_networks_networkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_secret`: Exposes CRUD operations for the **user_secret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_secrets
    * const user_secrets = await prisma.user_secret.findMany()
    * ```
    */
  get user_secret(): Prisma.user_secretDelegate<ExtArgs, ClientOptions>;
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
    network: 'network',
    network_swap: 'network_swap',
    token: 'token',
    token_network: 'token_network',
    transaction: 'transaction',
    user: 'user',
    user_network_token: 'user_network_token',
    user_networks_network: 'user_networks_network',
    user_secret: 'user_secret'
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
      modelProps: "network" | "network_swap" | "token" | "token_network" | "transaction" | "user" | "user_network_token" | "user_networks_network" | "user_secret"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      network: {
        payload: Prisma.$networkPayload<ExtArgs>
        fields: Prisma.networkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.networkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.networkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          findFirst: {
            args: Prisma.networkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.networkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          findMany: {
            args: Prisma.networkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>[]
          }
          create: {
            args: Prisma.networkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          createMany: {
            args: Prisma.networkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.networkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>[]
          }
          delete: {
            args: Prisma.networkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          update: {
            args: Prisma.networkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          deleteMany: {
            args: Prisma.networkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.networkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.networkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>[]
          }
          upsert: {
            args: Prisma.networkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$networkPayload>
          }
          aggregate: {
            args: Prisma.NetworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetwork>
          }
          groupBy: {
            args: Prisma.networkGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.networkCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkCountAggregateOutputType> | number
          }
        }
      }
      network_swap: {
        payload: Prisma.$network_swapPayload<ExtArgs>
        fields: Prisma.network_swapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.network_swapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.network_swapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          findFirst: {
            args: Prisma.network_swapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.network_swapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          findMany: {
            args: Prisma.network_swapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>[]
          }
          create: {
            args: Prisma.network_swapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          createMany: {
            args: Prisma.network_swapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.network_swapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>[]
          }
          delete: {
            args: Prisma.network_swapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          update: {
            args: Prisma.network_swapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          deleteMany: {
            args: Prisma.network_swapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.network_swapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.network_swapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>[]
          }
          upsert: {
            args: Prisma.network_swapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$network_swapPayload>
          }
          aggregate: {
            args: Prisma.Network_swapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetwork_swap>
          }
          groupBy: {
            args: Prisma.network_swapGroupByArgs<ExtArgs>
            result: $Utils.Optional<Network_swapGroupByOutputType>[]
          }
          count: {
            args: Prisma.network_swapCountArgs<ExtArgs>
            result: $Utils.Optional<Network_swapCountAggregateOutputType> | number
          }
        }
      }
      token: {
        payload: Prisma.$tokenPayload<ExtArgs>
        fields: Prisma.tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findFirst: {
            args: Prisma.tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          findMany: {
            args: Prisma.tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          create: {
            args: Prisma.tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          createMany: {
            args: Prisma.tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          delete: {
            args: Prisma.tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          update: {
            args: Prisma.tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          deleteMany: {
            args: Prisma.tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>[]
          }
          upsert: {
            args: Prisma.tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      token_network: {
        payload: Prisma.$token_networkPayload<ExtArgs>
        fields: Prisma.token_networkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.token_networkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.token_networkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          findFirst: {
            args: Prisma.token_networkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.token_networkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          findMany: {
            args: Prisma.token_networkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>[]
          }
          create: {
            args: Prisma.token_networkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          createMany: {
            args: Prisma.token_networkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.token_networkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>[]
          }
          delete: {
            args: Prisma.token_networkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          update: {
            args: Prisma.token_networkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          deleteMany: {
            args: Prisma.token_networkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.token_networkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.token_networkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>[]
          }
          upsert: {
            args: Prisma.token_networkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_networkPayload>
          }
          aggregate: {
            args: Prisma.Token_networkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken_network>
          }
          groupBy: {
            args: Prisma.token_networkGroupByArgs<ExtArgs>
            result: $Utils.Optional<Token_networkGroupByOutputType>[]
          }
          count: {
            args: Prisma.token_networkCountArgs<ExtArgs>
            result: $Utils.Optional<Token_networkCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_network_token: {
        payload: Prisma.$user_network_tokenPayload<ExtArgs>
        fields: Prisma.user_network_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_network_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_network_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          findFirst: {
            args: Prisma.user_network_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_network_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          findMany: {
            args: Prisma.user_network_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>[]
          }
          create: {
            args: Prisma.user_network_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          createMany: {
            args: Prisma.user_network_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_network_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>[]
          }
          delete: {
            args: Prisma.user_network_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          update: {
            args: Prisma.user_network_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          deleteMany: {
            args: Prisma.user_network_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_network_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_network_tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>[]
          }
          upsert: {
            args: Prisma.user_network_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_network_tokenPayload>
          }
          aggregate: {
            args: Prisma.User_network_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_network_token>
          }
          groupBy: {
            args: Prisma.user_network_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_network_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_network_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<User_network_tokenCountAggregateOutputType> | number
          }
        }
      }
      user_networks_network: {
        payload: Prisma.$user_networks_networkPayload<ExtArgs>
        fields: Prisma.user_networks_networkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_networks_networkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_networks_networkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          findFirst: {
            args: Prisma.user_networks_networkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_networks_networkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          findMany: {
            args: Prisma.user_networks_networkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>[]
          }
          create: {
            args: Prisma.user_networks_networkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          createMany: {
            args: Prisma.user_networks_networkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_networks_networkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>[]
          }
          delete: {
            args: Prisma.user_networks_networkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          update: {
            args: Prisma.user_networks_networkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          deleteMany: {
            args: Prisma.user_networks_networkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_networks_networkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_networks_networkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>[]
          }
          upsert: {
            args: Prisma.user_networks_networkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_networks_networkPayload>
          }
          aggregate: {
            args: Prisma.User_networks_networkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_networks_network>
          }
          groupBy: {
            args: Prisma.user_networks_networkGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_networks_networkGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_networks_networkCountArgs<ExtArgs>
            result: $Utils.Optional<User_networks_networkCountAggregateOutputType> | number
          }
        }
      }
      user_secret: {
        payload: Prisma.$user_secretPayload<ExtArgs>
        fields: Prisma.user_secretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_secretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_secretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          findFirst: {
            args: Prisma.user_secretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_secretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          findMany: {
            args: Prisma.user_secretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>[]
          }
          create: {
            args: Prisma.user_secretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          createMany: {
            args: Prisma.user_secretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_secretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>[]
          }
          delete: {
            args: Prisma.user_secretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          update: {
            args: Prisma.user_secretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          deleteMany: {
            args: Prisma.user_secretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_secretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_secretUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>[]
          }
          upsert: {
            args: Prisma.user_secretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_secretPayload>
          }
          aggregate: {
            args: Prisma.User_secretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_secret>
          }
          groupBy: {
            args: Prisma.user_secretGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_secretGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_secretCountArgs<ExtArgs>
            result: $Utils.Optional<User_secretCountAggregateOutputType> | number
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
    network?: networkOmit
    network_swap?: network_swapOmit
    token?: tokenOmit
    token_network?: token_networkOmit
    transaction?: transactionOmit
    user?: userOmit
    user_network_token?: user_network_tokenOmit
    user_networks_network?: user_networks_networkOmit
    user_secret?: user_secretOmit
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
   * Count Type NetworkCountOutputType
   */

  export type NetworkCountOutputType = {
    token_network: number
    transaction: number
    user_networks_network: number
  }

  export type NetworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | NetworkCountOutputTypeCountToken_networkArgs
    transaction?: boolean | NetworkCountOutputTypeCountTransactionArgs
    user_networks_network?: boolean | NetworkCountOutputTypeCountUser_networks_networkArgs
  }

  // Custom InputTypes
  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkCountOutputType
     */
    select?: NetworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeCountToken_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networkWhereInput
  }

  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }

  /**
   * NetworkCountOutputType without action
   */
  export type NetworkCountOutputTypeCountUser_networks_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_networks_networkWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    token_network: number
    transaction: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | TokenCountOutputTypeCountToken_networkArgs
    transaction?: boolean | TokenCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountToken_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networkWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type Token_networkCountOutputType
   */

  export type Token_networkCountOutputType = {
    user_network_token: number
  }

  export type Token_networkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_network_token?: boolean | Token_networkCountOutputTypeCountUser_network_tokenArgs
  }

  // Custom InputTypes
  /**
   * Token_networkCountOutputType without action
   */
  export type Token_networkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token_networkCountOutputType
     */
    select?: Token_networkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Token_networkCountOutputType without action
   */
  export type Token_networkCountOutputTypeCountUser_network_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_network_tokenWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_network_token: number
    user_networks_network: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_network_token?: boolean | UserCountOutputTypeCountUser_network_tokenArgs
    user_networks_network?: boolean | UserCountOutputTypeCountUser_networks_networkArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_network_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_network_tokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_networks_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_networks_networkWhereInput
  }


  /**
   * Count Type User_secretCountOutputType
   */

  export type User_secretCountOutputType = {
    user_user_secretidTouser_secret: number
  }

  export type User_secretCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_user_secretidTouser_secret?: boolean | User_secretCountOutputTypeCountUser_user_secretidTouser_secretArgs
  }

  // Custom InputTypes
  /**
   * User_secretCountOutputType without action
   */
  export type User_secretCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_secretCountOutputType
     */
    select?: User_secretCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_secretCountOutputType without action
   */
  export type User_secretCountOutputTypeCountUser_user_secretidTouser_secretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model network
   */

  export type AggregateNetwork = {
    _count: NetworkCountAggregateOutputType | null
    _avg: NetworkAvgAggregateOutputType | null
    _sum: NetworkSumAggregateOutputType | null
    _min: NetworkMinAggregateOutputType | null
    _max: NetworkMaxAggregateOutputType | null
  }

  export type NetworkAvgAggregateOutputType = {
    chain_id: number | null
  }

  export type NetworkSumAggregateOutputType = {
    chain_id: number | null
  }

  export type NetworkMinAggregateOutputType = {
    id: string | null
    name: string | null
    rpc_url: string | null
    chain_id: number | null
    current_symbol: string | null
    price_feed_id: string | null
    block_explorer_url: string | null
    thumbnail: string | null
    is_default_network: boolean | null
    is_testnet: boolean | null
    networkswapid: string | null
    creatorid: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NetworkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rpc_url: string | null
    chain_id: number | null
    current_symbol: string | null
    price_feed_id: string | null
    block_explorer_url: string | null
    thumbnail: string | null
    is_default_network: boolean | null
    is_testnet: boolean | null
    networkswapid: string | null
    creatorid: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NetworkCountAggregateOutputType = {
    id: number
    name: number
    rpc_url: number
    chain_id: number
    current_symbol: number
    price_feed_id: number
    block_explorer_url: number
    thumbnail: number
    is_default_network: number
    is_testnet: number
    networkswapid: number
    creatorid: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type NetworkAvgAggregateInputType = {
    chain_id?: true
  }

  export type NetworkSumAggregateInputType = {
    chain_id?: true
  }

  export type NetworkMinAggregateInputType = {
    id?: true
    name?: true
    rpc_url?: true
    chain_id?: true
    current_symbol?: true
    price_feed_id?: true
    block_explorer_url?: true
    thumbnail?: true
    is_default_network?: true
    is_testnet?: true
    networkswapid?: true
    creatorid?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NetworkMaxAggregateInputType = {
    id?: true
    name?: true
    rpc_url?: true
    chain_id?: true
    current_symbol?: true
    price_feed_id?: true
    block_explorer_url?: true
    thumbnail?: true
    is_default_network?: true
    is_testnet?: true
    networkswapid?: true
    creatorid?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NetworkCountAggregateInputType = {
    id?: true
    name?: true
    rpc_url?: true
    chain_id?: true
    current_symbol?: true
    price_feed_id?: true
    block_explorer_url?: true
    thumbnail?: true
    is_default_network?: true
    is_testnet?: true
    networkswapid?: true
    creatorid?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type NetworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which network to aggregate.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: networkWhereUniqueInput
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
    _count?: true | NetworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkMaxAggregateInputType
  }

  export type GetNetworkAggregateType<T extends NetworkAggregateArgs> = {
        [P in keyof T & keyof AggregateNetwork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetwork[P]>
      : GetScalarType<T[P], AggregateNetwork[P]>
  }




  export type networkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: networkWhereInput
    orderBy?: networkOrderByWithAggregationInput | networkOrderByWithAggregationInput[]
    by: NetworkScalarFieldEnum[] | NetworkScalarFieldEnum
    having?: networkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkCountAggregateInputType | true
    _avg?: NetworkAvgAggregateInputType
    _sum?: NetworkSumAggregateInputType
    _min?: NetworkMinAggregateInputType
    _max?: NetworkMaxAggregateInputType
  }

  export type NetworkGroupByOutputType = {
    id: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id: string | null
    block_explorer_url: string | null
    thumbnail: string | null
    is_default_network: boolean | null
    is_testnet: boolean | null
    networkswapid: string | null
    creatorid: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: NetworkCountAggregateOutputType | null
    _avg: NetworkAvgAggregateOutputType | null
    _sum: NetworkSumAggregateOutputType | null
    _min: NetworkMinAggregateOutputType | null
    _max: NetworkMaxAggregateOutputType | null
  }

  type GetNetworkGroupByPayload<T extends networkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkGroupByOutputType[P]>
        }
      >
    >


  export type networkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpc_url?: boolean
    chain_id?: boolean
    current_symbol?: boolean
    price_feed_id?: boolean
    block_explorer_url?: boolean
    thumbnail?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    networkswapid?: boolean
    creatorid?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    network_swap?: boolean | network$network_swapArgs<ExtArgs>
    token_network?: boolean | network$token_networkArgs<ExtArgs>
    transaction?: boolean | network$transactionArgs<ExtArgs>
    user_networks_network?: boolean | network$user_networks_networkArgs<ExtArgs>
    _count?: boolean | NetworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["network"]>

  export type networkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpc_url?: boolean
    chain_id?: boolean
    current_symbol?: boolean
    price_feed_id?: boolean
    block_explorer_url?: boolean
    thumbnail?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    networkswapid?: boolean
    creatorid?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["network"]>

  export type networkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rpc_url?: boolean
    chain_id?: boolean
    current_symbol?: boolean
    price_feed_id?: boolean
    block_explorer_url?: boolean
    thumbnail?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    networkswapid?: boolean
    creatorid?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["network"]>

  export type networkSelectScalar = {
    id?: boolean
    name?: boolean
    rpc_url?: boolean
    chain_id?: boolean
    current_symbol?: boolean
    price_feed_id?: boolean
    block_explorer_url?: boolean
    thumbnail?: boolean
    is_default_network?: boolean
    is_testnet?: boolean
    networkswapid?: boolean
    creatorid?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type networkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rpc_url" | "chain_id" | "current_symbol" | "price_feed_id" | "block_explorer_url" | "thumbnail" | "is_default_network" | "is_testnet" | "networkswapid" | "creatorid" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["network"]>
  export type networkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network_swap?: boolean | network$network_swapArgs<ExtArgs>
    token_network?: boolean | network$token_networkArgs<ExtArgs>
    transaction?: boolean | network$transactionArgs<ExtArgs>
    user_networks_network?: boolean | network$user_networks_networkArgs<ExtArgs>
    _count?: boolean | NetworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type networkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type networkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $networkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "network"
    objects: {
      network_swap: Prisma.$network_swapPayload<ExtArgs> | null
      token_network: Prisma.$token_networkPayload<ExtArgs>[]
      transaction: Prisma.$transactionPayload<ExtArgs>[]
      user_networks_network: Prisma.$user_networks_networkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rpc_url: string
      chain_id: number
      current_symbol: string
      price_feed_id: string | null
      block_explorer_url: string | null
      thumbnail: string | null
      is_default_network: boolean | null
      is_testnet: boolean | null
      networkswapid: string | null
      creatorid: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["network"]>
    composites: {}
  }

  type networkGetPayload<S extends boolean | null | undefined | networkDefaultArgs> = $Result.GetResult<Prisma.$networkPayload, S>

  type networkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<networkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkCountAggregateInputType | true
    }

  export interface networkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['network'], meta: { name: 'network' } }
    /**
     * Find zero or one Network that matches the filter.
     * @param {networkFindUniqueArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends networkFindUniqueArgs>(args: SelectSubset<T, networkFindUniqueArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Network that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {networkFindUniqueOrThrowArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends networkFindUniqueOrThrowArgs>(args: SelectSubset<T, networkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindFirstArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends networkFindFirstArgs>(args?: SelectSubset<T, networkFindFirstArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindFirstOrThrowArgs} args - Arguments to find a Network
     * @example
     * // Get one Network
     * const network = await prisma.network.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends networkFindFirstOrThrowArgs>(args?: SelectSubset<T, networkFindFirstOrThrowArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Networks
     * const networks = await prisma.network.findMany()
     * 
     * // Get first 10 Networks
     * const networks = await prisma.network.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkWithIdOnly = await prisma.network.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends networkFindManyArgs>(args?: SelectSubset<T, networkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Network.
     * @param {networkCreateArgs} args - Arguments to create a Network.
     * @example
     * // Create one Network
     * const Network = await prisma.network.create({
     *   data: {
     *     // ... data to create a Network
     *   }
     * })
     * 
     */
    create<T extends networkCreateArgs>(args: SelectSubset<T, networkCreateArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Networks.
     * @param {networkCreateManyArgs} args - Arguments to create many Networks.
     * @example
     * // Create many Networks
     * const network = await prisma.network.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends networkCreateManyArgs>(args?: SelectSubset<T, networkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Networks and returns the data saved in the database.
     * @param {networkCreateManyAndReturnArgs} args - Arguments to create many Networks.
     * @example
     * // Create many Networks
     * const network = await prisma.network.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Networks and only return the `id`
     * const networkWithIdOnly = await prisma.network.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends networkCreateManyAndReturnArgs>(args?: SelectSubset<T, networkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Network.
     * @param {networkDeleteArgs} args - Arguments to delete one Network.
     * @example
     * // Delete one Network
     * const Network = await prisma.network.delete({
     *   where: {
     *     // ... filter to delete one Network
     *   }
     * })
     * 
     */
    delete<T extends networkDeleteArgs>(args: SelectSubset<T, networkDeleteArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Network.
     * @param {networkUpdateArgs} args - Arguments to update one Network.
     * @example
     * // Update one Network
     * const network = await prisma.network.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends networkUpdateArgs>(args: SelectSubset<T, networkUpdateArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Networks.
     * @param {networkDeleteManyArgs} args - Arguments to filter Networks to delete.
     * @example
     * // Delete a few Networks
     * const { count } = await prisma.network.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends networkDeleteManyArgs>(args?: SelectSubset<T, networkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Networks
     * const network = await prisma.network.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends networkUpdateManyArgs>(args: SelectSubset<T, networkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Networks and returns the data updated in the database.
     * @param {networkUpdateManyAndReturnArgs} args - Arguments to update many Networks.
     * @example
     * // Update many Networks
     * const network = await prisma.network.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Networks and only return the `id`
     * const networkWithIdOnly = await prisma.network.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends networkUpdateManyAndReturnArgs>(args: SelectSubset<T, networkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Network.
     * @param {networkUpsertArgs} args - Arguments to update or create a Network.
     * @example
     * // Update or create a Network
     * const network = await prisma.network.upsert({
     *   create: {
     *     // ... data to create a Network
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Network we want to update
     *   }
     * })
     */
    upsert<T extends networkUpsertArgs>(args: SelectSubset<T, networkUpsertArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkCountArgs} args - Arguments to filter Networks to count.
     * @example
     * // Count the number of Networks
     * const count = await prisma.network.count({
     *   where: {
     *     // ... the filter for the Networks we want to count
     *   }
     * })
    **/
    count<T extends networkCountArgs>(
      args?: Subset<T, networkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkAggregateArgs>(args: Subset<T, NetworkAggregateArgs>): Prisma.PrismaPromise<GetNetworkAggregateType<T>>

    /**
     * Group by Network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {networkGroupByArgs} args - Group by arguments.
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
      T extends networkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: networkGroupByArgs['orderBy'] }
        : { orderBy?: networkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, networkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the network model
   */
  readonly fields: networkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for network.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__networkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network_swap<T extends network$network_swapArgs<ExtArgs> = {}>(args?: Subset<T, network$network_swapArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token_network<T extends network$token_networkArgs<ExtArgs> = {}>(args?: Subset<T, network$token_networkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends network$transactionArgs<ExtArgs> = {}>(args?: Subset<T, network$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_networks_network<T extends network$user_networks_networkArgs<ExtArgs> = {}>(args?: Subset<T, network$user_networks_networkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the network model
   */
  interface networkFieldRefs {
    readonly id: FieldRef<"network", 'String'>
    readonly name: FieldRef<"network", 'String'>
    readonly rpc_url: FieldRef<"network", 'String'>
    readonly chain_id: FieldRef<"network", 'Int'>
    readonly current_symbol: FieldRef<"network", 'String'>
    readonly price_feed_id: FieldRef<"network", 'String'>
    readonly block_explorer_url: FieldRef<"network", 'String'>
    readonly thumbnail: FieldRef<"network", 'String'>
    readonly is_default_network: FieldRef<"network", 'Boolean'>
    readonly is_testnet: FieldRef<"network", 'Boolean'>
    readonly networkswapid: FieldRef<"network", 'String'>
    readonly creatorid: FieldRef<"network", 'String'>
    readonly created_at: FieldRef<"network", 'DateTime'>
    readonly updated_at: FieldRef<"network", 'DateTime'>
    readonly deleted_at: FieldRef<"network", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * network findUnique
   */
  export type networkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network findUniqueOrThrow
   */
  export type networkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network findFirst
   */
  export type networkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networkWhereUniqueInput
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
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network findFirstOrThrow
   */
  export type networkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which network to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for networks.
     */
    cursor?: networkWhereUniqueInput
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
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network findMany
   */
  export type networkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter, which networks to fetch.
     */
    where?: networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of networks to fetch.
     */
    orderBy?: networkOrderByWithRelationInput | networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing networks.
     */
    cursor?: networkWhereUniqueInput
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
    distinct?: NetworkScalarFieldEnum | NetworkScalarFieldEnum[]
  }

  /**
   * network create
   */
  export type networkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The data needed to create a network.
     */
    data: XOR<networkCreateInput, networkUncheckedCreateInput>
  }

  /**
   * network createMany
   */
  export type networkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many networks.
     */
    data: networkCreateManyInput | networkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * network createManyAndReturn
   */
  export type networkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * The data used to create many networks.
     */
    data: networkCreateManyInput | networkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * network update
   */
  export type networkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The data needed to update a network.
     */
    data: XOR<networkUpdateInput, networkUncheckedUpdateInput>
    /**
     * Choose, which network to update.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network updateMany
   */
  export type networkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update networks.
     */
    data: XOR<networkUpdateManyMutationInput, networkUncheckedUpdateManyInput>
    /**
     * Filter which networks to update
     */
    where?: networkWhereInput
    /**
     * Limit how many networks to update.
     */
    limit?: number
  }

  /**
   * network updateManyAndReturn
   */
  export type networkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * The data used to update networks.
     */
    data: XOR<networkUpdateManyMutationInput, networkUncheckedUpdateManyInput>
    /**
     * Filter which networks to update
     */
    where?: networkWhereInput
    /**
     * Limit how many networks to update.
     */
    limit?: number
  }

  /**
   * network upsert
   */
  export type networkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * The filter to search for the network to update in case it exists.
     */
    where: networkWhereUniqueInput
    /**
     * In case the network found by the `where` argument doesn't exist, create a new network with this data.
     */
    create: XOR<networkCreateInput, networkUncheckedCreateInput>
    /**
     * In case the network was found with the provided `where` argument, update it with this data.
     */
    update: XOR<networkUpdateInput, networkUncheckedUpdateInput>
  }

  /**
   * network delete
   */
  export type networkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    /**
     * Filter which network to delete.
     */
    where: networkWhereUniqueInput
  }

  /**
   * network deleteMany
   */
  export type networkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which networks to delete
     */
    where?: networkWhereInput
    /**
     * Limit how many networks to delete.
     */
    limit?: number
  }

  /**
   * network.network_swap
   */
  export type network$network_swapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    where?: network_swapWhereInput
  }

  /**
   * network.token_network
   */
  export type network$token_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    where?: token_networkWhereInput
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    cursor?: token_networkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Token_networkScalarFieldEnum | Token_networkScalarFieldEnum[]
  }

  /**
   * network.transaction
   */
  export type network$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * network.user_networks_network
   */
  export type network$user_networks_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    where?: user_networks_networkWhereInput
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    cursor?: user_networks_networkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_networks_networkScalarFieldEnum | User_networks_networkScalarFieldEnum[]
  }

  /**
   * network without action
   */
  export type networkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
  }


  /**
   * Model network_swap
   */

  export type AggregateNetwork_swap = {
    _count: Network_swapCountAggregateOutputType | null
    _min: Network_swapMinAggregateOutputType | null
    _max: Network_swapMaxAggregateOutputType | null
  }

  export type Network_swapMinAggregateOutputType = {
    id: string | null
    network_id: string | null
    swap_contract_address: string | null
    factory_contract_address: string | null
    quote_contract_address: string | null
    wrapped_token_address: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Network_swapMaxAggregateOutputType = {
    id: string | null
    network_id: string | null
    swap_contract_address: string | null
    factory_contract_address: string | null
    quote_contract_address: string | null
    wrapped_token_address: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Network_swapCountAggregateOutputType = {
    id: number
    network_id: number
    swap_contract_address: number
    factory_contract_address: number
    quote_contract_address: number
    wrapped_token_address: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Network_swapMinAggregateInputType = {
    id?: true
    network_id?: true
    swap_contract_address?: true
    factory_contract_address?: true
    quote_contract_address?: true
    wrapped_token_address?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Network_swapMaxAggregateInputType = {
    id?: true
    network_id?: true
    swap_contract_address?: true
    factory_contract_address?: true
    quote_contract_address?: true
    wrapped_token_address?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Network_swapCountAggregateInputType = {
    id?: true
    network_id?: true
    swap_contract_address?: true
    factory_contract_address?: true
    quote_contract_address?: true
    wrapped_token_address?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Network_swapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which network_swap to aggregate.
     */
    where?: network_swapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of network_swaps to fetch.
     */
    orderBy?: network_swapOrderByWithRelationInput | network_swapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: network_swapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` network_swaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` network_swaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned network_swaps
    **/
    _count?: true | Network_swapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Network_swapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Network_swapMaxAggregateInputType
  }

  export type GetNetwork_swapAggregateType<T extends Network_swapAggregateArgs> = {
        [P in keyof T & keyof AggregateNetwork_swap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetwork_swap[P]>
      : GetScalarType<T[P], AggregateNetwork_swap[P]>
  }




  export type network_swapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: network_swapWhereInput
    orderBy?: network_swapOrderByWithAggregationInput | network_swapOrderByWithAggregationInput[]
    by: Network_swapScalarFieldEnum[] | Network_swapScalarFieldEnum
    having?: network_swapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Network_swapCountAggregateInputType | true
    _min?: Network_swapMinAggregateInputType
    _max?: Network_swapMaxAggregateInputType
  }

  export type Network_swapGroupByOutputType = {
    id: string
    network_id: string | null
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Network_swapCountAggregateOutputType | null
    _min: Network_swapMinAggregateOutputType | null
    _max: Network_swapMaxAggregateOutputType | null
  }

  type GetNetwork_swapGroupByPayload<T extends network_swapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Network_swapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Network_swapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Network_swapGroupByOutputType[P]>
            : GetScalarType<T[P], Network_swapGroupByOutputType[P]>
        }
      >
    >


  export type network_swapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network_id?: boolean
    swap_contract_address?: boolean
    factory_contract_address?: boolean
    quote_contract_address?: boolean
    wrapped_token_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }, ExtArgs["result"]["network_swap"]>

  export type network_swapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network_id?: boolean
    swap_contract_address?: boolean
    factory_contract_address?: boolean
    quote_contract_address?: boolean
    wrapped_token_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }, ExtArgs["result"]["network_swap"]>

  export type network_swapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    network_id?: boolean
    swap_contract_address?: boolean
    factory_contract_address?: boolean
    quote_contract_address?: boolean
    wrapped_token_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }, ExtArgs["result"]["network_swap"]>

  export type network_swapSelectScalar = {
    id?: boolean
    network_id?: boolean
    swap_contract_address?: boolean
    factory_contract_address?: boolean
    quote_contract_address?: boolean
    wrapped_token_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type network_swapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "network_id" | "swap_contract_address" | "factory_contract_address" | "quote_contract_address" | "wrapped_token_address" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["network_swap"]>
  export type network_swapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }
  export type network_swapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }
  export type network_swapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | network_swap$networkArgs<ExtArgs>
  }

  export type $network_swapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "network_swap"
    objects: {
      network: Prisma.$networkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      network_id: string | null
      swap_contract_address: string
      factory_contract_address: string
      quote_contract_address: string
      wrapped_token_address: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["network_swap"]>
    composites: {}
  }

  type network_swapGetPayload<S extends boolean | null | undefined | network_swapDefaultArgs> = $Result.GetResult<Prisma.$network_swapPayload, S>

  type network_swapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<network_swapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Network_swapCountAggregateInputType | true
    }

  export interface network_swapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['network_swap'], meta: { name: 'network_swap' } }
    /**
     * Find zero or one Network_swap that matches the filter.
     * @param {network_swapFindUniqueArgs} args - Arguments to find a Network_swap
     * @example
     * // Get one Network_swap
     * const network_swap = await prisma.network_swap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends network_swapFindUniqueArgs>(args: SelectSubset<T, network_swapFindUniqueArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Network_swap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {network_swapFindUniqueOrThrowArgs} args - Arguments to find a Network_swap
     * @example
     * // Get one Network_swap
     * const network_swap = await prisma.network_swap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends network_swapFindUniqueOrThrowArgs>(args: SelectSubset<T, network_swapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network_swap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapFindFirstArgs} args - Arguments to find a Network_swap
     * @example
     * // Get one Network_swap
     * const network_swap = await prisma.network_swap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends network_swapFindFirstArgs>(args?: SelectSubset<T, network_swapFindFirstArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Network_swap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapFindFirstOrThrowArgs} args - Arguments to find a Network_swap
     * @example
     * // Get one Network_swap
     * const network_swap = await prisma.network_swap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends network_swapFindFirstOrThrowArgs>(args?: SelectSubset<T, network_swapFindFirstOrThrowArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Network_swaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Network_swaps
     * const network_swaps = await prisma.network_swap.findMany()
     * 
     * // Get first 10 Network_swaps
     * const network_swaps = await prisma.network_swap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const network_swapWithIdOnly = await prisma.network_swap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends network_swapFindManyArgs>(args?: SelectSubset<T, network_swapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Network_swap.
     * @param {network_swapCreateArgs} args - Arguments to create a Network_swap.
     * @example
     * // Create one Network_swap
     * const Network_swap = await prisma.network_swap.create({
     *   data: {
     *     // ... data to create a Network_swap
     *   }
     * })
     * 
     */
    create<T extends network_swapCreateArgs>(args: SelectSubset<T, network_swapCreateArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Network_swaps.
     * @param {network_swapCreateManyArgs} args - Arguments to create many Network_swaps.
     * @example
     * // Create many Network_swaps
     * const network_swap = await prisma.network_swap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends network_swapCreateManyArgs>(args?: SelectSubset<T, network_swapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Network_swaps and returns the data saved in the database.
     * @param {network_swapCreateManyAndReturnArgs} args - Arguments to create many Network_swaps.
     * @example
     * // Create many Network_swaps
     * const network_swap = await prisma.network_swap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Network_swaps and only return the `id`
     * const network_swapWithIdOnly = await prisma.network_swap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends network_swapCreateManyAndReturnArgs>(args?: SelectSubset<T, network_swapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Network_swap.
     * @param {network_swapDeleteArgs} args - Arguments to delete one Network_swap.
     * @example
     * // Delete one Network_swap
     * const Network_swap = await prisma.network_swap.delete({
     *   where: {
     *     // ... filter to delete one Network_swap
     *   }
     * })
     * 
     */
    delete<T extends network_swapDeleteArgs>(args: SelectSubset<T, network_swapDeleteArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Network_swap.
     * @param {network_swapUpdateArgs} args - Arguments to update one Network_swap.
     * @example
     * // Update one Network_swap
     * const network_swap = await prisma.network_swap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends network_swapUpdateArgs>(args: SelectSubset<T, network_swapUpdateArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Network_swaps.
     * @param {network_swapDeleteManyArgs} args - Arguments to filter Network_swaps to delete.
     * @example
     * // Delete a few Network_swaps
     * const { count } = await prisma.network_swap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends network_swapDeleteManyArgs>(args?: SelectSubset<T, network_swapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Network_swaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Network_swaps
     * const network_swap = await prisma.network_swap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends network_swapUpdateManyArgs>(args: SelectSubset<T, network_swapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Network_swaps and returns the data updated in the database.
     * @param {network_swapUpdateManyAndReturnArgs} args - Arguments to update many Network_swaps.
     * @example
     * // Update many Network_swaps
     * const network_swap = await prisma.network_swap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Network_swaps and only return the `id`
     * const network_swapWithIdOnly = await prisma.network_swap.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends network_swapUpdateManyAndReturnArgs>(args: SelectSubset<T, network_swapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Network_swap.
     * @param {network_swapUpsertArgs} args - Arguments to update or create a Network_swap.
     * @example
     * // Update or create a Network_swap
     * const network_swap = await prisma.network_swap.upsert({
     *   create: {
     *     // ... data to create a Network_swap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Network_swap we want to update
     *   }
     * })
     */
    upsert<T extends network_swapUpsertArgs>(args: SelectSubset<T, network_swapUpsertArgs<ExtArgs>>): Prisma__network_swapClient<$Result.GetResult<Prisma.$network_swapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Network_swaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapCountArgs} args - Arguments to filter Network_swaps to count.
     * @example
     * // Count the number of Network_swaps
     * const count = await prisma.network_swap.count({
     *   where: {
     *     // ... the filter for the Network_swaps we want to count
     *   }
     * })
    **/
    count<T extends network_swapCountArgs>(
      args?: Subset<T, network_swapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Network_swapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Network_swap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Network_swapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Network_swapAggregateArgs>(args: Subset<T, Network_swapAggregateArgs>): Prisma.PrismaPromise<GetNetwork_swapAggregateType<T>>

    /**
     * Group by Network_swap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {network_swapGroupByArgs} args - Group by arguments.
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
      T extends network_swapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: network_swapGroupByArgs['orderBy'] }
        : { orderBy?: network_swapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, network_swapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetwork_swapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the network_swap model
   */
  readonly fields: network_swapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for network_swap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__network_swapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends network_swap$networkArgs<ExtArgs> = {}>(args?: Subset<T, network_swap$networkArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the network_swap model
   */
  interface network_swapFieldRefs {
    readonly id: FieldRef<"network_swap", 'String'>
    readonly network_id: FieldRef<"network_swap", 'String'>
    readonly swap_contract_address: FieldRef<"network_swap", 'String'>
    readonly factory_contract_address: FieldRef<"network_swap", 'String'>
    readonly quote_contract_address: FieldRef<"network_swap", 'String'>
    readonly wrapped_token_address: FieldRef<"network_swap", 'String'>
    readonly created_at: FieldRef<"network_swap", 'DateTime'>
    readonly updated_at: FieldRef<"network_swap", 'DateTime'>
    readonly deleted_at: FieldRef<"network_swap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * network_swap findUnique
   */
  export type network_swapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter, which network_swap to fetch.
     */
    where: network_swapWhereUniqueInput
  }

  /**
   * network_swap findUniqueOrThrow
   */
  export type network_swapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter, which network_swap to fetch.
     */
    where: network_swapWhereUniqueInput
  }

  /**
   * network_swap findFirst
   */
  export type network_swapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter, which network_swap to fetch.
     */
    where?: network_swapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of network_swaps to fetch.
     */
    orderBy?: network_swapOrderByWithRelationInput | network_swapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for network_swaps.
     */
    cursor?: network_swapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` network_swaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` network_swaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of network_swaps.
     */
    distinct?: Network_swapScalarFieldEnum | Network_swapScalarFieldEnum[]
  }

  /**
   * network_swap findFirstOrThrow
   */
  export type network_swapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter, which network_swap to fetch.
     */
    where?: network_swapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of network_swaps to fetch.
     */
    orderBy?: network_swapOrderByWithRelationInput | network_swapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for network_swaps.
     */
    cursor?: network_swapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` network_swaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` network_swaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of network_swaps.
     */
    distinct?: Network_swapScalarFieldEnum | Network_swapScalarFieldEnum[]
  }

  /**
   * network_swap findMany
   */
  export type network_swapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter, which network_swaps to fetch.
     */
    where?: network_swapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of network_swaps to fetch.
     */
    orderBy?: network_swapOrderByWithRelationInput | network_swapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing network_swaps.
     */
    cursor?: network_swapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` network_swaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` network_swaps.
     */
    skip?: number
    distinct?: Network_swapScalarFieldEnum | Network_swapScalarFieldEnum[]
  }

  /**
   * network_swap create
   */
  export type network_swapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * The data needed to create a network_swap.
     */
    data: XOR<network_swapCreateInput, network_swapUncheckedCreateInput>
  }

  /**
   * network_swap createMany
   */
  export type network_swapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many network_swaps.
     */
    data: network_swapCreateManyInput | network_swapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * network_swap createManyAndReturn
   */
  export type network_swapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * The data used to create many network_swaps.
     */
    data: network_swapCreateManyInput | network_swapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * network_swap update
   */
  export type network_swapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * The data needed to update a network_swap.
     */
    data: XOR<network_swapUpdateInput, network_swapUncheckedUpdateInput>
    /**
     * Choose, which network_swap to update.
     */
    where: network_swapWhereUniqueInput
  }

  /**
   * network_swap updateMany
   */
  export type network_swapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update network_swaps.
     */
    data: XOR<network_swapUpdateManyMutationInput, network_swapUncheckedUpdateManyInput>
    /**
     * Filter which network_swaps to update
     */
    where?: network_swapWhereInput
    /**
     * Limit how many network_swaps to update.
     */
    limit?: number
  }

  /**
   * network_swap updateManyAndReturn
   */
  export type network_swapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * The data used to update network_swaps.
     */
    data: XOR<network_swapUpdateManyMutationInput, network_swapUncheckedUpdateManyInput>
    /**
     * Filter which network_swaps to update
     */
    where?: network_swapWhereInput
    /**
     * Limit how many network_swaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * network_swap upsert
   */
  export type network_swapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * The filter to search for the network_swap to update in case it exists.
     */
    where: network_swapWhereUniqueInput
    /**
     * In case the network_swap found by the `where` argument doesn't exist, create a new network_swap with this data.
     */
    create: XOR<network_swapCreateInput, network_swapUncheckedCreateInput>
    /**
     * In case the network_swap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<network_swapUpdateInput, network_swapUncheckedUpdateInput>
  }

  /**
   * network_swap delete
   */
  export type network_swapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
    /**
     * Filter which network_swap to delete.
     */
    where: network_swapWhereUniqueInput
  }

  /**
   * network_swap deleteMany
   */
  export type network_swapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which network_swaps to delete
     */
    where?: network_swapWhereInput
    /**
     * Limit how many network_swaps to delete.
     */
    limit?: number
  }

  /**
   * network_swap.network
   */
  export type network_swap$networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    where?: networkWhereInput
  }

  /**
   * network_swap without action
   */
  export type network_swapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network_swap
     */
    select?: network_swapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network_swap
     */
    omit?: network_swapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: network_swapInclude<ExtArgs> | null
  }


  /**
   * Model token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    decimal: number | null
  }

  export type TokenSumAggregateOutputType = {
    decimal: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    decimal: number | null
    thumbnail: string | null
    price_feed_id: string | null
    hz_percent_change: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    decimal: number | null
    thumbnail: string | null
    price_feed_id: string | null
    hz_percent_change: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    decimal: number
    thumbnail: number
    price_feed_id: number
    hz_percent_change: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    decimal?: true
  }

  export type TokenSumAggregateInputType = {
    decimal?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    decimal?: true
    thumbnail?: true
    price_feed_id?: true
    hz_percent_change?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    decimal?: true
    thumbnail?: true
    price_feed_id?: true
    hz_percent_change?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    decimal?: true
    thumbnail?: true
    price_feed_id?: true
    hz_percent_change?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token to aggregate.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokenWhereUniqueInput
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
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokenWhereInput
    orderBy?: tokenOrderByWithAggregationInput | tokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    name: string
    symbol: string
    decimal: number
    thumbnail: string | null
    price_feed_id: string | null
    hz_percent_change: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    decimal?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    hz_percent_change?: boolean
    created_at?: boolean
    updated_at?: boolean
    token_network?: boolean | token$token_networkArgs<ExtArgs>
    transaction?: boolean | token$transactionArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    decimal?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    hz_percent_change?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["token"]>

  export type tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    decimal?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    hz_percent_change?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["token"]>

  export type tokenSelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
    decimal?: boolean
    thumbnail?: boolean
    price_feed_id?: boolean
    hz_percent_change?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "symbol" | "decimal" | "thumbnail" | "price_feed_id" | "hz_percent_change" | "created_at" | "updated_at", ExtArgs["result"]["token"]>
  export type tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | token$token_networkArgs<ExtArgs>
    transaction?: boolean | token$transactionArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token"
    objects: {
      token_network: Prisma.$token_networkPayload<ExtArgs>[]
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      symbol: string
      decimal: number
      thumbnail: string | null
      price_feed_id: string | null
      hz_percent_change: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type tokenGetPayload<S extends boolean | null | undefined | tokenDefaultArgs> = $Result.GetResult<Prisma.$tokenPayload, S>

  type tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token'], meta: { name: 'token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {tokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokenFindUniqueArgs>(args: SelectSubset<T, tokenFindUniqueArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokenFindFirstArgs>(args?: SelectSubset<T, tokenFindFirstArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokenFindManyArgs>(args?: SelectSubset<T, tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {tokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends tokenCreateArgs>(args: SelectSubset<T, tokenCreateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {tokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokenCreateManyArgs>(args?: SelectSubset<T, tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {tokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {tokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends tokenDeleteArgs>(args: SelectSubset<T, tokenDeleteArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {tokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokenUpdateArgs>(args: SelectSubset<T, tokenUpdateArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokenDeleteManyArgs>(args?: SelectSubset<T, tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokenUpdateManyArgs>(args: SelectSubset<T, tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {tokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {tokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends tokenUpsertArgs>(args: SelectSubset<T, tokenUpsertArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokenCountArgs>(
      args?: Subset<T, tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokenGroupByArgs} args - Group by arguments.
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
      T extends tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokenGroupByArgs['orderBy'] }
        : { orderBy?: tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token model
   */
  readonly fields: tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token_network<T extends token$token_networkArgs<ExtArgs> = {}>(args?: Subset<T, token$token_networkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends token$transactionArgs<ExtArgs> = {}>(args?: Subset<T, token$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the token model
   */
  interface tokenFieldRefs {
    readonly id: FieldRef<"token", 'String'>
    readonly name: FieldRef<"token", 'String'>
    readonly symbol: FieldRef<"token", 'String'>
    readonly decimal: FieldRef<"token", 'Int'>
    readonly thumbnail: FieldRef<"token", 'String'>
    readonly price_feed_id: FieldRef<"token", 'String'>
    readonly hz_percent_change: FieldRef<"token", 'String'>
    readonly created_at: FieldRef<"token", 'DateTime'>
    readonly updated_at: FieldRef<"token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * token findUnique
   */
  export type tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findUniqueOrThrow
   */
  export type tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token findFirst
   */
  export type tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
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
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findFirstOrThrow
   */
  export type tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which token to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokenWhereUniqueInput
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
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token findMany
   */
  export type tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokenOrderByWithRelationInput | tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokenWhereUniqueInput
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
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * token create
   */
  export type tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a token.
     */
    data: XOR<tokenCreateInput, tokenUncheckedCreateInput>
  }

  /**
   * token createMany
   */
  export type tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token createManyAndReturn
   */
  export type tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to create many tokens.
     */
    data: tokenCreateManyInput | tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token update
   */
  export type tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a token.
     */
    data: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
    /**
     * Choose, which token to update.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token updateMany
   */
  export type tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * token updateManyAndReturn
   */
  export type tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * The data used to update tokens.
     */
    data: XOR<tokenUpdateManyMutationInput, tokenUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * token upsert
   */
  export type tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the token to update in case it exists.
     */
    where: tokenWhereUniqueInput
    /**
     * In case the token found by the `where` argument doesn't exist, create a new token with this data.
     */
    create: XOR<tokenCreateInput, tokenUncheckedCreateInput>
    /**
     * In case the token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokenUpdateInput, tokenUncheckedUpdateInput>
  }

  /**
   * token delete
   */
  export type tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    /**
     * Filter which token to delete.
     */
    where: tokenWhereUniqueInput
  }

  /**
   * token deleteMany
   */
  export type tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokenWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * token.token_network
   */
  export type token$token_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    where?: token_networkWhereInput
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    cursor?: token_networkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Token_networkScalarFieldEnum | Token_networkScalarFieldEnum[]
  }

  /**
   * token.transaction
   */
  export type token$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * token without action
   */
  export type tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
  }


  /**
   * Model token_network
   */

  export type AggregateToken_network = {
    _count: Token_networkCountAggregateOutputType | null
    _min: Token_networkMinAggregateOutputType | null
    _max: Token_networkMaxAggregateOutputType | null
  }

  export type Token_networkMinAggregateOutputType = {
    token_network_id: string | null
    contract_address: string | null
    token_id: string | null
    network_id: string | null
  }

  export type Token_networkMaxAggregateOutputType = {
    token_network_id: string | null
    contract_address: string | null
    token_id: string | null
    network_id: string | null
  }

  export type Token_networkCountAggregateOutputType = {
    token_network_id: number
    contract_address: number
    token_id: number
    network_id: number
    _all: number
  }


  export type Token_networkMinAggregateInputType = {
    token_network_id?: true
    contract_address?: true
    token_id?: true
    network_id?: true
  }

  export type Token_networkMaxAggregateInputType = {
    token_network_id?: true
    contract_address?: true
    token_id?: true
    network_id?: true
  }

  export type Token_networkCountAggregateInputType = {
    token_network_id?: true
    contract_address?: true
    token_id?: true
    network_id?: true
    _all?: true
  }

  export type Token_networkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_network to aggregate.
     */
    where?: token_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: token_networkWhereUniqueInput
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
    _count?: true | Token_networkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Token_networkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Token_networkMaxAggregateInputType
  }

  export type GetToken_networkAggregateType<T extends Token_networkAggregateArgs> = {
        [P in keyof T & keyof AggregateToken_network]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken_network[P]>
      : GetScalarType<T[P], AggregateToken_network[P]>
  }




  export type token_networkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_networkWhereInput
    orderBy?: token_networkOrderByWithAggregationInput | token_networkOrderByWithAggregationInput[]
    by: Token_networkScalarFieldEnum[] | Token_networkScalarFieldEnum
    having?: token_networkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Token_networkCountAggregateInputType | true
    _min?: Token_networkMinAggregateInputType
    _max?: Token_networkMaxAggregateInputType
  }

  export type Token_networkGroupByOutputType = {
    token_network_id: string
    contract_address: string
    token_id: string | null
    network_id: string | null
    _count: Token_networkCountAggregateOutputType | null
    _min: Token_networkMinAggregateOutputType | null
    _max: Token_networkMaxAggregateOutputType | null
  }

  type GetToken_networkGroupByPayload<T extends token_networkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Token_networkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Token_networkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Token_networkGroupByOutputType[P]>
            : GetScalarType<T[P], Token_networkGroupByOutputType[P]>
        }
      >
    >


  export type token_networkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    contract_address?: boolean
    token_id?: boolean
    network_id?: boolean
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
    user_network_token?: boolean | token_network$user_network_tokenArgs<ExtArgs>
    _count?: boolean | Token_networkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token_network"]>

  export type token_networkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    contract_address?: boolean
    token_id?: boolean
    network_id?: boolean
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["token_network"]>

  export type token_networkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_network_id?: boolean
    contract_address?: boolean
    token_id?: boolean
    network_id?: boolean
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["token_network"]>

  export type token_networkSelectScalar = {
    token_network_id?: boolean
    contract_address?: boolean
    token_id?: boolean
    network_id?: boolean
  }

  export type token_networkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_network_id" | "contract_address" | "token_id" | "network_id", ExtArgs["result"]["token_network"]>
  export type token_networkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
    user_network_token?: boolean | token_network$user_network_tokenArgs<ExtArgs>
    _count?: boolean | Token_networkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type token_networkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
  }
  export type token_networkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | token_network$networkArgs<ExtArgs>
    token?: boolean | token_network$tokenArgs<ExtArgs>
  }

  export type $token_networkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token_network"
    objects: {
      network: Prisma.$networkPayload<ExtArgs> | null
      token: Prisma.$tokenPayload<ExtArgs> | null
      user_network_token: Prisma.$user_network_tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      token_network_id: string
      contract_address: string
      token_id: string | null
      network_id: string | null
    }, ExtArgs["result"]["token_network"]>
    composites: {}
  }

  type token_networkGetPayload<S extends boolean | null | undefined | token_networkDefaultArgs> = $Result.GetResult<Prisma.$token_networkPayload, S>

  type token_networkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<token_networkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Token_networkCountAggregateInputType | true
    }

  export interface token_networkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token_network'], meta: { name: 'token_network' } }
    /**
     * Find zero or one Token_network that matches the filter.
     * @param {token_networkFindUniqueArgs} args - Arguments to find a Token_network
     * @example
     * // Get one Token_network
     * const token_network = await prisma.token_network.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends token_networkFindUniqueArgs>(args: SelectSubset<T, token_networkFindUniqueArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token_network that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {token_networkFindUniqueOrThrowArgs} args - Arguments to find a Token_network
     * @example
     * // Get one Token_network
     * const token_network = await prisma.token_network.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends token_networkFindUniqueOrThrowArgs>(args: SelectSubset<T, token_networkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_network that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkFindFirstArgs} args - Arguments to find a Token_network
     * @example
     * // Get one Token_network
     * const token_network = await prisma.token_network.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends token_networkFindFirstArgs>(args?: SelectSubset<T, token_networkFindFirstArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_network that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkFindFirstOrThrowArgs} args - Arguments to find a Token_network
     * @example
     * // Get one Token_network
     * const token_network = await prisma.token_network.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends token_networkFindFirstOrThrowArgs>(args?: SelectSubset<T, token_networkFindFirstOrThrowArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Token_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Token_networks
     * const token_networks = await prisma.token_network.findMany()
     * 
     * // Get first 10 Token_networks
     * const token_networks = await prisma.token_network.findMany({ take: 10 })
     * 
     * // Only select the `token_network_id`
     * const token_networkWithToken_network_idOnly = await prisma.token_network.findMany({ select: { token_network_id: true } })
     * 
     */
    findMany<T extends token_networkFindManyArgs>(args?: SelectSubset<T, token_networkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token_network.
     * @param {token_networkCreateArgs} args - Arguments to create a Token_network.
     * @example
     * // Create one Token_network
     * const Token_network = await prisma.token_network.create({
     *   data: {
     *     // ... data to create a Token_network
     *   }
     * })
     * 
     */
    create<T extends token_networkCreateArgs>(args: SelectSubset<T, token_networkCreateArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Token_networks.
     * @param {token_networkCreateManyArgs} args - Arguments to create many Token_networks.
     * @example
     * // Create many Token_networks
     * const token_network = await prisma.token_network.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends token_networkCreateManyArgs>(args?: SelectSubset<T, token_networkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Token_networks and returns the data saved in the database.
     * @param {token_networkCreateManyAndReturnArgs} args - Arguments to create many Token_networks.
     * @example
     * // Create many Token_networks
     * const token_network = await prisma.token_network.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Token_networks and only return the `token_network_id`
     * const token_networkWithToken_network_idOnly = await prisma.token_network.createManyAndReturn({
     *   select: { token_network_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends token_networkCreateManyAndReturnArgs>(args?: SelectSubset<T, token_networkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token_network.
     * @param {token_networkDeleteArgs} args - Arguments to delete one Token_network.
     * @example
     * // Delete one Token_network
     * const Token_network = await prisma.token_network.delete({
     *   where: {
     *     // ... filter to delete one Token_network
     *   }
     * })
     * 
     */
    delete<T extends token_networkDeleteArgs>(args: SelectSubset<T, token_networkDeleteArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token_network.
     * @param {token_networkUpdateArgs} args - Arguments to update one Token_network.
     * @example
     * // Update one Token_network
     * const token_network = await prisma.token_network.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends token_networkUpdateArgs>(args: SelectSubset<T, token_networkUpdateArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Token_networks.
     * @param {token_networkDeleteManyArgs} args - Arguments to filter Token_networks to delete.
     * @example
     * // Delete a few Token_networks
     * const { count } = await prisma.token_network.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends token_networkDeleteManyArgs>(args?: SelectSubset<T, token_networkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Token_networks
     * const token_network = await prisma.token_network.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends token_networkUpdateManyArgs>(args: SelectSubset<T, token_networkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_networks and returns the data updated in the database.
     * @param {token_networkUpdateManyAndReturnArgs} args - Arguments to update many Token_networks.
     * @example
     * // Update many Token_networks
     * const token_network = await prisma.token_network.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Token_networks and only return the `token_network_id`
     * const token_networkWithToken_network_idOnly = await prisma.token_network.updateManyAndReturn({
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
    updateManyAndReturn<T extends token_networkUpdateManyAndReturnArgs>(args: SelectSubset<T, token_networkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token_network.
     * @param {token_networkUpsertArgs} args - Arguments to update or create a Token_network.
     * @example
     * // Update or create a Token_network
     * const token_network = await prisma.token_network.upsert({
     *   create: {
     *     // ... data to create a Token_network
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token_network we want to update
     *   }
     * })
     */
    upsert<T extends token_networkUpsertArgs>(args: SelectSubset<T, token_networkUpsertArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Token_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkCountArgs} args - Arguments to filter Token_networks to count.
     * @example
     * // Count the number of Token_networks
     * const count = await prisma.token_network.count({
     *   where: {
     *     // ... the filter for the Token_networks we want to count
     *   }
     * })
    **/
    count<T extends token_networkCountArgs>(
      args?: Subset<T, token_networkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Token_networkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token_network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Token_networkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Token_networkAggregateArgs>(args: Subset<T, Token_networkAggregateArgs>): Prisma.PrismaPromise<GetToken_networkAggregateType<T>>

    /**
     * Group by Token_network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_networkGroupByArgs} args - Group by arguments.
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
      T extends token_networkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: token_networkGroupByArgs['orderBy'] }
        : { orderBy?: token_networkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, token_networkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_networkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token_network model
   */
  readonly fields: token_networkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token_network.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__token_networkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends token_network$networkArgs<ExtArgs> = {}>(args?: Subset<T, token_network$networkArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token<T extends token_network$tokenArgs<ExtArgs> = {}>(args?: Subset<T, token_network$tokenArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_network_token<T extends token_network$user_network_tokenArgs<ExtArgs> = {}>(args?: Subset<T, token_network$user_network_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the token_network model
   */
  interface token_networkFieldRefs {
    readonly token_network_id: FieldRef<"token_network", 'String'>
    readonly contract_address: FieldRef<"token_network", 'String'>
    readonly token_id: FieldRef<"token_network", 'String'>
    readonly network_id: FieldRef<"token_network", 'String'>
  }
    

  // Custom InputTypes
  /**
   * token_network findUnique
   */
  export type token_networkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter, which token_network to fetch.
     */
    where: token_networkWhereUniqueInput
  }

  /**
   * token_network findUniqueOrThrow
   */
  export type token_networkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter, which token_network to fetch.
     */
    where: token_networkWhereUniqueInput
  }

  /**
   * token_network findFirst
   */
  export type token_networkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter, which token_network to fetch.
     */
    where?: token_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_networks.
     */
    cursor?: token_networkWhereUniqueInput
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
    distinct?: Token_networkScalarFieldEnum | Token_networkScalarFieldEnum[]
  }

  /**
   * token_network findFirstOrThrow
   */
  export type token_networkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter, which token_network to fetch.
     */
    where?: token_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_networks.
     */
    cursor?: token_networkWhereUniqueInput
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
    distinct?: Token_networkScalarFieldEnum | Token_networkScalarFieldEnum[]
  }

  /**
   * token_network findMany
   */
  export type token_networkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter, which token_networks to fetch.
     */
    where?: token_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_networks to fetch.
     */
    orderBy?: token_networkOrderByWithRelationInput | token_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing token_networks.
     */
    cursor?: token_networkWhereUniqueInput
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
    distinct?: Token_networkScalarFieldEnum | Token_networkScalarFieldEnum[]
  }

  /**
   * token_network create
   */
  export type token_networkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * The data needed to create a token_network.
     */
    data: XOR<token_networkCreateInput, token_networkUncheckedCreateInput>
  }

  /**
   * token_network createMany
   */
  export type token_networkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many token_networks.
     */
    data: token_networkCreateManyInput | token_networkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token_network createManyAndReturn
   */
  export type token_networkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * The data used to create many token_networks.
     */
    data: token_networkCreateManyInput | token_networkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * token_network update
   */
  export type token_networkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * The data needed to update a token_network.
     */
    data: XOR<token_networkUpdateInput, token_networkUncheckedUpdateInput>
    /**
     * Choose, which token_network to update.
     */
    where: token_networkWhereUniqueInput
  }

  /**
   * token_network updateMany
   */
  export type token_networkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update token_networks.
     */
    data: XOR<token_networkUpdateManyMutationInput, token_networkUncheckedUpdateManyInput>
    /**
     * Filter which token_networks to update
     */
    where?: token_networkWhereInput
    /**
     * Limit how many token_networks to update.
     */
    limit?: number
  }

  /**
   * token_network updateManyAndReturn
   */
  export type token_networkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * The data used to update token_networks.
     */
    data: XOR<token_networkUpdateManyMutationInput, token_networkUncheckedUpdateManyInput>
    /**
     * Filter which token_networks to update
     */
    where?: token_networkWhereInput
    /**
     * Limit how many token_networks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * token_network upsert
   */
  export type token_networkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * The filter to search for the token_network to update in case it exists.
     */
    where: token_networkWhereUniqueInput
    /**
     * In case the token_network found by the `where` argument doesn't exist, create a new token_network with this data.
     */
    create: XOR<token_networkCreateInput, token_networkUncheckedCreateInput>
    /**
     * In case the token_network was found with the provided `where` argument, update it with this data.
     */
    update: XOR<token_networkUpdateInput, token_networkUncheckedUpdateInput>
  }

  /**
   * token_network delete
   */
  export type token_networkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
    /**
     * Filter which token_network to delete.
     */
    where: token_networkWhereUniqueInput
  }

  /**
   * token_network deleteMany
   */
  export type token_networkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_networks to delete
     */
    where?: token_networkWhereInput
    /**
     * Limit how many token_networks to delete.
     */
    limit?: number
  }

  /**
   * token_network.network
   */
  export type token_network$networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    where?: networkWhereInput
  }

  /**
   * token_network.token
   */
  export type token_network$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    where?: tokenWhereInput
  }

  /**
   * token_network.user_network_token
   */
  export type token_network$user_network_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    where?: user_network_tokenWhereInput
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    cursor?: user_network_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_network_tokenScalarFieldEnum | User_network_tokenScalarFieldEnum[]
  }

  /**
   * token_network without action
   */
  export type token_networkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_network
     */
    select?: token_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_network
     */
    omit?: token_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_networkInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transaction_gas: number | null
    block_number: number | null
    max_priority_fee_per_gas: number | null
    base_fee: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    transaction_gas: number | null
    block_number: number | null
    max_priority_fee_per_gas: number | null
    base_fee: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    transaction_status: $Enums.etransactionstatus | null
    transaction_gas: number | null
    transaction_hash: string | null
    block_hash: string | null
    block_number: number | null
    from_address: string | null
    to_address: string | null
    token_contract_address: string | null
    max_priority_fee_per_gas: number | null
    base_fee: number | null
    token_id: string | null
    network_id: string | null
    amount: number | null
    created_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    transaction_status: $Enums.etransactionstatus | null
    transaction_gas: number | null
    transaction_hash: string | null
    block_hash: string | null
    block_number: number | null
    from_address: string | null
    to_address: string | null
    token_contract_address: string | null
    max_priority_fee_per_gas: number | null
    base_fee: number | null
    token_id: string | null
    network_id: string | null
    amount: number | null
    created_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    transaction_status: number
    transaction_gas: number
    transaction_hash: number
    block_hash: number
    block_number: number
    from_address: number
    to_address: number
    token_contract_address: number
    max_priority_fee_per_gas: number
    base_fee: number
    token_id: number
    network_id: number
    amount: number
    created_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transaction_gas?: true
    block_number?: true
    max_priority_fee_per_gas?: true
    base_fee?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    transaction_gas?: true
    block_number?: true
    max_priority_fee_per_gas?: true
    base_fee?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    transaction_status?: true
    transaction_gas?: true
    transaction_hash?: true
    block_hash?: true
    block_number?: true
    from_address?: true
    to_address?: true
    token_contract_address?: true
    max_priority_fee_per_gas?: true
    base_fee?: true
    token_id?: true
    network_id?: true
    amount?: true
    created_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    transaction_status?: true
    transaction_gas?: true
    transaction_hash?: true
    block_hash?: true
    block_number?: true
    from_address?: true
    to_address?: true
    token_contract_address?: true
    max_priority_fee_per_gas?: true
    base_fee?: true
    token_id?: true
    network_id?: true
    amount?: true
    created_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    transaction_status?: true
    transaction_gas?: true
    transaction_hash?: true
    block_hash?: true
    block_number?: true
    from_address?: true
    to_address?: true
    token_contract_address?: true
    max_priority_fee_per_gas?: true
    base_fee?: true
    token_id?: true
    network_id?: true
    amount?: true
    created_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    transaction_status: $Enums.etransactionstatus | null
    transaction_gas: number | null
    transaction_hash: string | null
    block_hash: string | null
    block_number: number | null
    from_address: string
    to_address: string
    token_contract_address: string | null
    max_priority_fee_per_gas: number | null
    base_fee: number | null
    token_id: string | null
    network_id: string | null
    amount: number
    created_at: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_status?: boolean
    transaction_gas?: boolean
    transaction_hash?: boolean
    block_hash?: boolean
    block_number?: boolean
    from_address?: boolean
    to_address?: boolean
    token_contract_address?: boolean
    max_priority_fee_per_gas?: boolean
    base_fee?: boolean
    token_id?: boolean
    network_id?: boolean
    amount?: boolean
    created_at?: boolean
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_status?: boolean
    transaction_gas?: boolean
    transaction_hash?: boolean
    block_hash?: boolean
    block_number?: boolean
    from_address?: boolean
    to_address?: boolean
    token_contract_address?: boolean
    max_priority_fee_per_gas?: boolean
    base_fee?: boolean
    token_id?: boolean
    network_id?: boolean
    amount?: boolean
    created_at?: boolean
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_status?: boolean
    transaction_gas?: boolean
    transaction_hash?: boolean
    block_hash?: boolean
    block_number?: boolean
    from_address?: boolean
    to_address?: boolean
    token_contract_address?: boolean
    max_priority_fee_per_gas?: boolean
    base_fee?: boolean
    token_id?: boolean
    network_id?: boolean
    amount?: boolean
    created_at?: boolean
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    transaction_status?: boolean
    transaction_gas?: boolean
    transaction_hash?: boolean
    block_hash?: boolean
    block_number?: boolean
    from_address?: boolean
    to_address?: boolean
    token_contract_address?: boolean
    max_priority_fee_per_gas?: boolean
    base_fee?: boolean
    token_id?: boolean
    network_id?: boolean
    amount?: boolean
    created_at?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_status" | "transaction_gas" | "transaction_hash" | "block_hash" | "block_number" | "from_address" | "to_address" | "token_contract_address" | "max_priority_fee_per_gas" | "base_fee" | "token_id" | "network_id" | "amount" | "created_at", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | transaction$networkArgs<ExtArgs>
    token?: boolean | transaction$tokenArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      network: Prisma.$networkPayload<ExtArgs> | null
      token: Prisma.$tokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transaction_status: $Enums.etransactionstatus | null
      transaction_gas: number | null
      transaction_hash: string | null
      block_hash: string | null
      block_number: number | null
      from_address: string
      to_address: string
      token_contract_address: string | null
      max_priority_fee_per_gas: number | null
      base_fee: number | null
      token_id: string | null
      network_id: string | null
      amount: number
      created_at: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends transaction$networkArgs<ExtArgs> = {}>(args?: Subset<T, transaction$networkArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    token<T extends transaction$tokenArgs<ExtArgs> = {}>(args?: Subset<T, transaction$tokenArgs<ExtArgs>>): Prisma__tokenClient<$Result.GetResult<Prisma.$tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly transaction_status: FieldRef<"transaction", 'etransactionstatus'>
    readonly transaction_gas: FieldRef<"transaction", 'Float'>
    readonly transaction_hash: FieldRef<"transaction", 'String'>
    readonly block_hash: FieldRef<"transaction", 'String'>
    readonly block_number: FieldRef<"transaction", 'Int'>
    readonly from_address: FieldRef<"transaction", 'String'>
    readonly to_address: FieldRef<"transaction", 'String'>
    readonly token_contract_address: FieldRef<"transaction", 'String'>
    readonly max_priority_fee_per_gas: FieldRef<"transaction", 'Float'>
    readonly base_fee: FieldRef<"transaction", 'Float'>
    readonly token_id: FieldRef<"transaction", 'String'>
    readonly network_id: FieldRef<"transaction", 'String'>
    readonly amount: FieldRef<"transaction", 'Float'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.network
   */
  export type transaction$networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the network
     */
    select?: networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the network
     */
    omit?: networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: networkInclude<ExtArgs> | null
    where?: networkWhereInput
  }

  /**
   * transaction.token
   */
  export type transaction$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token
     */
    select?: tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token
     */
    omit?: tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokenInclude<ExtArgs> | null
    where?: tokenWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    password: string | null
    avatar: string | null
    secretid: string | null
    currentselectednetworkid: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    password: string | null
    avatar: string | null
    secretid: string | null
    currentselectednetworkid: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    password: number
    avatar: number
    secretid: number
    currentselectednetworkid: number
    push_notification_tokens: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    avatar?: true
    secretid?: true
    currentselectednetworkid?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    avatar?: true
    secretid?: true
    currentselectednetworkid?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    password?: true
    avatar?: true
    secretid?: true
    currentselectednetworkid?: true
    push_notification_tokens?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    address: string
    password: string | null
    avatar: string | null
    secretid: string | null
    currentselectednetworkid: string | null
    push_notification_tokens: string[]
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    avatar?: boolean
    secretid?: boolean
    currentselectednetworkid?: boolean
    push_notification_tokens?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
    user_network_token?: boolean | user$user_network_tokenArgs<ExtArgs>
    user_networks_network?: boolean | user$user_networks_networkArgs<ExtArgs>
    user_secret_user_secret_useridTouser?: boolean | user$user_secret_user_secret_useridTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    avatar?: boolean
    secretid?: boolean
    currentselectednetworkid?: boolean
    push_notification_tokens?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    avatar?: boolean
    secretid?: boolean
    currentselectednetworkid?: boolean
    push_notification_tokens?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    avatar?: boolean
    secretid?: boolean
    currentselectednetworkid?: boolean
    push_notification_tokens?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "password" | "avatar" | "secretid" | "currentselectednetworkid" | "push_notification_tokens" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
    user_network_token?: boolean | user$user_network_tokenArgs<ExtArgs>
    user_networks_network?: boolean | user$user_networks_networkArgs<ExtArgs>
    user_secret_user_secret_useridTouser?: boolean | user$user_secret_user_secret_useridTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_secret_user_secretidTouser_secret?: boolean | user$user_secret_user_secretidTouser_secretArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      user_secret_user_secretidTouser_secret: Prisma.$user_secretPayload<ExtArgs> | null
      user_network_token: Prisma.$user_network_tokenPayload<ExtArgs>[]
      user_networks_network: Prisma.$user_networks_networkPayload<ExtArgs>[]
      user_secret_user_secret_useridTouser: Prisma.$user_secretPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      address: string
      password: string | null
      avatar: string | null
      secretid: string | null
      currentselectednetworkid: string | null
      push_notification_tokens: string[]
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_secret_user_secretidTouser_secret<T extends user$user_secret_user_secretidTouser_secretArgs<ExtArgs> = {}>(args?: Subset<T, user$user_secret_user_secretidTouser_secretArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_network_token<T extends user$user_network_tokenArgs<ExtArgs> = {}>(args?: Subset<T, user$user_network_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_networks_network<T extends user$user_networks_networkArgs<ExtArgs> = {}>(args?: Subset<T, user$user_networks_networkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_secret_user_secret_useridTouser<T extends user$user_secret_user_secret_useridTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$user_secret_user_secret_useridTouserArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly address: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly secretid: FieldRef<"user", 'String'>
    readonly currentselectednetworkid: FieldRef<"user", 'String'>
    readonly push_notification_tokens: FieldRef<"user", 'String[]'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly deleted_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.user_secret_user_secretidTouser_secret
   */
  export type user$user_secret_user_secretidTouser_secretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    where?: user_secretWhereInput
  }

  /**
   * user.user_network_token
   */
  export type user$user_network_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    where?: user_network_tokenWhereInput
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    cursor?: user_network_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_network_tokenScalarFieldEnum | User_network_tokenScalarFieldEnum[]
  }

  /**
   * user.user_networks_network
   */
  export type user$user_networks_networkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    where?: user_networks_networkWhereInput
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    cursor?: user_networks_networkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_networks_networkScalarFieldEnum | User_networks_networkScalarFieldEnum[]
  }

  /**
   * user.user_secret_user_secret_useridTouser
   */
  export type user$user_secret_user_secret_useridTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    where?: user_secretWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_network_token
   */

  export type AggregateUser_network_token = {
    _count: User_network_tokenCountAggregateOutputType | null
    _min: User_network_tokenMinAggregateOutputType | null
    _max: User_network_tokenMaxAggregateOutputType | null
  }

  export type User_network_tokenMinAggregateOutputType = {
    user_network_token_id: string | null
    userid: string | null
    tokennetworkid: string | null
  }

  export type User_network_tokenMaxAggregateOutputType = {
    user_network_token_id: string | null
    userid: string | null
    tokennetworkid: string | null
  }

  export type User_network_tokenCountAggregateOutputType = {
    user_network_token_id: number
    userid: number
    tokennetworkid: number
    _all: number
  }


  export type User_network_tokenMinAggregateInputType = {
    user_network_token_id?: true
    userid?: true
    tokennetworkid?: true
  }

  export type User_network_tokenMaxAggregateInputType = {
    user_network_token_id?: true
    userid?: true
    tokennetworkid?: true
  }

  export type User_network_tokenCountAggregateInputType = {
    user_network_token_id?: true
    userid?: true
    tokennetworkid?: true
    _all?: true
  }

  export type User_network_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_network_token to aggregate.
     */
    where?: user_network_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_network_tokens to fetch.
     */
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_network_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_network_tokens
    **/
    _count?: true | User_network_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_network_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_network_tokenMaxAggregateInputType
  }

  export type GetUser_network_tokenAggregateType<T extends User_network_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_network_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_network_token[P]>
      : GetScalarType<T[P], AggregateUser_network_token[P]>
  }




  export type user_network_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_network_tokenWhereInput
    orderBy?: user_network_tokenOrderByWithAggregationInput | user_network_tokenOrderByWithAggregationInput[]
    by: User_network_tokenScalarFieldEnum[] | User_network_tokenScalarFieldEnum
    having?: user_network_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_network_tokenCountAggregateInputType | true
    _min?: User_network_tokenMinAggregateInputType
    _max?: User_network_tokenMaxAggregateInputType
  }

  export type User_network_tokenGroupByOutputType = {
    user_network_token_id: string
    userid: string
    tokennetworkid: string
    _count: User_network_tokenCountAggregateOutputType | null
    _min: User_network_tokenMinAggregateOutputType | null
    _max: User_network_tokenMaxAggregateOutputType | null
  }

  type GetUser_network_tokenGroupByPayload<T extends user_network_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_network_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_network_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_network_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], User_network_tokenGroupByOutputType[P]>
        }
      >
    >


  export type user_network_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_network_token_id?: boolean
    userid?: boolean
    tokennetworkid?: boolean
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_network_token"]>

  export type user_network_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_network_token_id?: boolean
    userid?: boolean
    tokennetworkid?: boolean
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_network_token"]>

  export type user_network_tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_network_token_id?: boolean
    userid?: boolean
    tokennetworkid?: boolean
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_network_token"]>

  export type user_network_tokenSelectScalar = {
    user_network_token_id?: boolean
    userid?: boolean
    tokennetworkid?: boolean
  }

  export type user_network_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_network_token_id" | "userid" | "tokennetworkid", ExtArgs["result"]["user_network_token"]>
  export type user_network_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_network_tokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_network_tokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_network?: boolean | token_networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_network_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_network_token"
    objects: {
      token_network: Prisma.$token_networkPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_network_token_id: string
      userid: string
      tokennetworkid: string
    }, ExtArgs["result"]["user_network_token"]>
    composites: {}
  }

  type user_network_tokenGetPayload<S extends boolean | null | undefined | user_network_tokenDefaultArgs> = $Result.GetResult<Prisma.$user_network_tokenPayload, S>

  type user_network_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_network_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_network_tokenCountAggregateInputType | true
    }

  export interface user_network_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_network_token'], meta: { name: 'user_network_token' } }
    /**
     * Find zero or one User_network_token that matches the filter.
     * @param {user_network_tokenFindUniqueArgs} args - Arguments to find a User_network_token
     * @example
     * // Get one User_network_token
     * const user_network_token = await prisma.user_network_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_network_tokenFindUniqueArgs>(args: SelectSubset<T, user_network_tokenFindUniqueArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_network_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_network_tokenFindUniqueOrThrowArgs} args - Arguments to find a User_network_token
     * @example
     * // Get one User_network_token
     * const user_network_token = await prisma.user_network_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_network_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, user_network_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_network_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenFindFirstArgs} args - Arguments to find a User_network_token
     * @example
     * // Get one User_network_token
     * const user_network_token = await prisma.user_network_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_network_tokenFindFirstArgs>(args?: SelectSubset<T, user_network_tokenFindFirstArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_network_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenFindFirstOrThrowArgs} args - Arguments to find a User_network_token
     * @example
     * // Get one User_network_token
     * const user_network_token = await prisma.user_network_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_network_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, user_network_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_network_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_network_tokens
     * const user_network_tokens = await prisma.user_network_token.findMany()
     * 
     * // Get first 10 User_network_tokens
     * const user_network_tokens = await prisma.user_network_token.findMany({ take: 10 })
     * 
     * // Only select the `user_network_token_id`
     * const user_network_tokenWithUser_network_token_idOnly = await prisma.user_network_token.findMany({ select: { user_network_token_id: true } })
     * 
     */
    findMany<T extends user_network_tokenFindManyArgs>(args?: SelectSubset<T, user_network_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_network_token.
     * @param {user_network_tokenCreateArgs} args - Arguments to create a User_network_token.
     * @example
     * // Create one User_network_token
     * const User_network_token = await prisma.user_network_token.create({
     *   data: {
     *     // ... data to create a User_network_token
     *   }
     * })
     * 
     */
    create<T extends user_network_tokenCreateArgs>(args: SelectSubset<T, user_network_tokenCreateArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_network_tokens.
     * @param {user_network_tokenCreateManyArgs} args - Arguments to create many User_network_tokens.
     * @example
     * // Create many User_network_tokens
     * const user_network_token = await prisma.user_network_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_network_tokenCreateManyArgs>(args?: SelectSubset<T, user_network_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_network_tokens and returns the data saved in the database.
     * @param {user_network_tokenCreateManyAndReturnArgs} args - Arguments to create many User_network_tokens.
     * @example
     * // Create many User_network_tokens
     * const user_network_token = await prisma.user_network_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_network_tokens and only return the `user_network_token_id`
     * const user_network_tokenWithUser_network_token_idOnly = await prisma.user_network_token.createManyAndReturn({
     *   select: { user_network_token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_network_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, user_network_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_network_token.
     * @param {user_network_tokenDeleteArgs} args - Arguments to delete one User_network_token.
     * @example
     * // Delete one User_network_token
     * const User_network_token = await prisma.user_network_token.delete({
     *   where: {
     *     // ... filter to delete one User_network_token
     *   }
     * })
     * 
     */
    delete<T extends user_network_tokenDeleteArgs>(args: SelectSubset<T, user_network_tokenDeleteArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_network_token.
     * @param {user_network_tokenUpdateArgs} args - Arguments to update one User_network_token.
     * @example
     * // Update one User_network_token
     * const user_network_token = await prisma.user_network_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_network_tokenUpdateArgs>(args: SelectSubset<T, user_network_tokenUpdateArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_network_tokens.
     * @param {user_network_tokenDeleteManyArgs} args - Arguments to filter User_network_tokens to delete.
     * @example
     * // Delete a few User_network_tokens
     * const { count } = await prisma.user_network_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_network_tokenDeleteManyArgs>(args?: SelectSubset<T, user_network_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_network_tokens
     * const user_network_token = await prisma.user_network_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_network_tokenUpdateManyArgs>(args: SelectSubset<T, user_network_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_network_tokens and returns the data updated in the database.
     * @param {user_network_tokenUpdateManyAndReturnArgs} args - Arguments to update many User_network_tokens.
     * @example
     * // Update many User_network_tokens
     * const user_network_token = await prisma.user_network_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_network_tokens and only return the `user_network_token_id`
     * const user_network_tokenWithUser_network_token_idOnly = await prisma.user_network_token.updateManyAndReturn({
     *   select: { user_network_token_id: true },
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
    updateManyAndReturn<T extends user_network_tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, user_network_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_network_token.
     * @param {user_network_tokenUpsertArgs} args - Arguments to update or create a User_network_token.
     * @example
     * // Update or create a User_network_token
     * const user_network_token = await prisma.user_network_token.upsert({
     *   create: {
     *     // ... data to create a User_network_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_network_token we want to update
     *   }
     * })
     */
    upsert<T extends user_network_tokenUpsertArgs>(args: SelectSubset<T, user_network_tokenUpsertArgs<ExtArgs>>): Prisma__user_network_tokenClient<$Result.GetResult<Prisma.$user_network_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_network_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenCountArgs} args - Arguments to filter User_network_tokens to count.
     * @example
     * // Count the number of User_network_tokens
     * const count = await prisma.user_network_token.count({
     *   where: {
     *     // ... the filter for the User_network_tokens we want to count
     *   }
     * })
    **/
    count<T extends user_network_tokenCountArgs>(
      args?: Subset<T, user_network_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_network_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_network_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_network_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_network_tokenAggregateArgs>(args: Subset<T, User_network_tokenAggregateArgs>): Prisma.PrismaPromise<GetUser_network_tokenAggregateType<T>>

    /**
     * Group by User_network_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_network_tokenGroupByArgs} args - Group by arguments.
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
      T extends user_network_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_network_tokenGroupByArgs['orderBy'] }
        : { orderBy?: user_network_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_network_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_network_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_network_token model
   */
  readonly fields: user_network_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_network_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_network_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token_network<T extends token_networkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, token_networkDefaultArgs<ExtArgs>>): Prisma__token_networkClient<$Result.GetResult<Prisma.$token_networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_network_token model
   */
  interface user_network_tokenFieldRefs {
    readonly user_network_token_id: FieldRef<"user_network_token", 'String'>
    readonly userid: FieldRef<"user_network_token", 'String'>
    readonly tokennetworkid: FieldRef<"user_network_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_network_token findUnique
   */
  export type user_network_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_network_token to fetch.
     */
    where: user_network_tokenWhereUniqueInput
  }

  /**
   * user_network_token findUniqueOrThrow
   */
  export type user_network_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_network_token to fetch.
     */
    where: user_network_tokenWhereUniqueInput
  }

  /**
   * user_network_token findFirst
   */
  export type user_network_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_network_token to fetch.
     */
    where?: user_network_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_network_tokens to fetch.
     */
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_network_tokens.
     */
    cursor?: user_network_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_network_tokens.
     */
    distinct?: User_network_tokenScalarFieldEnum | User_network_tokenScalarFieldEnum[]
  }

  /**
   * user_network_token findFirstOrThrow
   */
  export type user_network_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_network_token to fetch.
     */
    where?: user_network_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_network_tokens to fetch.
     */
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_network_tokens.
     */
    cursor?: user_network_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_network_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_network_tokens.
     */
    distinct?: User_network_tokenScalarFieldEnum | User_network_tokenScalarFieldEnum[]
  }

  /**
   * user_network_token findMany
   */
  export type user_network_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_network_tokens to fetch.
     */
    where?: user_network_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_network_tokens to fetch.
     */
    orderBy?: user_network_tokenOrderByWithRelationInput | user_network_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_network_tokens.
     */
    cursor?: user_network_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_network_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_network_tokens.
     */
    skip?: number
    distinct?: User_network_tokenScalarFieldEnum | User_network_tokenScalarFieldEnum[]
  }

  /**
   * user_network_token create
   */
  export type user_network_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a user_network_token.
     */
    data: XOR<user_network_tokenCreateInput, user_network_tokenUncheckedCreateInput>
  }

  /**
   * user_network_token createMany
   */
  export type user_network_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_network_tokens.
     */
    data: user_network_tokenCreateManyInput | user_network_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_network_token createManyAndReturn
   */
  export type user_network_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * The data used to create many user_network_tokens.
     */
    data: user_network_tokenCreateManyInput | user_network_tokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_network_token update
   */
  export type user_network_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a user_network_token.
     */
    data: XOR<user_network_tokenUpdateInput, user_network_tokenUncheckedUpdateInput>
    /**
     * Choose, which user_network_token to update.
     */
    where: user_network_tokenWhereUniqueInput
  }

  /**
   * user_network_token updateMany
   */
  export type user_network_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_network_tokens.
     */
    data: XOR<user_network_tokenUpdateManyMutationInput, user_network_tokenUncheckedUpdateManyInput>
    /**
     * Filter which user_network_tokens to update
     */
    where?: user_network_tokenWhereInput
    /**
     * Limit how many user_network_tokens to update.
     */
    limit?: number
  }

  /**
   * user_network_token updateManyAndReturn
   */
  export type user_network_tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * The data used to update user_network_tokens.
     */
    data: XOR<user_network_tokenUpdateManyMutationInput, user_network_tokenUncheckedUpdateManyInput>
    /**
     * Filter which user_network_tokens to update
     */
    where?: user_network_tokenWhereInput
    /**
     * Limit how many user_network_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_network_token upsert
   */
  export type user_network_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the user_network_token to update in case it exists.
     */
    where: user_network_tokenWhereUniqueInput
    /**
     * In case the user_network_token found by the `where` argument doesn't exist, create a new user_network_token with this data.
     */
    create: XOR<user_network_tokenCreateInput, user_network_tokenUncheckedCreateInput>
    /**
     * In case the user_network_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_network_tokenUpdateInput, user_network_tokenUncheckedUpdateInput>
  }

  /**
   * user_network_token delete
   */
  export type user_network_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
    /**
     * Filter which user_network_token to delete.
     */
    where: user_network_tokenWhereUniqueInput
  }

  /**
   * user_network_token deleteMany
   */
  export type user_network_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_network_tokens to delete
     */
    where?: user_network_tokenWhereInput
    /**
     * Limit how many user_network_tokens to delete.
     */
    limit?: number
  }

  /**
   * user_network_token without action
   */
  export type user_network_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_network_token
     */
    select?: user_network_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_network_token
     */
    omit?: user_network_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_network_tokenInclude<ExtArgs> | null
  }


  /**
   * Model user_networks_network
   */

  export type AggregateUser_networks_network = {
    _count: User_networks_networkCountAggregateOutputType | null
    _min: User_networks_networkMinAggregateOutputType | null
    _max: User_networks_networkMaxAggregateOutputType | null
  }

  export type User_networks_networkMinAggregateOutputType = {
    userid: string | null
    networkid: string | null
  }

  export type User_networks_networkMaxAggregateOutputType = {
    userid: string | null
    networkid: string | null
  }

  export type User_networks_networkCountAggregateOutputType = {
    userid: number
    networkid: number
    _all: number
  }


  export type User_networks_networkMinAggregateInputType = {
    userid?: true
    networkid?: true
  }

  export type User_networks_networkMaxAggregateInputType = {
    userid?: true
    networkid?: true
  }

  export type User_networks_networkCountAggregateInputType = {
    userid?: true
    networkid?: true
    _all?: true
  }

  export type User_networks_networkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_networks_network to aggregate.
     */
    where?: user_networks_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_networks_networks to fetch.
     */
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_networks_networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_networks_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_networks_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_networks_networks
    **/
    _count?: true | User_networks_networkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_networks_networkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_networks_networkMaxAggregateInputType
  }

  export type GetUser_networks_networkAggregateType<T extends User_networks_networkAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_networks_network]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_networks_network[P]>
      : GetScalarType<T[P], AggregateUser_networks_network[P]>
  }




  export type user_networks_networkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_networks_networkWhereInput
    orderBy?: user_networks_networkOrderByWithAggregationInput | user_networks_networkOrderByWithAggregationInput[]
    by: User_networks_networkScalarFieldEnum[] | User_networks_networkScalarFieldEnum
    having?: user_networks_networkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_networks_networkCountAggregateInputType | true
    _min?: User_networks_networkMinAggregateInputType
    _max?: User_networks_networkMaxAggregateInputType
  }

  export type User_networks_networkGroupByOutputType = {
    userid: string
    networkid: string
    _count: User_networks_networkCountAggregateOutputType | null
    _min: User_networks_networkMinAggregateOutputType | null
    _max: User_networks_networkMaxAggregateOutputType | null
  }

  type GetUser_networks_networkGroupByPayload<T extends user_networks_networkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_networks_networkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_networks_networkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_networks_networkGroupByOutputType[P]>
            : GetScalarType<T[P], User_networks_networkGroupByOutputType[P]>
        }
      >
    >


  export type user_networks_networkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    networkid?: boolean
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_networks_network"]>

  export type user_networks_networkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    networkid?: boolean
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_networks_network"]>

  export type user_networks_networkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    networkid?: boolean
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_networks_network"]>

  export type user_networks_networkSelectScalar = {
    userid?: boolean
    networkid?: boolean
  }

  export type user_networks_networkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "networkid", ExtArgs["result"]["user_networks_network"]>
  export type user_networks_networkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_networks_networkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_networks_networkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    network?: boolean | networkDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_networks_networkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_networks_network"
    objects: {
      network: Prisma.$networkPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: string
      networkid: string
    }, ExtArgs["result"]["user_networks_network"]>
    composites: {}
  }

  type user_networks_networkGetPayload<S extends boolean | null | undefined | user_networks_networkDefaultArgs> = $Result.GetResult<Prisma.$user_networks_networkPayload, S>

  type user_networks_networkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_networks_networkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_networks_networkCountAggregateInputType | true
    }

  export interface user_networks_networkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_networks_network'], meta: { name: 'user_networks_network' } }
    /**
     * Find zero or one User_networks_network that matches the filter.
     * @param {user_networks_networkFindUniqueArgs} args - Arguments to find a User_networks_network
     * @example
     * // Get one User_networks_network
     * const user_networks_network = await prisma.user_networks_network.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_networks_networkFindUniqueArgs>(args: SelectSubset<T, user_networks_networkFindUniqueArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_networks_network that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_networks_networkFindUniqueOrThrowArgs} args - Arguments to find a User_networks_network
     * @example
     * // Get one User_networks_network
     * const user_networks_network = await prisma.user_networks_network.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_networks_networkFindUniqueOrThrowArgs>(args: SelectSubset<T, user_networks_networkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_networks_network that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkFindFirstArgs} args - Arguments to find a User_networks_network
     * @example
     * // Get one User_networks_network
     * const user_networks_network = await prisma.user_networks_network.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_networks_networkFindFirstArgs>(args?: SelectSubset<T, user_networks_networkFindFirstArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_networks_network that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkFindFirstOrThrowArgs} args - Arguments to find a User_networks_network
     * @example
     * // Get one User_networks_network
     * const user_networks_network = await prisma.user_networks_network.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_networks_networkFindFirstOrThrowArgs>(args?: SelectSubset<T, user_networks_networkFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_networks_networks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_networks_networks
     * const user_networks_networks = await prisma.user_networks_network.findMany()
     * 
     * // Get first 10 User_networks_networks
     * const user_networks_networks = await prisma.user_networks_network.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const user_networks_networkWithUseridOnly = await prisma.user_networks_network.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends user_networks_networkFindManyArgs>(args?: SelectSubset<T, user_networks_networkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_networks_network.
     * @param {user_networks_networkCreateArgs} args - Arguments to create a User_networks_network.
     * @example
     * // Create one User_networks_network
     * const User_networks_network = await prisma.user_networks_network.create({
     *   data: {
     *     // ... data to create a User_networks_network
     *   }
     * })
     * 
     */
    create<T extends user_networks_networkCreateArgs>(args: SelectSubset<T, user_networks_networkCreateArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_networks_networks.
     * @param {user_networks_networkCreateManyArgs} args - Arguments to create many User_networks_networks.
     * @example
     * // Create many User_networks_networks
     * const user_networks_network = await prisma.user_networks_network.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_networks_networkCreateManyArgs>(args?: SelectSubset<T, user_networks_networkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_networks_networks and returns the data saved in the database.
     * @param {user_networks_networkCreateManyAndReturnArgs} args - Arguments to create many User_networks_networks.
     * @example
     * // Create many User_networks_networks
     * const user_networks_network = await prisma.user_networks_network.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_networks_networks and only return the `userid`
     * const user_networks_networkWithUseridOnly = await prisma.user_networks_network.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_networks_networkCreateManyAndReturnArgs>(args?: SelectSubset<T, user_networks_networkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_networks_network.
     * @param {user_networks_networkDeleteArgs} args - Arguments to delete one User_networks_network.
     * @example
     * // Delete one User_networks_network
     * const User_networks_network = await prisma.user_networks_network.delete({
     *   where: {
     *     // ... filter to delete one User_networks_network
     *   }
     * })
     * 
     */
    delete<T extends user_networks_networkDeleteArgs>(args: SelectSubset<T, user_networks_networkDeleteArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_networks_network.
     * @param {user_networks_networkUpdateArgs} args - Arguments to update one User_networks_network.
     * @example
     * // Update one User_networks_network
     * const user_networks_network = await prisma.user_networks_network.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_networks_networkUpdateArgs>(args: SelectSubset<T, user_networks_networkUpdateArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_networks_networks.
     * @param {user_networks_networkDeleteManyArgs} args - Arguments to filter User_networks_networks to delete.
     * @example
     * // Delete a few User_networks_networks
     * const { count } = await prisma.user_networks_network.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_networks_networkDeleteManyArgs>(args?: SelectSubset<T, user_networks_networkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_networks_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_networks_networks
     * const user_networks_network = await prisma.user_networks_network.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_networks_networkUpdateManyArgs>(args: SelectSubset<T, user_networks_networkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_networks_networks and returns the data updated in the database.
     * @param {user_networks_networkUpdateManyAndReturnArgs} args - Arguments to update many User_networks_networks.
     * @example
     * // Update many User_networks_networks
     * const user_networks_network = await prisma.user_networks_network.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_networks_networks and only return the `userid`
     * const user_networks_networkWithUseridOnly = await prisma.user_networks_network.updateManyAndReturn({
     *   select: { userid: true },
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
    updateManyAndReturn<T extends user_networks_networkUpdateManyAndReturnArgs>(args: SelectSubset<T, user_networks_networkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_networks_network.
     * @param {user_networks_networkUpsertArgs} args - Arguments to update or create a User_networks_network.
     * @example
     * // Update or create a User_networks_network
     * const user_networks_network = await prisma.user_networks_network.upsert({
     *   create: {
     *     // ... data to create a User_networks_network
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_networks_network we want to update
     *   }
     * })
     */
    upsert<T extends user_networks_networkUpsertArgs>(args: SelectSubset<T, user_networks_networkUpsertArgs<ExtArgs>>): Prisma__user_networks_networkClient<$Result.GetResult<Prisma.$user_networks_networkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_networks_networks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkCountArgs} args - Arguments to filter User_networks_networks to count.
     * @example
     * // Count the number of User_networks_networks
     * const count = await prisma.user_networks_network.count({
     *   where: {
     *     // ... the filter for the User_networks_networks we want to count
     *   }
     * })
    **/
    count<T extends user_networks_networkCountArgs>(
      args?: Subset<T, user_networks_networkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_networks_networkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_networks_network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_networks_networkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_networks_networkAggregateArgs>(args: Subset<T, User_networks_networkAggregateArgs>): Prisma.PrismaPromise<GetUser_networks_networkAggregateType<T>>

    /**
     * Group by User_networks_network.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_networks_networkGroupByArgs} args - Group by arguments.
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
      T extends user_networks_networkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_networks_networkGroupByArgs['orderBy'] }
        : { orderBy?: user_networks_networkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_networks_networkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_networks_networkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_networks_network model
   */
  readonly fields: user_networks_networkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_networks_network.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_networks_networkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    network<T extends networkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, networkDefaultArgs<ExtArgs>>): Prisma__networkClient<$Result.GetResult<Prisma.$networkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_networks_network model
   */
  interface user_networks_networkFieldRefs {
    readonly userid: FieldRef<"user_networks_network", 'String'>
    readonly networkid: FieldRef<"user_networks_network", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_networks_network findUnique
   */
  export type user_networks_networkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter, which user_networks_network to fetch.
     */
    where: user_networks_networkWhereUniqueInput
  }

  /**
   * user_networks_network findUniqueOrThrow
   */
  export type user_networks_networkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter, which user_networks_network to fetch.
     */
    where: user_networks_networkWhereUniqueInput
  }

  /**
   * user_networks_network findFirst
   */
  export type user_networks_networkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter, which user_networks_network to fetch.
     */
    where?: user_networks_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_networks_networks to fetch.
     */
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_networks_networks.
     */
    cursor?: user_networks_networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_networks_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_networks_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_networks_networks.
     */
    distinct?: User_networks_networkScalarFieldEnum | User_networks_networkScalarFieldEnum[]
  }

  /**
   * user_networks_network findFirstOrThrow
   */
  export type user_networks_networkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter, which user_networks_network to fetch.
     */
    where?: user_networks_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_networks_networks to fetch.
     */
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_networks_networks.
     */
    cursor?: user_networks_networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_networks_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_networks_networks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_networks_networks.
     */
    distinct?: User_networks_networkScalarFieldEnum | User_networks_networkScalarFieldEnum[]
  }

  /**
   * user_networks_network findMany
   */
  export type user_networks_networkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter, which user_networks_networks to fetch.
     */
    where?: user_networks_networkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_networks_networks to fetch.
     */
    orderBy?: user_networks_networkOrderByWithRelationInput | user_networks_networkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_networks_networks.
     */
    cursor?: user_networks_networkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_networks_networks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_networks_networks.
     */
    skip?: number
    distinct?: User_networks_networkScalarFieldEnum | User_networks_networkScalarFieldEnum[]
  }

  /**
   * user_networks_network create
   */
  export type user_networks_networkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * The data needed to create a user_networks_network.
     */
    data: XOR<user_networks_networkCreateInput, user_networks_networkUncheckedCreateInput>
  }

  /**
   * user_networks_network createMany
   */
  export type user_networks_networkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_networks_networks.
     */
    data: user_networks_networkCreateManyInput | user_networks_networkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_networks_network createManyAndReturn
   */
  export type user_networks_networkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * The data used to create many user_networks_networks.
     */
    data: user_networks_networkCreateManyInput | user_networks_networkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_networks_network update
   */
  export type user_networks_networkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * The data needed to update a user_networks_network.
     */
    data: XOR<user_networks_networkUpdateInput, user_networks_networkUncheckedUpdateInput>
    /**
     * Choose, which user_networks_network to update.
     */
    where: user_networks_networkWhereUniqueInput
  }

  /**
   * user_networks_network updateMany
   */
  export type user_networks_networkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_networks_networks.
     */
    data: XOR<user_networks_networkUpdateManyMutationInput, user_networks_networkUncheckedUpdateManyInput>
    /**
     * Filter which user_networks_networks to update
     */
    where?: user_networks_networkWhereInput
    /**
     * Limit how many user_networks_networks to update.
     */
    limit?: number
  }

  /**
   * user_networks_network updateManyAndReturn
   */
  export type user_networks_networkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * The data used to update user_networks_networks.
     */
    data: XOR<user_networks_networkUpdateManyMutationInput, user_networks_networkUncheckedUpdateManyInput>
    /**
     * Filter which user_networks_networks to update
     */
    where?: user_networks_networkWhereInput
    /**
     * Limit how many user_networks_networks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_networks_network upsert
   */
  export type user_networks_networkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * The filter to search for the user_networks_network to update in case it exists.
     */
    where: user_networks_networkWhereUniqueInput
    /**
     * In case the user_networks_network found by the `where` argument doesn't exist, create a new user_networks_network with this data.
     */
    create: XOR<user_networks_networkCreateInput, user_networks_networkUncheckedCreateInput>
    /**
     * In case the user_networks_network was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_networks_networkUpdateInput, user_networks_networkUncheckedUpdateInput>
  }

  /**
   * user_networks_network delete
   */
  export type user_networks_networkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
    /**
     * Filter which user_networks_network to delete.
     */
    where: user_networks_networkWhereUniqueInput
  }

  /**
   * user_networks_network deleteMany
   */
  export type user_networks_networkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_networks_networks to delete
     */
    where?: user_networks_networkWhereInput
    /**
     * Limit how many user_networks_networks to delete.
     */
    limit?: number
  }

  /**
   * user_networks_network without action
   */
  export type user_networks_networkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_networks_network
     */
    select?: user_networks_networkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_networks_network
     */
    omit?: user_networks_networkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_networks_networkInclude<ExtArgs> | null
  }


  /**
   * Model user_secret
   */

  export type AggregateUser_secret = {
    _count: User_secretCountAggregateOutputType | null
    _min: User_secretMinAggregateOutputType | null
    _max: User_secretMaxAggregateOutputType | null
  }

  export type User_secretMinAggregateOutputType = {
    id: string | null
    userid: string | null
    private_key: string | null
    public_key: string | null
    mnemonic: string | null
    biometric_public_key: string | null
    created_at: Date | null
  }

  export type User_secretMaxAggregateOutputType = {
    id: string | null
    userid: string | null
    private_key: string | null
    public_key: string | null
    mnemonic: string | null
    biometric_public_key: string | null
    created_at: Date | null
  }

  export type User_secretCountAggregateOutputType = {
    id: number
    userid: number
    private_key: number
    public_key: number
    mnemonic: number
    biometric_public_key: number
    created_at: number
    _all: number
  }


  export type User_secretMinAggregateInputType = {
    id?: true
    userid?: true
    private_key?: true
    public_key?: true
    mnemonic?: true
    biometric_public_key?: true
    created_at?: true
  }

  export type User_secretMaxAggregateInputType = {
    id?: true
    userid?: true
    private_key?: true
    public_key?: true
    mnemonic?: true
    biometric_public_key?: true
    created_at?: true
  }

  export type User_secretCountAggregateInputType = {
    id?: true
    userid?: true
    private_key?: true
    public_key?: true
    mnemonic?: true
    biometric_public_key?: true
    created_at?: true
    _all?: true
  }

  export type User_secretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_secret to aggregate.
     */
    where?: user_secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_secrets to fetch.
     */
    orderBy?: user_secretOrderByWithRelationInput | user_secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_secrets
    **/
    _count?: true | User_secretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_secretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_secretMaxAggregateInputType
  }

  export type GetUser_secretAggregateType<T extends User_secretAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_secret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_secret[P]>
      : GetScalarType<T[P], AggregateUser_secret[P]>
  }




  export type user_secretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_secretWhereInput
    orderBy?: user_secretOrderByWithAggregationInput | user_secretOrderByWithAggregationInput[]
    by: User_secretScalarFieldEnum[] | User_secretScalarFieldEnum
    having?: user_secretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_secretCountAggregateInputType | true
    _min?: User_secretMinAggregateInputType
    _max?: User_secretMaxAggregateInputType
  }

  export type User_secretGroupByOutputType = {
    id: string
    userid: string | null
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key: string | null
    created_at: Date | null
    _count: User_secretCountAggregateOutputType | null
    _min: User_secretMinAggregateOutputType | null
    _max: User_secretMaxAggregateOutputType | null
  }

  type GetUser_secretGroupByPayload<T extends user_secretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_secretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_secretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_secretGroupByOutputType[P]>
            : GetScalarType<T[P], User_secretGroupByOutputType[P]>
        }
      >
    >


  export type user_secretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    private_key?: boolean
    public_key?: boolean
    mnemonic?: boolean
    biometric_public_key?: boolean
    created_at?: boolean
    user_user_secretidTouser_secret?: boolean | user_secret$user_user_secretidTouser_secretArgs<ExtArgs>
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
    _count?: boolean | User_secretCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_secret"]>

  export type user_secretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    private_key?: boolean
    public_key?: boolean
    mnemonic?: boolean
    biometric_public_key?: boolean
    created_at?: boolean
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
  }, ExtArgs["result"]["user_secret"]>

  export type user_secretSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    private_key?: boolean
    public_key?: boolean
    mnemonic?: boolean
    biometric_public_key?: boolean
    created_at?: boolean
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
  }, ExtArgs["result"]["user_secret"]>

  export type user_secretSelectScalar = {
    id?: boolean
    userid?: boolean
    private_key?: boolean
    public_key?: boolean
    mnemonic?: boolean
    biometric_public_key?: boolean
    created_at?: boolean
  }

  export type user_secretOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "private_key" | "public_key" | "mnemonic" | "biometric_public_key" | "created_at", ExtArgs["result"]["user_secret"]>
  export type user_secretInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_user_secretidTouser_secret?: boolean | user_secret$user_user_secretidTouser_secretArgs<ExtArgs>
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
    _count?: boolean | User_secretCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_secretIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
  }
  export type user_secretIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_user_secret_useridTouser?: boolean | user_secret$user_user_secret_useridTouserArgs<ExtArgs>
  }

  export type $user_secretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_secret"
    objects: {
      user_user_secretidTouser_secret: Prisma.$userPayload<ExtArgs>[]
      user_user_secret_useridTouser: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userid: string | null
      private_key: string
      public_key: string
      mnemonic: string
      biometric_public_key: string | null
      created_at: Date | null
    }, ExtArgs["result"]["user_secret"]>
    composites: {}
  }

  type user_secretGetPayload<S extends boolean | null | undefined | user_secretDefaultArgs> = $Result.GetResult<Prisma.$user_secretPayload, S>

  type user_secretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_secretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_secretCountAggregateInputType | true
    }

  export interface user_secretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_secret'], meta: { name: 'user_secret' } }
    /**
     * Find zero or one User_secret that matches the filter.
     * @param {user_secretFindUniqueArgs} args - Arguments to find a User_secret
     * @example
     * // Get one User_secret
     * const user_secret = await prisma.user_secret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_secretFindUniqueArgs>(args: SelectSubset<T, user_secretFindUniqueArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_secret that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_secretFindUniqueOrThrowArgs} args - Arguments to find a User_secret
     * @example
     * // Get one User_secret
     * const user_secret = await prisma.user_secret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_secretFindUniqueOrThrowArgs>(args: SelectSubset<T, user_secretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_secret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretFindFirstArgs} args - Arguments to find a User_secret
     * @example
     * // Get one User_secret
     * const user_secret = await prisma.user_secret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_secretFindFirstArgs>(args?: SelectSubset<T, user_secretFindFirstArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_secret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretFindFirstOrThrowArgs} args - Arguments to find a User_secret
     * @example
     * // Get one User_secret
     * const user_secret = await prisma.user_secret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_secretFindFirstOrThrowArgs>(args?: SelectSubset<T, user_secretFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_secrets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_secrets
     * const user_secrets = await prisma.user_secret.findMany()
     * 
     * // Get first 10 User_secrets
     * const user_secrets = await prisma.user_secret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_secretWithIdOnly = await prisma.user_secret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_secretFindManyArgs>(args?: SelectSubset<T, user_secretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_secret.
     * @param {user_secretCreateArgs} args - Arguments to create a User_secret.
     * @example
     * // Create one User_secret
     * const User_secret = await prisma.user_secret.create({
     *   data: {
     *     // ... data to create a User_secret
     *   }
     * })
     * 
     */
    create<T extends user_secretCreateArgs>(args: SelectSubset<T, user_secretCreateArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_secrets.
     * @param {user_secretCreateManyArgs} args - Arguments to create many User_secrets.
     * @example
     * // Create many User_secrets
     * const user_secret = await prisma.user_secret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_secretCreateManyArgs>(args?: SelectSubset<T, user_secretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_secrets and returns the data saved in the database.
     * @param {user_secretCreateManyAndReturnArgs} args - Arguments to create many User_secrets.
     * @example
     * // Create many User_secrets
     * const user_secret = await prisma.user_secret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_secrets and only return the `id`
     * const user_secretWithIdOnly = await prisma.user_secret.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_secretCreateManyAndReturnArgs>(args?: SelectSubset<T, user_secretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_secret.
     * @param {user_secretDeleteArgs} args - Arguments to delete one User_secret.
     * @example
     * // Delete one User_secret
     * const User_secret = await prisma.user_secret.delete({
     *   where: {
     *     // ... filter to delete one User_secret
     *   }
     * })
     * 
     */
    delete<T extends user_secretDeleteArgs>(args: SelectSubset<T, user_secretDeleteArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_secret.
     * @param {user_secretUpdateArgs} args - Arguments to update one User_secret.
     * @example
     * // Update one User_secret
     * const user_secret = await prisma.user_secret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_secretUpdateArgs>(args: SelectSubset<T, user_secretUpdateArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_secrets.
     * @param {user_secretDeleteManyArgs} args - Arguments to filter User_secrets to delete.
     * @example
     * // Delete a few User_secrets
     * const { count } = await prisma.user_secret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_secretDeleteManyArgs>(args?: SelectSubset<T, user_secretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_secrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_secrets
     * const user_secret = await prisma.user_secret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_secretUpdateManyArgs>(args: SelectSubset<T, user_secretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_secrets and returns the data updated in the database.
     * @param {user_secretUpdateManyAndReturnArgs} args - Arguments to update many User_secrets.
     * @example
     * // Update many User_secrets
     * const user_secret = await prisma.user_secret.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_secrets and only return the `id`
     * const user_secretWithIdOnly = await prisma.user_secret.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends user_secretUpdateManyAndReturnArgs>(args: SelectSubset<T, user_secretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_secret.
     * @param {user_secretUpsertArgs} args - Arguments to update or create a User_secret.
     * @example
     * // Update or create a User_secret
     * const user_secret = await prisma.user_secret.upsert({
     *   create: {
     *     // ... data to create a User_secret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_secret we want to update
     *   }
     * })
     */
    upsert<T extends user_secretUpsertArgs>(args: SelectSubset<T, user_secretUpsertArgs<ExtArgs>>): Prisma__user_secretClient<$Result.GetResult<Prisma.$user_secretPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_secrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretCountArgs} args - Arguments to filter User_secrets to count.
     * @example
     * // Count the number of User_secrets
     * const count = await prisma.user_secret.count({
     *   where: {
     *     // ... the filter for the User_secrets we want to count
     *   }
     * })
    **/
    count<T extends user_secretCountArgs>(
      args?: Subset<T, user_secretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_secretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_secret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_secretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_secretAggregateArgs>(args: Subset<T, User_secretAggregateArgs>): Prisma.PrismaPromise<GetUser_secretAggregateType<T>>

    /**
     * Group by User_secret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_secretGroupByArgs} args - Group by arguments.
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
      T extends user_secretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_secretGroupByArgs['orderBy'] }
        : { orderBy?: user_secretGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_secretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_secretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_secret model
   */
  readonly fields: user_secretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_secret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_secretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_user_secretidTouser_secret<T extends user_secret$user_user_secretidTouser_secretArgs<ExtArgs> = {}>(args?: Subset<T, user_secret$user_user_secretidTouser_secretArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_user_secret_useridTouser<T extends user_secret$user_user_secret_useridTouserArgs<ExtArgs> = {}>(args?: Subset<T, user_secret$user_user_secret_useridTouserArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_secret model
   */
  interface user_secretFieldRefs {
    readonly id: FieldRef<"user_secret", 'String'>
    readonly userid: FieldRef<"user_secret", 'String'>
    readonly private_key: FieldRef<"user_secret", 'String'>
    readonly public_key: FieldRef<"user_secret", 'String'>
    readonly mnemonic: FieldRef<"user_secret", 'String'>
    readonly biometric_public_key: FieldRef<"user_secret", 'String'>
    readonly created_at: FieldRef<"user_secret", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_secret findUnique
   */
  export type user_secretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter, which user_secret to fetch.
     */
    where: user_secretWhereUniqueInput
  }

  /**
   * user_secret findUniqueOrThrow
   */
  export type user_secretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter, which user_secret to fetch.
     */
    where: user_secretWhereUniqueInput
  }

  /**
   * user_secret findFirst
   */
  export type user_secretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter, which user_secret to fetch.
     */
    where?: user_secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_secrets to fetch.
     */
    orderBy?: user_secretOrderByWithRelationInput | user_secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_secrets.
     */
    cursor?: user_secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_secrets.
     */
    distinct?: User_secretScalarFieldEnum | User_secretScalarFieldEnum[]
  }

  /**
   * user_secret findFirstOrThrow
   */
  export type user_secretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter, which user_secret to fetch.
     */
    where?: user_secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_secrets to fetch.
     */
    orderBy?: user_secretOrderByWithRelationInput | user_secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_secrets.
     */
    cursor?: user_secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_secrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_secrets.
     */
    distinct?: User_secretScalarFieldEnum | User_secretScalarFieldEnum[]
  }

  /**
   * user_secret findMany
   */
  export type user_secretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter, which user_secrets to fetch.
     */
    where?: user_secretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_secrets to fetch.
     */
    orderBy?: user_secretOrderByWithRelationInput | user_secretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_secrets.
     */
    cursor?: user_secretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_secrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_secrets.
     */
    skip?: number
    distinct?: User_secretScalarFieldEnum | User_secretScalarFieldEnum[]
  }

  /**
   * user_secret create
   */
  export type user_secretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * The data needed to create a user_secret.
     */
    data: XOR<user_secretCreateInput, user_secretUncheckedCreateInput>
  }

  /**
   * user_secret createMany
   */
  export type user_secretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_secrets.
     */
    data: user_secretCreateManyInput | user_secretCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_secret createManyAndReturn
   */
  export type user_secretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * The data used to create many user_secrets.
     */
    data: user_secretCreateManyInput | user_secretCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_secret update
   */
  export type user_secretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * The data needed to update a user_secret.
     */
    data: XOR<user_secretUpdateInput, user_secretUncheckedUpdateInput>
    /**
     * Choose, which user_secret to update.
     */
    where: user_secretWhereUniqueInput
  }

  /**
   * user_secret updateMany
   */
  export type user_secretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_secrets.
     */
    data: XOR<user_secretUpdateManyMutationInput, user_secretUncheckedUpdateManyInput>
    /**
     * Filter which user_secrets to update
     */
    where?: user_secretWhereInput
    /**
     * Limit how many user_secrets to update.
     */
    limit?: number
  }

  /**
   * user_secret updateManyAndReturn
   */
  export type user_secretUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * The data used to update user_secrets.
     */
    data: XOR<user_secretUpdateManyMutationInput, user_secretUncheckedUpdateManyInput>
    /**
     * Filter which user_secrets to update
     */
    where?: user_secretWhereInput
    /**
     * Limit how many user_secrets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_secret upsert
   */
  export type user_secretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * The filter to search for the user_secret to update in case it exists.
     */
    where: user_secretWhereUniqueInput
    /**
     * In case the user_secret found by the `where` argument doesn't exist, create a new user_secret with this data.
     */
    create: XOR<user_secretCreateInput, user_secretUncheckedCreateInput>
    /**
     * In case the user_secret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_secretUpdateInput, user_secretUncheckedUpdateInput>
  }

  /**
   * user_secret delete
   */
  export type user_secretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
    /**
     * Filter which user_secret to delete.
     */
    where: user_secretWhereUniqueInput
  }

  /**
   * user_secret deleteMany
   */
  export type user_secretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_secrets to delete
     */
    where?: user_secretWhereInput
    /**
     * Limit how many user_secrets to delete.
     */
    limit?: number
  }

  /**
   * user_secret.user_user_secretidTouser_secret
   */
  export type user_secret$user_user_secretidTouser_secretArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user_secret.user_user_secret_useridTouser
   */
  export type user_secret$user_user_secret_useridTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * user_secret without action
   */
  export type user_secretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_secret
     */
    select?: user_secretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_secret
     */
    omit?: user_secretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_secretInclude<ExtArgs> | null
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


  export const NetworkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rpc_url: 'rpc_url',
    chain_id: 'chain_id',
    current_symbol: 'current_symbol',
    price_feed_id: 'price_feed_id',
    block_explorer_url: 'block_explorer_url',
    thumbnail: 'thumbnail',
    is_default_network: 'is_default_network',
    is_testnet: 'is_testnet',
    networkswapid: 'networkswapid',
    creatorid: 'creatorid',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type NetworkScalarFieldEnum = (typeof NetworkScalarFieldEnum)[keyof typeof NetworkScalarFieldEnum]


  export const Network_swapScalarFieldEnum: {
    id: 'id',
    network_id: 'network_id',
    swap_contract_address: 'swap_contract_address',
    factory_contract_address: 'factory_contract_address',
    quote_contract_address: 'quote_contract_address',
    wrapped_token_address: 'wrapped_token_address',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Network_swapScalarFieldEnum = (typeof Network_swapScalarFieldEnum)[keyof typeof Network_swapScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol',
    decimal: 'decimal',
    thumbnail: 'thumbnail',
    price_feed_id: 'price_feed_id',
    hz_percent_change: 'hz_percent_change',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const Token_networkScalarFieldEnum: {
    token_network_id: 'token_network_id',
    contract_address: 'contract_address',
    token_id: 'token_id',
    network_id: 'network_id'
  };

  export type Token_networkScalarFieldEnum = (typeof Token_networkScalarFieldEnum)[keyof typeof Token_networkScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    transaction_status: 'transaction_status',
    transaction_gas: 'transaction_gas',
    transaction_hash: 'transaction_hash',
    block_hash: 'block_hash',
    block_number: 'block_number',
    from_address: 'from_address',
    to_address: 'to_address',
    token_contract_address: 'token_contract_address',
    max_priority_fee_per_gas: 'max_priority_fee_per_gas',
    base_fee: 'base_fee',
    token_id: 'token_id',
    network_id: 'network_id',
    amount: 'amount',
    created_at: 'created_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    password: 'password',
    avatar: 'avatar',
    secretid: 'secretid',
    currentselectednetworkid: 'currentselectednetworkid',
    push_notification_tokens: 'push_notification_tokens',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_network_tokenScalarFieldEnum: {
    user_network_token_id: 'user_network_token_id',
    userid: 'userid',
    tokennetworkid: 'tokennetworkid'
  };

  export type User_network_tokenScalarFieldEnum = (typeof User_network_tokenScalarFieldEnum)[keyof typeof User_network_tokenScalarFieldEnum]


  export const User_networks_networkScalarFieldEnum: {
    userid: 'userid',
    networkid: 'networkid'
  };

  export type User_networks_networkScalarFieldEnum = (typeof User_networks_networkScalarFieldEnum)[keyof typeof User_networks_networkScalarFieldEnum]


  export const User_secretScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    private_key: 'private_key',
    public_key: 'public_key',
    mnemonic: 'mnemonic',
    biometric_public_key: 'biometric_public_key',
    created_at: 'created_at'
  };

  export type User_secretScalarFieldEnum = (typeof User_secretScalarFieldEnum)[keyof typeof User_secretScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'etransactionstatus'
   */
  export type EnumetransactionstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'etransactionstatus'>
    


  /**
   * Reference to a field of type 'etransactionstatus[]'
   */
  export type ListEnumetransactionstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'etransactionstatus[]'>
    


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


  export type networkWhereInput = {
    AND?: networkWhereInput | networkWhereInput[]
    OR?: networkWhereInput[]
    NOT?: networkWhereInput | networkWhereInput[]
    id?: UuidFilter<"network"> | string
    name?: StringFilter<"network"> | string
    rpc_url?: StringFilter<"network"> | string
    chain_id?: IntFilter<"network"> | number
    current_symbol?: StringFilter<"network"> | string
    price_feed_id?: StringNullableFilter<"network"> | string | null
    block_explorer_url?: StringNullableFilter<"network"> | string | null
    thumbnail?: StringNullableFilter<"network"> | string | null
    is_default_network?: BoolNullableFilter<"network"> | boolean | null
    is_testnet?: BoolNullableFilter<"network"> | boolean | null
    networkswapid?: UuidNullableFilter<"network"> | string | null
    creatorid?: UuidNullableFilter<"network"> | string | null
    created_at?: DateTimeNullableFilter<"network"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"network"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"network"> | Date | string | null
    network_swap?: XOR<Network_swapNullableScalarRelationFilter, network_swapWhereInput> | null
    token_network?: Token_networkListRelationFilter
    transaction?: TransactionListRelationFilter
    user_networks_network?: User_networks_networkListRelationFilter
  }

  export type networkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rpc_url?: SortOrder
    chain_id?: SortOrder
    current_symbol?: SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    block_explorer_url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    is_default_network?: SortOrderInput | SortOrder
    is_testnet?: SortOrderInput | SortOrder
    networkswapid?: SortOrderInput | SortOrder
    creatorid?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    network_swap?: network_swapOrderByWithRelationInput
    token_network?: token_networkOrderByRelationAggregateInput
    transaction?: transactionOrderByRelationAggregateInput
    user_networks_network?: user_networks_networkOrderByRelationAggregateInput
  }

  export type networkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    networkswapid?: string
    AND?: networkWhereInput | networkWhereInput[]
    OR?: networkWhereInput[]
    NOT?: networkWhereInput | networkWhereInput[]
    name?: StringFilter<"network"> | string
    rpc_url?: StringFilter<"network"> | string
    chain_id?: IntFilter<"network"> | number
    current_symbol?: StringFilter<"network"> | string
    price_feed_id?: StringNullableFilter<"network"> | string | null
    block_explorer_url?: StringNullableFilter<"network"> | string | null
    thumbnail?: StringNullableFilter<"network"> | string | null
    is_default_network?: BoolNullableFilter<"network"> | boolean | null
    is_testnet?: BoolNullableFilter<"network"> | boolean | null
    creatorid?: UuidNullableFilter<"network"> | string | null
    created_at?: DateTimeNullableFilter<"network"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"network"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"network"> | Date | string | null
    network_swap?: XOR<Network_swapNullableScalarRelationFilter, network_swapWhereInput> | null
    token_network?: Token_networkListRelationFilter
    transaction?: TransactionListRelationFilter
    user_networks_network?: User_networks_networkListRelationFilter
  }, "id" | "id" | "networkswapid">

  export type networkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rpc_url?: SortOrder
    chain_id?: SortOrder
    current_symbol?: SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    block_explorer_url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    is_default_network?: SortOrderInput | SortOrder
    is_testnet?: SortOrderInput | SortOrder
    networkswapid?: SortOrderInput | SortOrder
    creatorid?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: networkCountOrderByAggregateInput
    _avg?: networkAvgOrderByAggregateInput
    _max?: networkMaxOrderByAggregateInput
    _min?: networkMinOrderByAggregateInput
    _sum?: networkSumOrderByAggregateInput
  }

  export type networkScalarWhereWithAggregatesInput = {
    AND?: networkScalarWhereWithAggregatesInput | networkScalarWhereWithAggregatesInput[]
    OR?: networkScalarWhereWithAggregatesInput[]
    NOT?: networkScalarWhereWithAggregatesInput | networkScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"network"> | string
    name?: StringWithAggregatesFilter<"network"> | string
    rpc_url?: StringWithAggregatesFilter<"network"> | string
    chain_id?: IntWithAggregatesFilter<"network"> | number
    current_symbol?: StringWithAggregatesFilter<"network"> | string
    price_feed_id?: StringNullableWithAggregatesFilter<"network"> | string | null
    block_explorer_url?: StringNullableWithAggregatesFilter<"network"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"network"> | string | null
    is_default_network?: BoolNullableWithAggregatesFilter<"network"> | boolean | null
    is_testnet?: BoolNullableWithAggregatesFilter<"network"> | boolean | null
    networkswapid?: UuidNullableWithAggregatesFilter<"network"> | string | null
    creatorid?: UuidNullableWithAggregatesFilter<"network"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"network"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"network"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"network"> | Date | string | null
  }

  export type network_swapWhereInput = {
    AND?: network_swapWhereInput | network_swapWhereInput[]
    OR?: network_swapWhereInput[]
    NOT?: network_swapWhereInput | network_swapWhereInput[]
    id?: UuidFilter<"network_swap"> | string
    network_id?: UuidNullableFilter<"network_swap"> | string | null
    swap_contract_address?: StringFilter<"network_swap"> | string
    factory_contract_address?: StringFilter<"network_swap"> | string
    quote_contract_address?: StringFilter<"network_swap"> | string
    wrapped_token_address?: StringFilter<"network_swap"> | string
    created_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
  }

  export type network_swapOrderByWithRelationInput = {
    id?: SortOrder
    network_id?: SortOrderInput | SortOrder
    swap_contract_address?: SortOrder
    factory_contract_address?: SortOrder
    quote_contract_address?: SortOrder
    wrapped_token_address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    network?: networkOrderByWithRelationInput
  }

  export type network_swapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    network_id?: string
    AND?: network_swapWhereInput | network_swapWhereInput[]
    OR?: network_swapWhereInput[]
    NOT?: network_swapWhereInput | network_swapWhereInput[]
    swap_contract_address?: StringFilter<"network_swap"> | string
    factory_contract_address?: StringFilter<"network_swap"> | string
    quote_contract_address?: StringFilter<"network_swap"> | string
    wrapped_token_address?: StringFilter<"network_swap"> | string
    created_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"network_swap"> | Date | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
  }, "id" | "network_id">

  export type network_swapOrderByWithAggregationInput = {
    id?: SortOrder
    network_id?: SortOrderInput | SortOrder
    swap_contract_address?: SortOrder
    factory_contract_address?: SortOrder
    quote_contract_address?: SortOrder
    wrapped_token_address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: network_swapCountOrderByAggregateInput
    _max?: network_swapMaxOrderByAggregateInput
    _min?: network_swapMinOrderByAggregateInput
  }

  export type network_swapScalarWhereWithAggregatesInput = {
    AND?: network_swapScalarWhereWithAggregatesInput | network_swapScalarWhereWithAggregatesInput[]
    OR?: network_swapScalarWhereWithAggregatesInput[]
    NOT?: network_swapScalarWhereWithAggregatesInput | network_swapScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"network_swap"> | string
    network_id?: UuidNullableWithAggregatesFilter<"network_swap"> | string | null
    swap_contract_address?: StringWithAggregatesFilter<"network_swap"> | string
    factory_contract_address?: StringWithAggregatesFilter<"network_swap"> | string
    quote_contract_address?: StringWithAggregatesFilter<"network_swap"> | string
    wrapped_token_address?: StringWithAggregatesFilter<"network_swap"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"network_swap"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"network_swap"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"network_swap"> | Date | string | null
  }

  export type tokenWhereInput = {
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    id?: UuidFilter<"token"> | string
    name?: StringFilter<"token"> | string
    symbol?: StringFilter<"token"> | string
    decimal?: IntFilter<"token"> | number
    thumbnail?: StringNullableFilter<"token"> | string | null
    price_feed_id?: StringNullableFilter<"token"> | string | null
    hz_percent_change?: StringNullableFilter<"token"> | string | null
    created_at?: DateTimeNullableFilter<"token"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"token"> | Date | string | null
    token_network?: Token_networkListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type tokenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimal?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    hz_percent_change?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    token_network?: token_networkOrderByRelationAggregateInput
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tokenWhereInput | tokenWhereInput[]
    OR?: tokenWhereInput[]
    NOT?: tokenWhereInput | tokenWhereInput[]
    name?: StringFilter<"token"> | string
    symbol?: StringFilter<"token"> | string
    decimal?: IntFilter<"token"> | number
    thumbnail?: StringNullableFilter<"token"> | string | null
    price_feed_id?: StringNullableFilter<"token"> | string | null
    hz_percent_change?: StringNullableFilter<"token"> | string | null
    created_at?: DateTimeNullableFilter<"token"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"token"> | Date | string | null
    token_network?: Token_networkListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "id" | "id">

  export type tokenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimal?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    price_feed_id?: SortOrderInput | SortOrder
    hz_percent_change?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tokenCountOrderByAggregateInput
    _avg?: tokenAvgOrderByAggregateInput
    _max?: tokenMaxOrderByAggregateInput
    _min?: tokenMinOrderByAggregateInput
    _sum?: tokenSumOrderByAggregateInput
  }

  export type tokenScalarWhereWithAggregatesInput = {
    AND?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    OR?: tokenScalarWhereWithAggregatesInput[]
    NOT?: tokenScalarWhereWithAggregatesInput | tokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"token"> | string
    name?: StringWithAggregatesFilter<"token"> | string
    symbol?: StringWithAggregatesFilter<"token"> | string
    decimal?: IntWithAggregatesFilter<"token"> | number
    thumbnail?: StringNullableWithAggregatesFilter<"token"> | string | null
    price_feed_id?: StringNullableWithAggregatesFilter<"token"> | string | null
    hz_percent_change?: StringNullableWithAggregatesFilter<"token"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"token"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"token"> | Date | string | null
  }

  export type token_networkWhereInput = {
    AND?: token_networkWhereInput | token_networkWhereInput[]
    OR?: token_networkWhereInput[]
    NOT?: token_networkWhereInput | token_networkWhereInput[]
    token_network_id?: UuidFilter<"token_network"> | string
    contract_address?: StringFilter<"token_network"> | string
    token_id?: UuidNullableFilter<"token_network"> | string | null
    network_id?: UuidNullableFilter<"token_network"> | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, tokenWhereInput> | null
    user_network_token?: User_network_tokenListRelationFilter
  }

  export type token_networkOrderByWithRelationInput = {
    token_network_id?: SortOrder
    contract_address?: SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    network?: networkOrderByWithRelationInput
    token?: tokenOrderByWithRelationInput
    user_network_token?: user_network_tokenOrderByRelationAggregateInput
  }

  export type token_networkWhereUniqueInput = Prisma.AtLeast<{
    token_network_id?: string
    AND?: token_networkWhereInput | token_networkWhereInput[]
    OR?: token_networkWhereInput[]
    NOT?: token_networkWhereInput | token_networkWhereInput[]
    contract_address?: StringFilter<"token_network"> | string
    token_id?: UuidNullableFilter<"token_network"> | string | null
    network_id?: UuidNullableFilter<"token_network"> | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, tokenWhereInput> | null
    user_network_token?: User_network_tokenListRelationFilter
  }, "token_network_id">

  export type token_networkOrderByWithAggregationInput = {
    token_network_id?: SortOrder
    contract_address?: SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    _count?: token_networkCountOrderByAggregateInput
    _max?: token_networkMaxOrderByAggregateInput
    _min?: token_networkMinOrderByAggregateInput
  }

  export type token_networkScalarWhereWithAggregatesInput = {
    AND?: token_networkScalarWhereWithAggregatesInput | token_networkScalarWhereWithAggregatesInput[]
    OR?: token_networkScalarWhereWithAggregatesInput[]
    NOT?: token_networkScalarWhereWithAggregatesInput | token_networkScalarWhereWithAggregatesInput[]
    token_network_id?: UuidWithAggregatesFilter<"token_network"> | string
    contract_address?: StringWithAggregatesFilter<"token_network"> | string
    token_id?: UuidNullableWithAggregatesFilter<"token_network"> | string | null
    network_id?: UuidNullableWithAggregatesFilter<"token_network"> | string | null
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: UuidFilter<"transaction"> | string
    transaction_status?: EnumetransactionstatusNullableFilter<"transaction"> | $Enums.etransactionstatus | null
    transaction_gas?: FloatNullableFilter<"transaction"> | number | null
    transaction_hash?: StringNullableFilter<"transaction"> | string | null
    block_hash?: StringNullableFilter<"transaction"> | string | null
    block_number?: IntNullableFilter<"transaction"> | number | null
    from_address?: StringFilter<"transaction"> | string
    to_address?: StringFilter<"transaction"> | string
    token_contract_address?: StringNullableFilter<"transaction"> | string | null
    max_priority_fee_per_gas?: FloatNullableFilter<"transaction"> | number | null
    base_fee?: FloatNullableFilter<"transaction"> | number | null
    token_id?: UuidNullableFilter<"transaction"> | string | null
    network_id?: UuidNullableFilter<"transaction"> | string | null
    amount?: FloatFilter<"transaction"> | number
    created_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, tokenWhereInput> | null
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    transaction_status?: SortOrderInput | SortOrder
    transaction_gas?: SortOrderInput | SortOrder
    transaction_hash?: SortOrderInput | SortOrder
    block_hash?: SortOrderInput | SortOrder
    block_number?: SortOrderInput | SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    token_contract_address?: SortOrderInput | SortOrder
    max_priority_fee_per_gas?: SortOrderInput | SortOrder
    base_fee?: SortOrderInput | SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    network?: networkOrderByWithRelationInput
    token?: tokenOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    transaction_status?: EnumetransactionstatusNullableFilter<"transaction"> | $Enums.etransactionstatus | null
    transaction_gas?: FloatNullableFilter<"transaction"> | number | null
    transaction_hash?: StringNullableFilter<"transaction"> | string | null
    block_hash?: StringNullableFilter<"transaction"> | string | null
    block_number?: IntNullableFilter<"transaction"> | number | null
    from_address?: StringFilter<"transaction"> | string
    to_address?: StringFilter<"transaction"> | string
    token_contract_address?: StringNullableFilter<"transaction"> | string | null
    max_priority_fee_per_gas?: FloatNullableFilter<"transaction"> | number | null
    base_fee?: FloatNullableFilter<"transaction"> | number | null
    token_id?: UuidNullableFilter<"transaction"> | string | null
    network_id?: UuidNullableFilter<"transaction"> | string | null
    amount?: FloatFilter<"transaction"> | number
    created_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    network?: XOR<NetworkNullableScalarRelationFilter, networkWhereInput> | null
    token?: XOR<TokenNullableScalarRelationFilter, tokenWhereInput> | null
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_status?: SortOrderInput | SortOrder
    transaction_gas?: SortOrderInput | SortOrder
    transaction_hash?: SortOrderInput | SortOrder
    block_hash?: SortOrderInput | SortOrder
    block_number?: SortOrderInput | SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    token_contract_address?: SortOrderInput | SortOrder
    max_priority_fee_per_gas?: SortOrderInput | SortOrder
    base_fee?: SortOrderInput | SortOrder
    token_id?: SortOrderInput | SortOrder
    network_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"transaction"> | string
    transaction_status?: EnumetransactionstatusNullableWithAggregatesFilter<"transaction"> | $Enums.etransactionstatus | null
    transaction_gas?: FloatNullableWithAggregatesFilter<"transaction"> | number | null
    transaction_hash?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    block_hash?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    block_number?: IntNullableWithAggregatesFilter<"transaction"> | number | null
    from_address?: StringWithAggregatesFilter<"transaction"> | string
    to_address?: StringWithAggregatesFilter<"transaction"> | string
    token_contract_address?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    max_priority_fee_per_gas?: FloatNullableWithAggregatesFilter<"transaction"> | number | null
    base_fee?: FloatNullableWithAggregatesFilter<"transaction"> | number | null
    token_id?: UuidNullableWithAggregatesFilter<"transaction"> | string | null
    network_id?: UuidNullableWithAggregatesFilter<"transaction"> | string | null
    amount?: FloatWithAggregatesFilter<"transaction"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    address?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    secretid?: UuidNullableFilter<"user"> | string | null
    currentselectednetworkid?: UuidNullableFilter<"user"> | string | null
    push_notification_tokens?: StringNullableListFilter<"user">
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    user_secret_user_secretidTouser_secret?: XOR<User_secretNullableScalarRelationFilter, user_secretWhereInput> | null
    user_network_token?: User_network_tokenListRelationFilter
    user_networks_network?: User_networks_networkListRelationFilter
    user_secret_user_secret_useridTouser?: XOR<User_secretNullableScalarRelationFilter, user_secretWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    secretid?: SortOrderInput | SortOrder
    currentselectednetworkid?: SortOrderInput | SortOrder
    push_notification_tokens?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user_secret_user_secretidTouser_secret?: user_secretOrderByWithRelationInput
    user_network_token?: user_network_tokenOrderByRelationAggregateInput
    user_networks_network?: user_networks_networkOrderByRelationAggregateInput
    user_secret_user_secret_useridTouser?: user_secretOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    address?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    secretid?: UuidNullableFilter<"user"> | string | null
    currentselectednetworkid?: UuidNullableFilter<"user"> | string | null
    push_notification_tokens?: StringNullableListFilter<"user">
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    user_secret_user_secretidTouser_secret?: XOR<User_secretNullableScalarRelationFilter, user_secretWhereInput> | null
    user_network_token?: User_network_tokenListRelationFilter
    user_networks_network?: User_networks_networkListRelationFilter
    user_secret_user_secret_useridTouser?: XOR<User_secretNullableScalarRelationFilter, user_secretWhereInput> | null
  }, "id" | "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    secretid?: SortOrderInput | SortOrder
    currentselectednetworkid?: SortOrderInput | SortOrder
    push_notification_tokens?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    address?: StringWithAggregatesFilter<"user"> | string
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    secretid?: UuidNullableWithAggregatesFilter<"user"> | string | null
    currentselectednetworkid?: UuidNullableWithAggregatesFilter<"user"> | string | null
    push_notification_tokens?: StringNullableListFilter<"user">
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type user_network_tokenWhereInput = {
    AND?: user_network_tokenWhereInput | user_network_tokenWhereInput[]
    OR?: user_network_tokenWhereInput[]
    NOT?: user_network_tokenWhereInput | user_network_tokenWhereInput[]
    user_network_token_id?: UuidFilter<"user_network_token"> | string
    userid?: UuidFilter<"user_network_token"> | string
    tokennetworkid?: UuidFilter<"user_network_token"> | string
    token_network?: XOR<Token_networkScalarRelationFilter, token_networkWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_network_tokenOrderByWithRelationInput = {
    user_network_token_id?: SortOrder
    userid?: SortOrder
    tokennetworkid?: SortOrder
    token_network?: token_networkOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_network_tokenWhereUniqueInput = Prisma.AtLeast<{
    user_network_token_id?: string
    AND?: user_network_tokenWhereInput | user_network_tokenWhereInput[]
    OR?: user_network_tokenWhereInput[]
    NOT?: user_network_tokenWhereInput | user_network_tokenWhereInput[]
    userid?: UuidFilter<"user_network_token"> | string
    tokennetworkid?: UuidFilter<"user_network_token"> | string
    token_network?: XOR<Token_networkScalarRelationFilter, token_networkWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "user_network_token_id">

  export type user_network_tokenOrderByWithAggregationInput = {
    user_network_token_id?: SortOrder
    userid?: SortOrder
    tokennetworkid?: SortOrder
    _count?: user_network_tokenCountOrderByAggregateInput
    _max?: user_network_tokenMaxOrderByAggregateInput
    _min?: user_network_tokenMinOrderByAggregateInput
  }

  export type user_network_tokenScalarWhereWithAggregatesInput = {
    AND?: user_network_tokenScalarWhereWithAggregatesInput | user_network_tokenScalarWhereWithAggregatesInput[]
    OR?: user_network_tokenScalarWhereWithAggregatesInput[]
    NOT?: user_network_tokenScalarWhereWithAggregatesInput | user_network_tokenScalarWhereWithAggregatesInput[]
    user_network_token_id?: UuidWithAggregatesFilter<"user_network_token"> | string
    userid?: UuidWithAggregatesFilter<"user_network_token"> | string
    tokennetworkid?: UuidWithAggregatesFilter<"user_network_token"> | string
  }

  export type user_networks_networkWhereInput = {
    AND?: user_networks_networkWhereInput | user_networks_networkWhereInput[]
    OR?: user_networks_networkWhereInput[]
    NOT?: user_networks_networkWhereInput | user_networks_networkWhereInput[]
    userid?: UuidFilter<"user_networks_network"> | string
    networkid?: UuidFilter<"user_networks_network"> | string
    network?: XOR<NetworkScalarRelationFilter, networkWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_networks_networkOrderByWithRelationInput = {
    userid?: SortOrder
    networkid?: SortOrder
    network?: networkOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_networks_networkWhereUniqueInput = Prisma.AtLeast<{
    userid_networkid?: user_networks_networkUseridNetworkidCompoundUniqueInput
    AND?: user_networks_networkWhereInput | user_networks_networkWhereInput[]
    OR?: user_networks_networkWhereInput[]
    NOT?: user_networks_networkWhereInput | user_networks_networkWhereInput[]
    userid?: UuidFilter<"user_networks_network"> | string
    networkid?: UuidFilter<"user_networks_network"> | string
    network?: XOR<NetworkScalarRelationFilter, networkWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "userid_networkid">

  export type user_networks_networkOrderByWithAggregationInput = {
    userid?: SortOrder
    networkid?: SortOrder
    _count?: user_networks_networkCountOrderByAggregateInput
    _max?: user_networks_networkMaxOrderByAggregateInput
    _min?: user_networks_networkMinOrderByAggregateInput
  }

  export type user_networks_networkScalarWhereWithAggregatesInput = {
    AND?: user_networks_networkScalarWhereWithAggregatesInput | user_networks_networkScalarWhereWithAggregatesInput[]
    OR?: user_networks_networkScalarWhereWithAggregatesInput[]
    NOT?: user_networks_networkScalarWhereWithAggregatesInput | user_networks_networkScalarWhereWithAggregatesInput[]
    userid?: UuidWithAggregatesFilter<"user_networks_network"> | string
    networkid?: UuidWithAggregatesFilter<"user_networks_network"> | string
  }

  export type user_secretWhereInput = {
    AND?: user_secretWhereInput | user_secretWhereInput[]
    OR?: user_secretWhereInput[]
    NOT?: user_secretWhereInput | user_secretWhereInput[]
    id?: UuidFilter<"user_secret"> | string
    userid?: UuidNullableFilter<"user_secret"> | string | null
    private_key?: StringFilter<"user_secret"> | string
    public_key?: StringFilter<"user_secret"> | string
    mnemonic?: StringFilter<"user_secret"> | string
    biometric_public_key?: StringNullableFilter<"user_secret"> | string | null
    created_at?: DateTimeNullableFilter<"user_secret"> | Date | string | null
    user_user_secretidTouser_secret?: UserListRelationFilter
    user_user_secret_useridTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type user_secretOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrderInput | SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    mnemonic?: SortOrder
    biometric_public_key?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_user_secretidTouser_secret?: userOrderByRelationAggregateInput
    user_user_secret_useridTouser?: userOrderByWithRelationInput
  }

  export type user_secretWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userid?: string
    mnemonic?: string
    AND?: user_secretWhereInput | user_secretWhereInput[]
    OR?: user_secretWhereInput[]
    NOT?: user_secretWhereInput | user_secretWhereInput[]
    private_key?: StringFilter<"user_secret"> | string
    public_key?: StringFilter<"user_secret"> | string
    biometric_public_key?: StringNullableFilter<"user_secret"> | string | null
    created_at?: DateTimeNullableFilter<"user_secret"> | Date | string | null
    user_user_secretidTouser_secret?: UserListRelationFilter
    user_user_secret_useridTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "id" | "userid" | "mnemonic">

  export type user_secretOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrderInput | SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    mnemonic?: SortOrder
    biometric_public_key?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: user_secretCountOrderByAggregateInput
    _max?: user_secretMaxOrderByAggregateInput
    _min?: user_secretMinOrderByAggregateInput
  }

  export type user_secretScalarWhereWithAggregatesInput = {
    AND?: user_secretScalarWhereWithAggregatesInput | user_secretScalarWhereWithAggregatesInput[]
    OR?: user_secretScalarWhereWithAggregatesInput[]
    NOT?: user_secretScalarWhereWithAggregatesInput | user_secretScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_secret"> | string
    userid?: UuidNullableWithAggregatesFilter<"user_secret"> | string | null
    private_key?: StringWithAggregatesFilter<"user_secret"> | string
    public_key?: StringWithAggregatesFilter<"user_secret"> | string
    mnemonic?: StringWithAggregatesFilter<"user_secret"> | string
    biometric_public_key?: StringNullableWithAggregatesFilter<"user_secret"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user_secret"> | Date | string | null
  }

  export type networkCreateInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapCreateNestedOneWithoutNetworkInput
    token_network?: token_networkCreateNestedManyWithoutNetworkInput
    transaction?: transactionCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapUncheckedCreateNestedOneWithoutNetworkInput
    token_network?: token_networkUncheckedCreateNestedManyWithoutNetworkInput
    transaction?: transactionUncheckedCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUncheckedUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUncheckedUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type networkCreateManyInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type networkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type networkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type network_swapCreateInput = {
    id?: string
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network?: networkCreateNestedOneWithoutNetwork_swapInput
  }

  export type network_swapUncheckedCreateInput = {
    id?: string
    network_id?: string | null
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type network_swapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network?: networkUpdateOneWithoutNetwork_swapNestedInput
  }

  export type network_swapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type network_swapCreateManyInput = {
    id?: string
    network_id?: string | null
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type network_swapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type network_swapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokenCreateInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    token_network?: token_networkCreateNestedManyWithoutTokenInput
    transaction?: transactionCreateNestedManyWithoutTokenInput
  }

  export type tokenUncheckedCreateInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    token_network?: token_networkUncheckedCreateNestedManyWithoutTokenInput
    transaction?: transactionUncheckedCreateNestedManyWithoutTokenInput
  }

  export type tokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUpdateManyWithoutTokenNestedInput
    transaction?: transactionUpdateManyWithoutTokenNestedInput
  }

  export type tokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUncheckedUpdateManyWithoutTokenNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type tokenCreateManyInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type token_networkCreateInput = {
    token_network_id?: string
    contract_address: string
    network?: networkCreateNestedOneWithoutToken_networkInput
    token?: tokenCreateNestedOneWithoutToken_networkInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkUncheckedCreateInput = {
    token_network_id?: string
    contract_address: string
    token_id?: string | null
    network_id?: string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkUpdateInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    network?: networkUpdateOneWithoutToken_networkNestedInput
    token?: tokenUpdateOneWithoutToken_networkNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkCreateManyInput = {
    token_network_id?: string
    contract_address: string
    token_id?: string | null
    network_id?: string | null
  }

  export type token_networkUpdateManyMutationInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
  }

  export type token_networkUncheckedUpdateManyInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionCreateInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    amount: number
    created_at?: Date | string | null
    network?: networkCreateNestedOneWithoutTransactionInput
    token?: tokenCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    token_id?: string | null
    network_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network?: networkUpdateOneWithoutTransactionNestedInput
    token?: tokenUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateManyInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    token_id?: string | null
    network_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretCreateNestedOneWithoutUser_user_secretidTouser_secretInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    secretid?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretUpdateOneWithoutUser_user_secretidTouser_secretNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    secretid?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    secretid?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    secretid?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_network_tokenCreateInput = {
    user_network_token_id?: string
    token_network: token_networkCreateNestedOneWithoutUser_network_tokenInput
    user: userCreateNestedOneWithoutUser_network_tokenInput
  }

  export type user_network_tokenUncheckedCreateInput = {
    user_network_token_id?: string
    userid: string
    tokennetworkid: string
  }

  export type user_network_tokenUpdateInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network?: token_networkUpdateOneRequiredWithoutUser_network_tokenNestedInput
    user?: userUpdateOneRequiredWithoutUser_network_tokenNestedInput
  }

  export type user_network_tokenUncheckedUpdateInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    tokennetworkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_network_tokenCreateManyInput = {
    user_network_token_id?: string
    userid: string
    tokennetworkid: string
  }

  export type user_network_tokenUpdateManyMutationInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
  }

  export type user_network_tokenUncheckedUpdateManyInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    tokennetworkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_networks_networkCreateInput = {
    network: networkCreateNestedOneWithoutUser_networks_networkInput
    user: userCreateNestedOneWithoutUser_networks_networkInput
  }

  export type user_networks_networkUncheckedCreateInput = {
    userid: string
    networkid: string
  }

  export type user_networks_networkUpdateInput = {
    network?: networkUpdateOneRequiredWithoutUser_networks_networkNestedInput
    user?: userUpdateOneRequiredWithoutUser_networks_networkNestedInput
  }

  export type user_networks_networkUncheckedUpdateInput = {
    userid?: StringFieldUpdateOperationsInput | string
    networkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_networks_networkCreateManyInput = {
    userid: string
    networkid: string
  }

  export type user_networks_networkUpdateManyMutationInput = {

  }

  export type user_networks_networkUncheckedUpdateManyInput = {
    userid?: StringFieldUpdateOperationsInput | string
    networkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_secretCreateInput = {
    id?: string
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
    user_user_secretidTouser_secret?: userCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput
    user_user_secret_useridTouser?: userCreateNestedOneWithoutUser_secret_user_secret_useridTouserInput
  }

  export type user_secretUncheckedCreateInput = {
    id?: string
    userid?: string | null
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
    user_user_secretidTouser_secret?: userUncheckedCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput
  }

  export type user_secretUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_user_secretidTouser_secret?: userUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput
    user_user_secret_useridTouser?: userUpdateOneWithoutUser_secret_user_secret_useridTouserNestedInput
  }

  export type user_secretUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_user_secretidTouser_secret?: userUncheckedUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput
  }

  export type user_secretCreateManyInput = {
    id?: string
    userid?: string | null
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
  }

  export type user_secretUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_secretUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type Network_swapNullableScalarRelationFilter = {
    is?: network_swapWhereInput | null
    isNot?: network_swapWhereInput | null
  }

  export type Token_networkListRelationFilter = {
    every?: token_networkWhereInput
    some?: token_networkWhereInput
    none?: token_networkWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type User_networks_networkListRelationFilter = {
    every?: user_networks_networkWhereInput
    some?: user_networks_networkWhereInput
    none?: user_networks_networkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type token_networkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_networks_networkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type networkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpc_url?: SortOrder
    chain_id?: SortOrder
    current_symbol?: SortOrder
    price_feed_id?: SortOrder
    block_explorer_url?: SortOrder
    thumbnail?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    networkswapid?: SortOrder
    creatorid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type networkAvgOrderByAggregateInput = {
    chain_id?: SortOrder
  }

  export type networkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpc_url?: SortOrder
    chain_id?: SortOrder
    current_symbol?: SortOrder
    price_feed_id?: SortOrder
    block_explorer_url?: SortOrder
    thumbnail?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    networkswapid?: SortOrder
    creatorid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type networkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rpc_url?: SortOrder
    chain_id?: SortOrder
    current_symbol?: SortOrder
    price_feed_id?: SortOrder
    block_explorer_url?: SortOrder
    thumbnail?: SortOrder
    is_default_network?: SortOrder
    is_testnet?: SortOrder
    networkswapid?: SortOrder
    creatorid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type networkSumOrderByAggregateInput = {
    chain_id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NetworkNullableScalarRelationFilter = {
    is?: networkWhereInput | null
    isNot?: networkWhereInput | null
  }

  export type network_swapCountOrderByAggregateInput = {
    id?: SortOrder
    network_id?: SortOrder
    swap_contract_address?: SortOrder
    factory_contract_address?: SortOrder
    quote_contract_address?: SortOrder
    wrapped_token_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type network_swapMaxOrderByAggregateInput = {
    id?: SortOrder
    network_id?: SortOrder
    swap_contract_address?: SortOrder
    factory_contract_address?: SortOrder
    quote_contract_address?: SortOrder
    wrapped_token_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type network_swapMinOrderByAggregateInput = {
    id?: SortOrder
    network_id?: SortOrder
    swap_contract_address?: SortOrder
    factory_contract_address?: SortOrder
    quote_contract_address?: SortOrder
    wrapped_token_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tokenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimal?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    hz_percent_change?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tokenAvgOrderByAggregateInput = {
    decimal?: SortOrder
  }

  export type tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimal?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    hz_percent_change?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tokenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    decimal?: SortOrder
    thumbnail?: SortOrder
    price_feed_id?: SortOrder
    hz_percent_change?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tokenSumOrderByAggregateInput = {
    decimal?: SortOrder
  }

  export type TokenNullableScalarRelationFilter = {
    is?: tokenWhereInput | null
    isNot?: tokenWhereInput | null
  }

  export type User_network_tokenListRelationFilter = {
    every?: user_network_tokenWhereInput
    some?: user_network_tokenWhereInput
    none?: user_network_tokenWhereInput
  }

  export type user_network_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type token_networkCountOrderByAggregateInput = {
    token_network_id?: SortOrder
    contract_address?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
  }

  export type token_networkMaxOrderByAggregateInput = {
    token_network_id?: SortOrder
    contract_address?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
  }

  export type token_networkMinOrderByAggregateInput = {
    token_network_id?: SortOrder
    contract_address?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
  }

  export type EnumetransactionstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.etransactionstatus | EnumetransactionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumetransactionstatusNullableFilter<$PrismaModel> | $Enums.etransactionstatus | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_status?: SortOrder
    transaction_gas?: SortOrder
    transaction_hash?: SortOrder
    block_hash?: SortOrder
    block_number?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    token_contract_address?: SortOrder
    max_priority_fee_per_gas?: SortOrder
    base_fee?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    transaction_gas?: SortOrder
    block_number?: SortOrder
    max_priority_fee_per_gas?: SortOrder
    base_fee?: SortOrder
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_status?: SortOrder
    transaction_gas?: SortOrder
    transaction_hash?: SortOrder
    block_hash?: SortOrder
    block_number?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    token_contract_address?: SortOrder
    max_priority_fee_per_gas?: SortOrder
    base_fee?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_status?: SortOrder
    transaction_gas?: SortOrder
    transaction_hash?: SortOrder
    block_hash?: SortOrder
    block_number?: SortOrder
    from_address?: SortOrder
    to_address?: SortOrder
    token_contract_address?: SortOrder
    max_priority_fee_per_gas?: SortOrder
    base_fee?: SortOrder
    token_id?: SortOrder
    network_id?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    transaction_gas?: SortOrder
    block_number?: SortOrder
    max_priority_fee_per_gas?: SortOrder
    base_fee?: SortOrder
    amount?: SortOrder
  }

  export type EnumetransactionstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.etransactionstatus | EnumetransactionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumetransactionstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.etransactionstatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumetransactionstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumetransactionstatusNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type User_secretNullableScalarRelationFilter = {
    is?: user_secretWhereInput | null
    isNot?: user_secretWhereInput | null
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    secretid?: SortOrder
    currentselectednetworkid?: SortOrder
    push_notification_tokens?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    secretid?: SortOrder
    currentselectednetworkid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    secretid?: SortOrder
    currentselectednetworkid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type Token_networkScalarRelationFilter = {
    is?: token_networkWhereInput
    isNot?: token_networkWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_network_tokenCountOrderByAggregateInput = {
    user_network_token_id?: SortOrder
    userid?: SortOrder
    tokennetworkid?: SortOrder
  }

  export type user_network_tokenMaxOrderByAggregateInput = {
    user_network_token_id?: SortOrder
    userid?: SortOrder
    tokennetworkid?: SortOrder
  }

  export type user_network_tokenMinOrderByAggregateInput = {
    user_network_token_id?: SortOrder
    userid?: SortOrder
    tokennetworkid?: SortOrder
  }

  export type NetworkScalarRelationFilter = {
    is?: networkWhereInput
    isNot?: networkWhereInput
  }

  export type user_networks_networkUseridNetworkidCompoundUniqueInput = {
    userid: string
    networkid: string
  }

  export type user_networks_networkCountOrderByAggregateInput = {
    userid?: SortOrder
    networkid?: SortOrder
  }

  export type user_networks_networkMaxOrderByAggregateInput = {
    userid?: SortOrder
    networkid?: SortOrder
  }

  export type user_networks_networkMinOrderByAggregateInput = {
    userid?: SortOrder
    networkid?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_secretCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    mnemonic?: SortOrder
    biometric_public_key?: SortOrder
    created_at?: SortOrder
  }

  export type user_secretMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    mnemonic?: SortOrder
    biometric_public_key?: SortOrder
    created_at?: SortOrder
  }

  export type user_secretMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    mnemonic?: SortOrder
    biometric_public_key?: SortOrder
    created_at?: SortOrder
  }

  export type network_swapCreateNestedOneWithoutNetworkInput = {
    create?: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
    connectOrCreate?: network_swapCreateOrConnectWithoutNetworkInput
    connect?: network_swapWhereUniqueInput
  }

  export type token_networkCreateNestedManyWithoutNetworkInput = {
    create?: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput> | token_networkCreateWithoutNetworkInput[] | token_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutNetworkInput | token_networkCreateOrConnectWithoutNetworkInput[]
    createMany?: token_networkCreateManyNetworkInputEnvelope
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutNetworkInput = {
    create?: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput> | transactionCreateWithoutNetworkInput[] | transactionUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutNetworkInput | transactionCreateOrConnectWithoutNetworkInput[]
    createMany?: transactionCreateManyNetworkInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type user_networks_networkCreateNestedManyWithoutNetworkInput = {
    create?: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput> | user_networks_networkCreateWithoutNetworkInput[] | user_networks_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutNetworkInput | user_networks_networkCreateOrConnectWithoutNetworkInput[]
    createMany?: user_networks_networkCreateManyNetworkInputEnvelope
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
  }

  export type network_swapUncheckedCreateNestedOneWithoutNetworkInput = {
    create?: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
    connectOrCreate?: network_swapCreateOrConnectWithoutNetworkInput
    connect?: network_swapWhereUniqueInput
  }

  export type token_networkUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput> | token_networkCreateWithoutNetworkInput[] | token_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutNetworkInput | token_networkCreateOrConnectWithoutNetworkInput[]
    createMany?: token_networkCreateManyNetworkInputEnvelope
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput> | transactionCreateWithoutNetworkInput[] | transactionUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutNetworkInput | transactionCreateOrConnectWithoutNetworkInput[]
    createMany?: transactionCreateManyNetworkInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type user_networks_networkUncheckedCreateNestedManyWithoutNetworkInput = {
    create?: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput> | user_networks_networkCreateWithoutNetworkInput[] | user_networks_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutNetworkInput | user_networks_networkCreateOrConnectWithoutNetworkInput[]
    createMany?: user_networks_networkCreateManyNetworkInputEnvelope
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type network_swapUpdateOneWithoutNetworkNestedInput = {
    create?: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
    connectOrCreate?: network_swapCreateOrConnectWithoutNetworkInput
    upsert?: network_swapUpsertWithoutNetworkInput
    disconnect?: network_swapWhereInput | boolean
    delete?: network_swapWhereInput | boolean
    connect?: network_swapWhereUniqueInput
    update?: XOR<XOR<network_swapUpdateToOneWithWhereWithoutNetworkInput, network_swapUpdateWithoutNetworkInput>, network_swapUncheckedUpdateWithoutNetworkInput>
  }

  export type token_networkUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput> | token_networkCreateWithoutNetworkInput[] | token_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutNetworkInput | token_networkCreateOrConnectWithoutNetworkInput[]
    upsert?: token_networkUpsertWithWhereUniqueWithoutNetworkInput | token_networkUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: token_networkCreateManyNetworkInputEnvelope
    set?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    disconnect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    delete?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    update?: token_networkUpdateWithWhereUniqueWithoutNetworkInput | token_networkUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: token_networkUpdateManyWithWhereWithoutNetworkInput | token_networkUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput> | transactionCreateWithoutNetworkInput[] | transactionUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutNetworkInput | transactionCreateOrConnectWithoutNetworkInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutNetworkInput | transactionUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: transactionCreateManyNetworkInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutNetworkInput | transactionUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutNetworkInput | transactionUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type user_networks_networkUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput> | user_networks_networkCreateWithoutNetworkInput[] | user_networks_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutNetworkInput | user_networks_networkCreateOrConnectWithoutNetworkInput[]
    upsert?: user_networks_networkUpsertWithWhereUniqueWithoutNetworkInput | user_networks_networkUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: user_networks_networkCreateManyNetworkInputEnvelope
    set?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    disconnect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    delete?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    update?: user_networks_networkUpdateWithWhereUniqueWithoutNetworkInput | user_networks_networkUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: user_networks_networkUpdateManyWithWhereWithoutNetworkInput | user_networks_networkUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
  }

  export type network_swapUncheckedUpdateOneWithoutNetworkNestedInput = {
    create?: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
    connectOrCreate?: network_swapCreateOrConnectWithoutNetworkInput
    upsert?: network_swapUpsertWithoutNetworkInput
    disconnect?: network_swapWhereInput | boolean
    delete?: network_swapWhereInput | boolean
    connect?: network_swapWhereUniqueInput
    update?: XOR<XOR<network_swapUpdateToOneWithWhereWithoutNetworkInput, network_swapUpdateWithoutNetworkInput>, network_swapUncheckedUpdateWithoutNetworkInput>
  }

  export type token_networkUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput> | token_networkCreateWithoutNetworkInput[] | token_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutNetworkInput | token_networkCreateOrConnectWithoutNetworkInput[]
    upsert?: token_networkUpsertWithWhereUniqueWithoutNetworkInput | token_networkUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: token_networkCreateManyNetworkInputEnvelope
    set?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    disconnect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    delete?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    update?: token_networkUpdateWithWhereUniqueWithoutNetworkInput | token_networkUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: token_networkUpdateManyWithWhereWithoutNetworkInput | token_networkUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput> | transactionCreateWithoutNetworkInput[] | transactionUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutNetworkInput | transactionCreateOrConnectWithoutNetworkInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutNetworkInput | transactionUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: transactionCreateManyNetworkInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutNetworkInput | transactionUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutNetworkInput | transactionUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type user_networks_networkUncheckedUpdateManyWithoutNetworkNestedInput = {
    create?: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput> | user_networks_networkCreateWithoutNetworkInput[] | user_networks_networkUncheckedCreateWithoutNetworkInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutNetworkInput | user_networks_networkCreateOrConnectWithoutNetworkInput[]
    upsert?: user_networks_networkUpsertWithWhereUniqueWithoutNetworkInput | user_networks_networkUpsertWithWhereUniqueWithoutNetworkInput[]
    createMany?: user_networks_networkCreateManyNetworkInputEnvelope
    set?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    disconnect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    delete?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    update?: user_networks_networkUpdateWithWhereUniqueWithoutNetworkInput | user_networks_networkUpdateWithWhereUniqueWithoutNetworkInput[]
    updateMany?: user_networks_networkUpdateManyWithWhereWithoutNetworkInput | user_networks_networkUpdateManyWithWhereWithoutNetworkInput[]
    deleteMany?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
  }

  export type networkCreateNestedOneWithoutNetwork_swapInput = {
    create?: XOR<networkCreateWithoutNetwork_swapInput, networkUncheckedCreateWithoutNetwork_swapInput>
    connectOrCreate?: networkCreateOrConnectWithoutNetwork_swapInput
    connect?: networkWhereUniqueInput
  }

  export type networkUpdateOneWithoutNetwork_swapNestedInput = {
    create?: XOR<networkCreateWithoutNetwork_swapInput, networkUncheckedCreateWithoutNetwork_swapInput>
    connectOrCreate?: networkCreateOrConnectWithoutNetwork_swapInput
    upsert?: networkUpsertWithoutNetwork_swapInput
    disconnect?: networkWhereInput | boolean
    delete?: networkWhereInput | boolean
    connect?: networkWhereUniqueInput
    update?: XOR<XOR<networkUpdateToOneWithWhereWithoutNetwork_swapInput, networkUpdateWithoutNetwork_swapInput>, networkUncheckedUpdateWithoutNetwork_swapInput>
  }

  export type token_networkCreateNestedManyWithoutTokenInput = {
    create?: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput> | token_networkCreateWithoutTokenInput[] | token_networkUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutTokenInput | token_networkCreateOrConnectWithoutTokenInput[]
    createMany?: token_networkCreateManyTokenInputEnvelope
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutTokenInput = {
    create?: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput> | transactionCreateWithoutTokenInput[] | transactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTokenInput | transactionCreateOrConnectWithoutTokenInput[]
    createMany?: transactionCreateManyTokenInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type token_networkUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput> | token_networkCreateWithoutTokenInput[] | token_networkUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutTokenInput | token_networkCreateOrConnectWithoutTokenInput[]
    createMany?: token_networkCreateManyTokenInputEnvelope
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput> | transactionCreateWithoutTokenInput[] | transactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTokenInput | transactionCreateOrConnectWithoutTokenInput[]
    createMany?: transactionCreateManyTokenInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type token_networkUpdateManyWithoutTokenNestedInput = {
    create?: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput> | token_networkCreateWithoutTokenInput[] | token_networkUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutTokenInput | token_networkCreateOrConnectWithoutTokenInput[]
    upsert?: token_networkUpsertWithWhereUniqueWithoutTokenInput | token_networkUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: token_networkCreateManyTokenInputEnvelope
    set?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    disconnect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    delete?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    update?: token_networkUpdateWithWhereUniqueWithoutTokenInput | token_networkUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: token_networkUpdateManyWithWhereWithoutTokenInput | token_networkUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutTokenNestedInput = {
    create?: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput> | transactionCreateWithoutTokenInput[] | transactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTokenInput | transactionCreateOrConnectWithoutTokenInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutTokenInput | transactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: transactionCreateManyTokenInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutTokenInput | transactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutTokenInput | transactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type token_networkUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput> | token_networkCreateWithoutTokenInput[] | token_networkUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: token_networkCreateOrConnectWithoutTokenInput | token_networkCreateOrConnectWithoutTokenInput[]
    upsert?: token_networkUpsertWithWhereUniqueWithoutTokenInput | token_networkUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: token_networkCreateManyTokenInputEnvelope
    set?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    disconnect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    delete?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    connect?: token_networkWhereUniqueInput | token_networkWhereUniqueInput[]
    update?: token_networkUpdateWithWhereUniqueWithoutTokenInput | token_networkUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: token_networkUpdateManyWithWhereWithoutTokenInput | token_networkUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput> | transactionCreateWithoutTokenInput[] | transactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTokenInput | transactionCreateOrConnectWithoutTokenInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutTokenInput | transactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: transactionCreateManyTokenInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutTokenInput | transactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutTokenInput | transactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type networkCreateNestedOneWithoutToken_networkInput = {
    create?: XOR<networkCreateWithoutToken_networkInput, networkUncheckedCreateWithoutToken_networkInput>
    connectOrCreate?: networkCreateOrConnectWithoutToken_networkInput
    connect?: networkWhereUniqueInput
  }

  export type tokenCreateNestedOneWithoutToken_networkInput = {
    create?: XOR<tokenCreateWithoutToken_networkInput, tokenUncheckedCreateWithoutToken_networkInput>
    connectOrCreate?: tokenCreateOrConnectWithoutToken_networkInput
    connect?: tokenWhereUniqueInput
  }

  export type user_network_tokenCreateNestedManyWithoutToken_networkInput = {
    create?: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput> | user_network_tokenCreateWithoutToken_networkInput[] | user_network_tokenUncheckedCreateWithoutToken_networkInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutToken_networkInput | user_network_tokenCreateOrConnectWithoutToken_networkInput[]
    createMany?: user_network_tokenCreateManyToken_networkInputEnvelope
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
  }

  export type user_network_tokenUncheckedCreateNestedManyWithoutToken_networkInput = {
    create?: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput> | user_network_tokenCreateWithoutToken_networkInput[] | user_network_tokenUncheckedCreateWithoutToken_networkInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutToken_networkInput | user_network_tokenCreateOrConnectWithoutToken_networkInput[]
    createMany?: user_network_tokenCreateManyToken_networkInputEnvelope
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
  }

  export type networkUpdateOneWithoutToken_networkNestedInput = {
    create?: XOR<networkCreateWithoutToken_networkInput, networkUncheckedCreateWithoutToken_networkInput>
    connectOrCreate?: networkCreateOrConnectWithoutToken_networkInput
    upsert?: networkUpsertWithoutToken_networkInput
    disconnect?: networkWhereInput | boolean
    delete?: networkWhereInput | boolean
    connect?: networkWhereUniqueInput
    update?: XOR<XOR<networkUpdateToOneWithWhereWithoutToken_networkInput, networkUpdateWithoutToken_networkInput>, networkUncheckedUpdateWithoutToken_networkInput>
  }

  export type tokenUpdateOneWithoutToken_networkNestedInput = {
    create?: XOR<tokenCreateWithoutToken_networkInput, tokenUncheckedCreateWithoutToken_networkInput>
    connectOrCreate?: tokenCreateOrConnectWithoutToken_networkInput
    upsert?: tokenUpsertWithoutToken_networkInput
    disconnect?: tokenWhereInput | boolean
    delete?: tokenWhereInput | boolean
    connect?: tokenWhereUniqueInput
    update?: XOR<XOR<tokenUpdateToOneWithWhereWithoutToken_networkInput, tokenUpdateWithoutToken_networkInput>, tokenUncheckedUpdateWithoutToken_networkInput>
  }

  export type user_network_tokenUpdateManyWithoutToken_networkNestedInput = {
    create?: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput> | user_network_tokenCreateWithoutToken_networkInput[] | user_network_tokenUncheckedCreateWithoutToken_networkInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutToken_networkInput | user_network_tokenCreateOrConnectWithoutToken_networkInput[]
    upsert?: user_network_tokenUpsertWithWhereUniqueWithoutToken_networkInput | user_network_tokenUpsertWithWhereUniqueWithoutToken_networkInput[]
    createMany?: user_network_tokenCreateManyToken_networkInputEnvelope
    set?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    disconnect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    delete?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    update?: user_network_tokenUpdateWithWhereUniqueWithoutToken_networkInput | user_network_tokenUpdateWithWhereUniqueWithoutToken_networkInput[]
    updateMany?: user_network_tokenUpdateManyWithWhereWithoutToken_networkInput | user_network_tokenUpdateManyWithWhereWithoutToken_networkInput[]
    deleteMany?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
  }

  export type user_network_tokenUncheckedUpdateManyWithoutToken_networkNestedInput = {
    create?: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput> | user_network_tokenCreateWithoutToken_networkInput[] | user_network_tokenUncheckedCreateWithoutToken_networkInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutToken_networkInput | user_network_tokenCreateOrConnectWithoutToken_networkInput[]
    upsert?: user_network_tokenUpsertWithWhereUniqueWithoutToken_networkInput | user_network_tokenUpsertWithWhereUniqueWithoutToken_networkInput[]
    createMany?: user_network_tokenCreateManyToken_networkInputEnvelope
    set?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    disconnect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    delete?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    update?: user_network_tokenUpdateWithWhereUniqueWithoutToken_networkInput | user_network_tokenUpdateWithWhereUniqueWithoutToken_networkInput[]
    updateMany?: user_network_tokenUpdateManyWithWhereWithoutToken_networkInput | user_network_tokenUpdateManyWithWhereWithoutToken_networkInput[]
    deleteMany?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
  }

  export type networkCreateNestedOneWithoutTransactionInput = {
    create?: XOR<networkCreateWithoutTransactionInput, networkUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: networkCreateOrConnectWithoutTransactionInput
    connect?: networkWhereUniqueInput
  }

  export type tokenCreateNestedOneWithoutTransactionInput = {
    create?: XOR<tokenCreateWithoutTransactionInput, tokenUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: tokenCreateOrConnectWithoutTransactionInput
    connect?: tokenWhereUniqueInput
  }

  export type NullableEnumetransactionstatusFieldUpdateOperationsInput = {
    set?: $Enums.etransactionstatus | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type networkUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<networkCreateWithoutTransactionInput, networkUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: networkCreateOrConnectWithoutTransactionInput
    upsert?: networkUpsertWithoutTransactionInput
    disconnect?: networkWhereInput | boolean
    delete?: networkWhereInput | boolean
    connect?: networkWhereUniqueInput
    update?: XOR<XOR<networkUpdateToOneWithWhereWithoutTransactionInput, networkUpdateWithoutTransactionInput>, networkUncheckedUpdateWithoutTransactionInput>
  }

  export type tokenUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<tokenCreateWithoutTransactionInput, tokenUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: tokenCreateOrConnectWithoutTransactionInput
    upsert?: tokenUpsertWithoutTransactionInput
    disconnect?: tokenWhereInput | boolean
    delete?: tokenWhereInput | boolean
    connect?: tokenWhereUniqueInput
    update?: XOR<XOR<tokenUpdateToOneWithWhereWithoutTransactionInput, tokenUpdateWithoutTransactionInput>, tokenUncheckedUpdateWithoutTransactionInput>
  }

  export type userCreatepush_notification_tokensInput = {
    set: string[]
  }

  export type user_secretCreateNestedOneWithoutUser_user_secretidTouser_secretInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedCreateWithoutUser_user_secretidTouser_secretInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secretidTouser_secretInput
    connect?: user_secretWhereUniqueInput
  }

  export type user_network_tokenCreateNestedManyWithoutUserInput = {
    create?: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput> | user_network_tokenCreateWithoutUserInput[] | user_network_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutUserInput | user_network_tokenCreateOrConnectWithoutUserInput[]
    createMany?: user_network_tokenCreateManyUserInputEnvelope
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
  }

  export type user_networks_networkCreateNestedManyWithoutUserInput = {
    create?: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput> | user_networks_networkCreateWithoutUserInput[] | user_networks_networkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutUserInput | user_networks_networkCreateOrConnectWithoutUserInput[]
    createMany?: user_networks_networkCreateManyUserInputEnvelope
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
  }

  export type user_secretCreateNestedOneWithoutUser_user_secret_useridTouserInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secret_useridTouserInput
    connect?: user_secretWhereUniqueInput
  }

  export type user_network_tokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput> | user_network_tokenCreateWithoutUserInput[] | user_network_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutUserInput | user_network_tokenCreateOrConnectWithoutUserInput[]
    createMany?: user_network_tokenCreateManyUserInputEnvelope
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
  }

  export type user_networks_networkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput> | user_networks_networkCreateWithoutUserInput[] | user_networks_networkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutUserInput | user_networks_networkCreateOrConnectWithoutUserInput[]
    createMany?: user_networks_networkCreateManyUserInputEnvelope
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
  }

  export type user_secretUncheckedCreateNestedOneWithoutUser_user_secret_useridTouserInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secret_useridTouserInput
    connect?: user_secretWhereUniqueInput
  }

  export type userUpdatepush_notification_tokensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type user_secretUpdateOneWithoutUser_user_secretidTouser_secretNestedInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedCreateWithoutUser_user_secretidTouser_secretInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secretidTouser_secretInput
    upsert?: user_secretUpsertWithoutUser_user_secretidTouser_secretInput
    disconnect?: user_secretWhereInput | boolean
    delete?: user_secretWhereInput | boolean
    connect?: user_secretWhereUniqueInput
    update?: XOR<XOR<user_secretUpdateToOneWithWhereWithoutUser_user_secretidTouser_secretInput, user_secretUpdateWithoutUser_user_secretidTouser_secretInput>, user_secretUncheckedUpdateWithoutUser_user_secretidTouser_secretInput>
  }

  export type user_network_tokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput> | user_network_tokenCreateWithoutUserInput[] | user_network_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutUserInput | user_network_tokenCreateOrConnectWithoutUserInput[]
    upsert?: user_network_tokenUpsertWithWhereUniqueWithoutUserInput | user_network_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_network_tokenCreateManyUserInputEnvelope
    set?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    disconnect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    delete?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    update?: user_network_tokenUpdateWithWhereUniqueWithoutUserInput | user_network_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_network_tokenUpdateManyWithWhereWithoutUserInput | user_network_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
  }

  export type user_networks_networkUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput> | user_networks_networkCreateWithoutUserInput[] | user_networks_networkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutUserInput | user_networks_networkCreateOrConnectWithoutUserInput[]
    upsert?: user_networks_networkUpsertWithWhereUniqueWithoutUserInput | user_networks_networkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_networks_networkCreateManyUserInputEnvelope
    set?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    disconnect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    delete?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    update?: user_networks_networkUpdateWithWhereUniqueWithoutUserInput | user_networks_networkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_networks_networkUpdateManyWithWhereWithoutUserInput | user_networks_networkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
  }

  export type user_secretUpdateOneWithoutUser_user_secret_useridTouserNestedInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secret_useridTouserInput
    upsert?: user_secretUpsertWithoutUser_user_secret_useridTouserInput
    disconnect?: user_secretWhereInput | boolean
    delete?: user_secretWhereInput | boolean
    connect?: user_secretWhereUniqueInput
    update?: XOR<XOR<user_secretUpdateToOneWithWhereWithoutUser_user_secret_useridTouserInput, user_secretUpdateWithoutUser_user_secret_useridTouserInput>, user_secretUncheckedUpdateWithoutUser_user_secret_useridTouserInput>
  }

  export type user_network_tokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput> | user_network_tokenCreateWithoutUserInput[] | user_network_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_network_tokenCreateOrConnectWithoutUserInput | user_network_tokenCreateOrConnectWithoutUserInput[]
    upsert?: user_network_tokenUpsertWithWhereUniqueWithoutUserInput | user_network_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_network_tokenCreateManyUserInputEnvelope
    set?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    disconnect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    delete?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    connect?: user_network_tokenWhereUniqueInput | user_network_tokenWhereUniqueInput[]
    update?: user_network_tokenUpdateWithWhereUniqueWithoutUserInput | user_network_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_network_tokenUpdateManyWithWhereWithoutUserInput | user_network_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
  }

  export type user_networks_networkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput> | user_networks_networkCreateWithoutUserInput[] | user_networks_networkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_networks_networkCreateOrConnectWithoutUserInput | user_networks_networkCreateOrConnectWithoutUserInput[]
    upsert?: user_networks_networkUpsertWithWhereUniqueWithoutUserInput | user_networks_networkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_networks_networkCreateManyUserInputEnvelope
    set?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    disconnect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    delete?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    connect?: user_networks_networkWhereUniqueInput | user_networks_networkWhereUniqueInput[]
    update?: user_networks_networkUpdateWithWhereUniqueWithoutUserInput | user_networks_networkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_networks_networkUpdateManyWithWhereWithoutUserInput | user_networks_networkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
  }

  export type user_secretUncheckedUpdateOneWithoutUser_user_secret_useridTouserNestedInput = {
    create?: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
    connectOrCreate?: user_secretCreateOrConnectWithoutUser_user_secret_useridTouserInput
    upsert?: user_secretUpsertWithoutUser_user_secret_useridTouserInput
    disconnect?: user_secretWhereInput | boolean
    delete?: user_secretWhereInput | boolean
    connect?: user_secretWhereUniqueInput
    update?: XOR<XOR<user_secretUpdateToOneWithWhereWithoutUser_user_secret_useridTouserInput, user_secretUpdateWithoutUser_user_secret_useridTouserInput>, user_secretUncheckedUpdateWithoutUser_user_secret_useridTouserInput>
  }

  export type token_networkCreateNestedOneWithoutUser_network_tokenInput = {
    create?: XOR<token_networkCreateWithoutUser_network_tokenInput, token_networkUncheckedCreateWithoutUser_network_tokenInput>
    connectOrCreate?: token_networkCreateOrConnectWithoutUser_network_tokenInput
    connect?: token_networkWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_network_tokenInput = {
    create?: XOR<userCreateWithoutUser_network_tokenInput, userUncheckedCreateWithoutUser_network_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_network_tokenInput
    connect?: userWhereUniqueInput
  }

  export type token_networkUpdateOneRequiredWithoutUser_network_tokenNestedInput = {
    create?: XOR<token_networkCreateWithoutUser_network_tokenInput, token_networkUncheckedCreateWithoutUser_network_tokenInput>
    connectOrCreate?: token_networkCreateOrConnectWithoutUser_network_tokenInput
    upsert?: token_networkUpsertWithoutUser_network_tokenInput
    connect?: token_networkWhereUniqueInput
    update?: XOR<XOR<token_networkUpdateToOneWithWhereWithoutUser_network_tokenInput, token_networkUpdateWithoutUser_network_tokenInput>, token_networkUncheckedUpdateWithoutUser_network_tokenInput>
  }

  export type userUpdateOneRequiredWithoutUser_network_tokenNestedInput = {
    create?: XOR<userCreateWithoutUser_network_tokenInput, userUncheckedCreateWithoutUser_network_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_network_tokenInput
    upsert?: userUpsertWithoutUser_network_tokenInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_network_tokenInput, userUpdateWithoutUser_network_tokenInput>, userUncheckedUpdateWithoutUser_network_tokenInput>
  }

  export type networkCreateNestedOneWithoutUser_networks_networkInput = {
    create?: XOR<networkCreateWithoutUser_networks_networkInput, networkUncheckedCreateWithoutUser_networks_networkInput>
    connectOrCreate?: networkCreateOrConnectWithoutUser_networks_networkInput
    connect?: networkWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_networks_networkInput = {
    create?: XOR<userCreateWithoutUser_networks_networkInput, userUncheckedCreateWithoutUser_networks_networkInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_networks_networkInput
    connect?: userWhereUniqueInput
  }

  export type networkUpdateOneRequiredWithoutUser_networks_networkNestedInput = {
    create?: XOR<networkCreateWithoutUser_networks_networkInput, networkUncheckedCreateWithoutUser_networks_networkInput>
    connectOrCreate?: networkCreateOrConnectWithoutUser_networks_networkInput
    upsert?: networkUpsertWithoutUser_networks_networkInput
    connect?: networkWhereUniqueInput
    update?: XOR<XOR<networkUpdateToOneWithWhereWithoutUser_networks_networkInput, networkUpdateWithoutUser_networks_networkInput>, networkUncheckedUpdateWithoutUser_networks_networkInput>
  }

  export type userUpdateOneRequiredWithoutUser_networks_networkNestedInput = {
    create?: XOR<userCreateWithoutUser_networks_networkInput, userUncheckedCreateWithoutUser_networks_networkInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_networks_networkInput
    upsert?: userUpsertWithoutUser_networks_networkInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_networks_networkInput, userUpdateWithoutUser_networks_networkInput>, userUncheckedUpdateWithoutUser_networks_networkInput>
  }

  export type userCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput> | userCreateWithoutUser_secret_user_secretidTouser_secretInput[] | userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput | userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput[]
    createMany?: userCreateManyUser_secret_user_secretidTouser_secretInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutUser_secret_user_secret_useridTouserInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedCreateWithoutUser_secret_user_secret_useridTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secret_useridTouserInput
    connect?: userWhereUniqueInput
  }

  export type userUncheckedCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput> | userCreateWithoutUser_secret_user_secretidTouser_secretInput[] | userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput | userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput[]
    createMany?: userCreateManyUser_secret_user_secretidTouser_secretInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput> | userCreateWithoutUser_secret_user_secretidTouser_secretInput[] | userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput | userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput[]
    upsert?: userUpsertWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput | userUpsertWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput[]
    createMany?: userCreateManyUser_secret_user_secretidTouser_secretInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput | userUpdateWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput[]
    updateMany?: userUpdateManyWithWhereWithoutUser_secret_user_secretidTouser_secretInput | userUpdateManyWithWhereWithoutUser_secret_user_secretidTouser_secretInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUpdateOneWithoutUser_secret_user_secret_useridTouserNestedInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedCreateWithoutUser_secret_user_secret_useridTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secret_useridTouserInput
    upsert?: userUpsertWithoutUser_secret_user_secret_useridTouserInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_secret_user_secret_useridTouserInput, userUpdateWithoutUser_secret_user_secret_useridTouserInput>, userUncheckedUpdateWithoutUser_secret_user_secret_useridTouserInput>
  }

  export type userUncheckedUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput = {
    create?: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput> | userCreateWithoutUser_secret_user_secretidTouser_secretInput[] | userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput | userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput[]
    upsert?: userUpsertWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput | userUpsertWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput[]
    createMany?: userCreateManyUser_secret_user_secretidTouser_secretInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput | userUpdateWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput[]
    updateMany?: userUpdateManyWithWhereWithoutUser_secret_user_secretidTouser_secretInput | userUpdateManyWithWhereWithoutUser_secret_user_secretidTouser_secretInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumetransactionstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.etransactionstatus | EnumetransactionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumetransactionstatusNullableFilter<$PrismaModel> | $Enums.etransactionstatus | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumetransactionstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.etransactionstatus | EnumetransactionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.etransactionstatus[] | ListEnumetransactionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumetransactionstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.etransactionstatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumetransactionstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumetransactionstatusNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type network_swapCreateWithoutNetworkInput = {
    id?: string
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type network_swapUncheckedCreateWithoutNetworkInput = {
    id?: string
    swap_contract_address: string
    factory_contract_address: string
    quote_contract_address: string
    wrapped_token_address: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type network_swapCreateOrConnectWithoutNetworkInput = {
    where: network_swapWhereUniqueInput
    create: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
  }

  export type token_networkCreateWithoutNetworkInput = {
    token_network_id?: string
    contract_address: string
    token?: tokenCreateNestedOneWithoutToken_networkInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkUncheckedCreateWithoutNetworkInput = {
    token_network_id?: string
    contract_address: string
    token_id?: string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkCreateOrConnectWithoutNetworkInput = {
    where: token_networkWhereUniqueInput
    create: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput>
  }

  export type token_networkCreateManyNetworkInputEnvelope = {
    data: token_networkCreateManyNetworkInput | token_networkCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutNetworkInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    amount: number
    created_at?: Date | string | null
    token?: tokenCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutNetworkInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    token_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type transactionCreateOrConnectWithoutNetworkInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput>
  }

  export type transactionCreateManyNetworkInputEnvelope = {
    data: transactionCreateManyNetworkInput | transactionCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type user_networks_networkCreateWithoutNetworkInput = {
    user: userCreateNestedOneWithoutUser_networks_networkInput
  }

  export type user_networks_networkUncheckedCreateWithoutNetworkInput = {
    userid: string
  }

  export type user_networks_networkCreateOrConnectWithoutNetworkInput = {
    where: user_networks_networkWhereUniqueInput
    create: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput>
  }

  export type user_networks_networkCreateManyNetworkInputEnvelope = {
    data: user_networks_networkCreateManyNetworkInput | user_networks_networkCreateManyNetworkInput[]
    skipDuplicates?: boolean
  }

  export type network_swapUpsertWithoutNetworkInput = {
    update: XOR<network_swapUpdateWithoutNetworkInput, network_swapUncheckedUpdateWithoutNetworkInput>
    create: XOR<network_swapCreateWithoutNetworkInput, network_swapUncheckedCreateWithoutNetworkInput>
    where?: network_swapWhereInput
  }

  export type network_swapUpdateToOneWithWhereWithoutNetworkInput = {
    where?: network_swapWhereInput
    data: XOR<network_swapUpdateWithoutNetworkInput, network_swapUncheckedUpdateWithoutNetworkInput>
  }

  export type network_swapUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type network_swapUncheckedUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    swap_contract_address?: StringFieldUpdateOperationsInput | string
    factory_contract_address?: StringFieldUpdateOperationsInput | string
    quote_contract_address?: StringFieldUpdateOperationsInput | string
    wrapped_token_address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type token_networkUpsertWithWhereUniqueWithoutNetworkInput = {
    where: token_networkWhereUniqueInput
    update: XOR<token_networkUpdateWithoutNetworkInput, token_networkUncheckedUpdateWithoutNetworkInput>
    create: XOR<token_networkCreateWithoutNetworkInput, token_networkUncheckedCreateWithoutNetworkInput>
  }

  export type token_networkUpdateWithWhereUniqueWithoutNetworkInput = {
    where: token_networkWhereUniqueInput
    data: XOR<token_networkUpdateWithoutNetworkInput, token_networkUncheckedUpdateWithoutNetworkInput>
  }

  export type token_networkUpdateManyWithWhereWithoutNetworkInput = {
    where: token_networkScalarWhereInput
    data: XOR<token_networkUpdateManyMutationInput, token_networkUncheckedUpdateManyWithoutNetworkInput>
  }

  export type token_networkScalarWhereInput = {
    AND?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
    OR?: token_networkScalarWhereInput[]
    NOT?: token_networkScalarWhereInput | token_networkScalarWhereInput[]
    token_network_id?: UuidFilter<"token_network"> | string
    contract_address?: StringFilter<"token_network"> | string
    token_id?: UuidNullableFilter<"token_network"> | string | null
    network_id?: UuidNullableFilter<"token_network"> | string | null
  }

  export type transactionUpsertWithWhereUniqueWithoutNetworkInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutNetworkInput, transactionUncheckedUpdateWithoutNetworkInput>
    create: XOR<transactionCreateWithoutNetworkInput, transactionUncheckedCreateWithoutNetworkInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutNetworkInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutNetworkInput, transactionUncheckedUpdateWithoutNetworkInput>
  }

  export type transactionUpdateManyWithWhereWithoutNetworkInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutNetworkInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: UuidFilter<"transaction"> | string
    transaction_status?: EnumetransactionstatusNullableFilter<"transaction"> | $Enums.etransactionstatus | null
    transaction_gas?: FloatNullableFilter<"transaction"> | number | null
    transaction_hash?: StringNullableFilter<"transaction"> | string | null
    block_hash?: StringNullableFilter<"transaction"> | string | null
    block_number?: IntNullableFilter<"transaction"> | number | null
    from_address?: StringFilter<"transaction"> | string
    to_address?: StringFilter<"transaction"> | string
    token_contract_address?: StringNullableFilter<"transaction"> | string | null
    max_priority_fee_per_gas?: FloatNullableFilter<"transaction"> | number | null
    base_fee?: FloatNullableFilter<"transaction"> | number | null
    token_id?: UuidNullableFilter<"transaction"> | string | null
    network_id?: UuidNullableFilter<"transaction"> | string | null
    amount?: FloatFilter<"transaction"> | number
    created_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
  }

  export type user_networks_networkUpsertWithWhereUniqueWithoutNetworkInput = {
    where: user_networks_networkWhereUniqueInput
    update: XOR<user_networks_networkUpdateWithoutNetworkInput, user_networks_networkUncheckedUpdateWithoutNetworkInput>
    create: XOR<user_networks_networkCreateWithoutNetworkInput, user_networks_networkUncheckedCreateWithoutNetworkInput>
  }

  export type user_networks_networkUpdateWithWhereUniqueWithoutNetworkInput = {
    where: user_networks_networkWhereUniqueInput
    data: XOR<user_networks_networkUpdateWithoutNetworkInput, user_networks_networkUncheckedUpdateWithoutNetworkInput>
  }

  export type user_networks_networkUpdateManyWithWhereWithoutNetworkInput = {
    where: user_networks_networkScalarWhereInput
    data: XOR<user_networks_networkUpdateManyMutationInput, user_networks_networkUncheckedUpdateManyWithoutNetworkInput>
  }

  export type user_networks_networkScalarWhereInput = {
    AND?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
    OR?: user_networks_networkScalarWhereInput[]
    NOT?: user_networks_networkScalarWhereInput | user_networks_networkScalarWhereInput[]
    userid?: UuidFilter<"user_networks_network"> | string
    networkid?: UuidFilter<"user_networks_network"> | string
  }

  export type networkCreateWithoutNetwork_swapInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    token_network?: token_networkCreateNestedManyWithoutNetworkInput
    transaction?: transactionCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateWithoutNetwork_swapInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    token_network?: token_networkUncheckedCreateNestedManyWithoutNetworkInput
    transaction?: transactionUncheckedCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkCreateOrConnectWithoutNetwork_swapInput = {
    where: networkWhereUniqueInput
    create: XOR<networkCreateWithoutNetwork_swapInput, networkUncheckedCreateWithoutNetwork_swapInput>
  }

  export type networkUpsertWithoutNetwork_swapInput = {
    update: XOR<networkUpdateWithoutNetwork_swapInput, networkUncheckedUpdateWithoutNetwork_swapInput>
    create: XOR<networkCreateWithoutNetwork_swapInput, networkUncheckedCreateWithoutNetwork_swapInput>
    where?: networkWhereInput
  }

  export type networkUpdateToOneWithWhereWithoutNetwork_swapInput = {
    where?: networkWhereInput
    data: XOR<networkUpdateWithoutNetwork_swapInput, networkUncheckedUpdateWithoutNetwork_swapInput>
  }

  export type networkUpdateWithoutNetwork_swapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateWithoutNetwork_swapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUncheckedUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type token_networkCreateWithoutTokenInput = {
    token_network_id?: string
    contract_address: string
    network?: networkCreateNestedOneWithoutToken_networkInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkUncheckedCreateWithoutTokenInput = {
    token_network_id?: string
    contract_address: string
    network_id?: string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutToken_networkInput
  }

  export type token_networkCreateOrConnectWithoutTokenInput = {
    where: token_networkWhereUniqueInput
    create: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput>
  }

  export type token_networkCreateManyTokenInputEnvelope = {
    data: token_networkCreateManyTokenInput | token_networkCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutTokenInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    amount: number
    created_at?: Date | string | null
    network?: networkCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTokenInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    network_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type transactionCreateOrConnectWithoutTokenInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput>
  }

  export type transactionCreateManyTokenInputEnvelope = {
    data: transactionCreateManyTokenInput | transactionCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type token_networkUpsertWithWhereUniqueWithoutTokenInput = {
    where: token_networkWhereUniqueInput
    update: XOR<token_networkUpdateWithoutTokenInput, token_networkUncheckedUpdateWithoutTokenInput>
    create: XOR<token_networkCreateWithoutTokenInput, token_networkUncheckedCreateWithoutTokenInput>
  }

  export type token_networkUpdateWithWhereUniqueWithoutTokenInput = {
    where: token_networkWhereUniqueInput
    data: XOR<token_networkUpdateWithoutTokenInput, token_networkUncheckedUpdateWithoutTokenInput>
  }

  export type token_networkUpdateManyWithWhereWithoutTokenInput = {
    where: token_networkScalarWhereInput
    data: XOR<token_networkUpdateManyMutationInput, token_networkUncheckedUpdateManyWithoutTokenInput>
  }

  export type transactionUpsertWithWhereUniqueWithoutTokenInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutTokenInput, transactionUncheckedUpdateWithoutTokenInput>
    create: XOR<transactionCreateWithoutTokenInput, transactionUncheckedCreateWithoutTokenInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutTokenInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutTokenInput, transactionUncheckedUpdateWithoutTokenInput>
  }

  export type transactionUpdateManyWithWhereWithoutTokenInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutTokenInput>
  }

  export type networkCreateWithoutToken_networkInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapCreateNestedOneWithoutNetworkInput
    transaction?: transactionCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateWithoutToken_networkInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapUncheckedCreateNestedOneWithoutNetworkInput
    transaction?: transactionUncheckedCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkCreateOrConnectWithoutToken_networkInput = {
    where: networkWhereUniqueInput
    create: XOR<networkCreateWithoutToken_networkInput, networkUncheckedCreateWithoutToken_networkInput>
  }

  export type tokenCreateWithoutToken_networkInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaction?: transactionCreateNestedManyWithoutTokenInput
  }

  export type tokenUncheckedCreateWithoutToken_networkInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    transaction?: transactionUncheckedCreateNestedManyWithoutTokenInput
  }

  export type tokenCreateOrConnectWithoutToken_networkInput = {
    where: tokenWhereUniqueInput
    create: XOR<tokenCreateWithoutToken_networkInput, tokenUncheckedCreateWithoutToken_networkInput>
  }

  export type user_network_tokenCreateWithoutToken_networkInput = {
    user_network_token_id?: string
    user: userCreateNestedOneWithoutUser_network_tokenInput
  }

  export type user_network_tokenUncheckedCreateWithoutToken_networkInput = {
    user_network_token_id?: string
    userid: string
  }

  export type user_network_tokenCreateOrConnectWithoutToken_networkInput = {
    where: user_network_tokenWhereUniqueInput
    create: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput>
  }

  export type user_network_tokenCreateManyToken_networkInputEnvelope = {
    data: user_network_tokenCreateManyToken_networkInput | user_network_tokenCreateManyToken_networkInput[]
    skipDuplicates?: boolean
  }

  export type networkUpsertWithoutToken_networkInput = {
    update: XOR<networkUpdateWithoutToken_networkInput, networkUncheckedUpdateWithoutToken_networkInput>
    create: XOR<networkCreateWithoutToken_networkInput, networkUncheckedCreateWithoutToken_networkInput>
    where?: networkWhereInput
  }

  export type networkUpdateToOneWithWhereWithoutToken_networkInput = {
    where?: networkWhereInput
    data: XOR<networkUpdateWithoutToken_networkInput, networkUncheckedUpdateWithoutToken_networkInput>
  }

  export type networkUpdateWithoutToken_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUpdateOneWithoutNetworkNestedInput
    transaction?: transactionUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateWithoutToken_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUncheckedUpdateOneWithoutNetworkNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type tokenUpsertWithoutToken_networkInput = {
    update: XOR<tokenUpdateWithoutToken_networkInput, tokenUncheckedUpdateWithoutToken_networkInput>
    create: XOR<tokenCreateWithoutToken_networkInput, tokenUncheckedCreateWithoutToken_networkInput>
    where?: tokenWhereInput
  }

  export type tokenUpdateToOneWithWhereWithoutToken_networkInput = {
    where?: tokenWhereInput
    data: XOR<tokenUpdateWithoutToken_networkInput, tokenUncheckedUpdateWithoutToken_networkInput>
  }

  export type tokenUpdateWithoutToken_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUpdateManyWithoutTokenNestedInput
  }

  export type tokenUncheckedUpdateWithoutToken_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type user_network_tokenUpsertWithWhereUniqueWithoutToken_networkInput = {
    where: user_network_tokenWhereUniqueInput
    update: XOR<user_network_tokenUpdateWithoutToken_networkInput, user_network_tokenUncheckedUpdateWithoutToken_networkInput>
    create: XOR<user_network_tokenCreateWithoutToken_networkInput, user_network_tokenUncheckedCreateWithoutToken_networkInput>
  }

  export type user_network_tokenUpdateWithWhereUniqueWithoutToken_networkInput = {
    where: user_network_tokenWhereUniqueInput
    data: XOR<user_network_tokenUpdateWithoutToken_networkInput, user_network_tokenUncheckedUpdateWithoutToken_networkInput>
  }

  export type user_network_tokenUpdateManyWithWhereWithoutToken_networkInput = {
    where: user_network_tokenScalarWhereInput
    data: XOR<user_network_tokenUpdateManyMutationInput, user_network_tokenUncheckedUpdateManyWithoutToken_networkInput>
  }

  export type user_network_tokenScalarWhereInput = {
    AND?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
    OR?: user_network_tokenScalarWhereInput[]
    NOT?: user_network_tokenScalarWhereInput | user_network_tokenScalarWhereInput[]
    user_network_token_id?: UuidFilter<"user_network_token"> | string
    userid?: UuidFilter<"user_network_token"> | string
    tokennetworkid?: UuidFilter<"user_network_token"> | string
  }

  export type networkCreateWithoutTransactionInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapCreateNestedOneWithoutNetworkInput
    token_network?: token_networkCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapUncheckedCreateNestedOneWithoutNetworkInput
    token_network?: token_networkUncheckedCreateNestedManyWithoutNetworkInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkCreateOrConnectWithoutTransactionInput = {
    where: networkWhereUniqueInput
    create: XOR<networkCreateWithoutTransactionInput, networkUncheckedCreateWithoutTransactionInput>
  }

  export type tokenCreateWithoutTransactionInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    token_network?: token_networkCreateNestedManyWithoutTokenInput
  }

  export type tokenUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    symbol: string
    decimal: number
    thumbnail?: string | null
    price_feed_id?: string | null
    hz_percent_change?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    token_network?: token_networkUncheckedCreateNestedManyWithoutTokenInput
  }

  export type tokenCreateOrConnectWithoutTransactionInput = {
    where: tokenWhereUniqueInput
    create: XOR<tokenCreateWithoutTransactionInput, tokenUncheckedCreateWithoutTransactionInput>
  }

  export type networkUpsertWithoutTransactionInput = {
    update: XOR<networkUpdateWithoutTransactionInput, networkUncheckedUpdateWithoutTransactionInput>
    create: XOR<networkCreateWithoutTransactionInput, networkUncheckedCreateWithoutTransactionInput>
    where?: networkWhereInput
  }

  export type networkUpdateToOneWithWhereWithoutTransactionInput = {
    where?: networkWhereInput
    data: XOR<networkUpdateWithoutTransactionInput, networkUncheckedUpdateWithoutTransactionInput>
  }

  export type networkUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUncheckedUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUncheckedUpdateManyWithoutNetworkNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type tokenUpsertWithoutTransactionInput = {
    update: XOR<tokenUpdateWithoutTransactionInput, tokenUncheckedUpdateWithoutTransactionInput>
    create: XOR<tokenCreateWithoutTransactionInput, tokenUncheckedCreateWithoutTransactionInput>
    where?: tokenWhereInput
  }

  export type tokenUpdateToOneWithWhereWithoutTransactionInput = {
    where?: tokenWhereInput
    data: XOR<tokenUpdateWithoutTransactionInput, tokenUncheckedUpdateWithoutTransactionInput>
  }

  export type tokenUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUpdateManyWithoutTokenNestedInput
  }

  export type tokenUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    decimal?: IntFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    hz_percent_change?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token_network?: token_networkUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type user_secretCreateWithoutUser_user_secretidTouser_secretInput = {
    id?: string
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
    user_user_secret_useridTouser?: userCreateNestedOneWithoutUser_secret_user_secret_useridTouserInput
  }

  export type user_secretUncheckedCreateWithoutUser_user_secretidTouser_secretInput = {
    id?: string
    userid?: string | null
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
  }

  export type user_secretCreateOrConnectWithoutUser_user_secretidTouser_secretInput = {
    where: user_secretWhereUniqueInput
    create: XOR<user_secretCreateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedCreateWithoutUser_user_secretidTouser_secretInput>
  }

  export type user_network_tokenCreateWithoutUserInput = {
    user_network_token_id?: string
    token_network: token_networkCreateNestedOneWithoutUser_network_tokenInput
  }

  export type user_network_tokenUncheckedCreateWithoutUserInput = {
    user_network_token_id?: string
    tokennetworkid: string
  }

  export type user_network_tokenCreateOrConnectWithoutUserInput = {
    where: user_network_tokenWhereUniqueInput
    create: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput>
  }

  export type user_network_tokenCreateManyUserInputEnvelope = {
    data: user_network_tokenCreateManyUserInput | user_network_tokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_networks_networkCreateWithoutUserInput = {
    network: networkCreateNestedOneWithoutUser_networks_networkInput
  }

  export type user_networks_networkUncheckedCreateWithoutUserInput = {
    networkid: string
  }

  export type user_networks_networkCreateOrConnectWithoutUserInput = {
    where: user_networks_networkWhereUniqueInput
    create: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput>
  }

  export type user_networks_networkCreateManyUserInputEnvelope = {
    data: user_networks_networkCreateManyUserInput | user_networks_networkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_secretCreateWithoutUser_user_secret_useridTouserInput = {
    id?: string
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
    user_user_secretidTouser_secret?: userCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput
  }

  export type user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput = {
    id?: string
    private_key: string
    public_key: string
    mnemonic: string
    biometric_public_key?: string | null
    created_at?: Date | string | null
    user_user_secretidTouser_secret?: userUncheckedCreateNestedManyWithoutUser_secret_user_secretidTouser_secretInput
  }

  export type user_secretCreateOrConnectWithoutUser_user_secret_useridTouserInput = {
    where: user_secretWhereUniqueInput
    create: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
  }

  export type user_secretUpsertWithoutUser_user_secretidTouser_secretInput = {
    update: XOR<user_secretUpdateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedUpdateWithoutUser_user_secretidTouser_secretInput>
    create: XOR<user_secretCreateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedCreateWithoutUser_user_secretidTouser_secretInput>
    where?: user_secretWhereInput
  }

  export type user_secretUpdateToOneWithWhereWithoutUser_user_secretidTouser_secretInput = {
    where?: user_secretWhereInput
    data: XOR<user_secretUpdateWithoutUser_user_secretidTouser_secretInput, user_secretUncheckedUpdateWithoutUser_user_secretidTouser_secretInput>
  }

  export type user_secretUpdateWithoutUser_user_secretidTouser_secretInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_user_secret_useridTouser?: userUpdateOneWithoutUser_secret_user_secret_useridTouserNestedInput
  }

  export type user_secretUncheckedUpdateWithoutUser_user_secretidTouser_secretInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: NullableStringFieldUpdateOperationsInput | string | null
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_network_tokenUpsertWithWhereUniqueWithoutUserInput = {
    where: user_network_tokenWhereUniqueInput
    update: XOR<user_network_tokenUpdateWithoutUserInput, user_network_tokenUncheckedUpdateWithoutUserInput>
    create: XOR<user_network_tokenCreateWithoutUserInput, user_network_tokenUncheckedCreateWithoutUserInput>
  }

  export type user_network_tokenUpdateWithWhereUniqueWithoutUserInput = {
    where: user_network_tokenWhereUniqueInput
    data: XOR<user_network_tokenUpdateWithoutUserInput, user_network_tokenUncheckedUpdateWithoutUserInput>
  }

  export type user_network_tokenUpdateManyWithWhereWithoutUserInput = {
    where: user_network_tokenScalarWhereInput
    data: XOR<user_network_tokenUpdateManyMutationInput, user_network_tokenUncheckedUpdateManyWithoutUserInput>
  }

  export type user_networks_networkUpsertWithWhereUniqueWithoutUserInput = {
    where: user_networks_networkWhereUniqueInput
    update: XOR<user_networks_networkUpdateWithoutUserInput, user_networks_networkUncheckedUpdateWithoutUserInput>
    create: XOR<user_networks_networkCreateWithoutUserInput, user_networks_networkUncheckedCreateWithoutUserInput>
  }

  export type user_networks_networkUpdateWithWhereUniqueWithoutUserInput = {
    where: user_networks_networkWhereUniqueInput
    data: XOR<user_networks_networkUpdateWithoutUserInput, user_networks_networkUncheckedUpdateWithoutUserInput>
  }

  export type user_networks_networkUpdateManyWithWhereWithoutUserInput = {
    where: user_networks_networkScalarWhereInput
    data: XOR<user_networks_networkUpdateManyMutationInput, user_networks_networkUncheckedUpdateManyWithoutUserInput>
  }

  export type user_secretUpsertWithoutUser_user_secret_useridTouserInput = {
    update: XOR<user_secretUpdateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedUpdateWithoutUser_user_secret_useridTouserInput>
    create: XOR<user_secretCreateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedCreateWithoutUser_user_secret_useridTouserInput>
    where?: user_secretWhereInput
  }

  export type user_secretUpdateToOneWithWhereWithoutUser_user_secret_useridTouserInput = {
    where?: user_secretWhereInput
    data: XOR<user_secretUpdateWithoutUser_user_secret_useridTouserInput, user_secretUncheckedUpdateWithoutUser_user_secret_useridTouserInput>
  }

  export type user_secretUpdateWithoutUser_user_secret_useridTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_user_secretidTouser_secret?: userUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput
  }

  export type user_secretUncheckedUpdateWithoutUser_user_secret_useridTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    mnemonic?: StringFieldUpdateOperationsInput | string
    biometric_public_key?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_user_secretidTouser_secret?: userUncheckedUpdateManyWithoutUser_secret_user_secretidTouser_secretNestedInput
  }

  export type token_networkCreateWithoutUser_network_tokenInput = {
    token_network_id?: string
    contract_address: string
    network?: networkCreateNestedOneWithoutToken_networkInput
    token?: tokenCreateNestedOneWithoutToken_networkInput
  }

  export type token_networkUncheckedCreateWithoutUser_network_tokenInput = {
    token_network_id?: string
    contract_address: string
    token_id?: string | null
    network_id?: string | null
  }

  export type token_networkCreateOrConnectWithoutUser_network_tokenInput = {
    where: token_networkWhereUniqueInput
    create: XOR<token_networkCreateWithoutUser_network_tokenInput, token_networkUncheckedCreateWithoutUser_network_tokenInput>
  }

  export type userCreateWithoutUser_network_tokenInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretCreateNestedOneWithoutUser_user_secretidTouser_secretInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userUncheckedCreateWithoutUser_network_tokenInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    secretid?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userCreateOrConnectWithoutUser_network_tokenInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_network_tokenInput, userUncheckedCreateWithoutUser_network_tokenInput>
  }

  export type token_networkUpsertWithoutUser_network_tokenInput = {
    update: XOR<token_networkUpdateWithoutUser_network_tokenInput, token_networkUncheckedUpdateWithoutUser_network_tokenInput>
    create: XOR<token_networkCreateWithoutUser_network_tokenInput, token_networkUncheckedCreateWithoutUser_network_tokenInput>
    where?: token_networkWhereInput
  }

  export type token_networkUpdateToOneWithWhereWithoutUser_network_tokenInput = {
    where?: token_networkWhereInput
    data: XOR<token_networkUpdateWithoutUser_network_tokenInput, token_networkUncheckedUpdateWithoutUser_network_tokenInput>
  }

  export type token_networkUpdateWithoutUser_network_tokenInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    network?: networkUpdateOneWithoutToken_networkNestedInput
    token?: tokenUpdateOneWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateWithoutUser_network_tokenInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithoutUser_network_tokenInput = {
    update: XOR<userUpdateWithoutUser_network_tokenInput, userUncheckedUpdateWithoutUser_network_tokenInput>
    create: XOR<userCreateWithoutUser_network_tokenInput, userUncheckedCreateWithoutUser_network_tokenInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_network_tokenInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_network_tokenInput, userUncheckedUpdateWithoutUser_network_tokenInput>
  }

  export type userUpdateWithoutUser_network_tokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretUpdateOneWithoutUser_user_secretidTouser_secretNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_network_tokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    secretid?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type networkCreateWithoutUser_networks_networkInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapCreateNestedOneWithoutNetworkInput
    token_network?: token_networkCreateNestedManyWithoutNetworkInput
    transaction?: transactionCreateNestedManyWithoutNetworkInput
  }

  export type networkUncheckedCreateWithoutUser_networks_networkInput = {
    id?: string
    name: string
    rpc_url: string
    chain_id: number
    current_symbol: string
    price_feed_id?: string | null
    block_explorer_url?: string | null
    thumbnail?: string | null
    is_default_network?: boolean | null
    is_testnet?: boolean | null
    networkswapid?: string | null
    creatorid?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    network_swap?: network_swapUncheckedCreateNestedOneWithoutNetworkInput
    token_network?: token_networkUncheckedCreateNestedManyWithoutNetworkInput
    transaction?: transactionUncheckedCreateNestedManyWithoutNetworkInput
  }

  export type networkCreateOrConnectWithoutUser_networks_networkInput = {
    where: networkWhereUniqueInput
    create: XOR<networkCreateWithoutUser_networks_networkInput, networkUncheckedCreateWithoutUser_networks_networkInput>
  }

  export type userCreateWithoutUser_networks_networkInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretCreateNestedOneWithoutUser_user_secretidTouser_secretInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userUncheckedCreateWithoutUser_networks_networkInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    secretid?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userCreateOrConnectWithoutUser_networks_networkInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_networks_networkInput, userUncheckedCreateWithoutUser_networks_networkInput>
  }

  export type networkUpsertWithoutUser_networks_networkInput = {
    update: XOR<networkUpdateWithoutUser_networks_networkInput, networkUncheckedUpdateWithoutUser_networks_networkInput>
    create: XOR<networkCreateWithoutUser_networks_networkInput, networkUncheckedCreateWithoutUser_networks_networkInput>
    where?: networkWhereInput
  }

  export type networkUpdateToOneWithWhereWithoutUser_networks_networkInput = {
    where?: networkWhereInput
    data: XOR<networkUpdateWithoutUser_networks_networkInput, networkUncheckedUpdateWithoutUser_networks_networkInput>
  }

  export type networkUpdateWithoutUser_networks_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUpdateManyWithoutNetworkNestedInput
  }

  export type networkUncheckedUpdateWithoutUser_networks_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rpc_url?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    current_symbol?: StringFieldUpdateOperationsInput | string
    price_feed_id?: NullableStringFieldUpdateOperationsInput | string | null
    block_explorer_url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    is_default_network?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_testnet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    networkswapid?: NullableStringFieldUpdateOperationsInput | string | null
    creatorid?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network_swap?: network_swapUncheckedUpdateOneWithoutNetworkNestedInput
    token_network?: token_networkUncheckedUpdateManyWithoutNetworkNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutNetworkNestedInput
  }

  export type userUpsertWithoutUser_networks_networkInput = {
    update: XOR<userUpdateWithoutUser_networks_networkInput, userUncheckedUpdateWithoutUser_networks_networkInput>
    create: XOR<userCreateWithoutUser_networks_networkInput, userUncheckedCreateWithoutUser_networks_networkInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_networks_networkInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_networks_networkInput, userUncheckedUpdateWithoutUser_networks_networkInput>
  }

  export type userUpdateWithoutUser_networks_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretUpdateOneWithoutUser_user_secretidTouser_secretNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_networks_networkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    secretid?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userCreateWithoutUser_secret_user_secretidTouser_secretInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_network_token?: user_network_tokenCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutUserInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedCreateNestedOneWithoutUser_user_secret_useridTouserInput
  }

  export type userCreateOrConnectWithoutUser_secret_user_secretidTouser_secretInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput>
  }

  export type userCreateManyUser_secret_user_secretidTouser_secretInputEnvelope = {
    data: userCreateManyUser_secret_user_secretidTouser_secretInput | userCreateManyUser_secret_user_secretidTouser_secretInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutUser_secret_user_secret_useridTouserInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretCreateNestedOneWithoutUser_user_secretidTouser_secretInput
    user_network_token?: user_network_tokenCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_secret_user_secret_useridTouserInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    secretid?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user_network_token?: user_network_tokenUncheckedCreateNestedManyWithoutUserInput
    user_networks_network?: user_networks_networkUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_secret_user_secret_useridTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedCreateWithoutUser_secret_user_secret_useridTouserInput>
  }

  export type userUpsertWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedUpdateWithoutUser_secret_user_secretidTouser_secretInput>
    create: XOR<userCreateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedCreateWithoutUser_secret_user_secretidTouser_secretInput>
  }

  export type userUpdateWithWhereUniqueWithoutUser_secret_user_secretidTouser_secretInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutUser_secret_user_secretidTouser_secretInput, userUncheckedUpdateWithoutUser_secret_user_secretidTouser_secretInput>
  }

  export type userUpdateManyWithWhereWithoutUser_secret_user_secretidTouser_secretInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUser_secret_user_secretidTouser_secretInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: UuidFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    address?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    secretid?: UuidNullableFilter<"user"> | string | null
    currentselectednetworkid?: UuidNullableFilter<"user"> | string | null
    push_notification_tokens?: StringNullableListFilter<"user">
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type userUpsertWithoutUser_secret_user_secret_useridTouserInput = {
    update: XOR<userUpdateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedUpdateWithoutUser_secret_user_secret_useridTouserInput>
    create: XOR<userCreateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedCreateWithoutUser_secret_user_secret_useridTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_secret_user_secret_useridTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_secret_user_secret_useridTouserInput, userUncheckedUpdateWithoutUser_secret_user_secret_useridTouserInput>
  }

  export type userUpdateWithoutUser_secret_user_secret_useridTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_secret_user_secretidTouser_secret?: user_secretUpdateOneWithoutUser_user_secretidTouser_secretNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_secret_user_secret_useridTouserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    secretid?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type token_networkCreateManyNetworkInput = {
    token_network_id?: string
    contract_address: string
    token_id?: string | null
  }

  export type transactionCreateManyNetworkInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    token_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type user_networks_networkCreateManyNetworkInput = {
    userid: string
  }

  export type token_networkUpdateWithoutNetworkInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token?: tokenUpdateOneWithoutToken_networkNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateWithoutNetworkInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateManyWithoutNetworkInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: tokenUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyWithoutNetworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    token_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_networks_networkUpdateWithoutNetworkInput = {
    user?: userUpdateOneRequiredWithoutUser_networks_networkNestedInput
  }

  export type user_networks_networkUncheckedUpdateWithoutNetworkInput = {
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type user_networks_networkUncheckedUpdateManyWithoutNetworkInput = {
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type token_networkCreateManyTokenInput = {
    token_network_id?: string
    contract_address: string
    network_id?: string | null
  }

  export type transactionCreateManyTokenInput = {
    id?: string
    transaction_status?: $Enums.etransactionstatus | null
    transaction_gas?: number | null
    transaction_hash?: string | null
    block_hash?: string | null
    block_number?: number | null
    from_address: string
    to_address: string
    token_contract_address?: string | null
    max_priority_fee_per_gas?: number | null
    base_fee?: number | null
    network_id?: string | null
    amount: number
    created_at?: Date | string | null
  }

  export type token_networkUpdateWithoutTokenInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    network?: networkUpdateOneWithoutToken_networkNestedInput
    user_network_token?: user_network_tokenUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateWithoutTokenInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutToken_networkNestedInput
  }

  export type token_networkUncheckedUpdateManyWithoutTokenInput = {
    token_network_id?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    network?: networkUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: NullableEnumetransactionstatusFieldUpdateOperationsInput | $Enums.etransactionstatus | null
    transaction_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_hash?: NullableStringFieldUpdateOperationsInput | string | null
    block_number?: NullableIntFieldUpdateOperationsInput | number | null
    from_address?: StringFieldUpdateOperationsInput | string
    to_address?: StringFieldUpdateOperationsInput | string
    token_contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    max_priority_fee_per_gas?: NullableFloatFieldUpdateOperationsInput | number | null
    base_fee?: NullableFloatFieldUpdateOperationsInput | number | null
    network_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_network_tokenCreateManyToken_networkInput = {
    user_network_token_id?: string
    userid: string
  }

  export type user_network_tokenUpdateWithoutToken_networkInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutUser_network_tokenNestedInput
  }

  export type user_network_tokenUncheckedUpdateWithoutToken_networkInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type user_network_tokenUncheckedUpdateManyWithoutToken_networkInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type user_network_tokenCreateManyUserInput = {
    user_network_token_id?: string
    tokennetworkid: string
  }

  export type user_networks_networkCreateManyUserInput = {
    networkid: string
  }

  export type user_network_tokenUpdateWithoutUserInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    token_network?: token_networkUpdateOneRequiredWithoutUser_network_tokenNestedInput
  }

  export type user_network_tokenUncheckedUpdateWithoutUserInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    tokennetworkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_network_tokenUncheckedUpdateManyWithoutUserInput = {
    user_network_token_id?: StringFieldUpdateOperationsInput | string
    tokennetworkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_networks_networkUpdateWithoutUserInput = {
    network?: networkUpdateOneRequiredWithoutUser_networks_networkNestedInput
  }

  export type user_networks_networkUncheckedUpdateWithoutUserInput = {
    networkid?: StringFieldUpdateOperationsInput | string
  }

  export type user_networks_networkUncheckedUpdateManyWithoutUserInput = {
    networkid?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyUser_secret_user_secretidTouser_secretInput = {
    id?: string
    name?: string | null
    email?: string | null
    address: string
    password?: string | null
    avatar?: string | null
    currentselectednetworkid?: string | null
    push_notification_tokens?: userCreatepush_notification_tokensInput | string[]
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type userUpdateWithoutUser_secret_user_secretidTouser_secretInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_network_token?: user_network_tokenUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_secret_user_secretidTouser_secretInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_network_token?: user_network_tokenUncheckedUpdateManyWithoutUserNestedInput
    user_networks_network?: user_networks_networkUncheckedUpdateManyWithoutUserNestedInput
    user_secret_user_secret_useridTouser?: user_secretUncheckedUpdateOneWithoutUser_user_secret_useridTouserNestedInput
  }

  export type userUncheckedUpdateManyWithoutUser_secret_user_secretidTouser_secretInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    currentselectednetworkid?: NullableStringFieldUpdateOperationsInput | string | null
    push_notification_tokens?: userUpdatepush_notification_tokensInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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