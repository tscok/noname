import { apiClient } from './ApiClient'

class UserClient {
  async getUsers() {
    const { data } = await apiClient.getUsers()
    return data
  }

  async getUser(userId: number) {
    const { data } = await apiClient.getUser(userId)
    return data
  }
}

export const userClient = new UserClient()
