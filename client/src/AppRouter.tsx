import { createBrowserRouter } from 'react-router-dom'

import { AuthRequired, Layout } from './components'
import { LoginPage, NotFoundPage, DashboardPage, StartPage } from './pages'

type Route = {
  path?: string
  element: JSX.Element
  children?: Route[]
}

const routes: Route[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <StartPage /> },
      {
        path: '/dashboard',
        element: (
          <AuthRequired>
            <DashboardPage />
          </AuthRequired>
        ),
      },
      { path: '/login', element: <LoginPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]

export const AppRouter = createBrowserRouter(routes)
