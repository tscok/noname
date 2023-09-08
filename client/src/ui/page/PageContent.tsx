import { FC } from 'react'
import { Stack, StackProps } from '@mui/material'

export const PageContent: FC<StackProps> = (props) => (
  <Stack spacing={2} {...props} />
)
