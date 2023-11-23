import { FC, useCallback } from 'react'
import { Box } from '@mui/material'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { Skill } from '@backend/*'

import UserClient from '../../../api/ApiClient'
import { TODAY } from '../../../utils/config'
import { dateAtom, filteredUsersAtom, skillsAtom } from '../../../store'
import { useAllSkills } from '../hooks'
import { SkillAutocomplete } from './SkillAutocomplete'

export const SkillSearchForm: FC = () => {
  const date = useAtomValue(dateAtom)
  const setFilteredUsers = useSetAtom(filteredUsersAtom)
  const [skills, setSkills] = useAtom(skillsAtom)
  const [status] = useAllSkills()

  const handleSelect = (selected: Skill[]) => {
    setSkills(selected)
    findMatch(selected)
  }

  const findMatch = useCallback(
    async (selected: Skill[]) => {
      const startDate = date.toISODate() || TODAY
      const skillIds = selected.map(({ id }) => id)
      const result = await UserClient.getUsersBySkills(startDate, skillIds)
      setFilteredUsers(result)
    },
    [date, setFilteredUsers]
  )

  return (
    <Box sx={{ flex: 1 }}>
      <SkillAutocomplete
        loading={status === 'loading'}
        selected={skills}
        onSelect={handleSelect}
      />
    </Box>
  )
}
