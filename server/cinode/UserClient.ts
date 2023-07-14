import { cacheRequest } from '../cache'
import { apiClient } from './ApiClient'

type SimpleUser = {
  firstName: string
  lastName: string
  userId: number
}

class UserClient {
  async getUsers() {
    return cacheRequest('USERS', async () => {
      const { data } = await apiClient.getUsers()
      return data.map<SimpleUser>((user) => ({
        firstName: String(user.firstName),
        lastName: String(user.lastName),
        userId: Number(user.companyUserId),
      }))
    })
  }

  async getUser(userId: number) {
    return cacheRequest(`USER-${userId}`, async () => {
      const { data } = await apiClient.getUser(userId)
      return data
    })
  }
}

export const userClient = new UserClient()
