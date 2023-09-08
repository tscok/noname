import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom, useAtomValue } from 'jotai'

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
import { modeAtom, userAtom } from '../store'

type Page = {
  label: string
  path: string
}

const pages: Page[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Users', path: '/users' },
]

const Navigation: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mode, setMode] = useAtom(modeAtom)
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()

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
          {pages.map((page) => (
            <TabletMenuItem key={page.path} to={page.path}>
              {page.label}
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
        {pages.map((page) => (
          <MobileMenuItem key={page.path} onClick={toggleMenu} to={page.path}>
            {page.label}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </>
  )
}

export default Navigation
