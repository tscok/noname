import { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonBase from '@mui/material/ButtonBase'

interface TabletMenuItemProps extends PropsWithChildren {
  to: string
}

export const TabletMenuItem: FC<TabletMenuItemProps> = (props) => (
  <ButtonBase
    {...props}
    component={NavLink}
    disableRipple
    sx={(theme) => ({
      px: 1.5,
      opacity: 0.5,
      '&.active': {
        opacity: 1,
        '::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
        },
      },
    })}
  />
)
