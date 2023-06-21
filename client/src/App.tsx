import { FC } from 'react'

import { AuthProvider } from './components'
import { AppRouter } from './AppRouter'

export const App: FC = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
)
