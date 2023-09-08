import { FC } from 'react'
import { useAtomValue } from 'jotai'

import { LogoutButton } from '../components'
import { Avatar, Div, Heading, Page, Paragraph } from '../ui'
import { userAtom } from '../store'

export const ProfilePage: FC = () => {
  const user = useAtomValue(userAtom)

  return (
    <Page centered>
      <Avatar
        alt={user?.name}
        src={user?.picture}
        sx={{ width: 96, height: 96 }}
      />
      <Heading variant="h6">{user?.name}</Heading>
      <Paragraph textAlign="center">This is your profile page</Paragraph>
      <Div sx={{ mt: 2 }}>
        <LogoutButton />
      </Div>
    </Page>
  )
}
