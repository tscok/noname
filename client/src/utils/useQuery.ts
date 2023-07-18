import { useEffect, useState } from 'react'

type QueryState<T> = {
  data?: T
  error?: Error
  status: 'done' | 'loading' | 'init'
}

export default function useQuery<T>(request: () => Promise<T>) {
  const [state, setState] = useState<QueryState<T>>({ status: 'init' })

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ status: 'loading' })
        const response = await request()
        setState({ data: response, status: 'done' })
      } catch (e) {
        setState({ error: e as Error, status: 'done' })
      }
    }
    if (state.status === 'init') {
      fetchData()
    }
  })

  return state
}
