import { FC } from 'react'

import { LoginButton } from '../components'
import { Div, Page, PageTitle, Paragraph } from '../ui'

export const LogoutPage: FC = () => (
  <Page centered>
    <PageTitle>Come back soon 🥲</PageTitle>
    <Paragraph textAlign="center">You have been logged out</Paragraph>
    <Div sx={{ mt: 2 }}>
      <LoginButton />
    </Div>
  </Page>
)
