import Client from './Client'

export type SimpleUser = {
  firstName: string
  lastName: string
  userId: number
}

class UserClient extends Client {
  async getUsers(): Promise<SimpleUser[]> {
    return this.get('/api/users')
  }
}

export default new UserClient()
