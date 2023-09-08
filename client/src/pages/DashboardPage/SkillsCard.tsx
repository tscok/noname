import { FC } from 'react'
import { useAtomValue } from 'jotai'

import { dateAtom } from '../../store'
import { Div } from '../../ui'
import { BarChart, StatsCard } from './components'
import { useSkillStatistics, useTimespan } from './hooks'

export const SkillsCard: FC = () => {
  const startDate = useAtomValue(dateAtom)
  const { data, error, status } = useSkillStatistics(startDate)
  const [dateFrom, dateTo] = useTimespan(startDate)

  return (
    <StatsCard
      dates={{ from: dateFrom, to: dateTo }}
      footer={`Top ${data.limit} skills of available consultants, average skill level and favourites`}
      isError={Boolean(error)}
      isLoading={status === 'loading'}
      title={`Top ${data.limit} Available Skills`}
    >
      <Div alignItems="center" sx={{ height: 250 }}>
        <BarChart
          datasets={[
            {
              label: 'Users',
              data: data.skills.map((skill) => skill.users),
            },
            {
              label: 'Avg Level',
              data: data.skills.map((skill) => skill.avgLevel),
            },
            {
              label: 'Favourites',
              data: data.skills.map((skill) => skill.favourites),
            },
          ]}
          labels={data.skills.map((skill) => skill.name)}
        />
      </Div>
    </StatsCard>
  )
}
