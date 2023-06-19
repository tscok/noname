import { useEffect, useState } from 'react'
import { ApiClient } from './apiClient'

import { Token } from '../../server/auth/googleAuth'

const client = new ApiClient()

export default function App() {
  const [user, setUser] = useState<Token | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')

  useEffect(() => {
    ;(async () => {
      setStatus('loading')
      const user = await client.getCurrentUser()
      setUser(user)
      setStatus('idle')
    })()
  }, [])

  const handleLogin = () => {
    window.location.href = '/auth/login'
  }

  const handleLogout = () => {
    window.location.href = '/auth/logout'
  }

  if (status === 'loading') {
    return null
  }

  return user ? (
    <>
      <h1>Hello {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <>
      <h1>Hello World</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}
