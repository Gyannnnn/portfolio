
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
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model AboutSection
 * 
 */
export type AboutSection = $Result.DefaultSelection<Prisma.$AboutSectionPayload>
/**
 * Model ProjectSection
 * 
 */
export type ProjectSection = $Result.DefaultSelection<Prisma.$ProjectSectionPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model SkillSection
 * 
 */
export type SkillSection = $Result.DefaultSelection<Prisma.$SkillSectionPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model ExperienceSection
 * 
 */
export type ExperienceSection = $Result.DefaultSelection<Prisma.$ExperienceSectionPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model EducationSection
 * 
 */
export type EducationSection = $Result.DefaultSelection<Prisma.$EducationSectionPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Portfolios
 * const portfolios = await prisma.portfolio.findMany()
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
   * // Fetch zero or more Portfolios
   * const portfolios = await prisma.portfolio.findMany()
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
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutSection`: Exposes CRUD operations for the **AboutSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutSections
    * const aboutSections = await prisma.aboutSection.findMany()
    * ```
    */
  get aboutSection(): Prisma.AboutSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSection`: Exposes CRUD operations for the **ProjectSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSections
    * const projectSections = await prisma.projectSection.findMany()
    * ```
    */
  get projectSection(): Prisma.ProjectSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillSection`: Exposes CRUD operations for the **SkillSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillSections
    * const skillSections = await prisma.skillSection.findMany()
    * ```
    */
  get skillSection(): Prisma.SkillSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienceSection`: Exposes CRUD operations for the **ExperienceSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceSections
    * const experienceSections = await prisma.experienceSection.findMany()
    * ```
    */
  get experienceSection(): Prisma.ExperienceSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educationSection`: Exposes CRUD operations for the **EducationSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationSections
    * const educationSections = await prisma.educationSection.findMany()
    * ```
    */
  get educationSection(): Prisma.EducationSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
  : T extends bigint
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
    Portfolio: 'Portfolio',
    AboutSection: 'AboutSection',
    ProjectSection: 'ProjectSection',
    Project: 'Project',
    SkillSection: 'SkillSection',
    Skill: 'Skill',
    ExperienceSection: 'ExperienceSection',
    Experience: 'Experience',
    EducationSection: 'EducationSection',
    Education: 'Education'
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
      modelProps: "portfolio" | "aboutSection" | "projectSection" | "project" | "skillSection" | "skill" | "experienceSection" | "experience" | "educationSection" | "education"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      AboutSection: {
        payload: Prisma.$AboutSectionPayload<ExtArgs>
        fields: Prisma.AboutSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findFirst: {
            args: Prisma.AboutSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          findMany: {
            args: Prisma.AboutSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          create: {
            args: Prisma.AboutSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          createMany: {
            args: Prisma.AboutSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          delete: {
            args: Prisma.AboutSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          update: {
            args: Prisma.AboutSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          deleteMany: {
            args: Prisma.AboutSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>[]
          }
          upsert: {
            args: Prisma.AboutSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutSectionPayload>
          }
          aggregate: {
            args: Prisma.AboutSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutSection>
          }
          groupBy: {
            args: Prisma.AboutSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AboutSectionCountAggregateOutputType> | number
          }
        }
      }
      ProjectSection: {
        payload: Prisma.$ProjectSectionPayload<ExtArgs>
        fields: Prisma.ProjectSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          findFirst: {
            args: Prisma.ProjectSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          findMany: {
            args: Prisma.ProjectSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>[]
          }
          create: {
            args: Prisma.ProjectSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          createMany: {
            args: Prisma.ProjectSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>[]
          }
          delete: {
            args: Prisma.ProjectSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          update: {
            args: Prisma.ProjectSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>[]
          }
          upsert: {
            args: Prisma.ProjectSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSectionPayload>
          }
          aggregate: {
            args: Prisma.ProjectSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSection>
          }
          groupBy: {
            args: Prisma.ProjectSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSectionCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      SkillSection: {
        payload: Prisma.$SkillSectionPayload<ExtArgs>
        fields: Prisma.SkillSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          findFirst: {
            args: Prisma.SkillSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          findMany: {
            args: Prisma.SkillSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          create: {
            args: Prisma.SkillSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          createMany: {
            args: Prisma.SkillSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          delete: {
            args: Prisma.SkillSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          update: {
            args: Prisma.SkillSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          deleteMany: {
            args: Prisma.SkillSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          upsert: {
            args: Prisma.SkillSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          aggregate: {
            args: Prisma.SkillSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillSection>
          }
          groupBy: {
            args: Prisma.SkillSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillSectionCountArgs<ExtArgs>
            result: $Utils.Optional<SkillSectionCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      ExperienceSection: {
        payload: Prisma.$ExperienceSectionPayload<ExtArgs>
        fields: Prisma.ExperienceSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          findFirst: {
            args: Prisma.ExperienceSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          findMany: {
            args: Prisma.ExperienceSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>[]
          }
          create: {
            args: Prisma.ExperienceSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          createMany: {
            args: Prisma.ExperienceSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>[]
          }
          delete: {
            args: Prisma.ExperienceSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          update: {
            args: Prisma.ExperienceSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>[]
          }
          upsert: {
            args: Prisma.ExperienceSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceSectionPayload>
          }
          aggregate: {
            args: Prisma.ExperienceSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceSection>
          }
          groupBy: {
            args: Prisma.ExperienceSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceSectionCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      EducationSection: {
        payload: Prisma.$EducationSectionPayload<ExtArgs>
        fields: Prisma.EducationSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          findFirst: {
            args: Prisma.EducationSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          findMany: {
            args: Prisma.EducationSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>[]
          }
          create: {
            args: Prisma.EducationSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          createMany: {
            args: Prisma.EducationSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>[]
          }
          delete: {
            args: Prisma.EducationSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          update: {
            args: Prisma.EducationSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          deleteMany: {
            args: Prisma.EducationSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>[]
          }
          upsert: {
            args: Prisma.EducationSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationSectionPayload>
          }
          aggregate: {
            args: Prisma.EducationSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationSection>
          }
          groupBy: {
            args: Prisma.EducationSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationSectionCountArgs<ExtArgs>
            result: $Utils.Optional<EducationSectionCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
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
    portfolio?: PortfolioOmit
    aboutSection?: AboutSectionOmit
    projectSection?: ProjectSectionOmit
    project?: ProjectOmit
    skillSection?: SkillSectionOmit
    skill?: SkillOmit
    experienceSection?: ExperienceSectionOmit
    experience?: ExperienceOmit
    educationSection?: EducationSectionOmit
    education?: EducationOmit
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
   * Count Type ProjectSectionCountOutputType
   */

  export type ProjectSectionCountOutputType = {
    projects: number
  }

  export type ProjectSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectSectionCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectSectionCountOutputType without action
   */
  export type ProjectSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSectionCountOutputType
     */
    select?: ProjectSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectSectionCountOutputType without action
   */
  export type ProjectSectionCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type SkillSectionCountOutputType
   */

  export type SkillSectionCountOutputType = {
    skills: number
  }

  export type SkillSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillSectionCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillSectionCountOutputType without action
   */
  export type SkillSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSectionCountOutputType
     */
    select?: SkillSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillSectionCountOutputType without action
   */
  export type SkillSectionCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }


  /**
   * Count Type ExperienceSectionCountOutputType
   */

  export type ExperienceSectionCountOutputType = {
    experience: number
  }

  export type ExperienceSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienceSectionCountOutputTypeCountExperienceArgs
  }

  // Custom InputTypes
  /**
   * ExperienceSectionCountOutputType without action
   */
  export type ExperienceSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSectionCountOutputType
     */
    select?: ExperienceSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceSectionCountOutputType without action
   */
  export type ExperienceSectionCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }


  /**
   * Count Type EducationSectionCountOutputType
   */

  export type EducationSectionCountOutputType = {
    education: number
  }

  export type EducationSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationSectionCountOutputTypeCountEducationArgs
  }

  // Custom InputTypes
  /**
   * EducationSectionCountOutputType without action
   */
  export type EducationSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSectionCountOutputType
     */
    select?: EducationSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationSectionCountOutputType without action
   */
  export type EducationSectionCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    views: number | null
    likes: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    views: number | null
    likes: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: string | null
    userName: string | null
    userHeading: string | null
    userBio: string | null
    userResumeLink: string | null
    userEmail: string | null
    userGithubId: string | null
    welcomeCode: string | null
    views: number | null
    likes: number | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    userHeading: string | null
    userBio: string | null
    userResumeLink: string | null
    userEmail: string | null
    userGithubId: string | null
    welcomeCode: string | null
    views: number | null
    likes: number | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    userName: number
    userHeading: number
    userBio: number
    userResumeLink: number
    userEmail: number
    userGithubId: number
    welcomeCode: number
    views: number
    likes: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    views?: true
    likes?: true
  }

  export type PortfolioSumAggregateInputType = {
    views?: true
    likes?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    userName?: true
    userHeading?: true
    userBio?: true
    userResumeLink?: true
    userEmail?: true
    userGithubId?: true
    welcomeCode?: true
    views?: true
    likes?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    userName?: true
    userHeading?: true
    userBio?: true
    userResumeLink?: true
    userEmail?: true
    userGithubId?: true
    welcomeCode?: true
    views?: true
    likes?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    userName?: true
    userHeading?: true
    userBio?: true
    userResumeLink?: true
    userEmail?: true
    userGithubId?: true
    welcomeCode?: true
    views?: true
    likes?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views: number
    likes: number
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userHeading?: boolean
    userBio?: boolean
    userResumeLink?: boolean
    userEmail?: boolean
    userGithubId?: boolean
    welcomeCode?: boolean
    views?: boolean
    likes?: boolean
    about?: boolean | Portfolio$aboutArgs<ExtArgs>
    project?: boolean | Portfolio$projectArgs<ExtArgs>
    skill?: boolean | Portfolio$skillArgs<ExtArgs>
    experience?: boolean | Portfolio$experienceArgs<ExtArgs>
    education?: boolean | Portfolio$educationArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userHeading?: boolean
    userBio?: boolean
    userResumeLink?: boolean
    userEmail?: boolean
    userGithubId?: boolean
    welcomeCode?: boolean
    views?: boolean
    likes?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    userHeading?: boolean
    userBio?: boolean
    userResumeLink?: boolean
    userEmail?: boolean
    userGithubId?: boolean
    welcomeCode?: boolean
    views?: boolean
    likes?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    userName?: boolean
    userHeading?: boolean
    userBio?: boolean
    userResumeLink?: boolean
    userEmail?: boolean
    userGithubId?: boolean
    welcomeCode?: boolean
    views?: boolean
    likes?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "userHeading" | "userBio" | "userResumeLink" | "userEmail" | "userGithubId" | "welcomeCode" | "views" | "likes", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | Portfolio$aboutArgs<ExtArgs>
    project?: boolean | Portfolio$projectArgs<ExtArgs>
    skill?: boolean | Portfolio$skillArgs<ExtArgs>
    experience?: boolean | Portfolio$experienceArgs<ExtArgs>
    education?: boolean | Portfolio$educationArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      about: Prisma.$AboutSectionPayload<ExtArgs> | null
      project: Prisma.$ProjectSectionPayload<ExtArgs> | null
      skill: Prisma.$SkillSectionPayload<ExtArgs> | null
      experience: Prisma.$ExperienceSectionPayload<ExtArgs> | null
      education: Prisma.$EducationSectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      userHeading: string
      userBio: string
      userResumeLink: string
      userEmail: string
      userGithubId: string
      welcomeCode: string
      views: number
      likes: number
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
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
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
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
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    about<T extends Portfolio$aboutArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$aboutArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Portfolio$projectArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$projectArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    skill<T extends Portfolio$skillArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$skillArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    experience<T extends Portfolio$experienceArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$experienceArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    education<T extends Portfolio$educationArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$educationArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'String'>
    readonly userName: FieldRef<"Portfolio", 'String'>
    readonly userHeading: FieldRef<"Portfolio", 'String'>
    readonly userBio: FieldRef<"Portfolio", 'String'>
    readonly userResumeLink: FieldRef<"Portfolio", 'String'>
    readonly userEmail: FieldRef<"Portfolio", 'String'>
    readonly userGithubId: FieldRef<"Portfolio", 'String'>
    readonly welcomeCode: FieldRef<"Portfolio", 'String'>
    readonly views: FieldRef<"Portfolio", 'Int'>
    readonly likes: FieldRef<"Portfolio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio.about
   */
  export type Portfolio$aboutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    where?: AboutSectionWhereInput
  }

  /**
   * Portfolio.project
   */
  export type Portfolio$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    where?: ProjectSectionWhereInput
  }

  /**
   * Portfolio.skill
   */
  export type Portfolio$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    where?: SkillSectionWhereInput
  }

  /**
   * Portfolio.experience
   */
  export type Portfolio$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    where?: ExperienceSectionWhereInput
  }

  /**
   * Portfolio.education
   */
  export type Portfolio$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    where?: EducationSectionWhereInput
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model AboutSection
   */

  export type AggregateAboutSection = {
    _count: AboutSectionCountAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  export type AboutSectionMinAggregateOutputType = {
    id: string | null
    aboutHeading: string | null
    about: string | null
    AboutSectionCode: string | null
    portfolioId: string | null
  }

  export type AboutSectionMaxAggregateOutputType = {
    id: string | null
    aboutHeading: string | null
    about: string | null
    AboutSectionCode: string | null
    portfolioId: string | null
  }

  export type AboutSectionCountAggregateOutputType = {
    id: number
    aboutHeading: number
    about: number
    AboutSectionCode: number
    portfolioId: number
    _all: number
  }


  export type AboutSectionMinAggregateInputType = {
    id?: true
    aboutHeading?: true
    about?: true
    AboutSectionCode?: true
    portfolioId?: true
  }

  export type AboutSectionMaxAggregateInputType = {
    id?: true
    aboutHeading?: true
    about?: true
    AboutSectionCode?: true
    portfolioId?: true
  }

  export type AboutSectionCountAggregateInputType = {
    id?: true
    aboutHeading?: true
    about?: true
    AboutSectionCode?: true
    portfolioId?: true
    _all?: true
  }

  export type AboutSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSection to aggregate.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutSections
    **/
    _count?: true | AboutSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutSectionMaxAggregateInputType
  }

  export type GetAboutSectionAggregateType<T extends AboutSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutSection[P]>
      : GetScalarType<T[P], AggregateAboutSection[P]>
  }




  export type AboutSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutSectionWhereInput
    orderBy?: AboutSectionOrderByWithAggregationInput | AboutSectionOrderByWithAggregationInput[]
    by: AboutSectionScalarFieldEnum[] | AboutSectionScalarFieldEnum
    having?: AboutSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutSectionCountAggregateInputType | true
    _min?: AboutSectionMinAggregateInputType
    _max?: AboutSectionMaxAggregateInputType
  }

  export type AboutSectionGroupByOutputType = {
    id: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
    portfolioId: string | null
    _count: AboutSectionCountAggregateOutputType | null
    _min: AboutSectionMinAggregateOutputType | null
    _max: AboutSectionMaxAggregateOutputType | null
  }

  type GetAboutSectionGroupByPayload<T extends AboutSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AboutSectionGroupByOutputType[P]>
        }
      >
    >


  export type AboutSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aboutHeading?: boolean
    about?: boolean
    AboutSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aboutHeading?: boolean
    about?: boolean
    AboutSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aboutHeading?: boolean
    about?: boolean
    AboutSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["aboutSection"]>

  export type AboutSectionSelectScalar = {
    id?: boolean
    aboutHeading?: boolean
    about?: boolean
    AboutSectionCode?: boolean
    portfolioId?: boolean
  }

  export type AboutSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aboutHeading" | "about" | "AboutSectionCode" | "portfolioId", ExtArgs["result"]["aboutSection"]>
  export type AboutSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }
  export type AboutSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }
  export type AboutSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | AboutSection$portfolioArgs<ExtArgs>
  }

  export type $AboutSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutSection"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aboutHeading: string
      about: string
      AboutSectionCode: string
      portfolioId: string | null
    }, ExtArgs["result"]["aboutSection"]>
    composites: {}
  }

  type AboutSectionGetPayload<S extends boolean | null | undefined | AboutSectionDefaultArgs> = $Result.GetResult<Prisma.$AboutSectionPayload, S>

  type AboutSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutSectionCountAggregateInputType | true
    }

  export interface AboutSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutSection'], meta: { name: 'AboutSection' } }
    /**
     * Find zero or one AboutSection that matches the filter.
     * @param {AboutSectionFindUniqueArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutSectionFindUniqueArgs>(args: SelectSubset<T, AboutSectionFindUniqueArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutSectionFindUniqueOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutSectionFindFirstArgs>(args?: SelectSubset<T, AboutSectionFindFirstArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindFirstOrThrowArgs} args - Arguments to find a AboutSection
     * @example
     * // Get one AboutSection
     * const aboutSection = await prisma.aboutSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutSections
     * const aboutSections = await prisma.aboutSection.findMany()
     * 
     * // Get first 10 AboutSections
     * const aboutSections = await prisma.aboutSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutSectionFindManyArgs>(args?: SelectSubset<T, AboutSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutSection.
     * @param {AboutSectionCreateArgs} args - Arguments to create a AboutSection.
     * @example
     * // Create one AboutSection
     * const AboutSection = await prisma.aboutSection.create({
     *   data: {
     *     // ... data to create a AboutSection
     *   }
     * })
     * 
     */
    create<T extends AboutSectionCreateArgs>(args: SelectSubset<T, AboutSectionCreateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutSections.
     * @param {AboutSectionCreateManyArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutSectionCreateManyArgs>(args?: SelectSubset<T, AboutSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutSections and returns the data saved in the database.
     * @param {AboutSectionCreateManyAndReturnArgs} args - Arguments to create many AboutSections.
     * @example
     * // Create many AboutSections
     * const aboutSection = await prisma.aboutSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutSections and only return the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutSection.
     * @param {AboutSectionDeleteArgs} args - Arguments to delete one AboutSection.
     * @example
     * // Delete one AboutSection
     * const AboutSection = await prisma.aboutSection.delete({
     *   where: {
     *     // ... filter to delete one AboutSection
     *   }
     * })
     * 
     */
    delete<T extends AboutSectionDeleteArgs>(args: SelectSubset<T, AboutSectionDeleteArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutSection.
     * @param {AboutSectionUpdateArgs} args - Arguments to update one AboutSection.
     * @example
     * // Update one AboutSection
     * const aboutSection = await prisma.aboutSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutSectionUpdateArgs>(args: SelectSubset<T, AboutSectionUpdateArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutSections.
     * @param {AboutSectionDeleteManyArgs} args - Arguments to filter AboutSections to delete.
     * @example
     * // Delete a few AboutSections
     * const { count } = await prisma.aboutSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutSectionDeleteManyArgs>(args?: SelectSubset<T, AboutSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutSectionUpdateManyArgs>(args: SelectSubset<T, AboutSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutSections and returns the data updated in the database.
     * @param {AboutSectionUpdateManyAndReturnArgs} args - Arguments to update many AboutSections.
     * @example
     * // Update many AboutSections
     * const aboutSection = await prisma.aboutSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutSections and only return the `id`
     * const aboutSectionWithIdOnly = await prisma.aboutSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends AboutSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutSection.
     * @param {AboutSectionUpsertArgs} args - Arguments to update or create a AboutSection.
     * @example
     * // Update or create a AboutSection
     * const aboutSection = await prisma.aboutSection.upsert({
     *   create: {
     *     // ... data to create a AboutSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutSection we want to update
     *   }
     * })
     */
    upsert<T extends AboutSectionUpsertArgs>(args: SelectSubset<T, AboutSectionUpsertArgs<ExtArgs>>): Prisma__AboutSectionClient<$Result.GetResult<Prisma.$AboutSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionCountArgs} args - Arguments to filter AboutSections to count.
     * @example
     * // Count the number of AboutSections
     * const count = await prisma.aboutSection.count({
     *   where: {
     *     // ... the filter for the AboutSections we want to count
     *   }
     * })
    **/
    count<T extends AboutSectionCountArgs>(
      args?: Subset<T, AboutSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutSectionAggregateArgs>(args: Subset<T, AboutSectionAggregateArgs>): Prisma.PrismaPromise<GetAboutSectionAggregateType<T>>

    /**
     * Group by AboutSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutSectionGroupByArgs} args - Group by arguments.
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
      T extends AboutSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutSectionGroupByArgs['orderBy'] }
        : { orderBy?: AboutSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutSection model
   */
  readonly fields: AboutSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends AboutSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, AboutSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AboutSection model
   */
  interface AboutSectionFieldRefs {
    readonly id: FieldRef<"AboutSection", 'String'>
    readonly aboutHeading: FieldRef<"AboutSection", 'String'>
    readonly about: FieldRef<"AboutSection", 'String'>
    readonly AboutSectionCode: FieldRef<"AboutSection", 'String'>
    readonly portfolioId: FieldRef<"AboutSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AboutSection findUnique
   */
  export type AboutSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findUniqueOrThrow
   */
  export type AboutSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection findFirst
   */
  export type AboutSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findFirstOrThrow
   */
  export type AboutSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which AboutSection to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutSections.
     */
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection findMany
   */
  export type AboutSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter, which AboutSections to fetch.
     */
    where?: AboutSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutSections to fetch.
     */
    orderBy?: AboutSectionOrderByWithRelationInput | AboutSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutSections.
     */
    cursor?: AboutSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutSections.
     */
    skip?: number
    distinct?: AboutSectionScalarFieldEnum | AboutSectionScalarFieldEnum[]
  }

  /**
   * AboutSection create
   */
  export type AboutSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a AboutSection.
     */
    data: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
  }

  /**
   * AboutSection createMany
   */
  export type AboutSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutSection createManyAndReturn
   */
  export type AboutSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data used to create many AboutSections.
     */
    data: AboutSectionCreateManyInput | AboutSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AboutSection update
   */
  export type AboutSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a AboutSection.
     */
    data: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
    /**
     * Choose, which AboutSection to update.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection updateMany
   */
  export type AboutSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to update.
     */
    limit?: number
  }

  /**
   * AboutSection updateManyAndReturn
   */
  export type AboutSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * The data used to update AboutSections.
     */
    data: XOR<AboutSectionUpdateManyMutationInput, AboutSectionUncheckedUpdateManyInput>
    /**
     * Filter which AboutSections to update
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AboutSection upsert
   */
  export type AboutSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the AboutSection to update in case it exists.
     */
    where: AboutSectionWhereUniqueInput
    /**
     * In case the AboutSection found by the `where` argument doesn't exist, create a new AboutSection with this data.
     */
    create: XOR<AboutSectionCreateInput, AboutSectionUncheckedCreateInput>
    /**
     * In case the AboutSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutSectionUpdateInput, AboutSectionUncheckedUpdateInput>
  }

  /**
   * AboutSection delete
   */
  export type AboutSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
    /**
     * Filter which AboutSection to delete.
     */
    where: AboutSectionWhereUniqueInput
  }

  /**
   * AboutSection deleteMany
   */
  export type AboutSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutSections to delete
     */
    where?: AboutSectionWhereInput
    /**
     * Limit how many AboutSections to delete.
     */
    limit?: number
  }

  /**
   * AboutSection.portfolio
   */
  export type AboutSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * AboutSection without action
   */
  export type AboutSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutSection
     */
    select?: AboutSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutSection
     */
    omit?: AboutSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AboutSectionInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSection
   */

  export type AggregateProjectSection = {
    _count: ProjectSectionCountAggregateOutputType | null
    _min: ProjectSectionMinAggregateOutputType | null
    _max: ProjectSectionMaxAggregateOutputType | null
  }

  export type ProjectSectionMinAggregateOutputType = {
    id: string | null
    projectHeading: string | null
    portfolioId: string | null
    projectSectionCode: string | null
  }

  export type ProjectSectionMaxAggregateOutputType = {
    id: string | null
    projectHeading: string | null
    portfolioId: string | null
    projectSectionCode: string | null
  }

  export type ProjectSectionCountAggregateOutputType = {
    id: number
    projectHeading: number
    portfolioId: number
    projectSectionCode: number
    _all: number
  }


  export type ProjectSectionMinAggregateInputType = {
    id?: true
    projectHeading?: true
    portfolioId?: true
    projectSectionCode?: true
  }

  export type ProjectSectionMaxAggregateInputType = {
    id?: true
    projectHeading?: true
    portfolioId?: true
    projectSectionCode?: true
  }

  export type ProjectSectionCountAggregateInputType = {
    id?: true
    projectHeading?: true
    portfolioId?: true
    projectSectionCode?: true
    _all?: true
  }

  export type ProjectSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSection to aggregate.
     */
    where?: ProjectSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSections to fetch.
     */
    orderBy?: ProjectSectionOrderByWithRelationInput | ProjectSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSections
    **/
    _count?: true | ProjectSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSectionMaxAggregateInputType
  }

  export type GetProjectSectionAggregateType<T extends ProjectSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSection[P]>
      : GetScalarType<T[P], AggregateProjectSection[P]>
  }




  export type ProjectSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSectionWhereInput
    orderBy?: ProjectSectionOrderByWithAggregationInput | ProjectSectionOrderByWithAggregationInput[]
    by: ProjectSectionScalarFieldEnum[] | ProjectSectionScalarFieldEnum
    having?: ProjectSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSectionCountAggregateInputType | true
    _min?: ProjectSectionMinAggregateInputType
    _max?: ProjectSectionMaxAggregateInputType
  }

  export type ProjectSectionGroupByOutputType = {
    id: string
    projectHeading: string
    portfolioId: string | null
    projectSectionCode: string
    _count: ProjectSectionCountAggregateOutputType | null
    _min: ProjectSectionMinAggregateOutputType | null
    _max: ProjectSectionMaxAggregateOutputType | null
  }

  type GetProjectSectionGroupByPayload<T extends ProjectSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSectionGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectHeading?: boolean
    portfolioId?: boolean
    projectSectionCode?: boolean
    projects?: boolean | ProjectSection$projectsArgs<ExtArgs>
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
    _count?: boolean | ProjectSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSection"]>

  export type ProjectSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectHeading?: boolean
    portfolioId?: boolean
    projectSectionCode?: boolean
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["projectSection"]>

  export type ProjectSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectHeading?: boolean
    portfolioId?: boolean
    projectSectionCode?: boolean
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["projectSection"]>

  export type ProjectSectionSelectScalar = {
    id?: boolean
    projectHeading?: boolean
    portfolioId?: boolean
    projectSectionCode?: boolean
  }

  export type ProjectSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectHeading" | "portfolioId" | "projectSectionCode", ExtArgs["result"]["projectSection"]>
  export type ProjectSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectSection$projectsArgs<ExtArgs>
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
    _count?: boolean | ProjectSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
  }
  export type ProjectSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | ProjectSection$portfolioArgs<ExtArgs>
  }

  export type $ProjectSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSection"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectHeading: string
      portfolioId: string | null
      projectSectionCode: string
    }, ExtArgs["result"]["projectSection"]>
    composites: {}
  }

  type ProjectSectionGetPayload<S extends boolean | null | undefined | ProjectSectionDefaultArgs> = $Result.GetResult<Prisma.$ProjectSectionPayload, S>

  type ProjectSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSectionCountAggregateInputType | true
    }

  export interface ProjectSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSection'], meta: { name: 'ProjectSection' } }
    /**
     * Find zero or one ProjectSection that matches the filter.
     * @param {ProjectSectionFindUniqueArgs} args - Arguments to find a ProjectSection
     * @example
     * // Get one ProjectSection
     * const projectSection = await prisma.projectSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSectionFindUniqueArgs>(args: SelectSubset<T, ProjectSectionFindUniqueArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSectionFindUniqueOrThrowArgs} args - Arguments to find a ProjectSection
     * @example
     * // Get one ProjectSection
     * const projectSection = await prisma.projectSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionFindFirstArgs} args - Arguments to find a ProjectSection
     * @example
     * // Get one ProjectSection
     * const projectSection = await prisma.projectSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSectionFindFirstArgs>(args?: SelectSubset<T, ProjectSectionFindFirstArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionFindFirstOrThrowArgs} args - Arguments to find a ProjectSection
     * @example
     * // Get one ProjectSection
     * const projectSection = await prisma.projectSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSections
     * const projectSections = await prisma.projectSection.findMany()
     * 
     * // Get first 10 ProjectSections
     * const projectSections = await prisma.projectSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectSectionWithIdOnly = await prisma.projectSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectSectionFindManyArgs>(args?: SelectSubset<T, ProjectSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectSection.
     * @param {ProjectSectionCreateArgs} args - Arguments to create a ProjectSection.
     * @example
     * // Create one ProjectSection
     * const ProjectSection = await prisma.projectSection.create({
     *   data: {
     *     // ... data to create a ProjectSection
     *   }
     * })
     * 
     */
    create<T extends ProjectSectionCreateArgs>(args: SelectSubset<T, ProjectSectionCreateArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectSections.
     * @param {ProjectSectionCreateManyArgs} args - Arguments to create many ProjectSections.
     * @example
     * // Create many ProjectSections
     * const projectSection = await prisma.projectSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSectionCreateManyArgs>(args?: SelectSubset<T, ProjectSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSections and returns the data saved in the database.
     * @param {ProjectSectionCreateManyAndReturnArgs} args - Arguments to create many ProjectSections.
     * @example
     * // Create many ProjectSections
     * const projectSection = await prisma.projectSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSections and only return the `id`
     * const projectSectionWithIdOnly = await prisma.projectSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectSection.
     * @param {ProjectSectionDeleteArgs} args - Arguments to delete one ProjectSection.
     * @example
     * // Delete one ProjectSection
     * const ProjectSection = await prisma.projectSection.delete({
     *   where: {
     *     // ... filter to delete one ProjectSection
     *   }
     * })
     * 
     */
    delete<T extends ProjectSectionDeleteArgs>(args: SelectSubset<T, ProjectSectionDeleteArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectSection.
     * @param {ProjectSectionUpdateArgs} args - Arguments to update one ProjectSection.
     * @example
     * // Update one ProjectSection
     * const projectSection = await prisma.projectSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSectionUpdateArgs>(args: SelectSubset<T, ProjectSectionUpdateArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectSections.
     * @param {ProjectSectionDeleteManyArgs} args - Arguments to filter ProjectSections to delete.
     * @example
     * // Delete a few ProjectSections
     * const { count } = await prisma.projectSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSectionDeleteManyArgs>(args?: SelectSubset<T, ProjectSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSections
     * const projectSection = await prisma.projectSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSectionUpdateManyArgs>(args: SelectSubset<T, ProjectSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSections and returns the data updated in the database.
     * @param {ProjectSectionUpdateManyAndReturnArgs} args - Arguments to update many ProjectSections.
     * @example
     * // Update many ProjectSections
     * const projectSection = await prisma.projectSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectSections and only return the `id`
     * const projectSectionWithIdOnly = await prisma.projectSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectSection.
     * @param {ProjectSectionUpsertArgs} args - Arguments to update or create a ProjectSection.
     * @example
     * // Update or create a ProjectSection
     * const projectSection = await prisma.projectSection.upsert({
     *   create: {
     *     // ... data to create a ProjectSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSection we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSectionUpsertArgs>(args: SelectSubset<T, ProjectSectionUpsertArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionCountArgs} args - Arguments to filter ProjectSections to count.
     * @example
     * // Count the number of ProjectSections
     * const count = await prisma.projectSection.count({
     *   where: {
     *     // ... the filter for the ProjectSections we want to count
     *   }
     * })
    **/
    count<T extends ProjectSectionCountArgs>(
      args?: Subset<T, ProjectSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectSectionAggregateArgs>(args: Subset<T, ProjectSectionAggregateArgs>): Prisma.PrismaPromise<GetProjectSectionAggregateType<T>>

    /**
     * Group by ProjectSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSectionGroupByArgs} args - Group by arguments.
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
      T extends ProjectSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSectionGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSection model
   */
  readonly fields: ProjectSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends ProjectSection$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectSection$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends ProjectSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, ProjectSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectSection model
   */
  interface ProjectSectionFieldRefs {
    readonly id: FieldRef<"ProjectSection", 'String'>
    readonly projectHeading: FieldRef<"ProjectSection", 'String'>
    readonly portfolioId: FieldRef<"ProjectSection", 'String'>
    readonly projectSectionCode: FieldRef<"ProjectSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSection findUnique
   */
  export type ProjectSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSection to fetch.
     */
    where: ProjectSectionWhereUniqueInput
  }

  /**
   * ProjectSection findUniqueOrThrow
   */
  export type ProjectSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSection to fetch.
     */
    where: ProjectSectionWhereUniqueInput
  }

  /**
   * ProjectSection findFirst
   */
  export type ProjectSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSection to fetch.
     */
    where?: ProjectSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSections to fetch.
     */
    orderBy?: ProjectSectionOrderByWithRelationInput | ProjectSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSections.
     */
    cursor?: ProjectSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSections.
     */
    distinct?: ProjectSectionScalarFieldEnum | ProjectSectionScalarFieldEnum[]
  }

  /**
   * ProjectSection findFirstOrThrow
   */
  export type ProjectSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSection to fetch.
     */
    where?: ProjectSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSections to fetch.
     */
    orderBy?: ProjectSectionOrderByWithRelationInput | ProjectSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSections.
     */
    cursor?: ProjectSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSections.
     */
    distinct?: ProjectSectionScalarFieldEnum | ProjectSectionScalarFieldEnum[]
  }

  /**
   * ProjectSection findMany
   */
  export type ProjectSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSections to fetch.
     */
    where?: ProjectSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSections to fetch.
     */
    orderBy?: ProjectSectionOrderByWithRelationInput | ProjectSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSections.
     */
    cursor?: ProjectSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSections.
     */
    skip?: number
    distinct?: ProjectSectionScalarFieldEnum | ProjectSectionScalarFieldEnum[]
  }

  /**
   * ProjectSection create
   */
  export type ProjectSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSection.
     */
    data: XOR<ProjectSectionCreateInput, ProjectSectionUncheckedCreateInput>
  }

  /**
   * ProjectSection createMany
   */
  export type ProjectSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSections.
     */
    data: ProjectSectionCreateManyInput | ProjectSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSection createManyAndReturn
   */
  export type ProjectSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectSections.
     */
    data: ProjectSectionCreateManyInput | ProjectSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSection update
   */
  export type ProjectSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSection.
     */
    data: XOR<ProjectSectionUpdateInput, ProjectSectionUncheckedUpdateInput>
    /**
     * Choose, which ProjectSection to update.
     */
    where: ProjectSectionWhereUniqueInput
  }

  /**
   * ProjectSection updateMany
   */
  export type ProjectSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSections.
     */
    data: XOR<ProjectSectionUpdateManyMutationInput, ProjectSectionUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSections to update
     */
    where?: ProjectSectionWhereInput
    /**
     * Limit how many ProjectSections to update.
     */
    limit?: number
  }

  /**
   * ProjectSection updateManyAndReturn
   */
  export type ProjectSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * The data used to update ProjectSections.
     */
    data: XOR<ProjectSectionUpdateManyMutationInput, ProjectSectionUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSections to update
     */
    where?: ProjectSectionWhereInput
    /**
     * Limit how many ProjectSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSection upsert
   */
  export type ProjectSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSection to update in case it exists.
     */
    where: ProjectSectionWhereUniqueInput
    /**
     * In case the ProjectSection found by the `where` argument doesn't exist, create a new ProjectSection with this data.
     */
    create: XOR<ProjectSectionCreateInput, ProjectSectionUncheckedCreateInput>
    /**
     * In case the ProjectSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSectionUpdateInput, ProjectSectionUncheckedUpdateInput>
  }

  /**
   * ProjectSection delete
   */
  export type ProjectSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
    /**
     * Filter which ProjectSection to delete.
     */
    where: ProjectSectionWhereUniqueInput
  }

  /**
   * ProjectSection deleteMany
   */
  export type ProjectSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSections to delete
     */
    where?: ProjectSectionWhereInput
    /**
     * Limit how many ProjectSections to delete.
     */
    limit?: number
  }

  /**
   * ProjectSection.projects
   */
  export type ProjectSection$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectSection.portfolio
   */
  export type ProjectSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * ProjectSection without action
   */
  export type ProjectSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSection
     */
    select?: ProjectSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSection
     */
    omit?: ProjectSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSectionInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    projectName: string | null
    projectHeading: string | null
    projectDescription: string | null
    githubLink: string | null
    deployedLink: string | null
    projectSectionId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    projectName: string | null
    projectHeading: string | null
    projectDescription: string | null
    githubLink: string | null
    deployedLink: string | null
    projectSectionId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    projectName: number
    projectHeading: number
    projectDescription: number
    techStack: number
    features: number
    challenges: number
    learnings: number
    githubLink: number
    deployedLink: number
    projectSectionId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    projectName?: true
    projectHeading?: true
    projectDescription?: true
    githubLink?: true
    deployedLink?: true
    projectSectionId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    projectName?: true
    projectHeading?: true
    projectDescription?: true
    githubLink?: true
    deployedLink?: true
    projectSectionId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    projectName?: true
    projectHeading?: true
    projectDescription?: true
    techStack?: true
    features?: true
    challenges?: true
    learnings?: true
    githubLink?: true
    deployedLink?: true
    projectSectionId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack: string[]
    features: string[]
    challenges: string[]
    learnings: string[]
    githubLink: string
    deployedLink: string | null
    projectSectionId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    projectHeading?: boolean
    projectDescription?: boolean
    techStack?: boolean
    features?: boolean
    challenges?: boolean
    learnings?: boolean
    githubLink?: boolean
    deployedLink?: boolean
    projectSectionId?: boolean
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    projectHeading?: boolean
    projectDescription?: boolean
    techStack?: boolean
    features?: boolean
    challenges?: boolean
    learnings?: boolean
    githubLink?: boolean
    deployedLink?: boolean
    projectSectionId?: boolean
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    projectHeading?: boolean
    projectDescription?: boolean
    techStack?: boolean
    features?: boolean
    challenges?: boolean
    learnings?: boolean
    githubLink?: boolean
    deployedLink?: boolean
    projectSectionId?: boolean
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    projectName?: boolean
    projectHeading?: boolean
    projectDescription?: boolean
    techStack?: boolean
    features?: boolean
    challenges?: boolean
    learnings?: boolean
    githubLink?: boolean
    deployedLink?: boolean
    projectSectionId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectName" | "projectHeading" | "projectDescription" | "techStack" | "features" | "challenges" | "learnings" | "githubLink" | "deployedLink" | "projectSectionId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectSection?: boolean | ProjectSectionDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectSection: Prisma.$ProjectSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectName: string
      projectHeading: string
      projectDescription: string
      techStack: string[]
      features: string[]
      challenges: string[]
      learnings: string[]
      githubLink: string
      deployedLink: string | null
      projectSectionId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectSection<T extends ProjectSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectSectionDefaultArgs<ExtArgs>>): Prisma__ProjectSectionClient<$Result.GetResult<Prisma.$ProjectSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly projectName: FieldRef<"Project", 'String'>
    readonly projectHeading: FieldRef<"Project", 'String'>
    readonly projectDescription: FieldRef<"Project", 'String'>
    readonly techStack: FieldRef<"Project", 'String[]'>
    readonly features: FieldRef<"Project", 'String[]'>
    readonly challenges: FieldRef<"Project", 'String[]'>
    readonly learnings: FieldRef<"Project", 'String[]'>
    readonly githubLink: FieldRef<"Project", 'String'>
    readonly deployedLink: FieldRef<"Project", 'String'>
    readonly projectSectionId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model SkillSection
   */

  export type AggregateSkillSection = {
    _count: SkillSectionCountAggregateOutputType | null
    _min: SkillSectionMinAggregateOutputType | null
    _max: SkillSectionMaxAggregateOutputType | null
  }

  export type SkillSectionMinAggregateOutputType = {
    id: string | null
    skillHeading: string | null
    skillDescription: string | null
    skillSectionCode: string | null
    portfolioId: string | null
  }

  export type SkillSectionMaxAggregateOutputType = {
    id: string | null
    skillHeading: string | null
    skillDescription: string | null
    skillSectionCode: string | null
    portfolioId: string | null
  }

  export type SkillSectionCountAggregateOutputType = {
    id: number
    skillHeading: number
    skillDescription: number
    skillSectionCode: number
    portfolioId: number
    _all: number
  }


  export type SkillSectionMinAggregateInputType = {
    id?: true
    skillHeading?: true
    skillDescription?: true
    skillSectionCode?: true
    portfolioId?: true
  }

  export type SkillSectionMaxAggregateInputType = {
    id?: true
    skillHeading?: true
    skillDescription?: true
    skillSectionCode?: true
    portfolioId?: true
  }

  export type SkillSectionCountAggregateInputType = {
    id?: true
    skillHeading?: true
    skillDescription?: true
    skillSectionCode?: true
    portfolioId?: true
    _all?: true
  }

  export type SkillSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSection to aggregate.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillSections
    **/
    _count?: true | SkillSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillSectionMaxAggregateInputType
  }

  export type GetSkillSectionAggregateType<T extends SkillSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillSection[P]>
      : GetScalarType<T[P], AggregateSkillSection[P]>
  }




  export type SkillSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillSectionWhereInput
    orderBy?: SkillSectionOrderByWithAggregationInput | SkillSectionOrderByWithAggregationInput[]
    by: SkillSectionScalarFieldEnum[] | SkillSectionScalarFieldEnum
    having?: SkillSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillSectionCountAggregateInputType | true
    _min?: SkillSectionMinAggregateInputType
    _max?: SkillSectionMaxAggregateInputType
  }

  export type SkillSectionGroupByOutputType = {
    id: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    portfolioId: string
    _count: SkillSectionCountAggregateOutputType | null
    _min: SkillSectionMinAggregateOutputType | null
    _max: SkillSectionMaxAggregateOutputType | null
  }

  type GetSkillSectionGroupByPayload<T extends SkillSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillSectionGroupByOutputType[P]>
            : GetScalarType<T[P], SkillSectionGroupByOutputType[P]>
        }
      >
    >


  export type SkillSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillHeading?: boolean
    skillDescription?: boolean
    skillSectionCode?: boolean
    portfolioId?: boolean
    skills?: boolean | SkillSection$skillsArgs<ExtArgs>
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
    _count?: boolean | SkillSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillHeading?: boolean
    skillDescription?: boolean
    skillSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillHeading?: boolean
    skillDescription?: boolean
    skillSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectScalar = {
    id?: boolean
    skillHeading?: boolean
    skillDescription?: boolean
    skillSectionCode?: boolean
    portfolioId?: boolean
  }

  export type SkillSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillHeading" | "skillDescription" | "skillSectionCode" | "portfolioId", ExtArgs["result"]["skillSection"]>
  export type SkillSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillSection$skillsArgs<ExtArgs>
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
    _count?: boolean | SkillSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
  }
  export type SkillSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | SkillSection$portfolioArgs<ExtArgs>
  }

  export type $SkillSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillSection"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skillHeading: string
      skillDescription: string
      skillSectionCode: string
      portfolioId: string
    }, ExtArgs["result"]["skillSection"]>
    composites: {}
  }

  type SkillSectionGetPayload<S extends boolean | null | undefined | SkillSectionDefaultArgs> = $Result.GetResult<Prisma.$SkillSectionPayload, S>

  type SkillSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillSectionCountAggregateInputType | true
    }

  export interface SkillSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillSection'], meta: { name: 'SkillSection' } }
    /**
     * Find zero or one SkillSection that matches the filter.
     * @param {SkillSectionFindUniqueArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillSectionFindUniqueArgs>(args: SelectSubset<T, SkillSectionFindUniqueArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillSectionFindUniqueOrThrowArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindFirstArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillSectionFindFirstArgs>(args?: SelectSubset<T, SkillSectionFindFirstArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindFirstOrThrowArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillSections
     * const skillSections = await prisma.skillSection.findMany()
     * 
     * // Get first 10 SkillSections
     * const skillSections = await prisma.skillSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillSectionFindManyArgs>(args?: SelectSubset<T, SkillSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillSection.
     * @param {SkillSectionCreateArgs} args - Arguments to create a SkillSection.
     * @example
     * // Create one SkillSection
     * const SkillSection = await prisma.skillSection.create({
     *   data: {
     *     // ... data to create a SkillSection
     *   }
     * })
     * 
     */
    create<T extends SkillSectionCreateArgs>(args: SelectSubset<T, SkillSectionCreateArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillSections.
     * @param {SkillSectionCreateManyArgs} args - Arguments to create many SkillSections.
     * @example
     * // Create many SkillSections
     * const skillSection = await prisma.skillSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillSectionCreateManyArgs>(args?: SelectSubset<T, SkillSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillSections and returns the data saved in the database.
     * @param {SkillSectionCreateManyAndReturnArgs} args - Arguments to create many SkillSections.
     * @example
     * // Create many SkillSections
     * const skillSection = await prisma.skillSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillSections and only return the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillSection.
     * @param {SkillSectionDeleteArgs} args - Arguments to delete one SkillSection.
     * @example
     * // Delete one SkillSection
     * const SkillSection = await prisma.skillSection.delete({
     *   where: {
     *     // ... filter to delete one SkillSection
     *   }
     * })
     * 
     */
    delete<T extends SkillSectionDeleteArgs>(args: SelectSubset<T, SkillSectionDeleteArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillSection.
     * @param {SkillSectionUpdateArgs} args - Arguments to update one SkillSection.
     * @example
     * // Update one SkillSection
     * const skillSection = await prisma.skillSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillSectionUpdateArgs>(args: SelectSubset<T, SkillSectionUpdateArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillSections.
     * @param {SkillSectionDeleteManyArgs} args - Arguments to filter SkillSections to delete.
     * @example
     * // Delete a few SkillSections
     * const { count } = await prisma.skillSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillSectionDeleteManyArgs>(args?: SelectSubset<T, SkillSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillSections
     * const skillSection = await prisma.skillSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillSectionUpdateManyArgs>(args: SelectSubset<T, SkillSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillSections and returns the data updated in the database.
     * @param {SkillSectionUpdateManyAndReturnArgs} args - Arguments to update many SkillSections.
     * @example
     * // Update many SkillSections
     * const skillSection = await prisma.skillSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillSections and only return the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillSection.
     * @param {SkillSectionUpsertArgs} args - Arguments to update or create a SkillSection.
     * @example
     * // Update or create a SkillSection
     * const skillSection = await prisma.skillSection.upsert({
     *   create: {
     *     // ... data to create a SkillSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillSection we want to update
     *   }
     * })
     */
    upsert<T extends SkillSectionUpsertArgs>(args: SelectSubset<T, SkillSectionUpsertArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionCountArgs} args - Arguments to filter SkillSections to count.
     * @example
     * // Count the number of SkillSections
     * const count = await prisma.skillSection.count({
     *   where: {
     *     // ... the filter for the SkillSections we want to count
     *   }
     * })
    **/
    count<T extends SkillSectionCountArgs>(
      args?: Subset<T, SkillSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillSectionAggregateArgs>(args: Subset<T, SkillSectionAggregateArgs>): Prisma.PrismaPromise<GetSkillSectionAggregateType<T>>

    /**
     * Group by SkillSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionGroupByArgs} args - Group by arguments.
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
      T extends SkillSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillSectionGroupByArgs['orderBy'] }
        : { orderBy?: SkillSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillSection model
   */
  readonly fields: SkillSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends SkillSection$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillSection$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends SkillSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, SkillSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SkillSection model
   */
  interface SkillSectionFieldRefs {
    readonly id: FieldRef<"SkillSection", 'String'>
    readonly skillHeading: FieldRef<"SkillSection", 'String'>
    readonly skillDescription: FieldRef<"SkillSection", 'String'>
    readonly skillSectionCode: FieldRef<"SkillSection", 'String'>
    readonly portfolioId: FieldRef<"SkillSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkillSection findUnique
   */
  export type SkillSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection findUniqueOrThrow
   */
  export type SkillSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection findFirst
   */
  export type SkillSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSections.
     */
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection findFirstOrThrow
   */
  export type SkillSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSections.
     */
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection findMany
   */
  export type SkillSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter, which SkillSections to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection create
   */
  export type SkillSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillSection.
     */
    data: XOR<SkillSectionCreateInput, SkillSectionUncheckedCreateInput>
  }

  /**
   * SkillSection createMany
   */
  export type SkillSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillSections.
     */
    data: SkillSectionCreateManyInput | SkillSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillSection createManyAndReturn
   */
  export type SkillSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data used to create many SkillSections.
     */
    data: SkillSectionCreateManyInput | SkillSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillSection update
   */
  export type SkillSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillSection.
     */
    data: XOR<SkillSectionUpdateInput, SkillSectionUncheckedUpdateInput>
    /**
     * Choose, which SkillSection to update.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection updateMany
   */
  export type SkillSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillSections.
     */
    data: XOR<SkillSectionUpdateManyMutationInput, SkillSectionUncheckedUpdateManyInput>
    /**
     * Filter which SkillSections to update
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to update.
     */
    limit?: number
  }

  /**
   * SkillSection updateManyAndReturn
   */
  export type SkillSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data used to update SkillSections.
     */
    data: XOR<SkillSectionUpdateManyMutationInput, SkillSectionUncheckedUpdateManyInput>
    /**
     * Filter which SkillSections to update
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillSection upsert
   */
  export type SkillSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillSection to update in case it exists.
     */
    where: SkillSectionWhereUniqueInput
    /**
     * In case the SkillSection found by the `where` argument doesn't exist, create a new SkillSection with this data.
     */
    create: XOR<SkillSectionCreateInput, SkillSectionUncheckedCreateInput>
    /**
     * In case the SkillSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillSectionUpdateInput, SkillSectionUncheckedUpdateInput>
  }

  /**
   * SkillSection delete
   */
  export type SkillSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
    /**
     * Filter which SkillSection to delete.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection deleteMany
   */
  export type SkillSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSections to delete
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to delete.
     */
    limit?: number
  }

  /**
   * SkillSection.skills
   */
  export type SkillSection$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * SkillSection.portfolio
   */
  export type SkillSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * SkillSection without action
   */
  export type SkillSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSectionInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    skillIcon: string | null
    skillName: string | null
    skillIconColor: string | null
    skillSectionId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    skillIcon: string | null
    skillName: string | null
    skillIconColor: string | null
    skillSectionId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    skillIcon: number
    skillName: number
    skillIconColor: number
    skillSectionId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    skillIcon?: true
    skillName?: true
    skillIconColor?: true
    skillSectionId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    skillIcon?: true
    skillName?: true
    skillIconColor?: true
    skillSectionId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    skillIcon?: true
    skillName?: true
    skillIconColor?: true
    skillSectionId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    skillIcon: string
    skillName: string
    skillIconColor: string
    skillSectionId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillIcon?: boolean
    skillName?: boolean
    skillIconColor?: boolean
    skillSectionId?: boolean
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillIcon?: boolean
    skillName?: boolean
    skillIconColor?: boolean
    skillSectionId?: boolean
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillIcon?: boolean
    skillName?: boolean
    skillIconColor?: boolean
    skillSectionId?: boolean
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    skillIcon?: boolean
    skillName?: boolean
    skillIconColor?: boolean
    skillSectionId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillIcon" | "skillName" | "skillIconColor" | "skillSectionId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillsection?: boolean | SkillSectionDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      skillsection: Prisma.$SkillSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skillIcon: string
      skillName: string
      skillIconColor: string
      skillSectionId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillsection<T extends SkillSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillSectionDefaultArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly skillIcon: FieldRef<"Skill", 'String'>
    readonly skillName: FieldRef<"Skill", 'String'>
    readonly skillIconColor: FieldRef<"Skill", 'String'>
    readonly skillSectionId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model ExperienceSection
   */

  export type AggregateExperienceSection = {
    _count: ExperienceSectionCountAggregateOutputType | null
    _min: ExperienceSectionMinAggregateOutputType | null
    _max: ExperienceSectionMaxAggregateOutputType | null
  }

  export type ExperienceSectionMinAggregateOutputType = {
    id: string | null
    experienceHeading: string | null
    experienceDescription: string | null
    portfolioId: string | null
    experienceSectionCode: string | null
  }

  export type ExperienceSectionMaxAggregateOutputType = {
    id: string | null
    experienceHeading: string | null
    experienceDescription: string | null
    portfolioId: string | null
    experienceSectionCode: string | null
  }

  export type ExperienceSectionCountAggregateOutputType = {
    id: number
    experienceHeading: number
    experienceDescription: number
    portfolioId: number
    experienceSectionCode: number
    _all: number
  }


  export type ExperienceSectionMinAggregateInputType = {
    id?: true
    experienceHeading?: true
    experienceDescription?: true
    portfolioId?: true
    experienceSectionCode?: true
  }

  export type ExperienceSectionMaxAggregateInputType = {
    id?: true
    experienceHeading?: true
    experienceDescription?: true
    portfolioId?: true
    experienceSectionCode?: true
  }

  export type ExperienceSectionCountAggregateInputType = {
    id?: true
    experienceHeading?: true
    experienceDescription?: true
    portfolioId?: true
    experienceSectionCode?: true
    _all?: true
  }

  export type ExperienceSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceSection to aggregate.
     */
    where?: ExperienceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceSections to fetch.
     */
    orderBy?: ExperienceSectionOrderByWithRelationInput | ExperienceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceSections
    **/
    _count?: true | ExperienceSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceSectionMaxAggregateInputType
  }

  export type GetExperienceSectionAggregateType<T extends ExperienceSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceSection[P]>
      : GetScalarType<T[P], AggregateExperienceSection[P]>
  }




  export type ExperienceSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceSectionWhereInput
    orderBy?: ExperienceSectionOrderByWithAggregationInput | ExperienceSectionOrderByWithAggregationInput[]
    by: ExperienceSectionScalarFieldEnum[] | ExperienceSectionScalarFieldEnum
    having?: ExperienceSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceSectionCountAggregateInputType | true
    _min?: ExperienceSectionMinAggregateInputType
    _max?: ExperienceSectionMaxAggregateInputType
  }

  export type ExperienceSectionGroupByOutputType = {
    id: string
    experienceHeading: string
    experienceDescription: string
    portfolioId: string
    experienceSectionCode: string
    _count: ExperienceSectionCountAggregateOutputType | null
    _min: ExperienceSectionMinAggregateOutputType | null
    _max: ExperienceSectionMaxAggregateOutputType | null
  }

  type GetExperienceSectionGroupByPayload<T extends ExperienceSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceSectionGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceHeading?: boolean
    experienceDescription?: boolean
    portfolioId?: boolean
    experienceSectionCode?: boolean
    experience?: boolean | ExperienceSection$experienceArgs<ExtArgs>
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
    _count?: boolean | ExperienceSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceSection"]>

  export type ExperienceSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceHeading?: boolean
    experienceDescription?: boolean
    portfolioId?: boolean
    experienceSectionCode?: boolean
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["experienceSection"]>

  export type ExperienceSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceHeading?: boolean
    experienceDescription?: boolean
    portfolioId?: boolean
    experienceSectionCode?: boolean
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["experienceSection"]>

  export type ExperienceSectionSelectScalar = {
    id?: boolean
    experienceHeading?: boolean
    experienceDescription?: boolean
    portfolioId?: boolean
    experienceSectionCode?: boolean
  }

  export type ExperienceSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "experienceHeading" | "experienceDescription" | "portfolioId" | "experienceSectionCode", ExtArgs["result"]["experienceSection"]>
  export type ExperienceSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | ExperienceSection$experienceArgs<ExtArgs>
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
    _count?: boolean | ExperienceSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExperienceSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
  }
  export type ExperienceSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | ExperienceSection$portfolioArgs<ExtArgs>
  }

  export type $ExperienceSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceSection"
    objects: {
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      experienceHeading: string
      experienceDescription: string
      portfolioId: string
      experienceSectionCode: string
    }, ExtArgs["result"]["experienceSection"]>
    composites: {}
  }

  type ExperienceSectionGetPayload<S extends boolean | null | undefined | ExperienceSectionDefaultArgs> = $Result.GetResult<Prisma.$ExperienceSectionPayload, S>

  type ExperienceSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceSectionCountAggregateInputType | true
    }

  export interface ExperienceSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceSection'], meta: { name: 'ExperienceSection' } }
    /**
     * Find zero or one ExperienceSection that matches the filter.
     * @param {ExperienceSectionFindUniqueArgs} args - Arguments to find a ExperienceSection
     * @example
     * // Get one ExperienceSection
     * const experienceSection = await prisma.experienceSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceSectionFindUniqueArgs>(args: SelectSubset<T, ExperienceSectionFindUniqueArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienceSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceSectionFindUniqueOrThrowArgs} args - Arguments to find a ExperienceSection
     * @example
     * // Get one ExperienceSection
     * const experienceSection = await prisma.experienceSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionFindFirstArgs} args - Arguments to find a ExperienceSection
     * @example
     * // Get one ExperienceSection
     * const experienceSection = await prisma.experienceSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceSectionFindFirstArgs>(args?: SelectSubset<T, ExperienceSectionFindFirstArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionFindFirstOrThrowArgs} args - Arguments to find a ExperienceSection
     * @example
     * // Get one ExperienceSection
     * const experienceSection = await prisma.experienceSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienceSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceSections
     * const experienceSections = await prisma.experienceSection.findMany()
     * 
     * // Get first 10 ExperienceSections
     * const experienceSections = await prisma.experienceSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceSectionWithIdOnly = await prisma.experienceSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceSectionFindManyArgs>(args?: SelectSubset<T, ExperienceSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienceSection.
     * @param {ExperienceSectionCreateArgs} args - Arguments to create a ExperienceSection.
     * @example
     * // Create one ExperienceSection
     * const ExperienceSection = await prisma.experienceSection.create({
     *   data: {
     *     // ... data to create a ExperienceSection
     *   }
     * })
     * 
     */
    create<T extends ExperienceSectionCreateArgs>(args: SelectSubset<T, ExperienceSectionCreateArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienceSections.
     * @param {ExperienceSectionCreateManyArgs} args - Arguments to create many ExperienceSections.
     * @example
     * // Create many ExperienceSections
     * const experienceSection = await prisma.experienceSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceSectionCreateManyArgs>(args?: SelectSubset<T, ExperienceSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceSections and returns the data saved in the database.
     * @param {ExperienceSectionCreateManyAndReturnArgs} args - Arguments to create many ExperienceSections.
     * @example
     * // Create many ExperienceSections
     * const experienceSection = await prisma.experienceSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceSections and only return the `id`
     * const experienceSectionWithIdOnly = await prisma.experienceSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienceSection.
     * @param {ExperienceSectionDeleteArgs} args - Arguments to delete one ExperienceSection.
     * @example
     * // Delete one ExperienceSection
     * const ExperienceSection = await prisma.experienceSection.delete({
     *   where: {
     *     // ... filter to delete one ExperienceSection
     *   }
     * })
     * 
     */
    delete<T extends ExperienceSectionDeleteArgs>(args: SelectSubset<T, ExperienceSectionDeleteArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienceSection.
     * @param {ExperienceSectionUpdateArgs} args - Arguments to update one ExperienceSection.
     * @example
     * // Update one ExperienceSection
     * const experienceSection = await prisma.experienceSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceSectionUpdateArgs>(args: SelectSubset<T, ExperienceSectionUpdateArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienceSections.
     * @param {ExperienceSectionDeleteManyArgs} args - Arguments to filter ExperienceSections to delete.
     * @example
     * // Delete a few ExperienceSections
     * const { count } = await prisma.experienceSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceSectionDeleteManyArgs>(args?: SelectSubset<T, ExperienceSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceSections
     * const experienceSection = await prisma.experienceSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceSectionUpdateManyArgs>(args: SelectSubset<T, ExperienceSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceSections and returns the data updated in the database.
     * @param {ExperienceSectionUpdateManyAndReturnArgs} args - Arguments to update many ExperienceSections.
     * @example
     * // Update many ExperienceSections
     * const experienceSection = await prisma.experienceSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienceSections and only return the `id`
     * const experienceSectionWithIdOnly = await prisma.experienceSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienceSection.
     * @param {ExperienceSectionUpsertArgs} args - Arguments to update or create a ExperienceSection.
     * @example
     * // Update or create a ExperienceSection
     * const experienceSection = await prisma.experienceSection.upsert({
     *   create: {
     *     // ... data to create a ExperienceSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceSection we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceSectionUpsertArgs>(args: SelectSubset<T, ExperienceSectionUpsertArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionCountArgs} args - Arguments to filter ExperienceSections to count.
     * @example
     * // Count the number of ExperienceSections
     * const count = await prisma.experienceSection.count({
     *   where: {
     *     // ... the filter for the ExperienceSections we want to count
     *   }
     * })
    **/
    count<T extends ExperienceSectionCountArgs>(
      args?: Subset<T, ExperienceSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceSectionAggregateArgs>(args: Subset<T, ExperienceSectionAggregateArgs>): Prisma.PrismaPromise<GetExperienceSectionAggregateType<T>>

    /**
     * Group by ExperienceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceSectionGroupByArgs} args - Group by arguments.
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
      T extends ExperienceSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceSectionGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceSection model
   */
  readonly fields: ExperienceSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends ExperienceSection$experienceArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceSection$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends ExperienceSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExperienceSection model
   */
  interface ExperienceSectionFieldRefs {
    readonly id: FieldRef<"ExperienceSection", 'String'>
    readonly experienceHeading: FieldRef<"ExperienceSection", 'String'>
    readonly experienceDescription: FieldRef<"ExperienceSection", 'String'>
    readonly portfolioId: FieldRef<"ExperienceSection", 'String'>
    readonly experienceSectionCode: FieldRef<"ExperienceSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceSection findUnique
   */
  export type ExperienceSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceSection to fetch.
     */
    where: ExperienceSectionWhereUniqueInput
  }

  /**
   * ExperienceSection findUniqueOrThrow
   */
  export type ExperienceSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceSection to fetch.
     */
    where: ExperienceSectionWhereUniqueInput
  }

  /**
   * ExperienceSection findFirst
   */
  export type ExperienceSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceSection to fetch.
     */
    where?: ExperienceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceSections to fetch.
     */
    orderBy?: ExperienceSectionOrderByWithRelationInput | ExperienceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceSections.
     */
    cursor?: ExperienceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceSections.
     */
    distinct?: ExperienceSectionScalarFieldEnum | ExperienceSectionScalarFieldEnum[]
  }

  /**
   * ExperienceSection findFirstOrThrow
   */
  export type ExperienceSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceSection to fetch.
     */
    where?: ExperienceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceSections to fetch.
     */
    orderBy?: ExperienceSectionOrderByWithRelationInput | ExperienceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceSections.
     */
    cursor?: ExperienceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceSections.
     */
    distinct?: ExperienceSectionScalarFieldEnum | ExperienceSectionScalarFieldEnum[]
  }

  /**
   * ExperienceSection findMany
   */
  export type ExperienceSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceSections to fetch.
     */
    where?: ExperienceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceSections to fetch.
     */
    orderBy?: ExperienceSectionOrderByWithRelationInput | ExperienceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceSections.
     */
    cursor?: ExperienceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceSections.
     */
    skip?: number
    distinct?: ExperienceSectionScalarFieldEnum | ExperienceSectionScalarFieldEnum[]
  }

  /**
   * ExperienceSection create
   */
  export type ExperienceSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienceSection.
     */
    data: XOR<ExperienceSectionCreateInput, ExperienceSectionUncheckedCreateInput>
  }

  /**
   * ExperienceSection createMany
   */
  export type ExperienceSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceSections.
     */
    data: ExperienceSectionCreateManyInput | ExperienceSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceSection createManyAndReturn
   */
  export type ExperienceSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienceSections.
     */
    data: ExperienceSectionCreateManyInput | ExperienceSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceSection update
   */
  export type ExperienceSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienceSection.
     */
    data: XOR<ExperienceSectionUpdateInput, ExperienceSectionUncheckedUpdateInput>
    /**
     * Choose, which ExperienceSection to update.
     */
    where: ExperienceSectionWhereUniqueInput
  }

  /**
   * ExperienceSection updateMany
   */
  export type ExperienceSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceSections.
     */
    data: XOR<ExperienceSectionUpdateManyMutationInput, ExperienceSectionUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceSections to update
     */
    where?: ExperienceSectionWhereInput
    /**
     * Limit how many ExperienceSections to update.
     */
    limit?: number
  }

  /**
   * ExperienceSection updateManyAndReturn
   */
  export type ExperienceSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * The data used to update ExperienceSections.
     */
    data: XOR<ExperienceSectionUpdateManyMutationInput, ExperienceSectionUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceSections to update
     */
    where?: ExperienceSectionWhereInput
    /**
     * Limit how many ExperienceSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceSection upsert
   */
  export type ExperienceSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienceSection to update in case it exists.
     */
    where: ExperienceSectionWhereUniqueInput
    /**
     * In case the ExperienceSection found by the `where` argument doesn't exist, create a new ExperienceSection with this data.
     */
    create: XOR<ExperienceSectionCreateInput, ExperienceSectionUncheckedCreateInput>
    /**
     * In case the ExperienceSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceSectionUpdateInput, ExperienceSectionUncheckedUpdateInput>
  }

  /**
   * ExperienceSection delete
   */
  export type ExperienceSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
    /**
     * Filter which ExperienceSection to delete.
     */
    where: ExperienceSectionWhereUniqueInput
  }

  /**
   * ExperienceSection deleteMany
   */
  export type ExperienceSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceSections to delete
     */
    where?: ExperienceSectionWhereInput
    /**
     * Limit how many ExperienceSections to delete.
     */
    limit?: number
  }

  /**
   * ExperienceSection.experience
   */
  export type ExperienceSection$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * ExperienceSection.portfolio
   */
  export type ExperienceSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * ExperienceSection without action
   */
  export type ExperienceSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceSection
     */
    select?: ExperienceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceSection
     */
    omit?: ExperienceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceSectionInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    experienceName: string | null
    joiningDate: Date | null
    experienceDescription: string | null
    experienceSectionId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    experienceName: string | null
    joiningDate: Date | null
    experienceDescription: string | null
    experienceSectionId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    experienceName: number
    joiningDate: number
    experienceDescription: number
    experienceSectionId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    experienceName?: true
    joiningDate?: true
    experienceDescription?: true
    experienceSectionId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    experienceName?: true
    joiningDate?: true
    experienceDescription?: true
    experienceSectionId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    experienceName?: true
    joiningDate?: true
    experienceDescription?: true
    experienceSectionId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    experienceName: string
    joiningDate: Date
    experienceDescription: string
    experienceSectionId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceName?: boolean
    joiningDate?: boolean
    experienceDescription?: boolean
    experienceSectionId?: boolean
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceName?: boolean
    joiningDate?: boolean
    experienceDescription?: boolean
    experienceSectionId?: boolean
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    experienceName?: boolean
    joiningDate?: boolean
    experienceDescription?: boolean
    experienceSectionId?: boolean
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    experienceName?: boolean
    joiningDate?: boolean
    experienceDescription?: boolean
    experienceSectionId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "experienceName" | "joiningDate" | "experienceDescription" | "experienceSectionId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceSection?: boolean | ExperienceSectionDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      experienceSection: Prisma.$ExperienceSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      experienceName: string
      joiningDate: Date
      experienceDescription: string
      experienceSectionId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienceSection<T extends ExperienceSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceSectionDefaultArgs<ExtArgs>>): Prisma__ExperienceSectionClient<$Result.GetResult<Prisma.$ExperienceSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly experienceName: FieldRef<"Experience", 'String'>
    readonly joiningDate: FieldRef<"Experience", 'DateTime'>
    readonly experienceDescription: FieldRef<"Experience", 'String'>
    readonly experienceSectionId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model EducationSection
   */

  export type AggregateEducationSection = {
    _count: EducationSectionCountAggregateOutputType | null
    _min: EducationSectionMinAggregateOutputType | null
    _max: EducationSectionMaxAggregateOutputType | null
  }

  export type EducationSectionMinAggregateOutputType = {
    id: string | null
    educationHeading: string | null
    educationDescription: string | null
    educationSectionCode: string | null
    portfolioId: string | null
  }

  export type EducationSectionMaxAggregateOutputType = {
    id: string | null
    educationHeading: string | null
    educationDescription: string | null
    educationSectionCode: string | null
    portfolioId: string | null
  }

  export type EducationSectionCountAggregateOutputType = {
    id: number
    educationHeading: number
    educationDescription: number
    educationSectionCode: number
    portfolioId: number
    _all: number
  }


  export type EducationSectionMinAggregateInputType = {
    id?: true
    educationHeading?: true
    educationDescription?: true
    educationSectionCode?: true
    portfolioId?: true
  }

  export type EducationSectionMaxAggregateInputType = {
    id?: true
    educationHeading?: true
    educationDescription?: true
    educationSectionCode?: true
    portfolioId?: true
  }

  export type EducationSectionCountAggregateInputType = {
    id?: true
    educationHeading?: true
    educationDescription?: true
    educationSectionCode?: true
    portfolioId?: true
    _all?: true
  }

  export type EducationSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationSection to aggregate.
     */
    where?: EducationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationSections to fetch.
     */
    orderBy?: EducationSectionOrderByWithRelationInput | EducationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationSections
    **/
    _count?: true | EducationSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationSectionMaxAggregateInputType
  }

  export type GetEducationSectionAggregateType<T extends EducationSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationSection[P]>
      : GetScalarType<T[P], AggregateEducationSection[P]>
  }




  export type EducationSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationSectionWhereInput
    orderBy?: EducationSectionOrderByWithAggregationInput | EducationSectionOrderByWithAggregationInput[]
    by: EducationSectionScalarFieldEnum[] | EducationSectionScalarFieldEnum
    having?: EducationSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationSectionCountAggregateInputType | true
    _min?: EducationSectionMinAggregateInputType
    _max?: EducationSectionMaxAggregateInputType
  }

  export type EducationSectionGroupByOutputType = {
    id: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    portfolioId: string
    _count: EducationSectionCountAggregateOutputType | null
    _min: EducationSectionMinAggregateOutputType | null
    _max: EducationSectionMaxAggregateOutputType | null
  }

  type GetEducationSectionGroupByPayload<T extends EducationSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationSectionGroupByOutputType[P]>
            : GetScalarType<T[P], EducationSectionGroupByOutputType[P]>
        }
      >
    >


  export type EducationSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationHeading?: boolean
    educationDescription?: boolean
    educationSectionCode?: boolean
    portfolioId?: boolean
    education?: boolean | EducationSection$educationArgs<ExtArgs>
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
    _count?: boolean | EducationSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationSection"]>

  export type EducationSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationHeading?: boolean
    educationDescription?: boolean
    educationSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["educationSection"]>

  export type EducationSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationHeading?: boolean
    educationDescription?: boolean
    educationSectionCode?: boolean
    portfolioId?: boolean
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
  }, ExtArgs["result"]["educationSection"]>

  export type EducationSectionSelectScalar = {
    id?: boolean
    educationHeading?: boolean
    educationDescription?: boolean
    educationSectionCode?: boolean
    portfolioId?: boolean
  }

  export type EducationSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "educationHeading" | "educationDescription" | "educationSectionCode" | "portfolioId", ExtArgs["result"]["educationSection"]>
  export type EducationSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | EducationSection$educationArgs<ExtArgs>
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
    _count?: boolean | EducationSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducationSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
  }
  export type EducationSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | EducationSection$portfolioArgs<ExtArgs>
  }

  export type $EducationSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationSection"
    objects: {
      education: Prisma.$EducationPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      educationHeading: string
      educationDescription: string
      educationSectionCode: string
      portfolioId: string
    }, ExtArgs["result"]["educationSection"]>
    composites: {}
  }

  type EducationSectionGetPayload<S extends boolean | null | undefined | EducationSectionDefaultArgs> = $Result.GetResult<Prisma.$EducationSectionPayload, S>

  type EducationSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationSectionCountAggregateInputType | true
    }

  export interface EducationSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationSection'], meta: { name: 'EducationSection' } }
    /**
     * Find zero or one EducationSection that matches the filter.
     * @param {EducationSectionFindUniqueArgs} args - Arguments to find a EducationSection
     * @example
     * // Get one EducationSection
     * const educationSection = await prisma.educationSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationSectionFindUniqueArgs>(args: SelectSubset<T, EducationSectionFindUniqueArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EducationSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationSectionFindUniqueOrThrowArgs} args - Arguments to find a EducationSection
     * @example
     * // Get one EducationSection
     * const educationSection = await prisma.educationSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionFindFirstArgs} args - Arguments to find a EducationSection
     * @example
     * // Get one EducationSection
     * const educationSection = await prisma.educationSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationSectionFindFirstArgs>(args?: SelectSubset<T, EducationSectionFindFirstArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionFindFirstOrThrowArgs} args - Arguments to find a EducationSection
     * @example
     * // Get one EducationSection
     * const educationSection = await prisma.educationSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EducationSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationSections
     * const educationSections = await prisma.educationSection.findMany()
     * 
     * // Get first 10 EducationSections
     * const educationSections = await prisma.educationSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationSectionWithIdOnly = await prisma.educationSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationSectionFindManyArgs>(args?: SelectSubset<T, EducationSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EducationSection.
     * @param {EducationSectionCreateArgs} args - Arguments to create a EducationSection.
     * @example
     * // Create one EducationSection
     * const EducationSection = await prisma.educationSection.create({
     *   data: {
     *     // ... data to create a EducationSection
     *   }
     * })
     * 
     */
    create<T extends EducationSectionCreateArgs>(args: SelectSubset<T, EducationSectionCreateArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EducationSections.
     * @param {EducationSectionCreateManyArgs} args - Arguments to create many EducationSections.
     * @example
     * // Create many EducationSections
     * const educationSection = await prisma.educationSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationSectionCreateManyArgs>(args?: SelectSubset<T, EducationSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationSections and returns the data saved in the database.
     * @param {EducationSectionCreateManyAndReturnArgs} args - Arguments to create many EducationSections.
     * @example
     * // Create many EducationSections
     * const educationSection = await prisma.educationSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationSections and only return the `id`
     * const educationSectionWithIdOnly = await prisma.educationSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EducationSection.
     * @param {EducationSectionDeleteArgs} args - Arguments to delete one EducationSection.
     * @example
     * // Delete one EducationSection
     * const EducationSection = await prisma.educationSection.delete({
     *   where: {
     *     // ... filter to delete one EducationSection
     *   }
     * })
     * 
     */
    delete<T extends EducationSectionDeleteArgs>(args: SelectSubset<T, EducationSectionDeleteArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EducationSection.
     * @param {EducationSectionUpdateArgs} args - Arguments to update one EducationSection.
     * @example
     * // Update one EducationSection
     * const educationSection = await prisma.educationSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationSectionUpdateArgs>(args: SelectSubset<T, EducationSectionUpdateArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EducationSections.
     * @param {EducationSectionDeleteManyArgs} args - Arguments to filter EducationSections to delete.
     * @example
     * // Delete a few EducationSections
     * const { count } = await prisma.educationSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationSectionDeleteManyArgs>(args?: SelectSubset<T, EducationSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationSections
     * const educationSection = await prisma.educationSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationSectionUpdateManyArgs>(args: SelectSubset<T, EducationSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationSections and returns the data updated in the database.
     * @param {EducationSectionUpdateManyAndReturnArgs} args - Arguments to update many EducationSections.
     * @example
     * // Update many EducationSections
     * const educationSection = await prisma.educationSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EducationSections and only return the `id`
     * const educationSectionWithIdOnly = await prisma.educationSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EducationSection.
     * @param {EducationSectionUpsertArgs} args - Arguments to update or create a EducationSection.
     * @example
     * // Update or create a EducationSection
     * const educationSection = await prisma.educationSection.upsert({
     *   create: {
     *     // ... data to create a EducationSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationSection we want to update
     *   }
     * })
     */
    upsert<T extends EducationSectionUpsertArgs>(args: SelectSubset<T, EducationSectionUpsertArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EducationSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionCountArgs} args - Arguments to filter EducationSections to count.
     * @example
     * // Count the number of EducationSections
     * const count = await prisma.educationSection.count({
     *   where: {
     *     // ... the filter for the EducationSections we want to count
     *   }
     * })
    **/
    count<T extends EducationSectionCountArgs>(
      args?: Subset<T, EducationSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationSectionAggregateArgs>(args: Subset<T, EducationSectionAggregateArgs>): Prisma.PrismaPromise<GetEducationSectionAggregateType<T>>

    /**
     * Group by EducationSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationSectionGroupByArgs} args - Group by arguments.
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
      T extends EducationSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationSectionGroupByArgs['orderBy'] }
        : { orderBy?: EducationSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationSection model
   */
  readonly fields: EducationSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends EducationSection$educationArgs<ExtArgs> = {}>(args?: Subset<T, EducationSection$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends EducationSection$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, EducationSection$portfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EducationSection model
   */
  interface EducationSectionFieldRefs {
    readonly id: FieldRef<"EducationSection", 'String'>
    readonly educationHeading: FieldRef<"EducationSection", 'String'>
    readonly educationDescription: FieldRef<"EducationSection", 'String'>
    readonly educationSectionCode: FieldRef<"EducationSection", 'String'>
    readonly portfolioId: FieldRef<"EducationSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EducationSection findUnique
   */
  export type EducationSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter, which EducationSection to fetch.
     */
    where: EducationSectionWhereUniqueInput
  }

  /**
   * EducationSection findUniqueOrThrow
   */
  export type EducationSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter, which EducationSection to fetch.
     */
    where: EducationSectionWhereUniqueInput
  }

  /**
   * EducationSection findFirst
   */
  export type EducationSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter, which EducationSection to fetch.
     */
    where?: EducationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationSections to fetch.
     */
    orderBy?: EducationSectionOrderByWithRelationInput | EducationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationSections.
     */
    cursor?: EducationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationSections.
     */
    distinct?: EducationSectionScalarFieldEnum | EducationSectionScalarFieldEnum[]
  }

  /**
   * EducationSection findFirstOrThrow
   */
  export type EducationSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter, which EducationSection to fetch.
     */
    where?: EducationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationSections to fetch.
     */
    orderBy?: EducationSectionOrderByWithRelationInput | EducationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationSections.
     */
    cursor?: EducationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationSections.
     */
    distinct?: EducationSectionScalarFieldEnum | EducationSectionScalarFieldEnum[]
  }

  /**
   * EducationSection findMany
   */
  export type EducationSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter, which EducationSections to fetch.
     */
    where?: EducationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationSections to fetch.
     */
    orderBy?: EducationSectionOrderByWithRelationInput | EducationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationSections.
     */
    cursor?: EducationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationSections.
     */
    skip?: number
    distinct?: EducationSectionScalarFieldEnum | EducationSectionScalarFieldEnum[]
  }

  /**
   * EducationSection create
   */
  export type EducationSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a EducationSection.
     */
    data: XOR<EducationSectionCreateInput, EducationSectionUncheckedCreateInput>
  }

  /**
   * EducationSection createMany
   */
  export type EducationSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationSections.
     */
    data: EducationSectionCreateManyInput | EducationSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationSection createManyAndReturn
   */
  export type EducationSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * The data used to create many EducationSections.
     */
    data: EducationSectionCreateManyInput | EducationSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationSection update
   */
  export type EducationSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a EducationSection.
     */
    data: XOR<EducationSectionUpdateInput, EducationSectionUncheckedUpdateInput>
    /**
     * Choose, which EducationSection to update.
     */
    where: EducationSectionWhereUniqueInput
  }

  /**
   * EducationSection updateMany
   */
  export type EducationSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationSections.
     */
    data: XOR<EducationSectionUpdateManyMutationInput, EducationSectionUncheckedUpdateManyInput>
    /**
     * Filter which EducationSections to update
     */
    where?: EducationSectionWhereInput
    /**
     * Limit how many EducationSections to update.
     */
    limit?: number
  }

  /**
   * EducationSection updateManyAndReturn
   */
  export type EducationSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * The data used to update EducationSections.
     */
    data: XOR<EducationSectionUpdateManyMutationInput, EducationSectionUncheckedUpdateManyInput>
    /**
     * Filter which EducationSections to update
     */
    where?: EducationSectionWhereInput
    /**
     * Limit how many EducationSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationSection upsert
   */
  export type EducationSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the EducationSection to update in case it exists.
     */
    where: EducationSectionWhereUniqueInput
    /**
     * In case the EducationSection found by the `where` argument doesn't exist, create a new EducationSection with this data.
     */
    create: XOR<EducationSectionCreateInput, EducationSectionUncheckedCreateInput>
    /**
     * In case the EducationSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationSectionUpdateInput, EducationSectionUncheckedUpdateInput>
  }

  /**
   * EducationSection delete
   */
  export type EducationSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
    /**
     * Filter which EducationSection to delete.
     */
    where: EducationSectionWhereUniqueInput
  }

  /**
   * EducationSection deleteMany
   */
  export type EducationSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationSections to delete
     */
    where?: EducationSectionWhereInput
    /**
     * Limit how many EducationSections to delete.
     */
    limit?: number
  }

  /**
   * EducationSection.education
   */
  export type EducationSection$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * EducationSection.portfolio
   */
  export type EducationSection$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * EducationSection without action
   */
  export type EducationSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationSection
     */
    select?: EducationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationSection
     */
    omit?: EducationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationSectionInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    educationName: string | null
    joiningDate: string | null
    educationDescription: string | null
    educationSectionId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    educationName: string | null
    joiningDate: string | null
    educationDescription: string | null
    educationSectionId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    educationName: number
    joiningDate: number
    educationDescription: number
    educationSectionId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    educationName?: true
    joiningDate?: true
    educationDescription?: true
    educationSectionId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    educationName?: true
    joiningDate?: true
    educationDescription?: true
    educationSectionId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    educationName?: true
    joiningDate?: true
    educationDescription?: true
    educationSectionId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    educationName: string
    joiningDate: string
    educationDescription: string
    educationSectionId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationName?: boolean
    joiningDate?: boolean
    educationDescription?: boolean
    educationSectionId?: boolean
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationName?: boolean
    joiningDate?: boolean
    educationDescription?: boolean
    educationSectionId?: boolean
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationName?: boolean
    joiningDate?: boolean
    educationDescription?: boolean
    educationSectionId?: boolean
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    educationName?: boolean
    joiningDate?: boolean
    educationDescription?: boolean
    educationSectionId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "educationName" | "joiningDate" | "educationDescription" | "educationSectionId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationSection?: boolean | EducationSectionDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      educationSection: Prisma.$EducationSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      educationName: string
      joiningDate: string
      educationDescription: string
      educationSectionId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    educationSection<T extends EducationSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducationSectionDefaultArgs<ExtArgs>>): Prisma__EducationSectionClient<$Result.GetResult<Prisma.$EducationSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly educationName: FieldRef<"Education", 'String'>
    readonly joiningDate: FieldRef<"Education", 'String'>
    readonly educationDescription: FieldRef<"Education", 'String'>
    readonly educationSectionId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
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


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    userHeading: 'userHeading',
    userBio: 'userBio',
    userResumeLink: 'userResumeLink',
    userEmail: 'userEmail',
    userGithubId: 'userGithubId',
    welcomeCode: 'welcomeCode',
    views: 'views',
    likes: 'likes'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const AboutSectionScalarFieldEnum: {
    id: 'id',
    aboutHeading: 'aboutHeading',
    about: 'about',
    AboutSectionCode: 'AboutSectionCode',
    portfolioId: 'portfolioId'
  };

  export type AboutSectionScalarFieldEnum = (typeof AboutSectionScalarFieldEnum)[keyof typeof AboutSectionScalarFieldEnum]


  export const ProjectSectionScalarFieldEnum: {
    id: 'id',
    projectHeading: 'projectHeading',
    portfolioId: 'portfolioId',
    projectSectionCode: 'projectSectionCode'
  };

  export type ProjectSectionScalarFieldEnum = (typeof ProjectSectionScalarFieldEnum)[keyof typeof ProjectSectionScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    projectName: 'projectName',
    projectHeading: 'projectHeading',
    projectDescription: 'projectDescription',
    techStack: 'techStack',
    features: 'features',
    challenges: 'challenges',
    learnings: 'learnings',
    githubLink: 'githubLink',
    deployedLink: 'deployedLink',
    projectSectionId: 'projectSectionId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SkillSectionScalarFieldEnum: {
    id: 'id',
    skillHeading: 'skillHeading',
    skillDescription: 'skillDescription',
    skillSectionCode: 'skillSectionCode',
    portfolioId: 'portfolioId'
  };

  export type SkillSectionScalarFieldEnum = (typeof SkillSectionScalarFieldEnum)[keyof typeof SkillSectionScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    skillIcon: 'skillIcon',
    skillName: 'skillName',
    skillIconColor: 'skillIconColor',
    skillSectionId: 'skillSectionId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ExperienceSectionScalarFieldEnum: {
    id: 'id',
    experienceHeading: 'experienceHeading',
    experienceDescription: 'experienceDescription',
    portfolioId: 'portfolioId',
    experienceSectionCode: 'experienceSectionCode'
  };

  export type ExperienceSectionScalarFieldEnum = (typeof ExperienceSectionScalarFieldEnum)[keyof typeof ExperienceSectionScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    experienceName: 'experienceName',
    joiningDate: 'joiningDate',
    experienceDescription: 'experienceDescription',
    experienceSectionId: 'experienceSectionId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationSectionScalarFieldEnum: {
    id: 'id',
    educationHeading: 'educationHeading',
    educationDescription: 'educationDescription',
    educationSectionCode: 'educationSectionCode',
    portfolioId: 'portfolioId'
  };

  export type EducationSectionScalarFieldEnum = (typeof EducationSectionScalarFieldEnum)[keyof typeof EducationSectionScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    educationName: 'educationName',
    joiningDate: 'joiningDate',
    educationDescription: 'educationDescription',
    educationSectionId: 'educationSectionId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


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


  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    userName?: StringFilter<"Portfolio"> | string
    userHeading?: StringFilter<"Portfolio"> | string
    userBio?: StringFilter<"Portfolio"> | string
    userResumeLink?: StringFilter<"Portfolio"> | string
    userEmail?: StringFilter<"Portfolio"> | string
    userGithubId?: StringFilter<"Portfolio"> | string
    welcomeCode?: StringFilter<"Portfolio"> | string
    views?: IntFilter<"Portfolio"> | number
    likes?: IntFilter<"Portfolio"> | number
    about?: XOR<AboutSectionNullableScalarRelationFilter, AboutSectionWhereInput> | null
    project?: XOR<ProjectSectionNullableScalarRelationFilter, ProjectSectionWhereInput> | null
    skill?: XOR<SkillSectionNullableScalarRelationFilter, SkillSectionWhereInput> | null
    experience?: XOR<ExperienceSectionNullableScalarRelationFilter, ExperienceSectionWhereInput> | null
    education?: XOR<EducationSectionNullableScalarRelationFilter, EducationSectionWhereInput> | null
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    userHeading?: SortOrder
    userBio?: SortOrder
    userResumeLink?: SortOrder
    userEmail?: SortOrder
    userGithubId?: SortOrder
    welcomeCode?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    about?: AboutSectionOrderByWithRelationInput
    project?: ProjectSectionOrderByWithRelationInput
    skill?: SkillSectionOrderByWithRelationInput
    experience?: ExperienceSectionOrderByWithRelationInput
    education?: EducationSectionOrderByWithRelationInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    userName?: StringFilter<"Portfolio"> | string
    userHeading?: StringFilter<"Portfolio"> | string
    userBio?: StringFilter<"Portfolio"> | string
    userResumeLink?: StringFilter<"Portfolio"> | string
    userEmail?: StringFilter<"Portfolio"> | string
    userGithubId?: StringFilter<"Portfolio"> | string
    welcomeCode?: StringFilter<"Portfolio"> | string
    views?: IntFilter<"Portfolio"> | number
    likes?: IntFilter<"Portfolio"> | number
    about?: XOR<AboutSectionNullableScalarRelationFilter, AboutSectionWhereInput> | null
    project?: XOR<ProjectSectionNullableScalarRelationFilter, ProjectSectionWhereInput> | null
    skill?: XOR<SkillSectionNullableScalarRelationFilter, SkillSectionWhereInput> | null
    experience?: XOR<ExperienceSectionNullableScalarRelationFilter, ExperienceSectionWhereInput> | null
    education?: XOR<EducationSectionNullableScalarRelationFilter, EducationSectionWhereInput> | null
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    userHeading?: SortOrder
    userBio?: SortOrder
    userResumeLink?: SortOrder
    userEmail?: SortOrder
    userGithubId?: SortOrder
    welcomeCode?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Portfolio"> | string
    userName?: StringWithAggregatesFilter<"Portfolio"> | string
    userHeading?: StringWithAggregatesFilter<"Portfolio"> | string
    userBio?: StringWithAggregatesFilter<"Portfolio"> | string
    userResumeLink?: StringWithAggregatesFilter<"Portfolio"> | string
    userEmail?: StringWithAggregatesFilter<"Portfolio"> | string
    userGithubId?: StringWithAggregatesFilter<"Portfolio"> | string
    welcomeCode?: StringWithAggregatesFilter<"Portfolio"> | string
    views?: IntWithAggregatesFilter<"Portfolio"> | number
    likes?: IntWithAggregatesFilter<"Portfolio"> | number
  }

  export type AboutSectionWhereInput = {
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    id?: StringFilter<"AboutSection"> | string
    aboutHeading?: StringFilter<"AboutSection"> | string
    about?: StringFilter<"AboutSection"> | string
    AboutSectionCode?: StringFilter<"AboutSection"> | string
    portfolioId?: StringNullableFilter<"AboutSection"> | string | null
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type AboutSectionOrderByWithRelationInput = {
    id?: SortOrder
    aboutHeading?: SortOrder
    about?: SortOrder
    AboutSectionCode?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type AboutSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId?: string
    AND?: AboutSectionWhereInput | AboutSectionWhereInput[]
    OR?: AboutSectionWhereInput[]
    NOT?: AboutSectionWhereInput | AboutSectionWhereInput[]
    aboutHeading?: StringFilter<"AboutSection"> | string
    about?: StringFilter<"AboutSection"> | string
    AboutSectionCode?: StringFilter<"AboutSection"> | string
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type AboutSectionOrderByWithAggregationInput = {
    id?: SortOrder
    aboutHeading?: SortOrder
    about?: SortOrder
    AboutSectionCode?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    _count?: AboutSectionCountOrderByAggregateInput
    _max?: AboutSectionMaxOrderByAggregateInput
    _min?: AboutSectionMinOrderByAggregateInput
  }

  export type AboutSectionScalarWhereWithAggregatesInput = {
    AND?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    OR?: AboutSectionScalarWhereWithAggregatesInput[]
    NOT?: AboutSectionScalarWhereWithAggregatesInput | AboutSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutSection"> | string
    aboutHeading?: StringWithAggregatesFilter<"AboutSection"> | string
    about?: StringWithAggregatesFilter<"AboutSection"> | string
    AboutSectionCode?: StringWithAggregatesFilter<"AboutSection"> | string
    portfolioId?: StringNullableWithAggregatesFilter<"AboutSection"> | string | null
  }

  export type ProjectSectionWhereInput = {
    AND?: ProjectSectionWhereInput | ProjectSectionWhereInput[]
    OR?: ProjectSectionWhereInput[]
    NOT?: ProjectSectionWhereInput | ProjectSectionWhereInput[]
    id?: StringFilter<"ProjectSection"> | string
    projectHeading?: StringFilter<"ProjectSection"> | string
    portfolioId?: StringNullableFilter<"ProjectSection"> | string | null
    projectSectionCode?: StringFilter<"ProjectSection"> | string
    projects?: ProjectListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type ProjectSectionOrderByWithRelationInput = {
    id?: SortOrder
    projectHeading?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    projectSectionCode?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type ProjectSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId?: string
    AND?: ProjectSectionWhereInput | ProjectSectionWhereInput[]
    OR?: ProjectSectionWhereInput[]
    NOT?: ProjectSectionWhereInput | ProjectSectionWhereInput[]
    projectHeading?: StringFilter<"ProjectSection"> | string
    projectSectionCode?: StringFilter<"ProjectSection"> | string
    projects?: ProjectListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type ProjectSectionOrderByWithAggregationInput = {
    id?: SortOrder
    projectHeading?: SortOrder
    portfolioId?: SortOrderInput | SortOrder
    projectSectionCode?: SortOrder
    _count?: ProjectSectionCountOrderByAggregateInput
    _max?: ProjectSectionMaxOrderByAggregateInput
    _min?: ProjectSectionMinOrderByAggregateInput
  }

  export type ProjectSectionScalarWhereWithAggregatesInput = {
    AND?: ProjectSectionScalarWhereWithAggregatesInput | ProjectSectionScalarWhereWithAggregatesInput[]
    OR?: ProjectSectionScalarWhereWithAggregatesInput[]
    NOT?: ProjectSectionScalarWhereWithAggregatesInput | ProjectSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectSection"> | string
    projectHeading?: StringWithAggregatesFilter<"ProjectSection"> | string
    portfolioId?: StringNullableWithAggregatesFilter<"ProjectSection"> | string | null
    projectSectionCode?: StringWithAggregatesFilter<"ProjectSection"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    projectName?: StringFilter<"Project"> | string
    projectHeading?: StringFilter<"Project"> | string
    projectDescription?: StringFilter<"Project"> | string
    techStack?: StringNullableListFilter<"Project">
    features?: StringNullableListFilter<"Project">
    challenges?: StringNullableListFilter<"Project">
    learnings?: StringNullableListFilter<"Project">
    githubLink?: StringFilter<"Project"> | string
    deployedLink?: StringNullableFilter<"Project"> | string | null
    projectSectionId?: StringFilter<"Project"> | string
    projectSection?: XOR<ProjectSectionScalarRelationFilter, ProjectSectionWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    projectName?: SortOrder
    projectHeading?: SortOrder
    projectDescription?: SortOrder
    techStack?: SortOrder
    features?: SortOrder
    challenges?: SortOrder
    learnings?: SortOrder
    githubLink?: SortOrder
    deployedLink?: SortOrderInput | SortOrder
    projectSectionId?: SortOrder
    projectSection?: ProjectSectionOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectName?: StringFilter<"Project"> | string
    projectHeading?: StringFilter<"Project"> | string
    projectDescription?: StringFilter<"Project"> | string
    techStack?: StringNullableListFilter<"Project">
    features?: StringNullableListFilter<"Project">
    challenges?: StringNullableListFilter<"Project">
    learnings?: StringNullableListFilter<"Project">
    githubLink?: StringFilter<"Project"> | string
    deployedLink?: StringNullableFilter<"Project"> | string | null
    projectSectionId?: StringFilter<"Project"> | string
    projectSection?: XOR<ProjectSectionScalarRelationFilter, ProjectSectionWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    projectName?: SortOrder
    projectHeading?: SortOrder
    projectDescription?: SortOrder
    techStack?: SortOrder
    features?: SortOrder
    challenges?: SortOrder
    learnings?: SortOrder
    githubLink?: SortOrder
    deployedLink?: SortOrderInput | SortOrder
    projectSectionId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    projectName?: StringWithAggregatesFilter<"Project"> | string
    projectHeading?: StringWithAggregatesFilter<"Project"> | string
    projectDescription?: StringWithAggregatesFilter<"Project"> | string
    techStack?: StringNullableListFilter<"Project">
    features?: StringNullableListFilter<"Project">
    challenges?: StringNullableListFilter<"Project">
    learnings?: StringNullableListFilter<"Project">
    githubLink?: StringWithAggregatesFilter<"Project"> | string
    deployedLink?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectSectionId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type SkillSectionWhereInput = {
    AND?: SkillSectionWhereInput | SkillSectionWhereInput[]
    OR?: SkillSectionWhereInput[]
    NOT?: SkillSectionWhereInput | SkillSectionWhereInput[]
    id?: StringFilter<"SkillSection"> | string
    skillHeading?: StringFilter<"SkillSection"> | string
    skillDescription?: StringFilter<"SkillSection"> | string
    skillSectionCode?: StringFilter<"SkillSection"> | string
    portfolioId?: StringFilter<"SkillSection"> | string
    skills?: SkillListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type SkillSectionOrderByWithRelationInput = {
    id?: SortOrder
    skillHeading?: SortOrder
    skillDescription?: SortOrder
    skillSectionCode?: SortOrder
    portfolioId?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type SkillSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId?: string
    AND?: SkillSectionWhereInput | SkillSectionWhereInput[]
    OR?: SkillSectionWhereInput[]
    NOT?: SkillSectionWhereInput | SkillSectionWhereInput[]
    skillHeading?: StringFilter<"SkillSection"> | string
    skillDescription?: StringFilter<"SkillSection"> | string
    skillSectionCode?: StringFilter<"SkillSection"> | string
    skills?: SkillListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type SkillSectionOrderByWithAggregationInput = {
    id?: SortOrder
    skillHeading?: SortOrder
    skillDescription?: SortOrder
    skillSectionCode?: SortOrder
    portfolioId?: SortOrder
    _count?: SkillSectionCountOrderByAggregateInput
    _max?: SkillSectionMaxOrderByAggregateInput
    _min?: SkillSectionMinOrderByAggregateInput
  }

  export type SkillSectionScalarWhereWithAggregatesInput = {
    AND?: SkillSectionScalarWhereWithAggregatesInput | SkillSectionScalarWhereWithAggregatesInput[]
    OR?: SkillSectionScalarWhereWithAggregatesInput[]
    NOT?: SkillSectionScalarWhereWithAggregatesInput | SkillSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillSection"> | string
    skillHeading?: StringWithAggregatesFilter<"SkillSection"> | string
    skillDescription?: StringWithAggregatesFilter<"SkillSection"> | string
    skillSectionCode?: StringWithAggregatesFilter<"SkillSection"> | string
    portfolioId?: StringWithAggregatesFilter<"SkillSection"> | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    skillIcon?: StringFilter<"Skill"> | string
    skillName?: StringFilter<"Skill"> | string
    skillIconColor?: StringFilter<"Skill"> | string
    skillSectionId?: StringFilter<"Skill"> | string
    skillsection?: XOR<SkillSectionScalarRelationFilter, SkillSectionWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillIcon?: SortOrder
    skillName?: SortOrder
    skillIconColor?: SortOrder
    skillSectionId?: SortOrder
    skillsection?: SkillSectionOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    skillIcon?: StringFilter<"Skill"> | string
    skillName?: StringFilter<"Skill"> | string
    skillIconColor?: StringFilter<"Skill"> | string
    skillSectionId?: StringFilter<"Skill"> | string
    skillsection?: XOR<SkillSectionScalarRelationFilter, SkillSectionWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillIcon?: SortOrder
    skillName?: SortOrder
    skillIconColor?: SortOrder
    skillSectionId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    skillIcon?: StringWithAggregatesFilter<"Skill"> | string
    skillName?: StringWithAggregatesFilter<"Skill"> | string
    skillIconColor?: StringWithAggregatesFilter<"Skill"> | string
    skillSectionId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type ExperienceSectionWhereInput = {
    AND?: ExperienceSectionWhereInput | ExperienceSectionWhereInput[]
    OR?: ExperienceSectionWhereInput[]
    NOT?: ExperienceSectionWhereInput | ExperienceSectionWhereInput[]
    id?: StringFilter<"ExperienceSection"> | string
    experienceHeading?: StringFilter<"ExperienceSection"> | string
    experienceDescription?: StringFilter<"ExperienceSection"> | string
    portfolioId?: StringFilter<"ExperienceSection"> | string
    experienceSectionCode?: StringFilter<"ExperienceSection"> | string
    experience?: ExperienceListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type ExperienceSectionOrderByWithRelationInput = {
    id?: SortOrder
    experienceHeading?: SortOrder
    experienceDescription?: SortOrder
    portfolioId?: SortOrder
    experienceSectionCode?: SortOrder
    experience?: ExperienceOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type ExperienceSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId?: string
    AND?: ExperienceSectionWhereInput | ExperienceSectionWhereInput[]
    OR?: ExperienceSectionWhereInput[]
    NOT?: ExperienceSectionWhereInput | ExperienceSectionWhereInput[]
    experienceHeading?: StringFilter<"ExperienceSection"> | string
    experienceDescription?: StringFilter<"ExperienceSection"> | string
    experienceSectionCode?: StringFilter<"ExperienceSection"> | string
    experience?: ExperienceListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type ExperienceSectionOrderByWithAggregationInput = {
    id?: SortOrder
    experienceHeading?: SortOrder
    experienceDescription?: SortOrder
    portfolioId?: SortOrder
    experienceSectionCode?: SortOrder
    _count?: ExperienceSectionCountOrderByAggregateInput
    _max?: ExperienceSectionMaxOrderByAggregateInput
    _min?: ExperienceSectionMinOrderByAggregateInput
  }

  export type ExperienceSectionScalarWhereWithAggregatesInput = {
    AND?: ExperienceSectionScalarWhereWithAggregatesInput | ExperienceSectionScalarWhereWithAggregatesInput[]
    OR?: ExperienceSectionScalarWhereWithAggregatesInput[]
    NOT?: ExperienceSectionScalarWhereWithAggregatesInput | ExperienceSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExperienceSection"> | string
    experienceHeading?: StringWithAggregatesFilter<"ExperienceSection"> | string
    experienceDescription?: StringWithAggregatesFilter<"ExperienceSection"> | string
    portfolioId?: StringWithAggregatesFilter<"ExperienceSection"> | string
    experienceSectionCode?: StringWithAggregatesFilter<"ExperienceSection"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    experienceName?: StringFilter<"Experience"> | string
    joiningDate?: DateTimeFilter<"Experience"> | Date | string
    experienceDescription?: StringFilter<"Experience"> | string
    experienceSectionId?: StringFilter<"Experience"> | string
    experienceSection?: XOR<ExperienceSectionScalarRelationFilter, ExperienceSectionWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    experienceName?: SortOrder
    joiningDate?: SortOrder
    experienceDescription?: SortOrder
    experienceSectionId?: SortOrder
    experienceSection?: ExperienceSectionOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    experienceName?: StringFilter<"Experience"> | string
    joiningDate?: DateTimeFilter<"Experience"> | Date | string
    experienceDescription?: StringFilter<"Experience"> | string
    experienceSectionId?: StringFilter<"Experience"> | string
    experienceSection?: XOR<ExperienceSectionScalarRelationFilter, ExperienceSectionWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    experienceName?: SortOrder
    joiningDate?: SortOrder
    experienceDescription?: SortOrder
    experienceSectionId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    experienceName?: StringWithAggregatesFilter<"Experience"> | string
    joiningDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    experienceDescription?: StringWithAggregatesFilter<"Experience"> | string
    experienceSectionId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type EducationSectionWhereInput = {
    AND?: EducationSectionWhereInput | EducationSectionWhereInput[]
    OR?: EducationSectionWhereInput[]
    NOT?: EducationSectionWhereInput | EducationSectionWhereInput[]
    id?: StringFilter<"EducationSection"> | string
    educationHeading?: StringFilter<"EducationSection"> | string
    educationDescription?: StringFilter<"EducationSection"> | string
    educationSectionCode?: StringFilter<"EducationSection"> | string
    portfolioId?: StringFilter<"EducationSection"> | string
    education?: EducationListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }

  export type EducationSectionOrderByWithRelationInput = {
    id?: SortOrder
    educationHeading?: SortOrder
    educationDescription?: SortOrder
    educationSectionCode?: SortOrder
    portfolioId?: SortOrder
    education?: EducationOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type EducationSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId?: string
    AND?: EducationSectionWhereInput | EducationSectionWhereInput[]
    OR?: EducationSectionWhereInput[]
    NOT?: EducationSectionWhereInput | EducationSectionWhereInput[]
    educationHeading?: StringFilter<"EducationSection"> | string
    educationDescription?: StringFilter<"EducationSection"> | string
    educationSectionCode?: StringFilter<"EducationSection"> | string
    education?: EducationListRelationFilter
    portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
  }, "id" | "portfolioId">

  export type EducationSectionOrderByWithAggregationInput = {
    id?: SortOrder
    educationHeading?: SortOrder
    educationDescription?: SortOrder
    educationSectionCode?: SortOrder
    portfolioId?: SortOrder
    _count?: EducationSectionCountOrderByAggregateInput
    _max?: EducationSectionMaxOrderByAggregateInput
    _min?: EducationSectionMinOrderByAggregateInput
  }

  export type EducationSectionScalarWhereWithAggregatesInput = {
    AND?: EducationSectionScalarWhereWithAggregatesInput | EducationSectionScalarWhereWithAggregatesInput[]
    OR?: EducationSectionScalarWhereWithAggregatesInput[]
    NOT?: EducationSectionScalarWhereWithAggregatesInput | EducationSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EducationSection"> | string
    educationHeading?: StringWithAggregatesFilter<"EducationSection"> | string
    educationDescription?: StringWithAggregatesFilter<"EducationSection"> | string
    educationSectionCode?: StringWithAggregatesFilter<"EducationSection"> | string
    portfolioId?: StringWithAggregatesFilter<"EducationSection"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    educationName?: StringFilter<"Education"> | string
    joiningDate?: StringFilter<"Education"> | string
    educationDescription?: StringFilter<"Education"> | string
    educationSectionId?: StringFilter<"Education"> | string
    educationSection?: XOR<EducationSectionScalarRelationFilter, EducationSectionWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    educationName?: SortOrder
    joiningDate?: SortOrder
    educationDescription?: SortOrder
    educationSectionId?: SortOrder
    educationSection?: EducationSectionOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    educationName?: StringFilter<"Education"> | string
    joiningDate?: StringFilter<"Education"> | string
    educationDescription?: StringFilter<"Education"> | string
    educationSectionId?: StringFilter<"Education"> | string
    educationSection?: XOR<EducationSectionScalarRelationFilter, EducationSectionWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    educationName?: SortOrder
    joiningDate?: SortOrder
    educationDescription?: SortOrder
    educationSectionId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    educationName?: StringWithAggregatesFilter<"Education"> | string
    joiningDate?: StringWithAggregatesFilter<"Education"> | string
    educationDescription?: StringWithAggregatesFilter<"Education"> | string
    educationSectionId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type PortfolioCreateInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
  }

  export type PortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type AboutSectionCreateInput = {
    id?: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
    portfolio?: PortfolioCreateNestedOneWithoutAboutInput
  }

  export type AboutSectionUncheckedCreateInput = {
    id?: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
    portfolioId?: string | null
  }

  export type AboutSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
    portfolio?: PortfolioUpdateOneWithoutAboutNestedInput
  }

  export type AboutSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AboutSectionCreateManyInput = {
    id?: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
    portfolioId?: string | null
  }

  export type AboutSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type AboutSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectSectionCreateInput = {
    id?: string
    projectHeading: string
    projectSectionCode: string
    projects?: ProjectCreateNestedManyWithoutProjectSectionInput
    portfolio?: PortfolioCreateNestedOneWithoutProjectInput
  }

  export type ProjectSectionUncheckedCreateInput = {
    id?: string
    projectHeading: string
    portfolioId?: string | null
    projectSectionCode: string
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectSectionInput
  }

  export type ProjectSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectSectionCode?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutProjectSectionNestedInput
    portfolio?: PortfolioUpdateOneWithoutProjectNestedInput
  }

  export type ProjectSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    portfolioId?: NullableStringFieldUpdateOperationsInput | string | null
    projectSectionCode?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutProjectSectionNestedInput
  }

  export type ProjectSectionCreateManyInput = {
    id?: string
    projectHeading: string
    portfolioId?: string | null
    projectSectionCode: string
  }

  export type ProjectSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    portfolioId?: NullableStringFieldUpdateOperationsInput | string | null
    projectSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
    projectSection: ProjectSectionCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
    projectSectionId: string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
    projectSection?: ProjectSectionUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
    projectSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
    projectSectionId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
    projectSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillSectionCreateInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    skills?: SkillCreateNestedManyWithoutSkillsectionInput
    portfolio?: PortfolioCreateNestedOneWithoutSkillInput
  }

  export type SkillSectionUncheckedCreateInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    portfolioId: string
    skills?: SkillUncheckedCreateNestedManyWithoutSkillsectionInput
  }

  export type SkillSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateManyWithoutSkillsectionNestedInput
    portfolio?: PortfolioUpdateOneWithoutSkillNestedInput
  }

  export type SkillSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutSkillsectionNestedInput
  }

  export type SkillSectionCreateManyInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    portfolioId: string
  }

  export type SkillSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type SkillSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
    skillsection: SkillSectionCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
    skillSectionId: string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
    skillsection?: SkillSectionUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
    skillSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
    skillSectionId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
    skillSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceSectionCreateInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    experienceSectionCode: string
    experience?: ExperienceCreateNestedManyWithoutExperienceSectionInput
    portfolio?: PortfolioCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceSectionUncheckedCreateInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    portfolioId: string
    experienceSectionCode: string
    experience?: ExperienceUncheckedCreateNestedManyWithoutExperienceSectionInput
  }

  export type ExperienceSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUpdateManyWithoutExperienceSectionNestedInput
    portfolio?: PortfolioUpdateOneWithoutExperienceNestedInput
  }

  export type ExperienceSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUncheckedUpdateManyWithoutExperienceSectionNestedInput
  }

  export type ExperienceSectionCreateManyInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    portfolioId: string
    experienceSectionCode: string
  }

  export type ExperienceSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
    experienceSection: ExperienceSectionCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
    experienceSectionId: string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSection?: ExperienceSectionUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
    experienceSectionId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationSectionCreateInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    education?: EducationCreateNestedManyWithoutEducationSectionInput
    portfolio?: PortfolioCreateNestedOneWithoutEducationInput
  }

  export type EducationSectionUncheckedCreateInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    portfolioId: string
    education?: EducationUncheckedCreateNestedManyWithoutEducationSectionInput
  }

  export type EducationSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    education?: EducationUpdateManyWithoutEducationSectionNestedInput
    portfolio?: PortfolioUpdateOneWithoutEducationNestedInput
  }

  export type EducationSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    education?: EducationUncheckedUpdateManyWithoutEducationSectionNestedInput
  }

  export type EducationSectionCreateManyInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    portfolioId: string
  }

  export type EducationSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type EducationSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
    educationSection: EducationSectionCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
    educationSectionId: string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSection?: EducationSectionUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
    educationSectionId: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionId?: StringFieldUpdateOperationsInput | string
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

  export type AboutSectionNullableScalarRelationFilter = {
    is?: AboutSectionWhereInput | null
    isNot?: AboutSectionWhereInput | null
  }

  export type ProjectSectionNullableScalarRelationFilter = {
    is?: ProjectSectionWhereInput | null
    isNot?: ProjectSectionWhereInput | null
  }

  export type SkillSectionNullableScalarRelationFilter = {
    is?: SkillSectionWhereInput | null
    isNot?: SkillSectionWhereInput | null
  }

  export type ExperienceSectionNullableScalarRelationFilter = {
    is?: ExperienceSectionWhereInput | null
    isNot?: ExperienceSectionWhereInput | null
  }

  export type EducationSectionNullableScalarRelationFilter = {
    is?: EducationSectionWhereInput | null
    isNot?: EducationSectionWhereInput | null
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userHeading?: SortOrder
    userBio?: SortOrder
    userResumeLink?: SortOrder
    userEmail?: SortOrder
    userGithubId?: SortOrder
    welcomeCode?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userHeading?: SortOrder
    userBio?: SortOrder
    userResumeLink?: SortOrder
    userEmail?: SortOrder
    userGithubId?: SortOrder
    welcomeCode?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    userHeading?: SortOrder
    userBio?: SortOrder
    userResumeLink?: SortOrder
    userEmail?: SortOrder
    userGithubId?: SortOrder
    welcomeCode?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
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

  export type PortfolioNullableScalarRelationFilter = {
    is?: PortfolioWhereInput | null
    isNot?: PortfolioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AboutSectionCountOrderByAggregateInput = {
    id?: SortOrder
    aboutHeading?: SortOrder
    about?: SortOrder
    AboutSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type AboutSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    aboutHeading?: SortOrder
    about?: SortOrder
    AboutSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type AboutSectionMinOrderByAggregateInput = {
    id?: SortOrder
    aboutHeading?: SortOrder
    about?: SortOrder
    AboutSectionCode?: SortOrder
    portfolioId?: SortOrder
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectSectionCountOrderByAggregateInput = {
    id?: SortOrder
    projectHeading?: SortOrder
    portfolioId?: SortOrder
    projectSectionCode?: SortOrder
  }

  export type ProjectSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectHeading?: SortOrder
    portfolioId?: SortOrder
    projectSectionCode?: SortOrder
  }

  export type ProjectSectionMinOrderByAggregateInput = {
    id?: SortOrder
    projectHeading?: SortOrder
    portfolioId?: SortOrder
    projectSectionCode?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectSectionScalarRelationFilter = {
    is?: ProjectSectionWhereInput
    isNot?: ProjectSectionWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    projectHeading?: SortOrder
    projectDescription?: SortOrder
    techStack?: SortOrder
    features?: SortOrder
    challenges?: SortOrder
    learnings?: SortOrder
    githubLink?: SortOrder
    deployedLink?: SortOrder
    projectSectionId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    projectHeading?: SortOrder
    projectDescription?: SortOrder
    githubLink?: SortOrder
    deployedLink?: SortOrder
    projectSectionId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    projectHeading?: SortOrder
    projectDescription?: SortOrder
    githubLink?: SortOrder
    deployedLink?: SortOrder
    projectSectionId?: SortOrder
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillSectionCountOrderByAggregateInput = {
    id?: SortOrder
    skillHeading?: SortOrder
    skillDescription?: SortOrder
    skillSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type SkillSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    skillHeading?: SortOrder
    skillDescription?: SortOrder
    skillSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type SkillSectionMinOrderByAggregateInput = {
    id?: SortOrder
    skillHeading?: SortOrder
    skillDescription?: SortOrder
    skillSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type SkillSectionScalarRelationFilter = {
    is?: SkillSectionWhereInput
    isNot?: SkillSectionWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillIcon?: SortOrder
    skillName?: SortOrder
    skillIconColor?: SortOrder
    skillSectionId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillIcon?: SortOrder
    skillName?: SortOrder
    skillIconColor?: SortOrder
    skillSectionId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillIcon?: SortOrder
    skillName?: SortOrder
    skillIconColor?: SortOrder
    skillSectionId?: SortOrder
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceSectionCountOrderByAggregateInput = {
    id?: SortOrder
    experienceHeading?: SortOrder
    experienceDescription?: SortOrder
    portfolioId?: SortOrder
    experienceSectionCode?: SortOrder
  }

  export type ExperienceSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    experienceHeading?: SortOrder
    experienceDescription?: SortOrder
    portfolioId?: SortOrder
    experienceSectionCode?: SortOrder
  }

  export type ExperienceSectionMinOrderByAggregateInput = {
    id?: SortOrder
    experienceHeading?: SortOrder
    experienceDescription?: SortOrder
    portfolioId?: SortOrder
    experienceSectionCode?: SortOrder
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

  export type ExperienceSectionScalarRelationFilter = {
    is?: ExperienceSectionWhereInput
    isNot?: ExperienceSectionWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    experienceName?: SortOrder
    joiningDate?: SortOrder
    experienceDescription?: SortOrder
    experienceSectionId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    experienceName?: SortOrder
    joiningDate?: SortOrder
    experienceDescription?: SortOrder
    experienceSectionId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    experienceName?: SortOrder
    joiningDate?: SortOrder
    experienceDescription?: SortOrder
    experienceSectionId?: SortOrder
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

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationSectionCountOrderByAggregateInput = {
    id?: SortOrder
    educationHeading?: SortOrder
    educationDescription?: SortOrder
    educationSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type EducationSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    educationHeading?: SortOrder
    educationDescription?: SortOrder
    educationSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type EducationSectionMinOrderByAggregateInput = {
    id?: SortOrder
    educationHeading?: SortOrder
    educationDescription?: SortOrder
    educationSectionCode?: SortOrder
    portfolioId?: SortOrder
  }

  export type EducationSectionScalarRelationFilter = {
    is?: EducationSectionWhereInput
    isNot?: EducationSectionWhereInput
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    educationName?: SortOrder
    joiningDate?: SortOrder
    educationDescription?: SortOrder
    educationSectionId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    educationName?: SortOrder
    joiningDate?: SortOrder
    educationDescription?: SortOrder
    educationSectionId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    educationName?: SortOrder
    joiningDate?: SortOrder
    educationDescription?: SortOrder
    educationSectionId?: SortOrder
  }

  export type AboutSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: AboutSectionCreateOrConnectWithoutPortfolioInput
    connect?: AboutSectionWhereUniqueInput
  }

  export type ProjectSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutPortfolioInput
    connect?: ProjectSectionWhereUniqueInput
  }

  export type SkillSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutPortfolioInput
    connect?: SkillSectionWhereUniqueInput
  }

  export type ExperienceSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutPortfolioInput
    connect?: ExperienceSectionWhereUniqueInput
  }

  export type EducationSectionCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutPortfolioInput
    connect?: EducationSectionWhereUniqueInput
  }

  export type AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: AboutSectionCreateOrConnectWithoutPortfolioInput
    connect?: AboutSectionWhereUniqueInput
  }

  export type ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutPortfolioInput
    connect?: ProjectSectionWhereUniqueInput
  }

  export type SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutPortfolioInput
    connect?: SkillSectionWhereUniqueInput
  }

  export type ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutPortfolioInput
    connect?: ExperienceSectionWhereUniqueInput
  }

  export type EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutPortfolioInput
    connect?: EducationSectionWhereUniqueInput
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

  export type AboutSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: AboutSectionCreateOrConnectWithoutPortfolioInput
    upsert?: AboutSectionUpsertWithoutPortfolioInput
    disconnect?: AboutSectionWhereInput | boolean
    delete?: AboutSectionWhereInput | boolean
    connect?: AboutSectionWhereUniqueInput
    update?: XOR<XOR<AboutSectionUpdateToOneWithWhereWithoutPortfolioInput, AboutSectionUpdateWithoutPortfolioInput>, AboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ProjectSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutPortfolioInput
    upsert?: ProjectSectionUpsertWithoutPortfolioInput
    disconnect?: ProjectSectionWhereInput | boolean
    delete?: ProjectSectionWhereInput | boolean
    connect?: ProjectSectionWhereUniqueInput
    update?: XOR<XOR<ProjectSectionUpdateToOneWithWhereWithoutPortfolioInput, ProjectSectionUpdateWithoutPortfolioInput>, ProjectSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type SkillSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutPortfolioInput
    upsert?: SkillSectionUpsertWithoutPortfolioInput
    disconnect?: SkillSectionWhereInput | boolean
    delete?: SkillSectionWhereInput | boolean
    connect?: SkillSectionWhereUniqueInput
    update?: XOR<XOR<SkillSectionUpdateToOneWithWhereWithoutPortfolioInput, SkillSectionUpdateWithoutPortfolioInput>, SkillSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ExperienceSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutPortfolioInput
    upsert?: ExperienceSectionUpsertWithoutPortfolioInput
    disconnect?: ExperienceSectionWhereInput | boolean
    delete?: ExperienceSectionWhereInput | boolean
    connect?: ExperienceSectionWhereUniqueInput
    update?: XOR<XOR<ExperienceSectionUpdateToOneWithWhereWithoutPortfolioInput, ExperienceSectionUpdateWithoutPortfolioInput>, ExperienceSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type EducationSectionUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutPortfolioInput
    upsert?: EducationSectionUpsertWithoutPortfolioInput
    disconnect?: EducationSectionWhereInput | boolean
    delete?: EducationSectionWhereInput | boolean
    connect?: EducationSectionWhereUniqueInput
    update?: XOR<XOR<EducationSectionUpdateToOneWithWhereWithoutPortfolioInput, EducationSectionUpdateWithoutPortfolioInput>, EducationSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: AboutSectionCreateOrConnectWithoutPortfolioInput
    upsert?: AboutSectionUpsertWithoutPortfolioInput
    disconnect?: AboutSectionWhereInput | boolean
    delete?: AboutSectionWhereInput | boolean
    connect?: AboutSectionWhereUniqueInput
    update?: XOR<XOR<AboutSectionUpdateToOneWithWhereWithoutPortfolioInput, AboutSectionUpdateWithoutPortfolioInput>, AboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutPortfolioInput
    upsert?: ProjectSectionUpsertWithoutPortfolioInput
    disconnect?: ProjectSectionWhereInput | boolean
    delete?: ProjectSectionWhereInput | boolean
    connect?: ProjectSectionWhereUniqueInput
    update?: XOR<XOR<ProjectSectionUpdateToOneWithWhereWithoutPortfolioInput, ProjectSectionUpdateWithoutPortfolioInput>, ProjectSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutPortfolioInput
    upsert?: SkillSectionUpsertWithoutPortfolioInput
    disconnect?: SkillSectionWhereInput | boolean
    delete?: SkillSectionWhereInput | boolean
    connect?: SkillSectionWhereUniqueInput
    update?: XOR<XOR<SkillSectionUpdateToOneWithWhereWithoutPortfolioInput, SkillSectionUpdateWithoutPortfolioInput>, SkillSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutPortfolioInput
    upsert?: ExperienceSectionUpsertWithoutPortfolioInput
    disconnect?: ExperienceSectionWhereInput | boolean
    delete?: ExperienceSectionWhereInput | boolean
    connect?: ExperienceSectionWhereUniqueInput
    update?: XOR<XOR<ExperienceSectionUpdateToOneWithWhereWithoutPortfolioInput, ExperienceSectionUpdateWithoutPortfolioInput>, ExperienceSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput = {
    create?: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutPortfolioInput
    upsert?: EducationSectionUpsertWithoutPortfolioInput
    disconnect?: EducationSectionWhereInput | boolean
    delete?: EducationSectionWhereInput | boolean
    connect?: EducationSectionWhereUniqueInput
    update?: XOR<XOR<EducationSectionUpdateToOneWithWhereWithoutPortfolioInput, EducationSectionUpdateWithoutPortfolioInput>, EducationSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioCreateNestedOneWithoutAboutInput = {
    create?: XOR<PortfolioCreateWithoutAboutInput, PortfolioUncheckedCreateWithoutAboutInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAboutInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneWithoutAboutNestedInput = {
    create?: XOR<PortfolioCreateWithoutAboutInput, PortfolioUncheckedCreateWithoutAboutInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAboutInput
    upsert?: PortfolioUpsertWithoutAboutInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutAboutInput, PortfolioUpdateWithoutAboutInput>, PortfolioUncheckedUpdateWithoutAboutInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectCreateNestedManyWithoutProjectSectionInput = {
    create?: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput> | ProjectCreateWithoutProjectSectionInput[] | ProjectUncheckedCreateWithoutProjectSectionInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectSectionInput | ProjectCreateOrConnectWithoutProjectSectionInput[]
    createMany?: ProjectCreateManyProjectSectionInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type PortfolioCreateNestedOneWithoutProjectInput = {
    create?: XOR<PortfolioCreateWithoutProjectInput, PortfolioUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutProjectInput
    connect?: PortfolioWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedManyWithoutProjectSectionInput = {
    create?: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput> | ProjectCreateWithoutProjectSectionInput[] | ProjectUncheckedCreateWithoutProjectSectionInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectSectionInput | ProjectCreateOrConnectWithoutProjectSectionInput[]
    createMany?: ProjectCreateManyProjectSectionInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutProjectSectionNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput> | ProjectCreateWithoutProjectSectionInput[] | ProjectUncheckedCreateWithoutProjectSectionInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectSectionInput | ProjectCreateOrConnectWithoutProjectSectionInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectSectionInput | ProjectUpsertWithWhereUniqueWithoutProjectSectionInput[]
    createMany?: ProjectCreateManyProjectSectionInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectSectionInput | ProjectUpdateWithWhereUniqueWithoutProjectSectionInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectSectionInput | ProjectUpdateManyWithWhereWithoutProjectSectionInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PortfolioUpdateOneWithoutProjectNestedInput = {
    create?: XOR<PortfolioCreateWithoutProjectInput, PortfolioUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutProjectInput
    upsert?: PortfolioUpsertWithoutProjectInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutProjectInput, PortfolioUpdateWithoutProjectInput>, PortfolioUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectUncheckedUpdateManyWithoutProjectSectionNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput> | ProjectCreateWithoutProjectSectionInput[] | ProjectUncheckedCreateWithoutProjectSectionInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectSectionInput | ProjectCreateOrConnectWithoutProjectSectionInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectSectionInput | ProjectUpsertWithWhereUniqueWithoutProjectSectionInput[]
    createMany?: ProjectCreateManyProjectSectionInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectSectionInput | ProjectUpdateWithWhereUniqueWithoutProjectSectionInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectSectionInput | ProjectUpdateManyWithWhereWithoutProjectSectionInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreatetechStackInput = {
    set: string[]
  }

  export type ProjectCreatefeaturesInput = {
    set: string[]
  }

  export type ProjectCreatechallengesInput = {
    set: string[]
  }

  export type ProjectCreatelearningsInput = {
    set: string[]
  }

  export type ProjectSectionCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectSectionCreateWithoutProjectsInput, ProjectSectionUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutProjectsInput
    connect?: ProjectSectionWhereUniqueInput
  }

  export type ProjectUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatechallengesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatelearningsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectSectionUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectSectionCreateWithoutProjectsInput, ProjectSectionUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectSectionCreateOrConnectWithoutProjectsInput
    upsert?: ProjectSectionUpsertWithoutProjectsInput
    connect?: ProjectSectionWhereUniqueInput
    update?: XOR<XOR<ProjectSectionUpdateToOneWithWhereWithoutProjectsInput, ProjectSectionUpdateWithoutProjectsInput>, ProjectSectionUncheckedUpdateWithoutProjectsInput>
  }

  export type SkillCreateNestedManyWithoutSkillsectionInput = {
    create?: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput> | SkillCreateWithoutSkillsectionInput[] | SkillUncheckedCreateWithoutSkillsectionInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillsectionInput | SkillCreateOrConnectWithoutSkillsectionInput[]
    createMany?: SkillCreateManySkillsectionInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type PortfolioCreateNestedOneWithoutSkillInput = {
    create?: XOR<PortfolioCreateWithoutSkillInput, PortfolioUncheckedCreateWithoutSkillInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutSkillInput
    connect?: PortfolioWhereUniqueInput
  }

  export type SkillUncheckedCreateNestedManyWithoutSkillsectionInput = {
    create?: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput> | SkillCreateWithoutSkillsectionInput[] | SkillUncheckedCreateWithoutSkillsectionInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillsectionInput | SkillCreateOrConnectWithoutSkillsectionInput[]
    createMany?: SkillCreateManySkillsectionInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type SkillUpdateManyWithoutSkillsectionNestedInput = {
    create?: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput> | SkillCreateWithoutSkillsectionInput[] | SkillUncheckedCreateWithoutSkillsectionInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillsectionInput | SkillCreateOrConnectWithoutSkillsectionInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutSkillsectionInput | SkillUpsertWithWhereUniqueWithoutSkillsectionInput[]
    createMany?: SkillCreateManySkillsectionInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutSkillsectionInput | SkillUpdateWithWhereUniqueWithoutSkillsectionInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutSkillsectionInput | SkillUpdateManyWithWhereWithoutSkillsectionInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type PortfolioUpdateOneWithoutSkillNestedInput = {
    create?: XOR<PortfolioCreateWithoutSkillInput, PortfolioUncheckedCreateWithoutSkillInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutSkillInput
    upsert?: PortfolioUpsertWithoutSkillInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutSkillInput, PortfolioUpdateWithoutSkillInput>, PortfolioUncheckedUpdateWithoutSkillInput>
  }

  export type SkillUncheckedUpdateManyWithoutSkillsectionNestedInput = {
    create?: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput> | SkillCreateWithoutSkillsectionInput[] | SkillUncheckedCreateWithoutSkillsectionInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillsectionInput | SkillCreateOrConnectWithoutSkillsectionInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutSkillsectionInput | SkillUpsertWithWhereUniqueWithoutSkillsectionInput[]
    createMany?: SkillCreateManySkillsectionInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutSkillsectionInput | SkillUpdateWithWhereUniqueWithoutSkillsectionInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutSkillsectionInput | SkillUpdateManyWithWhereWithoutSkillsectionInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type SkillSectionCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillSectionCreateWithoutSkillsInput, SkillSectionUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutSkillsInput
    connect?: SkillSectionWhereUniqueInput
  }

  export type SkillSectionUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<SkillSectionCreateWithoutSkillsInput, SkillSectionUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillSectionCreateOrConnectWithoutSkillsInput
    upsert?: SkillSectionUpsertWithoutSkillsInput
    connect?: SkillSectionWhereUniqueInput
    update?: XOR<XOR<SkillSectionUpdateToOneWithWhereWithoutSkillsInput, SkillSectionUpdateWithoutSkillsInput>, SkillSectionUncheckedUpdateWithoutSkillsInput>
  }

  export type ExperienceCreateNestedManyWithoutExperienceSectionInput = {
    create?: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput> | ExperienceCreateWithoutExperienceSectionInput[] | ExperienceUncheckedCreateWithoutExperienceSectionInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutExperienceSectionInput | ExperienceCreateOrConnectWithoutExperienceSectionInput[]
    createMany?: ExperienceCreateManyExperienceSectionInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type PortfolioCreateNestedOneWithoutExperienceInput = {
    create?: XOR<PortfolioCreateWithoutExperienceInput, PortfolioUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutExperienceInput
    connect?: PortfolioWhereUniqueInput
  }

  export type ExperienceUncheckedCreateNestedManyWithoutExperienceSectionInput = {
    create?: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput> | ExperienceCreateWithoutExperienceSectionInput[] | ExperienceUncheckedCreateWithoutExperienceSectionInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutExperienceSectionInput | ExperienceCreateOrConnectWithoutExperienceSectionInput[]
    createMany?: ExperienceCreateManyExperienceSectionInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ExperienceUpdateManyWithoutExperienceSectionNestedInput = {
    create?: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput> | ExperienceCreateWithoutExperienceSectionInput[] | ExperienceUncheckedCreateWithoutExperienceSectionInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutExperienceSectionInput | ExperienceCreateOrConnectWithoutExperienceSectionInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutExperienceSectionInput | ExperienceUpsertWithWhereUniqueWithoutExperienceSectionInput[]
    createMany?: ExperienceCreateManyExperienceSectionInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutExperienceSectionInput | ExperienceUpdateWithWhereUniqueWithoutExperienceSectionInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutExperienceSectionInput | ExperienceUpdateManyWithWhereWithoutExperienceSectionInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type PortfolioUpdateOneWithoutExperienceNestedInput = {
    create?: XOR<PortfolioCreateWithoutExperienceInput, PortfolioUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutExperienceInput
    upsert?: PortfolioUpsertWithoutExperienceInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutExperienceInput, PortfolioUpdateWithoutExperienceInput>, PortfolioUncheckedUpdateWithoutExperienceInput>
  }

  export type ExperienceUncheckedUpdateManyWithoutExperienceSectionNestedInput = {
    create?: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput> | ExperienceCreateWithoutExperienceSectionInput[] | ExperienceUncheckedCreateWithoutExperienceSectionInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutExperienceSectionInput | ExperienceCreateOrConnectWithoutExperienceSectionInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutExperienceSectionInput | ExperienceUpsertWithWhereUniqueWithoutExperienceSectionInput[]
    createMany?: ExperienceCreateManyExperienceSectionInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutExperienceSectionInput | ExperienceUpdateWithWhereUniqueWithoutExperienceSectionInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutExperienceSectionInput | ExperienceUpdateManyWithWhereWithoutExperienceSectionInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ExperienceSectionCreateNestedOneWithoutExperienceInput = {
    create?: XOR<ExperienceSectionCreateWithoutExperienceInput, ExperienceSectionUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutExperienceInput
    connect?: ExperienceSectionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExperienceSectionUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<ExperienceSectionCreateWithoutExperienceInput, ExperienceSectionUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: ExperienceSectionCreateOrConnectWithoutExperienceInput
    upsert?: ExperienceSectionUpsertWithoutExperienceInput
    connect?: ExperienceSectionWhereUniqueInput
    update?: XOR<XOR<ExperienceSectionUpdateToOneWithWhereWithoutExperienceInput, ExperienceSectionUpdateWithoutExperienceInput>, ExperienceSectionUncheckedUpdateWithoutExperienceInput>
  }

  export type EducationCreateNestedManyWithoutEducationSectionInput = {
    create?: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput> | EducationCreateWithoutEducationSectionInput[] | EducationUncheckedCreateWithoutEducationSectionInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEducationSectionInput | EducationCreateOrConnectWithoutEducationSectionInput[]
    createMany?: EducationCreateManyEducationSectionInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type PortfolioCreateNestedOneWithoutEducationInput = {
    create?: XOR<PortfolioCreateWithoutEducationInput, PortfolioUncheckedCreateWithoutEducationInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutEducationInput
    connect?: PortfolioWhereUniqueInput
  }

  export type EducationUncheckedCreateNestedManyWithoutEducationSectionInput = {
    create?: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput> | EducationCreateWithoutEducationSectionInput[] | EducationUncheckedCreateWithoutEducationSectionInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEducationSectionInput | EducationCreateOrConnectWithoutEducationSectionInput[]
    createMany?: EducationCreateManyEducationSectionInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type EducationUpdateManyWithoutEducationSectionNestedInput = {
    create?: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput> | EducationCreateWithoutEducationSectionInput[] | EducationUncheckedCreateWithoutEducationSectionInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEducationSectionInput | EducationCreateOrConnectWithoutEducationSectionInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutEducationSectionInput | EducationUpsertWithWhereUniqueWithoutEducationSectionInput[]
    createMany?: EducationCreateManyEducationSectionInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutEducationSectionInput | EducationUpdateWithWhereUniqueWithoutEducationSectionInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutEducationSectionInput | EducationUpdateManyWithWhereWithoutEducationSectionInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type PortfolioUpdateOneWithoutEducationNestedInput = {
    create?: XOR<PortfolioCreateWithoutEducationInput, PortfolioUncheckedCreateWithoutEducationInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutEducationInput
    upsert?: PortfolioUpsertWithoutEducationInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutEducationInput, PortfolioUpdateWithoutEducationInput>, PortfolioUncheckedUpdateWithoutEducationInput>
  }

  export type EducationUncheckedUpdateManyWithoutEducationSectionNestedInput = {
    create?: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput> | EducationCreateWithoutEducationSectionInput[] | EducationUncheckedCreateWithoutEducationSectionInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEducationSectionInput | EducationCreateOrConnectWithoutEducationSectionInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutEducationSectionInput | EducationUpsertWithWhereUniqueWithoutEducationSectionInput[]
    createMany?: EducationCreateManyEducationSectionInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutEducationSectionInput | EducationUpdateWithWhereUniqueWithoutEducationSectionInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutEducationSectionInput | EducationUpdateManyWithWhereWithoutEducationSectionInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type EducationSectionCreateNestedOneWithoutEducationInput = {
    create?: XOR<EducationSectionCreateWithoutEducationInput, EducationSectionUncheckedCreateWithoutEducationInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutEducationInput
    connect?: EducationSectionWhereUniqueInput
  }

  export type EducationSectionUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<EducationSectionCreateWithoutEducationInput, EducationSectionUncheckedCreateWithoutEducationInput>
    connectOrCreate?: EducationSectionCreateOrConnectWithoutEducationInput
    upsert?: EducationSectionUpsertWithoutEducationInput
    connect?: EducationSectionWhereUniqueInput
    update?: XOR<XOR<EducationSectionUpdateToOneWithWhereWithoutEducationInput, EducationSectionUpdateWithoutEducationInput>, EducationSectionUncheckedUpdateWithoutEducationInput>
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

  export type AboutSectionCreateWithoutPortfolioInput = {
    id?: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
  }

  export type AboutSectionUncheckedCreateWithoutPortfolioInput = {
    id?: string
    aboutHeading: string
    about: string
    AboutSectionCode: string
  }

  export type AboutSectionCreateOrConnectWithoutPortfolioInput = {
    where: AboutSectionWhereUniqueInput
    create: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type ProjectSectionCreateWithoutPortfolioInput = {
    id?: string
    projectHeading: string
    projectSectionCode: string
    projects?: ProjectCreateNestedManyWithoutProjectSectionInput
  }

  export type ProjectSectionUncheckedCreateWithoutPortfolioInput = {
    id?: string
    projectHeading: string
    projectSectionCode: string
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectSectionInput
  }

  export type ProjectSectionCreateOrConnectWithoutPortfolioInput = {
    where: ProjectSectionWhereUniqueInput
    create: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type SkillSectionCreateWithoutPortfolioInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    skills?: SkillCreateNestedManyWithoutSkillsectionInput
  }

  export type SkillSectionUncheckedCreateWithoutPortfolioInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    skills?: SkillUncheckedCreateNestedManyWithoutSkillsectionInput
  }

  export type SkillSectionCreateOrConnectWithoutPortfolioInput = {
    where: SkillSectionWhereUniqueInput
    create: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type ExperienceSectionCreateWithoutPortfolioInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    experienceSectionCode: string
    experience?: ExperienceCreateNestedManyWithoutExperienceSectionInput
  }

  export type ExperienceSectionUncheckedCreateWithoutPortfolioInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    experienceSectionCode: string
    experience?: ExperienceUncheckedCreateNestedManyWithoutExperienceSectionInput
  }

  export type ExperienceSectionCreateOrConnectWithoutPortfolioInput = {
    where: ExperienceSectionWhereUniqueInput
    create: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type EducationSectionCreateWithoutPortfolioInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    education?: EducationCreateNestedManyWithoutEducationSectionInput
  }

  export type EducationSectionUncheckedCreateWithoutPortfolioInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    education?: EducationUncheckedCreateNestedManyWithoutEducationSectionInput
  }

  export type EducationSectionCreateOrConnectWithoutPortfolioInput = {
    where: EducationSectionWhereUniqueInput
    create: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
  }

  export type AboutSectionUpsertWithoutPortfolioInput = {
    update: XOR<AboutSectionUpdateWithoutPortfolioInput, AboutSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<AboutSectionCreateWithoutPortfolioInput, AboutSectionUncheckedCreateWithoutPortfolioInput>
    where?: AboutSectionWhereInput
  }

  export type AboutSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: AboutSectionWhereInput
    data: XOR<AboutSectionUpdateWithoutPortfolioInput, AboutSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type AboutSectionUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type AboutSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    aboutHeading?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    AboutSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSectionUpsertWithoutPortfolioInput = {
    update: XOR<ProjectSectionUpdateWithoutPortfolioInput, ProjectSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<ProjectSectionCreateWithoutPortfolioInput, ProjectSectionUncheckedCreateWithoutPortfolioInput>
    where?: ProjectSectionWhereInput
  }

  export type ProjectSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: ProjectSectionWhereInput
    data: XOR<ProjectSectionUpdateWithoutPortfolioInput, ProjectSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ProjectSectionUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectSectionCode?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutProjectSectionNestedInput
  }

  export type ProjectSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectSectionCode?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutProjectSectionNestedInput
  }

  export type SkillSectionUpsertWithoutPortfolioInput = {
    update: XOR<SkillSectionUpdateWithoutPortfolioInput, SkillSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<SkillSectionCreateWithoutPortfolioInput, SkillSectionUncheckedCreateWithoutPortfolioInput>
    where?: SkillSectionWhereInput
  }

  export type SkillSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: SkillSectionWhereInput
    data: XOR<SkillSectionUpdateWithoutPortfolioInput, SkillSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type SkillSectionUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateManyWithoutSkillsectionNestedInput
  }

  export type SkillSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutSkillsectionNestedInput
  }

  export type ExperienceSectionUpsertWithoutPortfolioInput = {
    update: XOR<ExperienceSectionUpdateWithoutPortfolioInput, ExperienceSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<ExperienceSectionCreateWithoutPortfolioInput, ExperienceSectionUncheckedCreateWithoutPortfolioInput>
    where?: ExperienceSectionWhereInput
  }

  export type ExperienceSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: ExperienceSectionWhereInput
    data: XOR<ExperienceSectionUpdateWithoutPortfolioInput, ExperienceSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type ExperienceSectionUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUpdateManyWithoutExperienceSectionNestedInput
  }

  export type ExperienceSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
    experience?: ExperienceUncheckedUpdateManyWithoutExperienceSectionNestedInput
  }

  export type EducationSectionUpsertWithoutPortfolioInput = {
    update: XOR<EducationSectionUpdateWithoutPortfolioInput, EducationSectionUncheckedUpdateWithoutPortfolioInput>
    create: XOR<EducationSectionCreateWithoutPortfolioInput, EducationSectionUncheckedCreateWithoutPortfolioInput>
    where?: EducationSectionWhereInput
  }

  export type EducationSectionUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: EducationSectionWhereInput
    data: XOR<EducationSectionUpdateWithoutPortfolioInput, EducationSectionUncheckedUpdateWithoutPortfolioInput>
  }

  export type EducationSectionUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    education?: EducationUpdateManyWithoutEducationSectionNestedInput
  }

  export type EducationSectionUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    education?: EducationUncheckedUpdateManyWithoutEducationSectionNestedInput
  }

  export type PortfolioCreateWithoutAboutInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    project?: ProjectSectionCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutAboutInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    project?: ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutAboutInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutAboutInput, PortfolioUncheckedCreateWithoutAboutInput>
  }

  export type PortfolioUpsertWithoutAboutInput = {
    update: XOR<PortfolioUpdateWithoutAboutInput, PortfolioUncheckedUpdateWithoutAboutInput>
    create: XOR<PortfolioCreateWithoutAboutInput, PortfolioUncheckedCreateWithoutAboutInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutAboutInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutAboutInput, PortfolioUncheckedUpdateWithoutAboutInput>
  }

  export type PortfolioUpdateWithoutAboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    project?: ProjectSectionUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutAboutInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    project?: ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type ProjectCreateWithoutProjectSectionInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
  }

  export type ProjectUncheckedCreateWithoutProjectSectionInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
  }

  export type ProjectCreateOrConnectWithoutProjectSectionInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput>
  }

  export type ProjectCreateManyProjectSectionInputEnvelope = {
    data: ProjectCreateManyProjectSectionInput | ProjectCreateManyProjectSectionInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutProjectInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutProjectInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutProjectInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutProjectInput, PortfolioUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutProjectSectionInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProjectSectionInput, ProjectUncheckedUpdateWithoutProjectSectionInput>
    create: XOR<ProjectCreateWithoutProjectSectionInput, ProjectUncheckedCreateWithoutProjectSectionInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProjectSectionInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProjectSectionInput, ProjectUncheckedUpdateWithoutProjectSectionInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProjectSectionInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectSectionInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    projectName?: StringFilter<"Project"> | string
    projectHeading?: StringFilter<"Project"> | string
    projectDescription?: StringFilter<"Project"> | string
    techStack?: StringNullableListFilter<"Project">
    features?: StringNullableListFilter<"Project">
    challenges?: StringNullableListFilter<"Project">
    learnings?: StringNullableListFilter<"Project">
    githubLink?: StringFilter<"Project"> | string
    deployedLink?: StringNullableFilter<"Project"> | string | null
    projectSectionId?: StringFilter<"Project"> | string
  }

  export type PortfolioUpsertWithoutProjectInput = {
    update: XOR<PortfolioUpdateWithoutProjectInput, PortfolioUncheckedUpdateWithoutProjectInput>
    create: XOR<PortfolioCreateWithoutProjectInput, PortfolioUncheckedCreateWithoutProjectInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutProjectInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutProjectInput, PortfolioUncheckedUpdateWithoutProjectInput>
  }

  export type PortfolioUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type ProjectSectionCreateWithoutProjectsInput = {
    id?: string
    projectHeading: string
    projectSectionCode: string
    portfolio?: PortfolioCreateNestedOneWithoutProjectInput
  }

  export type ProjectSectionUncheckedCreateWithoutProjectsInput = {
    id?: string
    projectHeading: string
    portfolioId?: string | null
    projectSectionCode: string
  }

  export type ProjectSectionCreateOrConnectWithoutProjectsInput = {
    where: ProjectSectionWhereUniqueInput
    create: XOR<ProjectSectionCreateWithoutProjectsInput, ProjectSectionUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectSectionUpsertWithoutProjectsInput = {
    update: XOR<ProjectSectionUpdateWithoutProjectsInput, ProjectSectionUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectSectionCreateWithoutProjectsInput, ProjectSectionUncheckedCreateWithoutProjectsInput>
    where?: ProjectSectionWhereInput
  }

  export type ProjectSectionUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectSectionWhereInput
    data: XOR<ProjectSectionUpdateWithoutProjectsInput, ProjectSectionUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectSectionUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectSectionCode?: StringFieldUpdateOperationsInput | string
    portfolio?: PortfolioUpdateOneWithoutProjectNestedInput
  }

  export type ProjectSectionUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    portfolioId?: NullableStringFieldUpdateOperationsInput | string | null
    projectSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateWithoutSkillsectionInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
  }

  export type SkillUncheckedCreateWithoutSkillsectionInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
  }

  export type SkillCreateOrConnectWithoutSkillsectionInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput>
  }

  export type SkillCreateManySkillsectionInputEnvelope = {
    data: SkillCreateManySkillsectionInput | SkillCreateManySkillsectionInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutSkillInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutSkillInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutSkillInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutSkillInput, PortfolioUncheckedCreateWithoutSkillInput>
  }

  export type SkillUpsertWithWhereUniqueWithoutSkillsectionInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutSkillsectionInput, SkillUncheckedUpdateWithoutSkillsectionInput>
    create: XOR<SkillCreateWithoutSkillsectionInput, SkillUncheckedCreateWithoutSkillsectionInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutSkillsectionInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutSkillsectionInput, SkillUncheckedUpdateWithoutSkillsectionInput>
  }

  export type SkillUpdateManyWithWhereWithoutSkillsectionInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutSkillsectionInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    skillIcon?: StringFilter<"Skill"> | string
    skillName?: StringFilter<"Skill"> | string
    skillIconColor?: StringFilter<"Skill"> | string
    skillSectionId?: StringFilter<"Skill"> | string
  }

  export type PortfolioUpsertWithoutSkillInput = {
    update: XOR<PortfolioUpdateWithoutSkillInput, PortfolioUncheckedUpdateWithoutSkillInput>
    create: XOR<PortfolioCreateWithoutSkillInput, PortfolioUncheckedCreateWithoutSkillInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutSkillInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutSkillInput, PortfolioUncheckedUpdateWithoutSkillInput>
  }

  export type PortfolioUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type SkillSectionCreateWithoutSkillsInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    portfolio?: PortfolioCreateNestedOneWithoutSkillInput
  }

  export type SkillSectionUncheckedCreateWithoutSkillsInput = {
    id?: string
    skillHeading: string
    skillDescription: string
    skillSectionCode: string
    portfolioId: string
  }

  export type SkillSectionCreateOrConnectWithoutSkillsInput = {
    where: SkillSectionWhereUniqueInput
    create: XOR<SkillSectionCreateWithoutSkillsInput, SkillSectionUncheckedCreateWithoutSkillsInput>
  }

  export type SkillSectionUpsertWithoutSkillsInput = {
    update: XOR<SkillSectionUpdateWithoutSkillsInput, SkillSectionUncheckedUpdateWithoutSkillsInput>
    create: XOR<SkillSectionCreateWithoutSkillsInput, SkillSectionUncheckedCreateWithoutSkillsInput>
    where?: SkillSectionWhereInput
  }

  export type SkillSectionUpdateToOneWithWhereWithoutSkillsInput = {
    where?: SkillSectionWhereInput
    data: XOR<SkillSectionUpdateWithoutSkillsInput, SkillSectionUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillSectionUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    portfolio?: PortfolioUpdateOneWithoutSkillNestedInput
  }

  export type SkillSectionUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillHeading?: StringFieldUpdateOperationsInput | string
    skillDescription?: StringFieldUpdateOperationsInput | string
    skillSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateWithoutExperienceSectionInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
  }

  export type ExperienceUncheckedCreateWithoutExperienceSectionInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
  }

  export type ExperienceCreateOrConnectWithoutExperienceSectionInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput>
  }

  export type ExperienceCreateManyExperienceSectionInputEnvelope = {
    data: ExperienceCreateManyExperienceSectionInput | ExperienceCreateManyExperienceSectionInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutExperienceInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutExperienceInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput
    education?: EducationSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutExperienceInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutExperienceInput, PortfolioUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutExperienceSectionInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutExperienceSectionInput, ExperienceUncheckedUpdateWithoutExperienceSectionInput>
    create: XOR<ExperienceCreateWithoutExperienceSectionInput, ExperienceUncheckedCreateWithoutExperienceSectionInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutExperienceSectionInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutExperienceSectionInput, ExperienceUncheckedUpdateWithoutExperienceSectionInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutExperienceSectionInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutExperienceSectionInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    experienceName?: StringFilter<"Experience"> | string
    joiningDate?: DateTimeFilter<"Experience"> | Date | string
    experienceDescription?: StringFilter<"Experience"> | string
    experienceSectionId?: StringFilter<"Experience"> | string
  }

  export type PortfolioUpsertWithoutExperienceInput = {
    update: XOR<PortfolioUpdateWithoutExperienceInput, PortfolioUncheckedUpdateWithoutExperienceInput>
    create: XOR<PortfolioCreateWithoutExperienceInput, PortfolioUncheckedCreateWithoutExperienceInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutExperienceInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutExperienceInput, PortfolioUncheckedUpdateWithoutExperienceInput>
  }

  export type PortfolioUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    education?: EducationSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type ExperienceSectionCreateWithoutExperienceInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    experienceSectionCode: string
    portfolio?: PortfolioCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceSectionUncheckedCreateWithoutExperienceInput = {
    id?: string
    experienceHeading: string
    experienceDescription: string
    portfolioId: string
    experienceSectionCode: string
  }

  export type ExperienceSectionCreateOrConnectWithoutExperienceInput = {
    where: ExperienceSectionWhereUniqueInput
    create: XOR<ExperienceSectionCreateWithoutExperienceInput, ExperienceSectionUncheckedCreateWithoutExperienceInput>
  }

  export type ExperienceSectionUpsertWithoutExperienceInput = {
    update: XOR<ExperienceSectionUpdateWithoutExperienceInput, ExperienceSectionUncheckedUpdateWithoutExperienceInput>
    create: XOR<ExperienceSectionCreateWithoutExperienceInput, ExperienceSectionUncheckedCreateWithoutExperienceInput>
    where?: ExperienceSectionWhereInput
  }

  export type ExperienceSectionUpdateToOneWithWhereWithoutExperienceInput = {
    where?: ExperienceSectionWhereInput
    data: XOR<ExperienceSectionUpdateWithoutExperienceInput, ExperienceSectionUncheckedUpdateWithoutExperienceInput>
  }

  export type ExperienceSectionUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
    portfolio?: PortfolioUpdateOneWithoutExperienceNestedInput
  }

  export type ExperienceSectionUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceHeading?: StringFieldUpdateOperationsInput | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    experienceSectionCode?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateWithoutEducationSectionInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
  }

  export type EducationUncheckedCreateWithoutEducationSectionInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
  }

  export type EducationCreateOrConnectWithoutEducationSectionInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput>
  }

  export type EducationCreateManyEducationSectionInputEnvelope = {
    data: EducationCreateManyEducationSectionInput | EducationCreateManyEducationSectionInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutEducationInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutEducationInput = {
    id?: string
    userName: string
    userHeading: string
    userBio: string
    userResumeLink: string
    userEmail: string
    userGithubId: string
    welcomeCode: string
    views?: number
    likes?: number
    about?: AboutSectionUncheckedCreateNestedOneWithoutPortfolioInput
    project?: ProjectSectionUncheckedCreateNestedOneWithoutPortfolioInput
    skill?: SkillSectionUncheckedCreateNestedOneWithoutPortfolioInput
    experience?: ExperienceSectionUncheckedCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutEducationInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutEducationInput, PortfolioUncheckedCreateWithoutEducationInput>
  }

  export type EducationUpsertWithWhereUniqueWithoutEducationSectionInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutEducationSectionInput, EducationUncheckedUpdateWithoutEducationSectionInput>
    create: XOR<EducationCreateWithoutEducationSectionInput, EducationUncheckedCreateWithoutEducationSectionInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutEducationSectionInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutEducationSectionInput, EducationUncheckedUpdateWithoutEducationSectionInput>
  }

  export type EducationUpdateManyWithWhereWithoutEducationSectionInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutEducationSectionInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    educationName?: StringFilter<"Education"> | string
    joiningDate?: StringFilter<"Education"> | string
    educationDescription?: StringFilter<"Education"> | string
    educationSectionId?: StringFilter<"Education"> | string
  }

  export type PortfolioUpsertWithoutEducationInput = {
    update: XOR<PortfolioUpdateWithoutEducationInput, PortfolioUncheckedUpdateWithoutEducationInput>
    create: XOR<PortfolioCreateWithoutEducationInput, PortfolioUncheckedCreateWithoutEducationInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutEducationInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutEducationInput, PortfolioUncheckedUpdateWithoutEducationInput>
  }

  export type PortfolioUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUpdateOneWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userHeading?: StringFieldUpdateOperationsInput | string
    userBio?: StringFieldUpdateOperationsInput | string
    userResumeLink?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userGithubId?: StringFieldUpdateOperationsInput | string
    welcomeCode?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    about?: AboutSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    project?: ProjectSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    skill?: SkillSectionUncheckedUpdateOneWithoutPortfolioNestedInput
    experience?: ExperienceSectionUncheckedUpdateOneWithoutPortfolioNestedInput
  }

  export type EducationSectionCreateWithoutEducationInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    portfolio?: PortfolioCreateNestedOneWithoutEducationInput
  }

  export type EducationSectionUncheckedCreateWithoutEducationInput = {
    id?: string
    educationHeading: string
    educationDescription: string
    educationSectionCode: string
    portfolioId: string
  }

  export type EducationSectionCreateOrConnectWithoutEducationInput = {
    where: EducationSectionWhereUniqueInput
    create: XOR<EducationSectionCreateWithoutEducationInput, EducationSectionUncheckedCreateWithoutEducationInput>
  }

  export type EducationSectionUpsertWithoutEducationInput = {
    update: XOR<EducationSectionUpdateWithoutEducationInput, EducationSectionUncheckedUpdateWithoutEducationInput>
    create: XOR<EducationSectionCreateWithoutEducationInput, EducationSectionUncheckedCreateWithoutEducationInput>
    where?: EducationSectionWhereInput
  }

  export type EducationSectionUpdateToOneWithWhereWithoutEducationInput = {
    where?: EducationSectionWhereInput
    data: XOR<EducationSectionUpdateWithoutEducationInput, EducationSectionUncheckedUpdateWithoutEducationInput>
  }

  export type EducationSectionUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    portfolio?: PortfolioUpdateOneWithoutEducationNestedInput
  }

  export type EducationSectionUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationHeading?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
    educationSectionCode?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyProjectSectionInput = {
    id?: string
    projectName: string
    projectHeading: string
    projectDescription: string
    techStack?: ProjectCreatetechStackInput | string[]
    features?: ProjectCreatefeaturesInput | string[]
    challenges?: ProjectCreatechallengesInput | string[]
    learnings?: ProjectCreatelearningsInput | string[]
    githubLink: string
    deployedLink?: string | null
  }

  export type ProjectUpdateWithoutProjectSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutProjectSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutProjectSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    projectHeading?: StringFieldUpdateOperationsInput | string
    projectDescription?: StringFieldUpdateOperationsInput | string
    techStack?: ProjectUpdatetechStackInput | string[]
    features?: ProjectUpdatefeaturesInput | string[]
    challenges?: ProjectUpdatechallengesInput | string[]
    learnings?: ProjectUpdatelearningsInput | string[]
    githubLink?: StringFieldUpdateOperationsInput | string
    deployedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateManySkillsectionInput = {
    id?: string
    skillIcon: string
    skillName: string
    skillIconColor: string
  }

  export type SkillUpdateWithoutSkillsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutSkillsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutSkillsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    skillName?: StringFieldUpdateOperationsInput | string
    skillIconColor?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyExperienceSectionInput = {
    id?: string
    experienceName: string
    joiningDate?: Date | string
    experienceDescription: string
  }

  export type ExperienceUpdateWithoutExperienceSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutExperienceSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutExperienceSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceName?: StringFieldUpdateOperationsInput | string
    joiningDate?: DateTimeFieldUpdateOperationsInput | Date | string
    experienceDescription?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyEducationSectionInput = {
    id?: string
    educationName: string
    joiningDate: string
    educationDescription: string
  }

  export type EducationUpdateWithoutEducationSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateWithoutEducationSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyWithoutEducationSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    educationName?: StringFieldUpdateOperationsInput | string
    joiningDate?: StringFieldUpdateOperationsInput | string
    educationDescription?: StringFieldUpdateOperationsInput | string
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