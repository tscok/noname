import { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { AccountCircle } from '@mui/icons-material'

interface UserIconButtonProps {
  onClick: () => void
  userName?: string
  userPicture?: string
}

export const UserIconButton: FC<UserIconButtonProps> = ({
  onClick,
  userName,
  userPicture,
}) => (
  <IconButton color="inherit" onClick={onClick}>
    <Avatar
      alt={userName}
      src={userPicture}
      sx={{
        background: 'inherit',
        color: 'inherit',
        width: 24,
        height: 24,
      }}
    >
      <AccountCircle />
    </Avatar>
  </IconButton>
)
