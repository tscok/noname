import { atom, createStore } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { DateTime } from 'luxon'

import { Token } from '../../../server/auth/googleAuth'
import { User, Skill } from '@backend/*'

export const store = createStore()

export const userAtom = atomWithStorage<Token | null>('user', null)

export const modeAtom = atomWithStorage<'light' | 'dark'>('mode', 'light')

export const dateAtom = atom<DateTime>(DateTime.now())

export const availableUsersAtom = atom<User[]>([])

export const filteredUsersAtom = atom<User[]>([])

export const skillsAtom = atom<Skill[]>([])

export const unsub = store.sub(userAtom, () => {
  console.log('userAtom value is changed to', store.get(userAtom))
})
