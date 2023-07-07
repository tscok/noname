import { FC } from 'react'

import AuthClient from '../api/AuthClient'
import { Button } from '../ui'

export const LoginButton: FC = () => (
  <Button onClick={() => AuthClient.login()}>Login</Button>
)

export const LogoutButton: FC = () => (
  <Button onClick={() => AuthClient.logout()}>Logout</Button>
)
