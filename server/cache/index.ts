import NodeCache from 'node-cache'

const nodeCache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 60 * 15 })

const cacheKeys = {
  USER: 'USER',
  USERS: 'USERS',
} as const

type CacheKey = keyof typeof cacheKeys

export async function cacheRequest(
  key: CacheKey,
  request: () => Promise<{ data: any }>
) {
  const cached = nodeCache.get(key)
  if (cached) {
    return cached
  }
  const { data } = await request()
  nodeCache.set(key, data)
  return data
}
