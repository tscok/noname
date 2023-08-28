import { FC } from 'react'
import { DateTime } from 'luxon'
import { Stack } from '@mui/material'

import { Legend, PieChart, StatsCard } from './components'
import { useStats, useTimespan } from './hooks'
import { Div } from '../../ui'

type AvailabilityCardProps = {
  startDate: DateTime
}

export const AvailabilityCard: FC<AvailabilityCardProps> = ({ startDate }) => {
  const { data, error, status } = useStats(startDate)
  const [dateFrom, dateTo] = useTimespan(startDate)

  return (
    <StatsCard
      dates={{ from: dateFrom, to: dateTo }}
      isError={Boolean(error)}
      isLoading={status === 'loading'}
      title="Consultant Availability"
    >
      <Stack
        alignItems="center"
        direction={{ sm: 'row' }}
        justifyContent="center"
        spacing={4}
      >
        <Div sx={{ height: 250 }}>
          <PieChart
            labels={['Between Assignments', 'On Assignment', 'Other']}
            datasets={[
              {
                data: [
                  data.available.percentage,
                  data.unavailable.percentage,
                  data.other.percentage,
                ],
              },
            ]}
          />
        </Div>
        <Stack spacing={4}>
          <Legend
            items={[
              {
                title: 'Between Assignments',
                description: `${data.available.rawValue} of ${data.total} consultants between assignments.`,
                value: `${data.available.percentage}%`,
              },
              {
                title: 'On Assignments',
                description: `${data.unavailable.rawValue} of ${data.total} consultants on assignments.`,
                value: `${data.unavailable.percentage}%`,
              },
              {
                title: 'Other',
                description: `${data.other.rawValue} of ${data.total} consultants shifting assignments.`,
                value: `${data.other.percentage}%`,
              },
            ]}
          />
        </Stack>
      </Stack>
    </StatsCard>
  )
}
