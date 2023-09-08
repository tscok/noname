import { cacheRequest } from '../cache'
import { TODAY } from '../config'
import { UserAvailability } from '../types'
import { apiClient } from './apiClient'
import { mapToAvailability } from './utils'

class AvailabilityClient {
  async getAvailability(date: string = TODAY): Promise<UserAvailability[]> {
    const startDate = new Date(date)
    const endDate = new Date(new Date(date).setMonth(startDate.getMonth() + 1))
    return await cacheRequest(`AVAILABILITY-${date}`, async () => {
      try {
        const { data } = await apiClient.getAvailability(
          startDate.toISOString(),
          endDate.toISOString()
        )
        return data.map(mapToAvailability)
      } catch (e) {
        return []
      }
    })
  }
}

export const availabilityClient = new AvailabilityClient()
