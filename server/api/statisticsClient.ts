import { cacheRequest } from '../cache'
import { TODAY } from '../config'
import { User, UserStatistics } from '../types'
import { getPercentage, sortBySkillStats } from './utils'
import { usersClient } from './usersClient'
import { skillsClient } from './skillsClient'

class StatisticsClient {
  async getUserStatistics(date: string = TODAY): Promise<UserStatistics> {
    return cacheRequest(`STATISTIC-USERS-${date}`, async () => {
      const users = await usersClient.getEnrichedUsers(date)
      const available: User[] = []
      const unavailable: User[] = []
      const other: User[] = []

      users.forEach((user) => {
        if (user.availability === 1) {
          available.push(user)
        } else if (user.availability === 0) {
          unavailable.push(user)
        } else {
          other.push(user)
        }
      })

      return {
        available: getPercentage(available.length, users.length),
        unavailable: getPercentage(unavailable.length, users.length),
        other: getPercentage(other.length, users.length),
        total: users.length,
      }
    })
  }

  async getSkillStatistics(date: string = TODAY, limit: number = 5) {
    return cacheRequest(`STATISTIC-SKILLS-${date}`, async () => {
      const users = await usersClient.getUsersByFilter('AVAILABLE', date)
      const skills = await skillsClient.getSkillsWithStats(users, date)
      return skills.sort((a, b) => sortBySkillStats(b, a)).slice(0, limit)
    })
  }
}

export const statisticsClient = new StatisticsClient()
