import { useAtom } from 'jotai'

import { modeAtom } from '.'

export function useMode() {
  return useAtom(modeAtom)
}
