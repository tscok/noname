import { useEffect, useState } from 'react'

type QueryState<T> = {
  data?: T
  error?: Error
  status: 'loading' | 'idle'
}

export default function useQuery<T>(request: () => Promise<T>) {
  const [state, setState] = useState<QueryState<T>>({ status: 'idle' })

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ status: 'loading' })
        const response = await request()
        setState({ data: response, status: 'idle' })
      } catch (e) {
        setState({ error: e as Error, status: 'idle' })
      }
    }
    if (state.status === 'idle') {
      fetchData()
    }
  }, [request])

  return state
}
