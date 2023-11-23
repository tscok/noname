type Callback = (...args: unknown[]) => void

export function debouncer<T extends Callback>(ms: number) {
  let timer: ReturnType<typeof setTimeout>
  return (cb: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => cb(), ms)
  }
}
