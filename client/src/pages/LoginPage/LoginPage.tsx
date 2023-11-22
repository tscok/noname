import { FC } from 'react'

import { Page, PageTitle, Paragraph } from '../../ui'
import { LoginButton } from '../../components'
import { FormProvider } from '../../form-context'
import { LoginForm, formState } from './components'

export const LoginPage: FC = () => (
  <Page centered>
    <PageTitle>Hello Login</PageTitle>
    <Paragraph>Some pages require authentication</Paragraph>
    <FormProvider initialState={formState}>
      <LoginForm />
    </FormProvider>
    <LoginButton />
  </Page>
)
