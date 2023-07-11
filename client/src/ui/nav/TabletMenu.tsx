import { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

export const TabletMenu: FC<PropsWithChildren> = (props) => (
  <Box
    {...props}
    sx={{
      alignSelf: 'stretch',
      display: { xs: 'none', sm: 'flex' },
    }}
  />
)
