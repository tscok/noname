import { FC } from 'react'
import { DateTime } from 'luxon'

import { useSkills, useTimespan } from './hooks'
import { BarChart, StatsCard } from './components'
import { Div } from '../../ui'

type SkillsCardProps = {
  startDate: DateTime
}

export const SkillsCard: FC<SkillsCardProps> = ({ startDate }) => {
  const { data, error, status } = useSkills(startDate)
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
              data: data.skills.map((skill) => skill.stats.users),
            },
            {
              label: 'Avg Level',
              data: data.skills.map((skill) => skill.stats.avgLevel),
            },
            {
              label: 'Favourites',
              data: data.skills.map((skill) => skill.stats.favourites),
            },
          ]}
          labels={data.skills.map((skill) => skill.name)}
        />
      </Div>
    </StatsCard>
  )
}
