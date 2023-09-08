import { cacheRequest } from '../cache'
import { TODAY } from '../config'
import { User, UserSkill, Skill, SkillWithStats } from '../types'
import { apiClient } from './apiClient'
import { mapToUserSkill, getSkillStats } from './utils'

class SkillsClient {
  async getSkillsByUser(userId: number): Promise<UserSkill[]> {
    return await cacheRequest(`USER-${userId}-SKILLS`, async () => {
      try {
        const { data } = await apiClient.getUserSkills(userId)
        return data.map(mapToUserSkill(userId))
      } catch (e) {
        return []
      }
    })
  }

  async getSkillsByUsers(users: User[]): Promise<UserSkill[]> {
    const promises = users.map((user) => this.getSkillsByUser(user.userId))
    const result = await Promise.all(promises)
    return result.flat() as UserSkill[]
  }

  async getAllSkills(users: User[], date: string = TODAY): Promise<Skill[]> {
    return await cacheRequest(`ALL-SKILLS-${date}`, async () => {
      const skills = await this.getSkillsByUsers(users)
      const skillsMap = new Map(skills.map((skill) => [skill.id, skill.name]))
      return Array.from(skillsMap, ([id, name]) => ({ id, name }))
    })
  }

  async getSkillsByName(users: User[], input: string = ''): Promise<Skill[]> {
    const skills = await skillsClient.getAllSkills(users)
    const name = input.toLowerCase()
    return skills.filter((skill) => skill.name.toLowerCase().startsWith(name))
  }

  async getSkillsWithStats(
    users: User[],
    cacheId: string
  ): Promise<SkillWithStats[]> {
    return await cacheRequest(`SKILLS-WITH-STATS-${cacheId}`, async () => {
      const userSkills = await this.getSkillsByUsers(users)
      const uniqueIds = new Set(userSkills.map((skill) => skill.id))
      return Array.from(uniqueIds, (id) => {
        const groupedBySkillId = userSkills.filter((skill) => skill.id === id)
        return getSkillStats(groupedBySkillId)
      })
    })
  }
}

export const skillsClient = new SkillsClient()
