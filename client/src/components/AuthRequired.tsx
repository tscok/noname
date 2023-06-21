import { FC, ReactNode } from 'react'

import { useAuth } from '.'
import { Navigate, useLocation } from 'react-router-dom'

interface AuthRequiredProps {
  children: ReactNode
}

export const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
