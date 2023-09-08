import { FC, PropsWithChildren } from 'react'
import Container from '@mui/material/Container'
import { Stack } from '@mui/material'

const centeredPage = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  mt: 10,
}

interface PageProps extends PropsWithChildren {
  centered?: boolean
}

export const Page: FC<PageProps> = ({ centered, children }) => (
  <Container maxWidth="xl" sx={centered ? centeredPage : { mt: 2 }}>
    <Stack spacing={2}>{children}</Stack>
  </Container>
)
