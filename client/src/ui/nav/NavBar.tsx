import { FC, PropsWithChildren } from 'react'
import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'

import { NavBarContent } from './NavBarContent'

export const NavBar: FC<PropsWithChildren> = (props) => (
  <AppBar color="transparent" component="nav" elevation={0} position="fixed">
    <NavBarContent {...props} />
    <Divider />
  </AppBar>
)
