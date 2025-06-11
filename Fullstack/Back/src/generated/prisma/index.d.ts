
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
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Hierarchy
 * 
 */
export type Hierarchy = $Result.DefaultSelection<Prisma.$HierarchyPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Type_Devices
 * 
 */
export type Type_Devices = $Result.DefaultSelection<Prisma.$Type_DevicesPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Institutions
 * const institutions = await prisma.institution.findMany()
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
   * // Fetch zero or more Institutions
   * const institutions = await prisma.institution.findMany()
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
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hierarchy`: Exposes CRUD operations for the **Hierarchy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hierarchies
    * const hierarchies = await prisma.hierarchy.findMany()
    * ```
    */
  get hierarchy(): Prisma.HierarchyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_Devices`: Exposes CRUD operations for the **Type_Devices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_Devices
    * const type_Devices = await prisma.type_Devices.findMany()
    * ```
    */
  get type_Devices(): Prisma.Type_DevicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Institution: 'Institution',
    Admin: 'Admin',
    Hierarchy: 'Hierarchy',
    Person: 'Person',
    Type_Devices: 'Type_Devices',
    Device: 'Device',
    Activity: 'Activity'
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
      modelProps: "institution" | "admin" | "hierarchy" | "person" | "type_Devices" | "device" | "activity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Hierarchy: {
        payload: Prisma.$HierarchyPayload<ExtArgs>
        fields: Prisma.HierarchyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HierarchyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HierarchyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          findFirst: {
            args: Prisma.HierarchyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HierarchyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          findMany: {
            args: Prisma.HierarchyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>[]
          }
          create: {
            args: Prisma.HierarchyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          createMany: {
            args: Prisma.HierarchyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HierarchyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>[]
          }
          delete: {
            args: Prisma.HierarchyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          update: {
            args: Prisma.HierarchyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          deleteMany: {
            args: Prisma.HierarchyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HierarchyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HierarchyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>[]
          }
          upsert: {
            args: Prisma.HierarchyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HierarchyPayload>
          }
          aggregate: {
            args: Prisma.HierarchyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHierarchy>
          }
          groupBy: {
            args: Prisma.HierarchyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HierarchyGroupByOutputType>[]
          }
          count: {
            args: Prisma.HierarchyCountArgs<ExtArgs>
            result: $Utils.Optional<HierarchyCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Type_Devices: {
        payload: Prisma.$Type_DevicesPayload<ExtArgs>
        fields: Prisma.Type_DevicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Type_DevicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Type_DevicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          findFirst: {
            args: Prisma.Type_DevicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Type_DevicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          findMany: {
            args: Prisma.Type_DevicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>[]
          }
          create: {
            args: Prisma.Type_DevicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          createMany: {
            args: Prisma.Type_DevicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Type_DevicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>[]
          }
          delete: {
            args: Prisma.Type_DevicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          update: {
            args: Prisma.Type_DevicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          deleteMany: {
            args: Prisma.Type_DevicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Type_DevicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Type_DevicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>[]
          }
          upsert: {
            args: Prisma.Type_DevicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Type_DevicesPayload>
          }
          aggregate: {
            args: Prisma.Type_DevicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_Devices>
          }
          groupBy: {
            args: Prisma.Type_DevicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_DevicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Type_DevicesCountArgs<ExtArgs>
            result: $Utils.Optional<Type_DevicesCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
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
    institution?: InstitutionOmit
    admin?: AdminOmit
    hierarchy?: HierarchyOmit
    person?: PersonOmit
    type_Devices?: Type_DevicesOmit
    device?: DeviceOmit
    activity?: ActivityOmit
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
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    admins: number
    persons: number
    devices: number
    activity: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | InstitutionCountOutputTypeCountAdminsArgs
    persons?: boolean | InstitutionCountOutputTypeCountPersonsArgs
    devices?: boolean | InstitutionCountOutputTypeCountDevicesArgs
    activity?: boolean | InstitutionCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type HierarchyCountOutputType
   */

  export type HierarchyCountOutputType = {
    persons: number
  }

  export type HierarchyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | HierarchyCountOutputTypeCountPersonsArgs
  }

  // Custom InputTypes
  /**
   * HierarchyCountOutputType without action
   */
  export type HierarchyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HierarchyCountOutputType
     */
    select?: HierarchyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HierarchyCountOutputType without action
   */
  export type HierarchyCountOutputTypeCountPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    activity: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | PersonCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type Type_DevicesCountOutputType
   */

  export type Type_DevicesCountOutputType = {
    devices: number
  }

  export type Type_DevicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | Type_DevicesCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * Type_DevicesCountOutputType without action
   */
  export type Type_DevicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_DevicesCountOutputType
     */
    select?: Type_DevicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Type_DevicesCountOutputType without action
   */
  export type Type_DevicesCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    inst_ID: string | null
    name: string | null
  }

  export type InstitutionMaxAggregateOutputType = {
    inst_ID: string | null
    name: string | null
  }

  export type InstitutionCountAggregateOutputType = {
    inst_ID: number
    name: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    inst_ID?: true
    name?: true
  }

  export type InstitutionMaxAggregateInputType = {
    inst_ID?: true
    name?: true
  }

  export type InstitutionCountAggregateInputType = {
    inst_ID?: true
    name?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    inst_ID: string
    name: string
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inst_ID?: boolean
    name?: boolean
    admins?: boolean | Institution$adminsArgs<ExtArgs>
    persons?: boolean | Institution$personsArgs<ExtArgs>
    devices?: boolean | Institution$devicesArgs<ExtArgs>
    activity?: boolean | Institution$activityArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inst_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inst_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    inst_ID?: boolean
    name?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inst_ID" | "name", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Institution$adminsArgs<ExtArgs>
    persons?: boolean | Institution$personsArgs<ExtArgs>
    devices?: boolean | Institution$devicesArgs<ExtArgs>
    activity?: boolean | Institution$activityArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      admins: Prisma.$AdminPayload<ExtArgs>[]
      persons: Prisma.$PersonPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      activity: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      inst_ID: string
      name: string
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `inst_ID`
     * const institutionWithInst_IDOnly = await prisma.institution.findMany({ select: { inst_ID: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `inst_ID`
     * const institutionWithInst_IDOnly = await prisma.institution.createManyAndReturn({
     *   select: { inst_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `inst_ID`
     * const institutionWithInst_IDOnly = await prisma.institution.updateManyAndReturn({
     *   select: { inst_ID: true },
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
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
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
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Institution$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    persons<T extends Institution$personsArgs<ExtArgs> = {}>(args?: Subset<T, Institution$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends Institution$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Institution$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity<T extends Institution$activityArgs<ExtArgs> = {}>(args?: Subset<T, Institution$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly inst_ID: FieldRef<"Institution", 'String'>
    readonly name: FieldRef<"Institution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.admins
   */
  export type Institution$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Institution.persons
   */
  export type Institution$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Institution.devices
   */
  export type Institution$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Institution.activity
   */
  export type Institution$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    email: string | null
    name: string | null
    password: string | null
    institutionID: string | null
  }

  export type AdminMaxAggregateOutputType = {
    email: string | null
    name: string | null
    password: string | null
    institutionID: string | null
  }

  export type AdminCountAggregateOutputType = {
    email: number
    name: number
    password: number
    institutionID: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    email?: true
    name?: true
    password?: true
    institutionID?: true
  }

  export type AdminMaxAggregateInputType = {
    email?: true
    name?: true
    password?: true
    institutionID?: true
  }

  export type AdminCountAggregateInputType = {
    email?: true
    name?: true
    password?: true
    institutionID?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    email: string
    name: string
    password: string
    institutionID: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    password?: boolean
    institutionID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    password?: boolean
    institutionID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    password?: boolean
    institutionID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    email?: boolean
    name?: boolean
    password?: boolean
    institutionID?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "name" | "password" | "institutionID", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      name: string
      password: string
      institutionID: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const adminWithEmailOnly = await prisma.admin.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `email`
     * const adminWithEmailOnly = await prisma.admin.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `email`
     * const adminWithEmailOnly = await prisma.admin.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly email: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly institutionID: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Hierarchy
   */

  export type AggregateHierarchy = {
    _count: HierarchyCountAggregateOutputType | null
    _avg: HierarchyAvgAggregateOutputType | null
    _sum: HierarchySumAggregateOutputType | null
    _min: HierarchyMinAggregateOutputType | null
    _max: HierarchyMaxAggregateOutputType | null
  }

  export type HierarchyAvgAggregateOutputType = {
    hier_ID: number | null
  }

  export type HierarchySumAggregateOutputType = {
    hier_ID: number | null
  }

  export type HierarchyMinAggregateOutputType = {
    hier_ID: number | null
    name: string | null
  }

  export type HierarchyMaxAggregateOutputType = {
    hier_ID: number | null
    name: string | null
  }

  export type HierarchyCountAggregateOutputType = {
    hier_ID: number
    name: number
    _all: number
  }


  export type HierarchyAvgAggregateInputType = {
    hier_ID?: true
  }

  export type HierarchySumAggregateInputType = {
    hier_ID?: true
  }

  export type HierarchyMinAggregateInputType = {
    hier_ID?: true
    name?: true
  }

  export type HierarchyMaxAggregateInputType = {
    hier_ID?: true
    name?: true
  }

  export type HierarchyCountAggregateInputType = {
    hier_ID?: true
    name?: true
    _all?: true
  }

  export type HierarchyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hierarchy to aggregate.
     */
    where?: HierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hierarchies to fetch.
     */
    orderBy?: HierarchyOrderByWithRelationInput | HierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hierarchies
    **/
    _count?: true | HierarchyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HierarchyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HierarchySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HierarchyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HierarchyMaxAggregateInputType
  }

  export type GetHierarchyAggregateType<T extends HierarchyAggregateArgs> = {
        [P in keyof T & keyof AggregateHierarchy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHierarchy[P]>
      : GetScalarType<T[P], AggregateHierarchy[P]>
  }




  export type HierarchyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HierarchyWhereInput
    orderBy?: HierarchyOrderByWithAggregationInput | HierarchyOrderByWithAggregationInput[]
    by: HierarchyScalarFieldEnum[] | HierarchyScalarFieldEnum
    having?: HierarchyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HierarchyCountAggregateInputType | true
    _avg?: HierarchyAvgAggregateInputType
    _sum?: HierarchySumAggregateInputType
    _min?: HierarchyMinAggregateInputType
    _max?: HierarchyMaxAggregateInputType
  }

  export type HierarchyGroupByOutputType = {
    hier_ID: number
    name: string
    _count: HierarchyCountAggregateOutputType | null
    _avg: HierarchyAvgAggregateOutputType | null
    _sum: HierarchySumAggregateOutputType | null
    _min: HierarchyMinAggregateOutputType | null
    _max: HierarchyMaxAggregateOutputType | null
  }

  type GetHierarchyGroupByPayload<T extends HierarchyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HierarchyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HierarchyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HierarchyGroupByOutputType[P]>
            : GetScalarType<T[P], HierarchyGroupByOutputType[P]>
        }
      >
    >


  export type HierarchySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hier_ID?: boolean
    name?: boolean
    persons?: boolean | Hierarchy$personsArgs<ExtArgs>
    _count?: boolean | HierarchyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hierarchy"]>

  export type HierarchySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hier_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["hierarchy"]>

  export type HierarchySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hier_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["hierarchy"]>

  export type HierarchySelectScalar = {
    hier_ID?: boolean
    name?: boolean
  }

  export type HierarchyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hier_ID" | "name", ExtArgs["result"]["hierarchy"]>
  export type HierarchyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persons?: boolean | Hierarchy$personsArgs<ExtArgs>
    _count?: boolean | HierarchyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HierarchyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HierarchyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HierarchyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hierarchy"
    objects: {
      persons: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hier_ID: number
      name: string
    }, ExtArgs["result"]["hierarchy"]>
    composites: {}
  }

  type HierarchyGetPayload<S extends boolean | null | undefined | HierarchyDefaultArgs> = $Result.GetResult<Prisma.$HierarchyPayload, S>

  type HierarchyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HierarchyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HierarchyCountAggregateInputType | true
    }

  export interface HierarchyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hierarchy'], meta: { name: 'Hierarchy' } }
    /**
     * Find zero or one Hierarchy that matches the filter.
     * @param {HierarchyFindUniqueArgs} args - Arguments to find a Hierarchy
     * @example
     * // Get one Hierarchy
     * const hierarchy = await prisma.hierarchy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HierarchyFindUniqueArgs>(args: SelectSubset<T, HierarchyFindUniqueArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hierarchy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HierarchyFindUniqueOrThrowArgs} args - Arguments to find a Hierarchy
     * @example
     * // Get one Hierarchy
     * const hierarchy = await prisma.hierarchy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HierarchyFindUniqueOrThrowArgs>(args: SelectSubset<T, HierarchyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hierarchy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyFindFirstArgs} args - Arguments to find a Hierarchy
     * @example
     * // Get one Hierarchy
     * const hierarchy = await prisma.hierarchy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HierarchyFindFirstArgs>(args?: SelectSubset<T, HierarchyFindFirstArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hierarchy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyFindFirstOrThrowArgs} args - Arguments to find a Hierarchy
     * @example
     * // Get one Hierarchy
     * const hierarchy = await prisma.hierarchy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HierarchyFindFirstOrThrowArgs>(args?: SelectSubset<T, HierarchyFindFirstOrThrowArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hierarchies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hierarchies
     * const hierarchies = await prisma.hierarchy.findMany()
     * 
     * // Get first 10 Hierarchies
     * const hierarchies = await prisma.hierarchy.findMany({ take: 10 })
     * 
     * // Only select the `hier_ID`
     * const hierarchyWithHier_IDOnly = await prisma.hierarchy.findMany({ select: { hier_ID: true } })
     * 
     */
    findMany<T extends HierarchyFindManyArgs>(args?: SelectSubset<T, HierarchyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hierarchy.
     * @param {HierarchyCreateArgs} args - Arguments to create a Hierarchy.
     * @example
     * // Create one Hierarchy
     * const Hierarchy = await prisma.hierarchy.create({
     *   data: {
     *     // ... data to create a Hierarchy
     *   }
     * })
     * 
     */
    create<T extends HierarchyCreateArgs>(args: SelectSubset<T, HierarchyCreateArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hierarchies.
     * @param {HierarchyCreateManyArgs} args - Arguments to create many Hierarchies.
     * @example
     * // Create many Hierarchies
     * const hierarchy = await prisma.hierarchy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HierarchyCreateManyArgs>(args?: SelectSubset<T, HierarchyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hierarchies and returns the data saved in the database.
     * @param {HierarchyCreateManyAndReturnArgs} args - Arguments to create many Hierarchies.
     * @example
     * // Create many Hierarchies
     * const hierarchy = await prisma.hierarchy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hierarchies and only return the `hier_ID`
     * const hierarchyWithHier_IDOnly = await prisma.hierarchy.createManyAndReturn({
     *   select: { hier_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HierarchyCreateManyAndReturnArgs>(args?: SelectSubset<T, HierarchyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hierarchy.
     * @param {HierarchyDeleteArgs} args - Arguments to delete one Hierarchy.
     * @example
     * // Delete one Hierarchy
     * const Hierarchy = await prisma.hierarchy.delete({
     *   where: {
     *     // ... filter to delete one Hierarchy
     *   }
     * })
     * 
     */
    delete<T extends HierarchyDeleteArgs>(args: SelectSubset<T, HierarchyDeleteArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hierarchy.
     * @param {HierarchyUpdateArgs} args - Arguments to update one Hierarchy.
     * @example
     * // Update one Hierarchy
     * const hierarchy = await prisma.hierarchy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HierarchyUpdateArgs>(args: SelectSubset<T, HierarchyUpdateArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hierarchies.
     * @param {HierarchyDeleteManyArgs} args - Arguments to filter Hierarchies to delete.
     * @example
     * // Delete a few Hierarchies
     * const { count } = await prisma.hierarchy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HierarchyDeleteManyArgs>(args?: SelectSubset<T, HierarchyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hierarchies
     * const hierarchy = await prisma.hierarchy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HierarchyUpdateManyArgs>(args: SelectSubset<T, HierarchyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hierarchies and returns the data updated in the database.
     * @param {HierarchyUpdateManyAndReturnArgs} args - Arguments to update many Hierarchies.
     * @example
     * // Update many Hierarchies
     * const hierarchy = await prisma.hierarchy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hierarchies and only return the `hier_ID`
     * const hierarchyWithHier_IDOnly = await prisma.hierarchy.updateManyAndReturn({
     *   select: { hier_ID: true },
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
    updateManyAndReturn<T extends HierarchyUpdateManyAndReturnArgs>(args: SelectSubset<T, HierarchyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hierarchy.
     * @param {HierarchyUpsertArgs} args - Arguments to update or create a Hierarchy.
     * @example
     * // Update or create a Hierarchy
     * const hierarchy = await prisma.hierarchy.upsert({
     *   create: {
     *     // ... data to create a Hierarchy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hierarchy we want to update
     *   }
     * })
     */
    upsert<T extends HierarchyUpsertArgs>(args: SelectSubset<T, HierarchyUpsertArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyCountArgs} args - Arguments to filter Hierarchies to count.
     * @example
     * // Count the number of Hierarchies
     * const count = await prisma.hierarchy.count({
     *   where: {
     *     // ... the filter for the Hierarchies we want to count
     *   }
     * })
    **/
    count<T extends HierarchyCountArgs>(
      args?: Subset<T, HierarchyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HierarchyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HierarchyAggregateArgs>(args: Subset<T, HierarchyAggregateArgs>): Prisma.PrismaPromise<GetHierarchyAggregateType<T>>

    /**
     * Group by Hierarchy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarchyGroupByArgs} args - Group by arguments.
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
      T extends HierarchyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HierarchyGroupByArgs['orderBy'] }
        : { orderBy?: HierarchyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HierarchyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHierarchyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hierarchy model
   */
  readonly fields: HierarchyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hierarchy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HierarchyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persons<T extends Hierarchy$personsArgs<ExtArgs> = {}>(args?: Subset<T, Hierarchy$personsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hierarchy model
   */
  interface HierarchyFieldRefs {
    readonly hier_ID: FieldRef<"Hierarchy", 'Int'>
    readonly name: FieldRef<"Hierarchy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hierarchy findUnique
   */
  export type HierarchyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter, which Hierarchy to fetch.
     */
    where: HierarchyWhereUniqueInput
  }

  /**
   * Hierarchy findUniqueOrThrow
   */
  export type HierarchyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter, which Hierarchy to fetch.
     */
    where: HierarchyWhereUniqueInput
  }

  /**
   * Hierarchy findFirst
   */
  export type HierarchyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter, which Hierarchy to fetch.
     */
    where?: HierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hierarchies to fetch.
     */
    orderBy?: HierarchyOrderByWithRelationInput | HierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hierarchies.
     */
    cursor?: HierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hierarchies.
     */
    distinct?: HierarchyScalarFieldEnum | HierarchyScalarFieldEnum[]
  }

  /**
   * Hierarchy findFirstOrThrow
   */
  export type HierarchyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter, which Hierarchy to fetch.
     */
    where?: HierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hierarchies to fetch.
     */
    orderBy?: HierarchyOrderByWithRelationInput | HierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hierarchies.
     */
    cursor?: HierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hierarchies.
     */
    distinct?: HierarchyScalarFieldEnum | HierarchyScalarFieldEnum[]
  }

  /**
   * Hierarchy findMany
   */
  export type HierarchyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter, which Hierarchies to fetch.
     */
    where?: HierarchyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hierarchies to fetch.
     */
    orderBy?: HierarchyOrderByWithRelationInput | HierarchyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hierarchies.
     */
    cursor?: HierarchyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hierarchies.
     */
    skip?: number
    distinct?: HierarchyScalarFieldEnum | HierarchyScalarFieldEnum[]
  }

  /**
   * Hierarchy create
   */
  export type HierarchyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * The data needed to create a Hierarchy.
     */
    data: XOR<HierarchyCreateInput, HierarchyUncheckedCreateInput>
  }

  /**
   * Hierarchy createMany
   */
  export type HierarchyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hierarchies.
     */
    data: HierarchyCreateManyInput | HierarchyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hierarchy createManyAndReturn
   */
  export type HierarchyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * The data used to create many Hierarchies.
     */
    data: HierarchyCreateManyInput | HierarchyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hierarchy update
   */
  export type HierarchyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * The data needed to update a Hierarchy.
     */
    data: XOR<HierarchyUpdateInput, HierarchyUncheckedUpdateInput>
    /**
     * Choose, which Hierarchy to update.
     */
    where: HierarchyWhereUniqueInput
  }

  /**
   * Hierarchy updateMany
   */
  export type HierarchyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hierarchies.
     */
    data: XOR<HierarchyUpdateManyMutationInput, HierarchyUncheckedUpdateManyInput>
    /**
     * Filter which Hierarchies to update
     */
    where?: HierarchyWhereInput
    /**
     * Limit how many Hierarchies to update.
     */
    limit?: number
  }

  /**
   * Hierarchy updateManyAndReturn
   */
  export type HierarchyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * The data used to update Hierarchies.
     */
    data: XOR<HierarchyUpdateManyMutationInput, HierarchyUncheckedUpdateManyInput>
    /**
     * Filter which Hierarchies to update
     */
    where?: HierarchyWhereInput
    /**
     * Limit how many Hierarchies to update.
     */
    limit?: number
  }

  /**
   * Hierarchy upsert
   */
  export type HierarchyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * The filter to search for the Hierarchy to update in case it exists.
     */
    where: HierarchyWhereUniqueInput
    /**
     * In case the Hierarchy found by the `where` argument doesn't exist, create a new Hierarchy with this data.
     */
    create: XOR<HierarchyCreateInput, HierarchyUncheckedCreateInput>
    /**
     * In case the Hierarchy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HierarchyUpdateInput, HierarchyUncheckedUpdateInput>
  }

  /**
   * Hierarchy delete
   */
  export type HierarchyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
    /**
     * Filter which Hierarchy to delete.
     */
    where: HierarchyWhereUniqueInput
  }

  /**
   * Hierarchy deleteMany
   */
  export type HierarchyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hierarchies to delete
     */
    where?: HierarchyWhereInput
    /**
     * Limit how many Hierarchies to delete.
     */
    limit?: number
  }

  /**
   * Hierarchy.persons
   */
  export type Hierarchy$personsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Hierarchy without action
   */
  export type HierarchyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hierarchy
     */
    select?: HierarchySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hierarchy
     */
    omit?: HierarchyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HierarchyInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    person_ID: number | null
    hierarchyID: number | null
  }

  export type PersonSumAggregateOutputType = {
    person_ID: number | null
    hierarchyID: number | null
  }

  export type PersonMinAggregateOutputType = {
    person_ID: number | null
    name: string | null
    surname: string | null
    institutionID: string | null
    hierarchyID: number | null
  }

  export type PersonMaxAggregateOutputType = {
    person_ID: number | null
    name: string | null
    surname: string | null
    institutionID: string | null
    hierarchyID: number | null
  }

  export type PersonCountAggregateOutputType = {
    person_ID: number
    name: number
    surname: number
    institutionID: number
    hierarchyID: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    person_ID?: true
    hierarchyID?: true
  }

  export type PersonSumAggregateInputType = {
    person_ID?: true
    hierarchyID?: true
  }

  export type PersonMinAggregateInputType = {
    person_ID?: true
    name?: true
    surname?: true
    institutionID?: true
    hierarchyID?: true
  }

  export type PersonMaxAggregateInputType = {
    person_ID?: true
    name?: true
    surname?: true
    institutionID?: true
    hierarchyID?: true
  }

  export type PersonCountAggregateInputType = {
    person_ID?: true
    name?: true
    surname?: true
    institutionID?: true
    hierarchyID?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    person_ID: number
    name: string
    surname: string
    institutionID: string
    hierarchyID: number
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_ID?: boolean
    name?: boolean
    surname?: boolean
    institutionID?: boolean
    hierarchyID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
    activity?: boolean | Person$activityArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_ID?: boolean
    name?: boolean
    surname?: boolean
    institutionID?: boolean
    hierarchyID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_ID?: boolean
    name?: boolean
    surname?: boolean
    institutionID?: boolean
    hierarchyID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    person_ID?: boolean
    name?: boolean
    surname?: boolean
    institutionID?: boolean
    hierarchyID?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"person_ID" | "name" | "surname" | "institutionID" | "hierarchyID", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
    activity?: boolean | Person$activityArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    hierarchy?: boolean | HierarchyDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs>
      hierarchy: Prisma.$HierarchyPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      person_ID: number
      name: string
      surname: string
      institutionID: string
      hierarchyID: number
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `person_ID`
     * const personWithPerson_IDOnly = await prisma.person.findMany({ select: { person_ID: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `person_ID`
     * const personWithPerson_IDOnly = await prisma.person.createManyAndReturn({
     *   select: { person_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `person_ID`
     * const personWithPerson_IDOnly = await prisma.person.updateManyAndReturn({
     *   select: { person_ID: true },
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hierarchy<T extends HierarchyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HierarchyDefaultArgs<ExtArgs>>): Prisma__HierarchyClient<$Result.GetResult<Prisma.$HierarchyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends Person$activityArgs<ExtArgs> = {}>(args?: Subset<T, Person$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly person_ID: FieldRef<"Person", 'Int'>
    readonly name: FieldRef<"Person", 'String'>
    readonly surname: FieldRef<"Person", 'String'>
    readonly institutionID: FieldRef<"Person", 'String'>
    readonly hierarchyID: FieldRef<"Person", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.activity
   */
  export type Person$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Type_Devices
   */

  export type AggregateType_Devices = {
    _count: Type_DevicesCountAggregateOutputType | null
    _avg: Type_DevicesAvgAggregateOutputType | null
    _sum: Type_DevicesSumAggregateOutputType | null
    _min: Type_DevicesMinAggregateOutputType | null
    _max: Type_DevicesMaxAggregateOutputType | null
  }

  export type Type_DevicesAvgAggregateOutputType = {
    type_ID: number | null
  }

  export type Type_DevicesSumAggregateOutputType = {
    type_ID: number | null
  }

  export type Type_DevicesMinAggregateOutputType = {
    type_ID: number | null
    name: string | null
  }

  export type Type_DevicesMaxAggregateOutputType = {
    type_ID: number | null
    name: string | null
  }

  export type Type_DevicesCountAggregateOutputType = {
    type_ID: number
    name: number
    _all: number
  }


  export type Type_DevicesAvgAggregateInputType = {
    type_ID?: true
  }

  export type Type_DevicesSumAggregateInputType = {
    type_ID?: true
  }

  export type Type_DevicesMinAggregateInputType = {
    type_ID?: true
    name?: true
  }

  export type Type_DevicesMaxAggregateInputType = {
    type_ID?: true
    name?: true
  }

  export type Type_DevicesCountAggregateInputType = {
    type_ID?: true
    name?: true
    _all?: true
  }

  export type Type_DevicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type_Devices to aggregate.
     */
    where?: Type_DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_Devices to fetch.
     */
    orderBy?: Type_DevicesOrderByWithRelationInput | Type_DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Type_DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Type_Devices
    **/
    _count?: true | Type_DevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_DevicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_DevicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_DevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_DevicesMaxAggregateInputType
  }

  export type GetType_DevicesAggregateType<T extends Type_DevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateType_Devices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_Devices[P]>
      : GetScalarType<T[P], AggregateType_Devices[P]>
  }




  export type Type_DevicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Type_DevicesWhereInput
    orderBy?: Type_DevicesOrderByWithAggregationInput | Type_DevicesOrderByWithAggregationInput[]
    by: Type_DevicesScalarFieldEnum[] | Type_DevicesScalarFieldEnum
    having?: Type_DevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_DevicesCountAggregateInputType | true
    _avg?: Type_DevicesAvgAggregateInputType
    _sum?: Type_DevicesSumAggregateInputType
    _min?: Type_DevicesMinAggregateInputType
    _max?: Type_DevicesMaxAggregateInputType
  }

  export type Type_DevicesGroupByOutputType = {
    type_ID: number
    name: string
    _count: Type_DevicesCountAggregateOutputType | null
    _avg: Type_DevicesAvgAggregateOutputType | null
    _sum: Type_DevicesSumAggregateOutputType | null
    _min: Type_DevicesMinAggregateOutputType | null
    _max: Type_DevicesMaxAggregateOutputType | null
  }

  type GetType_DevicesGroupByPayload<T extends Type_DevicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_DevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_DevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_DevicesGroupByOutputType[P]>
            : GetScalarType<T[P], Type_DevicesGroupByOutputType[P]>
        }
      >
    >


  export type Type_DevicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_ID?: boolean
    name?: boolean
    devices?: boolean | Type_Devices$devicesArgs<ExtArgs>
    _count?: boolean | Type_DevicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type_Devices"]>

  export type Type_DevicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["type_Devices"]>

  export type Type_DevicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_ID?: boolean
    name?: boolean
  }, ExtArgs["result"]["type_Devices"]>

  export type Type_DevicesSelectScalar = {
    type_ID?: boolean
    name?: boolean
  }

  export type Type_DevicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_ID" | "name", ExtArgs["result"]["type_Devices"]>
  export type Type_DevicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | Type_Devices$devicesArgs<ExtArgs>
    _count?: boolean | Type_DevicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Type_DevicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Type_DevicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Type_DevicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type_Devices"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type_ID: number
      name: string
    }, ExtArgs["result"]["type_Devices"]>
    composites: {}
  }

  type Type_DevicesGetPayload<S extends boolean | null | undefined | Type_DevicesDefaultArgs> = $Result.GetResult<Prisma.$Type_DevicesPayload, S>

  type Type_DevicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Type_DevicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_DevicesCountAggregateInputType | true
    }

  export interface Type_DevicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type_Devices'], meta: { name: 'Type_Devices' } }
    /**
     * Find zero or one Type_Devices that matches the filter.
     * @param {Type_DevicesFindUniqueArgs} args - Arguments to find a Type_Devices
     * @example
     * // Get one Type_Devices
     * const type_Devices = await prisma.type_Devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Type_DevicesFindUniqueArgs>(args: SelectSubset<T, Type_DevicesFindUniqueArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_Devices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Type_DevicesFindUniqueOrThrowArgs} args - Arguments to find a Type_Devices
     * @example
     * // Get one Type_Devices
     * const type_Devices = await prisma.type_Devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Type_DevicesFindUniqueOrThrowArgs>(args: SelectSubset<T, Type_DevicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesFindFirstArgs} args - Arguments to find a Type_Devices
     * @example
     * // Get one Type_Devices
     * const type_Devices = await prisma.type_Devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Type_DevicesFindFirstArgs>(args?: SelectSubset<T, Type_DevicesFindFirstArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_Devices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesFindFirstOrThrowArgs} args - Arguments to find a Type_Devices
     * @example
     * // Get one Type_Devices
     * const type_Devices = await prisma.type_Devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Type_DevicesFindFirstOrThrowArgs>(args?: SelectSubset<T, Type_DevicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_Devices
     * const type_Devices = await prisma.type_Devices.findMany()
     * 
     * // Get first 10 Type_Devices
     * const type_Devices = await prisma.type_Devices.findMany({ take: 10 })
     * 
     * // Only select the `type_ID`
     * const type_DevicesWithType_IDOnly = await prisma.type_Devices.findMany({ select: { type_ID: true } })
     * 
     */
    findMany<T extends Type_DevicesFindManyArgs>(args?: SelectSubset<T, Type_DevicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_Devices.
     * @param {Type_DevicesCreateArgs} args - Arguments to create a Type_Devices.
     * @example
     * // Create one Type_Devices
     * const Type_Devices = await prisma.type_Devices.create({
     *   data: {
     *     // ... data to create a Type_Devices
     *   }
     * })
     * 
     */
    create<T extends Type_DevicesCreateArgs>(args: SelectSubset<T, Type_DevicesCreateArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_Devices.
     * @param {Type_DevicesCreateManyArgs} args - Arguments to create many Type_Devices.
     * @example
     * // Create many Type_Devices
     * const type_Devices = await prisma.type_Devices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Type_DevicesCreateManyArgs>(args?: SelectSubset<T, Type_DevicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Type_Devices and returns the data saved in the database.
     * @param {Type_DevicesCreateManyAndReturnArgs} args - Arguments to create many Type_Devices.
     * @example
     * // Create many Type_Devices
     * const type_Devices = await prisma.type_Devices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Type_Devices and only return the `type_ID`
     * const type_DevicesWithType_IDOnly = await prisma.type_Devices.createManyAndReturn({
     *   select: { type_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Type_DevicesCreateManyAndReturnArgs>(args?: SelectSubset<T, Type_DevicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type_Devices.
     * @param {Type_DevicesDeleteArgs} args - Arguments to delete one Type_Devices.
     * @example
     * // Delete one Type_Devices
     * const Type_Devices = await prisma.type_Devices.delete({
     *   where: {
     *     // ... filter to delete one Type_Devices
     *   }
     * })
     * 
     */
    delete<T extends Type_DevicesDeleteArgs>(args: SelectSubset<T, Type_DevicesDeleteArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_Devices.
     * @param {Type_DevicesUpdateArgs} args - Arguments to update one Type_Devices.
     * @example
     * // Update one Type_Devices
     * const type_Devices = await prisma.type_Devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Type_DevicesUpdateArgs>(args: SelectSubset<T, Type_DevicesUpdateArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_Devices.
     * @param {Type_DevicesDeleteManyArgs} args - Arguments to filter Type_Devices to delete.
     * @example
     * // Delete a few Type_Devices
     * const { count } = await prisma.type_Devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Type_DevicesDeleteManyArgs>(args?: SelectSubset<T, Type_DevicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_Devices
     * const type_Devices = await prisma.type_Devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Type_DevicesUpdateManyArgs>(args: SelectSubset<T, Type_DevicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_Devices and returns the data updated in the database.
     * @param {Type_DevicesUpdateManyAndReturnArgs} args - Arguments to update many Type_Devices.
     * @example
     * // Update many Type_Devices
     * const type_Devices = await prisma.type_Devices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Type_Devices and only return the `type_ID`
     * const type_DevicesWithType_IDOnly = await prisma.type_Devices.updateManyAndReturn({
     *   select: { type_ID: true },
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
    updateManyAndReturn<T extends Type_DevicesUpdateManyAndReturnArgs>(args: SelectSubset<T, Type_DevicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type_Devices.
     * @param {Type_DevicesUpsertArgs} args - Arguments to update or create a Type_Devices.
     * @example
     * // Update or create a Type_Devices
     * const type_Devices = await prisma.type_Devices.upsert({
     *   create: {
     *     // ... data to create a Type_Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_Devices we want to update
     *   }
     * })
     */
    upsert<T extends Type_DevicesUpsertArgs>(args: SelectSubset<T, Type_DevicesUpsertArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesCountArgs} args - Arguments to filter Type_Devices to count.
     * @example
     * // Count the number of Type_Devices
     * const count = await prisma.type_Devices.count({
     *   where: {
     *     // ... the filter for the Type_Devices we want to count
     *   }
     * })
    **/
    count<T extends Type_DevicesCountArgs>(
      args?: Subset<T, Type_DevicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_DevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_DevicesAggregateArgs>(args: Subset<T, Type_DevicesAggregateArgs>): Prisma.PrismaPromise<GetType_DevicesAggregateType<T>>

    /**
     * Group by Type_Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_DevicesGroupByArgs} args - Group by arguments.
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
      T extends Type_DevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Type_DevicesGroupByArgs['orderBy'] }
        : { orderBy?: Type_DevicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Type_DevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_DevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type_Devices model
   */
  readonly fields: Type_DevicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type_Devices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Type_DevicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends Type_Devices$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Type_Devices$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Type_Devices model
   */
  interface Type_DevicesFieldRefs {
    readonly type_ID: FieldRef<"Type_Devices", 'Int'>
    readonly name: FieldRef<"Type_Devices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type_Devices findUnique
   */
  export type Type_DevicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Type_Devices to fetch.
     */
    where: Type_DevicesWhereUniqueInput
  }

  /**
   * Type_Devices findUniqueOrThrow
   */
  export type Type_DevicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Type_Devices to fetch.
     */
    where: Type_DevicesWhereUniqueInput
  }

  /**
   * Type_Devices findFirst
   */
  export type Type_DevicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Type_Devices to fetch.
     */
    where?: Type_DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_Devices to fetch.
     */
    orderBy?: Type_DevicesOrderByWithRelationInput | Type_DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Type_Devices.
     */
    cursor?: Type_DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Type_Devices.
     */
    distinct?: Type_DevicesScalarFieldEnum | Type_DevicesScalarFieldEnum[]
  }

  /**
   * Type_Devices findFirstOrThrow
   */
  export type Type_DevicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Type_Devices to fetch.
     */
    where?: Type_DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_Devices to fetch.
     */
    orderBy?: Type_DevicesOrderByWithRelationInput | Type_DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Type_Devices.
     */
    cursor?: Type_DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Type_Devices.
     */
    distinct?: Type_DevicesScalarFieldEnum | Type_DevicesScalarFieldEnum[]
  }

  /**
   * Type_Devices findMany
   */
  export type Type_DevicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Type_Devices to fetch.
     */
    where?: Type_DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Type_Devices to fetch.
     */
    orderBy?: Type_DevicesOrderByWithRelationInput | Type_DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Type_Devices.
     */
    cursor?: Type_DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Type_Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Type_Devices.
     */
    skip?: number
    distinct?: Type_DevicesScalarFieldEnum | Type_DevicesScalarFieldEnum[]
  }

  /**
   * Type_Devices create
   */
  export type Type_DevicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Type_Devices.
     */
    data: XOR<Type_DevicesCreateInput, Type_DevicesUncheckedCreateInput>
  }

  /**
   * Type_Devices createMany
   */
  export type Type_DevicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Type_Devices.
     */
    data: Type_DevicesCreateManyInput | Type_DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type_Devices createManyAndReturn
   */
  export type Type_DevicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * The data used to create many Type_Devices.
     */
    data: Type_DevicesCreateManyInput | Type_DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type_Devices update
   */
  export type Type_DevicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Type_Devices.
     */
    data: XOR<Type_DevicesUpdateInput, Type_DevicesUncheckedUpdateInput>
    /**
     * Choose, which Type_Devices to update.
     */
    where: Type_DevicesWhereUniqueInput
  }

  /**
   * Type_Devices updateMany
   */
  export type Type_DevicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Type_Devices.
     */
    data: XOR<Type_DevicesUpdateManyMutationInput, Type_DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Type_Devices to update
     */
    where?: Type_DevicesWhereInput
    /**
     * Limit how many Type_Devices to update.
     */
    limit?: number
  }

  /**
   * Type_Devices updateManyAndReturn
   */
  export type Type_DevicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * The data used to update Type_Devices.
     */
    data: XOR<Type_DevicesUpdateManyMutationInput, Type_DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Type_Devices to update
     */
    where?: Type_DevicesWhereInput
    /**
     * Limit how many Type_Devices to update.
     */
    limit?: number
  }

  /**
   * Type_Devices upsert
   */
  export type Type_DevicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Type_Devices to update in case it exists.
     */
    where: Type_DevicesWhereUniqueInput
    /**
     * In case the Type_Devices found by the `where` argument doesn't exist, create a new Type_Devices with this data.
     */
    create: XOR<Type_DevicesCreateInput, Type_DevicesUncheckedCreateInput>
    /**
     * In case the Type_Devices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Type_DevicesUpdateInput, Type_DevicesUncheckedUpdateInput>
  }

  /**
   * Type_Devices delete
   */
  export type Type_DevicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
    /**
     * Filter which Type_Devices to delete.
     */
    where: Type_DevicesWhereUniqueInput
  }

  /**
   * Type_Devices deleteMany
   */
  export type Type_DevicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type_Devices to delete
     */
    where?: Type_DevicesWhereInput
    /**
     * Limit how many Type_Devices to delete.
     */
    limit?: number
  }

  /**
   * Type_Devices.devices
   */
  export type Type_Devices$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Type_Devices without action
   */
  export type Type_DevicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_Devices
     */
    select?: Type_DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type_Devices
     */
    omit?: Type_DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Type_DevicesInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    device_ID: number | null
    typeID: number | null
  }

  export type DeviceSumAggregateOutputType = {
    device_ID: number | null
    typeID: number | null
  }

  export type DeviceMinAggregateOutputType = {
    device_ID: number | null
    name: string | null
    typeID: number | null
    institutionID: string | null
    state: boolean | null
  }

  export type DeviceMaxAggregateOutputType = {
    device_ID: number | null
    name: string | null
    typeID: number | null
    institutionID: string | null
    state: boolean | null
  }

  export type DeviceCountAggregateOutputType = {
    device_ID: number
    name: number
    typeID: number
    institutionID: number
    state: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    device_ID?: true
    typeID?: true
  }

  export type DeviceSumAggregateInputType = {
    device_ID?: true
    typeID?: true
  }

  export type DeviceMinAggregateInputType = {
    device_ID?: true
    name?: true
    typeID?: true
    institutionID?: true
    state?: true
  }

  export type DeviceMaxAggregateInputType = {
    device_ID?: true
    name?: true
    typeID?: true
    institutionID?: true
    state?: true
  }

  export type DeviceCountAggregateInputType = {
    device_ID?: true
    name?: true
    typeID?: true
    institutionID?: true
    state?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    device_ID: number
    name: string
    typeID: number
    institutionID: string
    state: boolean
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_ID?: boolean
    name?: boolean
    typeID?: boolean
    institutionID?: boolean
    state?: boolean
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_ID?: boolean
    name?: boolean
    typeID?: boolean
    institutionID?: boolean
    state?: boolean
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_ID?: boolean
    name?: boolean
    typeID?: boolean
    institutionID?: boolean
    state?: boolean
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    device_ID?: boolean
    name?: boolean
    typeID?: boolean
    institutionID?: boolean
    state?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"device_ID" | "name" | "typeID" | "institutionID" | "state", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Type_DevicesDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      type: Prisma.$Type_DevicesPayload<ExtArgs>
      institution: Prisma.$InstitutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      device_ID: number
      name: string
      typeID: number
      institutionID: string
      state: boolean
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `device_ID`
     * const deviceWithDevice_IDOnly = await prisma.device.findMany({ select: { device_ID: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `device_ID`
     * const deviceWithDevice_IDOnly = await prisma.device.createManyAndReturn({
     *   select: { device_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `device_ID`
     * const deviceWithDevice_IDOnly = await prisma.device.updateManyAndReturn({
     *   select: { device_ID: true },
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends Type_DevicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Type_DevicesDefaultArgs<ExtArgs>>): Prisma__Type_DevicesClient<$Result.GetResult<Prisma.$Type_DevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly device_ID: FieldRef<"Device", 'Int'>
    readonly name: FieldRef<"Device", 'String'>
    readonly typeID: FieldRef<"Device", 'Int'>
    readonly institutionID: FieldRef<"Device", 'String'>
    readonly state: FieldRef<"Device", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    activity_ID: number | null
    personID: number | null
  }

  export type ActivitySumAggregateOutputType = {
    activity_ID: number | null
    personID: number | null
  }

  export type ActivityMinAggregateOutputType = {
    activity_ID: number | null
    dateTime_in: Date | null
    dateTime_out: Date | null
    institutionID: string | null
    personID: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    activity_ID: number | null
    dateTime_in: Date | null
    dateTime_out: Date | null
    institutionID: string | null
    personID: number | null
  }

  export type ActivityCountAggregateOutputType = {
    activity_ID: number
    dateTime_in: number
    dateTime_out: number
    institutionID: number
    personID: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    activity_ID?: true
    personID?: true
  }

  export type ActivitySumAggregateInputType = {
    activity_ID?: true
    personID?: true
  }

  export type ActivityMinAggregateInputType = {
    activity_ID?: true
    dateTime_in?: true
    dateTime_out?: true
    institutionID?: true
    personID?: true
  }

  export type ActivityMaxAggregateInputType = {
    activity_ID?: true
    dateTime_in?: true
    dateTime_out?: true
    institutionID?: true
    personID?: true
  }

  export type ActivityCountAggregateInputType = {
    activity_ID?: true
    dateTime_in?: true
    dateTime_out?: true
    institutionID?: true
    personID?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    activity_ID: number
    dateTime_in: Date
    dateTime_out: Date
    institutionID: string
    personID: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activity_ID?: boolean
    dateTime_in?: boolean
    dateTime_out?: boolean
    institutionID?: boolean
    personID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activity_ID?: boolean
    dateTime_in?: boolean
    dateTime_out?: boolean
    institutionID?: boolean
    personID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activity_ID?: boolean
    dateTime_in?: boolean
    dateTime_out?: boolean
    institutionID?: boolean
    personID?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    activity_ID?: boolean
    dateTime_in?: boolean
    dateTime_out?: boolean
    institutionID?: boolean
    personID?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"activity_ID" | "dateTime_in" | "dateTime_out" | "institutionID" | "personID", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs>
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      activity_ID: number
      dateTime_in: Date
      dateTime_out: Date
      institutionID: string
      personID: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `activity_ID`
     * const activityWithActivity_IDOnly = await prisma.activity.findMany({ select: { activity_ID: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `activity_ID`
     * const activityWithActivity_IDOnly = await prisma.activity.createManyAndReturn({
     *   select: { activity_ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `activity_ID`
     * const activityWithActivity_IDOnly = await prisma.activity.updateManyAndReturn({
     *   select: { activity_ID: true },
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly activity_ID: FieldRef<"Activity", 'Int'>
    readonly dateTime_in: FieldRef<"Activity", 'DateTime'>
    readonly dateTime_out: FieldRef<"Activity", 'DateTime'>
    readonly institutionID: FieldRef<"Activity", 'String'>
    readonly personID: FieldRef<"Activity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
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


  export const InstitutionScalarFieldEnum: {
    inst_ID: 'inst_ID',
    name: 'name'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password',
    institutionID: 'institutionID'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const HierarchyScalarFieldEnum: {
    hier_ID: 'hier_ID',
    name: 'name'
  };

  export type HierarchyScalarFieldEnum = (typeof HierarchyScalarFieldEnum)[keyof typeof HierarchyScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    person_ID: 'person_ID',
    name: 'name',
    surname: 'surname',
    institutionID: 'institutionID',
    hierarchyID: 'hierarchyID'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const Type_DevicesScalarFieldEnum: {
    type_ID: 'type_ID',
    name: 'name'
  };

  export type Type_DevicesScalarFieldEnum = (typeof Type_DevicesScalarFieldEnum)[keyof typeof Type_DevicesScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    device_ID: 'device_ID',
    name: 'name',
    typeID: 'typeID',
    institutionID: 'institutionID',
    state: 'state'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    activity_ID: 'activity_ID',
    dateTime_in: 'dateTime_in',
    dateTime_out: 'dateTime_out',
    institutionID: 'institutionID',
    personID: 'personID'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


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


  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    inst_ID?: StringFilter<"Institution"> | string
    name?: StringFilter<"Institution"> | string
    admins?: AdminListRelationFilter
    persons?: PersonListRelationFilter
    devices?: DeviceListRelationFilter
    activity?: ActivityListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    inst_ID?: SortOrder
    name?: SortOrder
    admins?: AdminOrderByRelationAggregateInput
    persons?: PersonOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    activity?: ActivityOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    inst_ID?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    name?: StringFilter<"Institution"> | string
    admins?: AdminListRelationFilter
    persons?: PersonListRelationFilter
    devices?: DeviceListRelationFilter
    activity?: ActivityListRelationFilter
  }, "inst_ID">

  export type InstitutionOrderByWithAggregationInput = {
    inst_ID?: SortOrder
    name?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    inst_ID?: StringWithAggregatesFilter<"Institution"> | string
    name?: StringWithAggregatesFilter<"Institution"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    email?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    institutionID?: StringFilter<"Admin"> | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    institutionID?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    institutionID?: StringFilter<"Admin"> | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }, "email">

  export type AdminOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    institutionID?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    institutionID?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type HierarchyWhereInput = {
    AND?: HierarchyWhereInput | HierarchyWhereInput[]
    OR?: HierarchyWhereInput[]
    NOT?: HierarchyWhereInput | HierarchyWhereInput[]
    hier_ID?: IntFilter<"Hierarchy"> | number
    name?: StringFilter<"Hierarchy"> | string
    persons?: PersonListRelationFilter
  }

  export type HierarchyOrderByWithRelationInput = {
    hier_ID?: SortOrder
    name?: SortOrder
    persons?: PersonOrderByRelationAggregateInput
  }

  export type HierarchyWhereUniqueInput = Prisma.AtLeast<{
    hier_ID?: number
    AND?: HierarchyWhereInput | HierarchyWhereInput[]
    OR?: HierarchyWhereInput[]
    NOT?: HierarchyWhereInput | HierarchyWhereInput[]
    name?: StringFilter<"Hierarchy"> | string
    persons?: PersonListRelationFilter
  }, "hier_ID">

  export type HierarchyOrderByWithAggregationInput = {
    hier_ID?: SortOrder
    name?: SortOrder
    _count?: HierarchyCountOrderByAggregateInput
    _avg?: HierarchyAvgOrderByAggregateInput
    _max?: HierarchyMaxOrderByAggregateInput
    _min?: HierarchyMinOrderByAggregateInput
    _sum?: HierarchySumOrderByAggregateInput
  }

  export type HierarchyScalarWhereWithAggregatesInput = {
    AND?: HierarchyScalarWhereWithAggregatesInput | HierarchyScalarWhereWithAggregatesInput[]
    OR?: HierarchyScalarWhereWithAggregatesInput[]
    NOT?: HierarchyScalarWhereWithAggregatesInput | HierarchyScalarWhereWithAggregatesInput[]
    hier_ID?: IntWithAggregatesFilter<"Hierarchy"> | number
    name?: StringWithAggregatesFilter<"Hierarchy"> | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    person_ID?: IntFilter<"Person"> | number
    name?: StringFilter<"Person"> | string
    surname?: StringFilter<"Person"> | string
    institutionID?: StringFilter<"Person"> | string
    hierarchyID?: IntFilter<"Person"> | number
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    hierarchy?: XOR<HierarchyScalarRelationFilter, HierarchyWhereInput>
    activity?: ActivityListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    person_ID?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    institutionID?: SortOrder
    hierarchyID?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
    hierarchy?: HierarchyOrderByWithRelationInput
    activity?: ActivityOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    person_ID?: number
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    surname?: StringFilter<"Person"> | string
    institutionID?: StringFilter<"Person"> | string
    hierarchyID?: IntFilter<"Person"> | number
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    hierarchy?: XOR<HierarchyScalarRelationFilter, HierarchyWhereInput>
    activity?: ActivityListRelationFilter
  }, "person_ID">

  export type PersonOrderByWithAggregationInput = {
    person_ID?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    institutionID?: SortOrder
    hierarchyID?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    person_ID?: IntWithAggregatesFilter<"Person"> | number
    name?: StringWithAggregatesFilter<"Person"> | string
    surname?: StringWithAggregatesFilter<"Person"> | string
    institutionID?: StringWithAggregatesFilter<"Person"> | string
    hierarchyID?: IntWithAggregatesFilter<"Person"> | number
  }

  export type Type_DevicesWhereInput = {
    AND?: Type_DevicesWhereInput | Type_DevicesWhereInput[]
    OR?: Type_DevicesWhereInput[]
    NOT?: Type_DevicesWhereInput | Type_DevicesWhereInput[]
    type_ID?: IntFilter<"Type_Devices"> | number
    name?: StringFilter<"Type_Devices"> | string
    devices?: DeviceListRelationFilter
  }

  export type Type_DevicesOrderByWithRelationInput = {
    type_ID?: SortOrder
    name?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type Type_DevicesWhereUniqueInput = Prisma.AtLeast<{
    type_ID?: number
    AND?: Type_DevicesWhereInput | Type_DevicesWhereInput[]
    OR?: Type_DevicesWhereInput[]
    NOT?: Type_DevicesWhereInput | Type_DevicesWhereInput[]
    name?: StringFilter<"Type_Devices"> | string
    devices?: DeviceListRelationFilter
  }, "type_ID">

  export type Type_DevicesOrderByWithAggregationInput = {
    type_ID?: SortOrder
    name?: SortOrder
    _count?: Type_DevicesCountOrderByAggregateInput
    _avg?: Type_DevicesAvgOrderByAggregateInput
    _max?: Type_DevicesMaxOrderByAggregateInput
    _min?: Type_DevicesMinOrderByAggregateInput
    _sum?: Type_DevicesSumOrderByAggregateInput
  }

  export type Type_DevicesScalarWhereWithAggregatesInput = {
    AND?: Type_DevicesScalarWhereWithAggregatesInput | Type_DevicesScalarWhereWithAggregatesInput[]
    OR?: Type_DevicesScalarWhereWithAggregatesInput[]
    NOT?: Type_DevicesScalarWhereWithAggregatesInput | Type_DevicesScalarWhereWithAggregatesInput[]
    type_ID?: IntWithAggregatesFilter<"Type_Devices"> | number
    name?: StringWithAggregatesFilter<"Type_Devices"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    device_ID?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    typeID?: IntFilter<"Device"> | number
    institutionID?: StringFilter<"Device"> | string
    state?: BoolFilter<"Device"> | boolean
    type?: XOR<Type_DevicesScalarRelationFilter, Type_DevicesWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    device_ID?: SortOrder
    name?: SortOrder
    typeID?: SortOrder
    institutionID?: SortOrder
    state?: SortOrder
    type?: Type_DevicesOrderByWithRelationInput
    institution?: InstitutionOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    device_ID?: number
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    typeID?: IntFilter<"Device"> | number
    institutionID?: StringFilter<"Device"> | string
    state?: BoolFilter<"Device"> | boolean
    type?: XOR<Type_DevicesScalarRelationFilter, Type_DevicesWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }, "device_ID">

  export type DeviceOrderByWithAggregationInput = {
    device_ID?: SortOrder
    name?: SortOrder
    typeID?: SortOrder
    institutionID?: SortOrder
    state?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    device_ID?: IntWithAggregatesFilter<"Device"> | number
    name?: StringWithAggregatesFilter<"Device"> | string
    typeID?: IntWithAggregatesFilter<"Device"> | number
    institutionID?: StringWithAggregatesFilter<"Device"> | string
    state?: BoolWithAggregatesFilter<"Device"> | boolean
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    activity_ID?: IntFilter<"Activity"> | number
    dateTime_in?: DateTimeFilter<"Activity"> | Date | string
    dateTime_out?: DateTimeFilter<"Activity"> | Date | string
    institutionID?: StringFilter<"Activity"> | string
    personID?: IntFilter<"Activity"> | number
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    activity_ID?: SortOrder
    dateTime_in?: SortOrder
    dateTime_out?: SortOrder
    institutionID?: SortOrder
    personID?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    activity_ID?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    dateTime_in?: DateTimeFilter<"Activity"> | Date | string
    dateTime_out?: DateTimeFilter<"Activity"> | Date | string
    institutionID?: StringFilter<"Activity"> | string
    personID?: IntFilter<"Activity"> | number
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "activity_ID">

  export type ActivityOrderByWithAggregationInput = {
    activity_ID?: SortOrder
    dateTime_in?: SortOrder
    dateTime_out?: SortOrder
    institutionID?: SortOrder
    personID?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    activity_ID?: IntWithAggregatesFilter<"Activity"> | number
    dateTime_in?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    dateTime_out?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    institutionID?: StringWithAggregatesFilter<"Activity"> | string
    personID?: IntWithAggregatesFilter<"Activity"> | number
  }

  export type InstitutionCreateInput = {
    inst_ID: string
    name: string
    admins?: AdminCreateNestedManyWithoutInstitutionInput
    persons?: PersonCreateNestedManyWithoutInstitutionInput
    devices?: DeviceCreateNestedManyWithoutInstitutionInput
    activity?: ActivityCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    inst_ID: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutInstitutionInput
    persons?: PersonUncheckedCreateNestedManyWithoutInstitutionInput
    devices?: DeviceUncheckedCreateNestedManyWithoutInstitutionInput
    activity?: ActivityUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUncheckedUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    inst_ID: string
    name: string
  }

  export type InstitutionUpdateManyMutationInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    email: string
    name: string
    password: string
    institution: InstitutionCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateInput = {
    email: string
    name: string
    password: string
    institutionID: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    institution?: InstitutionUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    email: string
    name: string
    password: string
    institutionID: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
  }

  export type HierarchyCreateInput = {
    name: string
    persons?: PersonCreateNestedManyWithoutHierarchyInput
  }

  export type HierarchyUncheckedCreateInput = {
    hier_ID?: number
    name: string
    persons?: PersonUncheckedCreateNestedManyWithoutHierarchyInput
  }

  export type HierarchyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    persons?: PersonUpdateManyWithoutHierarchyNestedInput
  }

  export type HierarchyUncheckedUpdateInput = {
    hier_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    persons?: PersonUncheckedUpdateManyWithoutHierarchyNestedInput
  }

  export type HierarchyCreateManyInput = {
    hier_ID?: number
    name: string
  }

  export type HierarchyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HierarchyUncheckedUpdateManyInput = {
    hier_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    name: string
    surname: string
    institution: InstitutionCreateNestedOneWithoutPersonsInput
    hierarchy: HierarchyCreateNestedOneWithoutPersonsInput
    activity?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    person_ID?: number
    name: string
    surname: string
    institutionID: string
    hierarchyID: number
    activity?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institution?: InstitutionUpdateOneRequiredWithoutPersonsNestedInput
    hierarchy?: HierarchyUpdateOneRequiredWithoutPersonsNestedInput
    activity?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    hierarchyID?: IntFieldUpdateOperationsInput | number
    activity?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    person_ID?: number
    name: string
    surname: string
    institutionID: string
    hierarchyID: number
  }

  export type PersonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUncheckedUpdateManyInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    hierarchyID?: IntFieldUpdateOperationsInput | number
  }

  export type Type_DevicesCreateInput = {
    name: string
    devices?: DeviceCreateNestedManyWithoutTypeInput
  }

  export type Type_DevicesUncheckedCreateInput = {
    type_ID?: number
    name: string
    devices?: DeviceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type Type_DevicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUpdateManyWithoutTypeNestedInput
  }

  export type Type_DevicesUncheckedUpdateInput = {
    type_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type Type_DevicesCreateManyInput = {
    type_ID?: number
    name: string
  }

  export type Type_DevicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Type_DevicesUncheckedUpdateManyInput = {
    type_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    name: string
    state: boolean
    type: Type_DevicesCreateNestedOneWithoutDevicesInput
    institution: InstitutionCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    device_ID?: number
    name: string
    typeID: number
    institutionID: string
    state: boolean
  }

  export type DeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    type?: Type_DevicesUpdateOneRequiredWithoutDevicesNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeID?: IntFieldUpdateOperationsInput | number
    institutionID?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateManyInput = {
    device_ID?: number
    name: string
    typeID: number
    institutionID: string
    state: boolean
  }

  export type DeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUncheckedUpdateManyInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeID?: IntFieldUpdateOperationsInput | number
    institutionID?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityCreateInput = {
    dateTime_in: Date | string
    dateTime_out: Date | string
    institution: InstitutionCreateNestedOneWithoutActivityInput
    person: PersonCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    institutionID: string
    personID: number
  }

  export type ActivityUpdateInput = {
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutActivityNestedInput
    person?: PersonUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionID?: StringFieldUpdateOperationsInput | string
    personID?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateManyInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    institutionID: string
    personID: number
  }

  export type ActivityUpdateManyMutationInput = {
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionID?: StringFieldUpdateOperationsInput | string
    personID?: IntFieldUpdateOperationsInput | number
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

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionCountOrderByAggregateInput = {
    inst_ID?: SortOrder
    name?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    inst_ID?: SortOrder
    name?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    inst_ID?: SortOrder
    name?: SortOrder
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

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    institutionID?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    institutionID?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    institutionID?: SortOrder
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

  export type HierarchyCountOrderByAggregateInput = {
    hier_ID?: SortOrder
    name?: SortOrder
  }

  export type HierarchyAvgOrderByAggregateInput = {
    hier_ID?: SortOrder
  }

  export type HierarchyMaxOrderByAggregateInput = {
    hier_ID?: SortOrder
    name?: SortOrder
  }

  export type HierarchyMinOrderByAggregateInput = {
    hier_ID?: SortOrder
    name?: SortOrder
  }

  export type HierarchySumOrderByAggregateInput = {
    hier_ID?: SortOrder
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

  export type HierarchyScalarRelationFilter = {
    is?: HierarchyWhereInput
    isNot?: HierarchyWhereInput
  }

  export type PersonCountOrderByAggregateInput = {
    person_ID?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    institutionID?: SortOrder
    hierarchyID?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    person_ID?: SortOrder
    hierarchyID?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    person_ID?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    institutionID?: SortOrder
    hierarchyID?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    person_ID?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    institutionID?: SortOrder
    hierarchyID?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    person_ID?: SortOrder
    hierarchyID?: SortOrder
  }

  export type Type_DevicesCountOrderByAggregateInput = {
    type_ID?: SortOrder
    name?: SortOrder
  }

  export type Type_DevicesAvgOrderByAggregateInput = {
    type_ID?: SortOrder
  }

  export type Type_DevicesMaxOrderByAggregateInput = {
    type_ID?: SortOrder
    name?: SortOrder
  }

  export type Type_DevicesMinOrderByAggregateInput = {
    type_ID?: SortOrder
    name?: SortOrder
  }

  export type Type_DevicesSumOrderByAggregateInput = {
    type_ID?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Type_DevicesScalarRelationFilter = {
    is?: Type_DevicesWhereInput
    isNot?: Type_DevicesWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    device_ID?: SortOrder
    name?: SortOrder
    typeID?: SortOrder
    institutionID?: SortOrder
    state?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    device_ID?: SortOrder
    typeID?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    device_ID?: SortOrder
    name?: SortOrder
    typeID?: SortOrder
    institutionID?: SortOrder
    state?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    device_ID?: SortOrder
    name?: SortOrder
    typeID?: SortOrder
    institutionID?: SortOrder
    state?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    device_ID?: SortOrder
    typeID?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type ActivityCountOrderByAggregateInput = {
    activity_ID?: SortOrder
    dateTime_in?: SortOrder
    dateTime_out?: SortOrder
    institutionID?: SortOrder
    personID?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    activity_ID?: SortOrder
    personID?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    activity_ID?: SortOrder
    dateTime_in?: SortOrder
    dateTime_out?: SortOrder
    institutionID?: SortOrder
    personID?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    activity_ID?: SortOrder
    dateTime_in?: SortOrder
    dateTime_out?: SortOrder
    institutionID?: SortOrder
    personID?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    activity_ID?: SortOrder
    personID?: SortOrder
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

  export type AdminCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput> | AdminCreateWithoutInstitutionInput[] | AdminUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutInstitutionInput | AdminCreateOrConnectWithoutInstitutionInput[]
    createMany?: AdminCreateManyInstitutionInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput> | PersonCreateWithoutInstitutionInput[] | PersonUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutInstitutionInput | PersonCreateOrConnectWithoutInstitutionInput[]
    createMany?: PersonCreateManyInstitutionInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput> | DeviceCreateWithoutInstitutionInput[] | DeviceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutInstitutionInput | DeviceCreateOrConnectWithoutInstitutionInput[]
    createMany?: DeviceCreateManyInstitutionInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput> | ActivityCreateWithoutInstitutionInput[] | ActivityUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutInstitutionInput | ActivityCreateOrConnectWithoutInstitutionInput[]
    createMany?: ActivityCreateManyInstitutionInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput> | AdminCreateWithoutInstitutionInput[] | AdminUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutInstitutionInput | AdminCreateOrConnectWithoutInstitutionInput[]
    createMany?: AdminCreateManyInstitutionInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput> | PersonCreateWithoutInstitutionInput[] | PersonUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutInstitutionInput | PersonCreateOrConnectWithoutInstitutionInput[]
    createMany?: PersonCreateManyInstitutionInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput> | DeviceCreateWithoutInstitutionInput[] | DeviceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutInstitutionInput | DeviceCreateOrConnectWithoutInstitutionInput[]
    createMany?: DeviceCreateManyInstitutionInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput> | ActivityCreateWithoutInstitutionInput[] | ActivityUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutInstitutionInput | ActivityCreateOrConnectWithoutInstitutionInput[]
    createMany?: ActivityCreateManyInstitutionInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AdminUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput> | AdminCreateWithoutInstitutionInput[] | AdminUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutInstitutionInput | AdminCreateOrConnectWithoutInstitutionInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutInstitutionInput | AdminUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: AdminCreateManyInstitutionInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutInstitutionInput | AdminUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutInstitutionInput | AdminUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput> | PersonCreateWithoutInstitutionInput[] | PersonUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutInstitutionInput | PersonCreateOrConnectWithoutInstitutionInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutInstitutionInput | PersonUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: PersonCreateManyInstitutionInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutInstitutionInput | PersonUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutInstitutionInput | PersonUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput> | DeviceCreateWithoutInstitutionInput[] | DeviceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutInstitutionInput | DeviceCreateOrConnectWithoutInstitutionInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutInstitutionInput | DeviceUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: DeviceCreateManyInstitutionInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutInstitutionInput | DeviceUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutInstitutionInput | DeviceUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput> | ActivityCreateWithoutInstitutionInput[] | ActivityUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutInstitutionInput | ActivityCreateOrConnectWithoutInstitutionInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutInstitutionInput | ActivityUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ActivityCreateManyInstitutionInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutInstitutionInput | ActivityUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutInstitutionInput | ActivityUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type AdminUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput> | AdminCreateWithoutInstitutionInput[] | AdminUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutInstitutionInput | AdminCreateOrConnectWithoutInstitutionInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutInstitutionInput | AdminUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: AdminCreateManyInstitutionInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutInstitutionInput | AdminUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutInstitutionInput | AdminUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput> | PersonCreateWithoutInstitutionInput[] | PersonUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutInstitutionInput | PersonCreateOrConnectWithoutInstitutionInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutInstitutionInput | PersonUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: PersonCreateManyInstitutionInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutInstitutionInput | PersonUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutInstitutionInput | PersonUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput> | DeviceCreateWithoutInstitutionInput[] | DeviceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutInstitutionInput | DeviceCreateOrConnectWithoutInstitutionInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutInstitutionInput | DeviceUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: DeviceCreateManyInstitutionInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutInstitutionInput | DeviceUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutInstitutionInput | DeviceUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput> | ActivityCreateWithoutInstitutionInput[] | ActivityUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutInstitutionInput | ActivityCreateOrConnectWithoutInstitutionInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutInstitutionInput | ActivityUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ActivityCreateManyInstitutionInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutInstitutionInput | ActivityUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutInstitutionInput | ActivityUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type InstitutionCreateNestedOneWithoutAdminsInput = {
    create?: XOR<InstitutionCreateWithoutAdminsInput, InstitutionUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAdminsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type InstitutionUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<InstitutionCreateWithoutAdminsInput, InstitutionUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutAdminsInput
    upsert?: InstitutionUpsertWithoutAdminsInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutAdminsInput, InstitutionUpdateWithoutAdminsInput>, InstitutionUncheckedUpdateWithoutAdminsInput>
  }

  export type PersonCreateNestedManyWithoutHierarchyInput = {
    create?: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput> | PersonCreateWithoutHierarchyInput[] | PersonUncheckedCreateWithoutHierarchyInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutHierarchyInput | PersonCreateOrConnectWithoutHierarchyInput[]
    createMany?: PersonCreateManyHierarchyInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutHierarchyInput = {
    create?: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput> | PersonCreateWithoutHierarchyInput[] | PersonUncheckedCreateWithoutHierarchyInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutHierarchyInput | PersonCreateOrConnectWithoutHierarchyInput[]
    createMany?: PersonCreateManyHierarchyInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUpdateManyWithoutHierarchyNestedInput = {
    create?: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput> | PersonCreateWithoutHierarchyInput[] | PersonUncheckedCreateWithoutHierarchyInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutHierarchyInput | PersonCreateOrConnectWithoutHierarchyInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutHierarchyInput | PersonUpsertWithWhereUniqueWithoutHierarchyInput[]
    createMany?: PersonCreateManyHierarchyInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutHierarchyInput | PersonUpdateWithWhereUniqueWithoutHierarchyInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutHierarchyInput | PersonUpdateManyWithWhereWithoutHierarchyInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonUncheckedUpdateManyWithoutHierarchyNestedInput = {
    create?: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput> | PersonCreateWithoutHierarchyInput[] | PersonUncheckedCreateWithoutHierarchyInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutHierarchyInput | PersonCreateOrConnectWithoutHierarchyInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutHierarchyInput | PersonUpsertWithWhereUniqueWithoutHierarchyInput[]
    createMany?: PersonCreateManyHierarchyInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutHierarchyInput | PersonUpdateWithWhereUniqueWithoutHierarchyInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutHierarchyInput | PersonUpdateManyWithWhereWithoutHierarchyInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type InstitutionCreateNestedOneWithoutPersonsInput = {
    create?: XOR<InstitutionCreateWithoutPersonsInput, InstitutionUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutPersonsInput
    connect?: InstitutionWhereUniqueInput
  }

  export type HierarchyCreateNestedOneWithoutPersonsInput = {
    create?: XOR<HierarchyCreateWithoutPersonsInput, HierarchyUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: HierarchyCreateOrConnectWithoutPersonsInput
    connect?: HierarchyWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutPersonInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type InstitutionUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<InstitutionCreateWithoutPersonsInput, InstitutionUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutPersonsInput
    upsert?: InstitutionUpsertWithoutPersonsInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutPersonsInput, InstitutionUpdateWithoutPersonsInput>, InstitutionUncheckedUpdateWithoutPersonsInput>
  }

  export type HierarchyUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<HierarchyCreateWithoutPersonsInput, HierarchyUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: HierarchyCreateOrConnectWithoutPersonsInput
    upsert?: HierarchyUpsertWithoutPersonsInput
    connect?: HierarchyWhereUniqueInput
    update?: XOR<XOR<HierarchyUpdateToOneWithWhereWithoutPersonsInput, HierarchyUpdateWithoutPersonsInput>, HierarchyUncheckedUpdateWithoutPersonsInput>
  }

  export type ActivityUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPersonInput | ActivityUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPersonInput | ActivityUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPersonInput | ActivityUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPersonInput | ActivityUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPersonInput | ActivityUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPersonInput | ActivityUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DeviceCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput> | DeviceCreateWithoutTypeInput[] | DeviceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput | DeviceCreateOrConnectWithoutTypeInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput | DeviceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: DeviceCreateManyTypeInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutTypeInput | DeviceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput | DeviceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type Type_DevicesCreateNestedOneWithoutDevicesInput = {
    create?: XOR<Type_DevicesCreateWithoutDevicesInput, Type_DevicesUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: Type_DevicesCreateOrConnectWithoutDevicesInput
    connect?: Type_DevicesWhereUniqueInput
  }

  export type InstitutionCreateNestedOneWithoutDevicesInput = {
    create?: XOR<InstitutionCreateWithoutDevicesInput, InstitutionUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutDevicesInput
    connect?: InstitutionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Type_DevicesUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<Type_DevicesCreateWithoutDevicesInput, Type_DevicesUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: Type_DevicesCreateOrConnectWithoutDevicesInput
    upsert?: Type_DevicesUpsertWithoutDevicesInput
    connect?: Type_DevicesWhereUniqueInput
    update?: XOR<XOR<Type_DevicesUpdateToOneWithWhereWithoutDevicesInput, Type_DevicesUpdateWithoutDevicesInput>, Type_DevicesUncheckedUpdateWithoutDevicesInput>
  }

  export type InstitutionUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<InstitutionCreateWithoutDevicesInput, InstitutionUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutDevicesInput
    upsert?: InstitutionUpsertWithoutDevicesInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutDevicesInput, InstitutionUpdateWithoutDevicesInput>, InstitutionUncheckedUpdateWithoutDevicesInput>
  }

  export type InstitutionCreateNestedOneWithoutActivityInput = {
    create?: XOR<InstitutionCreateWithoutActivityInput, InstitutionUncheckedCreateWithoutActivityInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutActivityInput
    connect?: InstitutionWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutActivityInput = {
    create?: XOR<PersonCreateWithoutActivityInput, PersonUncheckedCreateWithoutActivityInput>
    connectOrCreate?: PersonCreateOrConnectWithoutActivityInput
    connect?: PersonWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstitutionUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<InstitutionCreateWithoutActivityInput, InstitutionUncheckedCreateWithoutActivityInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutActivityInput
    upsert?: InstitutionUpsertWithoutActivityInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutActivityInput, InstitutionUpdateWithoutActivityInput>, InstitutionUncheckedUpdateWithoutActivityInput>
  }

  export type PersonUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<PersonCreateWithoutActivityInput, PersonUncheckedCreateWithoutActivityInput>
    connectOrCreate?: PersonCreateOrConnectWithoutActivityInput
    upsert?: PersonUpsertWithoutActivityInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutActivityInput, PersonUpdateWithoutActivityInput>, PersonUncheckedUpdateWithoutActivityInput>
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

  export type AdminCreateWithoutInstitutionInput = {
    email: string
    name: string
    password: string
  }

  export type AdminUncheckedCreateWithoutInstitutionInput = {
    email: string
    name: string
    password: string
  }

  export type AdminCreateOrConnectWithoutInstitutionInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput>
  }

  export type AdminCreateManyInstitutionInputEnvelope = {
    data: AdminCreateManyInstitutionInput | AdminCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutInstitutionInput = {
    name: string
    surname: string
    hierarchy: HierarchyCreateNestedOneWithoutPersonsInput
    activity?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutInstitutionInput = {
    person_ID?: number
    name: string
    surname: string
    hierarchyID: number
    activity?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutInstitutionInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput>
  }

  export type PersonCreateManyInstitutionInputEnvelope = {
    data: PersonCreateManyInstitutionInput | PersonCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutInstitutionInput = {
    name: string
    state: boolean
    type: Type_DevicesCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutInstitutionInput = {
    device_ID?: number
    name: string
    typeID: number
    state: boolean
  }

  export type DeviceCreateOrConnectWithoutInstitutionInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput>
  }

  export type DeviceCreateManyInstitutionInputEnvelope = {
    data: DeviceCreateManyInstitutionInput | DeviceCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutInstitutionInput = {
    dateTime_in: Date | string
    dateTime_out: Date | string
    person: PersonCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutInstitutionInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    personID: number
  }

  export type ActivityCreateOrConnectWithoutInstitutionInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput>
  }

  export type ActivityCreateManyInstitutionInputEnvelope = {
    data: ActivityCreateManyInstitutionInput | ActivityCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutInstitutionInput, AdminUncheckedUpdateWithoutInstitutionInput>
    create: XOR<AdminCreateWithoutInstitutionInput, AdminUncheckedCreateWithoutInstitutionInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutInstitutionInput, AdminUncheckedUpdateWithoutInstitutionInput>
  }

  export type AdminUpdateManyWithWhereWithoutInstitutionInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    email?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    institutionID?: StringFilter<"Admin"> | string
  }

  export type PersonUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutInstitutionInput, PersonUncheckedUpdateWithoutInstitutionInput>
    create: XOR<PersonCreateWithoutInstitutionInput, PersonUncheckedCreateWithoutInstitutionInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutInstitutionInput, PersonUncheckedUpdateWithoutInstitutionInput>
  }

  export type PersonUpdateManyWithWhereWithoutInstitutionInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    person_ID?: IntFilter<"Person"> | number
    name?: StringFilter<"Person"> | string
    surname?: StringFilter<"Person"> | string
    institutionID?: StringFilter<"Person"> | string
    hierarchyID?: IntFilter<"Person"> | number
  }

  export type DeviceUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutInstitutionInput, DeviceUncheckedUpdateWithoutInstitutionInput>
    create: XOR<DeviceCreateWithoutInstitutionInput, DeviceUncheckedCreateWithoutInstitutionInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutInstitutionInput, DeviceUncheckedUpdateWithoutInstitutionInput>
  }

  export type DeviceUpdateManyWithWhereWithoutInstitutionInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    device_ID?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    typeID?: IntFilter<"Device"> | number
    institutionID?: StringFilter<"Device"> | string
    state?: BoolFilter<"Device"> | boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutInstitutionInput, ActivityUncheckedUpdateWithoutInstitutionInput>
    create: XOR<ActivityCreateWithoutInstitutionInput, ActivityUncheckedCreateWithoutInstitutionInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutInstitutionInput, ActivityUncheckedUpdateWithoutInstitutionInput>
  }

  export type ActivityUpdateManyWithWhereWithoutInstitutionInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    activity_ID?: IntFilter<"Activity"> | number
    dateTime_in?: DateTimeFilter<"Activity"> | Date | string
    dateTime_out?: DateTimeFilter<"Activity"> | Date | string
    institutionID?: StringFilter<"Activity"> | string
    personID?: IntFilter<"Activity"> | number
  }

  export type InstitutionCreateWithoutAdminsInput = {
    inst_ID: string
    name: string
    persons?: PersonCreateNestedManyWithoutInstitutionInput
    devices?: DeviceCreateNestedManyWithoutInstitutionInput
    activity?: ActivityCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutAdminsInput = {
    inst_ID: string
    name: string
    persons?: PersonUncheckedCreateNestedManyWithoutInstitutionInput
    devices?: DeviceUncheckedCreateNestedManyWithoutInstitutionInput
    activity?: ActivityUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutAdminsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutAdminsInput, InstitutionUncheckedCreateWithoutAdminsInput>
  }

  export type InstitutionUpsertWithoutAdminsInput = {
    update: XOR<InstitutionUpdateWithoutAdminsInput, InstitutionUncheckedUpdateWithoutAdminsInput>
    create: XOR<InstitutionCreateWithoutAdminsInput, InstitutionUncheckedCreateWithoutAdminsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutAdminsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutAdminsInput, InstitutionUncheckedUpdateWithoutAdminsInput>
  }

  export type InstitutionUpdateWithoutAdminsInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    persons?: PersonUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutAdminsInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    persons?: PersonUncheckedUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type PersonCreateWithoutHierarchyInput = {
    name: string
    surname: string
    institution: InstitutionCreateNestedOneWithoutPersonsInput
    activity?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutHierarchyInput = {
    person_ID?: number
    name: string
    surname: string
    institutionID: string
    activity?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutHierarchyInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput>
  }

  export type PersonCreateManyHierarchyInputEnvelope = {
    data: PersonCreateManyHierarchyInput | PersonCreateManyHierarchyInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutHierarchyInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutHierarchyInput, PersonUncheckedUpdateWithoutHierarchyInput>
    create: XOR<PersonCreateWithoutHierarchyInput, PersonUncheckedCreateWithoutHierarchyInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutHierarchyInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutHierarchyInput, PersonUncheckedUpdateWithoutHierarchyInput>
  }

  export type PersonUpdateManyWithWhereWithoutHierarchyInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutHierarchyInput>
  }

  export type InstitutionCreateWithoutPersonsInput = {
    inst_ID: string
    name: string
    admins?: AdminCreateNestedManyWithoutInstitutionInput
    devices?: DeviceCreateNestedManyWithoutInstitutionInput
    activity?: ActivityCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutPersonsInput = {
    inst_ID: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutInstitutionInput
    devices?: DeviceUncheckedCreateNestedManyWithoutInstitutionInput
    activity?: ActivityUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutPersonsInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutPersonsInput, InstitutionUncheckedCreateWithoutPersonsInput>
  }

  export type HierarchyCreateWithoutPersonsInput = {
    name: string
  }

  export type HierarchyUncheckedCreateWithoutPersonsInput = {
    hier_ID?: number
    name: string
  }

  export type HierarchyCreateOrConnectWithoutPersonsInput = {
    where: HierarchyWhereUniqueInput
    create: XOR<HierarchyCreateWithoutPersonsInput, HierarchyUncheckedCreateWithoutPersonsInput>
  }

  export type ActivityCreateWithoutPersonInput = {
    dateTime_in: Date | string
    dateTime_out: Date | string
    institution: InstitutionCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutPersonInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    institutionID: string
  }

  export type ActivityCreateOrConnectWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput>
  }

  export type ActivityCreateManyPersonInputEnvelope = {
    data: ActivityCreateManyPersonInput | ActivityCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutPersonsInput = {
    update: XOR<InstitutionUpdateWithoutPersonsInput, InstitutionUncheckedUpdateWithoutPersonsInput>
    create: XOR<InstitutionCreateWithoutPersonsInput, InstitutionUncheckedCreateWithoutPersonsInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutPersonsInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutPersonsInput, InstitutionUncheckedUpdateWithoutPersonsInput>
  }

  export type InstitutionUpdateWithoutPersonsInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutPersonsInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type HierarchyUpsertWithoutPersonsInput = {
    update: XOR<HierarchyUpdateWithoutPersonsInput, HierarchyUncheckedUpdateWithoutPersonsInput>
    create: XOR<HierarchyCreateWithoutPersonsInput, HierarchyUncheckedCreateWithoutPersonsInput>
    where?: HierarchyWhereInput
  }

  export type HierarchyUpdateToOneWithWhereWithoutPersonsInput = {
    where?: HierarchyWhereInput
    data: XOR<HierarchyUpdateWithoutPersonsInput, HierarchyUncheckedUpdateWithoutPersonsInput>
  }

  export type HierarchyUpdateWithoutPersonsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HierarchyUncheckedUpdateWithoutPersonsInput = {
    hier_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutPersonInput, ActivityUncheckedUpdateWithoutPersonInput>
    create: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutPersonInput, ActivityUncheckedUpdateWithoutPersonInput>
  }

  export type ActivityUpdateManyWithWhereWithoutPersonInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutPersonInput>
  }

  export type DeviceCreateWithoutTypeInput = {
    name: string
    state: boolean
    institution: InstitutionCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutTypeInput = {
    device_ID?: number
    name: string
    institutionID: string
    state: boolean
  }

  export type DeviceCreateOrConnectWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceCreateManyTypeInputEnvelope = {
    data: DeviceCreateManyTypeInput | DeviceCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
    create: XOR<DeviceCreateWithoutTypeInput, DeviceUncheckedCreateWithoutTypeInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutTypeInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutTypeInput, DeviceUncheckedUpdateWithoutTypeInput>
  }

  export type DeviceUpdateManyWithWhereWithoutTypeInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutTypeInput>
  }

  export type Type_DevicesCreateWithoutDevicesInput = {
    name: string
  }

  export type Type_DevicesUncheckedCreateWithoutDevicesInput = {
    type_ID?: number
    name: string
  }

  export type Type_DevicesCreateOrConnectWithoutDevicesInput = {
    where: Type_DevicesWhereUniqueInput
    create: XOR<Type_DevicesCreateWithoutDevicesInput, Type_DevicesUncheckedCreateWithoutDevicesInput>
  }

  export type InstitutionCreateWithoutDevicesInput = {
    inst_ID: string
    name: string
    admins?: AdminCreateNestedManyWithoutInstitutionInput
    persons?: PersonCreateNestedManyWithoutInstitutionInput
    activity?: ActivityCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutDevicesInput = {
    inst_ID: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutInstitutionInput
    persons?: PersonUncheckedCreateNestedManyWithoutInstitutionInput
    activity?: ActivityUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutDevicesInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutDevicesInput, InstitutionUncheckedCreateWithoutDevicesInput>
  }

  export type Type_DevicesUpsertWithoutDevicesInput = {
    update: XOR<Type_DevicesUpdateWithoutDevicesInput, Type_DevicesUncheckedUpdateWithoutDevicesInput>
    create: XOR<Type_DevicesCreateWithoutDevicesInput, Type_DevicesUncheckedCreateWithoutDevicesInput>
    where?: Type_DevicesWhereInput
  }

  export type Type_DevicesUpdateToOneWithWhereWithoutDevicesInput = {
    where?: Type_DevicesWhereInput
    data: XOR<Type_DevicesUpdateWithoutDevicesInput, Type_DevicesUncheckedUpdateWithoutDevicesInput>
  }

  export type Type_DevicesUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Type_DevicesUncheckedUpdateWithoutDevicesInput = {
    type_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstitutionUpsertWithoutDevicesInput = {
    update: XOR<InstitutionUpdateWithoutDevicesInput, InstitutionUncheckedUpdateWithoutDevicesInput>
    create: XOR<InstitutionCreateWithoutDevicesInput, InstitutionUncheckedCreateWithoutDevicesInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutDevicesInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutDevicesInput, InstitutionUncheckedUpdateWithoutDevicesInput>
  }

  export type InstitutionUpdateWithoutDevicesInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutDevicesInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUncheckedUpdateManyWithoutInstitutionNestedInput
    activity?: ActivityUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateWithoutActivityInput = {
    inst_ID: string
    name: string
    admins?: AdminCreateNestedManyWithoutInstitutionInput
    persons?: PersonCreateNestedManyWithoutInstitutionInput
    devices?: DeviceCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutActivityInput = {
    inst_ID: string
    name: string
    admins?: AdminUncheckedCreateNestedManyWithoutInstitutionInput
    persons?: PersonUncheckedCreateNestedManyWithoutInstitutionInput
    devices?: DeviceUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutActivityInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutActivityInput, InstitutionUncheckedCreateWithoutActivityInput>
  }

  export type PersonCreateWithoutActivityInput = {
    name: string
    surname: string
    institution: InstitutionCreateNestedOneWithoutPersonsInput
    hierarchy: HierarchyCreateNestedOneWithoutPersonsInput
  }

  export type PersonUncheckedCreateWithoutActivityInput = {
    person_ID?: number
    name: string
    surname: string
    institutionID: string
    hierarchyID: number
  }

  export type PersonCreateOrConnectWithoutActivityInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutActivityInput, PersonUncheckedCreateWithoutActivityInput>
  }

  export type InstitutionUpsertWithoutActivityInput = {
    update: XOR<InstitutionUpdateWithoutActivityInput, InstitutionUncheckedUpdateWithoutActivityInput>
    create: XOR<InstitutionCreateWithoutActivityInput, InstitutionUncheckedCreateWithoutActivityInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutActivityInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutActivityInput, InstitutionUncheckedUpdateWithoutActivityInput>
  }

  export type InstitutionUpdateWithoutActivityInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutActivityInput = {
    inst_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: AdminUncheckedUpdateManyWithoutInstitutionNestedInput
    persons?: PersonUncheckedUpdateManyWithoutInstitutionNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type PersonUpsertWithoutActivityInput = {
    update: XOR<PersonUpdateWithoutActivityInput, PersonUncheckedUpdateWithoutActivityInput>
    create: XOR<PersonCreateWithoutActivityInput, PersonUncheckedCreateWithoutActivityInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutActivityInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutActivityInput, PersonUncheckedUpdateWithoutActivityInput>
  }

  export type PersonUpdateWithoutActivityInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institution?: InstitutionUpdateOneRequiredWithoutPersonsNestedInput
    hierarchy?: HierarchyUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type PersonUncheckedUpdateWithoutActivityInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    hierarchyID?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInstitutionInput = {
    email: string
    name: string
    password: string
  }

  export type PersonCreateManyInstitutionInput = {
    person_ID?: number
    name: string
    surname: string
    hierarchyID: number
  }

  export type DeviceCreateManyInstitutionInput = {
    device_ID?: number
    name: string
    typeID: number
    state: boolean
  }

  export type ActivityCreateManyInstitutionInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    personID: number
  }

  export type AdminUpdateWithoutInstitutionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutInstitutionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyWithoutInstitutionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PersonUpdateWithoutInstitutionInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    hierarchy?: HierarchyUpdateOneRequiredWithoutPersonsNestedInput
    activity?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutInstitutionInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    hierarchyID?: IntFieldUpdateOperationsInput | number
    activity?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutInstitutionInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    hierarchyID?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUpdateWithoutInstitutionInput = {
    name?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    type?: Type_DevicesUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutInstitutionInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeID?: IntFieldUpdateOperationsInput | number
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUncheckedUpdateManyWithoutInstitutionInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeID?: IntFieldUpdateOperationsInput | number
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityUpdateWithoutInstitutionInput = {
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutInstitutionInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    personID?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyWithoutInstitutionInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    personID?: IntFieldUpdateOperationsInput | number
  }

  export type PersonCreateManyHierarchyInput = {
    person_ID?: number
    name: string
    surname: string
    institutionID: string
  }

  export type PersonUpdateWithoutHierarchyInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institution?: InstitutionUpdateOneRequiredWithoutPersonsNestedInput
    activity?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutHierarchyInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    activity?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutHierarchyInput = {
    person_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateManyPersonInput = {
    activity_ID?: number
    dateTime_in: Date | string
    dateTime_out: Date | string
    institutionID: string
  }

  export type ActivityUpdateWithoutPersonInput = {
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutPersonInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionID?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUncheckedUpdateManyWithoutPersonInput = {
    activity_ID?: IntFieldUpdateOperationsInput | number
    dateTime_in?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTime_out?: DateTimeFieldUpdateOperationsInput | Date | string
    institutionID?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateManyTypeInput = {
    device_ID?: number
    name: string
    institutionID: string
    state: boolean
  }

  export type DeviceUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
    institution?: InstitutionUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutTypeInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceUncheckedUpdateManyWithoutTypeInput = {
    device_ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    institutionID?: StringFieldUpdateOperationsInput | string
    state?: BoolFieldUpdateOperationsInput | boolean
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