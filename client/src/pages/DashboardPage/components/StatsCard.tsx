import { FC, PropsWithChildren } from 'react'
import { Skeleton, Stack, Card, CardContent, CardActions } from '@mui/material'
import ArrowIcon from '@mui/icons-material/ArrowRightAltSharp'

import { Text, Heading, Divider, Paragraph } from '../../../ui'

type StatsCardProps = PropsWithChildren & {
  dates: { from: string; to: string }
  footer?: string
  isError: boolean
  isLoading: boolean
  title: string
  value?: number | string
}

export const StatsCard: FC<StatsCardProps> = ({
  children,
  dates,
  footer,
  isError,
  isLoading,
  title,
  value,
}) => {
  return (
    <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1 }}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{ pb: 4 }}
        >
          <Text variant="button">{title}</Text>
          <Text
            alignItems="center"
            display="flex"
            variant="button"
            sx={{ opacity: 0.5 }}
          >
            {dates.from}
            <ArrowIcon color="inherit" fontSize="small" />
            {dates.to}
          </Text>
        </Stack>
        {(() => {
          if (isError) {
            return <Paragraph>An unexpected error occurred!</Paragraph>
          }

          if (isLoading) {
            return (
              <Heading variant="h3">
                <Skeleton width={140} />
              </Heading>
            )
          }

          if (value) {
            return <Heading variant="h3">{value}</Heading>
          }

          return children
        })()}
      </CardContent>
      {footer && (
        <>
          <Divider />
          <CardActions sx={{ alignItems: 'center' }}>
            <Text variant="caption" sx={{ ml: 1 }}>
              {isLoading ? <Skeleton variant="text" width={400} /> : footer}
            </Text>
          </CardActions>
        </>
      )}
    </Card>
  )
}
