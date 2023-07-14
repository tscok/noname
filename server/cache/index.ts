import NodeCache from 'node-cache'

const nodeCache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 60 * 15 })

export async function cacheRequest<T>(
  key: string,
  request: () => Promise<T>
): Promise<T> {
  const cached = nodeCache.get(key) as T
  if (cached) {
    return cached
  }
  console.log('-- FETCHING CINODE DATA --')
  const data = await request()
  nodeCache.set(key, data)
  return data
}
