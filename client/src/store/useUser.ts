import { useAtomValue } from 'jotai'

import { userAtom } from '.'

export function useUser() {
  return useAtomValue(userAtom)
}
