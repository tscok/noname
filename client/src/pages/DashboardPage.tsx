import { FC } from 'react'

import { AuthButton, useAuth } from '../components'

export const DashboardPage: FC = () => {
  const auth = useAuth()

  return (
    <>
      <h1>Dashboard Page</h1>
      <p>Welcome {auth.user?.name}!</p>
      <AuthButton />
    </>
  )
}
