import { FC, ReactNode } from 'react'

import { useUser } from '../store'
import { Navigate, useLocation } from 'react-router-dom'

interface AuthRequiredProps {
  children: ReactNode
}

export const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const user = useUser()
  const location = useLocation()

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
