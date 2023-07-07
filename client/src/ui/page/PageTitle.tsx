import { FC, PropsWithChildren } from 'react'

import { Heading } from '..'

export const PageTitle: FC<PropsWithChildren> = ({ children }) => (
  <Heading variant="h4">{children}</Heading>
)
