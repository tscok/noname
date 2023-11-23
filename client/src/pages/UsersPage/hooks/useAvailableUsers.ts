import { useCallback, useEffect, useMemo } from 'react'
import { useSetAtom } from 'jotai'

import UserClient from '../../../api/ApiClient'
import useQuery from '../../../utils/useQuery'
import { availableUsersAtom } from '../../../store'
import { User } from '@backend/*'

export const useAvailableUsers = () => {
  const setAvailableUsers = useSetAtom(availableUsersAtom)

  const queryCallback = useCallback(
    async () => await UserClient.getAvailableUsers(),
    []
  )

  const { data, error, status } = useQuery(queryCallback)

  const availableUsers: User[] = useMemo(
    () => (!!data && !error && status === 'idle' ? data : []),
    [data, error, status]
  )

  useEffect(() => {
    setAvailableUsers(availableUsers)
  }, [availableUsers, setAvailableUsers])

  return { data, error, status }
}
