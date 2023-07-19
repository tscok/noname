import { cacheRequest } from '../cache'
import { apiClient } from './ApiClient'
import { CompanyUserExtendedModel, CompanyUserModel } from './CinodeApi'

type SimpleUser = {
  firstName: string
  lastName: string
  title: string
  userId: number
  image: SimpleImage
}

type SimpleImage = {
  smallImageUrl: string
  largeImageUrl: string
}

type AvailableUser = SimpleUser & { availability: number }

function mapToSimpleUser(
  user: CompanyUserExtendedModel | CompanyUserModel
): SimpleUser {
  return {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    title: user.title ?? '',
    userId: user.companyUserId ?? NaN,
    image: {
      smallImageUrl: user.image?.url ?? '',
      largeImageUrl: user.image?.largeImageUrl ?? '',
    },
  }
}

const CONSULTANT_TITLES = [
  'Data Engineer',
  'Data Scientist',
  'Designer',
  'Developer',
  'Product Manager',
  'Project Manager',
  'QA Engineer',
  'QA Specialist',
  'Scrum Master',
  'Software engineer',
  'Systems Engineer',
  'UI/UX Designer',
  'UX Designer',
]

const isConsultant = (title: string): boolean =>
  CONSULTANT_TITLES.includes(title) || title.startsWith('Lead Consultant')

class UserClient {
  async getUser(userId: number) {
    return cacheRequest(`USER-${userId}`, async () => {
      const { data } = await apiClient.getUser(userId)
      return mapToSimpleUser(data)
    })
  }

  async getUsers() {
    return cacheRequest('USERS', async () => {
      const { data } = await apiClient.getUsers()
      return data.map(mapToSimpleUser)
    })
  }

  async getUsersAvailable(): Promise<AvailableUser[]> {
    const usersMap = await this.getUsersMap()
    const availabilityMap = await this.getAvailabilityMap()
    const availableUsers: AvailableUser[] = []
    for (let [userId, availability] of availabilityMap) {
      const user = usersMap.get(userId)
      if (user && isConsultant(user.title)) {
        availableUsers.push({ ...user, availability })
      }
    }
    return availableUsers
  }

  async getUsersMap() {
    const users = await this.getUsers()
    const usersMap = new Map<number, SimpleUser>()
    users.forEach((user) => usersMap.set(user.userId, user))
    return usersMap
  }

  async getAvailabilityMap() {
    const startDate = new Date()
    const endDate = new Date(new Date().setMonth(startDate.getMonth() + 1))
    return cacheRequest('USERS-AVAILABILITY', async () => {
      const { data } = await apiClient.getAvailability(
        startDate.toISOString(),
        endDate.toISOString()
      )
      const availabilityMap = new Map<number, number>()
      data.forEach(({ companyUserId, availability }) => {
        if (companyUserId && availability) {
          availabilityMap.set(companyUserId, availability)
        }
      })
      return availabilityMap
    })
  }
}

export const userClient = new UserClient()
