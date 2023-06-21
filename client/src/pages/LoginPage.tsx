import { FC } from 'react'

import { useUser } from '../store'
import { AuthButton } from '../components'
import { Navigate, useLocation } from 'react-router-dom'

export const LoginPage: FC = () => {
  const user = useUser()
  const location = useLocation()

  if (user?.uid && location.state.from) {
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
