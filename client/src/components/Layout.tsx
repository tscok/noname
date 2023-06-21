import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Navigation } from '.'

export const Layout: FC = () => (
  <>
    <nav>
      <Navigation />
    </nav>
    <main>
      <Outlet />
    </main>
  </>
)
