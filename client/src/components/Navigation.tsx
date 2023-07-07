import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Div,
  MenuIconButton,
  MobileMenu,
  MobileMenuItem,
  ModeIconButton,
  NavBar,
  NavBarTitle,
  TabletMenu,
  TabletMenuItem,
  UserIconButton,
} from '../ui'
import { APP_NAME } from '../utils/config'
import { useMode, useUser } from '../store'
import { namedPages } from '../AppRouter'

const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mode, setMode] = useMode()
  const navigate = useNavigate()
  const user = useUser()

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <NavBar>
        <MenuIconButton onClick={toggleMenu} />
        <NavBarTitle>{APP_NAME}</NavBarTitle>
        <TabletMenu>
          {namedPages.map(({ name, path }) => (
            <TabletMenuItem key={name} to={path}>
              {name}
            </TabletMenuItem>
          ))}
        </TabletMenu>
        <Div flexGrow={1} />
        <ModeIconButton mode={mode} onClick={toggleMode} />
        <UserIconButton
          onClick={() => navigate('/profile')}
          userName={user?.name}
          userPicture={user?.picture}
        />
      </NavBar>
      <MobileMenu onClose={toggleMenu} open={menuOpen}>
        {namedPages.map(({ name, path }) => (
          <MobileMenuItem key={name} onClick={toggleMenu} to={path}>
            {name}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  )
}

export default Navigation
