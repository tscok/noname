export default class RateLimiter {
  static rateLimit: number
  static timeframe: number
  static count: number = 0

  constructor(rateLimit: number, timeframe: number) {
    RateLimiter.rateLimit = rateLimit
    RateLimiter.timeframe = timeframe
  }

  async enqueue<T>(request: () => Promise<T>, key: string) {
    while (RateLimiter.count >= RateLimiter.rateLimit) {
      await new Promise((res) => setTimeout(res, 200))
    }
    RateLimiter.count++
    setTimeout(() => RateLimiter.count--, RateLimiter.timeframe)
    console.log(`-- API REQUEST (${RateLimiter.count}) -- ${key} --`)
    return request()
  }
}
