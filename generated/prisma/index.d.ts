
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserStorage
 * 
 */
export type UserStorage = $Result.DefaultSelection<Prisma.$UserStoragePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookStorage
 * 
 */
export type BookStorage = $Result.DefaultSelection<Prisma.$BookStoragePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PublishRole: {
  AUTHOR: 'AUTHOR',
  READER: 'READER',
  PUBLISHER: 'PUBLISHER'
};

export type PublishRole = (typeof PublishRole)[keyof typeof PublishRole]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PublishRole = $Enums.PublishRole

export const PublishRole: typeof $Enums.PublishRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStorage`: Exposes CRUD operations for the **UserStorage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStorages
    * const userStorages = await prisma.userStorage.findMany()
    * ```
    */
  get userStorage(): Prisma.UserStorageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookStorage`: Exposes CRUD operations for the **BookStorage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookStorages
    * const bookStorages = await prisma.bookStorage.findMany()
    * ```
    */
  get bookStorage(): Prisma.BookStorageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    UserStorage: 'UserStorage',
    Category: 'Category',
    Book: 'Book',
    BookStorage: 'BookStorage'
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
      modelProps: "user" | "userStorage" | "category" | "book" | "bookStorage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserStorage: {
        payload: Prisma.$UserStoragePayload<ExtArgs>
        fields: Prisma.UserStorageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStorageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStorageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          findFirst: {
            args: Prisma.UserStorageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStorageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          findMany: {
            args: Prisma.UserStorageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>[]
          }
          create: {
            args: Prisma.UserStorageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          createMany: {
            args: Prisma.UserStorageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStorageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>[]
          }
          delete: {
            args: Prisma.UserStorageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          update: {
            args: Prisma.UserStorageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          deleteMany: {
            args: Prisma.UserStorageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStorageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStorageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>[]
          }
          upsert: {
            args: Prisma.UserStorageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoragePayload>
          }
          aggregate: {
            args: Prisma.UserStorageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStorage>
          }
          groupBy: {
            args: Prisma.UserStorageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStorageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStorageCountArgs<ExtArgs>
            result: $Utils.Optional<UserStorageCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookStorage: {
        payload: Prisma.$BookStoragePayload<ExtArgs>
        fields: Prisma.BookStorageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookStorageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookStorageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          findFirst: {
            args: Prisma.BookStorageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookStorageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          findMany: {
            args: Prisma.BookStorageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>[]
          }
          create: {
            args: Prisma.BookStorageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          createMany: {
            args: Prisma.BookStorageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookStorageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>[]
          }
          delete: {
            args: Prisma.BookStorageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          update: {
            args: Prisma.BookStorageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          deleteMany: {
            args: Prisma.BookStorageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookStorageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookStorageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>[]
          }
          upsert: {
            args: Prisma.BookStorageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookStoragePayload>
          }
          aggregate: {
            args: Prisma.BookStorageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookStorage>
          }
          groupBy: {
            args: Prisma.BookStorageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookStorageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookStorageCountArgs<ExtArgs>
            result: $Utils.Optional<BookStorageCountAggregateOutputType> | number
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
    user?: UserOmit
    userStorage?: UserStorageOmit
    category?: CategoryOmit
    book?: BookOmit
    bookStorage?: BookStorageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    BookStorage: number
    Book: number
    UserStorage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookStorage?: boolean | UserCountOutputTypeCountBookStorageArgs
    Book?: boolean | UserCountOutputTypeCountBookArgs
    UserStorage?: boolean | UserCountOutputTypeCountUserStorageArgs
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
  export type UserCountOutputTypeCountBookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookStorageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStorageWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    BookStorage: number
    UserStorage: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookStorage?: boolean | CategoryCountOutputTypeCountBookStorageArgs
    UserStorage?: boolean | CategoryCountOutputTypeCountUserStorageArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookStorageWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountUserStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStorageWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    BookStorage: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookStorage?: boolean | BookCountOutputTypeCountBookStorageArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookStorageWhereInput
  }


  /**
   * Count Type BookStorageCountOutputType
   */

  export type BookStorageCountOutputType = {
    books: number
  }

  export type BookStorageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BookStorageCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * BookStorageCountOutputType without action
   */
  export type BookStorageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorageCountOutputType
     */
    select?: BookStorageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookStorageCountOutputType without action
   */
  export type BookStorageCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    email: string | null
    role: $Enums.Role | null
    publishRole: $Enums.PublishRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    email: string | null
    role: $Enums.Role | null
    publishRole: $Enums.PublishRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    role: number
    publishRole: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    role?: true
    publishRole?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    role?: true
    publishRole?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    role?: true
    publishRole?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userName: string | null
    email: string | null
    role: $Enums.Role
    publishRole: $Enums.PublishRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    publishRole?: boolean
    BookStorage?: boolean | User$BookStorageArgs<ExtArgs>
    Book?: boolean | User$BookArgs<ExtArgs>
    UserStorage?: boolean | User$UserStorageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    publishRole?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    publishRole?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    role?: boolean
    publishRole?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "role" | "publishRole", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookStorage?: boolean | User$BookStorageArgs<ExtArgs>
    Book?: boolean | User$BookArgs<ExtArgs>
    UserStorage?: boolean | User$UserStorageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      BookStorage: Prisma.$BookStoragePayload<ExtArgs>[]
      Book: Prisma.$BookPayload<ExtArgs>[]
      UserStorage: Prisma.$UserStoragePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string | null
      email: string | null
      role: $Enums.Role
      publishRole: $Enums.PublishRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BookStorage<T extends User$BookStorageArgs<ExtArgs> = {}>(args?: Subset<T, User$BookStorageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Book<T extends User$BookArgs<ExtArgs> = {}>(args?: Subset<T, User$BookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserStorage<T extends User$UserStorageArgs<ExtArgs> = {}>(args?: Subset<T, User$UserStorageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly publishRole: FieldRef<"User", 'PublishRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.BookStorage
   */
  export type User$BookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    where?: BookStorageWhereInput
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    cursor?: BookStorageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * User.Book
   */
  export type User$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.UserStorage
   */
  export type User$UserStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    where?: UserStorageWhereInput
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    cursor?: UserStorageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStorageScalarFieldEnum | UserStorageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserStorage
   */

  export type AggregateUserStorage = {
    _count: UserStorageCountAggregateOutputType | null
    _avg: UserStorageAvgAggregateOutputType | null
    _sum: UserStorageSumAggregateOutputType | null
    _min: UserStorageMinAggregateOutputType | null
    _max: UserStorageMaxAggregateOutputType | null
  }

  export type UserStorageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserStorageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserStorageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserStorageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserStorageCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    _all: number
  }


  export type UserStorageAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserStorageSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserStorageMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserStorageMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserStorageCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type UserStorageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStorage to aggregate.
     */
    where?: UserStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorages to fetch.
     */
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStorages
    **/
    _count?: true | UserStorageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStorageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStorageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStorageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStorageMaxAggregateInputType
  }

  export type GetUserStorageAggregateType<T extends UserStorageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStorage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStorage[P]>
      : GetScalarType<T[P], AggregateUserStorage[P]>
  }




  export type UserStorageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStorageWhereInput
    orderBy?: UserStorageOrderByWithAggregationInput | UserStorageOrderByWithAggregationInput[]
    by: UserStorageScalarFieldEnum[] | UserStorageScalarFieldEnum
    having?: UserStorageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStorageCountAggregateInputType | true
    _avg?: UserStorageAvgAggregateInputType
    _sum?: UserStorageSumAggregateInputType
    _min?: UserStorageMinAggregateInputType
    _max?: UserStorageMaxAggregateInputType
  }

  export type UserStorageGroupByOutputType = {
    id: number
    userId: number
    categoryId: number | null
    _count: UserStorageCountAggregateOutputType | null
    _avg: UserStorageAvgAggregateOutputType | null
    _sum: UserStorageSumAggregateOutputType | null
    _min: UserStorageMinAggregateOutputType | null
    _max: UserStorageMaxAggregateOutputType | null
  }

  type GetUserStorageGroupByPayload<T extends UserStorageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStorageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStorageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStorageGroupByOutputType[P]>
            : GetScalarType<T[P], UserStorageGroupByOutputType[P]>
        }
      >
    >


  export type UserStorageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["userStorage"]>

  export type UserStorageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["userStorage"]>

  export type UserStorageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["userStorage"]>

  export type UserStorageSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type UserStorageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId", ExtArgs["result"]["userStorage"]>
  export type UserStorageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }
  export type UserStorageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }
  export type UserStorageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | UserStorage$categoryArgs<ExtArgs>
  }

  export type $UserStoragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStorage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number | null
    }, ExtArgs["result"]["userStorage"]>
    composites: {}
  }

  type UserStorageGetPayload<S extends boolean | null | undefined | UserStorageDefaultArgs> = $Result.GetResult<Prisma.$UserStoragePayload, S>

  type UserStorageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStorageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStorageCountAggregateInputType | true
    }

  export interface UserStorageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStorage'], meta: { name: 'UserStorage' } }
    /**
     * Find zero or one UserStorage that matches the filter.
     * @param {UserStorageFindUniqueArgs} args - Arguments to find a UserStorage
     * @example
     * // Get one UserStorage
     * const userStorage = await prisma.userStorage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStorageFindUniqueArgs>(args: SelectSubset<T, UserStorageFindUniqueArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStorage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStorageFindUniqueOrThrowArgs} args - Arguments to find a UserStorage
     * @example
     * // Get one UserStorage
     * const userStorage = await prisma.userStorage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStorageFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStorageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStorage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageFindFirstArgs} args - Arguments to find a UserStorage
     * @example
     * // Get one UserStorage
     * const userStorage = await prisma.userStorage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStorageFindFirstArgs>(args?: SelectSubset<T, UserStorageFindFirstArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStorage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageFindFirstOrThrowArgs} args - Arguments to find a UserStorage
     * @example
     * // Get one UserStorage
     * const userStorage = await prisma.userStorage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStorageFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStorageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStorages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStorages
     * const userStorages = await prisma.userStorage.findMany()
     * 
     * // Get first 10 UserStorages
     * const userStorages = await prisma.userStorage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStorageWithIdOnly = await prisma.userStorage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStorageFindManyArgs>(args?: SelectSubset<T, UserStorageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStorage.
     * @param {UserStorageCreateArgs} args - Arguments to create a UserStorage.
     * @example
     * // Create one UserStorage
     * const UserStorage = await prisma.userStorage.create({
     *   data: {
     *     // ... data to create a UserStorage
     *   }
     * })
     * 
     */
    create<T extends UserStorageCreateArgs>(args: SelectSubset<T, UserStorageCreateArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStorages.
     * @param {UserStorageCreateManyArgs} args - Arguments to create many UserStorages.
     * @example
     * // Create many UserStorages
     * const userStorage = await prisma.userStorage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStorageCreateManyArgs>(args?: SelectSubset<T, UserStorageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStorages and returns the data saved in the database.
     * @param {UserStorageCreateManyAndReturnArgs} args - Arguments to create many UserStorages.
     * @example
     * // Create many UserStorages
     * const userStorage = await prisma.userStorage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStorages and only return the `id`
     * const userStorageWithIdOnly = await prisma.userStorage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStorageCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStorageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStorage.
     * @param {UserStorageDeleteArgs} args - Arguments to delete one UserStorage.
     * @example
     * // Delete one UserStorage
     * const UserStorage = await prisma.userStorage.delete({
     *   where: {
     *     // ... filter to delete one UserStorage
     *   }
     * })
     * 
     */
    delete<T extends UserStorageDeleteArgs>(args: SelectSubset<T, UserStorageDeleteArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStorage.
     * @param {UserStorageUpdateArgs} args - Arguments to update one UserStorage.
     * @example
     * // Update one UserStorage
     * const userStorage = await prisma.userStorage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStorageUpdateArgs>(args: SelectSubset<T, UserStorageUpdateArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStorages.
     * @param {UserStorageDeleteManyArgs} args - Arguments to filter UserStorages to delete.
     * @example
     * // Delete a few UserStorages
     * const { count } = await prisma.userStorage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStorageDeleteManyArgs>(args?: SelectSubset<T, UserStorageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStorages
     * const userStorage = await prisma.userStorage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStorageUpdateManyArgs>(args: SelectSubset<T, UserStorageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStorages and returns the data updated in the database.
     * @param {UserStorageUpdateManyAndReturnArgs} args - Arguments to update many UserStorages.
     * @example
     * // Update many UserStorages
     * const userStorage = await prisma.userStorage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStorages and only return the `id`
     * const userStorageWithIdOnly = await prisma.userStorage.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserStorageUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStorageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStorage.
     * @param {UserStorageUpsertArgs} args - Arguments to update or create a UserStorage.
     * @example
     * // Update or create a UserStorage
     * const userStorage = await prisma.userStorage.upsert({
     *   create: {
     *     // ... data to create a UserStorage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStorage we want to update
     *   }
     * })
     */
    upsert<T extends UserStorageUpsertArgs>(args: SelectSubset<T, UserStorageUpsertArgs<ExtArgs>>): Prisma__UserStorageClient<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageCountArgs} args - Arguments to filter UserStorages to count.
     * @example
     * // Count the number of UserStorages
     * const count = await prisma.userStorage.count({
     *   where: {
     *     // ... the filter for the UserStorages we want to count
     *   }
     * })
    **/
    count<T extends UserStorageCountArgs>(
      args?: Subset<T, UserStorageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStorageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStorageAggregateArgs>(args: Subset<T, UserStorageAggregateArgs>): Prisma.PrismaPromise<GetUserStorageAggregateType<T>>

    /**
     * Group by UserStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStorageGroupByArgs} args - Group by arguments.
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
      T extends UserStorageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStorageGroupByArgs['orderBy'] }
        : { orderBy?: UserStorageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStorageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStorageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStorage model
   */
  readonly fields: UserStorageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStorage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStorageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends UserStorage$categoryArgs<ExtArgs> = {}>(args?: Subset<T, UserStorage$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserStorage model
   */
  interface UserStorageFieldRefs {
    readonly id: FieldRef<"UserStorage", 'Int'>
    readonly userId: FieldRef<"UserStorage", 'Int'>
    readonly categoryId: FieldRef<"UserStorage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserStorage findUnique
   */
  export type UserStorageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter, which UserStorage to fetch.
     */
    where: UserStorageWhereUniqueInput
  }

  /**
   * UserStorage findUniqueOrThrow
   */
  export type UserStorageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter, which UserStorage to fetch.
     */
    where: UserStorageWhereUniqueInput
  }

  /**
   * UserStorage findFirst
   */
  export type UserStorageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter, which UserStorage to fetch.
     */
    where?: UserStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorages to fetch.
     */
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStorages.
     */
    cursor?: UserStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStorages.
     */
    distinct?: UserStorageScalarFieldEnum | UserStorageScalarFieldEnum[]
  }

  /**
   * UserStorage findFirstOrThrow
   */
  export type UserStorageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter, which UserStorage to fetch.
     */
    where?: UserStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorages to fetch.
     */
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStorages.
     */
    cursor?: UserStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStorages.
     */
    distinct?: UserStorageScalarFieldEnum | UserStorageScalarFieldEnum[]
  }

  /**
   * UserStorage findMany
   */
  export type UserStorageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter, which UserStorages to fetch.
     */
    where?: UserStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStorages to fetch.
     */
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStorages.
     */
    cursor?: UserStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStorages.
     */
    skip?: number
    distinct?: UserStorageScalarFieldEnum | UserStorageScalarFieldEnum[]
  }

  /**
   * UserStorage create
   */
  export type UserStorageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStorage.
     */
    data: XOR<UserStorageCreateInput, UserStorageUncheckedCreateInput>
  }

  /**
   * UserStorage createMany
   */
  export type UserStorageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStorages.
     */
    data: UserStorageCreateManyInput | UserStorageCreateManyInput[]
  }

  /**
   * UserStorage createManyAndReturn
   */
  export type UserStorageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * The data used to create many UserStorages.
     */
    data: UserStorageCreateManyInput | UserStorageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStorage update
   */
  export type UserStorageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStorage.
     */
    data: XOR<UserStorageUpdateInput, UserStorageUncheckedUpdateInput>
    /**
     * Choose, which UserStorage to update.
     */
    where: UserStorageWhereUniqueInput
  }

  /**
   * UserStorage updateMany
   */
  export type UserStorageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStorages.
     */
    data: XOR<UserStorageUpdateManyMutationInput, UserStorageUncheckedUpdateManyInput>
    /**
     * Filter which UserStorages to update
     */
    where?: UserStorageWhereInput
    /**
     * Limit how many UserStorages to update.
     */
    limit?: number
  }

  /**
   * UserStorage updateManyAndReturn
   */
  export type UserStorageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * The data used to update UserStorages.
     */
    data: XOR<UserStorageUpdateManyMutationInput, UserStorageUncheckedUpdateManyInput>
    /**
     * Filter which UserStorages to update
     */
    where?: UserStorageWhereInput
    /**
     * Limit how many UserStorages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStorage upsert
   */
  export type UserStorageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStorage to update in case it exists.
     */
    where: UserStorageWhereUniqueInput
    /**
     * In case the UserStorage found by the `where` argument doesn't exist, create a new UserStorage with this data.
     */
    create: XOR<UserStorageCreateInput, UserStorageUncheckedCreateInput>
    /**
     * In case the UserStorage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStorageUpdateInput, UserStorageUncheckedUpdateInput>
  }

  /**
   * UserStorage delete
   */
  export type UserStorageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    /**
     * Filter which UserStorage to delete.
     */
    where: UserStorageWhereUniqueInput
  }

  /**
   * UserStorage deleteMany
   */
  export type UserStorageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStorages to delete
     */
    where?: UserStorageWhereInput
    /**
     * Limit how many UserStorages to delete.
     */
    limit?: number
  }

  /**
   * UserStorage.category
   */
  export type UserStorage$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * UserStorage without action
   */
  export type UserStorageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    BookStorage?: boolean | Category$BookStorageArgs<ExtArgs>
    UserStorage?: boolean | Category$UserStorageArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BookStorage?: boolean | Category$BookStorageArgs<ExtArgs>
    UserStorage?: boolean | Category$UserStorageArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      BookStorage: Prisma.$BookStoragePayload<ExtArgs>[]
      UserStorage: Prisma.$UserStoragePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BookStorage<T extends Category$BookStorageArgs<ExtArgs> = {}>(args?: Subset<T, Category$BookStorageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserStorage<T extends Category$UserStorageArgs<ExtArgs> = {}>(args?: Subset<T, Category$UserStorageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.BookStorage
   */
  export type Category$BookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    where?: BookStorageWhereInput
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    cursor?: BookStorageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * Category.UserStorage
   */
  export type Category$UserStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStorage
     */
    select?: UserStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStorage
     */
    omit?: UserStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStorageInclude<ExtArgs> | null
    where?: UserStorageWhereInput
    orderBy?: UserStorageOrderByWithRelationInput | UserStorageOrderByWithRelationInput[]
    cursor?: UserStorageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStorageScalarFieldEnum | UserStorageScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    publishDate: Date | null
    file: string | null
    isBookPosted: boolean | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    publishDate: Date | null
    file: string | null
    isBookPosted: boolean | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    publishDate: number
    file: number
    isBookPosted: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publishDate?: true
    file?: true
    isBookPosted?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publishDate?: true
    file?: true
    isBookPosted?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    publishDate?: true
    file?: true
    isBookPosted?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    authorId: number | null
    publishDate: Date
    file: string
    isBookPosted: boolean
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    publishDate?: boolean
    file?: boolean
    isBookPosted?: boolean
    author?: boolean | Book$authorArgs<ExtArgs>
    BookStorage?: boolean | Book$BookStorageArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    publishDate?: boolean
    file?: boolean
    isBookPosted?: boolean
    author?: boolean | Book$authorArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    publishDate?: boolean
    file?: boolean
    isBookPosted?: boolean
    author?: boolean | Book$authorArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    publishDate?: boolean
    file?: boolean
    isBookPosted?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "authorId" | "publishDate" | "file" | "isBookPosted", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Book$authorArgs<ExtArgs>
    BookStorage?: boolean | Book$BookStorageArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Book$authorArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Book$authorArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      BookStorage: Prisma.$BookStoragePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number | null
      publishDate: Date
      file: string
      isBookPosted: boolean
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Book$authorArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BookStorage<T extends Book$BookStorageArgs<ExtArgs> = {}>(args?: Subset<T, Book$BookStorageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly authorId: FieldRef<"Book", 'Int'>
    readonly publishDate: FieldRef<"Book", 'DateTime'>
    readonly file: FieldRef<"Book", 'String'>
    readonly isBookPosted: FieldRef<"Book", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.author
   */
  export type Book$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Book.BookStorage
   */
  export type Book$BookStorageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    where?: BookStorageWhereInput
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    cursor?: BookStorageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookStorage
   */

  export type AggregateBookStorage = {
    _count: BookStorageCountAggregateOutputType | null
    _avg: BookStorageAvgAggregateOutputType | null
    _sum: BookStorageSumAggregateOutputType | null
    _min: BookStorageMinAggregateOutputType | null
    _max: BookStorageMaxAggregateOutputType | null
  }

  export type BookStorageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type BookStorageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type BookStorageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type BookStorageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type BookStorageCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    _all: number
  }


  export type BookStorageAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type BookStorageSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type BookStorageMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type BookStorageMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type BookStorageCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type BookStorageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookStorage to aggregate.
     */
    where?: BookStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookStorages to fetch.
     */
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookStorages
    **/
    _count?: true | BookStorageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookStorageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookStorageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookStorageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookStorageMaxAggregateInputType
  }

  export type GetBookStorageAggregateType<T extends BookStorageAggregateArgs> = {
        [P in keyof T & keyof AggregateBookStorage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookStorage[P]>
      : GetScalarType<T[P], AggregateBookStorage[P]>
  }




  export type BookStorageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookStorageWhereInput
    orderBy?: BookStorageOrderByWithAggregationInput | BookStorageOrderByWithAggregationInput[]
    by: BookStorageScalarFieldEnum[] | BookStorageScalarFieldEnum
    having?: BookStorageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookStorageCountAggregateInputType | true
    _avg?: BookStorageAvgAggregateInputType
    _sum?: BookStorageSumAggregateInputType
    _min?: BookStorageMinAggregateInputType
    _max?: BookStorageMaxAggregateInputType
  }

  export type BookStorageGroupByOutputType = {
    id: number
    userId: number | null
    categoryId: number | null
    _count: BookStorageCountAggregateOutputType | null
    _avg: BookStorageAvgAggregateOutputType | null
    _sum: BookStorageSumAggregateOutputType | null
    _min: BookStorageMinAggregateOutputType | null
    _max: BookStorageMaxAggregateOutputType | null
  }

  type GetBookStorageGroupByPayload<T extends BookStorageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookStorageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookStorageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookStorageGroupByOutputType[P]>
            : GetScalarType<T[P], BookStorageGroupByOutputType[P]>
        }
      >
    >


  export type BookStorageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    books?: boolean | BookStorage$booksArgs<ExtArgs>
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
    _count?: boolean | BookStorageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookStorage"]>

  export type BookStorageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["bookStorage"]>

  export type BookStorageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["bookStorage"]>

  export type BookStorageSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type BookStorageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId", ExtArgs["result"]["bookStorage"]>
  export type BookStorageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BookStorage$booksArgs<ExtArgs>
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
    _count?: boolean | BookStorageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookStorageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
  }
  export type BookStorageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BookStorage$userArgs<ExtArgs>
    category?: boolean | BookStorage$categoryArgs<ExtArgs>
  }

  export type $BookStoragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookStorage"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      categoryId: number | null
    }, ExtArgs["result"]["bookStorage"]>
    composites: {}
  }

  type BookStorageGetPayload<S extends boolean | null | undefined | BookStorageDefaultArgs> = $Result.GetResult<Prisma.$BookStoragePayload, S>

  type BookStorageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookStorageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookStorageCountAggregateInputType | true
    }

  export interface BookStorageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookStorage'], meta: { name: 'BookStorage' } }
    /**
     * Find zero or one BookStorage that matches the filter.
     * @param {BookStorageFindUniqueArgs} args - Arguments to find a BookStorage
     * @example
     * // Get one BookStorage
     * const bookStorage = await prisma.bookStorage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookStorageFindUniqueArgs>(args: SelectSubset<T, BookStorageFindUniqueArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookStorage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookStorageFindUniqueOrThrowArgs} args - Arguments to find a BookStorage
     * @example
     * // Get one BookStorage
     * const bookStorage = await prisma.bookStorage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookStorageFindUniqueOrThrowArgs>(args: SelectSubset<T, BookStorageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookStorage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageFindFirstArgs} args - Arguments to find a BookStorage
     * @example
     * // Get one BookStorage
     * const bookStorage = await prisma.bookStorage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookStorageFindFirstArgs>(args?: SelectSubset<T, BookStorageFindFirstArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookStorage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageFindFirstOrThrowArgs} args - Arguments to find a BookStorage
     * @example
     * // Get one BookStorage
     * const bookStorage = await prisma.bookStorage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookStorageFindFirstOrThrowArgs>(args?: SelectSubset<T, BookStorageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookStorages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookStorages
     * const bookStorages = await prisma.bookStorage.findMany()
     * 
     * // Get first 10 BookStorages
     * const bookStorages = await prisma.bookStorage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookStorageWithIdOnly = await prisma.bookStorage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookStorageFindManyArgs>(args?: SelectSubset<T, BookStorageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookStorage.
     * @param {BookStorageCreateArgs} args - Arguments to create a BookStorage.
     * @example
     * // Create one BookStorage
     * const BookStorage = await prisma.bookStorage.create({
     *   data: {
     *     // ... data to create a BookStorage
     *   }
     * })
     * 
     */
    create<T extends BookStorageCreateArgs>(args: SelectSubset<T, BookStorageCreateArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookStorages.
     * @param {BookStorageCreateManyArgs} args - Arguments to create many BookStorages.
     * @example
     * // Create many BookStorages
     * const bookStorage = await prisma.bookStorage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookStorageCreateManyArgs>(args?: SelectSubset<T, BookStorageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookStorages and returns the data saved in the database.
     * @param {BookStorageCreateManyAndReturnArgs} args - Arguments to create many BookStorages.
     * @example
     * // Create many BookStorages
     * const bookStorage = await prisma.bookStorage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookStorages and only return the `id`
     * const bookStorageWithIdOnly = await prisma.bookStorage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookStorageCreateManyAndReturnArgs>(args?: SelectSubset<T, BookStorageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookStorage.
     * @param {BookStorageDeleteArgs} args - Arguments to delete one BookStorage.
     * @example
     * // Delete one BookStorage
     * const BookStorage = await prisma.bookStorage.delete({
     *   where: {
     *     // ... filter to delete one BookStorage
     *   }
     * })
     * 
     */
    delete<T extends BookStorageDeleteArgs>(args: SelectSubset<T, BookStorageDeleteArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookStorage.
     * @param {BookStorageUpdateArgs} args - Arguments to update one BookStorage.
     * @example
     * // Update one BookStorage
     * const bookStorage = await prisma.bookStorage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookStorageUpdateArgs>(args: SelectSubset<T, BookStorageUpdateArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookStorages.
     * @param {BookStorageDeleteManyArgs} args - Arguments to filter BookStorages to delete.
     * @example
     * // Delete a few BookStorages
     * const { count } = await prisma.bookStorage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookStorageDeleteManyArgs>(args?: SelectSubset<T, BookStorageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookStorages
     * const bookStorage = await prisma.bookStorage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookStorageUpdateManyArgs>(args: SelectSubset<T, BookStorageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookStorages and returns the data updated in the database.
     * @param {BookStorageUpdateManyAndReturnArgs} args - Arguments to update many BookStorages.
     * @example
     * // Update many BookStorages
     * const bookStorage = await prisma.bookStorage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookStorages and only return the `id`
     * const bookStorageWithIdOnly = await prisma.bookStorage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookStorageUpdateManyAndReturnArgs>(args: SelectSubset<T, BookStorageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookStorage.
     * @param {BookStorageUpsertArgs} args - Arguments to update or create a BookStorage.
     * @example
     * // Update or create a BookStorage
     * const bookStorage = await prisma.bookStorage.upsert({
     *   create: {
     *     // ... data to create a BookStorage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookStorage we want to update
     *   }
     * })
     */
    upsert<T extends BookStorageUpsertArgs>(args: SelectSubset<T, BookStorageUpsertArgs<ExtArgs>>): Prisma__BookStorageClient<$Result.GetResult<Prisma.$BookStoragePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageCountArgs} args - Arguments to filter BookStorages to count.
     * @example
     * // Count the number of BookStorages
     * const count = await prisma.bookStorage.count({
     *   where: {
     *     // ... the filter for the BookStorages we want to count
     *   }
     * })
    **/
    count<T extends BookStorageCountArgs>(
      args?: Subset<T, BookStorageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookStorageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookStorageAggregateArgs>(args: Subset<T, BookStorageAggregateArgs>): Prisma.PrismaPromise<GetBookStorageAggregateType<T>>

    /**
     * Group by BookStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookStorageGroupByArgs} args - Group by arguments.
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
      T extends BookStorageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookStorageGroupByArgs['orderBy'] }
        : { orderBy?: BookStorageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookStorageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookStorageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookStorage model
   */
  readonly fields: BookStorageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookStorage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookStorageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends BookStorage$booksArgs<ExtArgs> = {}>(args?: Subset<T, BookStorage$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends BookStorage$userArgs<ExtArgs> = {}>(args?: Subset<T, BookStorage$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends BookStorage$categoryArgs<ExtArgs> = {}>(args?: Subset<T, BookStorage$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookStorage model
   */
  interface BookStorageFieldRefs {
    readonly id: FieldRef<"BookStorage", 'Int'>
    readonly userId: FieldRef<"BookStorage", 'Int'>
    readonly categoryId: FieldRef<"BookStorage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookStorage findUnique
   */
  export type BookStorageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter, which BookStorage to fetch.
     */
    where: BookStorageWhereUniqueInput
  }

  /**
   * BookStorage findUniqueOrThrow
   */
  export type BookStorageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter, which BookStorage to fetch.
     */
    where: BookStorageWhereUniqueInput
  }

  /**
   * BookStorage findFirst
   */
  export type BookStorageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter, which BookStorage to fetch.
     */
    where?: BookStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookStorages to fetch.
     */
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookStorages.
     */
    cursor?: BookStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookStorages.
     */
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * BookStorage findFirstOrThrow
   */
  export type BookStorageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter, which BookStorage to fetch.
     */
    where?: BookStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookStorages to fetch.
     */
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookStorages.
     */
    cursor?: BookStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookStorages.
     */
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * BookStorage findMany
   */
  export type BookStorageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter, which BookStorages to fetch.
     */
    where?: BookStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookStorages to fetch.
     */
    orderBy?: BookStorageOrderByWithRelationInput | BookStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookStorages.
     */
    cursor?: BookStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookStorages.
     */
    skip?: number
    distinct?: BookStorageScalarFieldEnum | BookStorageScalarFieldEnum[]
  }

  /**
   * BookStorage create
   */
  export type BookStorageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * The data needed to create a BookStorage.
     */
    data?: XOR<BookStorageCreateInput, BookStorageUncheckedCreateInput>
  }

  /**
   * BookStorage createMany
   */
  export type BookStorageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookStorages.
     */
    data: BookStorageCreateManyInput | BookStorageCreateManyInput[]
  }

  /**
   * BookStorage createManyAndReturn
   */
  export type BookStorageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * The data used to create many BookStorages.
     */
    data: BookStorageCreateManyInput | BookStorageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookStorage update
   */
  export type BookStorageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * The data needed to update a BookStorage.
     */
    data: XOR<BookStorageUpdateInput, BookStorageUncheckedUpdateInput>
    /**
     * Choose, which BookStorage to update.
     */
    where: BookStorageWhereUniqueInput
  }

  /**
   * BookStorage updateMany
   */
  export type BookStorageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookStorages.
     */
    data: XOR<BookStorageUpdateManyMutationInput, BookStorageUncheckedUpdateManyInput>
    /**
     * Filter which BookStorages to update
     */
    where?: BookStorageWhereInput
    /**
     * Limit how many BookStorages to update.
     */
    limit?: number
  }

  /**
   * BookStorage updateManyAndReturn
   */
  export type BookStorageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * The data used to update BookStorages.
     */
    data: XOR<BookStorageUpdateManyMutationInput, BookStorageUncheckedUpdateManyInput>
    /**
     * Filter which BookStorages to update
     */
    where?: BookStorageWhereInput
    /**
     * Limit how many BookStorages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookStorage upsert
   */
  export type BookStorageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * The filter to search for the BookStorage to update in case it exists.
     */
    where: BookStorageWhereUniqueInput
    /**
     * In case the BookStorage found by the `where` argument doesn't exist, create a new BookStorage with this data.
     */
    create: XOR<BookStorageCreateInput, BookStorageUncheckedCreateInput>
    /**
     * In case the BookStorage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookStorageUpdateInput, BookStorageUncheckedUpdateInput>
  }

  /**
   * BookStorage delete
   */
  export type BookStorageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
    /**
     * Filter which BookStorage to delete.
     */
    where: BookStorageWhereUniqueInput
  }

  /**
   * BookStorage deleteMany
   */
  export type BookStorageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookStorages to delete
     */
    where?: BookStorageWhereInput
    /**
     * Limit how many BookStorages to delete.
     */
    limit?: number
  }

  /**
   * BookStorage.books
   */
  export type BookStorage$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * BookStorage.user
   */
  export type BookStorage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BookStorage.category
   */
  export type BookStorage$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * BookStorage without action
   */
  export type BookStorageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookStorage
     */
    select?: BookStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookStorage
     */
    omit?: BookStorageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookStorageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    role: 'role',
    publishRole: 'publishRole'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserStorageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type UserStorageScalarFieldEnum = (typeof UserStorageScalarFieldEnum)[keyof typeof UserStorageScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    publishDate: 'publishDate',
    file: 'file',
    isBookPosted: 'isBookPosted'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookStorageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type BookStorageScalarFieldEnum = (typeof BookStorageScalarFieldEnum)[keyof typeof BookStorageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'PublishRole'
   */
  export type EnumPublishRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    publishRole?: EnumPublishRoleFilter<"User"> | $Enums.PublishRole
    BookStorage?: BookStorageListRelationFilter
    Book?: BookListRelationFilter
    UserStorage?: UserStorageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    publishRole?: SortOrder
    BookStorage?: BookStorageOrderByRelationAggregateInput
    Book?: BookOrderByRelationAggregateInput
    UserStorage?: UserStorageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    publishRole?: EnumPublishRoleFilter<"User"> | $Enums.PublishRole
    BookStorage?: BookStorageListRelationFilter
    Book?: BookListRelationFilter
    UserStorage?: UserStorageListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    publishRole?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    publishRole?: EnumPublishRoleWithAggregatesFilter<"User"> | $Enums.PublishRole
  }

  export type UserStorageWhereInput = {
    AND?: UserStorageWhereInput | UserStorageWhereInput[]
    OR?: UserStorageWhereInput[]
    NOT?: UserStorageWhereInput | UserStorageWhereInput[]
    id?: IntFilter<"UserStorage"> | number
    userId?: IntFilter<"UserStorage"> | number
    categoryId?: IntNullableFilter<"UserStorage"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type UserStorageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type UserStorageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserStorageWhereInput | UserStorageWhereInput[]
    OR?: UserStorageWhereInput[]
    NOT?: UserStorageWhereInput | UserStorageWhereInput[]
    categoryId?: IntNullableFilter<"UserStorage"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id" | "userId">

  export type UserStorageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: UserStorageCountOrderByAggregateInput
    _avg?: UserStorageAvgOrderByAggregateInput
    _max?: UserStorageMaxOrderByAggregateInput
    _min?: UserStorageMinOrderByAggregateInput
    _sum?: UserStorageSumOrderByAggregateInput
  }

  export type UserStorageScalarWhereWithAggregatesInput = {
    AND?: UserStorageScalarWhereWithAggregatesInput | UserStorageScalarWhereWithAggregatesInput[]
    OR?: UserStorageScalarWhereWithAggregatesInput[]
    NOT?: UserStorageScalarWhereWithAggregatesInput | UserStorageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserStorage"> | number
    userId?: IntWithAggregatesFilter<"UserStorage"> | number
    categoryId?: IntNullableWithAggregatesFilter<"UserStorage"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    BookStorage?: BookStorageListRelationFilter
    UserStorage?: UserStorageListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    BookStorage?: BookStorageOrderByRelationAggregateInput
    UserStorage?: UserStorageOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    BookStorage?: BookStorageListRelationFilter
    UserStorage?: UserStorageListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntNullableFilter<"Book"> | number | null
    publishDate?: DateTimeFilter<"Book"> | Date | string
    file?: StringFilter<"Book"> | string
    isBookPosted?: BoolFilter<"Book"> | boolean
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    BookStorage?: BookStorageListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrderInput | SortOrder
    publishDate?: SortOrder
    file?: SortOrder
    isBookPosted?: SortOrder
    author?: UserOrderByWithRelationInput
    BookStorage?: BookStorageOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    authorId?: IntNullableFilter<"Book"> | number | null
    publishDate?: DateTimeFilter<"Book"> | Date | string
    file?: StringFilter<"Book"> | string
    isBookPosted?: BoolFilter<"Book"> | boolean
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    BookStorage?: BookStorageListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrderInput | SortOrder
    publishDate?: SortOrder
    file?: SortOrder
    isBookPosted?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    authorId?: IntNullableWithAggregatesFilter<"Book"> | number | null
    publishDate?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    file?: StringWithAggregatesFilter<"Book"> | string
    isBookPosted?: BoolWithAggregatesFilter<"Book"> | boolean
  }

  export type BookStorageWhereInput = {
    AND?: BookStorageWhereInput | BookStorageWhereInput[]
    OR?: BookStorageWhereInput[]
    NOT?: BookStorageWhereInput | BookStorageWhereInput[]
    id?: IntFilter<"BookStorage"> | number
    userId?: IntNullableFilter<"BookStorage"> | number | null
    categoryId?: IntNullableFilter<"BookStorage"> | number | null
    books?: BookListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type BookStorageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    books?: BookOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BookStorageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookStorageWhereInput | BookStorageWhereInput[]
    OR?: BookStorageWhereInput[]
    NOT?: BookStorageWhereInput | BookStorageWhereInput[]
    userId?: IntNullableFilter<"BookStorage"> | number | null
    categoryId?: IntNullableFilter<"BookStorage"> | number | null
    books?: BookListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type BookStorageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: BookStorageCountOrderByAggregateInput
    _avg?: BookStorageAvgOrderByAggregateInput
    _max?: BookStorageMaxOrderByAggregateInput
    _min?: BookStorageMinOrderByAggregateInput
    _sum?: BookStorageSumOrderByAggregateInput
  }

  export type BookStorageScalarWhereWithAggregatesInput = {
    AND?: BookStorageScalarWhereWithAggregatesInput | BookStorageScalarWhereWithAggregatesInput[]
    OR?: BookStorageScalarWhereWithAggregatesInput[]
    NOT?: BookStorageScalarWhereWithAggregatesInput | BookStorageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookStorage"> | number
    userId?: IntNullableWithAggregatesFilter<"BookStorage"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"BookStorage"> | number | null
  }

  export type UserCreateInput = {
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageCreateNestedManyWithoutUserInput
    Book?: BookCreateNestedManyWithoutAuthorInput
    UserStorage?: UserStorageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutUserInput
    Book?: BookUncheckedCreateNestedManyWithoutAuthorInput
    UserStorage?: UserStorageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUpdateManyWithoutUserNestedInput
    Book?: BookUpdateManyWithoutAuthorNestedInput
    UserStorage?: UserStorageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUncheckedUpdateManyWithoutUserNestedInput
    Book?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    UserStorage?: UserStorageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
  }

  export type UserUpdateManyMutationInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
  }

  export type UserStorageCreateInput = {
    user: UserCreateNestedOneWithoutUserStorageInput
    category?: CategoryCreateNestedOneWithoutUserStorageInput
  }

  export type UserStorageUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId?: number | null
  }

  export type UserStorageUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserStorageNestedInput
    category?: CategoryUpdateOneWithoutUserStorageNestedInput
  }

  export type UserStorageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserStorageCreateManyInput = {
    id?: number
    userId: number
    categoryId?: number | null
  }

  export type UserStorageUpdateManyMutationInput = {

  }

  export type UserStorageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    name: string
    BookStorage?: BookStorageCreateNestedManyWithoutCategoryInput
    UserStorage?: UserStorageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutCategoryInput
    UserStorage?: UserStorageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    BookStorage?: BookStorageUpdateManyWithoutCategoryNestedInput
    UserStorage?: UserStorageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    BookStorage?: BookStorageUncheckedUpdateManyWithoutCategoryNestedInput
    UserStorage?: UserStorageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    title: string
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
    author?: UserCreateNestedOneWithoutBookInput
    BookStorage?: BookStorageCreateNestedManyWithoutBooksInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    authorId?: number | null
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutBooksInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutBookNestedInput
    BookStorage?: BookStorageUpdateManyWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
    BookStorage?: BookStorageUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    authorId?: number | null
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookStorageCreateInput = {
    books?: BookCreateNestedManyWithoutBookStorageInput
    user?: UserCreateNestedOneWithoutBookStorageInput
    category?: CategoryCreateNestedOneWithoutBookStorageInput
  }

  export type BookStorageUncheckedCreateInput = {
    id?: number
    userId?: number | null
    categoryId?: number | null
    books?: BookUncheckedCreateNestedManyWithoutBookStorageInput
  }

  export type BookStorageUpdateInput = {
    books?: BookUpdateManyWithoutBookStorageNestedInput
    user?: UserUpdateOneWithoutBookStorageNestedInput
    category?: CategoryUpdateOneWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutBookStorageNestedInput
  }

  export type BookStorageCreateManyInput = {
    id?: number
    userId?: number | null
    categoryId?: number | null
  }

  export type BookStorageUpdateManyMutationInput = {

  }

  export type BookStorageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumPublishRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishRole | EnumPublishRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PublishRole[]
    notIn?: $Enums.PublishRole[]
    not?: NestedEnumPublishRoleFilter<$PrismaModel> | $Enums.PublishRole
  }

  export type BookStorageListRelationFilter = {
    every?: BookStorageWhereInput
    some?: BookStorageWhereInput
    none?: BookStorageWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type UserStorageListRelationFilter = {
    every?: UserStorageWhereInput
    some?: UserStorageWhereInput
    none?: UserStorageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookStorageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStorageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    publishRole?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    publishRole?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    publishRole?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPublishRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishRole | EnumPublishRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PublishRole[]
    notIn?: $Enums.PublishRole[]
    not?: NestedEnumPublishRoleWithAggregatesFilter<$PrismaModel> | $Enums.PublishRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishRoleFilter<$PrismaModel>
    _max?: NestedEnumPublishRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserStorageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserStorageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserStorageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserStorageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserStorageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publishDate?: SortOrder
    file?: SortOrder
    isBookPosted?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publishDate?: SortOrder
    file?: SortOrder
    isBookPosted?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    publishDate?: SortOrder
    file?: SortOrder
    isBookPosted?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookStorageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BookStorageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BookStorageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BookStorageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BookStorageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BookStorageCreateNestedManyWithoutUserInput = {
    create?: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput> | BookStorageCreateWithoutUserInput[] | BookStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutUserInput | BookStorageCreateOrConnectWithoutUserInput[]
    createMany?: BookStorageCreateManyUserInputEnvelope
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type UserStorageCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput> | UserStorageCreateWithoutUserInput[] | UserStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutUserInput | UserStorageCreateOrConnectWithoutUserInput[]
    createMany?: UserStorageCreateManyUserInputEnvelope
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
  }

  export type BookStorageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput> | BookStorageCreateWithoutUserInput[] | BookStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutUserInput | BookStorageCreateOrConnectWithoutUserInput[]
    createMany?: BookStorageCreateManyUserInputEnvelope
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type UserStorageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput> | UserStorageCreateWithoutUserInput[] | UserStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutUserInput | UserStorageCreateOrConnectWithoutUserInput[]
    createMany?: UserStorageCreateManyUserInputEnvelope
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumPublishRoleFieldUpdateOperationsInput = {
    set?: $Enums.PublishRole
  }

  export type BookStorageUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput> | BookStorageCreateWithoutUserInput[] | BookStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutUserInput | BookStorageCreateOrConnectWithoutUserInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutUserInput | BookStorageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookStorageCreateManyUserInputEnvelope
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutUserInput | BookStorageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutUserInput | BookStorageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type UserStorageUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput> | UserStorageCreateWithoutUserInput[] | UserStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutUserInput | UserStorageCreateOrConnectWithoutUserInput[]
    upsert?: UserStorageUpsertWithWhereUniqueWithoutUserInput | UserStorageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStorageCreateManyUserInputEnvelope
    set?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    disconnect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    delete?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    update?: UserStorageUpdateWithWhereUniqueWithoutUserInput | UserStorageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStorageUpdateManyWithWhereWithoutUserInput | UserStorageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookStorageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput> | BookStorageCreateWithoutUserInput[] | BookStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutUserInput | BookStorageCreateOrConnectWithoutUserInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutUserInput | BookStorageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookStorageCreateManyUserInputEnvelope
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutUserInput | BookStorageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutUserInput | BookStorageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type UserStorageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput> | UserStorageCreateWithoutUserInput[] | UserStorageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutUserInput | UserStorageCreateOrConnectWithoutUserInput[]
    upsert?: UserStorageUpsertWithWhereUniqueWithoutUserInput | UserStorageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStorageCreateManyUserInputEnvelope
    set?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    disconnect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    delete?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    update?: UserStorageUpdateWithWhereUniqueWithoutUserInput | UserStorageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStorageUpdateManyWithWhereWithoutUserInput | UserStorageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserStorageInput = {
    create?: XOR<UserCreateWithoutUserStorageInput, UserUncheckedCreateWithoutUserStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStorageInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutUserStorageInput = {
    create?: XOR<CategoryCreateWithoutUserStorageInput, CategoryUncheckedCreateWithoutUserStorageInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserStorageInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStorageNestedInput = {
    create?: XOR<UserCreateWithoutUserStorageInput, UserUncheckedCreateWithoutUserStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStorageInput
    upsert?: UserUpsertWithoutUserStorageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStorageInput, UserUpdateWithoutUserStorageInput>, UserUncheckedUpdateWithoutUserStorageInput>
  }

  export type CategoryUpdateOneWithoutUserStorageNestedInput = {
    create?: XOR<CategoryCreateWithoutUserStorageInput, CategoryUncheckedCreateWithoutUserStorageInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserStorageInput
    upsert?: CategoryUpsertWithoutUserStorageInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutUserStorageInput, CategoryUpdateWithoutUserStorageInput>, CategoryUncheckedUpdateWithoutUserStorageInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookStorageCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput> | BookStorageCreateWithoutCategoryInput[] | BookStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutCategoryInput | BookStorageCreateOrConnectWithoutCategoryInput[]
    createMany?: BookStorageCreateManyCategoryInputEnvelope
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type UserStorageCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput> | UserStorageCreateWithoutCategoryInput[] | UserStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutCategoryInput | UserStorageCreateOrConnectWithoutCategoryInput[]
    createMany?: UserStorageCreateManyCategoryInputEnvelope
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
  }

  export type BookStorageUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput> | BookStorageCreateWithoutCategoryInput[] | BookStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutCategoryInput | BookStorageCreateOrConnectWithoutCategoryInput[]
    createMany?: BookStorageCreateManyCategoryInputEnvelope
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type UserStorageUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput> | UserStorageCreateWithoutCategoryInput[] | UserStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutCategoryInput | UserStorageCreateOrConnectWithoutCategoryInput[]
    createMany?: UserStorageCreateManyCategoryInputEnvelope
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BookStorageUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput> | BookStorageCreateWithoutCategoryInput[] | BookStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutCategoryInput | BookStorageCreateOrConnectWithoutCategoryInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutCategoryInput | BookStorageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookStorageCreateManyCategoryInputEnvelope
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutCategoryInput | BookStorageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutCategoryInput | BookStorageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type UserStorageUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput> | UserStorageCreateWithoutCategoryInput[] | UserStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutCategoryInput | UserStorageCreateOrConnectWithoutCategoryInput[]
    upsert?: UserStorageUpsertWithWhereUniqueWithoutCategoryInput | UserStorageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserStorageCreateManyCategoryInputEnvelope
    set?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    disconnect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    delete?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    update?: UserStorageUpdateWithWhereUniqueWithoutCategoryInput | UserStorageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserStorageUpdateManyWithWhereWithoutCategoryInput | UserStorageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
  }

  export type BookStorageUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput> | BookStorageCreateWithoutCategoryInput[] | BookStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutCategoryInput | BookStorageCreateOrConnectWithoutCategoryInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutCategoryInput | BookStorageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookStorageCreateManyCategoryInputEnvelope
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutCategoryInput | BookStorageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutCategoryInput | BookStorageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type UserStorageUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput> | UserStorageCreateWithoutCategoryInput[] | UserStorageUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserStorageCreateOrConnectWithoutCategoryInput | UserStorageCreateOrConnectWithoutCategoryInput[]
    upsert?: UserStorageUpsertWithWhereUniqueWithoutCategoryInput | UserStorageUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserStorageCreateManyCategoryInputEnvelope
    set?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    disconnect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    delete?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    connect?: UserStorageWhereUniqueInput | UserStorageWhereUniqueInput[]
    update?: UserStorageUpdateWithWhereUniqueWithoutCategoryInput | UserStorageUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserStorageUpdateManyWithWhereWithoutCategoryInput | UserStorageUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookInput = {
    create?: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookInput
    connect?: UserWhereUniqueInput
  }

  export type BookStorageCreateNestedManyWithoutBooksInput = {
    create?: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput> | BookStorageCreateWithoutBooksInput[] | BookStorageUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutBooksInput | BookStorageCreateOrConnectWithoutBooksInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type BookStorageUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput> | BookStorageCreateWithoutBooksInput[] | BookStorageUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutBooksInput | BookStorageCreateOrConnectWithoutBooksInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutBookNestedInput = {
    create?: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookInput
    upsert?: UserUpsertWithoutBookInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookInput, UserUpdateWithoutBookInput>, UserUncheckedUpdateWithoutBookInput>
  }

  export type BookStorageUpdateManyWithoutBooksNestedInput = {
    create?: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput> | BookStorageCreateWithoutBooksInput[] | BookStorageUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutBooksInput | BookStorageCreateOrConnectWithoutBooksInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutBooksInput | BookStorageUpsertWithWhereUniqueWithoutBooksInput[]
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutBooksInput | BookStorageUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutBooksInput | BookStorageUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type BookStorageUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput> | BookStorageCreateWithoutBooksInput[] | BookStorageUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: BookStorageCreateOrConnectWithoutBooksInput | BookStorageCreateOrConnectWithoutBooksInput[]
    upsert?: BookStorageUpsertWithWhereUniqueWithoutBooksInput | BookStorageUpsertWithWhereUniqueWithoutBooksInput[]
    set?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    disconnect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    delete?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    connect?: BookStorageWhereUniqueInput | BookStorageWhereUniqueInput[]
    update?: BookStorageUpdateWithWhereUniqueWithoutBooksInput | BookStorageUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: BookStorageUpdateManyWithWhereWithoutBooksInput | BookStorageUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutBookStorageInput = {
    create?: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput> | BookCreateWithoutBookStorageInput[] | BookUncheckedCreateWithoutBookStorageInput[]
    connectOrCreate?: BookCreateOrConnectWithoutBookStorageInput | BookCreateOrConnectWithoutBookStorageInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBookStorageInput = {
    create?: XOR<UserCreateWithoutBookStorageInput, UserUncheckedCreateWithoutBookStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookStorageInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBookStorageInput = {
    create?: XOR<CategoryCreateWithoutBookStorageInput, CategoryUncheckedCreateWithoutBookStorageInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBookStorageInput
    connect?: CategoryWhereUniqueInput
  }

  export type BookUncheckedCreateNestedManyWithoutBookStorageInput = {
    create?: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput> | BookCreateWithoutBookStorageInput[] | BookUncheckedCreateWithoutBookStorageInput[]
    connectOrCreate?: BookCreateOrConnectWithoutBookStorageInput | BookCreateOrConnectWithoutBookStorageInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutBookStorageNestedInput = {
    create?: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput> | BookCreateWithoutBookStorageInput[] | BookUncheckedCreateWithoutBookStorageInput[]
    connectOrCreate?: BookCreateOrConnectWithoutBookStorageInput | BookCreateOrConnectWithoutBookStorageInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutBookStorageInput | BookUpsertWithWhereUniqueWithoutBookStorageInput[]
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutBookStorageInput | BookUpdateWithWhereUniqueWithoutBookStorageInput[]
    updateMany?: BookUpdateManyWithWhereWithoutBookStorageInput | BookUpdateManyWithWhereWithoutBookStorageInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type UserUpdateOneWithoutBookStorageNestedInput = {
    create?: XOR<UserCreateWithoutBookStorageInput, UserUncheckedCreateWithoutBookStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookStorageInput
    upsert?: UserUpsertWithoutBookStorageInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookStorageInput, UserUpdateWithoutBookStorageInput>, UserUncheckedUpdateWithoutBookStorageInput>
  }

  export type CategoryUpdateOneWithoutBookStorageNestedInput = {
    create?: XOR<CategoryCreateWithoutBookStorageInput, CategoryUncheckedCreateWithoutBookStorageInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBookStorageInput
    upsert?: CategoryUpsertWithoutBookStorageInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBookStorageInput, CategoryUpdateWithoutBookStorageInput>, CategoryUncheckedUpdateWithoutBookStorageInput>
  }

  export type BookUncheckedUpdateManyWithoutBookStorageNestedInput = {
    create?: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput> | BookCreateWithoutBookStorageInput[] | BookUncheckedCreateWithoutBookStorageInput[]
    connectOrCreate?: BookCreateOrConnectWithoutBookStorageInput | BookCreateOrConnectWithoutBookStorageInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutBookStorageInput | BookUpsertWithWhereUniqueWithoutBookStorageInput[]
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutBookStorageInput | BookUpdateWithWhereUniqueWithoutBookStorageInput[]
    updateMany?: BookUpdateManyWithWhereWithoutBookStorageInput | BookUpdateManyWithWhereWithoutBookStorageInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPublishRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishRole | EnumPublishRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PublishRole[]
    notIn?: $Enums.PublishRole[]
    not?: NestedEnumPublishRoleFilter<$PrismaModel> | $Enums.PublishRole
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPublishRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishRole | EnumPublishRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PublishRole[]
    notIn?: $Enums.PublishRole[]
    not?: NestedEnumPublishRoleWithAggregatesFilter<$PrismaModel> | $Enums.PublishRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishRoleFilter<$PrismaModel>
    _max?: NestedEnumPublishRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookStorageCreateWithoutUserInput = {
    books?: BookCreateNestedManyWithoutBookStorageInput
    category?: CategoryCreateNestedOneWithoutBookStorageInput
  }

  export type BookStorageUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId?: number | null
    books?: BookUncheckedCreateNestedManyWithoutBookStorageInput
  }

  export type BookStorageCreateOrConnectWithoutUserInput = {
    where: BookStorageWhereUniqueInput
    create: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput>
  }

  export type BookStorageCreateManyUserInputEnvelope = {
    data: BookStorageCreateManyUserInput | BookStorageCreateManyUserInput[]
  }

  export type BookCreateWithoutAuthorInput = {
    title: string
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
    BookStorage?: BookStorageCreateNestedManyWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutBooksInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
  }

  export type UserStorageCreateWithoutUserInput = {
    category?: CategoryCreateNestedOneWithoutUserStorageInput
  }

  export type UserStorageUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId?: number | null
  }

  export type UserStorageCreateOrConnectWithoutUserInput = {
    where: UserStorageWhereUniqueInput
    create: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput>
  }

  export type UserStorageCreateManyUserInputEnvelope = {
    data: UserStorageCreateManyUserInput | UserStorageCreateManyUserInput[]
  }

  export type BookStorageUpsertWithWhereUniqueWithoutUserInput = {
    where: BookStorageWhereUniqueInput
    update: XOR<BookStorageUpdateWithoutUserInput, BookStorageUncheckedUpdateWithoutUserInput>
    create: XOR<BookStorageCreateWithoutUserInput, BookStorageUncheckedCreateWithoutUserInput>
  }

  export type BookStorageUpdateWithWhereUniqueWithoutUserInput = {
    where: BookStorageWhereUniqueInput
    data: XOR<BookStorageUpdateWithoutUserInput, BookStorageUncheckedUpdateWithoutUserInput>
  }

  export type BookStorageUpdateManyWithWhereWithoutUserInput = {
    where: BookStorageScalarWhereInput
    data: XOR<BookStorageUpdateManyMutationInput, BookStorageUncheckedUpdateManyWithoutUserInput>
  }

  export type BookStorageScalarWhereInput = {
    AND?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
    OR?: BookStorageScalarWhereInput[]
    NOT?: BookStorageScalarWhereInput | BookStorageScalarWhereInput[]
    id?: IntFilter<"BookStorage"> | number
    userId?: IntNullableFilter<"BookStorage"> | number | null
    categoryId?: IntNullableFilter<"BookStorage"> | number | null
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntNullableFilter<"Book"> | number | null
    publishDate?: DateTimeFilter<"Book"> | Date | string
    file?: StringFilter<"Book"> | string
    isBookPosted?: BoolFilter<"Book"> | boolean
  }

  export type UserStorageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStorageWhereUniqueInput
    update: XOR<UserStorageUpdateWithoutUserInput, UserStorageUncheckedUpdateWithoutUserInput>
    create: XOR<UserStorageCreateWithoutUserInput, UserStorageUncheckedCreateWithoutUserInput>
  }

  export type UserStorageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStorageWhereUniqueInput
    data: XOR<UserStorageUpdateWithoutUserInput, UserStorageUncheckedUpdateWithoutUserInput>
  }

  export type UserStorageUpdateManyWithWhereWithoutUserInput = {
    where: UserStorageScalarWhereInput
    data: XOR<UserStorageUpdateManyMutationInput, UserStorageUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStorageScalarWhereInput = {
    AND?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
    OR?: UserStorageScalarWhereInput[]
    NOT?: UserStorageScalarWhereInput | UserStorageScalarWhereInput[]
    id?: IntFilter<"UserStorage"> | number
    userId?: IntFilter<"UserStorage"> | number
    categoryId?: IntNullableFilter<"UserStorage"> | number | null
  }

  export type UserCreateWithoutUserStorageInput = {
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageCreateNestedManyWithoutUserInput
    Book?: BookCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutUserStorageInput = {
    id?: number
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutUserInput
    Book?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutUserStorageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStorageInput, UserUncheckedCreateWithoutUserStorageInput>
  }

  export type CategoryCreateWithoutUserStorageInput = {
    name: string
    BookStorage?: BookStorageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserStorageInput = {
    id?: number
    name: string
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserStorageInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserStorageInput, CategoryUncheckedCreateWithoutUserStorageInput>
  }

  export type UserUpsertWithoutUserStorageInput = {
    update: XOR<UserUpdateWithoutUserStorageInput, UserUncheckedUpdateWithoutUserStorageInput>
    create: XOR<UserCreateWithoutUserStorageInput, UserUncheckedCreateWithoutUserStorageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStorageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStorageInput, UserUncheckedUpdateWithoutUserStorageInput>
  }

  export type UserUpdateWithoutUserStorageInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUpdateManyWithoutUserNestedInput
    Book?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUncheckedUpdateManyWithoutUserNestedInput
    Book?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CategoryUpsertWithoutUserStorageInput = {
    update: XOR<CategoryUpdateWithoutUserStorageInput, CategoryUncheckedUpdateWithoutUserStorageInput>
    create: XOR<CategoryCreateWithoutUserStorageInput, CategoryUncheckedCreateWithoutUserStorageInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutUserStorageInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutUserStorageInput, CategoryUncheckedUpdateWithoutUserStorageInput>
  }

  export type CategoryUpdateWithoutUserStorageInput = {
    name?: StringFieldUpdateOperationsInput | string
    BookStorage?: BookStorageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    BookStorage?: BookStorageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookStorageCreateWithoutCategoryInput = {
    books?: BookCreateNestedManyWithoutBookStorageInput
    user?: UserCreateNestedOneWithoutBookStorageInput
  }

  export type BookStorageUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId?: number | null
    books?: BookUncheckedCreateNestedManyWithoutBookStorageInput
  }

  export type BookStorageCreateOrConnectWithoutCategoryInput = {
    where: BookStorageWhereUniqueInput
    create: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput>
  }

  export type BookStorageCreateManyCategoryInputEnvelope = {
    data: BookStorageCreateManyCategoryInput | BookStorageCreateManyCategoryInput[]
  }

  export type UserStorageCreateWithoutCategoryInput = {
    user: UserCreateNestedOneWithoutUserStorageInput
  }

  export type UserStorageUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
  }

  export type UserStorageCreateOrConnectWithoutCategoryInput = {
    where: UserStorageWhereUniqueInput
    create: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput>
  }

  export type UserStorageCreateManyCategoryInputEnvelope = {
    data: UserStorageCreateManyCategoryInput | UserStorageCreateManyCategoryInput[]
  }

  export type BookStorageUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookStorageWhereUniqueInput
    update: XOR<BookStorageUpdateWithoutCategoryInput, BookStorageUncheckedUpdateWithoutCategoryInput>
    create: XOR<BookStorageCreateWithoutCategoryInput, BookStorageUncheckedCreateWithoutCategoryInput>
  }

  export type BookStorageUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookStorageWhereUniqueInput
    data: XOR<BookStorageUpdateWithoutCategoryInput, BookStorageUncheckedUpdateWithoutCategoryInput>
  }

  export type BookStorageUpdateManyWithWhereWithoutCategoryInput = {
    where: BookStorageScalarWhereInput
    data: XOR<BookStorageUpdateManyMutationInput, BookStorageUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserStorageUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UserStorageWhereUniqueInput
    update: XOR<UserStorageUpdateWithoutCategoryInput, UserStorageUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserStorageCreateWithoutCategoryInput, UserStorageUncheckedCreateWithoutCategoryInput>
  }

  export type UserStorageUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UserStorageWhereUniqueInput
    data: XOR<UserStorageUpdateWithoutCategoryInput, UserStorageUncheckedUpdateWithoutCategoryInput>
  }

  export type UserStorageUpdateManyWithWhereWithoutCategoryInput = {
    where: UserStorageScalarWhereInput
    data: XOR<UserStorageUpdateManyMutationInput, UserStorageUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutBookInput = {
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageCreateNestedManyWithoutUserInput
    UserStorage?: UserStorageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookInput = {
    id?: number
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    BookStorage?: BookStorageUncheckedCreateNestedManyWithoutUserInput
    UserStorage?: UserStorageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
  }

  export type BookStorageCreateWithoutBooksInput = {
    user?: UserCreateNestedOneWithoutBookStorageInput
    category?: CategoryCreateNestedOneWithoutBookStorageInput
  }

  export type BookStorageUncheckedCreateWithoutBooksInput = {
    id?: number
    userId?: number | null
    categoryId?: number | null
  }

  export type BookStorageCreateOrConnectWithoutBooksInput = {
    where: BookStorageWhereUniqueInput
    create: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput>
  }

  export type UserUpsertWithoutBookInput = {
    update: XOR<UserUpdateWithoutBookInput, UserUncheckedUpdateWithoutBookInput>
    create: XOR<UserCreateWithoutBookInput, UserUncheckedCreateWithoutBookInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookInput, UserUncheckedUpdateWithoutBookInput>
  }

  export type UserUpdateWithoutBookInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUpdateManyWithoutUserNestedInput
    UserStorage?: UserStorageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    BookStorage?: BookStorageUncheckedUpdateManyWithoutUserNestedInput
    UserStorage?: UserStorageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookStorageUpsertWithWhereUniqueWithoutBooksInput = {
    where: BookStorageWhereUniqueInput
    update: XOR<BookStorageUpdateWithoutBooksInput, BookStorageUncheckedUpdateWithoutBooksInput>
    create: XOR<BookStorageCreateWithoutBooksInput, BookStorageUncheckedCreateWithoutBooksInput>
  }

  export type BookStorageUpdateWithWhereUniqueWithoutBooksInput = {
    where: BookStorageWhereUniqueInput
    data: XOR<BookStorageUpdateWithoutBooksInput, BookStorageUncheckedUpdateWithoutBooksInput>
  }

  export type BookStorageUpdateManyWithWhereWithoutBooksInput = {
    where: BookStorageScalarWhereInput
    data: XOR<BookStorageUpdateManyMutationInput, BookStorageUncheckedUpdateManyWithoutBooksInput>
  }

  export type BookCreateWithoutBookStorageInput = {
    title: string
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
    author?: UserCreateNestedOneWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBookStorageInput = {
    id?: number
    title: string
    authorId?: number | null
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
  }

  export type BookCreateOrConnectWithoutBookStorageInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput>
  }

  export type UserCreateWithoutBookStorageInput = {
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    Book?: BookCreateNestedManyWithoutAuthorInput
    UserStorage?: UserStorageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookStorageInput = {
    id?: number
    userName?: string | null
    email?: string | null
    role?: $Enums.Role
    publishRole?: $Enums.PublishRole
    Book?: BookUncheckedCreateNestedManyWithoutAuthorInput
    UserStorage?: UserStorageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookStorageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookStorageInput, UserUncheckedCreateWithoutBookStorageInput>
  }

  export type CategoryCreateWithoutBookStorageInput = {
    name: string
    UserStorage?: UserStorageCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBookStorageInput = {
    id?: number
    name: string
    UserStorage?: UserStorageUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBookStorageInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBookStorageInput, CategoryUncheckedCreateWithoutBookStorageInput>
  }

  export type BookUpsertWithWhereUniqueWithoutBookStorageInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutBookStorageInput, BookUncheckedUpdateWithoutBookStorageInput>
    create: XOR<BookCreateWithoutBookStorageInput, BookUncheckedCreateWithoutBookStorageInput>
  }

  export type BookUpdateWithWhereUniqueWithoutBookStorageInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutBookStorageInput, BookUncheckedUpdateWithoutBookStorageInput>
  }

  export type BookUpdateManyWithWhereWithoutBookStorageInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutBookStorageInput>
  }

  export type UserUpsertWithoutBookStorageInput = {
    update: XOR<UserUpdateWithoutBookStorageInput, UserUncheckedUpdateWithoutBookStorageInput>
    create: XOR<UserCreateWithoutBookStorageInput, UserUncheckedCreateWithoutBookStorageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookStorageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookStorageInput, UserUncheckedUpdateWithoutBookStorageInput>
  }

  export type UserUpdateWithoutBookStorageInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    Book?: BookUpdateManyWithoutAuthorNestedInput
    UserStorage?: UserStorageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    publishRole?: EnumPublishRoleFieldUpdateOperationsInput | $Enums.PublishRole
    Book?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    UserStorage?: UserStorageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutBookStorageInput = {
    update: XOR<CategoryUpdateWithoutBookStorageInput, CategoryUncheckedUpdateWithoutBookStorageInput>
    create: XOR<CategoryCreateWithoutBookStorageInput, CategoryUncheckedCreateWithoutBookStorageInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBookStorageInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBookStorageInput, CategoryUncheckedUpdateWithoutBookStorageInput>
  }

  export type CategoryUpdateWithoutBookStorageInput = {
    name?: StringFieldUpdateOperationsInput | string
    UserStorage?: UserStorageUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBookStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserStorage?: UserStorageUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookStorageCreateManyUserInput = {
    id?: number
    categoryId?: number | null
  }

  export type BookCreateManyAuthorInput = {
    id?: number
    title: string
    publishDate: Date | string
    file: string
    isBookPosted?: boolean
  }

  export type UserStorageCreateManyUserInput = {
    id?: number
    categoryId?: number | null
  }

  export type BookStorageUpdateWithoutUserInput = {
    books?: BookUpdateManyWithoutBookStorageNestedInput
    category?: CategoryUpdateOneWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
    BookStorage?: BookStorageUpdateManyWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
    BookStorage?: BookStorageUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserStorageUpdateWithoutUserInput = {
    category?: CategoryUpdateOneWithoutUserStorageNestedInput
  }

  export type UserStorageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserStorageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookStorageCreateManyCategoryInput = {
    id?: number
    userId?: number | null
  }

  export type UserStorageCreateManyCategoryInput = {
    id?: number
    userId: number
  }

  export type BookStorageUpdateWithoutCategoryInput = {
    books?: BookUpdateManyWithoutBookStorageNestedInput
    user?: UserUpdateOneWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserStorageUpdateWithoutCategoryInput = {
    user?: UserUpdateOneRequiredWithoutUserStorageNestedInput
  }

  export type UserStorageUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStorageUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookStorageUpdateWithoutBooksInput = {
    user?: UserUpdateOneWithoutBookStorageNestedInput
    category?: CategoryUpdateOneWithoutBookStorageNestedInput
  }

  export type BookStorageUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookStorageUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookUpdateWithoutBookStorageInput = {
    title?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBookStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookUncheckedUpdateManyWithoutBookStorageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StringFieldUpdateOperationsInput | string
    isBookPosted?: BoolFieldUpdateOperationsInput | boolean
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