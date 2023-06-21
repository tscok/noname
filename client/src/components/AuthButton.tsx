import { FC } from 'react'

import { useAuth } from '.'

export const AuthButton: FC = () => {
  const auth = useAuth()

  return (
    <button onClick={() => (auth.user ? auth.logout() : auth.login())}>
      {auth.user ? 'Logout' : 'Login'}
    </button>
  )
}
