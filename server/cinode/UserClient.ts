import { cacheRequest, KEY } from '../cache'
import { apiClient } from './ApiClient'

class UserClient {
  async getUsers() {
    return cacheRequest(KEY.USERS, () => apiClient.getUsers())
  }

  async getUser(userId: number) {
    return cacheRequest(KEY.USER, () => apiClient.getUser(userId))
  }
}

export const userClient = new UserClient()
