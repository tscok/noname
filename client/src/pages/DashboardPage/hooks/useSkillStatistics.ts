import { useCallback } from 'react'
import { DateTime } from 'luxon'

import UserClient from '../../../api/ApiClient'
import useQuery, { QueryStatus } from '../../../utils/useQuery'
import { SkillWithStats } from '@backend/*'

const SKILLS_LIMIT = 5
const TODAY = DateTime.now()

type ReturnValue = {
  data: {
    limit: number
    skills: SkillWithStats[]
  }
  error?: Error
  status: QueryStatus
}

export const useSkillStatistics = (date: DateTime = TODAY): ReturnValue => {
  const startDate = String(date.toISODate())

  const queryCallback = useCallback(
    async () => await UserClient.getSkillStatistics(startDate, SKILLS_LIMIT),
    [startDate]
  )

  const { data = [], error, status } = useQuery(queryCallback)

  return {
    data: {
      limit: SKILLS_LIMIT,
      skills: data,
    },
    error,
    status,
  }
}
