import { useCallback } from 'react'

import UserClient from '../../../api/ApiClient'
import useQuery from '../../../utils/useQuery'

export const useAllSkills = () => {
  const queryCallback = useCallback(
    async () => await UserClient.getAllSkills(),
    []
  )

  const { status } = useQuery(queryCallback)

  return [status]
}
