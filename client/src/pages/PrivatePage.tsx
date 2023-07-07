import { FC } from 'react'

import { Page, PageTitle, Paragraph } from '../ui'

export const PrivatePage: FC = () => (
  <Page centered>
    <PageTitle>Hello Privacy</PageTitle>
    <Paragraph textAlign="center">
      This page is private and require authentication
    </Paragraph>
  </Page>
)
