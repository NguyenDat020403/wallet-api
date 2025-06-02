
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
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model post_images
 * 
 */
export type post_images = $Result.DefaultSelection<Prisma.$post_imagesPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model post_likes
 * 
 */
export type post_likes = $Result.DefaultSelection<Prisma.$post_likesPayload>
/**
 * Model comment_likes
 * 
 */
export type comment_likes = $Result.DefaultSelection<Prisma.$comment_likesPayload>

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

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_images`: Exposes CRUD operations for the **post_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_images
    * const post_images = await prisma.post_images.findMany()
    * ```
    */
  get post_images(): Prisma.post_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_likes`: Exposes CRUD operations for the **post_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_likes
    * const post_likes = await prisma.post_likes.findMany()
    * ```
    */
  get post_likes(): Prisma.post_likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment_likes`: Exposes CRUD operations for the **comment_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comment_likes
    * const comment_likes = await prisma.comment_likes.findMany()
    * ```
    */
  get comment_likes(): Prisma.comment_likesDelegate<ExtArgs, ClientOptions>;
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
    wallets: 'wallets',
    posts: 'posts',
    post_images: 'post_images',
    comments: 'comments',
    post_likes: 'post_likes',
    comment_likes: 'comment_likes'
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
      modelProps: "audit_logs" | "networks" | "token_networks" | "tokens" | "users" | "wallet_network_tokens" | "wallet_networks" | "wallets" | "posts" | "post_images" | "comments" | "post_likes" | "comment_likes"
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
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      post_images: {
        payload: Prisma.$post_imagesPayload<ExtArgs>
        fields: Prisma.post_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          findFirst: {
            args: Prisma.post_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          findMany: {
            args: Prisma.post_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>[]
          }
          create: {
            args: Prisma.post_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          createMany: {
            args: Prisma.post_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>[]
          }
          delete: {
            args: Prisma.post_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          update: {
            args: Prisma.post_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          deleteMany: {
            args: Prisma.post_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>[]
          }
          upsert: {
            args: Prisma.post_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_imagesPayload>
          }
          aggregate: {
            args: Prisma.Post_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_images>
          }
          groupBy: {
            args: Prisma.post_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Post_imagesCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      post_likes: {
        payload: Prisma.$post_likesPayload<ExtArgs>
        fields: Prisma.post_likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          findFirst: {
            args: Prisma.post_likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          findMany: {
            args: Prisma.post_likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>[]
          }
          create: {
            args: Prisma.post_likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          createMany: {
            args: Prisma.post_likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>[]
          }
          delete: {
            args: Prisma.post_likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          update: {
            args: Prisma.post_likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          deleteMany: {
            args: Prisma.post_likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>[]
          }
          upsert: {
            args: Prisma.post_likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_likesPayload>
          }
          aggregate: {
            args: Prisma.Post_likesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_likes>
          }
          groupBy: {
            args: Prisma.post_likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_likesCountArgs<ExtArgs>
            result: $Utils.Optional<Post_likesCountAggregateOutputType> | number
          }
        }
      }
      comment_likes: {
        payload: Prisma.$comment_likesPayload<ExtArgs>
        fields: Prisma.comment_likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comment_likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comment_likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          findFirst: {
            args: Prisma.comment_likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comment_likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          findMany: {
            args: Prisma.comment_likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          create: {
            args: Prisma.comment_likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          createMany: {
            args: Prisma.comment_likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.comment_likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          delete: {
            args: Prisma.comment_likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          update: {
            args: Prisma.comment_likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          deleteMany: {
            args: Prisma.comment_likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comment_likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.comment_likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>[]
          }
          upsert: {
            args: Prisma.comment_likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comment_likesPayload>
          }
          aggregate: {
            args: Prisma.Comment_likesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment_likes>
          }
          groupBy: {
            args: Prisma.comment_likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Comment_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.comment_likesCountArgs<ExtArgs>
            result: $Utils.Optional<Comment_likesCountAggregateOutputType> | number
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
    posts?: postsOmit
    post_images?: post_imagesOmit
    comments?: commentsOmit
    post_likes?: post_likesOmit
    comment_likes?: comment_likesOmit
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
    comments: number
    posts: number
    post_likes: number
    comment_likes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | UsersCountOutputTypeCountAudit_logsArgs
    networks?: boolean | UsersCountOutputTypeCountNetworksArgs
    wallets?: boolean | UsersCountOutputTypeCountWalletsArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    post_likes?: boolean | UsersCountOutputTypeCountPost_likesArgs
    comment_likes?: boolean | UsersCountOutputTypeCountComment_likesArgs
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
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPost_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_likesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountComment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
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
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
    likes: number
    images: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    images?: boolean | PostsCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_likesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_imagesWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    likes: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | CommentsCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
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
    coingecko_id: string | null
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
    coingecko_id: string | null
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
    coingecko_id: number
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
    coingecko_id?: true
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
    coingecko_id?: true
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
    coingecko_id?: true
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
    coingecko_id: string | null
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
    coingecko_id?: boolean
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
    coingecko_id?: boolean
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
    coingecko_id?: boolean
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
    coingecko_id?: boolean
  }

  export type networksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"network_id" | "network_name" | "symbol" | "thumbnail" | "chain_id" | "block_explorer_url" | "price_feed_id" | "is_default_network" | "is_testnet" | "rpc_url" | "created_at" | "updated_at" | "deleted_at" | "creator_id" | "isEVM" | "coingecko_id", ExtArgs["result"]["networks"]>
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
      coingecko_id: string | null
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
    readonly coingecko_id: FieldRef<"networks", 'String'>
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
    biometricPublicKey: string | null
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
    biometricPublicKey: string | null
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
    biometricPublicKey: number
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
    biometricPublicKey?: true
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
    biometricPublicKey?: true
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
    biometricPublicKey?: true
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
    email: string | null
    password_hash: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    notiToken: string | null
    biometricPublicKey: string | null
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
    biometricPublicKey?: boolean
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    networks?: boolean | users$networksArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    post_likes?: boolean | users$post_likesArgs<ExtArgs>
    comment_likes?: boolean | users$comment_likesArgs<ExtArgs>
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
    biometricPublicKey?: boolean
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
    biometricPublicKey?: boolean
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
    biometricPublicKey?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "avatar" | "bio" | "email" | "password_hash" | "created_at" | "updated_at" | "deleted_at" | "notiToken" | "biometricPublicKey", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | users$audit_logsArgs<ExtArgs>
    networks?: boolean | users$networksArgs<ExtArgs>
    wallets?: boolean | users$walletsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    post_likes?: boolean | users$post_likesArgs<ExtArgs>
    comment_likes?: boolean | users$comment_likesArgs<ExtArgs>
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
      comments: Prisma.$commentsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      post_likes: Prisma.$post_likesPayload<ExtArgs>[]
      comment_likes: Prisma.$comment_likesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      avatar: string | null
      bio: string | null
      email: string | null
      password_hash: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      notiToken: string | null
      biometricPublicKey: string | null
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
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_likes<T extends users$post_likesArgs<ExtArgs> = {}>(args?: Subset<T, users$post_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comment_likes<T extends users$comment_likesArgs<ExtArgs> = {}>(args?: Subset<T, users$comment_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly biometricPublicKey: FieldRef<"users", 'String'>
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
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.post_likes
   */
  export type users$post_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    where?: post_likesWhereInput
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    cursor?: post_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_likesScalarFieldEnum | Post_likesScalarFieldEnum[]
  }

  /**
   * users.comment_likes
   */
  export type users$comment_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    cursor?: comment_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
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
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    post_id: string | null
    user_id: string | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    post_id: string | null
    user_id: string | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    post_id: number
    user_id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    post_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PostsMaxAggregateInputType = {
    post_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PostsCountAggregateInputType = {
    post_id?: true
    user_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    post_id: string
    user_id: string
    title: string
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    images?: boolean | posts$imagesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    post_id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "user_id" | "title" | "content" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    images?: boolean | posts$imagesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      comments: Prisma.$commentsPayload<ExtArgs>[]
      likes: Prisma.$post_likesPayload<ExtArgs>[]
      images: Prisma.$post_imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      user_id: string
      title: string
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.updateManyAndReturn({
     *   select: { post_id: true },
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
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
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
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends posts$imagesArgs<ExtArgs> = {}>(args?: Subset<T, posts$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly post_id: FieldRef<"posts", 'String'>
    readonly user_id: FieldRef<"posts", 'String'>
    readonly title: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly updated_at: FieldRef<"posts", 'DateTime'>
    readonly deleted_at: FieldRef<"posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    where?: post_likesWhereInput
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    cursor?: post_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_likesScalarFieldEnum | Post_likesScalarFieldEnum[]
  }

  /**
   * posts.images
   */
  export type posts$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    where?: post_imagesWhereInput
    orderBy?: post_imagesOrderByWithRelationInput | post_imagesOrderByWithRelationInput[]
    cursor?: post_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_imagesScalarFieldEnum | Post_imagesScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model post_images
   */

  export type AggregatePost_images = {
    _count: Post_imagesCountAggregateOutputType | null
    _min: Post_imagesMinAggregateOutputType | null
    _max: Post_imagesMaxAggregateOutputType | null
  }

  export type Post_imagesMinAggregateOutputType = {
    image_id: string | null
    post_id: string | null
    imageUrl: string | null
    created_at: Date | null
  }

  export type Post_imagesMaxAggregateOutputType = {
    image_id: string | null
    post_id: string | null
    imageUrl: string | null
    created_at: Date | null
  }

  export type Post_imagesCountAggregateOutputType = {
    image_id: number
    post_id: number
    imageUrl: number
    created_at: number
    _all: number
  }


  export type Post_imagesMinAggregateInputType = {
    image_id?: true
    post_id?: true
    imageUrl?: true
    created_at?: true
  }

  export type Post_imagesMaxAggregateInputType = {
    image_id?: true
    post_id?: true
    imageUrl?: true
    created_at?: true
  }

  export type Post_imagesCountAggregateInputType = {
    image_id?: true
    post_id?: true
    imageUrl?: true
    created_at?: true
    _all?: true
  }

  export type Post_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_images to aggregate.
     */
    where?: post_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_images to fetch.
     */
    orderBy?: post_imagesOrderByWithRelationInput | post_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_images
    **/
    _count?: true | Post_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_imagesMaxAggregateInputType
  }

  export type GetPost_imagesAggregateType<T extends Post_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_images[P]>
      : GetScalarType<T[P], AggregatePost_images[P]>
  }




  export type post_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_imagesWhereInput
    orderBy?: post_imagesOrderByWithAggregationInput | post_imagesOrderByWithAggregationInput[]
    by: Post_imagesScalarFieldEnum[] | Post_imagesScalarFieldEnum
    having?: post_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_imagesCountAggregateInputType | true
    _min?: Post_imagesMinAggregateInputType
    _max?: Post_imagesMaxAggregateInputType
  }

  export type Post_imagesGroupByOutputType = {
    image_id: string
    post_id: string
    imageUrl: string
    created_at: Date
    _count: Post_imagesCountAggregateOutputType | null
    _min: Post_imagesMinAggregateOutputType | null
    _max: Post_imagesMaxAggregateOutputType | null
  }

  type GetPost_imagesGroupByPayload<T extends post_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Post_imagesGroupByOutputType[P]>
        }
      >
    >


  export type post_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    post_id?: boolean
    imageUrl?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_images"]>

  export type post_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    post_id?: boolean
    imageUrl?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_images"]>

  export type post_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    post_id?: boolean
    imageUrl?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_images"]>

  export type post_imagesSelectScalar = {
    image_id?: boolean
    post_id?: boolean
    imageUrl?: boolean
    created_at?: boolean
  }

  export type post_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "post_id" | "imageUrl" | "created_at", ExtArgs["result"]["post_images"]>
  export type post_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type post_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type post_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
  }

  export type $post_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_images"
    objects: {
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: string
      post_id: string
      imageUrl: string
      created_at: Date
    }, ExtArgs["result"]["post_images"]>
    composites: {}
  }

  type post_imagesGetPayload<S extends boolean | null | undefined | post_imagesDefaultArgs> = $Result.GetResult<Prisma.$post_imagesPayload, S>

  type post_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_imagesCountAggregateInputType | true
    }

  export interface post_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_images'], meta: { name: 'post_images' } }
    /**
     * Find zero or one Post_images that matches the filter.
     * @param {post_imagesFindUniqueArgs} args - Arguments to find a Post_images
     * @example
     * // Get one Post_images
     * const post_images = await prisma.post_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_imagesFindUniqueArgs>(args: SelectSubset<T, post_imagesFindUniqueArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_imagesFindUniqueOrThrowArgs} args - Arguments to find a Post_images
     * @example
     * // Get one Post_images
     * const post_images = await prisma.post_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, post_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesFindFirstArgs} args - Arguments to find a Post_images
     * @example
     * // Get one Post_images
     * const post_images = await prisma.post_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_imagesFindFirstArgs>(args?: SelectSubset<T, post_imagesFindFirstArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesFindFirstOrThrowArgs} args - Arguments to find a Post_images
     * @example
     * // Get one Post_images
     * const post_images = await prisma.post_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, post_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_images
     * const post_images = await prisma.post_images.findMany()
     * 
     * // Get first 10 Post_images
     * const post_images = await prisma.post_images.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const post_imagesWithImage_idOnly = await prisma.post_images.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends post_imagesFindManyArgs>(args?: SelectSubset<T, post_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_images.
     * @param {post_imagesCreateArgs} args - Arguments to create a Post_images.
     * @example
     * // Create one Post_images
     * const Post_images = await prisma.post_images.create({
     *   data: {
     *     // ... data to create a Post_images
     *   }
     * })
     * 
     */
    create<T extends post_imagesCreateArgs>(args: SelectSubset<T, post_imagesCreateArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_images.
     * @param {post_imagesCreateManyArgs} args - Arguments to create many Post_images.
     * @example
     * // Create many Post_images
     * const post_images = await prisma.post_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_imagesCreateManyArgs>(args?: SelectSubset<T, post_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_images and returns the data saved in the database.
     * @param {post_imagesCreateManyAndReturnArgs} args - Arguments to create many Post_images.
     * @example
     * // Create many Post_images
     * const post_images = await prisma.post_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_images and only return the `image_id`
     * const post_imagesWithImage_idOnly = await prisma.post_images.createManyAndReturn({
     *   select: { image_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, post_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_images.
     * @param {post_imagesDeleteArgs} args - Arguments to delete one Post_images.
     * @example
     * // Delete one Post_images
     * const Post_images = await prisma.post_images.delete({
     *   where: {
     *     // ... filter to delete one Post_images
     *   }
     * })
     * 
     */
    delete<T extends post_imagesDeleteArgs>(args: SelectSubset<T, post_imagesDeleteArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_images.
     * @param {post_imagesUpdateArgs} args - Arguments to update one Post_images.
     * @example
     * // Update one Post_images
     * const post_images = await prisma.post_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_imagesUpdateArgs>(args: SelectSubset<T, post_imagesUpdateArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_images.
     * @param {post_imagesDeleteManyArgs} args - Arguments to filter Post_images to delete.
     * @example
     * // Delete a few Post_images
     * const { count } = await prisma.post_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_imagesDeleteManyArgs>(args?: SelectSubset<T, post_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_images
     * const post_images = await prisma.post_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_imagesUpdateManyArgs>(args: SelectSubset<T, post_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_images and returns the data updated in the database.
     * @param {post_imagesUpdateManyAndReturnArgs} args - Arguments to update many Post_images.
     * @example
     * // Update many Post_images
     * const post_images = await prisma.post_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_images and only return the `image_id`
     * const post_imagesWithImage_idOnly = await prisma.post_images.updateManyAndReturn({
     *   select: { image_id: true },
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
    updateManyAndReturn<T extends post_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, post_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_images.
     * @param {post_imagesUpsertArgs} args - Arguments to update or create a Post_images.
     * @example
     * // Update or create a Post_images
     * const post_images = await prisma.post_images.upsert({
     *   create: {
     *     // ... data to create a Post_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_images we want to update
     *   }
     * })
     */
    upsert<T extends post_imagesUpsertArgs>(args: SelectSubset<T, post_imagesUpsertArgs<ExtArgs>>): Prisma__post_imagesClient<$Result.GetResult<Prisma.$post_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesCountArgs} args - Arguments to filter Post_images to count.
     * @example
     * // Count the number of Post_images
     * const count = await prisma.post_images.count({
     *   where: {
     *     // ... the filter for the Post_images we want to count
     *   }
     * })
    **/
    count<T extends post_imagesCountArgs>(
      args?: Subset<T, post_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Post_imagesAggregateArgs>(args: Subset<T, Post_imagesAggregateArgs>): Prisma.PrismaPromise<GetPost_imagesAggregateType<T>>

    /**
     * Group by Post_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_imagesGroupByArgs} args - Group by arguments.
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
      T extends post_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_imagesGroupByArgs['orderBy'] }
        : { orderBy?: post_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, post_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_images model
   */
  readonly fields: post_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the post_images model
   */
  interface post_imagesFieldRefs {
    readonly image_id: FieldRef<"post_images", 'String'>
    readonly post_id: FieldRef<"post_images", 'String'>
    readonly imageUrl: FieldRef<"post_images", 'String'>
    readonly created_at: FieldRef<"post_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * post_images findUnique
   */
  export type post_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter, which post_images to fetch.
     */
    where: post_imagesWhereUniqueInput
  }

  /**
   * post_images findUniqueOrThrow
   */
  export type post_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter, which post_images to fetch.
     */
    where: post_imagesWhereUniqueInput
  }

  /**
   * post_images findFirst
   */
  export type post_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter, which post_images to fetch.
     */
    where?: post_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_images to fetch.
     */
    orderBy?: post_imagesOrderByWithRelationInput | post_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_images.
     */
    cursor?: post_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_images.
     */
    distinct?: Post_imagesScalarFieldEnum | Post_imagesScalarFieldEnum[]
  }

  /**
   * post_images findFirstOrThrow
   */
  export type post_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter, which post_images to fetch.
     */
    where?: post_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_images to fetch.
     */
    orderBy?: post_imagesOrderByWithRelationInput | post_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_images.
     */
    cursor?: post_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_images.
     */
    distinct?: Post_imagesScalarFieldEnum | Post_imagesScalarFieldEnum[]
  }

  /**
   * post_images findMany
   */
  export type post_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter, which post_images to fetch.
     */
    where?: post_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_images to fetch.
     */
    orderBy?: post_imagesOrderByWithRelationInput | post_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_images.
     */
    cursor?: post_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_images.
     */
    skip?: number
    distinct?: Post_imagesScalarFieldEnum | Post_imagesScalarFieldEnum[]
  }

  /**
   * post_images create
   */
  export type post_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a post_images.
     */
    data: XOR<post_imagesCreateInput, post_imagesUncheckedCreateInput>
  }

  /**
   * post_images createMany
   */
  export type post_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_images.
     */
    data: post_imagesCreateManyInput | post_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_images createManyAndReturn
   */
  export type post_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many post_images.
     */
    data: post_imagesCreateManyInput | post_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_images update
   */
  export type post_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a post_images.
     */
    data: XOR<post_imagesUpdateInput, post_imagesUncheckedUpdateInput>
    /**
     * Choose, which post_images to update.
     */
    where: post_imagesWhereUniqueInput
  }

  /**
   * post_images updateMany
   */
  export type post_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_images.
     */
    data: XOR<post_imagesUpdateManyMutationInput, post_imagesUncheckedUpdateManyInput>
    /**
     * Filter which post_images to update
     */
    where?: post_imagesWhereInput
    /**
     * Limit how many post_images to update.
     */
    limit?: number
  }

  /**
   * post_images updateManyAndReturn
   */
  export type post_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * The data used to update post_images.
     */
    data: XOR<post_imagesUpdateManyMutationInput, post_imagesUncheckedUpdateManyInput>
    /**
     * Filter which post_images to update
     */
    where?: post_imagesWhereInput
    /**
     * Limit how many post_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_images upsert
   */
  export type post_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the post_images to update in case it exists.
     */
    where: post_imagesWhereUniqueInput
    /**
     * In case the post_images found by the `where` argument doesn't exist, create a new post_images with this data.
     */
    create: XOR<post_imagesCreateInput, post_imagesUncheckedCreateInput>
    /**
     * In case the post_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_imagesUpdateInput, post_imagesUncheckedUpdateInput>
  }

  /**
   * post_images delete
   */
  export type post_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
    /**
     * Filter which post_images to delete.
     */
    where: post_imagesWhereUniqueInput
  }

  /**
   * post_images deleteMany
   */
  export type post_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_images to delete
     */
    where?: post_imagesWhereInput
    /**
     * Limit how many post_images to delete.
     */
    limit?: number
  }

  /**
   * post_images without action
   */
  export type post_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_images
     */
    select?: post_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_images
     */
    omit?: post_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_imagesInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: string | null
    post_id: string | null
    user_id: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: string | null
    post_id: string | null
    user_id: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    post_id: number
    user_id: number
    content: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: string
    post_id: string
    user_id: string
    content: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    likes?: boolean | comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    comment_id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "post_id" | "user_id" | "content" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    likes?: boolean | comments$likesArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      post: Prisma.$postsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      likes: Prisma.$comment_likesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: string
      post_id: string
      user_id: string
      content: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { comment_id: true },
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
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends comments$likesArgs<ExtArgs> = {}>(args?: Subset<T, comments$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly comment_id: FieldRef<"comments", 'String'>
    readonly post_id: FieldRef<"comments", 'String'>
    readonly user_id: FieldRef<"comments", 'String'>
    readonly content: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
    readonly updated_at: FieldRef<"comments", 'DateTime'>
    readonly deleted_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.likes
   */
  export type comments$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    cursor?: comment_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model post_likes
   */

  export type AggregatePost_likes = {
    _count: Post_likesCountAggregateOutputType | null
    _min: Post_likesMinAggregateOutputType | null
    _max: Post_likesMaxAggregateOutputType | null
  }

  export type Post_likesMinAggregateOutputType = {
    post_like_id: string | null
    post_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Post_likesMaxAggregateOutputType = {
    post_like_id: string | null
    post_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Post_likesCountAggregateOutputType = {
    post_like_id: number
    post_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Post_likesMinAggregateInputType = {
    post_like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type Post_likesMaxAggregateInputType = {
    post_like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type Post_likesCountAggregateInputType = {
    post_like_id?: true
    post_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Post_likesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_likes to aggregate.
     */
    where?: post_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_likes to fetch.
     */
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_likes
    **/
    _count?: true | Post_likesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_likesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_likesMaxAggregateInputType
  }

  export type GetPost_likesAggregateType<T extends Post_likesAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_likes[P]>
      : GetScalarType<T[P], AggregatePost_likes[P]>
  }




  export type post_likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_likesWhereInput
    orderBy?: post_likesOrderByWithAggregationInput | post_likesOrderByWithAggregationInput[]
    by: Post_likesScalarFieldEnum[] | Post_likesScalarFieldEnum
    having?: post_likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_likesCountAggregateInputType | true
    _min?: Post_likesMinAggregateInputType
    _max?: Post_likesMaxAggregateInputType
  }

  export type Post_likesGroupByOutputType = {
    post_like_id: string
    post_id: string
    user_id: string
    created_at: Date
    _count: Post_likesCountAggregateOutputType | null
    _min: Post_likesMinAggregateOutputType | null
    _max: Post_likesMaxAggregateOutputType | null
  }

  type GetPost_likesGroupByPayload<T extends post_likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Post_likesGroupByOutputType[P]>
        }
      >
    >


  export type post_likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_likes"]>

  export type post_likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_likes"]>

  export type post_likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_likes"]>

  export type post_likesSelectScalar = {
    post_like_id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type post_likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_like_id" | "post_id" | "user_id" | "created_at", ExtArgs["result"]["post_likes"]>
  export type post_likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type post_likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type post_likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $post_likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_likes"
    objects: {
      post: Prisma.$postsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_like_id: string
      post_id: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["post_likes"]>
    composites: {}
  }

  type post_likesGetPayload<S extends boolean | null | undefined | post_likesDefaultArgs> = $Result.GetResult<Prisma.$post_likesPayload, S>

  type post_likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_likesCountAggregateInputType | true
    }

  export interface post_likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_likes'], meta: { name: 'post_likes' } }
    /**
     * Find zero or one Post_likes that matches the filter.
     * @param {post_likesFindUniqueArgs} args - Arguments to find a Post_likes
     * @example
     * // Get one Post_likes
     * const post_likes = await prisma.post_likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_likesFindUniqueArgs>(args: SelectSubset<T, post_likesFindUniqueArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_likesFindUniqueOrThrowArgs} args - Arguments to find a Post_likes
     * @example
     * // Get one Post_likes
     * const post_likes = await prisma.post_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_likesFindUniqueOrThrowArgs>(args: SelectSubset<T, post_likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesFindFirstArgs} args - Arguments to find a Post_likes
     * @example
     * // Get one Post_likes
     * const post_likes = await prisma.post_likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_likesFindFirstArgs>(args?: SelectSubset<T, post_likesFindFirstArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesFindFirstOrThrowArgs} args - Arguments to find a Post_likes
     * @example
     * // Get one Post_likes
     * const post_likes = await prisma.post_likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_likesFindFirstOrThrowArgs>(args?: SelectSubset<T, post_likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_likes
     * const post_likes = await prisma.post_likes.findMany()
     * 
     * // Get first 10 Post_likes
     * const post_likes = await prisma.post_likes.findMany({ take: 10 })
     * 
     * // Only select the `post_like_id`
     * const post_likesWithPost_like_idOnly = await prisma.post_likes.findMany({ select: { post_like_id: true } })
     * 
     */
    findMany<T extends post_likesFindManyArgs>(args?: SelectSubset<T, post_likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_likes.
     * @param {post_likesCreateArgs} args - Arguments to create a Post_likes.
     * @example
     * // Create one Post_likes
     * const Post_likes = await prisma.post_likes.create({
     *   data: {
     *     // ... data to create a Post_likes
     *   }
     * })
     * 
     */
    create<T extends post_likesCreateArgs>(args: SelectSubset<T, post_likesCreateArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_likes.
     * @param {post_likesCreateManyArgs} args - Arguments to create many Post_likes.
     * @example
     * // Create many Post_likes
     * const post_likes = await prisma.post_likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_likesCreateManyArgs>(args?: SelectSubset<T, post_likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_likes and returns the data saved in the database.
     * @param {post_likesCreateManyAndReturnArgs} args - Arguments to create many Post_likes.
     * @example
     * // Create many Post_likes
     * const post_likes = await prisma.post_likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_likes and only return the `post_like_id`
     * const post_likesWithPost_like_idOnly = await prisma.post_likes.createManyAndReturn({
     *   select: { post_like_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_likesCreateManyAndReturnArgs>(args?: SelectSubset<T, post_likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_likes.
     * @param {post_likesDeleteArgs} args - Arguments to delete one Post_likes.
     * @example
     * // Delete one Post_likes
     * const Post_likes = await prisma.post_likes.delete({
     *   where: {
     *     // ... filter to delete one Post_likes
     *   }
     * })
     * 
     */
    delete<T extends post_likesDeleteArgs>(args: SelectSubset<T, post_likesDeleteArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_likes.
     * @param {post_likesUpdateArgs} args - Arguments to update one Post_likes.
     * @example
     * // Update one Post_likes
     * const post_likes = await prisma.post_likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_likesUpdateArgs>(args: SelectSubset<T, post_likesUpdateArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_likes.
     * @param {post_likesDeleteManyArgs} args - Arguments to filter Post_likes to delete.
     * @example
     * // Delete a few Post_likes
     * const { count } = await prisma.post_likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_likesDeleteManyArgs>(args?: SelectSubset<T, post_likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_likes
     * const post_likes = await prisma.post_likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_likesUpdateManyArgs>(args: SelectSubset<T, post_likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_likes and returns the data updated in the database.
     * @param {post_likesUpdateManyAndReturnArgs} args - Arguments to update many Post_likes.
     * @example
     * // Update many Post_likes
     * const post_likes = await prisma.post_likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_likes and only return the `post_like_id`
     * const post_likesWithPost_like_idOnly = await prisma.post_likes.updateManyAndReturn({
     *   select: { post_like_id: true },
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
    updateManyAndReturn<T extends post_likesUpdateManyAndReturnArgs>(args: SelectSubset<T, post_likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_likes.
     * @param {post_likesUpsertArgs} args - Arguments to update or create a Post_likes.
     * @example
     * // Update or create a Post_likes
     * const post_likes = await prisma.post_likes.upsert({
     *   create: {
     *     // ... data to create a Post_likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_likes we want to update
     *   }
     * })
     */
    upsert<T extends post_likesUpsertArgs>(args: SelectSubset<T, post_likesUpsertArgs<ExtArgs>>): Prisma__post_likesClient<$Result.GetResult<Prisma.$post_likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesCountArgs} args - Arguments to filter Post_likes to count.
     * @example
     * // Count the number of Post_likes
     * const count = await prisma.post_likes.count({
     *   where: {
     *     // ... the filter for the Post_likes we want to count
     *   }
     * })
    **/
    count<T extends post_likesCountArgs>(
      args?: Subset<T, post_likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_likesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Post_likesAggregateArgs>(args: Subset<T, Post_likesAggregateArgs>): Prisma.PrismaPromise<GetPost_likesAggregateType<T>>

    /**
     * Group by Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_likesGroupByArgs} args - Group by arguments.
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
      T extends post_likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_likesGroupByArgs['orderBy'] }
        : { orderBy?: post_likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, post_likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_likesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_likes model
   */
  readonly fields: post_likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the post_likes model
   */
  interface post_likesFieldRefs {
    readonly post_like_id: FieldRef<"post_likes", 'String'>
    readonly post_id: FieldRef<"post_likes", 'String'>
    readonly user_id: FieldRef<"post_likes", 'String'>
    readonly created_at: FieldRef<"post_likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * post_likes findUnique
   */
  export type post_likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter, which post_likes to fetch.
     */
    where: post_likesWhereUniqueInput
  }

  /**
   * post_likes findUniqueOrThrow
   */
  export type post_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter, which post_likes to fetch.
     */
    where: post_likesWhereUniqueInput
  }

  /**
   * post_likes findFirst
   */
  export type post_likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter, which post_likes to fetch.
     */
    where?: post_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_likes to fetch.
     */
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_likes.
     */
    cursor?: post_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_likes.
     */
    distinct?: Post_likesScalarFieldEnum | Post_likesScalarFieldEnum[]
  }

  /**
   * post_likes findFirstOrThrow
   */
  export type post_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter, which post_likes to fetch.
     */
    where?: post_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_likes to fetch.
     */
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_likes.
     */
    cursor?: post_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_likes.
     */
    distinct?: Post_likesScalarFieldEnum | Post_likesScalarFieldEnum[]
  }

  /**
   * post_likes findMany
   */
  export type post_likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter, which post_likes to fetch.
     */
    where?: post_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_likes to fetch.
     */
    orderBy?: post_likesOrderByWithRelationInput | post_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_likes.
     */
    cursor?: post_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_likes.
     */
    skip?: number
    distinct?: Post_likesScalarFieldEnum | Post_likesScalarFieldEnum[]
  }

  /**
   * post_likes create
   */
  export type post_likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * The data needed to create a post_likes.
     */
    data: XOR<post_likesCreateInput, post_likesUncheckedCreateInput>
  }

  /**
   * post_likes createMany
   */
  export type post_likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_likes.
     */
    data: post_likesCreateManyInput | post_likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_likes createManyAndReturn
   */
  export type post_likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * The data used to create many post_likes.
     */
    data: post_likesCreateManyInput | post_likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_likes update
   */
  export type post_likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * The data needed to update a post_likes.
     */
    data: XOR<post_likesUpdateInput, post_likesUncheckedUpdateInput>
    /**
     * Choose, which post_likes to update.
     */
    where: post_likesWhereUniqueInput
  }

  /**
   * post_likes updateMany
   */
  export type post_likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_likes.
     */
    data: XOR<post_likesUpdateManyMutationInput, post_likesUncheckedUpdateManyInput>
    /**
     * Filter which post_likes to update
     */
    where?: post_likesWhereInput
    /**
     * Limit how many post_likes to update.
     */
    limit?: number
  }

  /**
   * post_likes updateManyAndReturn
   */
  export type post_likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * The data used to update post_likes.
     */
    data: XOR<post_likesUpdateManyMutationInput, post_likesUncheckedUpdateManyInput>
    /**
     * Filter which post_likes to update
     */
    where?: post_likesWhereInput
    /**
     * Limit how many post_likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_likes upsert
   */
  export type post_likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * The filter to search for the post_likes to update in case it exists.
     */
    where: post_likesWhereUniqueInput
    /**
     * In case the post_likes found by the `where` argument doesn't exist, create a new post_likes with this data.
     */
    create: XOR<post_likesCreateInput, post_likesUncheckedCreateInput>
    /**
     * In case the post_likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_likesUpdateInput, post_likesUncheckedUpdateInput>
  }

  /**
   * post_likes delete
   */
  export type post_likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
    /**
     * Filter which post_likes to delete.
     */
    where: post_likesWhereUniqueInput
  }

  /**
   * post_likes deleteMany
   */
  export type post_likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_likes to delete
     */
    where?: post_likesWhereInput
    /**
     * Limit how many post_likes to delete.
     */
    limit?: number
  }

  /**
   * post_likes without action
   */
  export type post_likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_likes
     */
    select?: post_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_likes
     */
    omit?: post_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_likesInclude<ExtArgs> | null
  }


  /**
   * Model comment_likes
   */

  export type AggregateComment_likes = {
    _count: Comment_likesCountAggregateOutputType | null
    _min: Comment_likesMinAggregateOutputType | null
    _max: Comment_likesMaxAggregateOutputType | null
  }

  export type Comment_likesMinAggregateOutputType = {
    comment_like_id: string | null
    comment_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Comment_likesMaxAggregateOutputType = {
    comment_like_id: string | null
    comment_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type Comment_likesCountAggregateOutputType = {
    comment_like_id: number
    comment_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Comment_likesMinAggregateInputType = {
    comment_like_id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
  }

  export type Comment_likesMaxAggregateInputType = {
    comment_like_id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
  }

  export type Comment_likesCountAggregateInputType = {
    comment_like_id?: true
    comment_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Comment_likesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_likes to aggregate.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comment_likes
    **/
    _count?: true | Comment_likesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comment_likesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comment_likesMaxAggregateInputType
  }

  export type GetComment_likesAggregateType<T extends Comment_likesAggregateArgs> = {
        [P in keyof T & keyof AggregateComment_likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment_likes[P]>
      : GetScalarType<T[P], AggregateComment_likes[P]>
  }




  export type comment_likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comment_likesWhereInput
    orderBy?: comment_likesOrderByWithAggregationInput | comment_likesOrderByWithAggregationInput[]
    by: Comment_likesScalarFieldEnum[] | Comment_likesScalarFieldEnum
    having?: comment_likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comment_likesCountAggregateInputType | true
    _min?: Comment_likesMinAggregateInputType
    _max?: Comment_likesMaxAggregateInputType
  }

  export type Comment_likesGroupByOutputType = {
    comment_like_id: string
    comment_id: string
    user_id: string
    created_at: Date
    _count: Comment_likesCountAggregateOutputType | null
    _min: Comment_likesMinAggregateOutputType | null
    _max: Comment_likesMaxAggregateOutputType | null
  }

  type GetComment_likesGroupByPayload<T extends comment_likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comment_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comment_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comment_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Comment_likesGroupByOutputType[P]>
        }
      >
    >


  export type comment_likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_like_id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_like_id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_like_id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment_likes"]>

  export type comment_likesSelectScalar = {
    comment_like_id?: boolean
    comment_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type comment_likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_like_id" | "comment_id" | "user_id" | "created_at", ExtArgs["result"]["comment_likes"]>
  export type comment_likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type comment_likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type comment_likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | commentsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $comment_likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment_likes"
    objects: {
      comment: Prisma.$commentsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_like_id: string
      comment_id: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["comment_likes"]>
    composites: {}
  }

  type comment_likesGetPayload<S extends boolean | null | undefined | comment_likesDefaultArgs> = $Result.GetResult<Prisma.$comment_likesPayload, S>

  type comment_likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comment_likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comment_likesCountAggregateInputType | true
    }

  export interface comment_likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment_likes'], meta: { name: 'comment_likes' } }
    /**
     * Find zero or one Comment_likes that matches the filter.
     * @param {comment_likesFindUniqueArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comment_likesFindUniqueArgs>(args: SelectSubset<T, comment_likesFindUniqueArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment_likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comment_likesFindUniqueOrThrowArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comment_likesFindUniqueOrThrowArgs>(args: SelectSubset<T, comment_likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindFirstArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comment_likesFindFirstArgs>(args?: SelectSubset<T, comment_likesFindFirstArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment_likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindFirstOrThrowArgs} args - Arguments to find a Comment_likes
     * @example
     * // Get one Comment_likes
     * const comment_likes = await prisma.comment_likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comment_likesFindFirstOrThrowArgs>(args?: SelectSubset<T, comment_likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comment_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_likes
     * const comment_likes = await prisma.comment_likes.findMany()
     * 
     * // Get first 10 Comment_likes
     * const comment_likes = await prisma.comment_likes.findMany({ take: 10 })
     * 
     * // Only select the `comment_like_id`
     * const comment_likesWithComment_like_idOnly = await prisma.comment_likes.findMany({ select: { comment_like_id: true } })
     * 
     */
    findMany<T extends comment_likesFindManyArgs>(args?: SelectSubset<T, comment_likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment_likes.
     * @param {comment_likesCreateArgs} args - Arguments to create a Comment_likes.
     * @example
     * // Create one Comment_likes
     * const Comment_likes = await prisma.comment_likes.create({
     *   data: {
     *     // ... data to create a Comment_likes
     *   }
     * })
     * 
     */
    create<T extends comment_likesCreateArgs>(args: SelectSubset<T, comment_likesCreateArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comment_likes.
     * @param {comment_likesCreateManyArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_likes = await prisma.comment_likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comment_likesCreateManyArgs>(args?: SelectSubset<T, comment_likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comment_likes and returns the data saved in the database.
     * @param {comment_likesCreateManyAndReturnArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_likes = await prisma.comment_likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comment_likes and only return the `comment_like_id`
     * const comment_likesWithComment_like_idOnly = await prisma.comment_likes.createManyAndReturn({
     *   select: { comment_like_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends comment_likesCreateManyAndReturnArgs>(args?: SelectSubset<T, comment_likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment_likes.
     * @param {comment_likesDeleteArgs} args - Arguments to delete one Comment_likes.
     * @example
     * // Delete one Comment_likes
     * const Comment_likes = await prisma.comment_likes.delete({
     *   where: {
     *     // ... filter to delete one Comment_likes
     *   }
     * })
     * 
     */
    delete<T extends comment_likesDeleteArgs>(args: SelectSubset<T, comment_likesDeleteArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment_likes.
     * @param {comment_likesUpdateArgs} args - Arguments to update one Comment_likes.
     * @example
     * // Update one Comment_likes
     * const comment_likes = await prisma.comment_likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comment_likesUpdateArgs>(args: SelectSubset<T, comment_likesUpdateArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comment_likes.
     * @param {comment_likesDeleteManyArgs} args - Arguments to filter Comment_likes to delete.
     * @example
     * // Delete a few Comment_likes
     * const { count } = await prisma.comment_likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comment_likesDeleteManyArgs>(args?: SelectSubset<T, comment_likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_likes
     * const comment_likes = await prisma.comment_likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comment_likesUpdateManyArgs>(args: SelectSubset<T, comment_likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comment_likes and returns the data updated in the database.
     * @param {comment_likesUpdateManyAndReturnArgs} args - Arguments to update many Comment_likes.
     * @example
     * // Update many Comment_likes
     * const comment_likes = await prisma.comment_likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comment_likes and only return the `comment_like_id`
     * const comment_likesWithComment_like_idOnly = await prisma.comment_likes.updateManyAndReturn({
     *   select: { comment_like_id: true },
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
    updateManyAndReturn<T extends comment_likesUpdateManyAndReturnArgs>(args: SelectSubset<T, comment_likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment_likes.
     * @param {comment_likesUpsertArgs} args - Arguments to update or create a Comment_likes.
     * @example
     * // Update or create a Comment_likes
     * const comment_likes = await prisma.comment_likes.upsert({
     *   create: {
     *     // ... data to create a Comment_likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_likes we want to update
     *   }
     * })
     */
    upsert<T extends comment_likesUpsertArgs>(args: SelectSubset<T, comment_likesUpsertArgs<ExtArgs>>): Prisma__comment_likesClient<$Result.GetResult<Prisma.$comment_likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesCountArgs} args - Arguments to filter Comment_likes to count.
     * @example
     * // Count the number of Comment_likes
     * const count = await prisma.comment_likes.count({
     *   where: {
     *     // ... the filter for the Comment_likes we want to count
     *   }
     * })
    **/
    count<T extends comment_likesCountArgs>(
      args?: Subset<T, comment_likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comment_likesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Comment_likesAggregateArgs>(args: Subset<T, Comment_likesAggregateArgs>): Prisma.PrismaPromise<GetComment_likesAggregateType<T>>

    /**
     * Group by Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comment_likesGroupByArgs} args - Group by arguments.
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
      T extends comment_likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comment_likesGroupByArgs['orderBy'] }
        : { orderBy?: comment_likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comment_likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_likesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment_likes model
   */
  readonly fields: comment_likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comment_likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends commentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commentsDefaultArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the comment_likes model
   */
  interface comment_likesFieldRefs {
    readonly comment_like_id: FieldRef<"comment_likes", 'String'>
    readonly comment_id: FieldRef<"comment_likes", 'String'>
    readonly user_id: FieldRef<"comment_likes", 'String'>
    readonly created_at: FieldRef<"comment_likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comment_likes findUnique
   */
  export type comment_likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes findUniqueOrThrow
   */
  export type comment_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes findFirst
   */
  export type comment_likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_likes.
     */
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes findFirstOrThrow
   */
  export type comment_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comment_likes.
     */
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes findMany
   */
  export type comment_likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter, which comment_likes to fetch.
     */
    where?: comment_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comment_likes to fetch.
     */
    orderBy?: comment_likesOrderByWithRelationInput | comment_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comment_likes.
     */
    cursor?: comment_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comment_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comment_likes.
     */
    skip?: number
    distinct?: Comment_likesScalarFieldEnum | Comment_likesScalarFieldEnum[]
  }

  /**
   * comment_likes create
   */
  export type comment_likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The data needed to create a comment_likes.
     */
    data: XOR<comment_likesCreateInput, comment_likesUncheckedCreateInput>
  }

  /**
   * comment_likes createMany
   */
  export type comment_likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comment_likes.
     */
    data: comment_likesCreateManyInput | comment_likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment_likes createManyAndReturn
   */
  export type comment_likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * The data used to create many comment_likes.
     */
    data: comment_likesCreateManyInput | comment_likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment_likes update
   */
  export type comment_likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The data needed to update a comment_likes.
     */
    data: XOR<comment_likesUpdateInput, comment_likesUncheckedUpdateInput>
    /**
     * Choose, which comment_likes to update.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes updateMany
   */
  export type comment_likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comment_likes.
     */
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyInput>
    /**
     * Filter which comment_likes to update
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to update.
     */
    limit?: number
  }

  /**
   * comment_likes updateManyAndReturn
   */
  export type comment_likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * The data used to update comment_likes.
     */
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyInput>
    /**
     * Filter which comment_likes to update
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comment_likes upsert
   */
  export type comment_likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * The filter to search for the comment_likes to update in case it exists.
     */
    where: comment_likesWhereUniqueInput
    /**
     * In case the comment_likes found by the `where` argument doesn't exist, create a new comment_likes with this data.
     */
    create: XOR<comment_likesCreateInput, comment_likesUncheckedCreateInput>
    /**
     * In case the comment_likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comment_likesUpdateInput, comment_likesUncheckedUpdateInput>
  }

  /**
   * comment_likes delete
   */
  export type comment_likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
    /**
     * Filter which comment_likes to delete.
     */
    where: comment_likesWhereUniqueInput
  }

  /**
   * comment_likes deleteMany
   */
  export type comment_likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment_likes to delete
     */
    where?: comment_likesWhereInput
    /**
     * Limit how many comment_likes to delete.
     */
    limit?: number
  }

  /**
   * comment_likes without action
   */
  export type comment_likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment_likes
     */
    select?: comment_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comment_likes
     */
    omit?: comment_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comment_likesInclude<ExtArgs> | null
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
    isEVM: 'isEVM',
    coingecko_id: 'coingecko_id'
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
    notiToken: 'notiToken',
    biometricPublicKey: 'biometricPublicKey'
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


  export const PostsScalarFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const Post_imagesScalarFieldEnum: {
    image_id: 'image_id',
    post_id: 'post_id',
    imageUrl: 'imageUrl',
    created_at: 'created_at'
  };

  export type Post_imagesScalarFieldEnum = (typeof Post_imagesScalarFieldEnum)[keyof typeof Post_imagesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    post_id: 'post_id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const Post_likesScalarFieldEnum: {
    post_like_id: 'post_like_id',
    post_id: 'post_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Post_likesScalarFieldEnum = (typeof Post_likesScalarFieldEnum)[keyof typeof Post_likesScalarFieldEnum]


  export const Comment_likesScalarFieldEnum: {
    comment_like_id: 'comment_like_id',
    comment_id: 'comment_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Comment_likesScalarFieldEnum = (typeof Comment_likesScalarFieldEnum)[keyof typeof Comment_likesScalarFieldEnum]


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
    coingecko_id?: StringNullableFilter<"networks"> | string | null
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
    coingecko_id?: SortOrderInput | SortOrder
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
    coingecko_id?: StringNullableFilter<"networks"> | string | null
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
    coingecko_id?: SortOrderInput | SortOrder
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
    coingecko_id?: StringNullableWithAggregatesFilter<"networks"> | string | null
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
    email?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    notiToken?: StringNullableFilter<"users"> | string | null
    biometricPublicKey?: StringNullableFilter<"users"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    networks?: NetworksListRelationFilter
    wallets?: WalletsListRelationFilter
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    post_likes?: Post_likesListRelationFilter
    comment_likes?: Comment_likesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    notiToken?: SortOrderInput | SortOrder
    biometricPublicKey?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    networks?: networksOrderByRelationAggregateInput
    wallets?: walletsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    post_likes?: post_likesOrderByRelationAggregateInput
    comment_likes?: comment_likesOrderByRelationAggregateInput
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
    biometricPublicKey?: StringNullableFilter<"users"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    networks?: NetworksListRelationFilter
    wallets?: WalletsListRelationFilter
    comments?: CommentsListRelationFilter
    posts?: PostsListRelationFilter
    post_likes?: Post_likesListRelationFilter
    comment_likes?: Comment_likesListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    notiToken?: SortOrderInput | SortOrder
    biometricPublicKey?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    notiToken?: StringNullableWithAggregatesFilter<"users"> | string | null
    biometricPublicKey?: StringNullableWithAggregatesFilter<"users"> | string | null
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

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    post_id?: UuidFilter<"posts"> | string
    user_id?: UuidFilter<"posts"> | string
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    comments?: CommentsListRelationFilter
    likes?: Post_likesListRelationFilter
    images?: Post_imagesListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    comments?: commentsOrderByRelationAggregateInput
    likes?: post_likesOrderByRelationAggregateInput
    images?: post_imagesOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    user_id?: UuidFilter<"posts"> | string
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    comments?: CommentsListRelationFilter
    likes?: Post_likesListRelationFilter
    images?: Post_imagesListRelationFilter
  }, "post_id">

  export type postsOrderByWithAggregationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    post_id?: UuidWithAggregatesFilter<"posts"> | string
    user_id?: UuidWithAggregatesFilter<"posts"> | string
    title?: StringWithAggregatesFilter<"posts"> | string
    content?: StringWithAggregatesFilter<"posts"> | string
    created_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
  }

  export type post_imagesWhereInput = {
    AND?: post_imagesWhereInput | post_imagesWhereInput[]
    OR?: post_imagesWhereInput[]
    NOT?: post_imagesWhereInput | post_imagesWhereInput[]
    image_id?: UuidFilter<"post_images"> | string
    post_id?: UuidFilter<"post_images"> | string
    imageUrl?: StringFilter<"post_images"> | string
    created_at?: DateTimeFilter<"post_images"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }

  export type post_imagesOrderByWithRelationInput = {
    image_id?: SortOrder
    post_id?: SortOrder
    imageUrl?: SortOrder
    created_at?: SortOrder
    post?: postsOrderByWithRelationInput
  }

  export type post_imagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: string
    AND?: post_imagesWhereInput | post_imagesWhereInput[]
    OR?: post_imagesWhereInput[]
    NOT?: post_imagesWhereInput | post_imagesWhereInput[]
    post_id?: UuidFilter<"post_images"> | string
    imageUrl?: StringFilter<"post_images"> | string
    created_at?: DateTimeFilter<"post_images"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }, "image_id">

  export type post_imagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    post_id?: SortOrder
    imageUrl?: SortOrder
    created_at?: SortOrder
    _count?: post_imagesCountOrderByAggregateInput
    _max?: post_imagesMaxOrderByAggregateInput
    _min?: post_imagesMinOrderByAggregateInput
  }

  export type post_imagesScalarWhereWithAggregatesInput = {
    AND?: post_imagesScalarWhereWithAggregatesInput | post_imagesScalarWhereWithAggregatesInput[]
    OR?: post_imagesScalarWhereWithAggregatesInput[]
    NOT?: post_imagesScalarWhereWithAggregatesInput | post_imagesScalarWhereWithAggregatesInput[]
    image_id?: UuidWithAggregatesFilter<"post_images"> | string
    post_id?: UuidWithAggregatesFilter<"post_images"> | string
    imageUrl?: StringWithAggregatesFilter<"post_images"> | string
    created_at?: DateTimeWithAggregatesFilter<"post_images"> | Date | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    likes?: Comment_likesListRelationFilter
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    post?: postsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    likes?: comment_likesOrderByRelationAggregateInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: string
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    likes?: Comment_likesListRelationFilter
  }, "comment_id">

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    comment_id?: UuidWithAggregatesFilter<"comments"> | string
    post_id?: UuidWithAggregatesFilter<"comments"> | string
    user_id?: UuidWithAggregatesFilter<"comments"> | string
    content?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type post_likesWhereInput = {
    AND?: post_likesWhereInput | post_likesWhereInput[]
    OR?: post_likesWhereInput[]
    NOT?: post_likesWhereInput | post_likesWhereInput[]
    post_like_id?: UuidFilter<"post_likes"> | string
    post_id?: UuidFilter<"post_likes"> | string
    user_id?: UuidFilter<"post_likes"> | string
    created_at?: DateTimeFilter<"post_likes"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type post_likesOrderByWithRelationInput = {
    post_like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    post?: postsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type post_likesWhereUniqueInput = Prisma.AtLeast<{
    post_like_id?: string
    post_id_user_id?: post_likesPost_idUser_idCompoundUniqueInput
    AND?: post_likesWhereInput | post_likesWhereInput[]
    OR?: post_likesWhereInput[]
    NOT?: post_likesWhereInput | post_likesWhereInput[]
    post_id?: UuidFilter<"post_likes"> | string
    user_id?: UuidFilter<"post_likes"> | string
    created_at?: DateTimeFilter<"post_likes"> | Date | string
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "post_like_id" | "post_id_user_id">

  export type post_likesOrderByWithAggregationInput = {
    post_like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: post_likesCountOrderByAggregateInput
    _max?: post_likesMaxOrderByAggregateInput
    _min?: post_likesMinOrderByAggregateInput
  }

  export type post_likesScalarWhereWithAggregatesInput = {
    AND?: post_likesScalarWhereWithAggregatesInput | post_likesScalarWhereWithAggregatesInput[]
    OR?: post_likesScalarWhereWithAggregatesInput[]
    NOT?: post_likesScalarWhereWithAggregatesInput | post_likesScalarWhereWithAggregatesInput[]
    post_like_id?: UuidWithAggregatesFilter<"post_likes"> | string
    post_id?: UuidWithAggregatesFilter<"post_likes"> | string
    user_id?: UuidWithAggregatesFilter<"post_likes"> | string
    created_at?: DateTimeWithAggregatesFilter<"post_likes"> | Date | string
  }

  export type comment_likesWhereInput = {
    AND?: comment_likesWhereInput | comment_likesWhereInput[]
    OR?: comment_likesWhereInput[]
    NOT?: comment_likesWhereInput | comment_likesWhereInput[]
    comment_like_id?: UuidFilter<"comment_likes"> | string
    comment_id?: UuidFilter<"comment_likes"> | string
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeFilter<"comment_likes"> | Date | string
    comment?: XOR<CommentsScalarRelationFilter, commentsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type comment_likesOrderByWithRelationInput = {
    comment_like_id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    comment?: commentsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type comment_likesWhereUniqueInput = Prisma.AtLeast<{
    comment_like_id?: string
    comment_id_user_id?: comment_likesComment_idUser_idCompoundUniqueInput
    AND?: comment_likesWhereInput | comment_likesWhereInput[]
    OR?: comment_likesWhereInput[]
    NOT?: comment_likesWhereInput | comment_likesWhereInput[]
    comment_id?: UuidFilter<"comment_likes"> | string
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeFilter<"comment_likes"> | Date | string
    comment?: XOR<CommentsScalarRelationFilter, commentsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "comment_like_id" | "comment_id_user_id">

  export type comment_likesOrderByWithAggregationInput = {
    comment_like_id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: comment_likesCountOrderByAggregateInput
    _max?: comment_likesMaxOrderByAggregateInput
    _min?: comment_likesMinOrderByAggregateInput
  }

  export type comment_likesScalarWhereWithAggregatesInput = {
    AND?: comment_likesScalarWhereWithAggregatesInput | comment_likesScalarWhereWithAggregatesInput[]
    OR?: comment_likesScalarWhereWithAggregatesInput[]
    NOT?: comment_likesScalarWhereWithAggregatesInput | comment_likesScalarWhereWithAggregatesInput[]
    comment_like_id?: UuidWithAggregatesFilter<"comment_likes"> | string
    comment_id?: UuidWithAggregatesFilter<"comment_likes"> | string
    user_id?: UuidWithAggregatesFilter<"comment_likes"> | string
    created_at?: DateTimeWithAggregatesFilter<"comment_likes"> | Date | string
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
    coingecko_id?: string | null
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
    coingecko_id?: string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type postsCreateInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    likes?: post_likesCreateNestedManyWithoutPostInput
    images?: post_imagesCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateInput = {
    post_id?: string
    user_id: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    likes?: post_likesUncheckedCreateNestedManyWithoutPostInput
    images?: post_imagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    likes?: post_likesUpdateManyWithoutPostNestedInput
    images?: post_imagesUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: post_likesUncheckedUpdateManyWithoutPostNestedInput
    images?: post_imagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsCreateManyInput = {
    post_id?: string
    user_id: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type postsUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_imagesCreateInput = {
    image_id?: string
    imageUrl: string
    created_at?: Date | string
    post: postsCreateNestedOneWithoutImagesInput
  }

  export type post_imagesUncheckedCreateInput = {
    image_id?: string
    post_id: string
    imageUrl: string
    created_at?: Date | string
  }

  export type post_imagesUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type post_imagesUncheckedUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_imagesCreateManyInput = {
    image_id?: string
    post_id: string
    imageUrl: string
    created_at?: Date | string
  }

  export type post_imagesUpdateManyMutationInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_imagesUncheckedUpdateManyInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateInput = {
    comment_id?: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    post: postsCreateNestedOneWithoutCommentsInput
    user: usersCreateNestedOneWithoutCommentsInput
    likes?: comment_likesCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: string
    post_id: string
    user_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    likes?: comment_likesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
    likes?: comment_likesUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: comment_likesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsCreateManyInput = {
    comment_id?: string
    post_id: string
    user_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_likesCreateInput = {
    post_like_id?: string
    created_at?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
    user: usersCreateNestedOneWithoutPost_likesInput
  }

  export type post_likesUncheckedCreateInput = {
    post_like_id?: string
    post_id: string
    user_id: string
    created_at?: Date | string
  }

  export type post_likesUpdateInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
    user?: usersUpdateOneRequiredWithoutPost_likesNestedInput
  }

  export type post_likesUncheckedUpdateInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_likesCreateManyInput = {
    post_like_id?: string
    post_id: string
    user_id: string
    created_at?: Date | string
  }

  export type post_likesUpdateManyMutationInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_likesUncheckedUpdateManyInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesCreateInput = {
    comment_like_id?: string
    created_at?: Date | string
    comment: commentsCreateNestedOneWithoutLikesInput
    user: usersCreateNestedOneWithoutComment_likesInput
  }

  export type comment_likesUncheckedCreateInput = {
    comment_like_id?: string
    comment_id: string
    user_id: string
    created_at?: Date | string
  }

  export type comment_likesUpdateInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutLikesNestedInput
    user?: usersUpdateOneRequiredWithoutComment_likesNestedInput
  }

  export type comment_likesUncheckedUpdateInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesCreateManyInput = {
    comment_like_id?: string
    comment_id: string
    user_id: string
    created_at?: Date | string
  }

  export type comment_likesUpdateManyMutationInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesUncheckedUpdateManyInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    coingecko_id?: SortOrder
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
    coingecko_id?: SortOrder
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
    coingecko_id?: SortOrder
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

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type Post_likesListRelationFilter = {
    every?: post_likesWhereInput
    some?: post_likesWhereInput
    none?: post_likesWhereInput
  }

  export type Comment_likesListRelationFilter = {
    every?: comment_likesWhereInput
    some?: comment_likesWhereInput
    none?: comment_likesWhereInput
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

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type post_likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type comment_likesOrderByRelationAggregateInput = {
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
    biometricPublicKey?: SortOrder
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
    biometricPublicKey?: SortOrder
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
    biometricPublicKey?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Post_imagesListRelationFilter = {
    every?: post_imagesWhereInput
    some?: post_imagesWhereInput
    none?: post_imagesWhereInput
  }

  export type post_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type post_imagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    post_id?: SortOrder
    imageUrl?: SortOrder
    created_at?: SortOrder
  }

  export type post_imagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    post_id?: SortOrder
    imageUrl?: SortOrder
    created_at?: SortOrder
  }

  export type post_imagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    post_id?: SortOrder
    imageUrl?: SortOrder
    created_at?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type post_likesPost_idUser_idCompoundUniqueInput = {
    post_id: string
    user_id: string
  }

  export type post_likesCountOrderByAggregateInput = {
    post_like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type post_likesMaxOrderByAggregateInput = {
    post_like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type post_likesMinOrderByAggregateInput = {
    post_like_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsScalarRelationFilter = {
    is?: commentsWhereInput
    isNot?: commentsWhereInput
  }

  export type comment_likesComment_idUser_idCompoundUniqueInput = {
    comment_id: string
    user_id: string
  }

  export type comment_likesCountOrderByAggregateInput = {
    comment_like_id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type comment_likesMaxOrderByAggregateInput = {
    comment_like_id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type comment_likesMinOrderByAggregateInput = {
    comment_like_id?: SortOrder
    comment_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
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

  export type commentsCreateNestedManyWithoutUserInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUserInput = {
    create?: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput> | postsCreateWithoutUserInput[] | postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUserInput | postsCreateOrConnectWithoutUserInput[]
    createMany?: postsCreateManyUserInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type post_likesCreateNestedManyWithoutUserInput = {
    create?: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput> | post_likesCreateWithoutUserInput[] | post_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutUserInput | post_likesCreateOrConnectWithoutUserInput[]
    createMany?: post_likesCreateManyUserInputEnvelope
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
  }

  export type comment_likesCreateNestedManyWithoutUserInput = {
    create?: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput> | comment_likesCreateWithoutUserInput[] | comment_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUserInput | comment_likesCreateOrConnectWithoutUserInput[]
    createMany?: comment_likesCreateManyUserInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
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

  export type commentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput> | postsCreateWithoutUserInput[] | postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUserInput | postsCreateOrConnectWithoutUserInput[]
    createMany?: postsCreateManyUserInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type post_likesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput> | post_likesCreateWithoutUserInput[] | post_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutUserInput | post_likesCreateOrConnectWithoutUserInput[]
    createMany?: post_likesCreateManyUserInputEnvelope
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
  }

  export type comment_likesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput> | comment_likesCreateWithoutUserInput[] | comment_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUserInput | comment_likesCreateOrConnectWithoutUserInput[]
    createMany?: comment_likesCreateManyUserInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
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

  export type commentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUserInput | commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUserInput | commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUserInput | commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUserNestedInput = {
    create?: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput> | postsCreateWithoutUserInput[] | postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUserInput | postsCreateOrConnectWithoutUserInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUserInput | postsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postsCreateManyUserInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUserInput | postsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUserInput | postsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type post_likesUpdateManyWithoutUserNestedInput = {
    create?: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput> | post_likesCreateWithoutUserInput[] | post_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutUserInput | post_likesCreateOrConnectWithoutUserInput[]
    upsert?: post_likesUpsertWithWhereUniqueWithoutUserInput | post_likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: post_likesCreateManyUserInputEnvelope
    set?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    disconnect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    delete?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    update?: post_likesUpdateWithWhereUniqueWithoutUserInput | post_likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: post_likesUpdateManyWithWhereWithoutUserInput | post_likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
  }

  export type comment_likesUpdateManyWithoutUserNestedInput = {
    create?: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput> | comment_likesCreateWithoutUserInput[] | comment_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUserInput | comment_likesCreateOrConnectWithoutUserInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutUserInput | comment_likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: comment_likesCreateManyUserInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutUserInput | comment_likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutUserInput | comment_likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
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

  export type commentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUserInput | commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUserInput | commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUserInput | commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput> | postsCreateWithoutUserInput[] | postsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUserInput | postsCreateOrConnectWithoutUserInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUserInput | postsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: postsCreateManyUserInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUserInput | postsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUserInput | postsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type post_likesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput> | post_likesCreateWithoutUserInput[] | post_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutUserInput | post_likesCreateOrConnectWithoutUserInput[]
    upsert?: post_likesUpsertWithWhereUniqueWithoutUserInput | post_likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: post_likesCreateManyUserInputEnvelope
    set?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    disconnect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    delete?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    update?: post_likesUpdateWithWhereUniqueWithoutUserInput | post_likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: post_likesUpdateManyWithWhereWithoutUserInput | post_likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
  }

  export type comment_likesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput> | comment_likesCreateWithoutUserInput[] | comment_likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutUserInput | comment_likesCreateOrConnectWithoutUserInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutUserInput | comment_likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: comment_likesCreateManyUserInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutUserInput | comment_likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutUserInput | comment_likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
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

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutPostInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_likesCreateNestedManyWithoutPostInput = {
    create?: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput> | post_likesCreateWithoutPostInput[] | post_likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutPostInput | post_likesCreateOrConnectWithoutPostInput[]
    createMany?: post_likesCreateManyPostInputEnvelope
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
  }

  export type post_imagesCreateNestedManyWithoutPostInput = {
    create?: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput> | post_imagesCreateWithoutPostInput[] | post_imagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_imagesCreateOrConnectWithoutPostInput | post_imagesCreateOrConnectWithoutPostInput[]
    createMany?: post_imagesCreateManyPostInputEnvelope
    connect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_likesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput> | post_likesCreateWithoutPostInput[] | post_likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutPostInput | post_likesCreateOrConnectWithoutPostInput[]
    createMany?: post_likesCreateManyPostInputEnvelope
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
  }

  export type post_imagesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput> | post_imagesCreateWithoutPostInput[] | post_imagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_imagesCreateOrConnectWithoutPostInput | post_imagesCreateOrConnectWithoutPostInput[]
    createMany?: post_imagesCreateManyPostInputEnvelope
    connect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostInput | commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostInput | commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostInput | commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_likesUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput> | post_likesCreateWithoutPostInput[] | post_likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutPostInput | post_likesCreateOrConnectWithoutPostInput[]
    upsert?: post_likesUpsertWithWhereUniqueWithoutPostInput | post_likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_likesCreateManyPostInputEnvelope
    set?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    disconnect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    delete?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    update?: post_likesUpdateWithWhereUniqueWithoutPostInput | post_likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_likesUpdateManyWithWhereWithoutPostInput | post_likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
  }

  export type post_imagesUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput> | post_imagesCreateWithoutPostInput[] | post_imagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_imagesCreateOrConnectWithoutPostInput | post_imagesCreateOrConnectWithoutPostInput[]
    upsert?: post_imagesUpsertWithWhereUniqueWithoutPostInput | post_imagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_imagesCreateManyPostInputEnvelope
    set?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    disconnect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    delete?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    connect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    update?: post_imagesUpdateWithWhereUniqueWithoutPostInput | post_imagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_imagesUpdateManyWithWhereWithoutPostInput | post_imagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_imagesScalarWhereInput | post_imagesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput> | commentsCreateWithoutPostInput[] | commentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostInput | commentsCreateOrConnectWithoutPostInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostInput | commentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: commentsCreateManyPostInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostInput | commentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostInput | commentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_likesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput> | post_likesCreateWithoutPostInput[] | post_likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_likesCreateOrConnectWithoutPostInput | post_likesCreateOrConnectWithoutPostInput[]
    upsert?: post_likesUpsertWithWhereUniqueWithoutPostInput | post_likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_likesCreateManyPostInputEnvelope
    set?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    disconnect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    delete?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    connect?: post_likesWhereUniqueInput | post_likesWhereUniqueInput[]
    update?: post_likesUpdateWithWhereUniqueWithoutPostInput | post_likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_likesUpdateManyWithWhereWithoutPostInput | post_likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
  }

  export type post_imagesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput> | post_imagesCreateWithoutPostInput[] | post_imagesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_imagesCreateOrConnectWithoutPostInput | post_imagesCreateOrConnectWithoutPostInput[]
    upsert?: post_imagesUpsertWithWhereUniqueWithoutPostInput | post_imagesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_imagesCreateManyPostInputEnvelope
    set?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    disconnect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    delete?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    connect?: post_imagesWhereUniqueInput | post_imagesWhereUniqueInput[]
    update?: post_imagesUpdateWithWhereUniqueWithoutPostInput | post_imagesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_imagesUpdateManyWithWhereWithoutPostInput | post_imagesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_imagesScalarWhereInput | post_imagesScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutImagesInput = {
    create?: XOR<postsCreateWithoutImagesInput, postsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: postsCreateOrConnectWithoutImagesInput
    connect?: postsWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<postsCreateWithoutImagesInput, postsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: postsCreateOrConnectWithoutImagesInput
    upsert?: postsUpsertWithoutImagesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutImagesInput, postsUpdateWithoutImagesInput>, postsUncheckedUpdateWithoutImagesInput>
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type comment_likesCreateNestedManyWithoutCommentInput = {
    create?: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput> | comment_likesCreateWithoutCommentInput[] | comment_likesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentInput | comment_likesCreateOrConnectWithoutCommentInput[]
    createMany?: comment_likesCreateManyCommentInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type comment_likesUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput> | comment_likesCreateWithoutCommentInput[] | comment_likesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentInput | comment_likesCreateOrConnectWithoutCommentInput[]
    createMany?: comment_likesCreateManyCommentInputEnvelope
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
  }

  export type postsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type comment_likesUpdateManyWithoutCommentNestedInput = {
    create?: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput> | comment_likesCreateWithoutCommentInput[] | comment_likesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentInput | comment_likesCreateOrConnectWithoutCommentInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutCommentInput | comment_likesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: comment_likesCreateManyCommentInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutCommentInput | comment_likesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutCommentInput | comment_likesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type comment_likesUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput> | comment_likesCreateWithoutCommentInput[] | comment_likesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: comment_likesCreateOrConnectWithoutCommentInput | comment_likesCreateOrConnectWithoutCommentInput[]
    upsert?: comment_likesUpsertWithWhereUniqueWithoutCommentInput | comment_likesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: comment_likesCreateManyCommentInputEnvelope
    set?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    disconnect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    delete?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    connect?: comment_likesWhereUniqueInput | comment_likesWhereUniqueInput[]
    update?: comment_likesUpdateWithWhereUniqueWithoutCommentInput | comment_likesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: comment_likesUpdateManyWithWhereWithoutCommentInput | comment_likesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPost_likesInput = {
    create?: XOR<usersCreateWithoutPost_likesInput, usersUncheckedCreateWithoutPost_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPost_likesInput
    connect?: usersWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateOneRequiredWithoutPost_likesNestedInput = {
    create?: XOR<usersCreateWithoutPost_likesInput, usersUncheckedCreateWithoutPost_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPost_likesInput
    upsert?: usersUpsertWithoutPost_likesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPost_likesInput, usersUpdateWithoutPost_likesInput>, usersUncheckedUpdateWithoutPost_likesInput>
  }

  export type commentsCreateNestedOneWithoutLikesInput = {
    create?: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutLikesInput
    connect?: commentsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutComment_likesInput = {
    create?: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutComment_likesInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: commentsCreateOrConnectWithoutLikesInput
    upsert?: commentsUpsertWithoutLikesInput
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutLikesInput, commentsUpdateWithoutLikesInput>, commentsUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateOneRequiredWithoutComment_likesNestedInput = {
    create?: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    connectOrCreate?: usersCreateOrConnectWithoutComment_likesInput
    upsert?: usersUpsertWithoutComment_likesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutComment_likesInput, usersUpdateWithoutComment_likesInput>, usersUncheckedUpdateWithoutComment_likesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateWithoutAudit_logsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAudit_logsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAudit_logsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutNetworksInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutNetworksInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutNetworksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
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
    coingecko_id?: string | null
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
    coingecko_id?: string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: string | null
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
    coingecko_id?: string | null
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

  export type commentsCreateWithoutUserInput = {
    comment_id?: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    post: postsCreateNestedOneWithoutCommentsInput
    likes?: comment_likesCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutUserInput = {
    comment_id?: string
    post_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    likes?: comment_likesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutUserInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput>
  }

  export type commentsCreateManyUserInputEnvelope = {
    data: commentsCreateManyUserInput | commentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUserInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostInput
    likes?: post_likesCreateNestedManyWithoutPostInput
    images?: post_imagesCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutUserInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    likes?: post_likesUncheckedCreateNestedManyWithoutPostInput
    images?: post_imagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutUserInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput>
  }

  export type postsCreateManyUserInputEnvelope = {
    data: postsCreateManyUserInput | postsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type post_likesCreateWithoutUserInput = {
    post_like_id?: string
    created_at?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type post_likesUncheckedCreateWithoutUserInput = {
    post_like_id?: string
    post_id: string
    created_at?: Date | string
  }

  export type post_likesCreateOrConnectWithoutUserInput = {
    where: post_likesWhereUniqueInput
    create: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput>
  }

  export type post_likesCreateManyUserInputEnvelope = {
    data: post_likesCreateManyUserInput | post_likesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type comment_likesCreateWithoutUserInput = {
    comment_like_id?: string
    created_at?: Date | string
    comment: commentsCreateNestedOneWithoutLikesInput
  }

  export type comment_likesUncheckedCreateWithoutUserInput = {
    comment_like_id?: string
    comment_id: string
    created_at?: Date | string
  }

  export type comment_likesCreateOrConnectWithoutUserInput = {
    where: comment_likesWhereUniqueInput
    create: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput>
  }

  export type comment_likesCreateManyUserInputEnvelope = {
    data: comment_likesCreateManyUserInput | comment_likesCreateManyUserInput[]
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
    coingecko_id?: StringNullableFilter<"networks"> | string | null
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

  export type commentsUpsertWithWhereUniqueWithoutUserInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUserInput, commentsUncheckedUpdateWithoutUserInput>
    create: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUserInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUserInput, commentsUncheckedUpdateWithoutUserInput>
  }

  export type commentsUpdateManyWithWhereWithoutUserInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUserInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    post_id?: UuidFilter<"comments"> | string
    user_id?: UuidFilter<"comments"> | string
    content?: StringFilter<"comments"> | string
    created_at?: DateTimeFilter<"comments"> | Date | string
    updated_at?: DateTimeFilter<"comments"> | Date | string
    deleted_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type postsUpsertWithWhereUniqueWithoutUserInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUserInput, postsUncheckedUpdateWithoutUserInput>
    create: XOR<postsCreateWithoutUserInput, postsUncheckedCreateWithoutUserInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUserInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUserInput, postsUncheckedUpdateWithoutUserInput>
  }

  export type postsUpdateManyWithWhereWithoutUserInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUserInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    post_id?: UuidFilter<"posts"> | string
    user_id?: UuidFilter<"posts"> | string
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    created_at?: DateTimeFilter<"posts"> | Date | string
    updated_at?: DateTimeFilter<"posts"> | Date | string
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
  }

  export type post_likesUpsertWithWhereUniqueWithoutUserInput = {
    where: post_likesWhereUniqueInput
    update: XOR<post_likesUpdateWithoutUserInput, post_likesUncheckedUpdateWithoutUserInput>
    create: XOR<post_likesCreateWithoutUserInput, post_likesUncheckedCreateWithoutUserInput>
  }

  export type post_likesUpdateWithWhereUniqueWithoutUserInput = {
    where: post_likesWhereUniqueInput
    data: XOR<post_likesUpdateWithoutUserInput, post_likesUncheckedUpdateWithoutUserInput>
  }

  export type post_likesUpdateManyWithWhereWithoutUserInput = {
    where: post_likesScalarWhereInput
    data: XOR<post_likesUpdateManyMutationInput, post_likesUncheckedUpdateManyWithoutUserInput>
  }

  export type post_likesScalarWhereInput = {
    AND?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
    OR?: post_likesScalarWhereInput[]
    NOT?: post_likesScalarWhereInput | post_likesScalarWhereInput[]
    post_like_id?: UuidFilter<"post_likes"> | string
    post_id?: UuidFilter<"post_likes"> | string
    user_id?: UuidFilter<"post_likes"> | string
    created_at?: DateTimeFilter<"post_likes"> | Date | string
  }

  export type comment_likesUpsertWithWhereUniqueWithoutUserInput = {
    where: comment_likesWhereUniqueInput
    update: XOR<comment_likesUpdateWithoutUserInput, comment_likesUncheckedUpdateWithoutUserInput>
    create: XOR<comment_likesCreateWithoutUserInput, comment_likesUncheckedCreateWithoutUserInput>
  }

  export type comment_likesUpdateWithWhereUniqueWithoutUserInput = {
    where: comment_likesWhereUniqueInput
    data: XOR<comment_likesUpdateWithoutUserInput, comment_likesUncheckedUpdateWithoutUserInput>
  }

  export type comment_likesUpdateManyWithWhereWithoutUserInput = {
    where: comment_likesScalarWhereInput
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyWithoutUserInput>
  }

  export type comment_likesScalarWhereInput = {
    AND?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
    OR?: comment_likesScalarWhereInput[]
    NOT?: comment_likesScalarWhereInput | comment_likesScalarWhereInput[]
    comment_like_id?: UuidFilter<"comment_likes"> | string
    comment_id?: UuidFilter<"comment_likes"> | string
    user_id?: UuidFilter<"comment_likes"> | string
    created_at?: DateTimeFilter<"comment_likes"> | Date | string
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
    coingecko_id?: string | null
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
    coingecko_id?: string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutWalletsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutWalletsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutPostsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type commentsCreateWithoutPostInput = {
    comment_id?: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutCommentsInput
    likes?: comment_likesCreateNestedManyWithoutCommentInput
  }

  export type commentsUncheckedCreateWithoutPostInput = {
    comment_id?: string
    user_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    likes?: comment_likesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type commentsCreateOrConnectWithoutPostInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput>
  }

  export type commentsCreateManyPostInputEnvelope = {
    data: commentsCreateManyPostInput | commentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type post_likesCreateWithoutPostInput = {
    post_like_id?: string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutPost_likesInput
  }

  export type post_likesUncheckedCreateWithoutPostInput = {
    post_like_id?: string
    user_id: string
    created_at?: Date | string
  }

  export type post_likesCreateOrConnectWithoutPostInput = {
    where: post_likesWhereUniqueInput
    create: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput>
  }

  export type post_likesCreateManyPostInputEnvelope = {
    data: post_likesCreateManyPostInput | post_likesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type post_imagesCreateWithoutPostInput = {
    image_id?: string
    imageUrl: string
    created_at?: Date | string
  }

  export type post_imagesUncheckedCreateWithoutPostInput = {
    image_id?: string
    imageUrl: string
    created_at?: Date | string
  }

  export type post_imagesCreateOrConnectWithoutPostInput = {
    where: post_imagesWhereUniqueInput
    create: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput>
  }

  export type post_imagesCreateManyPostInputEnvelope = {
    data: post_imagesCreateManyPostInput | post_imagesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutPostInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPostInput, commentsUncheckedUpdateWithoutPostInput>
    create: XOR<commentsCreateWithoutPostInput, commentsUncheckedCreateWithoutPostInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPostInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPostInput, commentsUncheckedUpdateWithoutPostInput>
  }

  export type commentsUpdateManyWithWhereWithoutPostInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPostInput>
  }

  export type post_likesUpsertWithWhereUniqueWithoutPostInput = {
    where: post_likesWhereUniqueInput
    update: XOR<post_likesUpdateWithoutPostInput, post_likesUncheckedUpdateWithoutPostInput>
    create: XOR<post_likesCreateWithoutPostInput, post_likesUncheckedCreateWithoutPostInput>
  }

  export type post_likesUpdateWithWhereUniqueWithoutPostInput = {
    where: post_likesWhereUniqueInput
    data: XOR<post_likesUpdateWithoutPostInput, post_likesUncheckedUpdateWithoutPostInput>
  }

  export type post_likesUpdateManyWithWhereWithoutPostInput = {
    where: post_likesScalarWhereInput
    data: XOR<post_likesUpdateManyMutationInput, post_likesUncheckedUpdateManyWithoutPostInput>
  }

  export type post_imagesUpsertWithWhereUniqueWithoutPostInput = {
    where: post_imagesWhereUniqueInput
    update: XOR<post_imagesUpdateWithoutPostInput, post_imagesUncheckedUpdateWithoutPostInput>
    create: XOR<post_imagesCreateWithoutPostInput, post_imagesUncheckedCreateWithoutPostInput>
  }

  export type post_imagesUpdateWithWhereUniqueWithoutPostInput = {
    where: post_imagesWhereUniqueInput
    data: XOR<post_imagesUpdateWithoutPostInput, post_imagesUncheckedUpdateWithoutPostInput>
  }

  export type post_imagesUpdateManyWithWhereWithoutPostInput = {
    where: post_imagesScalarWhereInput
    data: XOR<post_imagesUpdateManyMutationInput, post_imagesUncheckedUpdateManyWithoutPostInput>
  }

  export type post_imagesScalarWhereInput = {
    AND?: post_imagesScalarWhereInput | post_imagesScalarWhereInput[]
    OR?: post_imagesScalarWhereInput[]
    NOT?: post_imagesScalarWhereInput | post_imagesScalarWhereInput[]
    image_id?: UuidFilter<"post_images"> | string
    post_id?: UuidFilter<"post_images"> | string
    imageUrl?: StringFilter<"post_images"> | string
    created_at?: DateTimeFilter<"post_images"> | Date | string
  }

  export type postsCreateWithoutImagesInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    likes?: post_likesCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutImagesInput = {
    post_id?: string
    user_id: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    likes?: post_likesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutImagesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutImagesInput, postsUncheckedCreateWithoutImagesInput>
  }

  export type postsUpsertWithoutImagesInput = {
    update: XOR<postsUpdateWithoutImagesInput, postsUncheckedUpdateWithoutImagesInput>
    create: XOR<postsCreateWithoutImagesInput, postsUncheckedCreateWithoutImagesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutImagesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutImagesInput, postsUncheckedUpdateWithoutImagesInput>
  }

  export type postsUpdateWithoutImagesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    likes?: post_likesUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutImagesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: post_likesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsCreateWithoutCommentsInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutPostsInput
    likes?: post_likesCreateNestedManyWithoutPostInput
    images?: post_imagesCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    post_id?: string
    user_id: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    likes?: post_likesUncheckedCreateNestedManyWithoutPostInput
    images?: post_imagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type comment_likesCreateWithoutCommentInput = {
    comment_like_id?: string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutComment_likesInput
  }

  export type comment_likesUncheckedCreateWithoutCommentInput = {
    comment_like_id?: string
    user_id: string
    created_at?: Date | string
  }

  export type comment_likesCreateOrConnectWithoutCommentInput = {
    where: comment_likesWhereUniqueInput
    create: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput>
  }

  export type comment_likesCreateManyCommentInputEnvelope = {
    data: comment_likesCreateManyCommentInput | comment_likesCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutPostsNestedInput
    likes?: post_likesUpdateManyWithoutPostNestedInput
    images?: post_imagesUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: post_likesUncheckedUpdateManyWithoutPostNestedInput
    images?: post_imagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type comment_likesUpsertWithWhereUniqueWithoutCommentInput = {
    where: comment_likesWhereUniqueInput
    update: XOR<comment_likesUpdateWithoutCommentInput, comment_likesUncheckedUpdateWithoutCommentInput>
    create: XOR<comment_likesCreateWithoutCommentInput, comment_likesUncheckedCreateWithoutCommentInput>
  }

  export type comment_likesUpdateWithWhereUniqueWithoutCommentInput = {
    where: comment_likesWhereUniqueInput
    data: XOR<comment_likesUpdateWithoutCommentInput, comment_likesUncheckedUpdateWithoutCommentInput>
  }

  export type comment_likesUpdateManyWithWhereWithoutCommentInput = {
    where: comment_likesScalarWhereInput
    data: XOR<comment_likesUpdateManyMutationInput, comment_likesUncheckedUpdateManyWithoutCommentInput>
  }

  export type postsCreateWithoutLikesInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutPostsInput
    comments?: commentsCreateNestedManyWithoutPostInput
    images?: post_imagesCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    post_id?: string
    user_id: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostInput
    images?: post_imagesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersCreateWithoutPost_likesInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPost_likesInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    comment_likes?: comment_likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPost_likesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPost_likesInput, usersUncheckedCreateWithoutPost_likesInput>
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutPostsNestedInput
    comments?: commentsUpdateManyWithoutPostNestedInput
    images?: post_imagesUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    images?: post_imagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type usersUpsertWithoutPost_likesInput = {
    update: XOR<usersUpdateWithoutPost_likesInput, usersUncheckedUpdateWithoutPost_likesInput>
    create: XOR<usersCreateWithoutPost_likesInput, usersUncheckedCreateWithoutPost_likesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPost_likesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPost_likesInput, usersUncheckedUpdateWithoutPost_likesInput>
  }

  export type usersUpdateWithoutPost_likesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPost_likesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    comment_likes?: comment_likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type commentsCreateWithoutLikesInput = {
    comment_id?: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    post: postsCreateNestedOneWithoutCommentsInput
    user: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutLikesInput = {
    comment_id?: string
    post_id: string
    user_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutLikesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
  }

  export type usersCreateWithoutComment_likesInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsCreateNestedManyWithoutUsersInput
    networks?: networksCreateNestedManyWithoutUsersInput
    wallets?: walletsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutUserInput
    posts?: postsCreateNestedManyWithoutUserInput
    post_likes?: post_likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutComment_likesInput = {
    user_id?: string
    username: string
    avatar?: string | null
    bio?: string | null
    email?: string | null
    password_hash: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    notiToken?: string | null
    biometricPublicKey?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUsersInput
    networks?: networksUncheckedCreateNestedManyWithoutUsersInput
    wallets?: walletsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutUserInput
    post_likes?: post_likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutComment_likesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
  }

  export type commentsUpsertWithoutLikesInput = {
    update: XOR<commentsUpdateWithoutLikesInput, commentsUncheckedUpdateWithoutLikesInput>
    create: XOR<commentsCreateWithoutLikesInput, commentsUncheckedCreateWithoutLikesInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutLikesInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutLikesInput, commentsUncheckedUpdateWithoutLikesInput>
  }

  export type commentsUpdateWithoutLikesInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutLikesInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutComment_likesInput = {
    update: XOR<usersUpdateWithoutComment_likesInput, usersUncheckedUpdateWithoutComment_likesInput>
    create: XOR<usersCreateWithoutComment_likesInput, usersUncheckedCreateWithoutComment_likesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutComment_likesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutComment_likesInput, usersUncheckedUpdateWithoutComment_likesInput>
  }

  export type usersUpdateWithoutComment_likesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUpdateManyWithoutUsersNestedInput
    networks?: networksUpdateManyWithoutUsersNestedInput
    wallets?: walletsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    posts?: postsUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutComment_likesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notiToken?: NullableStringFieldUpdateOperationsInput | string | null
    biometricPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUsersNestedInput
    networks?: networksUncheckedUpdateManyWithoutUsersNestedInput
    wallets?: walletsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutUserNestedInput
    post_likes?: post_likesUncheckedUpdateManyWithoutUserNestedInput
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
    coingecko_id?: string | null
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

  export type commentsCreateManyUserInput = {
    comment_id?: string
    post_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type postsCreateManyUserInput = {
    post_id?: string
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type post_likesCreateManyUserInput = {
    post_like_id?: string
    post_id: string
    created_at?: Date | string
  }

  export type comment_likesCreateManyUserInput = {
    comment_like_id?: string
    comment_id: string
    created_at?: Date | string
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    coingecko_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type commentsUpdateWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post?: postsUpdateOneRequiredWithoutCommentsNestedInput
    likes?: comment_likesUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: comment_likesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutUserInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostNestedInput
    likes?: post_likesUpdateManyWithoutPostNestedInput
    images?: post_imagesUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: post_likesUncheckedUpdateManyWithoutPostNestedInput
    images?: post_imagesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_likesUpdateWithoutUserInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type post_likesUncheckedUpdateWithoutUserInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_likesUncheckedUpdateManyWithoutUserInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesUpdateWithoutUserInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: commentsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type comment_likesUncheckedUpdateWithoutUserInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    comment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesUncheckedUpdateManyWithoutUserInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    comment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type commentsCreateManyPostInput = {
    comment_id?: string
    user_id: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type post_likesCreateManyPostInput = {
    post_like_id?: string
    user_id: string
    created_at?: Date | string
  }

  export type post_imagesCreateManyPostInput = {
    image_id?: string
    imageUrl: string
    created_at?: Date | string
  }

  export type commentsUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
    likes?: comment_likesUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: comment_likesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutPostInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_likesUpdateWithoutPostInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPost_likesNestedInput
  }

  export type post_likesUncheckedUpdateWithoutPostInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_likesUncheckedUpdateManyWithoutPostInput = {
    post_like_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_imagesUpdateWithoutPostInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_imagesUncheckedUpdateWithoutPostInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type post_imagesUncheckedUpdateManyWithoutPostInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesCreateManyCommentInput = {
    comment_like_id?: string
    user_id: string
    created_at?: Date | string
  }

  export type comment_likesUpdateWithoutCommentInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutComment_likesNestedInput
  }

  export type comment_likesUncheckedUpdateWithoutCommentInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comment_likesUncheckedUpdateManyWithoutCommentInput = {
    comment_like_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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