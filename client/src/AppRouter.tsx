import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom'

import { Layout } from './components'
import {
  ErrorPage,
  PublicPage,
  ProfilePage,
  LoginPage,
  LogoutPage,
  UsersPage,
} from './pages'
import { store, userAtom } from './store'
import AuthClient from './api/AuthClient'

const authRequired = () => {
  const user = store.get(userAtom)
  return user ? null : redirect('/login')
}

const redirectIfUser = () => {
  const user = store.get(userAtom)
  return user ? redirect('/profile') : null
}

const loadCurrentUser = async () => {
  try {
    const user = await AuthClient.getCurrentUser()
    store.set(userAtom, user)
  } catch (e) {
    // Ignore
  }
  return null
}

const logoutUser = () => {
  store.set(userAtom, null)
  return null
}

type NamedRoute = {
  path: string
  element: JSX.Element
  loader?: () => Response | null
  name: string
}

export const namedPages: NamedRoute[] = [
  { path: '/', element: <PublicPage />, name: 'Public' },
  {
    path: 'users',
    element: <UsersPage />,
    loader: authRequired,
    name: 'Users',
  },
]

const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: loadCurrentUser,
    children: [
      ...namedPages,
      {
        path: 'profile',
        element: <ProfilePage />,
        loader: authRequired,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: redirectIfUser,
      },
      {
        path: 'logout',
        element: <LogoutPage />,
        loader: logoutUser,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]

const AppRouter = () => <RouterProvider router={createBrowserRouter(routes)} />

export default AppRouter
