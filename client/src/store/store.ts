import { createStore } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { Token } from '../../../server/auth/googleAuth'

export const store = createStore()

export const userAtom = atomWithStorage<Token | null>('user', null)

export const modeAtom = atomWithStorage<'light' | 'dark'>('mode', 'light')

export const unsub = store.sub(userAtom, () => {
  console.log('userAtom value is changed to', store.get(userAtom))
})
