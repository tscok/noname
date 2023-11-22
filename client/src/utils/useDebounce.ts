import { useCallback } from 'react'
import { debouncer } from './debouncer'

export function useDebounce(ms = 500) {
  return useCallback(debouncer(ms), [ms])
}
