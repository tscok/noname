export type OnChange<T extends object> = <
  P extends PathOf<T>,
  V extends PathType<T, P>
>(
  path: P,
  value: V
) => void

export type OnValidate<T extends object> = <P extends PathOf<T>>(
  path: P,
  value: InputValidation
) => void

export type InputValidation = { isError: boolean; error?: string }

export type Validated<T extends object> = Record<PathOf<T>, InputValidation>

export type Validator = (input: string) => InputValidation

export type GetValidation<T extends object> = (
  path: PathOf<T>
) => InputValidation

// type helpers

type PathOf<T extends object> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}` | `${K}.${PathOf<T[K]>}`
    : `${K}`
}[keyof T & (string | number)]

type PathType<T, S extends string> = {
  [K in S]: K extends `${infer Prefix}.${infer Suffix}`
    ? PathType<TypeOf<T, Prefix>, Suffix>
    : TypeOf<T, K>
}[S]

type TypeOf<T, K> = K extends keyof T ? T[K] : never
