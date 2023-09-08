import { useCallback, useEffect } from 'react'
import { useSetAtom } from 'jotai'

import UserClient from '../../../api/ApiClient'
import useQuery from '../../../utils/useQuery'
import { availableUsersAtom } from '../../../store'

export const useAvailableUsers = () => {
  const setAvailableUsers = useSetAtom(availableUsersAtom)

  const queryCallback = useCallback(
    async () => await UserClient.getAvailableUsers(),
    []
  )

  const { data, error, status } = useQuery(queryCallback)

  useEffect(() => {
    if (data && !error && status === 'idle') {
      setAvailableUsers(data)
    }
  }, [data, error, status])

  return { data, error, status }
}
