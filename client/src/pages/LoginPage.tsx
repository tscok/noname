import { FC } from 'react'

import { AuthButton, useAuth } from '../components'
import { Navigate, useLocation } from 'react-router-dom'

export const LoginPage: FC = () => {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user && location.state.from) {
    return <Navigate to={location.state.from} replace />
  }

  return (
    <>
      <h1>Login Page</h1>
      <p>Please login to continue</p>
      <AuthButton />
    </>
  )
}
