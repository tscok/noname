import NodeCache from 'node-cache'

const nodeCache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 60 * 15 })

export async function cacheRequest(
  key: string,
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

export const KEY = {
  USER: 'USER',
  USERS: 'USERS',
}
