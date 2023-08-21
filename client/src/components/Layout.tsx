import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'

import Navigation from './Navigation'
import { NavBarContent as NavigationSpacer } from '../ui/nav/NavBarContent'

export const Layout: FC = () => (
  <>
    <Navigation />
    <main>
      <NavigationSpacer />
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="sv-se">
        <Outlet />
      </LocalizationProvider>
    </main>
  </>
)
