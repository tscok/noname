import { FC, useState } from 'react'
import { DateTime } from 'luxon'
import { Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { Page, PageTitle } from '../../ui'
import { AvailabilityCard } from './AvailabilityCard'
import { SkillsCard } from './SkillsCard'

export const DashboardPage: FC = () => {
  const [dateTime, setDateTime] = useState<DateTime>(DateTime.now())

  return (
    <Page>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <PageTitle>Dashboard</PageTitle>
          <DatePicker
            label="From"
            onChange={(newValue) => newValue && setDateTime(newValue)}
            slotProps={{ textField: { size: 'small' } }}
            value={dateTime}
          />
        </Stack>
        <Stack direction={{ lg: 'row' }} spacing={2}>
          <AvailabilityCard startDate={dateTime} />
          <SkillsCard startDate={dateTime} />
        </Stack>
      </Stack>
    </Page>
  )
}
