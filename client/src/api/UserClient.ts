import Client from './Client'

import { EnhancedSkill, UsersStats } from '@backend/cinode/UserClient'

class UserClient extends Client {
  async getStats(startDate: string): Promise<UsersStats> {
    return this.get(`/api/users/stats/${startDate}`)
  }

  async getSkills(startDate: string): Promise<EnhancedSkill[]> {
    return this.get(`/api/users/available/${startDate}/skills`)
  }
}

export default new UserClient()
