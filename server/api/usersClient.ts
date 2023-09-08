import { cacheRequest } from '../cache'
import {
  AvailabilityFilter,
  filterByAvailability,
  hasConsultantTitle,
  mapToUser,
} from './utils'
import { User, UserSkill, Skill, UserId } from '../types'
import { TODAY } from '../config'
import { apiClient } from './apiClient'
import { availabilityClient } from './availabilityClient'

class UsersClient {
  async getAllUsers(cacheId: string): Promise<User[]> {
    return await cacheRequest(`ALL-USERS-${cacheId}`, async () => {
      try {
        const { data } = await apiClient.getUsers()
        return data.map(mapToUser)
      } catch (e) {
        return []
      }
    })
  }

  async getEnrichedUsers(date: string = TODAY): Promise<User[]> {
    return await cacheRequest(`USERS-${date}`, async () => {
      const users = await this.getAllUsers(date)
      const availability = await availabilityClient.getAvailability(date)
      const usersMap = new Map(
        users.filter(hasConsultantTitle).map((user) => [user.userId, user])
      )
      availability.forEach((data) => {
        const consultant = usersMap.get(data.userId)
        if (consultant) {
          usersMap.set(data.userId, {
            ...consultant,
            availability:
              consultant.availability === undefined
                ? Number(Boolean(data.availability))
                : Number(-1),
          })
        }
      })
      return Array.from(usersMap, ([_, value]) => value)
    })
  }

  async getUsersByFilter(
    filter: AvailabilityFilter,
    date: string = TODAY
  ): Promise<User[]> {
    return await cacheRequest(`USERS-${filter}-${date}`, async () => {
      const users = await this.getEnrichedUsers(date)
      return filterByAvailability(users, filter)
    })
  }

  async getUsersBySkills(
    input: Skill['id'][],
    users: User[],
    userSkills: UserSkill[]
  ): Promise<User[]> {
    const userSkillsMap = new Map<UserId, UserSkill[]>()
    userSkills.forEach((userSkill) => {
      const prevSkills = userSkillsMap.get(userSkill.userId) || []
      userSkillsMap.set(userSkill.userId, [...prevSkills, userSkill])
    })
    const usersMap = new Map<UserId, User>(
      users.map((user) => {
        const skills = userSkillsMap.get(user.userId) || []
        return [user.userId, { ...user, skills }]
      })
    )
    const uniqueUserIds = new Set(
      userSkills
        .filter((userSkill) => input.includes(userSkill.id))
        .map((userSkill) => userSkill.userId)
    )
    return Array.from(uniqueUserIds, (userId) => usersMap.get(userId) as User)
  }
}

export const usersClient = new UsersClient()
