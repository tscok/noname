import NodeCache from 'node-cache'
import RateLimiter from './RateLimiter'
import { RATE_LIMIT, RATE_LIMIT_TIMEFRAME } from '../config'

const nodeCache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 60 * 15 })
const { enqueue } = new RateLimiter(RATE_LIMIT, RATE_LIMIT_TIMEFRAME)

export async function cacheRequest<T>(
  key: string,
  request: () => Promise<T>
): Promise<T> {
  const cached = nodeCache.get(key) as T
  if (cached) {
    console.log(`-- SERVING CACHED -- ${key} --`)
    return cached
  }
  const data = await enqueue(request, key)
  nodeCache.set(key, data)
  return data
}
