import { FC, PropsWithChildren, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import ListItemIcon from '@mui/material/ListItemIcon'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

interface MobileMenuItemProps extends PropsWithChildren {
  icon?: ReactNode
  onClick: () => void
  to: string
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({
  children,
  icon,
  onClick,
  to,
}) => (
  <ListItem disableGutters disablePadding>
    <ListItemButton
      onClick={onClick}
      component={NavLink}
      to={to}
      sx={(theme) => ({
        opacity: 0.5,
        '&.active': {
          opacity: 1,
          '::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
          },
        },
      })}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{children}</ListItemText>
    </ListItemButton>
  </ListItem>
)
