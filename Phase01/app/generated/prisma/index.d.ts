
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
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model ScheduleDay
 * 
 */
export type ScheduleDay = $Result.DefaultSelection<Prisma.$ScheduleDayPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Expertise
 * 
 */
export type Expertise = $Result.DefaultSelection<Prisma.$ExpertisePayload>
/**
 * Model Responsibility
 * 
 */
export type Responsibility = $Result.DefaultSelection<Prisma.$ResponsibilityPayload>
/**
 * Model CompletedCourse
 * 
 */
export type CompletedCourse = $Result.DefaultSelection<Prisma.$CompletedCoursePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  instructor: 'instructor',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Day: {
  Sunday: 'Sunday',
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday'
};

export type Day = (typeof Day)[keyof typeof Day]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleDay`: Exposes CRUD operations for the **ScheduleDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleDays
    * const scheduleDays = await prisma.scheduleDay.findMany()
    * ```
    */
  get scheduleDay(): Prisma.ScheduleDayDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.expertise`: Exposes CRUD operations for the **Expertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expertise
    * const expertise = await prisma.expertise.findMany()
    * ```
    */
  get expertise(): Prisma.ExpertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responsibility`: Exposes CRUD operations for the **Responsibility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responsibilities
    * const responsibilities = await prisma.responsibility.findMany()
    * ```
    */
  get responsibility(): Prisma.ResponsibilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedCourse`: Exposes CRUD operations for the **CompletedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedCourses
    * const completedCourses = await prisma.completedCourse.findMany()
    * ```
    */
  get completedCourse(): Prisma.CompletedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
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
    Course: 'Course',
    Schedule: 'Schedule',
    ScheduleDay: 'ScheduleDay',
    User: 'User',
    Expertise: 'Expertise',
    Responsibility: 'Responsibility',
    CompletedCourse: 'CompletedCourse',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
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
      modelProps: "course" | "schedule" | "scheduleDay" | "user" | "expertise" | "responsibility" | "completedCourse" | "account" | "session" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      ScheduleDay: {
        payload: Prisma.$ScheduleDayPayload<ExtArgs>
        fields: Prisma.ScheduleDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          findFirst: {
            args: Prisma.ScheduleDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          findMany: {
            args: Prisma.ScheduleDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          create: {
            args: Prisma.ScheduleDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          createMany: {
            args: Prisma.ScheduleDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          delete: {
            args: Prisma.ScheduleDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          update: {
            args: Prisma.ScheduleDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          aggregate: {
            args: Prisma.ScheduleDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleDay>
          }
          groupBy: {
            args: Prisma.ScheduleDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleDayCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDayCountAggregateOutputType> | number
          }
        }
      }
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
      Expertise: {
        payload: Prisma.$ExpertisePayload<ExtArgs>
        fields: Prisma.ExpertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findFirst: {
            args: Prisma.ExpertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          findMany: {
            args: Prisma.ExpertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          create: {
            args: Prisma.ExpertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          createMany: {
            args: Prisma.ExpertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          delete: {
            args: Prisma.ExpertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          update: {
            args: Prisma.ExpertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          deleteMany: {
            args: Prisma.ExpertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>[]
          }
          upsert: {
            args: Prisma.ExpertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertisePayload>
          }
          aggregate: {
            args: Prisma.ExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertise>
          }
          groupBy: {
            args: Prisma.ExpertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertiseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseCountAggregateOutputType> | number
          }
        }
      }
      Responsibility: {
        payload: Prisma.$ResponsibilityPayload<ExtArgs>
        fields: Prisma.ResponsibilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponsibilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponsibilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          findFirst: {
            args: Prisma.ResponsibilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponsibilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          findMany: {
            args: Prisma.ResponsibilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>[]
          }
          create: {
            args: Prisma.ResponsibilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          createMany: {
            args: Prisma.ResponsibilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponsibilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>[]
          }
          delete: {
            args: Prisma.ResponsibilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          update: {
            args: Prisma.ResponsibilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          deleteMany: {
            args: Prisma.ResponsibilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponsibilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponsibilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>[]
          }
          upsert: {
            args: Prisma.ResponsibilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsibilityPayload>
          }
          aggregate: {
            args: Prisma.ResponsibilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponsibility>
          }
          groupBy: {
            args: Prisma.ResponsibilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponsibilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponsibilityCountArgs<ExtArgs>
            result: $Utils.Optional<ResponsibilityCountAggregateOutputType> | number
          }
        }
      }
      CompletedCourse: {
        payload: Prisma.$CompletedCoursePayload<ExtArgs>
        fields: Prisma.CompletedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findFirst: {
            args: Prisma.CompletedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findMany: {
            args: Prisma.CompletedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          create: {
            args: Prisma.CompletedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          createMany: {
            args: Prisma.CompletedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          delete: {
            args: Prisma.CompletedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          update: {
            args: Prisma.CompletedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          deleteMany: {
            args: Prisma.CompletedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          upsert: {
            args: Prisma.CompletedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          aggregate: {
            args: Prisma.CompletedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedCourse>
          }
          groupBy: {
            args: Prisma.CompletedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
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
    course?: CourseOmit
    schedule?: ScheduleOmit
    scheduleDay?: ScheduleDayOmit
    user?: UserOmit
    expertise?: ExpertiseOmit
    responsibility?: ResponsibilityOmit
    completedCourse?: CompletedCourseOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    registeredUsers: number
    interestedInstructors: number
    prerequisites: number
    requiredFor: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registeredUsers?: boolean | CourseCountOutputTypeCountRegisteredUsersArgs
    interestedInstructors?: boolean | CourseCountOutputTypeCountInterestedInstructorsArgs
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    requiredFor?: boolean | CourseCountOutputTypeCountRequiredForArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRegisteredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountInterestedInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRequiredForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    days: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | ScheduleCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleDayWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    completedCourses: number
    registeredCourses: number
    interestedCourses: number
    assignedCourses: number
    expertise: number
    responsibilities: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | UserCountOutputTypeCountCompletedCoursesArgs
    registeredCourses?: boolean | UserCountOutputTypeCountRegisteredCoursesArgs
    interestedCourses?: boolean | UserCountOutputTypeCountInterestedCoursesArgs
    assignedCourses?: boolean | UserCountOutputTypeCountAssignedCoursesArgs
    expertise?: boolean | UserCountOutputTypeCountExpertiseArgs
    responsibilities?: boolean | UserCountOutputTypeCountResponsibilitiesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountCompletedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegisteredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsibilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    crn: number | null
    totalSeats: number | null
    availableSeats: number | null
    creditHours: number | null
    scheduleId: number | null
    assignedInstructorId: number | null
  }

  export type CourseSumAggregateOutputType = {
    crn: number | null
    totalSeats: number | null
    availableSeats: number | null
    creditHours: number | null
    scheduleId: number | null
    assignedInstructorId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    crn: number | null
    name: string | null
    category: string | null
    description: string | null
    instructor: string | null
    openForRegistration: boolean | null
    adminApprove: boolean | null
    totalSeats: number | null
    availableSeats: number | null
    hasStarted: boolean | null
    creditHours: number | null
    isPublishedForInstructors: boolean | null
    assignmentConfirmed: boolean | null
    interestDeadline: Date | null
    scheduleId: number | null
    assignedInstructorId: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    crn: number | null
    name: string | null
    category: string | null
    description: string | null
    instructor: string | null
    openForRegistration: boolean | null
    adminApprove: boolean | null
    totalSeats: number | null
    availableSeats: number | null
    hasStarted: boolean | null
    creditHours: number | null
    isPublishedForInstructors: boolean | null
    assignmentConfirmed: boolean | null
    interestDeadline: Date | null
    scheduleId: number | null
    assignedInstructorId: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    crn: number
    name: number
    category: number
    description: number
    instructor: number
    openForRegistration: number
    adminApprove: number
    totalSeats: number
    availableSeats: number
    hasStarted: number
    creditHours: number
    isPublishedForInstructors: number
    assignmentConfirmed: number
    interestDeadline: number
    scheduleId: number
    assignedInstructorId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    crn?: true
    totalSeats?: true
    availableSeats?: true
    creditHours?: true
    scheduleId?: true
    assignedInstructorId?: true
  }

  export type CourseSumAggregateInputType = {
    crn?: true
    totalSeats?: true
    availableSeats?: true
    creditHours?: true
    scheduleId?: true
    assignedInstructorId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    crn?: true
    name?: true
    category?: true
    description?: true
    instructor?: true
    openForRegistration?: true
    adminApprove?: true
    totalSeats?: true
    availableSeats?: true
    hasStarted?: true
    creditHours?: true
    isPublishedForInstructors?: true
    assignmentConfirmed?: true
    interestDeadline?: true
    scheduleId?: true
    assignedInstructorId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    crn?: true
    name?: true
    category?: true
    description?: true
    instructor?: true
    openForRegistration?: true
    adminApprove?: true
    totalSeats?: true
    availableSeats?: true
    hasStarted?: true
    creditHours?: true
    isPublishedForInstructors?: true
    assignmentConfirmed?: true
    interestDeadline?: true
    scheduleId?: true
    assignedInstructorId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    crn?: true
    name?: true
    category?: true
    description?: true
    instructor?: true
    openForRegistration?: true
    adminApprove?: true
    totalSeats?: true
    availableSeats?: true
    hasStarted?: true
    creditHours?: true
    isPublishedForInstructors?: true
    assignmentConfirmed?: true
    interestDeadline?: true
    scheduleId?: true
    assignedInstructorId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date
    scheduleId: number
    assignedInstructorId: number | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crn?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    openForRegistration?: boolean
    adminApprove?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    hasStarted?: boolean
    creditHours?: boolean
    isPublishedForInstructors?: boolean
    assignmentConfirmed?: boolean
    interestDeadline?: boolean
    scheduleId?: boolean
    assignedInstructorId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    registeredUsers?: boolean | Course$registeredUsersArgs<ExtArgs>
    interestedInstructors?: boolean | Course$interestedInstructorsArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    requiredFor?: boolean | Course$requiredForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crn?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    openForRegistration?: boolean
    adminApprove?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    hasStarted?: boolean
    creditHours?: boolean
    isPublishedForInstructors?: boolean
    assignmentConfirmed?: boolean
    interestDeadline?: boolean
    scheduleId?: boolean
    assignedInstructorId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    crn?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    openForRegistration?: boolean
    adminApprove?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    hasStarted?: boolean
    creditHours?: boolean
    isPublishedForInstructors?: boolean
    assignmentConfirmed?: boolean
    interestDeadline?: boolean
    scheduleId?: boolean
    assignedInstructorId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    crn?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    openForRegistration?: boolean
    adminApprove?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    hasStarted?: boolean
    creditHours?: boolean
    isPublishedForInstructors?: boolean
    assignmentConfirmed?: boolean
    interestDeadline?: boolean
    scheduleId?: boolean
    assignedInstructorId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "crn" | "name" | "category" | "description" | "instructor" | "openForRegistration" | "adminApprove" | "totalSeats" | "availableSeats" | "hasStarted" | "creditHours" | "isPublishedForInstructors" | "assignmentConfirmed" | "interestDeadline" | "scheduleId" | "assignedInstructorId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    registeredUsers?: boolean | Course$registeredUsersArgs<ExtArgs>
    interestedInstructors?: boolean | Course$interestedInstructorsArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    requiredFor?: boolean | Course$requiredForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    assignedToInstructor?: boolean | Course$assignedToInstructorArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
      registeredUsers: Prisma.$UserPayload<ExtArgs>[]
      interestedInstructors: Prisma.$UserPayload<ExtArgs>[]
      assignedToInstructor: Prisma.$UserPayload<ExtArgs> | null
      prerequisites: Prisma.$CoursePayload<ExtArgs>[]
      requiredFor: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      crn: number
      name: string
      category: string
      description: string
      instructor: string
      openForRegistration: boolean
      adminApprove: boolean
      totalSeats: number
      availableSeats: number
      hasStarted: boolean
      creditHours: number
      isPublishedForInstructors: boolean | null
      assignmentConfirmed: boolean
      interestDeadline: Date
      scheduleId: number
      assignedInstructorId: number | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registeredUsers<T extends Course$registeredUsersArgs<ExtArgs> = {}>(args?: Subset<T, Course$registeredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interestedInstructors<T extends Course$interestedInstructorsArgs<ExtArgs> = {}>(args?: Subset<T, Course$interestedInstructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedToInstructor<T extends Course$assignedToInstructorArgs<ExtArgs> = {}>(args?: Subset<T, Course$assignedToInstructorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requiredFor<T extends Course$requiredForArgs<ExtArgs> = {}>(args?: Subset<T, Course$requiredForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly crn: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly openForRegistration: FieldRef<"Course", 'Boolean'>
    readonly adminApprove: FieldRef<"Course", 'Boolean'>
    readonly totalSeats: FieldRef<"Course", 'Int'>
    readonly availableSeats: FieldRef<"Course", 'Int'>
    readonly hasStarted: FieldRef<"Course", 'Boolean'>
    readonly creditHours: FieldRef<"Course", 'Int'>
    readonly isPublishedForInstructors: FieldRef<"Course", 'Boolean'>
    readonly assignmentConfirmed: FieldRef<"Course", 'Boolean'>
    readonly interestDeadline: FieldRef<"Course", 'DateTime'>
    readonly scheduleId: FieldRef<"Course", 'Int'>
    readonly assignedInstructorId: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.registeredUsers
   */
  export type Course$registeredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.interestedInstructors
   */
  export type Course$interestedInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.assignedToInstructor
   */
  export type Course$assignedToInstructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course.requiredFor
   */
  export type Course$requiredForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    startTime: string | null
    endTime: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    startTime: string | null
    endTime: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    startTime: string
    endTime: string
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    days?: boolean | Schedule$daysArgs<ExtArgs>
    course?: boolean | Schedule$courseArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | Schedule$daysArgs<ExtArgs>
    course?: boolean | Schedule$courseArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      days: Prisma.$ScheduleDayPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startTime: string
      endTime: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends Schedule$daysArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends Schedule$courseArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.days
   */
  export type Schedule$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    where?: ScheduleDayWhereInput
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    cursor?: ScheduleDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * Schedule.course
   */
  export type Schedule$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleDay
   */

  export type AggregateScheduleDay = {
    _count: ScheduleDayCountAggregateOutputType | null
    _avg: ScheduleDayAvgAggregateOutputType | null
    _sum: ScheduleDaySumAggregateOutputType | null
    _min: ScheduleDayMinAggregateOutputType | null
    _max: ScheduleDayMaxAggregateOutputType | null
  }

  export type ScheduleDayAvgAggregateOutputType = {
    id: number | null
    scheduleId: number | null
  }

  export type ScheduleDaySumAggregateOutputType = {
    id: number | null
    scheduleId: number | null
  }

  export type ScheduleDayMinAggregateOutputType = {
    id: number | null
    day: $Enums.Day | null
    scheduleId: number | null
  }

  export type ScheduleDayMaxAggregateOutputType = {
    id: number | null
    day: $Enums.Day | null
    scheduleId: number | null
  }

  export type ScheduleDayCountAggregateOutputType = {
    id: number
    day: number
    scheduleId: number
    _all: number
  }


  export type ScheduleDayAvgAggregateInputType = {
    id?: true
    scheduleId?: true
  }

  export type ScheduleDaySumAggregateInputType = {
    id?: true
    scheduleId?: true
  }

  export type ScheduleDayMinAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
  }

  export type ScheduleDayMaxAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
  }

  export type ScheduleDayCountAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
    _all?: true
  }

  export type ScheduleDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDay to aggregate.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleDays
    **/
    _count?: true | ScheduleDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleDayMaxAggregateInputType
  }

  export type GetScheduleDayAggregateType<T extends ScheduleDayAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleDay[P]>
      : GetScalarType<T[P], AggregateScheduleDay[P]>
  }




  export type ScheduleDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleDayWhereInput
    orderBy?: ScheduleDayOrderByWithAggregationInput | ScheduleDayOrderByWithAggregationInput[]
    by: ScheduleDayScalarFieldEnum[] | ScheduleDayScalarFieldEnum
    having?: ScheduleDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleDayCountAggregateInputType | true
    _avg?: ScheduleDayAvgAggregateInputType
    _sum?: ScheduleDaySumAggregateInputType
    _min?: ScheduleDayMinAggregateInputType
    _max?: ScheduleDayMaxAggregateInputType
  }

  export type ScheduleDayGroupByOutputType = {
    id: number
    day: $Enums.Day
    scheduleId: number
    _count: ScheduleDayCountAggregateOutputType | null
    _avg: ScheduleDayAvgAggregateOutputType | null
    _sum: ScheduleDaySumAggregateOutputType | null
    _min: ScheduleDayMinAggregateOutputType | null
    _max: ScheduleDayMaxAggregateOutputType | null
  }

  type GetScheduleDayGroupByPayload<T extends ScheduleDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleDayGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleDayGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectScalar = {
    id?: boolean
    day?: boolean
    scheduleId?: boolean
  }

  export type ScheduleDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "scheduleId", ExtArgs["result"]["scheduleDay"]>
  export type ScheduleDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $ScheduleDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleDay"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: $Enums.Day
      scheduleId: number
    }, ExtArgs["result"]["scheduleDay"]>
    composites: {}
  }

  type ScheduleDayGetPayload<S extends boolean | null | undefined | ScheduleDayDefaultArgs> = $Result.GetResult<Prisma.$ScheduleDayPayload, S>

  type ScheduleDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleDayCountAggregateInputType | true
    }

  export interface ScheduleDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleDay'], meta: { name: 'ScheduleDay' } }
    /**
     * Find zero or one ScheduleDay that matches the filter.
     * @param {ScheduleDayFindUniqueArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleDayFindUniqueArgs>(args: SelectSubset<T, ScheduleDayFindUniqueArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleDayFindUniqueOrThrowArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleDayFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindFirstArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleDayFindFirstArgs>(args?: SelectSubset<T, ScheduleDayFindFirstArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindFirstOrThrowArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleDayFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleDays
     * const scheduleDays = await prisma.scheduleDay.findMany()
     * 
     * // Get first 10 ScheduleDays
     * const scheduleDays = await prisma.scheduleDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleDayFindManyArgs>(args?: SelectSubset<T, ScheduleDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleDay.
     * @param {ScheduleDayCreateArgs} args - Arguments to create a ScheduleDay.
     * @example
     * // Create one ScheduleDay
     * const ScheduleDay = await prisma.scheduleDay.create({
     *   data: {
     *     // ... data to create a ScheduleDay
     *   }
     * })
     * 
     */
    create<T extends ScheduleDayCreateArgs>(args: SelectSubset<T, ScheduleDayCreateArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleDays.
     * @param {ScheduleDayCreateManyArgs} args - Arguments to create many ScheduleDays.
     * @example
     * // Create many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleDayCreateManyArgs>(args?: SelectSubset<T, ScheduleDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleDays and returns the data saved in the database.
     * @param {ScheduleDayCreateManyAndReturnArgs} args - Arguments to create many ScheduleDays.
     * @example
     * // Create many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleDays and only return the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleDayCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleDay.
     * @param {ScheduleDayDeleteArgs} args - Arguments to delete one ScheduleDay.
     * @example
     * // Delete one ScheduleDay
     * const ScheduleDay = await prisma.scheduleDay.delete({
     *   where: {
     *     // ... filter to delete one ScheduleDay
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDayDeleteArgs>(args: SelectSubset<T, ScheduleDayDeleteArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleDay.
     * @param {ScheduleDayUpdateArgs} args - Arguments to update one ScheduleDay.
     * @example
     * // Update one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleDayUpdateArgs>(args: SelectSubset<T, ScheduleDayUpdateArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleDays.
     * @param {ScheduleDayDeleteManyArgs} args - Arguments to filter ScheduleDays to delete.
     * @example
     * // Delete a few ScheduleDays
     * const { count } = await prisma.scheduleDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDayDeleteManyArgs>(args?: SelectSubset<T, ScheduleDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleDayUpdateManyArgs>(args: SelectSubset<T, ScheduleDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDays and returns the data updated in the database.
     * @param {ScheduleDayUpdateManyAndReturnArgs} args - Arguments to update many ScheduleDays.
     * @example
     * // Update many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleDays and only return the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleDayUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleDay.
     * @param {ScheduleDayUpsertArgs} args - Arguments to update or create a ScheduleDay.
     * @example
     * // Update or create a ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.upsert({
     *   create: {
     *     // ... data to create a ScheduleDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleDay we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleDayUpsertArgs>(args: SelectSubset<T, ScheduleDayUpsertArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayCountArgs} args - Arguments to filter ScheduleDays to count.
     * @example
     * // Count the number of ScheduleDays
     * const count = await prisma.scheduleDay.count({
     *   where: {
     *     // ... the filter for the ScheduleDays we want to count
     *   }
     * })
    **/
    count<T extends ScheduleDayCountArgs>(
      args?: Subset<T, ScheduleDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleDayAggregateArgs>(args: Subset<T, ScheduleDayAggregateArgs>): Prisma.PrismaPromise<GetScheduleDayAggregateType<T>>

    /**
     * Group by ScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayGroupByArgs} args - Group by arguments.
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
      T extends ScheduleDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleDayGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleDay model
   */
  readonly fields: ScheduleDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduleDay model
   */
  interface ScheduleDayFieldRefs {
    readonly id: FieldRef<"ScheduleDay", 'Int'>
    readonly day: FieldRef<"ScheduleDay", 'Day'>
    readonly scheduleId: FieldRef<"ScheduleDay", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleDay findUnique
   */
  export type ScheduleDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay findUniqueOrThrow
   */
  export type ScheduleDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay findFirst
   */
  export type ScheduleDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDays.
     */
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay findFirstOrThrow
   */
  export type ScheduleDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDays.
     */
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay findMany
   */
  export type ScheduleDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDays to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay create
   */
  export type ScheduleDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleDay.
     */
    data: XOR<ScheduleDayCreateInput, ScheduleDayUncheckedCreateInput>
  }

  /**
   * ScheduleDay createMany
   */
  export type ScheduleDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleDays.
     */
    data: ScheduleDayCreateManyInput | ScheduleDayCreateManyInput[]
  }

  /**
   * ScheduleDay createManyAndReturn
   */
  export type ScheduleDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleDays.
     */
    data: ScheduleDayCreateManyInput | ScheduleDayCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleDay update
   */
  export type ScheduleDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleDay.
     */
    data: XOR<ScheduleDayUpdateInput, ScheduleDayUncheckedUpdateInput>
    /**
     * Choose, which ScheduleDay to update.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay updateMany
   */
  export type ScheduleDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleDays.
     */
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDays to update
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to update.
     */
    limit?: number
  }

  /**
   * ScheduleDay updateManyAndReturn
   */
  export type ScheduleDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleDays.
     */
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDays to update
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleDay upsert
   */
  export type ScheduleDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleDay to update in case it exists.
     */
    where: ScheduleDayWhereUniqueInput
    /**
     * In case the ScheduleDay found by the `where` argument doesn't exist, create a new ScheduleDay with this data.
     */
    create: XOR<ScheduleDayCreateInput, ScheduleDayUncheckedCreateInput>
    /**
     * In case the ScheduleDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleDayUpdateInput, ScheduleDayUncheckedUpdateInput>
  }

  /**
   * ScheduleDay delete
   */
  export type ScheduleDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter which ScheduleDay to delete.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay deleteMany
   */
  export type ScheduleDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDays to delete
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to delete.
     */
    limit?: number
  }

  /**
   * ScheduleDay without action
   */
  export type ScheduleDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
  }


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
    gpa: number | null
    creditsCompleted: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    gpa: number | null
    creditsCompleted: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    gpa: number | null
    major: string | null
    creditsCompleted: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    gpa: number | null
    major: string | null
    creditsCompleted: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    gpa: number
    major: number
    creditsCompleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    gpa?: true
    creditsCompleted?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    gpa?: true
    creditsCompleted?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gpa?: true
    major?: true
    creditsCompleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gpa?: true
    major?: true
    creditsCompleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gpa?: true
    major?: true
    creditsCompleted?: true
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
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa: number | null
    major: string | null
    creditsCompleted: number | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gpa?: boolean
    major?: boolean
    creditsCompleted?: boolean
    completedCourses?: boolean | User$completedCoursesArgs<ExtArgs>
    registeredCourses?: boolean | User$registeredCoursesArgs<ExtArgs>
    interestedCourses?: boolean | User$interestedCoursesArgs<ExtArgs>
    assignedCourses?: boolean | User$assignedCoursesArgs<ExtArgs>
    expertise?: boolean | User$expertiseArgs<ExtArgs>
    responsibilities?: boolean | User$responsibilitiesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gpa?: boolean
    major?: boolean
    creditsCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gpa?: boolean
    major?: boolean
    creditsCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gpa?: boolean
    major?: boolean
    creditsCompleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "gpa" | "major" | "creditsCompleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | User$completedCoursesArgs<ExtArgs>
    registeredCourses?: boolean | User$registeredCoursesArgs<ExtArgs>
    interestedCourses?: boolean | User$interestedCoursesArgs<ExtArgs>
    assignedCourses?: boolean | User$assignedCoursesArgs<ExtArgs>
    expertise?: boolean | User$expertiseArgs<ExtArgs>
    responsibilities?: boolean | User$responsibilitiesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      completedCourses: Prisma.$CompletedCoursePayload<ExtArgs>[]
      registeredCourses: Prisma.$CoursePayload<ExtArgs>[]
      interestedCourses: Prisma.$CoursePayload<ExtArgs>[]
      assignedCourses: Prisma.$CoursePayload<ExtArgs>[]
      expertise: Prisma.$ExpertisePayload<ExtArgs>[]
      responsibilities: Prisma.$ResponsibilityPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      gpa: number | null
      major: string | null
      creditsCompleted: number | null
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
    completedCourses<T extends User$completedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$completedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registeredCourses<T extends User$registeredCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$registeredCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interestedCourses<T extends User$interestedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$interestedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedCourses<T extends User$assignedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expertise<T extends User$expertiseArgs<ExtArgs> = {}>(args?: Subset<T, User$expertiseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsibilities<T extends User$responsibilitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$responsibilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly gpa: FieldRef<"User", 'Float'>
    readonly major: FieldRef<"User", 'String'>
    readonly creditsCompleted: FieldRef<"User", 'Int'>
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.completedCourses
   */
  export type User$completedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * User.registeredCourses
   */
  export type User$registeredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.interestedCourses
   */
  export type User$interestedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.assignedCourses
   */
  export type User$assignedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.expertise
   */
  export type User$expertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    where?: ExpertiseWhereInput
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    cursor?: ExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * User.responsibilities
   */
  export type User$responsibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    where?: ResponsibilityWhereInput
    orderBy?: ResponsibilityOrderByWithRelationInput | ResponsibilityOrderByWithRelationInput[]
    cursor?: ResponsibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponsibilityScalarFieldEnum | ResponsibilityScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Expertise
   */

  export type AggregateExpertise = {
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  export type ExpertiseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ExpertiseSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ExpertiseMinAggregateOutputType = {
    id: number | null
    value: string | null
    userId: number | null
  }

  export type ExpertiseMaxAggregateOutputType = {
    id: number | null
    value: string | null
    userId: number | null
  }

  export type ExpertiseCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    _all: number
  }


  export type ExpertiseAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExpertiseSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExpertiseMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ExpertiseMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ExpertiseCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type ExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to aggregate.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expertise
    **/
    _count?: true | ExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseMaxAggregateInputType
  }

  export type GetExpertiseAggregateType<T extends ExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertise[P]>
      : GetScalarType<T[P], AggregateExpertise[P]>
  }




  export type ExpertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseWhereInput
    orderBy?: ExpertiseOrderByWithAggregationInput | ExpertiseOrderByWithAggregationInput[]
    by: ExpertiseScalarFieldEnum[] | ExpertiseScalarFieldEnum
    having?: ExpertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseCountAggregateInputType | true
    _avg?: ExpertiseAvgAggregateInputType
    _sum?: ExpertiseSumAggregateInputType
    _min?: ExpertiseMinAggregateInputType
    _max?: ExpertiseMaxAggregateInputType
  }

  export type ExpertiseGroupByOutputType = {
    id: number
    value: string
    userId: number
    _count: ExpertiseCountAggregateOutputType | null
    _avg: ExpertiseAvgAggregateOutputType | null
    _sum: ExpertiseSumAggregateOutputType | null
    _min: ExpertiseMinAggregateOutputType | null
    _max: ExpertiseMaxAggregateOutputType | null
  }

  type GetExpertiseGroupByPayload<T extends ExpertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type ExpertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertise"]>

  export type ExpertiseSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
  }

  export type ExpertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "userId", ExtArgs["result"]["expertise"]>
  export type ExpertiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpertiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpertiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expertise"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      userId: number
    }, ExtArgs["result"]["expertise"]>
    composites: {}
  }

  type ExpertiseGetPayload<S extends boolean | null | undefined | ExpertiseDefaultArgs> = $Result.GetResult<Prisma.$ExpertisePayload, S>

  type ExpertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseCountAggregateInputType | true
    }

  export interface ExpertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expertise'], meta: { name: 'Expertise' } }
    /**
     * Find zero or one Expertise that matches the filter.
     * @param {ExpertiseFindUniqueArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertiseFindUniqueArgs>(args: SelectSubset<T, ExpertiseFindUniqueArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertiseFindUniqueOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertiseFindFirstArgs>(args?: SelectSubset<T, ExpertiseFindFirstArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindFirstOrThrowArgs} args - Arguments to find a Expertise
     * @example
     * // Get one Expertise
     * const expertise = await prisma.expertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expertise
     * const expertise = await prisma.expertise.findMany()
     * 
     * // Get first 10 Expertise
     * const expertise = await prisma.expertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseWithIdOnly = await prisma.expertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertiseFindManyArgs>(args?: SelectSubset<T, ExpertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expertise.
     * @param {ExpertiseCreateArgs} args - Arguments to create a Expertise.
     * @example
     * // Create one Expertise
     * const Expertise = await prisma.expertise.create({
     *   data: {
     *     // ... data to create a Expertise
     *   }
     * })
     * 
     */
    create<T extends ExpertiseCreateArgs>(args: SelectSubset<T, ExpertiseCreateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expertise.
     * @param {ExpertiseCreateManyArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertiseCreateManyArgs>(args?: SelectSubset<T, ExpertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expertise and returns the data saved in the database.
     * @param {ExpertiseCreateManyAndReturnArgs} args - Arguments to create many Expertise.
     * @example
     * // Create many Expertise
     * const expertise = await prisma.expertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expertise.
     * @param {ExpertiseDeleteArgs} args - Arguments to delete one Expertise.
     * @example
     * // Delete one Expertise
     * const Expertise = await prisma.expertise.delete({
     *   where: {
     *     // ... filter to delete one Expertise
     *   }
     * })
     * 
     */
    delete<T extends ExpertiseDeleteArgs>(args: SelectSubset<T, ExpertiseDeleteArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expertise.
     * @param {ExpertiseUpdateArgs} args - Arguments to update one Expertise.
     * @example
     * // Update one Expertise
     * const expertise = await prisma.expertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertiseUpdateArgs>(args: SelectSubset<T, ExpertiseUpdateArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expertise.
     * @param {ExpertiseDeleteManyArgs} args - Arguments to filter Expertise to delete.
     * @example
     * // Delete a few Expertise
     * const { count } = await prisma.expertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertiseDeleteManyArgs>(args?: SelectSubset<T, ExpertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertiseUpdateManyArgs>(args: SelectSubset<T, ExpertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expertise and returns the data updated in the database.
     * @param {ExpertiseUpdateManyAndReturnArgs} args - Arguments to update many Expertise.
     * @example
     * // Update many Expertise
     * const expertise = await prisma.expertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expertise and only return the `id`
     * const expertiseWithIdOnly = await prisma.expertise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expertise.
     * @param {ExpertiseUpsertArgs} args - Arguments to update or create a Expertise.
     * @example
     * // Update or create a Expertise
     * const expertise = await prisma.expertise.upsert({
     *   create: {
     *     // ... data to create a Expertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expertise we want to update
     *   }
     * })
     */
    upsert<T extends ExpertiseUpsertArgs>(args: SelectSubset<T, ExpertiseUpsertArgs<ExtArgs>>): Prisma__ExpertiseClient<$Result.GetResult<Prisma.$ExpertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseCountArgs} args - Arguments to filter Expertise to count.
     * @example
     * // Count the number of Expertise
     * const count = await prisma.expertise.count({
     *   where: {
     *     // ... the filter for the Expertise we want to count
     *   }
     * })
    **/
    count<T extends ExpertiseCountArgs>(
      args?: Subset<T, ExpertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertiseAggregateArgs>(args: Subset<T, ExpertiseAggregateArgs>): Prisma.PrismaPromise<GetExpertiseAggregateType<T>>

    /**
     * Group by Expertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseGroupByArgs} args - Group by arguments.
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
      T extends ExpertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertiseGroupByArgs['orderBy'] }
        : { orderBy?: ExpertiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expertise model
   */
  readonly fields: ExpertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Expertise model
   */
  interface ExpertiseFieldRefs {
    readonly id: FieldRef<"Expertise", 'Int'>
    readonly value: FieldRef<"Expertise", 'String'>
    readonly userId: FieldRef<"Expertise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expertise findUnique
   */
  export type ExpertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findUniqueOrThrow
   */
  export type ExpertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise findFirst
   */
  export type ExpertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findFirstOrThrow
   */
  export type ExpertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expertise.
     */
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise findMany
   */
  export type ExpertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which Expertise to fetch.
     */
    where?: ExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expertise to fetch.
     */
    orderBy?: ExpertiseOrderByWithRelationInput | ExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expertise.
     */
    cursor?: ExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expertise from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expertise.
     */
    skip?: number
    distinct?: ExpertiseScalarFieldEnum | ExpertiseScalarFieldEnum[]
  }

  /**
   * Expertise create
   */
  export type ExpertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expertise.
     */
    data: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
  }

  /**
   * Expertise createMany
   */
  export type ExpertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
  }

  /**
   * Expertise createManyAndReturn
   */
  export type ExpertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to create many Expertise.
     */
    data: ExpertiseCreateManyInput | ExpertiseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expertise update
   */
  export type ExpertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expertise.
     */
    data: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
    /**
     * Choose, which Expertise to update.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise updateMany
   */
  export type ExpertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
  }

  /**
   * Expertise updateManyAndReturn
   */
  export type ExpertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * The data used to update Expertise.
     */
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which Expertise to update
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expertise upsert
   */
  export type ExpertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expertise to update in case it exists.
     */
    where: ExpertiseWhereUniqueInput
    /**
     * In case the Expertise found by the `where` argument doesn't exist, create a new Expertise with this data.
     */
    create: XOR<ExpertiseCreateInput, ExpertiseUncheckedCreateInput>
    /**
     * In case the Expertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertiseUpdateInput, ExpertiseUncheckedUpdateInput>
  }

  /**
   * Expertise delete
   */
  export type ExpertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
    /**
     * Filter which Expertise to delete.
     */
    where: ExpertiseWhereUniqueInput
  }

  /**
   * Expertise deleteMany
   */
  export type ExpertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expertise to delete
     */
    where?: ExpertiseWhereInput
    /**
     * Limit how many Expertise to delete.
     */
    limit?: number
  }

  /**
   * Expertise without action
   */
  export type ExpertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expertise
     */
    select?: ExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expertise
     */
    omit?: ExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseInclude<ExtArgs> | null
  }


  /**
   * Model Responsibility
   */

  export type AggregateResponsibility = {
    _count: ResponsibilityCountAggregateOutputType | null
    _avg: ResponsibilityAvgAggregateOutputType | null
    _sum: ResponsibilitySumAggregateOutputType | null
    _min: ResponsibilityMinAggregateOutputType | null
    _max: ResponsibilityMaxAggregateOutputType | null
  }

  export type ResponsibilityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ResponsibilitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ResponsibilityMinAggregateOutputType = {
    id: number | null
    value: string | null
    userId: number | null
  }

  export type ResponsibilityMaxAggregateOutputType = {
    id: number | null
    value: string | null
    userId: number | null
  }

  export type ResponsibilityCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    _all: number
  }


  export type ResponsibilityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ResponsibilitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ResponsibilityMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ResponsibilityMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ResponsibilityCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type ResponsibilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsibility to aggregate.
     */
    where?: ResponsibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibilities to fetch.
     */
    orderBy?: ResponsibilityOrderByWithRelationInput | ResponsibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponsibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responsibilities
    **/
    _count?: true | ResponsibilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponsibilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponsibilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponsibilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponsibilityMaxAggregateInputType
  }

  export type GetResponsibilityAggregateType<T extends ResponsibilityAggregateArgs> = {
        [P in keyof T & keyof AggregateResponsibility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponsibility[P]>
      : GetScalarType<T[P], AggregateResponsibility[P]>
  }




  export type ResponsibilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsibilityWhereInput
    orderBy?: ResponsibilityOrderByWithAggregationInput | ResponsibilityOrderByWithAggregationInput[]
    by: ResponsibilityScalarFieldEnum[] | ResponsibilityScalarFieldEnum
    having?: ResponsibilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponsibilityCountAggregateInputType | true
    _avg?: ResponsibilityAvgAggregateInputType
    _sum?: ResponsibilitySumAggregateInputType
    _min?: ResponsibilityMinAggregateInputType
    _max?: ResponsibilityMaxAggregateInputType
  }

  export type ResponsibilityGroupByOutputType = {
    id: number
    value: string
    userId: number
    _count: ResponsibilityCountAggregateOutputType | null
    _avg: ResponsibilityAvgAggregateOutputType | null
    _sum: ResponsibilitySumAggregateOutputType | null
    _min: ResponsibilityMinAggregateOutputType | null
    _max: ResponsibilityMaxAggregateOutputType | null
  }

  type GetResponsibilityGroupByPayload<T extends ResponsibilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponsibilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponsibilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponsibilityGroupByOutputType[P]>
            : GetScalarType<T[P], ResponsibilityGroupByOutputType[P]>
        }
      >
    >


  export type ResponsibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsibility"]>

  export type ResponsibilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsibility"]>

  export type ResponsibilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsibility"]>

  export type ResponsibilitySelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
  }

  export type ResponsibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "userId", ExtArgs["result"]["responsibility"]>
  export type ResponsibilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResponsibilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResponsibilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResponsibilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Responsibility"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      userId: number
    }, ExtArgs["result"]["responsibility"]>
    composites: {}
  }

  type ResponsibilityGetPayload<S extends boolean | null | undefined | ResponsibilityDefaultArgs> = $Result.GetResult<Prisma.$ResponsibilityPayload, S>

  type ResponsibilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponsibilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponsibilityCountAggregateInputType | true
    }

  export interface ResponsibilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Responsibility'], meta: { name: 'Responsibility' } }
    /**
     * Find zero or one Responsibility that matches the filter.
     * @param {ResponsibilityFindUniqueArgs} args - Arguments to find a Responsibility
     * @example
     * // Get one Responsibility
     * const responsibility = await prisma.responsibility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponsibilityFindUniqueArgs>(args: SelectSubset<T, ResponsibilityFindUniqueArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Responsibility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponsibilityFindUniqueOrThrowArgs} args - Arguments to find a Responsibility
     * @example
     * // Get one Responsibility
     * const responsibility = await prisma.responsibility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponsibilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponsibilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsibility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityFindFirstArgs} args - Arguments to find a Responsibility
     * @example
     * // Get one Responsibility
     * const responsibility = await prisma.responsibility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponsibilityFindFirstArgs>(args?: SelectSubset<T, ResponsibilityFindFirstArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsibility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityFindFirstOrThrowArgs} args - Arguments to find a Responsibility
     * @example
     * // Get one Responsibility
     * const responsibility = await prisma.responsibility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponsibilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponsibilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responsibilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responsibilities
     * const responsibilities = await prisma.responsibility.findMany()
     * 
     * // Get first 10 Responsibilities
     * const responsibilities = await prisma.responsibility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responsibilityWithIdOnly = await prisma.responsibility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponsibilityFindManyArgs>(args?: SelectSubset<T, ResponsibilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Responsibility.
     * @param {ResponsibilityCreateArgs} args - Arguments to create a Responsibility.
     * @example
     * // Create one Responsibility
     * const Responsibility = await prisma.responsibility.create({
     *   data: {
     *     // ... data to create a Responsibility
     *   }
     * })
     * 
     */
    create<T extends ResponsibilityCreateArgs>(args: SelectSubset<T, ResponsibilityCreateArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responsibilities.
     * @param {ResponsibilityCreateManyArgs} args - Arguments to create many Responsibilities.
     * @example
     * // Create many Responsibilities
     * const responsibility = await prisma.responsibility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponsibilityCreateManyArgs>(args?: SelectSubset<T, ResponsibilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responsibilities and returns the data saved in the database.
     * @param {ResponsibilityCreateManyAndReturnArgs} args - Arguments to create many Responsibilities.
     * @example
     * // Create many Responsibilities
     * const responsibility = await prisma.responsibility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responsibilities and only return the `id`
     * const responsibilityWithIdOnly = await prisma.responsibility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponsibilityCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponsibilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Responsibility.
     * @param {ResponsibilityDeleteArgs} args - Arguments to delete one Responsibility.
     * @example
     * // Delete one Responsibility
     * const Responsibility = await prisma.responsibility.delete({
     *   where: {
     *     // ... filter to delete one Responsibility
     *   }
     * })
     * 
     */
    delete<T extends ResponsibilityDeleteArgs>(args: SelectSubset<T, ResponsibilityDeleteArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Responsibility.
     * @param {ResponsibilityUpdateArgs} args - Arguments to update one Responsibility.
     * @example
     * // Update one Responsibility
     * const responsibility = await prisma.responsibility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponsibilityUpdateArgs>(args: SelectSubset<T, ResponsibilityUpdateArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responsibilities.
     * @param {ResponsibilityDeleteManyArgs} args - Arguments to filter Responsibilities to delete.
     * @example
     * // Delete a few Responsibilities
     * const { count } = await prisma.responsibility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponsibilityDeleteManyArgs>(args?: SelectSubset<T, ResponsibilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responsibilities
     * const responsibility = await prisma.responsibility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponsibilityUpdateManyArgs>(args: SelectSubset<T, ResponsibilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsibilities and returns the data updated in the database.
     * @param {ResponsibilityUpdateManyAndReturnArgs} args - Arguments to update many Responsibilities.
     * @example
     * // Update many Responsibilities
     * const responsibility = await prisma.responsibility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responsibilities and only return the `id`
     * const responsibilityWithIdOnly = await prisma.responsibility.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResponsibilityUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponsibilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Responsibility.
     * @param {ResponsibilityUpsertArgs} args - Arguments to update or create a Responsibility.
     * @example
     * // Update or create a Responsibility
     * const responsibility = await prisma.responsibility.upsert({
     *   create: {
     *     // ... data to create a Responsibility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responsibility we want to update
     *   }
     * })
     */
    upsert<T extends ResponsibilityUpsertArgs>(args: SelectSubset<T, ResponsibilityUpsertArgs<ExtArgs>>): Prisma__ResponsibilityClient<$Result.GetResult<Prisma.$ResponsibilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responsibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityCountArgs} args - Arguments to filter Responsibilities to count.
     * @example
     * // Count the number of Responsibilities
     * const count = await prisma.responsibility.count({
     *   where: {
     *     // ... the filter for the Responsibilities we want to count
     *   }
     * })
    **/
    count<T extends ResponsibilityCountArgs>(
      args?: Subset<T, ResponsibilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponsibilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responsibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponsibilityAggregateArgs>(args: Subset<T, ResponsibilityAggregateArgs>): Prisma.PrismaPromise<GetResponsibilityAggregateType<T>>

    /**
     * Group by Responsibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsibilityGroupByArgs} args - Group by arguments.
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
      T extends ResponsibilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponsibilityGroupByArgs['orderBy'] }
        : { orderBy?: ResponsibilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponsibilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponsibilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Responsibility model
   */
  readonly fields: ResponsibilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Responsibility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponsibilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Responsibility model
   */
  interface ResponsibilityFieldRefs {
    readonly id: FieldRef<"Responsibility", 'Int'>
    readonly value: FieldRef<"Responsibility", 'String'>
    readonly userId: FieldRef<"Responsibility", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Responsibility findUnique
   */
  export type ResponsibilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter, which Responsibility to fetch.
     */
    where: ResponsibilityWhereUniqueInput
  }

  /**
   * Responsibility findUniqueOrThrow
   */
  export type ResponsibilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter, which Responsibility to fetch.
     */
    where: ResponsibilityWhereUniqueInput
  }

  /**
   * Responsibility findFirst
   */
  export type ResponsibilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter, which Responsibility to fetch.
     */
    where?: ResponsibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibilities to fetch.
     */
    orderBy?: ResponsibilityOrderByWithRelationInput | ResponsibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsibilities.
     */
    cursor?: ResponsibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsibilities.
     */
    distinct?: ResponsibilityScalarFieldEnum | ResponsibilityScalarFieldEnum[]
  }

  /**
   * Responsibility findFirstOrThrow
   */
  export type ResponsibilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter, which Responsibility to fetch.
     */
    where?: ResponsibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibilities to fetch.
     */
    orderBy?: ResponsibilityOrderByWithRelationInput | ResponsibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsibilities.
     */
    cursor?: ResponsibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsibilities.
     */
    distinct?: ResponsibilityScalarFieldEnum | ResponsibilityScalarFieldEnum[]
  }

  /**
   * Responsibility findMany
   */
  export type ResponsibilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter, which Responsibilities to fetch.
     */
    where?: ResponsibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsibilities to fetch.
     */
    orderBy?: ResponsibilityOrderByWithRelationInput | ResponsibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responsibilities.
     */
    cursor?: ResponsibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsibilities.
     */
    skip?: number
    distinct?: ResponsibilityScalarFieldEnum | ResponsibilityScalarFieldEnum[]
  }

  /**
   * Responsibility create
   */
  export type ResponsibilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Responsibility.
     */
    data: XOR<ResponsibilityCreateInput, ResponsibilityUncheckedCreateInput>
  }

  /**
   * Responsibility createMany
   */
  export type ResponsibilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responsibilities.
     */
    data: ResponsibilityCreateManyInput | ResponsibilityCreateManyInput[]
  }

  /**
   * Responsibility createManyAndReturn
   */
  export type ResponsibilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * The data used to create many Responsibilities.
     */
    data: ResponsibilityCreateManyInput | ResponsibilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Responsibility update
   */
  export type ResponsibilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Responsibility.
     */
    data: XOR<ResponsibilityUpdateInput, ResponsibilityUncheckedUpdateInput>
    /**
     * Choose, which Responsibility to update.
     */
    where: ResponsibilityWhereUniqueInput
  }

  /**
   * Responsibility updateMany
   */
  export type ResponsibilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responsibilities.
     */
    data: XOR<ResponsibilityUpdateManyMutationInput, ResponsibilityUncheckedUpdateManyInput>
    /**
     * Filter which Responsibilities to update
     */
    where?: ResponsibilityWhereInput
    /**
     * Limit how many Responsibilities to update.
     */
    limit?: number
  }

  /**
   * Responsibility updateManyAndReturn
   */
  export type ResponsibilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * The data used to update Responsibilities.
     */
    data: XOR<ResponsibilityUpdateManyMutationInput, ResponsibilityUncheckedUpdateManyInput>
    /**
     * Filter which Responsibilities to update
     */
    where?: ResponsibilityWhereInput
    /**
     * Limit how many Responsibilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Responsibility upsert
   */
  export type ResponsibilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Responsibility to update in case it exists.
     */
    where: ResponsibilityWhereUniqueInput
    /**
     * In case the Responsibility found by the `where` argument doesn't exist, create a new Responsibility with this data.
     */
    create: XOR<ResponsibilityCreateInput, ResponsibilityUncheckedCreateInput>
    /**
     * In case the Responsibility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponsibilityUpdateInput, ResponsibilityUncheckedUpdateInput>
  }

  /**
   * Responsibility delete
   */
  export type ResponsibilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
    /**
     * Filter which Responsibility to delete.
     */
    where: ResponsibilityWhereUniqueInput
  }

  /**
   * Responsibility deleteMany
   */
  export type ResponsibilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsibilities to delete
     */
    where?: ResponsibilityWhereInput
    /**
     * Limit how many Responsibilities to delete.
     */
    limit?: number
  }

  /**
   * Responsibility without action
   */
  export type ResponsibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsibility
     */
    select?: ResponsibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsibility
     */
    omit?: ResponsibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsibilityInclude<ExtArgs> | null
  }


  /**
   * Model CompletedCourse
   */

  export type AggregateCompletedCourse = {
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  export type CompletedCourseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    crn: number | null
    creditHours: number | null
  }

  export type CompletedCourseSumAggregateOutputType = {
    id: number | null
    userId: number | null
    crn: number | null
    creditHours: number | null
  }

  export type CompletedCourseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: string | null
    name: string | null
    crn: number | null
    creditHours: number | null
    grade: string | null
    category: string | null
    instructor: string | null
  }

  export type CompletedCourseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: string | null
    name: string | null
    crn: number | null
    creditHours: number | null
    grade: string | null
    category: string | null
    instructor: string | null
  }

  export type CompletedCourseCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    name: number
    crn: number
    creditHours: number
    grade: number
    category: number
    instructor: number
    _all: number
  }


  export type CompletedCourseAvgAggregateInputType = {
    id?: true
    userId?: true
    crn?: true
    creditHours?: true
  }

  export type CompletedCourseSumAggregateInputType = {
    id?: true
    userId?: true
    crn?: true
    creditHours?: true
  }

  export type CompletedCourseMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    name?: true
    crn?: true
    creditHours?: true
    grade?: true
    category?: true
    instructor?: true
  }

  export type CompletedCourseMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    name?: true
    crn?: true
    creditHours?: true
    grade?: true
    category?: true
    instructor?: true
  }

  export type CompletedCourseCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    name?: true
    crn?: true
    creditHours?: true
    grade?: true
    category?: true
    instructor?: true
    _all?: true
  }

  export type CompletedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourse to aggregate.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedCourses
    **/
    _count?: true | CompletedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type GetCompletedCourseAggregateType<T extends CompletedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedCourse[P]>
      : GetScalarType<T[P], AggregateCompletedCourse[P]>
  }




  export type CompletedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithAggregationInput | CompletedCourseOrderByWithAggregationInput[]
    by: CompletedCourseScalarFieldEnum[] | CompletedCourseScalarFieldEnum
    having?: CompletedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCourseCountAggregateInputType | true
    _avg?: CompletedCourseAvgAggregateInputType
    _sum?: CompletedCourseSumAggregateInputType
    _min?: CompletedCourseMinAggregateInputType
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type CompletedCourseGroupByOutputType = {
    id: number
    userId: number
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor: string | null
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  type GetCompletedCourseGroupByPayload<T extends CompletedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    name?: boolean
    crn?: boolean
    creditHours?: boolean
    grade?: boolean
    category?: boolean
    instructor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    name?: boolean
    crn?: boolean
    creditHours?: boolean
    grade?: boolean
    category?: boolean
    instructor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    name?: boolean
    crn?: boolean
    creditHours?: boolean
    grade?: boolean
    category?: boolean
    instructor?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    name?: boolean
    crn?: boolean
    creditHours?: boolean
    grade?: boolean
    category?: boolean
    instructor?: boolean
  }

  export type CompletedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "name" | "crn" | "creditHours" | "grade" | "category" | "instructor", ExtArgs["result"]["completedCourse"]>
  export type CompletedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompletedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      courseId: string
      name: string
      crn: number
      creditHours: number
      grade: string
      category: string
      instructor: string | null
    }, ExtArgs["result"]["completedCourse"]>
    composites: {}
  }

  type CompletedCourseGetPayload<S extends boolean | null | undefined | CompletedCourseDefaultArgs> = $Result.GetResult<Prisma.$CompletedCoursePayload, S>

  type CompletedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCourseCountAggregateInputType | true
    }

  export interface CompletedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedCourse'], meta: { name: 'CompletedCourse' } }
    /**
     * Find zero or one CompletedCourse that matches the filter.
     * @param {CompletedCourseFindUniqueArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedCourseFindUniqueArgs>(args: SelectSubset<T, CompletedCourseFindUniqueArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedCourseFindUniqueOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedCourseFindFirstArgs>(args?: SelectSubset<T, CompletedCourseFindFirstArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany()
     * 
     * // Get first 10 CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedCourseFindManyArgs>(args?: SelectSubset<T, CompletedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedCourse.
     * @param {CompletedCourseCreateArgs} args - Arguments to create a CompletedCourse.
     * @example
     * // Create one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.create({
     *   data: {
     *     // ... data to create a CompletedCourse
     *   }
     * })
     * 
     */
    create<T extends CompletedCourseCreateArgs>(args: SelectSubset<T, CompletedCourseCreateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedCourses.
     * @param {CompletedCourseCreateManyArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCourseCreateManyArgs>(args?: SelectSubset<T, CompletedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedCourses and returns the data saved in the database.
     * @param {CompletedCourseCreateManyAndReturnArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedCourse.
     * @param {CompletedCourseDeleteArgs} args - Arguments to delete one CompletedCourse.
     * @example
     * // Delete one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.delete({
     *   where: {
     *     // ... filter to delete one CompletedCourse
     *   }
     * })
     * 
     */
    delete<T extends CompletedCourseDeleteArgs>(args: SelectSubset<T, CompletedCourseDeleteArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedCourse.
     * @param {CompletedCourseUpdateArgs} args - Arguments to update one CompletedCourse.
     * @example
     * // Update one CompletedCourse
     * const completedCourse = await prisma.completedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedCourseUpdateArgs>(args: SelectSubset<T, CompletedCourseUpdateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedCourses.
     * @param {CompletedCourseDeleteManyArgs} args - Arguments to filter CompletedCourses to delete.
     * @example
     * // Delete a few CompletedCourses
     * const { count } = await prisma.completedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedCourseDeleteManyArgs>(args?: SelectSubset<T, CompletedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedCourseUpdateManyArgs>(args: SelectSubset<T, CompletedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses and returns the data updated in the database.
     * @param {CompletedCourseUpdateManyAndReturnArgs} args - Arguments to update many CompletedCourses.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompletedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedCourse.
     * @param {CompletedCourseUpsertArgs} args - Arguments to update or create a CompletedCourse.
     * @example
     * // Update or create a CompletedCourse
     * const completedCourse = await prisma.completedCourse.upsert({
     *   create: {
     *     // ... data to create a CompletedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedCourse we want to update
     *   }
     * })
     */
    upsert<T extends CompletedCourseUpsertArgs>(args: SelectSubset<T, CompletedCourseUpsertArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseCountArgs} args - Arguments to filter CompletedCourses to count.
     * @example
     * // Count the number of CompletedCourses
     * const count = await prisma.completedCourse.count({
     *   where: {
     *     // ... the filter for the CompletedCourses we want to count
     *   }
     * })
    **/
    count<T extends CompletedCourseCountArgs>(
      args?: Subset<T, CompletedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedCourseAggregateArgs>(args: Subset<T, CompletedCourseAggregateArgs>): Prisma.PrismaPromise<GetCompletedCourseAggregateType<T>>

    /**
     * Group by CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseGroupByArgs} args - Group by arguments.
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
      T extends CompletedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedCourseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedCourse model
   */
  readonly fields: CompletedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompletedCourse model
   */
  interface CompletedCourseFieldRefs {
    readonly id: FieldRef<"CompletedCourse", 'Int'>
    readonly userId: FieldRef<"CompletedCourse", 'Int'>
    readonly courseId: FieldRef<"CompletedCourse", 'String'>
    readonly name: FieldRef<"CompletedCourse", 'String'>
    readonly crn: FieldRef<"CompletedCourse", 'Int'>
    readonly creditHours: FieldRef<"CompletedCourse", 'Int'>
    readonly grade: FieldRef<"CompletedCourse", 'String'>
    readonly category: FieldRef<"CompletedCourse", 'String'>
    readonly instructor: FieldRef<"CompletedCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedCourse findUnique
   */
  export type CompletedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findUniqueOrThrow
   */
  export type CompletedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findFirst
   */
  export type CompletedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findFirstOrThrow
   */
  export type CompletedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findMany
   */
  export type CompletedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourses to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse create
   */
  export type CompletedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedCourse.
     */
    data: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
  }

  /**
   * CompletedCourse createMany
   */
  export type CompletedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
  }

  /**
   * CompletedCourse createManyAndReturn
   */
  export type CompletedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse update
   */
  export type CompletedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedCourse.
     */
    data: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
    /**
     * Choose, which CompletedCourse to update.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse updateMany
   */
  export type CompletedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
  }

  /**
   * CompletedCourse updateManyAndReturn
   */
  export type CompletedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse upsert
   */
  export type CompletedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedCourse to update in case it exists.
     */
    where: CompletedCourseWhereUniqueInput
    /**
     * In case the CompletedCourse found by the `where` argument doesn't exist, create a new CompletedCourse with this data.
     */
    create: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
    /**
     * In case the CompletedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
  }

  /**
   * CompletedCourse delete
   */
  export type CompletedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter which CompletedCourse to delete.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse deleteMany
   */
  export type CompletedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourses to delete
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to delete.
     */
    limit?: number
  }

  /**
   * CompletedCourse without action
   */
  export type CompletedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    userId: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    userId?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: number | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: number
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: number
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CourseScalarFieldEnum: {
    id: 'id',
    crn: 'crn',
    name: 'name',
    category: 'category',
    description: 'description',
    instructor: 'instructor',
    openForRegistration: 'openForRegistration',
    adminApprove: 'adminApprove',
    totalSeats: 'totalSeats',
    availableSeats: 'availableSeats',
    hasStarted: 'hasStarted',
    creditHours: 'creditHours',
    isPublishedForInstructors: 'isPublishedForInstructors',
    assignmentConfirmed: 'assignmentConfirmed',
    interestDeadline: 'interestDeadline',
    scheduleId: 'scheduleId',
    assignedInstructorId: 'assignedInstructorId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const ScheduleDayScalarFieldEnum: {
    id: 'id',
    day: 'day',
    scheduleId: 'scheduleId'
  };

  export type ScheduleDayScalarFieldEnum = (typeof ScheduleDayScalarFieldEnum)[keyof typeof ScheduleDayScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    gpa: 'gpa',
    major: 'major',
    creditsCompleted: 'creditsCompleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExpertiseScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId'
  };

  export type ExpertiseScalarFieldEnum = (typeof ExpertiseScalarFieldEnum)[keyof typeof ExpertiseScalarFieldEnum]


  export const ResponsibilityScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId'
  };

  export type ResponsibilityScalarFieldEnum = (typeof ResponsibilityScalarFieldEnum)[keyof typeof ResponsibilityScalarFieldEnum]


  export const CompletedCourseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    name: 'name',
    crn: 'crn',
    creditHours: 'creditHours',
    grade: 'grade',
    category: 'category',
    instructor: 'instructor'
  };

  export type CompletedCourseScalarFieldEnum = (typeof CompletedCourseScalarFieldEnum)[keyof typeof CompletedCourseScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    crn?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    openForRegistration?: BoolFilter<"Course"> | boolean
    adminApprove?: BoolFilter<"Course"> | boolean
    totalSeats?: IntFilter<"Course"> | number
    availableSeats?: IntFilter<"Course"> | number
    hasStarted?: BoolFilter<"Course"> | boolean
    creditHours?: IntFilter<"Course"> | number
    isPublishedForInstructors?: BoolNullableFilter<"Course"> | boolean | null
    assignmentConfirmed?: BoolFilter<"Course"> | boolean
    interestDeadline?: DateTimeFilter<"Course"> | Date | string
    scheduleId?: IntFilter<"Course"> | number
    assignedInstructorId?: IntNullableFilter<"Course"> | number | null
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    registeredUsers?: UserListRelationFilter
    interestedInstructors?: UserListRelationFilter
    assignedToInstructor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    prerequisites?: CourseListRelationFilter
    requiredFor?: CourseListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    crn?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    openForRegistration?: SortOrder
    adminApprove?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    hasStarted?: SortOrder
    creditHours?: SortOrder
    isPublishedForInstructors?: SortOrderInput | SortOrder
    assignmentConfirmed?: SortOrder
    interestDeadline?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrderInput | SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    registeredUsers?: UserOrderByRelationAggregateInput
    interestedInstructors?: UserOrderByRelationAggregateInput
    assignedToInstructor?: UserOrderByWithRelationInput
    prerequisites?: CourseOrderByRelationAggregateInput
    requiredFor?: CourseOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    crn?: number
    scheduleId?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    openForRegistration?: BoolFilter<"Course"> | boolean
    adminApprove?: BoolFilter<"Course"> | boolean
    totalSeats?: IntFilter<"Course"> | number
    availableSeats?: IntFilter<"Course"> | number
    hasStarted?: BoolFilter<"Course"> | boolean
    creditHours?: IntFilter<"Course"> | number
    isPublishedForInstructors?: BoolNullableFilter<"Course"> | boolean | null
    assignmentConfirmed?: BoolFilter<"Course"> | boolean
    interestDeadline?: DateTimeFilter<"Course"> | Date | string
    assignedInstructorId?: IntNullableFilter<"Course"> | number | null
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    registeredUsers?: UserListRelationFilter
    interestedInstructors?: UserListRelationFilter
    assignedToInstructor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    prerequisites?: CourseListRelationFilter
    requiredFor?: CourseListRelationFilter
  }, "id" | "crn" | "scheduleId">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    crn?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    openForRegistration?: SortOrder
    adminApprove?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    hasStarted?: SortOrder
    creditHours?: SortOrder
    isPublishedForInstructors?: SortOrderInput | SortOrder
    assignmentConfirmed?: SortOrder
    interestDeadline?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    crn?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    category?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    instructor?: StringWithAggregatesFilter<"Course"> | string
    openForRegistration?: BoolWithAggregatesFilter<"Course"> | boolean
    adminApprove?: BoolWithAggregatesFilter<"Course"> | boolean
    totalSeats?: IntWithAggregatesFilter<"Course"> | number
    availableSeats?: IntWithAggregatesFilter<"Course"> | number
    hasStarted?: BoolWithAggregatesFilter<"Course"> | boolean
    creditHours?: IntWithAggregatesFilter<"Course"> | number
    isPublishedForInstructors?: BoolNullableWithAggregatesFilter<"Course"> | boolean | null
    assignmentConfirmed?: BoolWithAggregatesFilter<"Course"> | boolean
    interestDeadline?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    scheduleId?: IntWithAggregatesFilter<"Course"> | number
    assignedInstructorId?: IntNullableWithAggregatesFilter<"Course"> | number | null
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    days?: ScheduleDayListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    days?: ScheduleDayOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    days?: ScheduleDayListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type ScheduleDayWhereInput = {
    AND?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    OR?: ScheduleDayWhereInput[]
    NOT?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    id?: IntFilter<"ScheduleDay"> | number
    day?: EnumDayFilter<"ScheduleDay"> | $Enums.Day
    scheduleId?: IntFilter<"ScheduleDay"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type ScheduleDayOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type ScheduleDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    OR?: ScheduleDayWhereInput[]
    NOT?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    day?: EnumDayFilter<"ScheduleDay"> | $Enums.Day
    scheduleId?: IntFilter<"ScheduleDay"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type ScheduleDayOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
    _count?: ScheduleDayCountOrderByAggregateInput
    _avg?: ScheduleDayAvgOrderByAggregateInput
    _max?: ScheduleDayMaxOrderByAggregateInput
    _min?: ScheduleDayMinOrderByAggregateInput
    _sum?: ScheduleDaySumOrderByAggregateInput
  }

  export type ScheduleDayScalarWhereWithAggregatesInput = {
    AND?: ScheduleDayScalarWhereWithAggregatesInput | ScheduleDayScalarWhereWithAggregatesInput[]
    OR?: ScheduleDayScalarWhereWithAggregatesInput[]
    NOT?: ScheduleDayScalarWhereWithAggregatesInput | ScheduleDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScheduleDay"> | number
    day?: EnumDayWithAggregatesFilter<"ScheduleDay"> | $Enums.Day
    scheduleId?: IntWithAggregatesFilter<"ScheduleDay"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gpa?: FloatNullableFilter<"User"> | number | null
    major?: StringNullableFilter<"User"> | string | null
    creditsCompleted?: IntNullableFilter<"User"> | number | null
    completedCourses?: CompletedCourseListRelationFilter
    registeredCourses?: CourseListRelationFilter
    interestedCourses?: CourseListRelationFilter
    assignedCourses?: CourseListRelationFilter
    expertise?: ExpertiseListRelationFilter
    responsibilities?: ResponsibilityListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gpa?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    creditsCompleted?: SortOrderInput | SortOrder
    completedCourses?: CompletedCourseOrderByRelationAggregateInput
    registeredCourses?: CourseOrderByRelationAggregateInput
    interestedCourses?: CourseOrderByRelationAggregateInput
    assignedCourses?: CourseOrderByRelationAggregateInput
    expertise?: ExpertiseOrderByRelationAggregateInput
    responsibilities?: ResponsibilityOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gpa?: FloatNullableFilter<"User"> | number | null
    major?: StringNullableFilter<"User"> | string | null
    creditsCompleted?: IntNullableFilter<"User"> | number | null
    completedCourses?: CompletedCourseListRelationFilter
    registeredCourses?: CourseListRelationFilter
    interestedCourses?: CourseListRelationFilter
    assignedCourses?: CourseListRelationFilter
    expertise?: ExpertiseListRelationFilter
    responsibilities?: ResponsibilityListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gpa?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    creditsCompleted?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    gpa?: FloatNullableWithAggregatesFilter<"User"> | number | null
    major?: StringNullableWithAggregatesFilter<"User"> | string | null
    creditsCompleted?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ExpertiseWhereInput = {
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    id?: IntFilter<"Expertise"> | number
    value?: StringFilter<"Expertise"> | string
    userId?: IntFilter<"Expertise"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpertiseOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExpertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpertiseWhereInput | ExpertiseWhereInput[]
    OR?: ExpertiseWhereInput[]
    NOT?: ExpertiseWhereInput | ExpertiseWhereInput[]
    value?: StringFilter<"Expertise"> | string
    userId?: IntFilter<"Expertise"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExpertiseOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    _count?: ExpertiseCountOrderByAggregateInput
    _avg?: ExpertiseAvgOrderByAggregateInput
    _max?: ExpertiseMaxOrderByAggregateInput
    _min?: ExpertiseMinOrderByAggregateInput
    _sum?: ExpertiseSumOrderByAggregateInput
  }

  export type ExpertiseScalarWhereWithAggregatesInput = {
    AND?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    OR?: ExpertiseScalarWhereWithAggregatesInput[]
    NOT?: ExpertiseScalarWhereWithAggregatesInput | ExpertiseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expertise"> | number
    value?: StringWithAggregatesFilter<"Expertise"> | string
    userId?: IntWithAggregatesFilter<"Expertise"> | number
  }

  export type ResponsibilityWhereInput = {
    AND?: ResponsibilityWhereInput | ResponsibilityWhereInput[]
    OR?: ResponsibilityWhereInput[]
    NOT?: ResponsibilityWhereInput | ResponsibilityWhereInput[]
    id?: IntFilter<"Responsibility"> | number
    value?: StringFilter<"Responsibility"> | string
    userId?: IntFilter<"Responsibility"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResponsibilityOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResponsibilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResponsibilityWhereInput | ResponsibilityWhereInput[]
    OR?: ResponsibilityWhereInput[]
    NOT?: ResponsibilityWhereInput | ResponsibilityWhereInput[]
    value?: StringFilter<"Responsibility"> | string
    userId?: IntFilter<"Responsibility"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResponsibilityOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    _count?: ResponsibilityCountOrderByAggregateInput
    _avg?: ResponsibilityAvgOrderByAggregateInput
    _max?: ResponsibilityMaxOrderByAggregateInput
    _min?: ResponsibilityMinOrderByAggregateInput
    _sum?: ResponsibilitySumOrderByAggregateInput
  }

  export type ResponsibilityScalarWhereWithAggregatesInput = {
    AND?: ResponsibilityScalarWhereWithAggregatesInput | ResponsibilityScalarWhereWithAggregatesInput[]
    OR?: ResponsibilityScalarWhereWithAggregatesInput[]
    NOT?: ResponsibilityScalarWhereWithAggregatesInput | ResponsibilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Responsibility"> | number
    value?: StringWithAggregatesFilter<"Responsibility"> | string
    userId?: IntWithAggregatesFilter<"Responsibility"> | number
  }

  export type CompletedCourseWhereInput = {
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    userId?: IntFilter<"CompletedCourse"> | number
    courseId?: StringFilter<"CompletedCourse"> | string
    name?: StringFilter<"CompletedCourse"> | string
    crn?: IntFilter<"CompletedCourse"> | number
    creditHours?: IntFilter<"CompletedCourse"> | number
    grade?: StringFilter<"CompletedCourse"> | string
    category?: StringFilter<"CompletedCourse"> | string
    instructor?: StringNullableFilter<"CompletedCourse"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompletedCourseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
    grade?: SortOrder
    category?: SortOrder
    instructor?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CompletedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    userId?: IntFilter<"CompletedCourse"> | number
    courseId?: StringFilter<"CompletedCourse"> | string
    name?: StringFilter<"CompletedCourse"> | string
    crn?: IntFilter<"CompletedCourse"> | number
    creditHours?: IntFilter<"CompletedCourse"> | number
    grade?: StringFilter<"CompletedCourse"> | string
    category?: StringFilter<"CompletedCourse"> | string
    instructor?: StringNullableFilter<"CompletedCourse"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompletedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
    grade?: SortOrder
    category?: SortOrder
    instructor?: SortOrderInput | SortOrder
    _count?: CompletedCourseCountOrderByAggregateInput
    _avg?: CompletedCourseAvgOrderByAggregateInput
    _max?: CompletedCourseMaxOrderByAggregateInput
    _min?: CompletedCourseMinOrderByAggregateInput
    _sum?: CompletedCourseSumOrderByAggregateInput
  }

  export type CompletedCourseScalarWhereWithAggregatesInput = {
    AND?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    OR?: CompletedCourseScalarWhereWithAggregatesInput[]
    NOT?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedCourse"> | number
    userId?: IntWithAggregatesFilter<"CompletedCourse"> | number
    courseId?: StringWithAggregatesFilter<"CompletedCourse"> | string
    name?: StringWithAggregatesFilter<"CompletedCourse"> | string
    crn?: IntWithAggregatesFilter<"CompletedCourse"> | number
    creditHours?: IntWithAggregatesFilter<"CompletedCourse"> | number
    grade?: StringWithAggregatesFilter<"CompletedCourse"> | string
    category?: StringWithAggregatesFilter<"CompletedCourse"> | string
    instructor?: StringNullableWithAggregatesFilter<"CompletedCourse"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type?: string
    provider?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "type" | "provider">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: IntWithAggregatesFilter<"Account"> | number
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier?: string
    token?: string
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier" | "token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CourseCreateInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseCreateManyInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleCreateInput = {
    startTime: string
    endTime: string
    days?: ScheduleDayCreateNestedManyWithoutScheduleInput
    course?: CourseCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    startTime: string
    endTime: string
    days?: ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput
    course?: CourseUncheckedCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    days?: ScheduleDayUpdateManyWithoutScheduleNestedInput
    course?: CourseUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    days?: ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput
    course?: CourseUncheckedUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    startTime: string
    endTime: string
  }

  export type ScheduleUpdateManyMutationInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleDayCreateInput = {
    day: $Enums.Day
    schedule: ScheduleCreateNestedOneWithoutDaysInput
  }

  export type ScheduleDayUncheckedCreateInput = {
    id?: number
    day: $Enums.Day
    scheduleId: number
  }

  export type ScheduleDayUpdateInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    schedule?: ScheduleUpdateOneRequiredWithoutDaysNestedInput
  }

  export type ScheduleDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleDayCreateManyInput = {
    id?: number
    day: $Enums.Day
    scheduleId: number
  }

  export type ScheduleDayUpdateManyMutationInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
  }

  export type ScheduleDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpertiseCreateInput = {
    value: string
    user: UserCreateNestedOneWithoutExpertiseInput
  }

  export type ExpertiseUncheckedCreateInput = {
    id?: number
    value: string
    userId: number
  }

  export type ExpertiseUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutExpertiseNestedInput
  }

  export type ExpertiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseCreateManyInput = {
    id?: number
    value: string
    userId: number
  }

  export type ExpertiseUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ResponsibilityCreateInput = {
    value: string
    user: UserCreateNestedOneWithoutResponsibilitiesInput
  }

  export type ResponsibilityUncheckedCreateInput = {
    id?: number
    value: string
    userId: number
  }

  export type ResponsibilityUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutResponsibilitiesNestedInput
  }

  export type ResponsibilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ResponsibilityCreateManyInput = {
    id?: number
    value: string
    userId: number
  }

  export type ResponsibilityUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CompletedCourseCreateInput = {
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
    user: UserCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateInput = {
    id?: number
    userId: number
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
  }

  export type CompletedCourseUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseCreateManyInput = {
    id?: number
    userId: number
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
  }

  export type CompletedCourseUpdateManyMutationInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: number
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    crn?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    openForRegistration?: SortOrder
    adminApprove?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    hasStarted?: SortOrder
    creditHours?: SortOrder
    isPublishedForInstructors?: SortOrder
    assignmentConfirmed?: SortOrder
    interestDeadline?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    crn?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    creditHours?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    crn?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    openForRegistration?: SortOrder
    adminApprove?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    hasStarted?: SortOrder
    creditHours?: SortOrder
    isPublishedForInstructors?: SortOrder
    assignmentConfirmed?: SortOrder
    interestDeadline?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    crn?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    openForRegistration?: SortOrder
    adminApprove?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    hasStarted?: SortOrder
    creditHours?: SortOrder
    isPublishedForInstructors?: SortOrder
    assignmentConfirmed?: SortOrder
    interestDeadline?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    crn?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    creditHours?: SortOrder
    scheduleId?: SortOrder
    assignedInstructorId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type ScheduleDayListRelationFilter = {
    every?: ScheduleDayWhereInput
    some?: ScheduleDayWhereInput
    none?: ScheduleDayWhereInput
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type ScheduleDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type ScheduleDayCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDayAvgOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDayMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDayMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDaySumOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
  }

  export type EnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CompletedCourseListRelationFilter = {
    every?: CompletedCourseWhereInput
    some?: CompletedCourseWhereInput
    none?: CompletedCourseWhereInput
  }

  export type ExpertiseListRelationFilter = {
    every?: ExpertiseWhereInput
    some?: ExpertiseWhereInput
    none?: ExpertiseWhereInput
  }

  export type ResponsibilityListRelationFilter = {
    every?: ResponsibilityWhereInput
    some?: ResponsibilityWhereInput
    none?: ResponsibilityWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CompletedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponsibilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gpa?: SortOrder
    major?: SortOrder
    creditsCompleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    gpa?: SortOrder
    creditsCompleted?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gpa?: SortOrder
    major?: SortOrder
    creditsCompleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gpa?: SortOrder
    major?: SortOrder
    creditsCompleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    gpa?: SortOrder
    creditsCompleted?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExpertiseCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ExpertiseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ExpertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ExpertiseMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ExpertiseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibilityCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibilityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibilityMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibilityMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ResponsibilitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CompletedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
    grade?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
  }

  export type CompletedCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
  }

  export type CompletedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
    grade?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
  }

  export type CompletedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
    grade?: SortOrder
    category?: SortOrder
    instructor?: SortOrder
  }

  export type CompletedCourseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crn?: SortOrder
    creditHours?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ScheduleCreateNestedOneWithoutCourseInput = {
    create?: XOR<ScheduleCreateWithoutCourseInput, ScheduleUncheckedCreateWithoutCourseInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutCourseInput
    connect?: ScheduleWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRegisteredCoursesInput = {
    create?: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput> | UserCreateWithoutRegisteredCoursesInput[] | UserUncheckedCreateWithoutRegisteredCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredCoursesInput | UserCreateOrConnectWithoutRegisteredCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutInterestedCoursesInput = {
    create?: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput> | UserCreateWithoutInterestedCoursesInput[] | UserUncheckedCreateWithoutInterestedCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInterestedCoursesInput | UserCreateOrConnectWithoutInterestedCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAssignedCoursesInput = {
    create?: XOR<UserCreateWithoutAssignedCoursesInput, UserUncheckedCreateWithoutAssignedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutRequiredForInput = {
    create?: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput> | CourseCreateWithoutRequiredForInput[] | CourseUncheckedCreateWithoutRequiredForInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredForInput | CourseCreateOrConnectWithoutRequiredForInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput> | CourseCreateWithoutPrerequisitesInput[] | CourseUncheckedCreateWithoutPrerequisitesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput | CourseCreateOrConnectWithoutPrerequisitesInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput = {
    create?: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput> | UserCreateWithoutRegisteredCoursesInput[] | UserUncheckedCreateWithoutRegisteredCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredCoursesInput | UserCreateOrConnectWithoutRegisteredCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInterestedCoursesInput = {
    create?: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput> | UserCreateWithoutInterestedCoursesInput[] | UserUncheckedCreateWithoutInterestedCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInterestedCoursesInput | UserCreateOrConnectWithoutInterestedCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutRequiredForInput = {
    create?: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput> | CourseCreateWithoutRequiredForInput[] | CourseUncheckedCreateWithoutRequiredForInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredForInput | CourseCreateOrConnectWithoutRequiredForInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput> | CourseCreateWithoutPrerequisitesInput[] | CourseUncheckedCreateWithoutPrerequisitesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput | CourseCreateOrConnectWithoutPrerequisitesInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScheduleUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<ScheduleCreateWithoutCourseInput, ScheduleUncheckedCreateWithoutCourseInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutCourseInput
    upsert?: ScheduleUpsertWithoutCourseInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutCourseInput, ScheduleUpdateWithoutCourseInput>, ScheduleUncheckedUpdateWithoutCourseInput>
  }

  export type UserUpdateManyWithoutRegisteredCoursesNestedInput = {
    create?: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput> | UserCreateWithoutRegisteredCoursesInput[] | UserUncheckedCreateWithoutRegisteredCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredCoursesInput | UserCreateOrConnectWithoutRegisteredCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegisteredCoursesInput | UserUpsertWithWhereUniqueWithoutRegisteredCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegisteredCoursesInput | UserUpdateWithWhereUniqueWithoutRegisteredCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegisteredCoursesInput | UserUpdateManyWithWhereWithoutRegisteredCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutInterestedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput> | UserCreateWithoutInterestedCoursesInput[] | UserUncheckedCreateWithoutInterestedCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInterestedCoursesInput | UserCreateOrConnectWithoutInterestedCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInterestedCoursesInput | UserUpsertWithWhereUniqueWithoutInterestedCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInterestedCoursesInput | UserUpdateWithWhereUniqueWithoutInterestedCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInterestedCoursesInput | UserUpdateManyWithWhereWithoutInterestedCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAssignedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedCoursesInput, UserUncheckedCreateWithoutAssignedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCoursesInput
    upsert?: UserUpsertWithoutAssignedCoursesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedCoursesInput, UserUpdateWithoutAssignedCoursesInput>, UserUncheckedUpdateWithoutAssignedCoursesInput>
  }

  export type CourseUpdateManyWithoutRequiredForNestedInput = {
    create?: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput> | CourseCreateWithoutRequiredForInput[] | CourseUncheckedCreateWithoutRequiredForInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredForInput | CourseCreateOrConnectWithoutRequiredForInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutRequiredForInput | CourseUpsertWithWhereUniqueWithoutRequiredForInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutRequiredForInput | CourseUpdateWithWhereUniqueWithoutRequiredForInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutRequiredForInput | CourseUpdateManyWithWhereWithoutRequiredForInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput> | CourseCreateWithoutPrerequisitesInput[] | CourseUncheckedCreateWithoutPrerequisitesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput | CourseCreateOrConnectWithoutPrerequisitesInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPrerequisitesInput | CourseUpsertWithWhereUniqueWithoutPrerequisitesInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPrerequisitesInput | CourseUpdateWithWhereUniqueWithoutPrerequisitesInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPrerequisitesInput | CourseUpdateManyWithWhereWithoutPrerequisitesInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput = {
    create?: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput> | UserCreateWithoutRegisteredCoursesInput[] | UserUncheckedCreateWithoutRegisteredCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredCoursesInput | UserCreateOrConnectWithoutRegisteredCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegisteredCoursesInput | UserUpsertWithWhereUniqueWithoutRegisteredCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegisteredCoursesInput | UserUpdateWithWhereUniqueWithoutRegisteredCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegisteredCoursesInput | UserUpdateManyWithWhereWithoutRegisteredCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput> | UserCreateWithoutInterestedCoursesInput[] | UserUncheckedCreateWithoutInterestedCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInterestedCoursesInput | UserCreateOrConnectWithoutInterestedCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInterestedCoursesInput | UserUpsertWithWhereUniqueWithoutInterestedCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInterestedCoursesInput | UserUpdateWithWhereUniqueWithoutInterestedCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInterestedCoursesInput | UserUpdateManyWithWhereWithoutInterestedCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutRequiredForNestedInput = {
    create?: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput> | CourseCreateWithoutRequiredForInput[] | CourseUncheckedCreateWithoutRequiredForInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRequiredForInput | CourseCreateOrConnectWithoutRequiredForInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutRequiredForInput | CourseUpsertWithWhereUniqueWithoutRequiredForInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutRequiredForInput | CourseUpdateWithWhereUniqueWithoutRequiredForInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutRequiredForInput | CourseUpdateManyWithWhereWithoutRequiredForInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput> | CourseCreateWithoutPrerequisitesInput[] | CourseUncheckedCreateWithoutPrerequisitesInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput | CourseCreateOrConnectWithoutPrerequisitesInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPrerequisitesInput | CourseUpsertWithWhereUniqueWithoutPrerequisitesInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPrerequisitesInput | CourseUpdateWithWhereUniqueWithoutPrerequisitesInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPrerequisitesInput | CourseUpdateManyWithWhereWithoutPrerequisitesInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ScheduleDayCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutScheduleInput = {
    create?: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleInput
    connect?: CourseWhereUniqueInput
  }

  export type ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedOneWithoutScheduleInput = {
    create?: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleInput
    connect?: CourseWhereUniqueInput
  }

  export type ScheduleDayUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput | ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    set?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    disconnect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    delete?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    update?: ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput | ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleDayUpdateManyWithWhereWithoutScheduleInput | ScheduleDayUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
  }

  export type CourseUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleInput
    upsert?: CourseUpsertWithoutScheduleInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutScheduleInput, CourseUpdateWithoutScheduleInput>, CourseUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput | ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    set?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    disconnect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    delete?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    update?: ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput | ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleDayUpdateManyWithWhereWithoutScheduleInput | ScheduleDayUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
  }

  export type CourseUncheckedUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleInput
    upsert?: CourseUpsertWithoutScheduleInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutScheduleInput, CourseUpdateWithoutScheduleInput>, CourseUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleCreateNestedOneWithoutDaysInput = {
    create?: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDaysInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EnumDayFieldUpdateOperationsInput = {
    set?: $Enums.Day
  }

  export type ScheduleUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDaysInput
    upsert?: ScheduleUpsertWithoutDaysInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutDaysInput, ScheduleUpdateWithoutDaysInput>, ScheduleUncheckedUpdateWithoutDaysInput>
  }

  export type CompletedCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutRegisteredUsersInput = {
    create?: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput> | CourseCreateWithoutRegisteredUsersInput[] | CourseUncheckedCreateWithoutRegisteredUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredUsersInput | CourseCreateOrConnectWithoutRegisteredUsersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutInterestedInstructorsInput = {
    create?: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput> | CourseCreateWithoutInterestedInstructorsInput[] | CourseUncheckedCreateWithoutInterestedInstructorsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInterestedInstructorsInput | CourseCreateOrConnectWithoutInterestedInstructorsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutAssignedToInstructorInput = {
    create?: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput> | CourseCreateWithoutAssignedToInstructorInput[] | CourseUncheckedCreateWithoutAssignedToInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAssignedToInstructorInput | CourseCreateOrConnectWithoutAssignedToInstructorInput[]
    createMany?: CourseCreateManyAssignedToInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type ExpertiseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput> | ExpertiseCreateWithoutUserInput[] | ExpertiseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutUserInput | ExpertiseCreateOrConnectWithoutUserInput[]
    createMany?: ExpertiseCreateManyUserInputEnvelope
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
  }

  export type ResponsibilityCreateNestedManyWithoutUserInput = {
    create?: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput> | ResponsibilityCreateWithoutUserInput[] | ResponsibilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponsibilityCreateOrConnectWithoutUserInput | ResponsibilityCreateOrConnectWithoutUserInput[]
    createMany?: ResponsibilityCreateManyUserInputEnvelope
    connect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput = {
    create?: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput> | CourseCreateWithoutRegisteredUsersInput[] | CourseUncheckedCreateWithoutRegisteredUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredUsersInput | CourseCreateOrConnectWithoutRegisteredUsersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput = {
    create?: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput> | CourseCreateWithoutInterestedInstructorsInput[] | CourseUncheckedCreateWithoutInterestedInstructorsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInterestedInstructorsInput | CourseCreateOrConnectWithoutInterestedInstructorsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput = {
    create?: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput> | CourseCreateWithoutAssignedToInstructorInput[] | CourseUncheckedCreateWithoutAssignedToInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAssignedToInstructorInput | CourseCreateOrConnectWithoutAssignedToInstructorInput[]
    createMany?: CourseCreateManyAssignedToInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type ExpertiseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput> | ExpertiseCreateWithoutUserInput[] | ExpertiseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutUserInput | ExpertiseCreateOrConnectWithoutUserInput[]
    createMany?: ExpertiseCreateManyUserInputEnvelope
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
  }

  export type ResponsibilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput> | ResponsibilityCreateWithoutUserInput[] | ResponsibilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponsibilityCreateOrConnectWithoutUserInput | ResponsibilityCreateOrConnectWithoutUserInput[]
    createMany?: ResponsibilityCreateManyUserInputEnvelope
    connect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompletedCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutRegisteredUsersNestedInput = {
    create?: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput> | CourseCreateWithoutRegisteredUsersInput[] | CourseUncheckedCreateWithoutRegisteredUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredUsersInput | CourseCreateOrConnectWithoutRegisteredUsersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutRegisteredUsersInput | CourseUpsertWithWhereUniqueWithoutRegisteredUsersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutRegisteredUsersInput | CourseUpdateWithWhereUniqueWithoutRegisteredUsersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutRegisteredUsersInput | CourseUpdateManyWithWhereWithoutRegisteredUsersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutInterestedInstructorsNestedInput = {
    create?: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput> | CourseCreateWithoutInterestedInstructorsInput[] | CourseUncheckedCreateWithoutInterestedInstructorsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInterestedInstructorsInput | CourseCreateOrConnectWithoutInterestedInstructorsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInterestedInstructorsInput | CourseUpsertWithWhereUniqueWithoutInterestedInstructorsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInterestedInstructorsInput | CourseUpdateWithWhereUniqueWithoutInterestedInstructorsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInterestedInstructorsInput | CourseUpdateManyWithWhereWithoutInterestedInstructorsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutAssignedToInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput> | CourseCreateWithoutAssignedToInstructorInput[] | CourseUncheckedCreateWithoutAssignedToInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAssignedToInstructorInput | CourseCreateOrConnectWithoutAssignedToInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutAssignedToInstructorInput | CourseUpsertWithWhereUniqueWithoutAssignedToInstructorInput[]
    createMany?: CourseCreateManyAssignedToInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutAssignedToInstructorInput | CourseUpdateWithWhereUniqueWithoutAssignedToInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutAssignedToInstructorInput | CourseUpdateManyWithWhereWithoutAssignedToInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ExpertiseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput> | ExpertiseCreateWithoutUserInput[] | ExpertiseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutUserInput | ExpertiseCreateOrConnectWithoutUserInput[]
    upsert?: ExpertiseUpsertWithWhereUniqueWithoutUserInput | ExpertiseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpertiseCreateManyUserInputEnvelope
    set?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    disconnect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    delete?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    update?: ExpertiseUpdateWithWhereUniqueWithoutUserInput | ExpertiseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpertiseUpdateManyWithWhereWithoutUserInput | ExpertiseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
  }

  export type ResponsibilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput> | ResponsibilityCreateWithoutUserInput[] | ResponsibilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponsibilityCreateOrConnectWithoutUserInput | ResponsibilityCreateOrConnectWithoutUserInput[]
    upsert?: ResponsibilityUpsertWithWhereUniqueWithoutUserInput | ResponsibilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResponsibilityCreateManyUserInputEnvelope
    set?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    disconnect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    delete?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    connect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    update?: ResponsibilityUpdateWithWhereUniqueWithoutUserInput | ResponsibilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResponsibilityUpdateManyWithWhereWithoutUserInput | ResponsibilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResponsibilityScalarWhereInput | ResponsibilityScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput> | CompletedCourseCreateWithoutUserInput[] | CompletedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutUserInput | CompletedCourseCreateOrConnectWithoutUserInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutUserInput | CompletedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedCourseCreateManyUserInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutUserInput | CompletedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutUserInput | CompletedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput = {
    create?: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput> | CourseCreateWithoutRegisteredUsersInput[] | CourseUncheckedCreateWithoutRegisteredUsersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredUsersInput | CourseCreateOrConnectWithoutRegisteredUsersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutRegisteredUsersInput | CourseUpsertWithWhereUniqueWithoutRegisteredUsersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutRegisteredUsersInput | CourseUpdateWithWhereUniqueWithoutRegisteredUsersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutRegisteredUsersInput | CourseUpdateManyWithWhereWithoutRegisteredUsersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput = {
    create?: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput> | CourseCreateWithoutInterestedInstructorsInput[] | CourseUncheckedCreateWithoutInterestedInstructorsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInterestedInstructorsInput | CourseCreateOrConnectWithoutInterestedInstructorsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInterestedInstructorsInput | CourseUpsertWithWhereUniqueWithoutInterestedInstructorsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInterestedInstructorsInput | CourseUpdateWithWhereUniqueWithoutInterestedInstructorsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInterestedInstructorsInput | CourseUpdateManyWithWhereWithoutInterestedInstructorsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput> | CourseCreateWithoutAssignedToInstructorInput[] | CourseUncheckedCreateWithoutAssignedToInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutAssignedToInstructorInput | CourseCreateOrConnectWithoutAssignedToInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutAssignedToInstructorInput | CourseUpsertWithWhereUniqueWithoutAssignedToInstructorInput[]
    createMany?: CourseCreateManyAssignedToInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutAssignedToInstructorInput | CourseUpdateWithWhereUniqueWithoutAssignedToInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutAssignedToInstructorInput | CourseUpdateManyWithWhereWithoutAssignedToInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type ExpertiseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput> | ExpertiseCreateWithoutUserInput[] | ExpertiseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpertiseCreateOrConnectWithoutUserInput | ExpertiseCreateOrConnectWithoutUserInput[]
    upsert?: ExpertiseUpsertWithWhereUniqueWithoutUserInput | ExpertiseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpertiseCreateManyUserInputEnvelope
    set?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    disconnect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    delete?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    connect?: ExpertiseWhereUniqueInput | ExpertiseWhereUniqueInput[]
    update?: ExpertiseUpdateWithWhereUniqueWithoutUserInput | ExpertiseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpertiseUpdateManyWithWhereWithoutUserInput | ExpertiseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
  }

  export type ResponsibilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput> | ResponsibilityCreateWithoutUserInput[] | ResponsibilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResponsibilityCreateOrConnectWithoutUserInput | ResponsibilityCreateOrConnectWithoutUserInput[]
    upsert?: ResponsibilityUpsertWithWhereUniqueWithoutUserInput | ResponsibilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResponsibilityCreateManyUserInputEnvelope
    set?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    disconnect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    delete?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    connect?: ResponsibilityWhereUniqueInput | ResponsibilityWhereUniqueInput[]
    update?: ResponsibilityUpdateWithWhereUniqueWithoutUserInput | ResponsibilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResponsibilityUpdateManyWithWhereWithoutUserInput | ResponsibilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResponsibilityScalarWhereInput | ResponsibilityScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExpertiseInput = {
    create?: XOR<UserCreateWithoutExpertiseInput, UserUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertiseInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpertiseNestedInput = {
    create?: XOR<UserCreateWithoutExpertiseInput, UserUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpertiseInput
    upsert?: UserUpsertWithoutExpertiseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpertiseInput, UserUpdateWithoutExpertiseInput>, UserUncheckedUpdateWithoutExpertiseInput>
  }

  export type UserCreateNestedOneWithoutResponsibilitiesInput = {
    create?: XOR<UserCreateWithoutResponsibilitiesInput, UserUncheckedCreateWithoutResponsibilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsibilitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResponsibilitiesNestedInput = {
    create?: XOR<UserCreateWithoutResponsibilitiesInput, UserUncheckedCreateWithoutResponsibilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsibilitiesInput
    upsert?: UserUpsertWithoutResponsibilitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsibilitiesInput, UserUpdateWithoutResponsibilitiesInput>, UserUncheckedUpdateWithoutResponsibilitiesInput>
  }

  export type UserCreateNestedOneWithoutCompletedCoursesInput = {
    create?: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompletedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedCoursesInput
    upsert?: UserUpsertWithoutCompletedCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedCoursesInput, UserUpdateWithoutCompletedCoursesInput>, UserUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type NestedEnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ScheduleCreateWithoutCourseInput = {
    startTime: string
    endTime: string
    days?: ScheduleDayCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutCourseInput = {
    id?: number
    startTime: string
    endTime: string
    days?: ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutCourseInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutCourseInput, ScheduleUncheckedCreateWithoutCourseInput>
  }

  export type UserCreateWithoutRegisteredCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegisteredCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegisteredCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput>
  }

  export type UserCreateWithoutInterestedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput>
  }

  export type UserCreateWithoutAssignedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedCoursesInput, UserUncheckedCreateWithoutAssignedCoursesInput>
  }

  export type CourseCreateWithoutRequiredForInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
  }

  export type CourseUncheckedCreateWithoutRequiredForInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
  }

  export type CourseCreateOrConnectWithoutRequiredForInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput>
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type ScheduleUpsertWithoutCourseInput = {
    update: XOR<ScheduleUpdateWithoutCourseInput, ScheduleUncheckedUpdateWithoutCourseInput>
    create: XOR<ScheduleCreateWithoutCourseInput, ScheduleUncheckedCreateWithoutCourseInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutCourseInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutCourseInput, ScheduleUncheckedUpdateWithoutCourseInput>
  }

  export type ScheduleUpdateWithoutCourseInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    days?: ScheduleDayUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    days?: ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRegisteredCoursesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRegisteredCoursesInput, UserUncheckedUpdateWithoutRegisteredCoursesInput>
    create: XOR<UserCreateWithoutRegisteredCoursesInput, UserUncheckedCreateWithoutRegisteredCoursesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRegisteredCoursesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRegisteredCoursesInput, UserUncheckedUpdateWithoutRegisteredCoursesInput>
  }

  export type UserUpdateManyWithWhereWithoutRegisteredCoursesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRegisteredCoursesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gpa?: FloatNullableFilter<"User"> | number | null
    major?: StringNullableFilter<"User"> | string | null
    creditsCompleted?: IntNullableFilter<"User"> | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutInterestedCoursesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInterestedCoursesInput, UserUncheckedUpdateWithoutInterestedCoursesInput>
    create: XOR<UserCreateWithoutInterestedCoursesInput, UserUncheckedCreateWithoutInterestedCoursesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInterestedCoursesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInterestedCoursesInput, UserUncheckedUpdateWithoutInterestedCoursesInput>
  }

  export type UserUpdateManyWithWhereWithoutInterestedCoursesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInterestedCoursesInput>
  }

  export type UserUpsertWithoutAssignedCoursesInput = {
    update: XOR<UserUpdateWithoutAssignedCoursesInput, UserUncheckedUpdateWithoutAssignedCoursesInput>
    create: XOR<UserCreateWithoutAssignedCoursesInput, UserUncheckedCreateWithoutAssignedCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedCoursesInput, UserUncheckedUpdateWithoutAssignedCoursesInput>
  }

  export type UserUpdateWithoutAssignedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutRequiredForInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutRequiredForInput, CourseUncheckedUpdateWithoutRequiredForInput>
    create: XOR<CourseCreateWithoutRequiredForInput, CourseUncheckedCreateWithoutRequiredForInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutRequiredForInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutRequiredForInput, CourseUncheckedUpdateWithoutRequiredForInput>
  }

  export type CourseUpdateManyWithWhereWithoutRequiredForInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutRequiredForInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    crn?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    category?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    openForRegistration?: BoolFilter<"Course"> | boolean
    adminApprove?: BoolFilter<"Course"> | boolean
    totalSeats?: IntFilter<"Course"> | number
    availableSeats?: IntFilter<"Course"> | number
    hasStarted?: BoolFilter<"Course"> | boolean
    creditHours?: IntFilter<"Course"> | number
    isPublishedForInstructors?: BoolNullableFilter<"Course"> | boolean | null
    assignmentConfirmed?: BoolFilter<"Course"> | boolean
    interestDeadline?: DateTimeFilter<"Course"> | Date | string
    scheduleId?: IntFilter<"Course"> | number
    assignedInstructorId?: IntNullableFilter<"Course"> | number | null
  }

  export type CourseUpsertWithWhereUniqueWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateManyWithWhereWithoutPrerequisitesInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutPrerequisitesInput>
  }

  export type ScheduleDayCreateWithoutScheduleInput = {
    day: $Enums.Day
  }

  export type ScheduleDayUncheckedCreateWithoutScheduleInput = {
    id?: number
    day: $Enums.Day
  }

  export type ScheduleDayCreateOrConnectWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    create: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayCreateManyScheduleInputEnvelope = {
    data: ScheduleDayCreateManyScheduleInput | ScheduleDayCreateManyScheduleInput[]
  }

  export type CourseCreateWithoutScheduleInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateWithoutScheduleInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    assignedInstructorId?: number | null
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseCreateOrConnectWithoutScheduleInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    update: XOR<ScheduleDayUpdateWithoutScheduleInput, ScheduleDayUncheckedUpdateWithoutScheduleInput>
    create: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    data: XOR<ScheduleDayUpdateWithoutScheduleInput, ScheduleDayUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleDayUpdateManyWithWhereWithoutScheduleInput = {
    where: ScheduleDayScalarWhereInput
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ScheduleDayScalarWhereInput = {
    AND?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
    OR?: ScheduleDayScalarWhereInput[]
    NOT?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
    id?: IntFilter<"ScheduleDay"> | number
    day?: EnumDayFilter<"ScheduleDay"> | $Enums.Day
    scheduleId?: IntFilter<"ScheduleDay"> | number
  }

  export type CourseUpsertWithoutScheduleInput = {
    update: XOR<CourseUpdateWithoutScheduleInput, CourseUncheckedUpdateWithoutScheduleInput>
    create: XOR<CourseCreateWithoutScheduleInput, CourseUncheckedCreateWithoutScheduleInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutScheduleInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutScheduleInput, CourseUncheckedUpdateWithoutScheduleInput>
  }

  export type CourseUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type ScheduleCreateWithoutDaysInput = {
    startTime: string
    endTime: string
    course?: CourseCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutDaysInput = {
    id?: number
    startTime: string
    endTime: string
    course?: CourseUncheckedCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutDaysInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
  }

  export type ScheduleUpsertWithoutDaysInput = {
    update: XOR<ScheduleUpdateWithoutDaysInput, ScheduleUncheckedUpdateWithoutDaysInput>
    create: XOR<ScheduleCreateWithoutDaysInput, ScheduleUncheckedCreateWithoutDaysInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutDaysInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutDaysInput, ScheduleUncheckedUpdateWithoutDaysInput>
  }

  export type ScheduleUpdateWithoutDaysInput = {
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateOneWithoutScheduleNestedInput
  }

  export type CompletedCourseCreateWithoutUserInput = {
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
  }

  export type CompletedCourseUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
  }

  export type CompletedCourseCreateOrConnectWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseCreateManyUserInputEnvelope = {
    data: CompletedCourseCreateManyUserInput | CompletedCourseCreateManyUserInput[]
  }

  export type CourseCreateWithoutRegisteredUsersInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateWithoutRegisteredUsersInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseCreateOrConnectWithoutRegisteredUsersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput>
  }

  export type CourseCreateWithoutInterestedInstructorsInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    assignedToInstructor?: UserCreateNestedOneWithoutAssignedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateWithoutInterestedInstructorsInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    assignedInstructorId?: number | null
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseCreateOrConnectWithoutInterestedInstructorsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput>
  }

  export type CourseCreateWithoutAssignedToInstructorInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    schedule: ScheduleCreateNestedOneWithoutCourseInput
    registeredUsers?: UserCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseUncheckedCreateWithoutAssignedToInstructorInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
    registeredUsers?: UserUncheckedCreateNestedManyWithoutRegisteredCoursesInput
    interestedInstructors?: UserUncheckedCreateNestedManyWithoutInterestedCoursesInput
    prerequisites?: CourseUncheckedCreateNestedManyWithoutRequiredForInput
    requiredFor?: CourseUncheckedCreateNestedManyWithoutPrerequisitesInput
  }

  export type CourseCreateOrConnectWithoutAssignedToInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput>
  }

  export type CourseCreateManyAssignedToInstructorInputEnvelope = {
    data: CourseCreateManyAssignedToInstructorInput | CourseCreateManyAssignedToInstructorInput[]
  }

  export type ExpertiseCreateWithoutUserInput = {
    value: string
  }

  export type ExpertiseUncheckedCreateWithoutUserInput = {
    id?: number
    value: string
  }

  export type ExpertiseCreateOrConnectWithoutUserInput = {
    where: ExpertiseWhereUniqueInput
    create: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput>
  }

  export type ExpertiseCreateManyUserInputEnvelope = {
    data: ExpertiseCreateManyUserInput | ExpertiseCreateManyUserInput[]
  }

  export type ResponsibilityCreateWithoutUserInput = {
    value: string
  }

  export type ResponsibilityUncheckedCreateWithoutUserInput = {
    id?: number
    value: string
  }

  export type ResponsibilityCreateOrConnectWithoutUserInput = {
    where: ResponsibilityWhereUniqueInput
    create: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput>
  }

  export type ResponsibilityCreateManyUserInputEnvelope = {
    data: ResponsibilityCreateManyUserInput | ResponsibilityCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedCourseCreateWithoutUserInput, CompletedCourseUncheckedCreateWithoutUserInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutUserInput, CompletedCourseUncheckedUpdateWithoutUserInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutUserInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedCourseScalarWhereInput = {
    AND?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    OR?: CompletedCourseScalarWhereInput[]
    NOT?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    userId?: IntFilter<"CompletedCourse"> | number
    courseId?: StringFilter<"CompletedCourse"> | string
    name?: StringFilter<"CompletedCourse"> | string
    crn?: IntFilter<"CompletedCourse"> | number
    creditHours?: IntFilter<"CompletedCourse"> | number
    grade?: StringFilter<"CompletedCourse"> | string
    category?: StringFilter<"CompletedCourse"> | string
    instructor?: StringNullableFilter<"CompletedCourse"> | string | null
  }

  export type CourseUpsertWithWhereUniqueWithoutRegisteredUsersInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutRegisteredUsersInput, CourseUncheckedUpdateWithoutRegisteredUsersInput>
    create: XOR<CourseCreateWithoutRegisteredUsersInput, CourseUncheckedCreateWithoutRegisteredUsersInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutRegisteredUsersInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutRegisteredUsersInput, CourseUncheckedUpdateWithoutRegisteredUsersInput>
  }

  export type CourseUpdateManyWithWhereWithoutRegisteredUsersInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutRegisteredUsersInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutInterestedInstructorsInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInterestedInstructorsInput, CourseUncheckedUpdateWithoutInterestedInstructorsInput>
    create: XOR<CourseCreateWithoutInterestedInstructorsInput, CourseUncheckedCreateWithoutInterestedInstructorsInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInterestedInstructorsInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInterestedInstructorsInput, CourseUncheckedUpdateWithoutInterestedInstructorsInput>
  }

  export type CourseUpdateManyWithWhereWithoutInterestedInstructorsInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInterestedInstructorsInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutAssignedToInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutAssignedToInstructorInput, CourseUncheckedUpdateWithoutAssignedToInstructorInput>
    create: XOR<CourseCreateWithoutAssignedToInstructorInput, CourseUncheckedCreateWithoutAssignedToInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutAssignedToInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutAssignedToInstructorInput, CourseUncheckedUpdateWithoutAssignedToInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutAssignedToInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutAssignedToInstructorInput>
  }

  export type ExpertiseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpertiseWhereUniqueInput
    update: XOR<ExpertiseUpdateWithoutUserInput, ExpertiseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpertiseCreateWithoutUserInput, ExpertiseUncheckedCreateWithoutUserInput>
  }

  export type ExpertiseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpertiseWhereUniqueInput
    data: XOR<ExpertiseUpdateWithoutUserInput, ExpertiseUncheckedUpdateWithoutUserInput>
  }

  export type ExpertiseUpdateManyWithWhereWithoutUserInput = {
    where: ExpertiseScalarWhereInput
    data: XOR<ExpertiseUpdateManyMutationInput, ExpertiseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpertiseScalarWhereInput = {
    AND?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
    OR?: ExpertiseScalarWhereInput[]
    NOT?: ExpertiseScalarWhereInput | ExpertiseScalarWhereInput[]
    id?: IntFilter<"Expertise"> | number
    value?: StringFilter<"Expertise"> | string
    userId?: IntFilter<"Expertise"> | number
  }

  export type ResponsibilityUpsertWithWhereUniqueWithoutUserInput = {
    where: ResponsibilityWhereUniqueInput
    update: XOR<ResponsibilityUpdateWithoutUserInput, ResponsibilityUncheckedUpdateWithoutUserInput>
    create: XOR<ResponsibilityCreateWithoutUserInput, ResponsibilityUncheckedCreateWithoutUserInput>
  }

  export type ResponsibilityUpdateWithWhereUniqueWithoutUserInput = {
    where: ResponsibilityWhereUniqueInput
    data: XOR<ResponsibilityUpdateWithoutUserInput, ResponsibilityUncheckedUpdateWithoutUserInput>
  }

  export type ResponsibilityUpdateManyWithWhereWithoutUserInput = {
    where: ResponsibilityScalarWhereInput
    data: XOR<ResponsibilityUpdateManyMutationInput, ResponsibilityUncheckedUpdateManyWithoutUserInput>
  }

  export type ResponsibilityScalarWhereInput = {
    AND?: ResponsibilityScalarWhereInput | ResponsibilityScalarWhereInput[]
    OR?: ResponsibilityScalarWhereInput[]
    NOT?: ResponsibilityScalarWhereInput | ResponsibilityScalarWhereInput[]
    id?: IntFilter<"Responsibility"> | number
    value?: StringFilter<"Responsibility"> | string
    userId?: IntFilter<"Responsibility"> | number
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutExpertiseInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpertiseInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpertiseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpertiseInput, UserUncheckedCreateWithoutExpertiseInput>
  }

  export type UserUpsertWithoutExpertiseInput = {
    update: XOR<UserUpdateWithoutExpertiseInput, UserUncheckedUpdateWithoutExpertiseInput>
    create: XOR<UserCreateWithoutExpertiseInput, UserUncheckedCreateWithoutExpertiseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpertiseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpertiseInput, UserUncheckedUpdateWithoutExpertiseInput>
  }

  export type UserUpdateWithoutExpertiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpertiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResponsibilitiesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResponsibilitiesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResponsibilitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsibilitiesInput, UserUncheckedCreateWithoutResponsibilitiesInput>
  }

  export type UserUpsertWithoutResponsibilitiesInput = {
    update: XOR<UserUpdateWithoutResponsibilitiesInput, UserUncheckedUpdateWithoutResponsibilitiesInput>
    create: XOR<UserCreateWithoutResponsibilitiesInput, UserUncheckedCreateWithoutResponsibilitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsibilitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsibilitiesInput, UserUncheckedUpdateWithoutResponsibilitiesInput>
  }

  export type UserUpdateWithoutResponsibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCompletedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompletedCoursesInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompletedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
  }

  export type UserUpsertWithoutCompletedCoursesInput = {
    update: XOR<UserUpdateWithoutCompletedCoursesInput, UserUncheckedUpdateWithoutCompletedCoursesInput>
    create: XOR<UserCreateWithoutCompletedCoursesInput, UserUncheckedCreateWithoutCompletedCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedCoursesInput, UserUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type UserUpdateWithoutCompletedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseCreateNestedManyWithoutUserInput
    registeredCourses?: CourseCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: number
    name?: string | null
    email: string
    password: string
    role: $Enums.Role
    gpa?: number | null
    major?: string | null
    creditsCompleted?: number | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutUserInput
    registeredCourses?: CourseUncheckedCreateNestedManyWithoutRegisteredUsersInput
    interestedCourses?: CourseUncheckedCreateNestedManyWithoutInterestedInstructorsInput
    assignedCourses?: CourseUncheckedCreateNestedManyWithoutAssignedToInstructorInput
    expertise?: ExpertiseUncheckedCreateNestedManyWithoutUserInput
    responsibilities?: ResponsibilityUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateWithoutRegisteredCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    interestedCourses?: CourseUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegisteredCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    interestedCourses?: CourseUncheckedUpdateManyWithoutInterestedInstructorsNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRegisteredCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutInterestedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUpdateManyWithoutRegisteredUsersNestedInput
    assignedCourses?: CourseUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutUserNestedInput
    registeredCourses?: CourseUncheckedUpdateManyWithoutRegisteredUsersNestedInput
    assignedCourses?: CourseUncheckedUpdateManyWithoutAssignedToInstructorNestedInput
    expertise?: ExpertiseUncheckedUpdateManyWithoutUserNestedInput
    responsibilities?: ResponsibilityUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInterestedCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gpa?: NullableFloatFieldUpdateOperationsInput | number | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCompleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUpdateWithoutRequiredForInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
  }

  export type CourseUncheckedUpdateWithoutRequiredForInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutRequiredForInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleDayCreateManyScheduleInput = {
    id?: number
    day: $Enums.Day
  }

  export type ScheduleDayUpdateWithoutScheduleInput = {
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
  }

  export type ScheduleDayUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
  }

  export type ScheduleDayUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
  }

  export type CompletedCourseCreateManyUserInput = {
    id?: number
    courseId: string
    name: string
    crn: number
    creditHours: number
    grade: string
    category: string
    instructor?: string | null
  }

  export type CourseCreateManyAssignedToInstructorInput = {
    id: string
    crn: number
    name: string
    category: string
    description: string
    instructor: string
    openForRegistration: boolean
    adminApprove: boolean
    totalSeats: number
    availableSeats: number
    hasStarted: boolean
    creditHours: number
    isPublishedForInstructors?: boolean | null
    assignmentConfirmed: boolean
    interestDeadline: Date | string
    scheduleId: number
  }

  export type ExpertiseCreateManyUserInput = {
    id?: number
    value: string
  }

  export type ResponsibilityCreateManyUserInput = {
    id?: number
    value: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type CompletedCourseUpdateWithoutUserInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedCourseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    creditHours?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpdateWithoutRegisteredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateWithoutRegisteredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutRegisteredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUpdateWithoutInterestedInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    assignedToInstructor?: UserUpdateOneWithoutAssignedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateWithoutInterestedInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInterestedInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    assignedInstructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CourseUpdateWithoutAssignedToInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutCourseNestedInput
    registeredUsers?: UserUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateWithoutAssignedToInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    registeredUsers?: UserUncheckedUpdateManyWithoutRegisteredCoursesNestedInput
    interestedInstructors?: UserUncheckedUpdateManyWithoutInterestedCoursesNestedInput
    prerequisites?: CourseUncheckedUpdateManyWithoutRequiredForNestedInput
    requiredFor?: CourseUncheckedUpdateManyWithoutPrerequisitesNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutAssignedToInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    crn?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    adminApprove?: BoolFieldUpdateOperationsInput | boolean
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    hasStarted?: BoolFieldUpdateOperationsInput | boolean
    creditHours?: IntFieldUpdateOperationsInput | number
    isPublishedForInstructors?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignmentConfirmed?: BoolFieldUpdateOperationsInput | boolean
    interestDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpertiseUpdateWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertiseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibilityUpdateWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibilityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsibilityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
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