import { FC, PropsWithChildren } from 'react'
import { Provider } from 'jotai'

import { store } from './store'

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
