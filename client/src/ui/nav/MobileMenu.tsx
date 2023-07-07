import { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import ChevronLeft from '@mui/icons-material/ChevronLeft'

const drawerWidth = 240

interface MobileMenuProps extends PropsWithChildren {
  onClose: () => void
  open: boolean
}

export const MobileMenu: FC<MobileMenuProps> = ({
  children,
  onClose,
  open,
}) => (
  <Drawer
    open={open}
    onClose={onClose}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
      },
    }}
  >
    <Toolbar>
      <Box flexGrow={1} />
      <IconButton edge="end" onClick={onClose}>
        <ChevronLeft fontSize="small" />
      </IconButton>
    </Toolbar>
    <Divider light />
    <List>{children}</List>
  </Drawer>
)
