import { FC } from 'react'

import { useUser } from '../store'
import { auth } from '../utils/auth'

export const AuthButton: FC = () => {
  const user = useUser()

  return (
    <button onClick={() => (user?.uid ? auth.logout() : auth.login())}>
      {user?.uid ? 'Logout' : 'Login'}
    </button>
  )
}
