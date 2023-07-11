import { FC, PropsWithChildren } from 'react'
import Container from '@mui/material/Container'

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

export const Page: FC<PageProps> = ({ centered, ...props }) => (
  <Container
    {...props}
    maxWidth="xl"
    sx={centered ? centeredPage : { mt: 2 }}
  />
)
