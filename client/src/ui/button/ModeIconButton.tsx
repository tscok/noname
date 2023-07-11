import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'

interface ModeIconButtonProps {
  mode: 'dark' | 'light'
  onClick: () => void
}

export const ModeIconButton: FC<ModeIconButtonProps> = ({ mode, onClick }) => (
  <IconButton color="inherit" onClick={onClick}>
    {mode === 'dark' ? <LightMode /> : <DarkMode />}
  </IconButton>
)
