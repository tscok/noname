import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Token } from '../../../server/auth/googleAuth'
import AuthClient from '../api/AuthClient'

const client = new AuthClient()

interface AuthContextType {
  login: () => void
  logout: () => void
  user: Token
}

export const AuthContext = createContext<AuthContextType>(null!)

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Token>(null!)

  const fetchUser = useCallback(async () => {
    const currentUser = await client.getCurrentUser()
    setUser((prevUser) => {
      if (currentUser?.uid !== prevUser?.uid) {
        return currentUser
      }
      return prevUser
    })
  }, [setUser])

  useEffect(() => {
    let timer: NodeJS.Timer
    fetchUser()
    timer = setInterval(() => fetchUser(), 1000 * 60 * 60)
    return () => {
      clearInterval(timer)
    }
  }, [fetchUser])

  const login = () => {
    window.location.href = client.login()
  }

  const logout = () => {
    window.location.href = client.logout()
  }

  const value = { login, logout, user }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
