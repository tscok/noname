import { FC } from 'react'

import { Div, Page, PageTitle, Paragraph } from '../ui'
import { LoginButton } from '../components'

export const LoginPage: FC = () => (
  <Page centered>
    <PageTitle>Hello Login</PageTitle>
    <Paragraph textAlign="center">Some pages require authentication</Paragraph>
    <Div sx={{ mt: 2 }}>
      <LoginButton />
    </Div>
  </Page>
)
