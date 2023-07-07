import { Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const NavBarTitle: FC<PropsWithChildren> = (props) => (
  <Typography
    {...props}
    variant="h6"
    sx={{ mr: 3, fontWeight: 700, userSelect: 'none' }}
  />
)
