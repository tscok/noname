import { cacheRequest } from '../cache'
import {
  hasTitle,
  mapToAvailability,
  mapToUserSkill,
  mapToUser,
  getUsersMap,
  getAvailabilityMap,
} from './utils'
import {
  Availability,
  Consultant,
  EnhancedSkill,
  Skill,
  User,
  UsersStats,
} from '../types'
import { apiClient } from './ApiClient'

const TODAY = new Intl.DateTimeFormat('sv-SE').format(new Date())
class UserClient {
  async getUsers(): Promise<User[]> {
    const allUsers = await cacheRequest('ALL-USERS', async () => {
      const { data } = await apiClient.getUsers()
      return data
    })
    return allUsers.map(mapToUser)
  }

  async getAvailability(fromDate: string = TODAY): Promise<Availability[]> {
    const startDate = new Date(fromDate)
    const endDate = new Date(
      new Date(fromDate).setMonth(startDate.getMonth() + 1)
    )
    return await cacheRequest(`AVAILABILITY-${fromDate}`, async () => {
      const { data } = await apiClient.getAvailability(
        startDate.toISOString(),
        endDate.toISOString()
      )
      return data.map(mapToAvailability)
    })
  }

  async getSkillsById(userId: number): Promise<Skill[]> {
    return await cacheRequest(`USER-${userId}-SKILLS`, async () => {
      const { data } = await apiClient.getUserSkills(userId)
      return data.map(mapToUserSkill)
    })
  }

  async getSkillsByUsers(users: User[], id: string): Promise<Skill[][]> {
    return await cacheRequest(`USER-SKILLS-${id}`, async () => {
      return await Promise.all(
        users.map((user) => this.getSkillsById(user.userId))
      )
    })
  }

  async getEnhancedSkills(users: User[], id: string): Promise<EnhancedSkill[]> {
    function getScore(skill: Skill, newScore: number) {
      return Number(skill.favourite) + skill.level + newScore
    }
    return await cacheRequest(`ENHANCED-SKILLS-${id}`, async () => {
      const skills = await this.getSkillsByUsers(users, id)
      const enhancedSkills = new Map<number, EnhancedSkill>()
      skills.flat().forEach((skill) => {
        const enhanced = enhancedSkills.get(skill.id)
        if (enhanced) {
          enhancedSkills.set(skill.id, {
            ...enhanced,
            popularity: getScore(skill, enhanced.popularity + 1),
          })
        } else {
          enhancedSkills.set(skill.id, {
            id: skill.id,
            name: skill.name,
            popularity: getScore(skill, 1),
          })
        }
      })
      return Array.from(enhancedSkills, ([_, skill]) => skill)
    })
  }

  async getAvailableSkills(date: string = TODAY) {
    const users = await this.getAvailableConsultants(date)
    return await this.getEnhancedSkills(users, date)
  }

  async getConsultants(date: string = TODAY): Promise<Consultant[]> {
    return cacheRequest(`CONSULTANTS-${date}`, async () => {
      const allUsers = await this.getUsers()
      const usersAvailability = await this.getAvailability(date)
      const availabilityMap = getAvailabilityMap(usersAvailability)
      const usersMap = getUsersMap(allUsers.filter(hasTitle))
      const consultants: Consultant[] = []
      availabilityMap.forEach((availability, userId) => {
        const user = usersMap.get(userId)
        if (user) {
          consultants.push({ ...user, availability })
        }
      })
      return consultants
    })
  }

  async getAvailableConsultants(date: string = TODAY): Promise<Consultant[]> {
    const consultants = await this.getConsultants(date)
    return consultants.filter(({ availability }) => availability > 0)
  }

  async getUnavailableConsultants(date: string = TODAY): Promise<Consultant[]> {
    const consultants = await this.getConsultants(date)
    return consultants.filter(({ availability }) => availability === 0)
  }

  async getStatistics(date: string = TODAY): Promise<UsersStats> {
    const consultants = await this.getConsultants(date)
    const available = await this.getAvailableConsultants(date)
    return {
      available: available.length,
      total: consultants.length,
    }
  }
}

export const userClient = new UserClient()
