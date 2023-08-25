import { useCallback } from 'react'
import { DateTime } from 'luxon'

import UserClient from '../../../api/UserClient'
import useQuery, { QueryStatus } from '../../../utils/useQuery'

const TODAY = DateTime.now()

type ReturnValue = {
  data: typeof DEFAULT_DATA
  error?: Error
  status: QueryStatus
}

const DEFAULT_DATA = {
  available: { rawValue: 0, percentage: 0 },
  unavailable: { rawValue: 0, percentage: 0 },
  other: { rawValue: 0, percentage: 0 },
  total: 0,
}

export const useStats = (date: DateTime = TODAY): ReturnValue => {
  const startDate = String(date.toISODate())

  const queryCallback = useCallback(
    async () => await UserClient.getStats(startDate),
    [startDate]
  )

  const { data = DEFAULT_DATA, error, status } = useQuery(queryCallback)

  return {
    data,
    error,
    status,
  }
}
