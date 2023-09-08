import { FC } from 'react'
import { Grid } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { Skill } from '@backend/*'

import { Page, PageContent, PageHeader, Paragraph } from '../../ui'
import { SkillSearchForm, UserCard } from './components'
import { useAvailableUsers } from './hooks'
import {
  availableUsersAtom,
  dateAtom,
  filteredUsersAtom,
  skillsAtom,
} from '../../store'

const useUsers = (skills: Skill[]) => {
  return skills.length > 0
    ? useAtomValue(filteredUsersAtom)
    : useAtomValue(availableUsersAtom)
}

export const UsersPage: FC = () => {
  const [date, setDate] = useAtom(dateAtom)
  const skills = useAtomValue(skillsAtom)
  const users = useUsers(skills)
  useAvailableUsers()

  return (
    <Page>
      <PageHeader
        datePickerProps={{ onChange: setDate, value: date }}
        title="Users"
      >
        <SkillSearchForm />
      </PageHeader>
      <PageContent>
        {(() => {
          if (skills.length > 0 && users.length === 0) {
            return <Paragraph>No users matching this filter</Paragraph>
          }

          return (
            <Grid container spacing={2}>
              {users.map((user) => (
                <Grid key={user.userId} item xs={4}>
                  <UserCard user={user} />
                </Grid>
              ))}
            </Grid>
          )
        })()}
      </PageContent>
    </Page>
  )
}
