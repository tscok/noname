import { FC, PropsWithChildren } from 'react'
import { Toolbar } from '@mui/material'

export const NavBarContent: FC<PropsWithChildren> = (props) => (
  <Toolbar {...props} />
)
