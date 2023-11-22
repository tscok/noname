export function setValue<T, S extends string, V>(obj: T, path: S, value: V): T {
  const [first, ...rest] = path.split('.') as [keyof T, ...(keyof T)[]]
  return {
    ...obj,
    [first]:
      rest.length > 0 ? setValue(obj[first], rest.join('.'), value) : value,
  }
}
