import { FC } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import { Page, PageTitle, Paragraph } from '../ui'

const unknownError = { status: 'Oops!', statusText: 'Unknown Error' }

export const ErrorPage: FC = () => {
  const error = useRouteError()
  const isRouteError = isRouteErrorResponse(error)
  const { status, statusText } = isRouteError ? error : unknownError

  return (
    <Page centered>
      <PageTitle>{status}</PageTitle>
      <Paragraph textAlign="center">
        Sorry, an unexpected error has occurred
      </Paragraph>
      <Paragraph
        textAlign="center"
        sx={{ mt: 2, fontWeight: 700 }}
        variant="body2"
      >
        {statusText}
      </Paragraph>
    </Page>
  )
}
