import { useCallback, useMemo } from 'react'
import { debouncer } from './debouncer'

export function useDebounce(ms = 300) {
  const callback = useCallback(() => debouncer(ms), [ms])
  return useMemo(callback, [callback])
}
