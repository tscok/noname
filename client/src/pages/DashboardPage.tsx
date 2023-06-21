import { FC } from 'react'

import { useUser } from '../store'
import { AuthButton } from '../components'

export const DashboardPage: FC = () => {
  const user = useUser()

  return (
    <>
      <h1>Dashboard Page</h1>
      <p>Welcome {user?.name}!</p>
      <AuthButton />
    </>
  )
}
