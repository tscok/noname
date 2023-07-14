import { cacheRequest } from '../cache'
import { apiClient } from './ApiClient'

class UserClient {
  async getUsers() {
    return cacheRequest('USERS', () => apiClient.getUsers())
  }

  async getUser(userId: number) {
    return cacheRequest('USER', () => apiClient.getUser(userId))
  }
}

export const userClient = new UserClient()
