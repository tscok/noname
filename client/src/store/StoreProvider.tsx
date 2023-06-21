import { FC, ReactNode, useEffect } from 'react'
import { Provider } from 'jotai'

import client from '../api/AuthClient'
import { store, userAtom, unsub } from './store'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  useEffect(() => {
    ;(async () => {
      const currentUser = await client.getCurrentUser()
      store.set(userAtom, currentUser)
    })()
    return () => {
      unsub()
    }
  })

  return <Provider store={store}>{children}</Provider>
}
