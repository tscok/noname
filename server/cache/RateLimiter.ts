export default class RateLimiter {
  static rateLimit: number
  static timeframe: number
  static count: number = 0

  constructor(rateLimit: number, timeframe: number) {
    RateLimiter.rateLimit = rateLimit
    RateLimiter.timeframe = timeframe
  }

  async enqueue<T>(request: () => Promise<T>) {
    while (RateLimiter.count >= RateLimiter.rateLimit) {
      await new Promise((res) => setTimeout(res, 200))
    }
    RateLimiter.count++
    setTimeout(() => RateLimiter.count--, RateLimiter.timeframe)
    return request()
  }
}
