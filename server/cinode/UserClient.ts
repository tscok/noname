import { cacheRequest } from '../cache'
import {
  getPercent,
  getSkillStats,
  hasTitle,
  mapToAvailability,
  mapToUserSkill,
  mapToUser,
  sortByStats,
} from './utils'
import {
  Consultant,
  ConsultantAvailability,
  Skill,
  SkillWithStats,
  User,
  UserAvailability,
  UsersStats,
} from '../types'
import { apiClient } from './ApiClient'

const TODAY = new Intl.DateTimeFormat('sv-SE').format(new Date())

class UserClient {
  async getUsers(id: string): Promise<User[]> {
    return await cacheRequest(`ALL-USERS-${id}`, async () => {
      try {
        const { data } = await apiClient.getUsers()
        return data.map(mapToUser)
      } catch (e) {
        return []
      }
    })
  }

  async getAvailability(fromDate: string = TODAY): Promise<UserAvailability[]> {
    const startDate = new Date(fromDate)
    const endDate = new Date(
      new Date(fromDate).setMonth(startDate.getMonth() + 1)
    )
    return await cacheRequest(`AVAILABILITY-${fromDate}`, async () => {
      try {
        const { data } = await apiClient.getAvailability(
          startDate.toISOString(),
          endDate.toISOString()
        )
        return data.map(mapToAvailability)
      } catch (e) {
        return []
      }
    })
  }

  async getUserSkills(userId: number): Promise<Skill[]> {
    return await cacheRequest(`USER-${userId}-SKILLS`, async () => {
      try {
        const { data } = await apiClient.getUserSkills(userId)
        return data.map(mapToUserSkill)
      } catch (e) {
        return []
      }
    })
  }

  async getUsersSkills(users: User[], id: string): Promise<Skill[]> {
    return await cacheRequest(`USERS-SKILLS-${id}`, async () => {
      const promises = users.map((user) => this.getUserSkills(user.userId))
      const result = await Promise.all(promises)
      return result.flat()
    })
  }

  async getSkillsWithStats(
    users: User[],
    id: string
  ): Promise<SkillWithStats[]> {
    return await cacheRequest(`SKILLS-WITH-STATS-${id}`, async () => {
      const usersSkills = await this.getUsersSkills(users, id)
      const ids = new Set(usersSkills.map((skill) => skill.id))
      return Array.from(ids, (id) => {
        const skills = usersSkills.filter((skill) => skill.id === id)
        return {
          id: skills[0].id,
          name: skills[0].name,
          stats: getSkillStats(skills),
        }
      })
    })
  }

  async getSkillStatistics(date: string = TODAY, limit: number = 5) {
    return cacheRequest(`SKILL-STATISTICS-${date}`, async () => {
      const { available } = await this.getConsultantsByAvailability(date)
      const skills = await this.getSkillsWithStats(available, date)
      return skills.sort((a, b) => sortByStats(b, a)).slice(0, limit)
    })
  }

  async getConsultantsByAvailability(
    date: string = TODAY
  ): Promise<ConsultantAvailability> {
    return await cacheRequest(`CONSULTANT-AVAILABILITY-${date}`, async () => {
      const users = await this.getConsultants(date)
      return {
        available: users.filter((user) => user.availability === 1),
        unavailable: users.filter((user) => user.availability === 0),
        other: users.filter((user) => user.availability === -1),
      }
    })
  }

  async getConsultants(date: string = TODAY): Promise<Consultant[]> {
    return await cacheRequest(`CONSULTANTS-${date}`, async () => {
      const users = await this.getUsers(date)
      const usersMap = new Map(users.filter(hasTitle).map((u) => [u.userId, u]))
      const availabilityData = await this.getAvailability(date)
      const availabilityMap = new Map<number, Consultant>()
      availabilityData.forEach((data) => {
        const user = usersMap.get(data.userId)
        const mapped = availabilityMap.get(data.userId)
        if (user && mapped) {
          // user has several availability entries
          availabilityMap.set(data.userId, {
            ...user,
            availability: -1,
          })
        } else if (user && !mapped) {
          // user availability not yet mapped
          availabilityMap.set(data.userId, {
            ...user,
            availability: Number(Boolean(data.availability)),
          })
        } else {
          // user not found
        }
      })
      return Array.from(availabilityMap, ([_, value]) => value)
    })
  }

  async getUserStatistics(date: string = TODAY): Promise<UsersStats> {
    return cacheRequest(`USER-STATISTICS-${date}`, async () => {
      const consultants = await this.getConsultantsByAvailability(date)
      const total = Object.values(consultants).flat()
      return {
        available: {
          rawValue: consultants.available.length,
          percentage: getPercent(consultants.available.length, total.length),
        },
        unavailable: {
          rawValue: consultants.unavailable.length,
          percentage: getPercent(consultants.unavailable.length, total.length),
        },
        other: {
          rawValue: consultants.other.length,
          percentage: getPercent(consultants.other.length, total.length),
        },
        total: total.length,
      }
    })
  }
}

export const userClient = new UserClient()
