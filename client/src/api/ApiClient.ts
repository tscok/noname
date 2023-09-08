import Client from './Client'

import { User, Skill, SkillWithStats, UserStatistics } from '@backend/*'

class UserClient extends Client {
  async getAvailableUsers(): Promise<User[]> {
    return this.get('/api/users/available')
  }

  async getAllSkills(): Promise<Skill[]> {
    return this.get('/api/skills')
  }

  async getUsersBySkills(startDate: string, input: number[]): Promise<User[]> {
    return this.post('/api/search/skills/users', { startDate, input })
  }

  async getSkillsByName(name: string): Promise<Skill[]> {
    return this.get(`/api/search/skills?name=${name}`)
  }

  async getUserStatistics(startDate: string): Promise<UserStatistics> {
    return this.get(`/api/statistics/${startDate}/users`)
  }

  async getSkillStatistics(
    startDate: string,
    limit: number
  ): Promise<SkillWithStats[]> {
    return this.get(`/api/statistics/${startDate}/skills/${limit}`)
  }
}

export default new UserClient()
