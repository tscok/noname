import {
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom'

import { Layout } from './components'
import {
  ErrorPage,
  PrivatePage,
  PublicPage,
  ProfilePage,
  LoginPage,
  LogoutPage,
} from './pages'
import { store, userAtom } from './store'
import AuthClient from './api/AuthClient'

type LayoutRoute = {
  children: PageRoute[]
  element: JSX.Element
  errorElement: JSX.Element
  loader: LoaderFunction
}

type PageRoute = {
  element: JSX.Element
  loader?: LoaderFunction
  path: string
}

type NamedRoute = PageRoute & {
  name: string
}

const authRequired = () => {
  const user = store.get(userAtom)
  return user ? null : redirect('/login')
}

const redirectIfUser = () => {
  const user = store.get(userAtom)
  return user ? redirect('/profile') : null
}

const loadCurrentUser = async () => {
  const user = await AuthClient.getCurrentUser()
  store.set(userAtom, user)
  return null
}

const logoutUser = () => {
  store.set(userAtom, null)
  return null
}

export const namedPages: NamedRoute[] = [
  { path: '/', element: <PublicPage />, name: 'Public' },
  {
    path: 'private',
    element: <PrivatePage />,
    loader: authRequired,
    name: 'Private',
  },
]

const routes: LayoutRoute[] = [
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

export const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default createBrowserRouter(routes)
