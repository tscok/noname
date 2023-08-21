import { FC, useCallback, useState } from 'react'
import { DateTime } from 'luxon'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import UserClient from '../api/UserClient'
import useQuery from '../utils/useQuery'
import { Page, PageTitle } from '../ui'
import StatsCard from './components/StatsCard'

const useDuration = (date: DateTime) => {
  const from = date.toISODate()
  const to = DateTime.fromISO(`${date.toISODate()}`)
    .plus({ month: 1 })
    .toISODate()
  return [String(from), String(to)]
}

export const DashboardPage: FC = () => {
  const [dateTime, setDateTime] = useState<DateTime>(DateTime.now())
  const [dateFrom, dateTo] = useDuration(dateTime)

  const statsCallback = useCallback(
    async () => await UserClient.getStats(String(dateTime?.toISODate())),
    [dateTime]
  )

  const skillsCallback = useCallback(
    async () => await UserClient.getSkills(String(dateTime?.toISODate())),
    [dateTime]
  )
  const stats = useQuery(statsCallback)
  const skills = useQuery(skillsCallback)

  const getAvailability = () => {
    if (!stats.data) return 'N/A'
    const float = `${
      (Number(stats.data?.available) / Number(stats.data?.total)) * 100
    }`
    return Number.parseFloat(float).toFixed(2)
  }

  return (
    <Page>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <PageTitle>Dashboard</PageTitle>
        <DatePicker
          disabled={stats.status === 'loading'}
          label="From"
          onChange={(newValue) => newValue && setDateTime(newValue)}
          slotProps={{ textField: { size: 'small' } }}
          value={dateTime}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <StatsCard
          description={`${stats.data?.available} of ${stats.data?.total} consultants available between ${dateFrom}\u2014${dateTo}`}
          isError={Boolean(stats.error)}
          isLoading={stats.status === 'loading'}
          title="Availability"
          value={`${getAvailability()}%`}
        />
        <StatsCard
          description={`Based on available consultants\u0027 skills, skill level and favourites`}
          isError={Boolean(skills.error)}
          isLoading={skills.status === 'loading'}
          title="Top Skills"
          value={
            skills.data
              ?.sort((a, b) => (b.popularity > a.popularity ? 1 : -1))
              .slice(0, 5)
              .map((skill) => skill.name)
              .join(', ') || ''
          }
        />
        <StatsCard
          description={`0 active leads between ${dateFrom}\u2014${dateTo}`}
          isError={false}
          isLoading={false}
          title="Leads"
          value={0}
        />
      </Stack>
    </Page>
  )
}
