import Client from './Client'

import { SkillWithStats, UsersStats } from '@backend/cinode/UserClient'

class UserClient extends Client {
  async getStats(startDate: string): Promise<UsersStats> {
    return this.get(`/api/users/statistics/${startDate}`)
  }

  async getSkills(startDate: string, limit: number): Promise<SkillWithStats[]> {
    return this.get(`/api/users/statistics/${startDate}/skills/${limit}`)
  }
}

export default new UserClient()
