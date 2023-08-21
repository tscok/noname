import { FC } from 'react'
import { Skeleton, Stack, Card, CardContent, CardActions } from '@mui/material'

import { Text, Heading, Divider, Paragraph } from '../../ui'

type StatsCardProps = {
  description: string
  isError: boolean
  isLoading: boolean
  title: string
  value: number | string
}

const StatsCard: FC<StatsCardProps> = ({
  description,
  isError,
  isLoading,
  title,
  value,
}) => {
  return (
    <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Text variant="button" sx={{ opacity: 0.5 }}>
            {title}
          </Text>
        </Stack>
        {isError ? (
          <Paragraph>An unexpected error occurred!</Paragraph>
        ) : (
          <Heading variant="h3">
            {isLoading ? <Skeleton width={140} /> : value}
          </Heading>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ alignItems: 'center' }}>
        <Text variant="caption" sx={{ opacity: 0.5, ml: 1 }}>
          {isLoading ? <Skeleton variant="text" width={400} /> : description}
        </Text>
      </CardActions>
    </Card>
  )
}

export default StatsCard
