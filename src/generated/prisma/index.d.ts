
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model spec_categories
 * 
 */
export type spec_categories = $Result.DefaultSelection<Prisma.$spec_categoriesPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model product_categories
 * 
 */
export type product_categories = $Result.DefaultSelection<Prisma.$product_categoriesPayload>
/**
 * Model variable_configs
 * 
 */
export type variable_configs = $Result.DefaultSelection<Prisma.$variable_configsPayload>
/**
 * Model gallery_folders
 * 
 */
export type gallery_folders = $Result.DefaultSelection<Prisma.$gallery_foldersPayload>
/**
 * Model gallery_images
 * 
 */
export type gallery_images = $Result.DefaultSelection<Prisma.$gallery_imagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spec_categories`: Exposes CRUD operations for the **spec_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spec_categories
    * const spec_categories = await prisma.spec_categories.findMany()
    * ```
    */
  get spec_categories(): Prisma.spec_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_categories`: Exposes CRUD operations for the **product_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_categories
    * const product_categories = await prisma.product_categories.findMany()
    * ```
    */
  get product_categories(): Prisma.product_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variable_configs`: Exposes CRUD operations for the **variable_configs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variable_configs
    * const variable_configs = await prisma.variable_configs.findMany()
    * ```
    */
  get variable_configs(): Prisma.variable_configsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery_folders`: Exposes CRUD operations for the **gallery_folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gallery_folders
    * const gallery_folders = await prisma.gallery_folders.findMany()
    * ```
    */
  get gallery_folders(): Prisma.gallery_foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery_images`: Exposes CRUD operations for the **gallery_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gallery_images
    * const gallery_images = await prisma.gallery_images.findMany()
    * ```
    */
  get gallery_images(): Prisma.gallery_imagesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
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
    users: 'users',
    products: 'products',
    spec_categories: 'spec_categories',
    categories: 'categories',
    product_categories: 'product_categories',
    variable_configs: 'variable_configs',
    gallery_folders: 'gallery_folders',
    gallery_images: 'gallery_images'
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
      modelProps: "users" | "products" | "spec_categories" | "categories" | "product_categories" | "variable_configs" | "gallery_folders" | "gallery_images"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      spec_categories: {
        payload: Prisma.$spec_categoriesPayload<ExtArgs>
        fields: Prisma.spec_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spec_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spec_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          findFirst: {
            args: Prisma.spec_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spec_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          findMany: {
            args: Prisma.spec_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>[]
          }
          create: {
            args: Prisma.spec_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          createMany: {
            args: Prisma.spec_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spec_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>[]
          }
          delete: {
            args: Prisma.spec_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          update: {
            args: Prisma.spec_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.spec_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spec_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spec_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.spec_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spec_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Spec_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpec_categories>
          }
          groupBy: {
            args: Prisma.spec_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spec_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.spec_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Spec_categoriesCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      product_categories: {
        payload: Prisma.$product_categoriesPayload<ExtArgs>
        fields: Prisma.product_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          findFirst: {
            args: Prisma.product_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          findMany: {
            args: Prisma.product_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          create: {
            args: Prisma.product_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          createMany: {
            args: Prisma.product_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          delete: {
            args: Prisma.product_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          update: {
            args: Prisma.product_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.product_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.product_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Product_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_categories>
          }
          groupBy: {
            args: Prisma.product_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesCountAggregateOutputType> | number
          }
        }
      }
      variable_configs: {
        payload: Prisma.$variable_configsPayload<ExtArgs>
        fields: Prisma.variable_configsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variable_configsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variable_configsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          findFirst: {
            args: Prisma.variable_configsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variable_configsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          findMany: {
            args: Prisma.variable_configsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>[]
          }
          create: {
            args: Prisma.variable_configsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          createMany: {
            args: Prisma.variable_configsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.variable_configsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>[]
          }
          delete: {
            args: Prisma.variable_configsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          update: {
            args: Prisma.variable_configsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          deleteMany: {
            args: Prisma.variable_configsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variable_configsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.variable_configsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>[]
          }
          upsert: {
            args: Prisma.variable_configsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variable_configsPayload>
          }
          aggregate: {
            args: Prisma.Variable_configsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariable_configs>
          }
          groupBy: {
            args: Prisma.variable_configsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Variable_configsGroupByOutputType>[]
          }
          count: {
            args: Prisma.variable_configsCountArgs<ExtArgs>
            result: $Utils.Optional<Variable_configsCountAggregateOutputType> | number
          }
        }
      }
      gallery_folders: {
        payload: Prisma.$gallery_foldersPayload<ExtArgs>
        fields: Prisma.gallery_foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gallery_foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gallery_foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          findFirst: {
            args: Prisma.gallery_foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gallery_foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          findMany: {
            args: Prisma.gallery_foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>[]
          }
          create: {
            args: Prisma.gallery_foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          createMany: {
            args: Prisma.gallery_foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gallery_foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>[]
          }
          delete: {
            args: Prisma.gallery_foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          update: {
            args: Prisma.gallery_foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          deleteMany: {
            args: Prisma.gallery_foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gallery_foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gallery_foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>[]
          }
          upsert: {
            args: Prisma.gallery_foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_foldersPayload>
          }
          aggregate: {
            args: Prisma.Gallery_foldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery_folders>
          }
          groupBy: {
            args: Prisma.gallery_foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gallery_foldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.gallery_foldersCountArgs<ExtArgs>
            result: $Utils.Optional<Gallery_foldersCountAggregateOutputType> | number
          }
        }
      }
      gallery_images: {
        payload: Prisma.$gallery_imagesPayload<ExtArgs>
        fields: Prisma.gallery_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gallery_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gallery_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          findFirst: {
            args: Prisma.gallery_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gallery_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          findMany: {
            args: Prisma.gallery_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>[]
          }
          create: {
            args: Prisma.gallery_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          createMany: {
            args: Prisma.gallery_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gallery_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>[]
          }
          delete: {
            args: Prisma.gallery_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          update: {
            args: Prisma.gallery_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          deleteMany: {
            args: Prisma.gallery_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gallery_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gallery_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>[]
          }
          upsert: {
            args: Prisma.gallery_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallery_imagesPayload>
          }
          aggregate: {
            args: Prisma.Gallery_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery_images>
          }
          groupBy: {
            args: Prisma.gallery_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gallery_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gallery_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Gallery_imagesCountAggregateOutputType> | number
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
    users?: usersOmit
    products?: productsOmit
    spec_categories?: spec_categoriesOmit
    categories?: categoriesOmit
    product_categories?: product_categoriesOmit
    variable_configs?: variable_configsOmit
    gallery_folders?: gallery_foldersOmit
    gallery_images?: gallery_imagesOmit
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
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_categories: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | ProductsCountOutputTypeCountProduct_categoriesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
  }


  /**
   * Count Type Spec_categoriesCountOutputType
   */

  export type Spec_categoriesCountOutputType = {
    categories: number
  }

  export type Spec_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Spec_categoriesCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * Spec_categoriesCountOutputType without action
   */
  export type Spec_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spec_categoriesCountOutputType
     */
    select?: Spec_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Spec_categoriesCountOutputType without action
   */
  export type Spec_categoriesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    product_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | CategoriesCountOutputTypeCountProduct_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProduct_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
  }


  /**
   * Count Type Gallery_foldersCountOutputType
   */

  export type Gallery_foldersCountOutputType = {
    gallery_images: number
  }

  export type Gallery_foldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_images?: boolean | Gallery_foldersCountOutputTypeCountGallery_imagesArgs
  }

  // Custom InputTypes
  /**
   * Gallery_foldersCountOutputType without action
   */
  export type Gallery_foldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery_foldersCountOutputType
     */
    select?: Gallery_foldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Gallery_foldersCountOutputType without action
   */
  export type Gallery_foldersCountOutputTypeCountGallery_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallery_imagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
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
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
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
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly created_by: FieldRef<"users", 'Int'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly updated_by: FieldRef<"users", 'Int'>
    readonly status: FieldRef<"users", 'Int'>
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
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    image_url: string | null
    thickness: string | null
    gloss: string | null
    quv: string | null
    warranty: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    image_url: string | null
    thickness: string | null
    gloss: string | null
    quv: string | null
    warranty: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    code: number
    description: number
    image_url: number
    thickness: number
    gloss: number
    quv: number
    warranty: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    image_url?: true
    thickness?: true
    gloss?: true
    quv?: true
    warranty?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    image_url?: true
    thickness?: true
    gloss?: true
    quv?: true
    warranty?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    image_url?: true
    thickness?: true
    gloss?: true
    quv?: true
    warranty?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    code: string
    description: string | null
    image_url: string | null
    thickness: string | null
    gloss: string | null
    quv: string | null
    warranty: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    image_url?: boolean
    thickness?: boolean
    gloss?: boolean
    quv?: boolean
    warranty?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    product_categories?: boolean | products$product_categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    image_url?: boolean
    thickness?: boolean
    gloss?: boolean
    quv?: boolean
    warranty?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    image_url?: boolean
    thickness?: boolean
    gloss?: boolean
    quv?: boolean
    warranty?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    image_url?: boolean
    thickness?: boolean
    gloss?: boolean
    quv?: boolean
    warranty?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "image_url" | "thickness" | "gloss" | "quv" | "warranty" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | products$product_categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      product_categories: Prisma.$product_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string | null
      image_url: string | null
      thickness: string | null
      gloss: string | null
      quv: string | null
      warranty: string | null
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_categories<T extends products$product_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly code: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly image_url: FieldRef<"products", 'String'>
    readonly thickness: FieldRef<"products", 'String'>
    readonly gloss: FieldRef<"products", 'String'>
    readonly quv: FieldRef<"products", 'String'>
    readonly warranty: FieldRef<"products", 'String'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly created_by: FieldRef<"products", 'Int'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
    readonly updated_by: FieldRef<"products", 'Int'>
    readonly status: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_categories
   */
  export type products$product_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    cursor?: product_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model spec_categories
   */

  export type AggregateSpec_categories = {
    _count: Spec_categoriesCountAggregateOutputType | null
    _avg: Spec_categoriesAvgAggregateOutputType | null
    _sum: Spec_categoriesSumAggregateOutputType | null
    _min: Spec_categoriesMinAggregateOutputType | null
    _max: Spec_categoriesMaxAggregateOutputType | null
  }

  export type Spec_categoriesAvgAggregateOutputType = {
    id: number | null
    order: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Spec_categoriesSumAggregateOutputType = {
    id: number | null
    order: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Spec_categoriesMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    order: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Spec_categoriesMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    order: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Spec_categoriesCountAggregateOutputType = {
    id: number
    code: number
    description: number
    order: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type Spec_categoriesAvgAggregateInputType = {
    id?: true
    order?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Spec_categoriesSumAggregateInputType = {
    id?: true
    order?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Spec_categoriesMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    order?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Spec_categoriesMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    order?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Spec_categoriesCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    order?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type Spec_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spec_categories to aggregate.
     */
    where?: spec_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spec_categories to fetch.
     */
    orderBy?: spec_categoriesOrderByWithRelationInput | spec_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spec_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spec_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spec_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spec_categories
    **/
    _count?: true | Spec_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spec_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spec_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spec_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spec_categoriesMaxAggregateInputType
  }

  export type GetSpec_categoriesAggregateType<T extends Spec_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpec_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpec_categories[P]>
      : GetScalarType<T[P], AggregateSpec_categories[P]>
  }




  export type spec_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spec_categoriesWhereInput
    orderBy?: spec_categoriesOrderByWithAggregationInput | spec_categoriesOrderByWithAggregationInput[]
    by: Spec_categoriesScalarFieldEnum[] | Spec_categoriesScalarFieldEnum
    having?: spec_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spec_categoriesCountAggregateInputType | true
    _avg?: Spec_categoriesAvgAggregateInputType
    _sum?: Spec_categoriesSumAggregateInputType
    _min?: Spec_categoriesMinAggregateInputType
    _max?: Spec_categoriesMaxAggregateInputType
  }

  export type Spec_categoriesGroupByOutputType = {
    id: number
    code: string
    description: string | null
    order: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: Spec_categoriesCountAggregateOutputType | null
    _avg: Spec_categoriesAvgAggregateOutputType | null
    _sum: Spec_categoriesSumAggregateOutputType | null
    _min: Spec_categoriesMinAggregateOutputType | null
    _max: Spec_categoriesMaxAggregateOutputType | null
  }

  type GetSpec_categoriesGroupByPayload<T extends spec_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spec_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spec_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spec_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Spec_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type spec_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    order?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    categories?: boolean | spec_categories$categoriesArgs<ExtArgs>
    _count?: boolean | Spec_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spec_categories"]>

  export type spec_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    order?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["spec_categories"]>

  export type spec_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    order?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["spec_categories"]>

  export type spec_categoriesSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    order?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type spec_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "order" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["spec_categories"]>
  export type spec_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | spec_categories$categoriesArgs<ExtArgs>
    _count?: boolean | Spec_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type spec_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type spec_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $spec_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spec_categories"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string | null
      order: number | null
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["spec_categories"]>
    composites: {}
  }

  type spec_categoriesGetPayload<S extends boolean | null | undefined | spec_categoriesDefaultArgs> = $Result.GetResult<Prisma.$spec_categoriesPayload, S>

  type spec_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spec_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spec_categoriesCountAggregateInputType | true
    }

  export interface spec_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spec_categories'], meta: { name: 'spec_categories' } }
    /**
     * Find zero or one Spec_categories that matches the filter.
     * @param {spec_categoriesFindUniqueArgs} args - Arguments to find a Spec_categories
     * @example
     * // Get one Spec_categories
     * const spec_categories = await prisma.spec_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spec_categoriesFindUniqueArgs>(args: SelectSubset<T, spec_categoriesFindUniqueArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spec_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spec_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Spec_categories
     * @example
     * // Get one Spec_categories
     * const spec_categories = await prisma.spec_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spec_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, spec_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spec_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesFindFirstArgs} args - Arguments to find a Spec_categories
     * @example
     * // Get one Spec_categories
     * const spec_categories = await prisma.spec_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spec_categoriesFindFirstArgs>(args?: SelectSubset<T, spec_categoriesFindFirstArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spec_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesFindFirstOrThrowArgs} args - Arguments to find a Spec_categories
     * @example
     * // Get one Spec_categories
     * const spec_categories = await prisma.spec_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spec_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, spec_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spec_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spec_categories
     * const spec_categories = await prisma.spec_categories.findMany()
     * 
     * // Get first 10 Spec_categories
     * const spec_categories = await prisma.spec_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spec_categoriesWithIdOnly = await prisma.spec_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends spec_categoriesFindManyArgs>(args?: SelectSubset<T, spec_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spec_categories.
     * @param {spec_categoriesCreateArgs} args - Arguments to create a Spec_categories.
     * @example
     * // Create one Spec_categories
     * const Spec_categories = await prisma.spec_categories.create({
     *   data: {
     *     // ... data to create a Spec_categories
     *   }
     * })
     * 
     */
    create<T extends spec_categoriesCreateArgs>(args: SelectSubset<T, spec_categoriesCreateArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spec_categories.
     * @param {spec_categoriesCreateManyArgs} args - Arguments to create many Spec_categories.
     * @example
     * // Create many Spec_categories
     * const spec_categories = await prisma.spec_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spec_categoriesCreateManyArgs>(args?: SelectSubset<T, spec_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spec_categories and returns the data saved in the database.
     * @param {spec_categoriesCreateManyAndReturnArgs} args - Arguments to create many Spec_categories.
     * @example
     * // Create many Spec_categories
     * const spec_categories = await prisma.spec_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spec_categories and only return the `id`
     * const spec_categoriesWithIdOnly = await prisma.spec_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spec_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, spec_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spec_categories.
     * @param {spec_categoriesDeleteArgs} args - Arguments to delete one Spec_categories.
     * @example
     * // Delete one Spec_categories
     * const Spec_categories = await prisma.spec_categories.delete({
     *   where: {
     *     // ... filter to delete one Spec_categories
     *   }
     * })
     * 
     */
    delete<T extends spec_categoriesDeleteArgs>(args: SelectSubset<T, spec_categoriesDeleteArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spec_categories.
     * @param {spec_categoriesUpdateArgs} args - Arguments to update one Spec_categories.
     * @example
     * // Update one Spec_categories
     * const spec_categories = await prisma.spec_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spec_categoriesUpdateArgs>(args: SelectSubset<T, spec_categoriesUpdateArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spec_categories.
     * @param {spec_categoriesDeleteManyArgs} args - Arguments to filter Spec_categories to delete.
     * @example
     * // Delete a few Spec_categories
     * const { count } = await prisma.spec_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spec_categoriesDeleteManyArgs>(args?: SelectSubset<T, spec_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spec_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spec_categories
     * const spec_categories = await prisma.spec_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spec_categoriesUpdateManyArgs>(args: SelectSubset<T, spec_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spec_categories and returns the data updated in the database.
     * @param {spec_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Spec_categories.
     * @example
     * // Update many Spec_categories
     * const spec_categories = await prisma.spec_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spec_categories and only return the `id`
     * const spec_categoriesWithIdOnly = await prisma.spec_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends spec_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, spec_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spec_categories.
     * @param {spec_categoriesUpsertArgs} args - Arguments to update or create a Spec_categories.
     * @example
     * // Update or create a Spec_categories
     * const spec_categories = await prisma.spec_categories.upsert({
     *   create: {
     *     // ... data to create a Spec_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spec_categories we want to update
     *   }
     * })
     */
    upsert<T extends spec_categoriesUpsertArgs>(args: SelectSubset<T, spec_categoriesUpsertArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spec_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesCountArgs} args - Arguments to filter Spec_categories to count.
     * @example
     * // Count the number of Spec_categories
     * const count = await prisma.spec_categories.count({
     *   where: {
     *     // ... the filter for the Spec_categories we want to count
     *   }
     * })
    **/
    count<T extends spec_categoriesCountArgs>(
      args?: Subset<T, spec_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spec_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spec_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spec_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spec_categoriesAggregateArgs>(args: Subset<T, Spec_categoriesAggregateArgs>): Prisma.PrismaPromise<GetSpec_categoriesAggregateType<T>>

    /**
     * Group by Spec_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spec_categoriesGroupByArgs} args - Group by arguments.
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
      T extends spec_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spec_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: spec_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spec_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpec_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spec_categories model
   */
  readonly fields: spec_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spec_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spec_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends spec_categories$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, spec_categories$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the spec_categories model
   */
  interface spec_categoriesFieldRefs {
    readonly id: FieldRef<"spec_categories", 'Int'>
    readonly code: FieldRef<"spec_categories", 'String'>
    readonly description: FieldRef<"spec_categories", 'String'>
    readonly order: FieldRef<"spec_categories", 'Int'>
    readonly created_at: FieldRef<"spec_categories", 'DateTime'>
    readonly created_by: FieldRef<"spec_categories", 'Int'>
    readonly updated_at: FieldRef<"spec_categories", 'DateTime'>
    readonly updated_by: FieldRef<"spec_categories", 'Int'>
    readonly status: FieldRef<"spec_categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * spec_categories findUnique
   */
  export type spec_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which spec_categories to fetch.
     */
    where: spec_categoriesWhereUniqueInput
  }

  /**
   * spec_categories findUniqueOrThrow
   */
  export type spec_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which spec_categories to fetch.
     */
    where: spec_categoriesWhereUniqueInput
  }

  /**
   * spec_categories findFirst
   */
  export type spec_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which spec_categories to fetch.
     */
    where?: spec_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spec_categories to fetch.
     */
    orderBy?: spec_categoriesOrderByWithRelationInput | spec_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spec_categories.
     */
    cursor?: spec_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spec_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spec_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spec_categories.
     */
    distinct?: Spec_categoriesScalarFieldEnum | Spec_categoriesScalarFieldEnum[]
  }

  /**
   * spec_categories findFirstOrThrow
   */
  export type spec_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which spec_categories to fetch.
     */
    where?: spec_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spec_categories to fetch.
     */
    orderBy?: spec_categoriesOrderByWithRelationInput | spec_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spec_categories.
     */
    cursor?: spec_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spec_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spec_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spec_categories.
     */
    distinct?: Spec_categoriesScalarFieldEnum | Spec_categoriesScalarFieldEnum[]
  }

  /**
   * spec_categories findMany
   */
  export type spec_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which spec_categories to fetch.
     */
    where?: spec_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spec_categories to fetch.
     */
    orderBy?: spec_categoriesOrderByWithRelationInput | spec_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spec_categories.
     */
    cursor?: spec_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spec_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spec_categories.
     */
    skip?: number
    distinct?: Spec_categoriesScalarFieldEnum | Spec_categoriesScalarFieldEnum[]
  }

  /**
   * spec_categories create
   */
  export type spec_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a spec_categories.
     */
    data: XOR<spec_categoriesCreateInput, spec_categoriesUncheckedCreateInput>
  }

  /**
   * spec_categories createMany
   */
  export type spec_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spec_categories.
     */
    data: spec_categoriesCreateManyInput | spec_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spec_categories createManyAndReturn
   */
  export type spec_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many spec_categories.
     */
    data: spec_categoriesCreateManyInput | spec_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spec_categories update
   */
  export type spec_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a spec_categories.
     */
    data: XOR<spec_categoriesUpdateInput, spec_categoriesUncheckedUpdateInput>
    /**
     * Choose, which spec_categories to update.
     */
    where: spec_categoriesWhereUniqueInput
  }

  /**
   * spec_categories updateMany
   */
  export type spec_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spec_categories.
     */
    data: XOR<spec_categoriesUpdateManyMutationInput, spec_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which spec_categories to update
     */
    where?: spec_categoriesWhereInput
    /**
     * Limit how many spec_categories to update.
     */
    limit?: number
  }

  /**
   * spec_categories updateManyAndReturn
   */
  export type spec_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update spec_categories.
     */
    data: XOR<spec_categoriesUpdateManyMutationInput, spec_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which spec_categories to update
     */
    where?: spec_categoriesWhereInput
    /**
     * Limit how many spec_categories to update.
     */
    limit?: number
  }

  /**
   * spec_categories upsert
   */
  export type spec_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the spec_categories to update in case it exists.
     */
    where: spec_categoriesWhereUniqueInput
    /**
     * In case the spec_categories found by the `where` argument doesn't exist, create a new spec_categories with this data.
     */
    create: XOR<spec_categoriesCreateInput, spec_categoriesUncheckedCreateInput>
    /**
     * In case the spec_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spec_categoriesUpdateInput, spec_categoriesUncheckedUpdateInput>
  }

  /**
   * spec_categories delete
   */
  export type spec_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
    /**
     * Filter which spec_categories to delete.
     */
    where: spec_categoriesWhereUniqueInput
  }

  /**
   * spec_categories deleteMany
   */
  export type spec_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spec_categories to delete
     */
    where?: spec_categoriesWhereInput
    /**
     * Limit how many spec_categories to delete.
     */
    limit?: number
  }

  /**
   * spec_categories.categories
   */
  export type spec_categories$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * spec_categories without action
   */
  export type spec_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spec_categories
     */
    select?: spec_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spec_categories
     */
    omit?: spec_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spec_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    spec_category_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    spec_category_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    spec_category_id: number | null
    code: string | null
    description: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    spec_category_id: number | null
    code: string | null
    description: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    spec_category_id: number
    code: number
    description: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    spec_category_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    spec_category_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    spec_category_id?: true
    code?: true
    description?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    spec_category_id?: true
    code?: true
    description?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    spec_category_id?: true
    code?: true
    description?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    spec_category_id: number
    code: string
    description: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spec_category_id?: boolean
    code?: boolean
    description?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    product_categories?: boolean | categories$product_categoriesArgs<ExtArgs>
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spec_category_id?: boolean
    code?: boolean
    description?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spec_category_id?: boolean
    code?: boolean
    description?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    spec_category_id?: boolean
    code?: boolean
    description?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spec_category_id" | "code" | "description" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | categories$product_categoriesArgs<ExtArgs>
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spec_category?: boolean | spec_categoriesDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      product_categories: Prisma.$product_categoriesPayload<ExtArgs>[]
      spec_category: Prisma.$spec_categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spec_category_id: number
      code: string
      description: string | null
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_categories<T extends categories$product_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$product_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spec_category<T extends spec_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, spec_categoriesDefaultArgs<ExtArgs>>): Prisma__spec_categoriesClient<$Result.GetResult<Prisma.$spec_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly spec_category_id: FieldRef<"categories", 'Int'>
    readonly code: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly created_by: FieldRef<"categories", 'Int'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
    readonly updated_by: FieldRef<"categories", 'Int'>
    readonly status: FieldRef<"categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.product_categories
   */
  export type categories$product_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    cursor?: product_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model product_categories
   */

  export type AggregateProduct_categories = {
    _count: Product_categoriesCountAggregateOutputType | null
    _avg: Product_categoriesAvgAggregateOutputType | null
    _sum: Product_categoriesSumAggregateOutputType | null
    _min: Product_categoriesMinAggregateOutputType | null
    _max: Product_categoriesMaxAggregateOutputType | null
  }

  export type Product_categoriesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    category_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Product_categoriesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    category_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Product_categoriesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    category_id: number | null
    value_1: string | null
    value_2: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Product_categoriesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    category_id: number | null
    value_1: string | null
    value_2: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Product_categoriesCountAggregateOutputType = {
    id: number
    product_id: number
    category_id: number
    value_1: number
    value_2: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type Product_categoriesAvgAggregateInputType = {
    id?: true
    product_id?: true
    category_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Product_categoriesSumAggregateInputType = {
    id?: true
    product_id?: true
    category_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Product_categoriesMinAggregateInputType = {
    id?: true
    product_id?: true
    category_id?: true
    value_1?: true
    value_2?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Product_categoriesMaxAggregateInputType = {
    id?: true
    product_id?: true
    category_id?: true
    value_1?: true
    value_2?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Product_categoriesCountAggregateInputType = {
    id?: true
    product_id?: true
    category_id?: true
    value_1?: true
    value_2?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type Product_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categories to aggregate.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_categories
    **/
    _count?: true | Product_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_categoriesMaxAggregateInputType
  }

  export type GetProduct_categoriesAggregateType<T extends Product_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_categories[P]>
      : GetScalarType<T[P], AggregateProduct_categories[P]>
  }




  export type product_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithAggregationInput | product_categoriesOrderByWithAggregationInput[]
    by: Product_categoriesScalarFieldEnum[] | Product_categoriesScalarFieldEnum
    having?: product_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_categoriesCountAggregateInputType | true
    _avg?: Product_categoriesAvgAggregateInputType
    _sum?: Product_categoriesSumAggregateInputType
    _min?: Product_categoriesMinAggregateInputType
    _max?: Product_categoriesMaxAggregateInputType
  }

  export type Product_categoriesGroupByOutputType = {
    id: number
    product_id: number
    category_id: number
    value_1: string | null
    value_2: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: Product_categoriesCountAggregateOutputType | null
    _avg: Product_categoriesAvgAggregateOutputType | null
    _sum: Product_categoriesSumAggregateOutputType | null
    _min: Product_categoriesMinAggregateOutputType | null
    _max: Product_categoriesMaxAggregateOutputType | null
  }

  type GetProduct_categoriesGroupByPayload<T extends product_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type product_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    category_id?: boolean
    value_1?: boolean
    value_2?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    category_id?: boolean
    value_1?: boolean
    value_2?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    category_id?: boolean
    value_1?: boolean
    value_2?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectScalar = {
    id?: boolean
    product_id?: boolean
    category_id?: boolean
    value_1?: boolean
    value_2?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type product_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "category_id" | "value_1" | "value_2" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["product_categories"]>
  export type product_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type product_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type product_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $product_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      category_id: number
      value_1: string | null
      value_2: string | null
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["product_categories"]>
    composites: {}
  }

  type product_categoriesGetPayload<S extends boolean | null | undefined | product_categoriesDefaultArgs> = $Result.GetResult<Prisma.$product_categoriesPayload, S>

  type product_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_categoriesCountAggregateInputType | true
    }

  export interface product_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_categories'], meta: { name: 'product_categories' } }
    /**
     * Find zero or one Product_categories that matches the filter.
     * @param {product_categoriesFindUniqueArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_categoriesFindUniqueArgs>(args: SelectSubset<T, product_categoriesFindUniqueArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindFirstArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_categoriesFindFirstArgs>(args?: SelectSubset<T, product_categoriesFindFirstArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindFirstOrThrowArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_categories
     * const product_categories = await prisma.product_categories.findMany()
     * 
     * // Get first 10 Product_categories
     * const product_categories = await prisma.product_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_categoriesWithIdOnly = await prisma.product_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_categoriesFindManyArgs>(args?: SelectSubset<T, product_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_categories.
     * @param {product_categoriesCreateArgs} args - Arguments to create a Product_categories.
     * @example
     * // Create one Product_categories
     * const Product_categories = await prisma.product_categories.create({
     *   data: {
     *     // ... data to create a Product_categories
     *   }
     * })
     * 
     */
    create<T extends product_categoriesCreateArgs>(args: SelectSubset<T, product_categoriesCreateArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_categories.
     * @param {product_categoriesCreateManyArgs} args - Arguments to create many Product_categories.
     * @example
     * // Create many Product_categories
     * const product_categories = await prisma.product_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_categoriesCreateManyArgs>(args?: SelectSubset<T, product_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_categories and returns the data saved in the database.
     * @param {product_categoriesCreateManyAndReturnArgs} args - Arguments to create many Product_categories.
     * @example
     * // Create many Product_categories
     * const product_categories = await prisma.product_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_categories and only return the `id`
     * const product_categoriesWithIdOnly = await prisma.product_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_categories.
     * @param {product_categoriesDeleteArgs} args - Arguments to delete one Product_categories.
     * @example
     * // Delete one Product_categories
     * const Product_categories = await prisma.product_categories.delete({
     *   where: {
     *     // ... filter to delete one Product_categories
     *   }
     * })
     * 
     */
    delete<T extends product_categoriesDeleteArgs>(args: SelectSubset<T, product_categoriesDeleteArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_categories.
     * @param {product_categoriesUpdateArgs} args - Arguments to update one Product_categories.
     * @example
     * // Update one Product_categories
     * const product_categories = await prisma.product_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_categoriesUpdateArgs>(args: SelectSubset<T, product_categoriesUpdateArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_categories.
     * @param {product_categoriesDeleteManyArgs} args - Arguments to filter Product_categories to delete.
     * @example
     * // Delete a few Product_categories
     * const { count } = await prisma.product_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_categoriesDeleteManyArgs>(args?: SelectSubset<T, product_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_categories
     * const product_categories = await prisma.product_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_categoriesUpdateManyArgs>(args: SelectSubset<T, product_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categories and returns the data updated in the database.
     * @param {product_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Product_categories.
     * @example
     * // Update many Product_categories
     * const product_categories = await prisma.product_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_categories and only return the `id`
     * const product_categoriesWithIdOnly = await prisma.product_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends product_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_categories.
     * @param {product_categoriesUpsertArgs} args - Arguments to update or create a Product_categories.
     * @example
     * // Update or create a Product_categories
     * const product_categories = await prisma.product_categories.upsert({
     *   create: {
     *     // ... data to create a Product_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_categories we want to update
     *   }
     * })
     */
    upsert<T extends product_categoriesUpsertArgs>(args: SelectSubset<T, product_categoriesUpsertArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesCountArgs} args - Arguments to filter Product_categories to count.
     * @example
     * // Count the number of Product_categories
     * const count = await prisma.product_categories.count({
     *   where: {
     *     // ... the filter for the Product_categories we want to count
     *   }
     * })
    **/
    count<T extends product_categoriesCountArgs>(
      args?: Subset<T, product_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_categoriesAggregateArgs>(args: Subset<T, Product_categoriesAggregateArgs>): Prisma.PrismaPromise<GetProduct_categoriesAggregateType<T>>

    /**
     * Group by Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesGroupByArgs} args - Group by arguments.
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
      T extends product_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: product_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_categories model
   */
  readonly fields: product_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_categories model
   */
  interface product_categoriesFieldRefs {
    readonly id: FieldRef<"product_categories", 'Int'>
    readonly product_id: FieldRef<"product_categories", 'Int'>
    readonly category_id: FieldRef<"product_categories", 'Int'>
    readonly value_1: FieldRef<"product_categories", 'String'>
    readonly value_2: FieldRef<"product_categories", 'String'>
    readonly created_at: FieldRef<"product_categories", 'DateTime'>
    readonly created_by: FieldRef<"product_categories", 'Int'>
    readonly updated_at: FieldRef<"product_categories", 'DateTime'>
    readonly updated_by: FieldRef<"product_categories", 'Int'>
    readonly status: FieldRef<"product_categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_categories findUnique
   */
  export type product_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories findUniqueOrThrow
   */
  export type product_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories findFirst
   */
  export type product_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categories.
     */
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories findFirstOrThrow
   */
  export type product_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categories.
     */
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories findMany
   */
  export type product_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories create
   */
  export type product_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_categories.
     */
    data: XOR<product_categoriesCreateInput, product_categoriesUncheckedCreateInput>
  }

  /**
   * product_categories createMany
   */
  export type product_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_categories.
     */
    data: product_categoriesCreateManyInput | product_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categories createManyAndReturn
   */
  export type product_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many product_categories.
     */
    data: product_categoriesCreateManyInput | product_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_categories update
   */
  export type product_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_categories.
     */
    data: XOR<product_categoriesUpdateInput, product_categoriesUncheckedUpdateInput>
    /**
     * Choose, which product_categories to update.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories updateMany
   */
  export type product_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_categories.
     */
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which product_categories to update
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to update.
     */
    limit?: number
  }

  /**
   * product_categories updateManyAndReturn
   */
  export type product_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update product_categories.
     */
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which product_categories to update
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_categories upsert
   */
  export type product_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_categories to update in case it exists.
     */
    where: product_categoriesWhereUniqueInput
    /**
     * In case the product_categories found by the `where` argument doesn't exist, create a new product_categories with this data.
     */
    create: XOR<product_categoriesCreateInput, product_categoriesUncheckedCreateInput>
    /**
     * In case the product_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_categoriesUpdateInput, product_categoriesUncheckedUpdateInput>
  }

  /**
   * product_categories delete
   */
  export type product_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter which product_categories to delete.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories deleteMany
   */
  export type product_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categories to delete
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to delete.
     */
    limit?: number
  }

  /**
   * product_categories without action
   */
  export type product_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model variable_configs
   */

  export type AggregateVariable_configs = {
    _count: Variable_configsCountAggregateOutputType | null
    _avg: Variable_configsAvgAggregateOutputType | null
    _sum: Variable_configsSumAggregateOutputType | null
    _min: Variable_configsMinAggregateOutputType | null
    _max: Variable_configsMaxAggregateOutputType | null
  }

  export type Variable_configsAvgAggregateOutputType = {
    var_number: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Variable_configsSumAggregateOutputType = {
    var_number: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Variable_configsMinAggregateOutputType = {
    key: string | null
    description: string | null
    var_value: string | null
    var_number: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Variable_configsMaxAggregateOutputType = {
    key: string | null
    description: string | null
    var_value: string | null
    var_number: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Variable_configsCountAggregateOutputType = {
    key: number
    description: number
    var_value: number
    var_number: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type Variable_configsAvgAggregateInputType = {
    var_number?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Variable_configsSumAggregateInputType = {
    var_number?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Variable_configsMinAggregateInputType = {
    key?: true
    description?: true
    var_value?: true
    var_number?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Variable_configsMaxAggregateInputType = {
    key?: true
    description?: true
    var_value?: true
    var_number?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Variable_configsCountAggregateInputType = {
    key?: true
    description?: true
    var_value?: true
    var_number?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type Variable_configsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variable_configs to aggregate.
     */
    where?: variable_configsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variable_configs to fetch.
     */
    orderBy?: variable_configsOrderByWithRelationInput | variable_configsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variable_configsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variable_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variable_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variable_configs
    **/
    _count?: true | Variable_configsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Variable_configsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Variable_configsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Variable_configsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Variable_configsMaxAggregateInputType
  }

  export type GetVariable_configsAggregateType<T extends Variable_configsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariable_configs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariable_configs[P]>
      : GetScalarType<T[P], AggregateVariable_configs[P]>
  }




  export type variable_configsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variable_configsWhereInput
    orderBy?: variable_configsOrderByWithAggregationInput | variable_configsOrderByWithAggregationInput[]
    by: Variable_configsScalarFieldEnum[] | Variable_configsScalarFieldEnum
    having?: variable_configsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Variable_configsCountAggregateInputType | true
    _avg?: Variable_configsAvgAggregateInputType
    _sum?: Variable_configsSumAggregateInputType
    _min?: Variable_configsMinAggregateInputType
    _max?: Variable_configsMaxAggregateInputType
  }

  export type Variable_configsGroupByOutputType = {
    key: string
    description: string | null
    var_value: string | null
    var_number: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: Variable_configsCountAggregateOutputType | null
    _avg: Variable_configsAvgAggregateOutputType | null
    _sum: Variable_configsSumAggregateOutputType | null
    _min: Variable_configsMinAggregateOutputType | null
    _max: Variable_configsMaxAggregateOutputType | null
  }

  type GetVariable_configsGroupByPayload<T extends variable_configsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Variable_configsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Variable_configsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Variable_configsGroupByOutputType[P]>
            : GetScalarType<T[P], Variable_configsGroupByOutputType[P]>
        }
      >
    >


  export type variable_configsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    description?: boolean
    var_value?: boolean
    var_number?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["variable_configs"]>

  export type variable_configsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    description?: boolean
    var_value?: boolean
    var_number?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["variable_configs"]>

  export type variable_configsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    description?: boolean
    var_value?: boolean
    var_number?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["variable_configs"]>

  export type variable_configsSelectScalar = {
    key?: boolean
    description?: boolean
    var_value?: boolean
    var_number?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type variable_configsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "description" | "var_value" | "var_number" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["variable_configs"]>

  export type $variable_configsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variable_configs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      description: string | null
      var_value: string | null
      var_number: number | null
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["variable_configs"]>
    composites: {}
  }

  type variable_configsGetPayload<S extends boolean | null | undefined | variable_configsDefaultArgs> = $Result.GetResult<Prisma.$variable_configsPayload, S>

  type variable_configsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variable_configsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Variable_configsCountAggregateInputType | true
    }

  export interface variable_configsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variable_configs'], meta: { name: 'variable_configs' } }
    /**
     * Find zero or one Variable_configs that matches the filter.
     * @param {variable_configsFindUniqueArgs} args - Arguments to find a Variable_configs
     * @example
     * // Get one Variable_configs
     * const variable_configs = await prisma.variable_configs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variable_configsFindUniqueArgs>(args: SelectSubset<T, variable_configsFindUniqueArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variable_configs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variable_configsFindUniqueOrThrowArgs} args - Arguments to find a Variable_configs
     * @example
     * // Get one Variable_configs
     * const variable_configs = await prisma.variable_configs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variable_configsFindUniqueOrThrowArgs>(args: SelectSubset<T, variable_configsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsFindFirstArgs} args - Arguments to find a Variable_configs
     * @example
     * // Get one Variable_configs
     * const variable_configs = await prisma.variable_configs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variable_configsFindFirstArgs>(args?: SelectSubset<T, variable_configsFindFirstArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable_configs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsFindFirstOrThrowArgs} args - Arguments to find a Variable_configs
     * @example
     * // Get one Variable_configs
     * const variable_configs = await prisma.variable_configs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variable_configsFindFirstOrThrowArgs>(args?: SelectSubset<T, variable_configsFindFirstOrThrowArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variable_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variable_configs
     * const variable_configs = await prisma.variable_configs.findMany()
     * 
     * // Get first 10 Variable_configs
     * const variable_configs = await prisma.variable_configs.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const variable_configsWithKeyOnly = await prisma.variable_configs.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends variable_configsFindManyArgs>(args?: SelectSubset<T, variable_configsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variable_configs.
     * @param {variable_configsCreateArgs} args - Arguments to create a Variable_configs.
     * @example
     * // Create one Variable_configs
     * const Variable_configs = await prisma.variable_configs.create({
     *   data: {
     *     // ... data to create a Variable_configs
     *   }
     * })
     * 
     */
    create<T extends variable_configsCreateArgs>(args: SelectSubset<T, variable_configsCreateArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variable_configs.
     * @param {variable_configsCreateManyArgs} args - Arguments to create many Variable_configs.
     * @example
     * // Create many Variable_configs
     * const variable_configs = await prisma.variable_configs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variable_configsCreateManyArgs>(args?: SelectSubset<T, variable_configsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variable_configs and returns the data saved in the database.
     * @param {variable_configsCreateManyAndReturnArgs} args - Arguments to create many Variable_configs.
     * @example
     * // Create many Variable_configs
     * const variable_configs = await prisma.variable_configs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variable_configs and only return the `key`
     * const variable_configsWithKeyOnly = await prisma.variable_configs.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends variable_configsCreateManyAndReturnArgs>(args?: SelectSubset<T, variable_configsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variable_configs.
     * @param {variable_configsDeleteArgs} args - Arguments to delete one Variable_configs.
     * @example
     * // Delete one Variable_configs
     * const Variable_configs = await prisma.variable_configs.delete({
     *   where: {
     *     // ... filter to delete one Variable_configs
     *   }
     * })
     * 
     */
    delete<T extends variable_configsDeleteArgs>(args: SelectSubset<T, variable_configsDeleteArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variable_configs.
     * @param {variable_configsUpdateArgs} args - Arguments to update one Variable_configs.
     * @example
     * // Update one Variable_configs
     * const variable_configs = await prisma.variable_configs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variable_configsUpdateArgs>(args: SelectSubset<T, variable_configsUpdateArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variable_configs.
     * @param {variable_configsDeleteManyArgs} args - Arguments to filter Variable_configs to delete.
     * @example
     * // Delete a few Variable_configs
     * const { count } = await prisma.variable_configs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variable_configsDeleteManyArgs>(args?: SelectSubset<T, variable_configsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variable_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variable_configs
     * const variable_configs = await prisma.variable_configs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variable_configsUpdateManyArgs>(args: SelectSubset<T, variable_configsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variable_configs and returns the data updated in the database.
     * @param {variable_configsUpdateManyAndReturnArgs} args - Arguments to update many Variable_configs.
     * @example
     * // Update many Variable_configs
     * const variable_configs = await prisma.variable_configs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variable_configs and only return the `key`
     * const variable_configsWithKeyOnly = await prisma.variable_configs.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends variable_configsUpdateManyAndReturnArgs>(args: SelectSubset<T, variable_configsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variable_configs.
     * @param {variable_configsUpsertArgs} args - Arguments to update or create a Variable_configs.
     * @example
     * // Update or create a Variable_configs
     * const variable_configs = await prisma.variable_configs.upsert({
     *   create: {
     *     // ... data to create a Variable_configs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variable_configs we want to update
     *   }
     * })
     */
    upsert<T extends variable_configsUpsertArgs>(args: SelectSubset<T, variable_configsUpsertArgs<ExtArgs>>): Prisma__variable_configsClient<$Result.GetResult<Prisma.$variable_configsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variable_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsCountArgs} args - Arguments to filter Variable_configs to count.
     * @example
     * // Count the number of Variable_configs
     * const count = await prisma.variable_configs.count({
     *   where: {
     *     // ... the filter for the Variable_configs we want to count
     *   }
     * })
    **/
    count<T extends variable_configsCountArgs>(
      args?: Subset<T, variable_configsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Variable_configsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variable_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_configsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Variable_configsAggregateArgs>(args: Subset<T, Variable_configsAggregateArgs>): Prisma.PrismaPromise<GetVariable_configsAggregateType<T>>

    /**
     * Group by Variable_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variable_configsGroupByArgs} args - Group by arguments.
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
      T extends variable_configsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variable_configsGroupByArgs['orderBy'] }
        : { orderBy?: variable_configsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, variable_configsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariable_configsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variable_configs model
   */
  readonly fields: variable_configsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variable_configs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variable_configsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the variable_configs model
   */
  interface variable_configsFieldRefs {
    readonly key: FieldRef<"variable_configs", 'String'>
    readonly description: FieldRef<"variable_configs", 'String'>
    readonly var_value: FieldRef<"variable_configs", 'String'>
    readonly var_number: FieldRef<"variable_configs", 'Float'>
    readonly created_at: FieldRef<"variable_configs", 'DateTime'>
    readonly created_by: FieldRef<"variable_configs", 'Int'>
    readonly updated_at: FieldRef<"variable_configs", 'DateTime'>
    readonly updated_by: FieldRef<"variable_configs", 'Int'>
    readonly status: FieldRef<"variable_configs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * variable_configs findUnique
   */
  export type variable_configsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter, which variable_configs to fetch.
     */
    where: variable_configsWhereUniqueInput
  }

  /**
   * variable_configs findUniqueOrThrow
   */
  export type variable_configsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter, which variable_configs to fetch.
     */
    where: variable_configsWhereUniqueInput
  }

  /**
   * variable_configs findFirst
   */
  export type variable_configsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter, which variable_configs to fetch.
     */
    where?: variable_configsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variable_configs to fetch.
     */
    orderBy?: variable_configsOrderByWithRelationInput | variable_configsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variable_configs.
     */
    cursor?: variable_configsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variable_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variable_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variable_configs.
     */
    distinct?: Variable_configsScalarFieldEnum | Variable_configsScalarFieldEnum[]
  }

  /**
   * variable_configs findFirstOrThrow
   */
  export type variable_configsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter, which variable_configs to fetch.
     */
    where?: variable_configsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variable_configs to fetch.
     */
    orderBy?: variable_configsOrderByWithRelationInput | variable_configsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variable_configs.
     */
    cursor?: variable_configsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variable_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variable_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variable_configs.
     */
    distinct?: Variable_configsScalarFieldEnum | Variable_configsScalarFieldEnum[]
  }

  /**
   * variable_configs findMany
   */
  export type variable_configsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter, which variable_configs to fetch.
     */
    where?: variable_configsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variable_configs to fetch.
     */
    orderBy?: variable_configsOrderByWithRelationInput | variable_configsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variable_configs.
     */
    cursor?: variable_configsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variable_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variable_configs.
     */
    skip?: number
    distinct?: Variable_configsScalarFieldEnum | Variable_configsScalarFieldEnum[]
  }

  /**
   * variable_configs create
   */
  export type variable_configsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * The data needed to create a variable_configs.
     */
    data: XOR<variable_configsCreateInput, variable_configsUncheckedCreateInput>
  }

  /**
   * variable_configs createMany
   */
  export type variable_configsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variable_configs.
     */
    data: variable_configsCreateManyInput | variable_configsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variable_configs createManyAndReturn
   */
  export type variable_configsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * The data used to create many variable_configs.
     */
    data: variable_configsCreateManyInput | variable_configsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variable_configs update
   */
  export type variable_configsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * The data needed to update a variable_configs.
     */
    data: XOR<variable_configsUpdateInput, variable_configsUncheckedUpdateInput>
    /**
     * Choose, which variable_configs to update.
     */
    where: variable_configsWhereUniqueInput
  }

  /**
   * variable_configs updateMany
   */
  export type variable_configsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variable_configs.
     */
    data: XOR<variable_configsUpdateManyMutationInput, variable_configsUncheckedUpdateManyInput>
    /**
     * Filter which variable_configs to update
     */
    where?: variable_configsWhereInput
    /**
     * Limit how many variable_configs to update.
     */
    limit?: number
  }

  /**
   * variable_configs updateManyAndReturn
   */
  export type variable_configsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * The data used to update variable_configs.
     */
    data: XOR<variable_configsUpdateManyMutationInput, variable_configsUncheckedUpdateManyInput>
    /**
     * Filter which variable_configs to update
     */
    where?: variable_configsWhereInput
    /**
     * Limit how many variable_configs to update.
     */
    limit?: number
  }

  /**
   * variable_configs upsert
   */
  export type variable_configsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * The filter to search for the variable_configs to update in case it exists.
     */
    where: variable_configsWhereUniqueInput
    /**
     * In case the variable_configs found by the `where` argument doesn't exist, create a new variable_configs with this data.
     */
    create: XOR<variable_configsCreateInput, variable_configsUncheckedCreateInput>
    /**
     * In case the variable_configs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variable_configsUpdateInput, variable_configsUncheckedUpdateInput>
  }

  /**
   * variable_configs delete
   */
  export type variable_configsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
    /**
     * Filter which variable_configs to delete.
     */
    where: variable_configsWhereUniqueInput
  }

  /**
   * variable_configs deleteMany
   */
  export type variable_configsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variable_configs to delete
     */
    where?: variable_configsWhereInput
    /**
     * Limit how many variable_configs to delete.
     */
    limit?: number
  }

  /**
   * variable_configs without action
   */
  export type variable_configsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variable_configs
     */
    select?: variable_configsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variable_configs
     */
    omit?: variable_configsOmit<ExtArgs> | null
  }


  /**
   * Model gallery_folders
   */

  export type AggregateGallery_folders = {
    _count: Gallery_foldersCountAggregateOutputType | null
    _avg: Gallery_foldersAvgAggregateOutputType | null
    _sum: Gallery_foldersSumAggregateOutputType | null
    _min: Gallery_foldersMinAggregateOutputType | null
    _max: Gallery_foldersMaxAggregateOutputType | null
  }

  export type Gallery_foldersAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_foldersSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_foldersMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    cover_image: string | null
    is_visible: boolean | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_foldersMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    cover_image: string | null
    is_visible: boolean | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_foldersCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    cover_image: number
    is_visible: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type Gallery_foldersAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_foldersSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_foldersMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    cover_image?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_foldersMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    cover_image?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_foldersCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    cover_image?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type Gallery_foldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery_folders to aggregate.
     */
    where?: gallery_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_folders to fetch.
     */
    orderBy?: gallery_foldersOrderByWithRelationInput | gallery_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gallery_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gallery_folders
    **/
    _count?: true | Gallery_foldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gallery_foldersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gallery_foldersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gallery_foldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gallery_foldersMaxAggregateInputType
  }

  export type GetGallery_foldersAggregateType<T extends Gallery_foldersAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery_folders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery_folders[P]>
      : GetScalarType<T[P], AggregateGallery_folders[P]>
  }




  export type gallery_foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallery_foldersWhereInput
    orderBy?: gallery_foldersOrderByWithAggregationInput | gallery_foldersOrderByWithAggregationInput[]
    by: Gallery_foldersScalarFieldEnum[] | Gallery_foldersScalarFieldEnum
    having?: gallery_foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gallery_foldersCountAggregateInputType | true
    _avg?: Gallery_foldersAvgAggregateInputType
    _sum?: Gallery_foldersSumAggregateInputType
    _min?: Gallery_foldersMinAggregateInputType
    _max?: Gallery_foldersMaxAggregateInputType
  }

  export type Gallery_foldersGroupByOutputType = {
    id: number
    title: string
    slug: string | null
    cover_image: string | null
    is_visible: boolean
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: Gallery_foldersCountAggregateOutputType | null
    _avg: Gallery_foldersAvgAggregateOutputType | null
    _sum: Gallery_foldersSumAggregateOutputType | null
    _min: Gallery_foldersMinAggregateOutputType | null
    _max: Gallery_foldersMaxAggregateOutputType | null
  }

  type GetGallery_foldersGroupByPayload<T extends gallery_foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gallery_foldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gallery_foldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gallery_foldersGroupByOutputType[P]>
            : GetScalarType<T[P], Gallery_foldersGroupByOutputType[P]>
        }
      >
    >


  export type gallery_foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    cover_image?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    gallery_images?: boolean | gallery_folders$gallery_imagesArgs<ExtArgs>
    _count?: boolean | Gallery_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery_folders"]>

  export type gallery_foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    cover_image?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["gallery_folders"]>

  export type gallery_foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    cover_image?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }, ExtArgs["result"]["gallery_folders"]>

  export type gallery_foldersSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    cover_image?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type gallery_foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "cover_image" | "is_visible" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["gallery_folders"]>
  export type gallery_foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_images?: boolean | gallery_folders$gallery_imagesArgs<ExtArgs>
    _count?: boolean | Gallery_foldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gallery_foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gallery_foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gallery_foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gallery_folders"
    objects: {
      gallery_images: Prisma.$gallery_imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string | null
      cover_image: string | null
      is_visible: boolean
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["gallery_folders"]>
    composites: {}
  }

  type gallery_foldersGetPayload<S extends boolean | null | undefined | gallery_foldersDefaultArgs> = $Result.GetResult<Prisma.$gallery_foldersPayload, S>

  type gallery_foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gallery_foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gallery_foldersCountAggregateInputType | true
    }

  export interface gallery_foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gallery_folders'], meta: { name: 'gallery_folders' } }
    /**
     * Find zero or one Gallery_folders that matches the filter.
     * @param {gallery_foldersFindUniqueArgs} args - Arguments to find a Gallery_folders
     * @example
     * // Get one Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gallery_foldersFindUniqueArgs>(args: SelectSubset<T, gallery_foldersFindUniqueArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery_folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gallery_foldersFindUniqueOrThrowArgs} args - Arguments to find a Gallery_folders
     * @example
     * // Get one Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gallery_foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, gallery_foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersFindFirstArgs} args - Arguments to find a Gallery_folders
     * @example
     * // Get one Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gallery_foldersFindFirstArgs>(args?: SelectSubset<T, gallery_foldersFindFirstArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery_folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersFindFirstOrThrowArgs} args - Arguments to find a Gallery_folders
     * @example
     * // Get one Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gallery_foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, gallery_foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gallery_folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findMany()
     * 
     * // Get first 10 Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gallery_foldersWithIdOnly = await prisma.gallery_folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gallery_foldersFindManyArgs>(args?: SelectSubset<T, gallery_foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery_folders.
     * @param {gallery_foldersCreateArgs} args - Arguments to create a Gallery_folders.
     * @example
     * // Create one Gallery_folders
     * const Gallery_folders = await prisma.gallery_folders.create({
     *   data: {
     *     // ... data to create a Gallery_folders
     *   }
     * })
     * 
     */
    create<T extends gallery_foldersCreateArgs>(args: SelectSubset<T, gallery_foldersCreateArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gallery_folders.
     * @param {gallery_foldersCreateManyArgs} args - Arguments to create many Gallery_folders.
     * @example
     * // Create many Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gallery_foldersCreateManyArgs>(args?: SelectSubset<T, gallery_foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gallery_folders and returns the data saved in the database.
     * @param {gallery_foldersCreateManyAndReturnArgs} args - Arguments to create many Gallery_folders.
     * @example
     * // Create many Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gallery_folders and only return the `id`
     * const gallery_foldersWithIdOnly = await prisma.gallery_folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gallery_foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, gallery_foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery_folders.
     * @param {gallery_foldersDeleteArgs} args - Arguments to delete one Gallery_folders.
     * @example
     * // Delete one Gallery_folders
     * const Gallery_folders = await prisma.gallery_folders.delete({
     *   where: {
     *     // ... filter to delete one Gallery_folders
     *   }
     * })
     * 
     */
    delete<T extends gallery_foldersDeleteArgs>(args: SelectSubset<T, gallery_foldersDeleteArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery_folders.
     * @param {gallery_foldersUpdateArgs} args - Arguments to update one Gallery_folders.
     * @example
     * // Update one Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gallery_foldersUpdateArgs>(args: SelectSubset<T, gallery_foldersUpdateArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gallery_folders.
     * @param {gallery_foldersDeleteManyArgs} args - Arguments to filter Gallery_folders to delete.
     * @example
     * // Delete a few Gallery_folders
     * const { count } = await prisma.gallery_folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gallery_foldersDeleteManyArgs>(args?: SelectSubset<T, gallery_foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gallery_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gallery_foldersUpdateManyArgs>(args: SelectSubset<T, gallery_foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gallery_folders and returns the data updated in the database.
     * @param {gallery_foldersUpdateManyAndReturnArgs} args - Arguments to update many Gallery_folders.
     * @example
     * // Update many Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gallery_folders and only return the `id`
     * const gallery_foldersWithIdOnly = await prisma.gallery_folders.updateManyAndReturn({
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
    updateManyAndReturn<T extends gallery_foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, gallery_foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery_folders.
     * @param {gallery_foldersUpsertArgs} args - Arguments to update or create a Gallery_folders.
     * @example
     * // Update or create a Gallery_folders
     * const gallery_folders = await prisma.gallery_folders.upsert({
     *   create: {
     *     // ... data to create a Gallery_folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery_folders we want to update
     *   }
     * })
     */
    upsert<T extends gallery_foldersUpsertArgs>(args: SelectSubset<T, gallery_foldersUpsertArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gallery_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersCountArgs} args - Arguments to filter Gallery_folders to count.
     * @example
     * // Count the number of Gallery_folders
     * const count = await prisma.gallery_folders.count({
     *   where: {
     *     // ... the filter for the Gallery_folders we want to count
     *   }
     * })
    **/
    count<T extends gallery_foldersCountArgs>(
      args?: Subset<T, gallery_foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gallery_foldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gallery_foldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gallery_foldersAggregateArgs>(args: Subset<T, Gallery_foldersAggregateArgs>): Prisma.PrismaPromise<GetGallery_foldersAggregateType<T>>

    /**
     * Group by Gallery_folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_foldersGroupByArgs} args - Group by arguments.
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
      T extends gallery_foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gallery_foldersGroupByArgs['orderBy'] }
        : { orderBy?: gallery_foldersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gallery_foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGallery_foldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gallery_folders model
   */
  readonly fields: gallery_foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gallery_folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gallery_foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallery_images<T extends gallery_folders$gallery_imagesArgs<ExtArgs> = {}>(args?: Subset<T, gallery_folders$gallery_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the gallery_folders model
   */
  interface gallery_foldersFieldRefs {
    readonly id: FieldRef<"gallery_folders", 'Int'>
    readonly title: FieldRef<"gallery_folders", 'String'>
    readonly slug: FieldRef<"gallery_folders", 'String'>
    readonly cover_image: FieldRef<"gallery_folders", 'String'>
    readonly is_visible: FieldRef<"gallery_folders", 'Boolean'>
    readonly created_at: FieldRef<"gallery_folders", 'DateTime'>
    readonly created_by: FieldRef<"gallery_folders", 'Int'>
    readonly updated_at: FieldRef<"gallery_folders", 'DateTime'>
    readonly updated_by: FieldRef<"gallery_folders", 'Int'>
    readonly status: FieldRef<"gallery_folders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * gallery_folders findUnique
   */
  export type gallery_foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter, which gallery_folders to fetch.
     */
    where: gallery_foldersWhereUniqueInput
  }

  /**
   * gallery_folders findUniqueOrThrow
   */
  export type gallery_foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter, which gallery_folders to fetch.
     */
    where: gallery_foldersWhereUniqueInput
  }

  /**
   * gallery_folders findFirst
   */
  export type gallery_foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter, which gallery_folders to fetch.
     */
    where?: gallery_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_folders to fetch.
     */
    orderBy?: gallery_foldersOrderByWithRelationInput | gallery_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallery_folders.
     */
    cursor?: gallery_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallery_folders.
     */
    distinct?: Gallery_foldersScalarFieldEnum | Gallery_foldersScalarFieldEnum[]
  }

  /**
   * gallery_folders findFirstOrThrow
   */
  export type gallery_foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter, which gallery_folders to fetch.
     */
    where?: gallery_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_folders to fetch.
     */
    orderBy?: gallery_foldersOrderByWithRelationInput | gallery_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallery_folders.
     */
    cursor?: gallery_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallery_folders.
     */
    distinct?: Gallery_foldersScalarFieldEnum | Gallery_foldersScalarFieldEnum[]
  }

  /**
   * gallery_folders findMany
   */
  export type gallery_foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter, which gallery_folders to fetch.
     */
    where?: gallery_foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_folders to fetch.
     */
    orderBy?: gallery_foldersOrderByWithRelationInput | gallery_foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gallery_folders.
     */
    cursor?: gallery_foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_folders.
     */
    skip?: number
    distinct?: Gallery_foldersScalarFieldEnum | Gallery_foldersScalarFieldEnum[]
  }

  /**
   * gallery_folders create
   */
  export type gallery_foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a gallery_folders.
     */
    data: XOR<gallery_foldersCreateInput, gallery_foldersUncheckedCreateInput>
  }

  /**
   * gallery_folders createMany
   */
  export type gallery_foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gallery_folders.
     */
    data: gallery_foldersCreateManyInput | gallery_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gallery_folders createManyAndReturn
   */
  export type gallery_foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * The data used to create many gallery_folders.
     */
    data: gallery_foldersCreateManyInput | gallery_foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gallery_folders update
   */
  export type gallery_foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a gallery_folders.
     */
    data: XOR<gallery_foldersUpdateInput, gallery_foldersUncheckedUpdateInput>
    /**
     * Choose, which gallery_folders to update.
     */
    where: gallery_foldersWhereUniqueInput
  }

  /**
   * gallery_folders updateMany
   */
  export type gallery_foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gallery_folders.
     */
    data: XOR<gallery_foldersUpdateManyMutationInput, gallery_foldersUncheckedUpdateManyInput>
    /**
     * Filter which gallery_folders to update
     */
    where?: gallery_foldersWhereInput
    /**
     * Limit how many gallery_folders to update.
     */
    limit?: number
  }

  /**
   * gallery_folders updateManyAndReturn
   */
  export type gallery_foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * The data used to update gallery_folders.
     */
    data: XOR<gallery_foldersUpdateManyMutationInput, gallery_foldersUncheckedUpdateManyInput>
    /**
     * Filter which gallery_folders to update
     */
    where?: gallery_foldersWhereInput
    /**
     * Limit how many gallery_folders to update.
     */
    limit?: number
  }

  /**
   * gallery_folders upsert
   */
  export type gallery_foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the gallery_folders to update in case it exists.
     */
    where: gallery_foldersWhereUniqueInput
    /**
     * In case the gallery_folders found by the `where` argument doesn't exist, create a new gallery_folders with this data.
     */
    create: XOR<gallery_foldersCreateInput, gallery_foldersUncheckedCreateInput>
    /**
     * In case the gallery_folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gallery_foldersUpdateInput, gallery_foldersUncheckedUpdateInput>
  }

  /**
   * gallery_folders delete
   */
  export type gallery_foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
    /**
     * Filter which gallery_folders to delete.
     */
    where: gallery_foldersWhereUniqueInput
  }

  /**
   * gallery_folders deleteMany
   */
  export type gallery_foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery_folders to delete
     */
    where?: gallery_foldersWhereInput
    /**
     * Limit how many gallery_folders to delete.
     */
    limit?: number
  }

  /**
   * gallery_folders.gallery_images
   */
  export type gallery_folders$gallery_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    where?: gallery_imagesWhereInput
    orderBy?: gallery_imagesOrderByWithRelationInput | gallery_imagesOrderByWithRelationInput[]
    cursor?: gallery_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gallery_imagesScalarFieldEnum | Gallery_imagesScalarFieldEnum[]
  }

  /**
   * gallery_folders without action
   */
  export type gallery_foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_folders
     */
    select?: gallery_foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_folders
     */
    omit?: gallery_foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_foldersInclude<ExtArgs> | null
  }


  /**
   * Model gallery_images
   */

  export type AggregateGallery_images = {
    _count: Gallery_imagesCountAggregateOutputType | null
    _avg: Gallery_imagesAvgAggregateOutputType | null
    _sum: Gallery_imagesSumAggregateOutputType | null
    _min: Gallery_imagesMinAggregateOutputType | null
    _max: Gallery_imagesMaxAggregateOutputType | null
  }

  export type Gallery_imagesAvgAggregateOutputType = {
    id: number | null
    gallery_folder_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_imagesSumAggregateOutputType = {
    id: number | null
    gallery_folder_id: number | null
    created_by: number | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_imagesMinAggregateOutputType = {
    id: number | null
    gallery_folder_id: number | null
    image_url: string | null
    is_visible: boolean | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_imagesMaxAggregateOutputType = {
    id: number | null
    gallery_folder_id: number | null
    image_url: string | null
    is_visible: boolean | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
  }

  export type Gallery_imagesCountAggregateOutputType = {
    id: number
    gallery_folder_id: number
    image_url: number
    is_visible: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    status: number
    _all: number
  }


  export type Gallery_imagesAvgAggregateInputType = {
    id?: true
    gallery_folder_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_imagesSumAggregateInputType = {
    id?: true
    gallery_folder_id?: true
    created_by?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_imagesMinAggregateInputType = {
    id?: true
    gallery_folder_id?: true
    image_url?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_imagesMaxAggregateInputType = {
    id?: true
    gallery_folder_id?: true
    image_url?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
  }

  export type Gallery_imagesCountAggregateInputType = {
    id?: true
    gallery_folder_id?: true
    image_url?: true
    is_visible?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    status?: true
    _all?: true
  }

  export type Gallery_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery_images to aggregate.
     */
    where?: gallery_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_images to fetch.
     */
    orderBy?: gallery_imagesOrderByWithRelationInput | gallery_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gallery_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gallery_images
    **/
    _count?: true | Gallery_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gallery_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gallery_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gallery_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gallery_imagesMaxAggregateInputType
  }

  export type GetGallery_imagesAggregateType<T extends Gallery_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery_images[P]>
      : GetScalarType<T[P], AggregateGallery_images[P]>
  }




  export type gallery_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallery_imagesWhereInput
    orderBy?: gallery_imagesOrderByWithAggregationInput | gallery_imagesOrderByWithAggregationInput[]
    by: Gallery_imagesScalarFieldEnum[] | Gallery_imagesScalarFieldEnum
    having?: gallery_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gallery_imagesCountAggregateInputType | true
    _avg?: Gallery_imagesAvgAggregateInputType
    _sum?: Gallery_imagesSumAggregateInputType
    _min?: Gallery_imagesMinAggregateInputType
    _max?: Gallery_imagesMaxAggregateInputType
  }

  export type Gallery_imagesGroupByOutputType = {
    id: number
    gallery_folder_id: number
    image_url: string
    is_visible: boolean
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
    status: number | null
    _count: Gallery_imagesCountAggregateOutputType | null
    _avg: Gallery_imagesAvgAggregateOutputType | null
    _sum: Gallery_imagesSumAggregateOutputType | null
    _min: Gallery_imagesMinAggregateOutputType | null
    _max: Gallery_imagesMaxAggregateOutputType | null
  }

  type GetGallery_imagesGroupByPayload<T extends gallery_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gallery_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gallery_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gallery_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Gallery_imagesGroupByOutputType[P]>
        }
      >
    >


  export type gallery_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery_folder_id?: boolean
    image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery_images"]>

  export type gallery_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery_folder_id?: boolean
    image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery_images"]>

  export type gallery_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery_folder_id?: boolean
    image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery_images"]>

  export type gallery_imagesSelectScalar = {
    id?: boolean
    gallery_folder_id?: boolean
    image_url?: boolean
    is_visible?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    status?: boolean
  }

  export type gallery_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gallery_folder_id" | "image_url" | "is_visible" | "created_at" | "created_by" | "updated_at" | "updated_by" | "status", ExtArgs["result"]["gallery_images"]>
  export type gallery_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }
  export type gallery_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }
  export type gallery_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_folder?: boolean | gallery_foldersDefaultArgs<ExtArgs>
  }

  export type $gallery_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gallery_images"
    objects: {
      gallery_folder: Prisma.$gallery_foldersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gallery_folder_id: number
      image_url: string
      is_visible: boolean
      created_at: Date | null
      created_by: number | null
      updated_at: Date | null
      updated_by: number | null
      status: number | null
    }, ExtArgs["result"]["gallery_images"]>
    composites: {}
  }

  type gallery_imagesGetPayload<S extends boolean | null | undefined | gallery_imagesDefaultArgs> = $Result.GetResult<Prisma.$gallery_imagesPayload, S>

  type gallery_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gallery_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gallery_imagesCountAggregateInputType | true
    }

  export interface gallery_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gallery_images'], meta: { name: 'gallery_images' } }
    /**
     * Find zero or one Gallery_images that matches the filter.
     * @param {gallery_imagesFindUniqueArgs} args - Arguments to find a Gallery_images
     * @example
     * // Get one Gallery_images
     * const gallery_images = await prisma.gallery_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gallery_imagesFindUniqueArgs>(args: SelectSubset<T, gallery_imagesFindUniqueArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gallery_imagesFindUniqueOrThrowArgs} args - Arguments to find a Gallery_images
     * @example
     * // Get one Gallery_images
     * const gallery_images = await prisma.gallery_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gallery_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, gallery_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesFindFirstArgs} args - Arguments to find a Gallery_images
     * @example
     * // Get one Gallery_images
     * const gallery_images = await prisma.gallery_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gallery_imagesFindFirstArgs>(args?: SelectSubset<T, gallery_imagesFindFirstArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesFindFirstOrThrowArgs} args - Arguments to find a Gallery_images
     * @example
     * // Get one Gallery_images
     * const gallery_images = await prisma.gallery_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gallery_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, gallery_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gallery_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gallery_images
     * const gallery_images = await prisma.gallery_images.findMany()
     * 
     * // Get first 10 Gallery_images
     * const gallery_images = await prisma.gallery_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gallery_imagesWithIdOnly = await prisma.gallery_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gallery_imagesFindManyArgs>(args?: SelectSubset<T, gallery_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery_images.
     * @param {gallery_imagesCreateArgs} args - Arguments to create a Gallery_images.
     * @example
     * // Create one Gallery_images
     * const Gallery_images = await prisma.gallery_images.create({
     *   data: {
     *     // ... data to create a Gallery_images
     *   }
     * })
     * 
     */
    create<T extends gallery_imagesCreateArgs>(args: SelectSubset<T, gallery_imagesCreateArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gallery_images.
     * @param {gallery_imagesCreateManyArgs} args - Arguments to create many Gallery_images.
     * @example
     * // Create many Gallery_images
     * const gallery_images = await prisma.gallery_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gallery_imagesCreateManyArgs>(args?: SelectSubset<T, gallery_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gallery_images and returns the data saved in the database.
     * @param {gallery_imagesCreateManyAndReturnArgs} args - Arguments to create many Gallery_images.
     * @example
     * // Create many Gallery_images
     * const gallery_images = await prisma.gallery_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gallery_images and only return the `id`
     * const gallery_imagesWithIdOnly = await prisma.gallery_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gallery_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, gallery_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery_images.
     * @param {gallery_imagesDeleteArgs} args - Arguments to delete one Gallery_images.
     * @example
     * // Delete one Gallery_images
     * const Gallery_images = await prisma.gallery_images.delete({
     *   where: {
     *     // ... filter to delete one Gallery_images
     *   }
     * })
     * 
     */
    delete<T extends gallery_imagesDeleteArgs>(args: SelectSubset<T, gallery_imagesDeleteArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery_images.
     * @param {gallery_imagesUpdateArgs} args - Arguments to update one Gallery_images.
     * @example
     * // Update one Gallery_images
     * const gallery_images = await prisma.gallery_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gallery_imagesUpdateArgs>(args: SelectSubset<T, gallery_imagesUpdateArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gallery_images.
     * @param {gallery_imagesDeleteManyArgs} args - Arguments to filter Gallery_images to delete.
     * @example
     * // Delete a few Gallery_images
     * const { count } = await prisma.gallery_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gallery_imagesDeleteManyArgs>(args?: SelectSubset<T, gallery_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gallery_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gallery_images
     * const gallery_images = await prisma.gallery_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gallery_imagesUpdateManyArgs>(args: SelectSubset<T, gallery_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gallery_images and returns the data updated in the database.
     * @param {gallery_imagesUpdateManyAndReturnArgs} args - Arguments to update many Gallery_images.
     * @example
     * // Update many Gallery_images
     * const gallery_images = await prisma.gallery_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gallery_images and only return the `id`
     * const gallery_imagesWithIdOnly = await prisma.gallery_images.updateManyAndReturn({
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
    updateManyAndReturn<T extends gallery_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, gallery_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery_images.
     * @param {gallery_imagesUpsertArgs} args - Arguments to update or create a Gallery_images.
     * @example
     * // Update or create a Gallery_images
     * const gallery_images = await prisma.gallery_images.upsert({
     *   create: {
     *     // ... data to create a Gallery_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery_images we want to update
     *   }
     * })
     */
    upsert<T extends gallery_imagesUpsertArgs>(args: SelectSubset<T, gallery_imagesUpsertArgs<ExtArgs>>): Prisma__gallery_imagesClient<$Result.GetResult<Prisma.$gallery_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gallery_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesCountArgs} args - Arguments to filter Gallery_images to count.
     * @example
     * // Count the number of Gallery_images
     * const count = await prisma.gallery_images.count({
     *   where: {
     *     // ... the filter for the Gallery_images we want to count
     *   }
     * })
    **/
    count<T extends gallery_imagesCountArgs>(
      args?: Subset<T, gallery_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gallery_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gallery_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gallery_imagesAggregateArgs>(args: Subset<T, Gallery_imagesAggregateArgs>): Prisma.PrismaPromise<GetGallery_imagesAggregateType<T>>

    /**
     * Group by Gallery_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallery_imagesGroupByArgs} args - Group by arguments.
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
      T extends gallery_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gallery_imagesGroupByArgs['orderBy'] }
        : { orderBy?: gallery_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gallery_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGallery_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gallery_images model
   */
  readonly fields: gallery_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gallery_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gallery_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallery_folder<T extends gallery_foldersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gallery_foldersDefaultArgs<ExtArgs>>): Prisma__gallery_foldersClient<$Result.GetResult<Prisma.$gallery_foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the gallery_images model
   */
  interface gallery_imagesFieldRefs {
    readonly id: FieldRef<"gallery_images", 'Int'>
    readonly gallery_folder_id: FieldRef<"gallery_images", 'Int'>
    readonly image_url: FieldRef<"gallery_images", 'String'>
    readonly is_visible: FieldRef<"gallery_images", 'Boolean'>
    readonly created_at: FieldRef<"gallery_images", 'DateTime'>
    readonly created_by: FieldRef<"gallery_images", 'Int'>
    readonly updated_at: FieldRef<"gallery_images", 'DateTime'>
    readonly updated_by: FieldRef<"gallery_images", 'Int'>
    readonly status: FieldRef<"gallery_images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * gallery_images findUnique
   */
  export type gallery_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter, which gallery_images to fetch.
     */
    where: gallery_imagesWhereUniqueInput
  }

  /**
   * gallery_images findUniqueOrThrow
   */
  export type gallery_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter, which gallery_images to fetch.
     */
    where: gallery_imagesWhereUniqueInput
  }

  /**
   * gallery_images findFirst
   */
  export type gallery_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter, which gallery_images to fetch.
     */
    where?: gallery_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_images to fetch.
     */
    orderBy?: gallery_imagesOrderByWithRelationInput | gallery_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallery_images.
     */
    cursor?: gallery_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallery_images.
     */
    distinct?: Gallery_imagesScalarFieldEnum | Gallery_imagesScalarFieldEnum[]
  }

  /**
   * gallery_images findFirstOrThrow
   */
  export type gallery_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter, which gallery_images to fetch.
     */
    where?: gallery_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_images to fetch.
     */
    orderBy?: gallery_imagesOrderByWithRelationInput | gallery_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallery_images.
     */
    cursor?: gallery_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallery_images.
     */
    distinct?: Gallery_imagesScalarFieldEnum | Gallery_imagesScalarFieldEnum[]
  }

  /**
   * gallery_images findMany
   */
  export type gallery_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter, which gallery_images to fetch.
     */
    where?: gallery_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallery_images to fetch.
     */
    orderBy?: gallery_imagesOrderByWithRelationInput | gallery_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gallery_images.
     */
    cursor?: gallery_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallery_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallery_images.
     */
    skip?: number
    distinct?: Gallery_imagesScalarFieldEnum | Gallery_imagesScalarFieldEnum[]
  }

  /**
   * gallery_images create
   */
  export type gallery_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a gallery_images.
     */
    data: XOR<gallery_imagesCreateInput, gallery_imagesUncheckedCreateInput>
  }

  /**
   * gallery_images createMany
   */
  export type gallery_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gallery_images.
     */
    data: gallery_imagesCreateManyInput | gallery_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gallery_images createManyAndReturn
   */
  export type gallery_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many gallery_images.
     */
    data: gallery_imagesCreateManyInput | gallery_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gallery_images update
   */
  export type gallery_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a gallery_images.
     */
    data: XOR<gallery_imagesUpdateInput, gallery_imagesUncheckedUpdateInput>
    /**
     * Choose, which gallery_images to update.
     */
    where: gallery_imagesWhereUniqueInput
  }

  /**
   * gallery_images updateMany
   */
  export type gallery_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gallery_images.
     */
    data: XOR<gallery_imagesUpdateManyMutationInput, gallery_imagesUncheckedUpdateManyInput>
    /**
     * Filter which gallery_images to update
     */
    where?: gallery_imagesWhereInput
    /**
     * Limit how many gallery_images to update.
     */
    limit?: number
  }

  /**
   * gallery_images updateManyAndReturn
   */
  export type gallery_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * The data used to update gallery_images.
     */
    data: XOR<gallery_imagesUpdateManyMutationInput, gallery_imagesUncheckedUpdateManyInput>
    /**
     * Filter which gallery_images to update
     */
    where?: gallery_imagesWhereInput
    /**
     * Limit how many gallery_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * gallery_images upsert
   */
  export type gallery_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the gallery_images to update in case it exists.
     */
    where: gallery_imagesWhereUniqueInput
    /**
     * In case the gallery_images found by the `where` argument doesn't exist, create a new gallery_images with this data.
     */
    create: XOR<gallery_imagesCreateInput, gallery_imagesUncheckedCreateInput>
    /**
     * In case the gallery_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gallery_imagesUpdateInput, gallery_imagesUncheckedUpdateInput>
  }

  /**
   * gallery_images delete
   */
  export type gallery_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
    /**
     * Filter which gallery_images to delete.
     */
    where: gallery_imagesWhereUniqueInput
  }

  /**
   * gallery_images deleteMany
   */
  export type gallery_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery_images to delete
     */
    where?: gallery_imagesWhereInput
    /**
     * Limit how many gallery_images to delete.
     */
    limit?: number
  }

  /**
   * gallery_images without action
   */
  export type gallery_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery_images
     */
    select?: gallery_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery_images
     */
    omit?: gallery_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallery_imagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    image_url: 'image_url',
    thickness: 'thickness',
    gloss: 'gloss',
    quv: 'quv',
    warranty: 'warranty',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Spec_categoriesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    order: 'order',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type Spec_categoriesScalarFieldEnum = (typeof Spec_categoriesScalarFieldEnum)[keyof typeof Spec_categoriesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    spec_category_id: 'spec_category_id',
    code: 'code',
    description: 'description',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Product_categoriesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    category_id: 'category_id',
    value_1: 'value_1',
    value_2: 'value_2',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type Product_categoriesScalarFieldEnum = (typeof Product_categoriesScalarFieldEnum)[keyof typeof Product_categoriesScalarFieldEnum]


  export const Variable_configsScalarFieldEnum: {
    key: 'key',
    description: 'description',
    var_value: 'var_value',
    var_number: 'var_number',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type Variable_configsScalarFieldEnum = (typeof Variable_configsScalarFieldEnum)[keyof typeof Variable_configsScalarFieldEnum]


  export const Gallery_foldersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    cover_image: 'cover_image',
    is_visible: 'is_visible',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type Gallery_foldersScalarFieldEnum = (typeof Gallery_foldersScalarFieldEnum)[keyof typeof Gallery_foldersScalarFieldEnum]


  export const Gallery_imagesScalarFieldEnum: {
    id: 'id',
    gallery_folder_id: 'gallery_folder_id',
    image_url: 'image_url',
    is_visible: 'is_visible',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    status: 'status'
  };

  export type Gallery_imagesScalarFieldEnum = (typeof Gallery_imagesScalarFieldEnum)[keyof typeof Gallery_imagesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_by?: IntNullableFilter<"users"> | number | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_by?: IntNullableFilter<"users"> | number | null
    status?: IntNullableFilter<"users"> | number | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_by?: IntNullableFilter<"users"> | number | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_by?: IntNullableFilter<"users"> | number | null
    status?: IntNullableFilter<"users"> | number | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"users"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"users"> | number | null
    status?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    code?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    image_url?: StringNullableFilter<"products"> | string | null
    thickness?: StringNullableFilter<"products"> | string | null
    gloss?: StringNullableFilter<"products"> | string | null
    quv?: StringNullableFilter<"products"> | string | null
    warranty?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    created_by?: IntNullableFilter<"products"> | number | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_by?: IntNullableFilter<"products"> | number | null
    status?: IntNullableFilter<"products"> | number | null
    product_categories?: Product_categoriesListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    thickness?: SortOrderInput | SortOrder
    gloss?: SortOrderInput | SortOrder
    quv?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    product_categories?: product_categoriesOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    description?: StringNullableFilter<"products"> | string | null
    image_url?: StringNullableFilter<"products"> | string | null
    thickness?: StringNullableFilter<"products"> | string | null
    gloss?: StringNullableFilter<"products"> | string | null
    quv?: StringNullableFilter<"products"> | string | null
    warranty?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    created_by?: IntNullableFilter<"products"> | number | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_by?: IntNullableFilter<"products"> | number | null
    status?: IntNullableFilter<"products"> | number | null
    product_categories?: Product_categoriesListRelationFilter
  }, "id" | "code">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    thickness?: SortOrderInput | SortOrder
    gloss?: SortOrderInput | SortOrder
    quv?: SortOrderInput | SortOrder
    warranty?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    code?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"products"> | string | null
    thickness?: StringNullableWithAggregatesFilter<"products"> | string | null
    gloss?: StringNullableWithAggregatesFilter<"products"> | string | null
    quv?: StringNullableWithAggregatesFilter<"products"> | string | null
    warranty?: StringNullableWithAggregatesFilter<"products"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"products"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"products"> | number | null
    status?: IntNullableWithAggregatesFilter<"products"> | number | null
  }

  export type spec_categoriesWhereInput = {
    AND?: spec_categoriesWhereInput | spec_categoriesWhereInput[]
    OR?: spec_categoriesWhereInput[]
    NOT?: spec_categoriesWhereInput | spec_categoriesWhereInput[]
    id?: IntFilter<"spec_categories"> | number
    code?: StringFilter<"spec_categories"> | string
    description?: StringNullableFilter<"spec_categories"> | string | null
    order?: IntNullableFilter<"spec_categories"> | number | null
    created_at?: DateTimeNullableFilter<"spec_categories"> | Date | string | null
    created_by?: IntNullableFilter<"spec_categories"> | number | null
    updated_at?: DateTimeNullableFilter<"spec_categories"> | Date | string | null
    updated_by?: IntNullableFilter<"spec_categories"> | number | null
    status?: IntNullableFilter<"spec_categories"> | number | null
    categories?: CategoriesListRelationFilter
  }

  export type spec_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    categories?: categoriesOrderByRelationAggregateInput
  }

  export type spec_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: spec_categoriesWhereInput | spec_categoriesWhereInput[]
    OR?: spec_categoriesWhereInput[]
    NOT?: spec_categoriesWhereInput | spec_categoriesWhereInput[]
    description?: StringNullableFilter<"spec_categories"> | string | null
    order?: IntNullableFilter<"spec_categories"> | number | null
    created_at?: DateTimeNullableFilter<"spec_categories"> | Date | string | null
    created_by?: IntNullableFilter<"spec_categories"> | number | null
    updated_at?: DateTimeNullableFilter<"spec_categories"> | Date | string | null
    updated_by?: IntNullableFilter<"spec_categories"> | number | null
    status?: IntNullableFilter<"spec_categories"> | number | null
    categories?: CategoriesListRelationFilter
  }, "id" | "code">

  export type spec_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: spec_categoriesCountOrderByAggregateInput
    _avg?: spec_categoriesAvgOrderByAggregateInput
    _max?: spec_categoriesMaxOrderByAggregateInput
    _min?: spec_categoriesMinOrderByAggregateInput
    _sum?: spec_categoriesSumOrderByAggregateInput
  }

  export type spec_categoriesScalarWhereWithAggregatesInput = {
    AND?: spec_categoriesScalarWhereWithAggregatesInput | spec_categoriesScalarWhereWithAggregatesInput[]
    OR?: spec_categoriesScalarWhereWithAggregatesInput[]
    NOT?: spec_categoriesScalarWhereWithAggregatesInput | spec_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"spec_categories"> | number
    code?: StringWithAggregatesFilter<"spec_categories"> | string
    description?: StringNullableWithAggregatesFilter<"spec_categories"> | string | null
    order?: IntNullableWithAggregatesFilter<"spec_categories"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"spec_categories"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"spec_categories"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"spec_categories"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"spec_categories"> | number | null
    status?: IntNullableWithAggregatesFilter<"spec_categories"> | number | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    spec_category_id?: IntFilter<"categories"> | number
    code?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    created_by?: IntNullableFilter<"categories"> | number | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: IntNullableFilter<"categories"> | number | null
    status?: IntNullableFilter<"categories"> | number | null
    product_categories?: Product_categoriesListRelationFilter
    spec_category?: XOR<Spec_categoriesScalarRelationFilter, spec_categoriesWhereInput>
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    product_categories?: product_categoriesOrderByRelationAggregateInput
    spec_category?: spec_categoriesOrderByWithRelationInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    spec_category_id?: IntFilter<"categories"> | number
    description?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    created_by?: IntNullableFilter<"categories"> | number | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: IntNullableFilter<"categories"> | number | null
    status?: IntNullableFilter<"categories"> | number | null
    product_categories?: Product_categoriesListRelationFilter
    spec_category?: XOR<Spec_categoriesScalarRelationFilter, spec_categoriesWhereInput>
  }, "id" | "code">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    spec_category_id?: IntWithAggregatesFilter<"categories"> | number
    code?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"categories"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"categories"> | number | null
    status?: IntNullableWithAggregatesFilter<"categories"> | number | null
  }

  export type product_categoriesWhereInput = {
    AND?: product_categoriesWhereInput | product_categoriesWhereInput[]
    OR?: product_categoriesWhereInput[]
    NOT?: product_categoriesWhereInput | product_categoriesWhereInput[]
    id?: IntFilter<"product_categories"> | number
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
    value_1?: StringNullableFilter<"product_categories"> | string | null
    value_2?: StringNullableFilter<"product_categories"> | string | null
    created_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    created_by?: IntNullableFilter<"product_categories"> | number | null
    updated_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    updated_by?: IntNullableFilter<"product_categories"> | number | null
    status?: IntNullableFilter<"product_categories"> | number | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type product_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    value_1?: SortOrderInput | SortOrder
    value_2?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
  }

  export type product_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_categoriesWhereInput | product_categoriesWhereInput[]
    OR?: product_categoriesWhereInput[]
    NOT?: product_categoriesWhereInput | product_categoriesWhereInput[]
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
    value_1?: StringNullableFilter<"product_categories"> | string | null
    value_2?: StringNullableFilter<"product_categories"> | string | null
    created_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    created_by?: IntNullableFilter<"product_categories"> | number | null
    updated_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    updated_by?: IntNullableFilter<"product_categories"> | number | null
    status?: IntNullableFilter<"product_categories"> | number | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id">

  export type product_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    value_1?: SortOrderInput | SortOrder
    value_2?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: product_categoriesCountOrderByAggregateInput
    _avg?: product_categoriesAvgOrderByAggregateInput
    _max?: product_categoriesMaxOrderByAggregateInput
    _min?: product_categoriesMinOrderByAggregateInput
    _sum?: product_categoriesSumOrderByAggregateInput
  }

  export type product_categoriesScalarWhereWithAggregatesInput = {
    AND?: product_categoriesScalarWhereWithAggregatesInput | product_categoriesScalarWhereWithAggregatesInput[]
    OR?: product_categoriesScalarWhereWithAggregatesInput[]
    NOT?: product_categoriesScalarWhereWithAggregatesInput | product_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_categories"> | number
    product_id?: IntWithAggregatesFilter<"product_categories"> | number
    category_id?: IntWithAggregatesFilter<"product_categories"> | number
    value_1?: StringNullableWithAggregatesFilter<"product_categories"> | string | null
    value_2?: StringNullableWithAggregatesFilter<"product_categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"product_categories"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"product_categories"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"product_categories"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"product_categories"> | number | null
    status?: IntNullableWithAggregatesFilter<"product_categories"> | number | null
  }

  export type variable_configsWhereInput = {
    AND?: variable_configsWhereInput | variable_configsWhereInput[]
    OR?: variable_configsWhereInput[]
    NOT?: variable_configsWhereInput | variable_configsWhereInput[]
    key?: StringFilter<"variable_configs"> | string
    description?: StringNullableFilter<"variable_configs"> | string | null
    var_value?: StringNullableFilter<"variable_configs"> | string | null
    var_number?: FloatNullableFilter<"variable_configs"> | number | null
    created_at?: DateTimeNullableFilter<"variable_configs"> | Date | string | null
    created_by?: IntNullableFilter<"variable_configs"> | number | null
    updated_at?: DateTimeNullableFilter<"variable_configs"> | Date | string | null
    updated_by?: IntNullableFilter<"variable_configs"> | number | null
    status?: IntNullableFilter<"variable_configs"> | number | null
  }

  export type variable_configsOrderByWithRelationInput = {
    key?: SortOrder
    description?: SortOrderInput | SortOrder
    var_value?: SortOrderInput | SortOrder
    var_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
  }

  export type variable_configsWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: variable_configsWhereInput | variable_configsWhereInput[]
    OR?: variable_configsWhereInput[]
    NOT?: variable_configsWhereInput | variable_configsWhereInput[]
    description?: StringNullableFilter<"variable_configs"> | string | null
    var_value?: StringNullableFilter<"variable_configs"> | string | null
    var_number?: FloatNullableFilter<"variable_configs"> | number | null
    created_at?: DateTimeNullableFilter<"variable_configs"> | Date | string | null
    created_by?: IntNullableFilter<"variable_configs"> | number | null
    updated_at?: DateTimeNullableFilter<"variable_configs"> | Date | string | null
    updated_by?: IntNullableFilter<"variable_configs"> | number | null
    status?: IntNullableFilter<"variable_configs"> | number | null
  }, "key">

  export type variable_configsOrderByWithAggregationInput = {
    key?: SortOrder
    description?: SortOrderInput | SortOrder
    var_value?: SortOrderInput | SortOrder
    var_number?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: variable_configsCountOrderByAggregateInput
    _avg?: variable_configsAvgOrderByAggregateInput
    _max?: variable_configsMaxOrderByAggregateInput
    _min?: variable_configsMinOrderByAggregateInput
    _sum?: variable_configsSumOrderByAggregateInput
  }

  export type variable_configsScalarWhereWithAggregatesInput = {
    AND?: variable_configsScalarWhereWithAggregatesInput | variable_configsScalarWhereWithAggregatesInput[]
    OR?: variable_configsScalarWhereWithAggregatesInput[]
    NOT?: variable_configsScalarWhereWithAggregatesInput | variable_configsScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"variable_configs"> | string
    description?: StringNullableWithAggregatesFilter<"variable_configs"> | string | null
    var_value?: StringNullableWithAggregatesFilter<"variable_configs"> | string | null
    var_number?: FloatNullableWithAggregatesFilter<"variable_configs"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"variable_configs"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"variable_configs"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"variable_configs"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"variable_configs"> | number | null
    status?: IntNullableWithAggregatesFilter<"variable_configs"> | number | null
  }

  export type gallery_foldersWhereInput = {
    AND?: gallery_foldersWhereInput | gallery_foldersWhereInput[]
    OR?: gallery_foldersWhereInput[]
    NOT?: gallery_foldersWhereInput | gallery_foldersWhereInput[]
    id?: IntFilter<"gallery_folders"> | number
    title?: StringFilter<"gallery_folders"> | string
    slug?: StringNullableFilter<"gallery_folders"> | string | null
    cover_image?: StringNullableFilter<"gallery_folders"> | string | null
    is_visible?: BoolFilter<"gallery_folders"> | boolean
    created_at?: DateTimeNullableFilter<"gallery_folders"> | Date | string | null
    created_by?: IntNullableFilter<"gallery_folders"> | number | null
    updated_at?: DateTimeNullableFilter<"gallery_folders"> | Date | string | null
    updated_by?: IntNullableFilter<"gallery_folders"> | number | null
    status?: IntNullableFilter<"gallery_folders"> | number | null
    gallery_images?: Gallery_imagesListRelationFilter
  }

  export type gallery_foldersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gallery_images?: gallery_imagesOrderByRelationAggregateInput
  }

  export type gallery_foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gallery_foldersWhereInput | gallery_foldersWhereInput[]
    OR?: gallery_foldersWhereInput[]
    NOT?: gallery_foldersWhereInput | gallery_foldersWhereInput[]
    title?: StringFilter<"gallery_folders"> | string
    slug?: StringNullableFilter<"gallery_folders"> | string | null
    cover_image?: StringNullableFilter<"gallery_folders"> | string | null
    is_visible?: BoolFilter<"gallery_folders"> | boolean
    created_at?: DateTimeNullableFilter<"gallery_folders"> | Date | string | null
    created_by?: IntNullableFilter<"gallery_folders"> | number | null
    updated_at?: DateTimeNullableFilter<"gallery_folders"> | Date | string | null
    updated_by?: IntNullableFilter<"gallery_folders"> | number | null
    status?: IntNullableFilter<"gallery_folders"> | number | null
    gallery_images?: Gallery_imagesListRelationFilter
  }, "id">

  export type gallery_foldersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrderInput | SortOrder
    cover_image?: SortOrderInput | SortOrder
    is_visible?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: gallery_foldersCountOrderByAggregateInput
    _avg?: gallery_foldersAvgOrderByAggregateInput
    _max?: gallery_foldersMaxOrderByAggregateInput
    _min?: gallery_foldersMinOrderByAggregateInput
    _sum?: gallery_foldersSumOrderByAggregateInput
  }

  export type gallery_foldersScalarWhereWithAggregatesInput = {
    AND?: gallery_foldersScalarWhereWithAggregatesInput | gallery_foldersScalarWhereWithAggregatesInput[]
    OR?: gallery_foldersScalarWhereWithAggregatesInput[]
    NOT?: gallery_foldersScalarWhereWithAggregatesInput | gallery_foldersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gallery_folders"> | number
    title?: StringWithAggregatesFilter<"gallery_folders"> | string
    slug?: StringNullableWithAggregatesFilter<"gallery_folders"> | string | null
    cover_image?: StringNullableWithAggregatesFilter<"gallery_folders"> | string | null
    is_visible?: BoolWithAggregatesFilter<"gallery_folders"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"gallery_folders"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"gallery_folders"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"gallery_folders"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"gallery_folders"> | number | null
    status?: IntNullableWithAggregatesFilter<"gallery_folders"> | number | null
  }

  export type gallery_imagesWhereInput = {
    AND?: gallery_imagesWhereInput | gallery_imagesWhereInput[]
    OR?: gallery_imagesWhereInput[]
    NOT?: gallery_imagesWhereInput | gallery_imagesWhereInput[]
    id?: IntFilter<"gallery_images"> | number
    gallery_folder_id?: IntFilter<"gallery_images"> | number
    image_url?: StringFilter<"gallery_images"> | string
    is_visible?: BoolFilter<"gallery_images"> | boolean
    created_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    created_by?: IntNullableFilter<"gallery_images"> | number | null
    updated_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    updated_by?: IntNullableFilter<"gallery_images"> | number | null
    status?: IntNullableFilter<"gallery_images"> | number | null
    gallery_folder?: XOR<Gallery_foldersScalarRelationFilter, gallery_foldersWhereInput>
  }

  export type gallery_imagesOrderByWithRelationInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gallery_folder?: gallery_foldersOrderByWithRelationInput
  }

  export type gallery_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gallery_imagesWhereInput | gallery_imagesWhereInput[]
    OR?: gallery_imagesWhereInput[]
    NOT?: gallery_imagesWhereInput | gallery_imagesWhereInput[]
    gallery_folder_id?: IntFilter<"gallery_images"> | number
    image_url?: StringFilter<"gallery_images"> | string
    is_visible?: BoolFilter<"gallery_images"> | boolean
    created_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    created_by?: IntNullableFilter<"gallery_images"> | number | null
    updated_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    updated_by?: IntNullableFilter<"gallery_images"> | number | null
    status?: IntNullableFilter<"gallery_images"> | number | null
    gallery_folder?: XOR<Gallery_foldersScalarRelationFilter, gallery_foldersWhereInput>
  }, "id">

  export type gallery_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: gallery_imagesCountOrderByAggregateInput
    _avg?: gallery_imagesAvgOrderByAggregateInput
    _max?: gallery_imagesMaxOrderByAggregateInput
    _min?: gallery_imagesMinOrderByAggregateInput
    _sum?: gallery_imagesSumOrderByAggregateInput
  }

  export type gallery_imagesScalarWhereWithAggregatesInput = {
    AND?: gallery_imagesScalarWhereWithAggregatesInput | gallery_imagesScalarWhereWithAggregatesInput[]
    OR?: gallery_imagesScalarWhereWithAggregatesInput[]
    NOT?: gallery_imagesScalarWhereWithAggregatesInput | gallery_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gallery_images"> | number
    gallery_folder_id?: IntWithAggregatesFilter<"gallery_images"> | number
    image_url?: StringWithAggregatesFilter<"gallery_images"> | string
    is_visible?: BoolWithAggregatesFilter<"gallery_images"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"gallery_images"> | Date | string | null
    created_by?: IntNullableWithAggregatesFilter<"gallery_images"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"gallery_images"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"gallery_images"> | number | null
    status?: IntNullableWithAggregatesFilter<"gallery_images"> | number | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateInput = {
    code: string
    description?: string | null
    image_url?: string | null
    thickness?: string | null
    gloss?: string | null
    quv?: string | null
    warranty?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    code: string
    description?: string | null
    image_url?: string | null
    thickness?: string | null
    gloss?: string | null
    quv?: string | null
    warranty?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    code: string
    description?: string | null
    image_url?: string | null
    thickness?: string | null
    gloss?: string | null
    quv?: string | null
    warranty?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type productsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type spec_categoriesCreateInput = {
    code: string
    description?: string | null
    order?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    categories?: categoriesCreateNestedManyWithoutSpec_categoryInput
  }

  export type spec_categoriesUncheckedCreateInput = {
    id?: number
    code: string
    description?: string | null
    order?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    categories?: categoriesUncheckedCreateNestedManyWithoutSpec_categoryInput
  }

  export type spec_categoriesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: categoriesUpdateManyWithoutSpec_categoryNestedInput
  }

  export type spec_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: categoriesUncheckedUpdateManyWithoutSpec_categoryNestedInput
  }

  export type spec_categoriesCreateManyInput = {
    id?: number
    code: string
    description?: string | null
    order?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type spec_categoriesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type spec_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriesCreateInput = {
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesCreateNestedManyWithoutCategoriesInput
    spec_category: spec_categoriesCreateNestedOneWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    spec_category_id: number
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUpdateManyWithoutCategoriesNestedInput
    spec_category?: spec_categoriesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spec_category_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    spec_category_id: number
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type categoriesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spec_category_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesCreateInput = {
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    products: productsCreateNestedOneWithoutProduct_categoriesInput
    categories: categoriesCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateInput = {
    id?: number
    product_id: number
    category_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesUpdateInput = {
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesCreateManyInput = {
    id?: number
    product_id: number
    category_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesUpdateManyMutationInput = {
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variable_configsCreateInput = {
    key: string
    description?: string | null
    var_value?: string | null
    var_number?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type variable_configsUncheckedCreateInput = {
    key: string
    description?: string | null
    var_value?: string | null
    var_number?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type variable_configsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    var_value?: NullableStringFieldUpdateOperationsInput | string | null
    var_number?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variable_configsUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    var_value?: NullableStringFieldUpdateOperationsInput | string | null
    var_number?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variable_configsCreateManyInput = {
    key: string
    description?: string | null
    var_value?: string | null
    var_number?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type variable_configsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    var_value?: NullableStringFieldUpdateOperationsInput | string | null
    var_number?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variable_configsUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    var_value?: NullableStringFieldUpdateOperationsInput | string | null
    var_number?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_foldersCreateInput = {
    title: string
    slug?: string | null
    cover_image?: string | null
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    gallery_images?: gallery_imagesCreateNestedManyWithoutGallery_folderInput
  }

  export type gallery_foldersUncheckedCreateInput = {
    id?: number
    title: string
    slug?: string | null
    cover_image?: string | null
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    gallery_images?: gallery_imagesUncheckedCreateNestedManyWithoutGallery_folderInput
  }

  export type gallery_foldersUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    gallery_images?: gallery_imagesUpdateManyWithoutGallery_folderNestedInput
  }

  export type gallery_foldersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    gallery_images?: gallery_imagesUncheckedUpdateManyWithoutGallery_folderNestedInput
  }

  export type gallery_foldersCreateManyInput = {
    id?: number
    title: string
    slug?: string | null
    cover_image?: string | null
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_foldersUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_foldersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesCreateInput = {
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    gallery_folder: gallery_foldersCreateNestedOneWithoutGallery_imagesInput
  }

  export type gallery_imagesUncheckedCreateInput = {
    id?: number
    gallery_folder_id: number
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_imagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    gallery_folder?: gallery_foldersUpdateOneRequiredWithoutGallery_imagesNestedInput
  }

  export type gallery_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gallery_folder_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesCreateManyInput = {
    id?: number
    gallery_folder_id: number
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_imagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gallery_folder_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
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

  export type Product_categoriesListRelationFilter = {
    every?: product_categoriesWhereInput
    some?: product_categoriesWhereInput
    none?: product_categoriesWhereInput
  }

  export type product_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    thickness?: SortOrder
    gloss?: SortOrder
    quv?: SortOrder
    warranty?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    thickness?: SortOrder
    gloss?: SortOrder
    quv?: SortOrder
    warranty?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    thickness?: SortOrder
    gloss?: SortOrder
    quv?: SortOrder
    warranty?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
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

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type spec_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type spec_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type spec_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type spec_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type spec_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type Spec_categoriesScalarRelationFilter = {
    is?: spec_categoriesWhereInput
    isNot?: spec_categoriesWhereInput
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    spec_category_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type product_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    value_1?: SortOrder
    value_2?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type product_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type product_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    value_1?: SortOrder
    value_2?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type product_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    value_1?: SortOrder
    value_2?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type product_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
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

  export type variable_configsCountOrderByAggregateInput = {
    key?: SortOrder
    description?: SortOrder
    var_value?: SortOrder
    var_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type variable_configsAvgOrderByAggregateInput = {
    var_number?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type variable_configsMaxOrderByAggregateInput = {
    key?: SortOrder
    description?: SortOrder
    var_value?: SortOrder
    var_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type variable_configsMinOrderByAggregateInput = {
    key?: SortOrder
    description?: SortOrder
    var_value?: SortOrder
    var_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type variable_configsSumOrderByAggregateInput = {
    var_number?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Gallery_imagesListRelationFilter = {
    every?: gallery_imagesWhereInput
    some?: gallery_imagesWhereInput
    none?: gallery_imagesWhereInput
  }

  export type gallery_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gallery_foldersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cover_image?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_foldersAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cover_image?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_foldersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    cover_image?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_foldersSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Gallery_foldersScalarRelationFilter = {
    is?: gallery_foldersWhereInput
    isNot?: gallery_foldersWhereInput
  }

  export type gallery_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    image_url?: SortOrder
    is_visible?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type gallery_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    gallery_folder_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type product_categoriesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_categoriesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type product_categoriesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutProductsInput | product_categoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutProductsInput | product_categoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutProductsInput | product_categoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type product_categoriesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutProductsInput | product_categoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutProductsInput | product_categoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutProductsInput | product_categoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type categoriesCreateNestedManyWithoutSpec_categoryInput = {
    create?: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput> | categoriesCreateWithoutSpec_categoryInput[] | categoriesUncheckedCreateWithoutSpec_categoryInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSpec_categoryInput | categoriesCreateOrConnectWithoutSpec_categoryInput[]
    createMany?: categoriesCreateManySpec_categoryInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutSpec_categoryInput = {
    create?: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput> | categoriesCreateWithoutSpec_categoryInput[] | categoriesUncheckedCreateWithoutSpec_categoryInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSpec_categoryInput | categoriesCreateOrConnectWithoutSpec_categoryInput[]
    createMany?: categoriesCreateManySpec_categoryInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesUpdateManyWithoutSpec_categoryNestedInput = {
    create?: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput> | categoriesCreateWithoutSpec_categoryInput[] | categoriesUncheckedCreateWithoutSpec_categoryInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSpec_categoryInput | categoriesCreateOrConnectWithoutSpec_categoryInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutSpec_categoryInput | categoriesUpsertWithWhereUniqueWithoutSpec_categoryInput[]
    createMany?: categoriesCreateManySpec_categoryInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutSpec_categoryInput | categoriesUpdateWithWhereUniqueWithoutSpec_categoryInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutSpec_categoryInput | categoriesUpdateManyWithWhereWithoutSpec_categoryInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutSpec_categoryNestedInput = {
    create?: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput> | categoriesCreateWithoutSpec_categoryInput[] | categoriesUncheckedCreateWithoutSpec_categoryInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSpec_categoryInput | categoriesCreateOrConnectWithoutSpec_categoryInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutSpec_categoryInput | categoriesUpsertWithWhereUniqueWithoutSpec_categoryInput[]
    createMany?: categoriesCreateManySpec_categoryInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutSpec_categoryInput | categoriesUpdateWithWhereUniqueWithoutSpec_categoryInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutSpec_categoryInput | categoriesUpdateManyWithWhereWithoutSpec_categoryInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type product_categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type spec_categoriesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<spec_categoriesCreateWithoutCategoriesInput, spec_categoriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: spec_categoriesCreateOrConnectWithoutCategoriesInput
    connect?: spec_categoriesWhereUniqueInput
  }

  export type product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutCategoriesInput | product_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type spec_categoriesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<spec_categoriesCreateWithoutCategoriesInput, spec_categoriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: spec_categoriesCreateOrConnectWithoutCategoriesInput
    upsert?: spec_categoriesUpsertWithoutCategoriesInput
    connect?: spec_categoriesWhereUniqueInput
    update?: XOR<XOR<spec_categoriesUpdateToOneWithWhereWithoutCategoriesInput, spec_categoriesUpdateWithoutCategoriesInput>, spec_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutCategoriesInput | product_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_categoriesInput = {
    create?: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_categoriesInput
    connect?: productsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProduct_categoriesInput = {
    create?: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProduct_categoriesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_categoriesInput
    upsert?: productsUpsertWithoutProduct_categoriesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_categoriesInput, productsUpdateWithoutProduct_categoriesInput>, productsUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput
    upsert?: categoriesUpsertWithoutProduct_categoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput, categoriesUpdateWithoutProduct_categoriesInput>, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type gallery_imagesCreateNestedManyWithoutGallery_folderInput = {
    create?: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput> | gallery_imagesCreateWithoutGallery_folderInput[] | gallery_imagesUncheckedCreateWithoutGallery_folderInput[]
    connectOrCreate?: gallery_imagesCreateOrConnectWithoutGallery_folderInput | gallery_imagesCreateOrConnectWithoutGallery_folderInput[]
    createMany?: gallery_imagesCreateManyGallery_folderInputEnvelope
    connect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
  }

  export type gallery_imagesUncheckedCreateNestedManyWithoutGallery_folderInput = {
    create?: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput> | gallery_imagesCreateWithoutGallery_folderInput[] | gallery_imagesUncheckedCreateWithoutGallery_folderInput[]
    connectOrCreate?: gallery_imagesCreateOrConnectWithoutGallery_folderInput | gallery_imagesCreateOrConnectWithoutGallery_folderInput[]
    createMany?: gallery_imagesCreateManyGallery_folderInputEnvelope
    connect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type gallery_imagesUpdateManyWithoutGallery_folderNestedInput = {
    create?: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput> | gallery_imagesCreateWithoutGallery_folderInput[] | gallery_imagesUncheckedCreateWithoutGallery_folderInput[]
    connectOrCreate?: gallery_imagesCreateOrConnectWithoutGallery_folderInput | gallery_imagesCreateOrConnectWithoutGallery_folderInput[]
    upsert?: gallery_imagesUpsertWithWhereUniqueWithoutGallery_folderInput | gallery_imagesUpsertWithWhereUniqueWithoutGallery_folderInput[]
    createMany?: gallery_imagesCreateManyGallery_folderInputEnvelope
    set?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    disconnect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    delete?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    connect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    update?: gallery_imagesUpdateWithWhereUniqueWithoutGallery_folderInput | gallery_imagesUpdateWithWhereUniqueWithoutGallery_folderInput[]
    updateMany?: gallery_imagesUpdateManyWithWhereWithoutGallery_folderInput | gallery_imagesUpdateManyWithWhereWithoutGallery_folderInput[]
    deleteMany?: gallery_imagesScalarWhereInput | gallery_imagesScalarWhereInput[]
  }

  export type gallery_imagesUncheckedUpdateManyWithoutGallery_folderNestedInput = {
    create?: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput> | gallery_imagesCreateWithoutGallery_folderInput[] | gallery_imagesUncheckedCreateWithoutGallery_folderInput[]
    connectOrCreate?: gallery_imagesCreateOrConnectWithoutGallery_folderInput | gallery_imagesCreateOrConnectWithoutGallery_folderInput[]
    upsert?: gallery_imagesUpsertWithWhereUniqueWithoutGallery_folderInput | gallery_imagesUpsertWithWhereUniqueWithoutGallery_folderInput[]
    createMany?: gallery_imagesCreateManyGallery_folderInputEnvelope
    set?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    disconnect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    delete?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    connect?: gallery_imagesWhereUniqueInput | gallery_imagesWhereUniqueInput[]
    update?: gallery_imagesUpdateWithWhereUniqueWithoutGallery_folderInput | gallery_imagesUpdateWithWhereUniqueWithoutGallery_folderInput[]
    updateMany?: gallery_imagesUpdateManyWithWhereWithoutGallery_folderInput | gallery_imagesUpdateManyWithWhereWithoutGallery_folderInput[]
    deleteMany?: gallery_imagesScalarWhereInput | gallery_imagesScalarWhereInput[]
  }

  export type gallery_foldersCreateNestedOneWithoutGallery_imagesInput = {
    create?: XOR<gallery_foldersCreateWithoutGallery_imagesInput, gallery_foldersUncheckedCreateWithoutGallery_imagesInput>
    connectOrCreate?: gallery_foldersCreateOrConnectWithoutGallery_imagesInput
    connect?: gallery_foldersWhereUniqueInput
  }

  export type gallery_foldersUpdateOneRequiredWithoutGallery_imagesNestedInput = {
    create?: XOR<gallery_foldersCreateWithoutGallery_imagesInput, gallery_foldersUncheckedCreateWithoutGallery_imagesInput>
    connectOrCreate?: gallery_foldersCreateOrConnectWithoutGallery_imagesInput
    upsert?: gallery_foldersUpsertWithoutGallery_imagesInput
    connect?: gallery_foldersWhereUniqueInput
    update?: XOR<XOR<gallery_foldersUpdateToOneWithWhereWithoutGallery_imagesInput, gallery_foldersUpdateWithoutGallery_imagesInput>, gallery_foldersUncheckedUpdateWithoutGallery_imagesInput>
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

  export type product_categoriesCreateWithoutProductsInput = {
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    categories: categoriesCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    category_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesCreateOrConnectWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    create: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_categoriesCreateManyProductsInputEnvelope = {
    data: product_categoriesCreateManyProductsInput | product_categoriesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_categoriesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    update: XOR<product_categoriesUpdateWithoutProductsInput, product_categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_categoriesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    data: XOR<product_categoriesUpdateWithoutProductsInput, product_categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type product_categoriesUpdateManyWithWhereWithoutProductsInput = {
    where: product_categoriesScalarWhereInput
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_categoriesScalarWhereInput = {
    AND?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
    OR?: product_categoriesScalarWhereInput[]
    NOT?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
    id?: IntFilter<"product_categories"> | number
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
    value_1?: StringNullableFilter<"product_categories"> | string | null
    value_2?: StringNullableFilter<"product_categories"> | string | null
    created_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    created_by?: IntNullableFilter<"product_categories"> | number | null
    updated_at?: DateTimeNullableFilter<"product_categories"> | Date | string | null
    updated_by?: IntNullableFilter<"product_categories"> | number | null
    status?: IntNullableFilter<"product_categories"> | number | null
  }

  export type categoriesCreateWithoutSpec_categoryInput = {
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutSpec_categoryInput = {
    id?: number
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutSpec_categoryInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput>
  }

  export type categoriesCreateManySpec_categoryInputEnvelope = {
    data: categoriesCreateManySpec_categoryInput | categoriesCreateManySpec_categoryInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutSpec_categoryInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutSpec_categoryInput, categoriesUncheckedUpdateWithoutSpec_categoryInput>
    create: XOR<categoriesCreateWithoutSpec_categoryInput, categoriesUncheckedCreateWithoutSpec_categoryInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutSpec_categoryInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutSpec_categoryInput, categoriesUncheckedUpdateWithoutSpec_categoryInput>
  }

  export type categoriesUpdateManyWithWhereWithoutSpec_categoryInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutSpec_categoryInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    id?: IntFilter<"categories"> | number
    spec_category_id?: IntFilter<"categories"> | number
    code?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    created_by?: IntNullableFilter<"categories"> | number | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_by?: IntNullableFilter<"categories"> | number | null
    status?: IntNullableFilter<"categories"> | number | null
  }

  export type product_categoriesCreateWithoutCategoriesInput = {
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    products: productsCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    product_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    create: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type product_categoriesCreateManyCategoriesInputEnvelope = {
    data: product_categoriesCreateManyCategoriesInput | product_categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type spec_categoriesCreateWithoutCategoriesInput = {
    code: string
    description?: string | null
    order?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type spec_categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    code: string
    description?: string | null
    order?: number | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type spec_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: spec_categoriesWhereUniqueInput
    create: XOR<spec_categoriesCreateWithoutCategoriesInput, spec_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    update: XOR<product_categoriesUpdateWithoutCategoriesInput, product_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    data: XOR<product_categoriesUpdateWithoutCategoriesInput, product_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type product_categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: product_categoriesScalarWhereInput
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type spec_categoriesUpsertWithoutCategoriesInput = {
    update: XOR<spec_categoriesUpdateWithoutCategoriesInput, spec_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<spec_categoriesCreateWithoutCategoriesInput, spec_categoriesUncheckedCreateWithoutCategoriesInput>
    where?: spec_categoriesWhereInput
  }

  export type spec_categoriesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: spec_categoriesWhereInput
    data: XOR<spec_categoriesUpdateWithoutCategoriesInput, spec_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type spec_categoriesUpdateWithoutCategoriesInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type spec_categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateWithoutProduct_categoriesInput = {
    code: string
    description?: string | null
    image_url?: string | null
    thickness?: string | null
    gloss?: string | null
    quv?: string | null
    warranty?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type productsUncheckedCreateWithoutProduct_categoriesInput = {
    id?: number
    code: string
    description?: string | null
    image_url?: string | null
    thickness?: string | null
    gloss?: string | null
    quv?: string | null
    warranty?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type productsCreateOrConnectWithoutProduct_categoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
  }

  export type categoriesCreateWithoutProduct_categoriesInput = {
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
    spec_category: spec_categoriesCreateNestedOneWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutProduct_categoriesInput = {
    id?: number
    spec_category_id: number
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type categoriesCreateOrConnectWithoutProduct_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
  }

  export type productsUpsertWithoutProduct_categoriesInput = {
    update: XOR<productsUpdateWithoutProduct_categoriesInput, productsUncheckedUpdateWithoutProduct_categoriesInput>
    create: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_categoriesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_categoriesInput, productsUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type productsUpdateWithoutProduct_categoriesInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsUncheckedUpdateWithoutProduct_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    thickness?: NullableStringFieldUpdateOperationsInput | string | null
    gloss?: NullableStringFieldUpdateOperationsInput | string | null
    quv?: NullableStringFieldUpdateOperationsInput | string | null
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriesUpsertWithoutProduct_categoriesInput = {
    update: XOR<categoriesUpdateWithoutProduct_categoriesInput, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
    create: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProduct_categoriesInput, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type categoriesUpdateWithoutProduct_categoriesInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    spec_category?: spec_categoriesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutProduct_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    spec_category_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesCreateWithoutGallery_folderInput = {
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_imagesUncheckedCreateWithoutGallery_folderInput = {
    id?: number
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_imagesCreateOrConnectWithoutGallery_folderInput = {
    where: gallery_imagesWhereUniqueInput
    create: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput>
  }

  export type gallery_imagesCreateManyGallery_folderInputEnvelope = {
    data: gallery_imagesCreateManyGallery_folderInput | gallery_imagesCreateManyGallery_folderInput[]
    skipDuplicates?: boolean
  }

  export type gallery_imagesUpsertWithWhereUniqueWithoutGallery_folderInput = {
    where: gallery_imagesWhereUniqueInput
    update: XOR<gallery_imagesUpdateWithoutGallery_folderInput, gallery_imagesUncheckedUpdateWithoutGallery_folderInput>
    create: XOR<gallery_imagesCreateWithoutGallery_folderInput, gallery_imagesUncheckedCreateWithoutGallery_folderInput>
  }

  export type gallery_imagesUpdateWithWhereUniqueWithoutGallery_folderInput = {
    where: gallery_imagesWhereUniqueInput
    data: XOR<gallery_imagesUpdateWithoutGallery_folderInput, gallery_imagesUncheckedUpdateWithoutGallery_folderInput>
  }

  export type gallery_imagesUpdateManyWithWhereWithoutGallery_folderInput = {
    where: gallery_imagesScalarWhereInput
    data: XOR<gallery_imagesUpdateManyMutationInput, gallery_imagesUncheckedUpdateManyWithoutGallery_folderInput>
  }

  export type gallery_imagesScalarWhereInput = {
    AND?: gallery_imagesScalarWhereInput | gallery_imagesScalarWhereInput[]
    OR?: gallery_imagesScalarWhereInput[]
    NOT?: gallery_imagesScalarWhereInput | gallery_imagesScalarWhereInput[]
    id?: IntFilter<"gallery_images"> | number
    gallery_folder_id?: IntFilter<"gallery_images"> | number
    image_url?: StringFilter<"gallery_images"> | string
    is_visible?: BoolFilter<"gallery_images"> | boolean
    created_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    created_by?: IntNullableFilter<"gallery_images"> | number | null
    updated_at?: DateTimeNullableFilter<"gallery_images"> | Date | string | null
    updated_by?: IntNullableFilter<"gallery_images"> | number | null
    status?: IntNullableFilter<"gallery_images"> | number | null
  }

  export type gallery_foldersCreateWithoutGallery_imagesInput = {
    title: string
    slug?: string | null
    cover_image?: string | null
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_foldersUncheckedCreateWithoutGallery_imagesInput = {
    id?: number
    title: string
    slug?: string | null
    cover_image?: string | null
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_foldersCreateOrConnectWithoutGallery_imagesInput = {
    where: gallery_foldersWhereUniqueInput
    create: XOR<gallery_foldersCreateWithoutGallery_imagesInput, gallery_foldersUncheckedCreateWithoutGallery_imagesInput>
  }

  export type gallery_foldersUpsertWithoutGallery_imagesInput = {
    update: XOR<gallery_foldersUpdateWithoutGallery_imagesInput, gallery_foldersUncheckedUpdateWithoutGallery_imagesInput>
    create: XOR<gallery_foldersCreateWithoutGallery_imagesInput, gallery_foldersUncheckedCreateWithoutGallery_imagesInput>
    where?: gallery_foldersWhereInput
  }

  export type gallery_foldersUpdateToOneWithWhereWithoutGallery_imagesInput = {
    where?: gallery_foldersWhereInput
    data: XOR<gallery_foldersUpdateWithoutGallery_imagesInput, gallery_foldersUncheckedUpdateWithoutGallery_imagesInput>
  }

  export type gallery_foldersUpdateWithoutGallery_imagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_foldersUncheckedUpdateWithoutGallery_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesCreateManyProductsInput = {
    id?: number
    category_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesUpdateWithoutProductsInput = {
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriesCreateManySpec_categoryInput = {
    id?: number
    code: string
    description?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type categoriesUpdateWithoutSpec_categoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSpec_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    product_categories?: product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutSpec_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesCreateManyCategoriesInput = {
    id?: number
    product_id: number
    value_1?: string | null
    value_2?: string | null
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type product_categoriesUpdateWithoutCategoriesInput = {
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    value_1?: NullableStringFieldUpdateOperationsInput | string | null
    value_2?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesCreateManyGallery_folderInput = {
    id?: number
    image_url: string
    is_visible: boolean
    created_at?: Date | string | null
    created_by?: number | null
    updated_at?: Date | string | null
    updated_by?: number | null
    status?: number | null
  }

  export type gallery_imagesUpdateWithoutGallery_folderInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesUncheckedUpdateWithoutGallery_folderInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type gallery_imagesUncheckedUpdateManyWithoutGallery_folderInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
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