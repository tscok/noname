import { FC } from 'react'

import UserClient from '../api/UserClient'
import useQuery from '../utils/useQuery'
import { Page, PageTitle, Paragraph, Spinner } from '../ui'

export const UsersPage: FC = () => {
  const {
    data = [],
    status,
    error,
  } = useQuery(async () => await UserClient.getUsers())

  return (
    <Page>
      <PageTitle>Users</PageTitle>
      {(() => {
        if (error) {
          return <Paragraph>Oops! An unexpected error occurred</Paragraph>
        }
        if (status === 'loading') {
          return <Spinner />
        }
        return <Paragraph>{data.length} users found</Paragraph>
      })()}
    </Page>
  )
}
