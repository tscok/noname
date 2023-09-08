import { FC } from 'react'
import { Stack } from '@mui/material'
import { useAtomValue } from 'jotai'

import { dateAtom } from '../../store'
import { Div } from '../../ui'
import { Legend, PieChart, StatsCard } from './components'
import { useUserStatistics, useTimespan } from './hooks'

export const AvailabilityCard: FC = () => {
  const startDate = useAtomValue(dateAtom)
  const { data, error, status } = useUserStatistics(startDate)
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
