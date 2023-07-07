import { FC } from 'react'

import { Page, PageTitle, Paragraph } from '../ui'

export const PublicPage: FC = () => (
  <Page centered>
    <PageTitle>Hello World</PageTitle>
    <Paragraph textAlign="center">
      This page is public and available to the world
    </Paragraph>
  </Page>
)
