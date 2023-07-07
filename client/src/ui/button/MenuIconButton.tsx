import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'

interface MenuIconButtonProps {
  onClick: () => void
}

export const MenuIconButton: FC<MenuIconButtonProps> = ({ onClick }) => (
  <IconButton
    color="inherit"
    edge="start"
    sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}
    onClick={onClick}
  >
    <Menu />
  </IconButton>
)
