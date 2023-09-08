import { FC } from 'react'
import { useAtom } from 'jotai'

import { Page, PageContent, PageHeader } from '../../ui'
import { AvailabilityCard } from './AvailabilityCard'
import { SkillsCard } from './SkillsCard'
import { dateAtom } from '../../store'

export const DashboardPage: FC = () => {
  const [date, setDate] = useAtom(dateAtom)

  return (
    <Page>
      <PageHeader
        datePickerProps={{ onChange: setDate, value: date }}
        title="Dashboard"
      />
      <PageContent direction={{ lg: 'row' }}>
        <AvailabilityCard />
        <SkillsCard />
      </PageContent>
    </Page>
  )
}
