import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import { NavBarContent as NavigationSpacer } from '../ui/nav/NavBarContent'

export const Layout: FC = () => (
  <>
    <Navigation />
    <main>
      <NavigationSpacer />
      <Outlet />
    </main>
  </>
)
