import { cacheRequest } from '../cache'
import { apiClient } from './ApiClient'
import {
  AvailabilityModel,
  CompanyUserExtendedModel,
  CompanyUserModel,
  CompanyUserSkillModel,
} from './CinodeApi'

type SimpleUser = {
  firstName: string
  lastName: string
  title?: string
  userId: number
  image: SimpleImage
}

type SimpleImage = {
  smallImageUrl: string
  largeImageUrl: string
}

type UserSkill = {
  id: number
  name: string
  favourite: boolean
  level: number
}

type SimpleSkill = Pick<UserSkill, 'id' | 'name'>

type AvailableUser = SimpleUser & { availability: number }

type Availability = {
  userId: number
  availability: number
}

function mapToSimpleUser(
  model: CompanyUserExtendedModel | CompanyUserModel
): SimpleUser {
  return {
    firstName: model.firstName as string,
    lastName: model.lastName as string,
    title: model.title as string,
    userId: model.companyUserId as number,
    image: {
      smallImageUrl: model.image?.url as string,
      largeImageUrl: model.image?.largeImageUrl as string,
    },
  }
}

function mapToUserSkill(model: CompanyUserSkillModel): UserSkill {
  return {
    id: model.keyword?.id as number,
    name: model.keyword?.masterSynonym as string,
    favourite: model.favourite as boolean,
    level: model.level as number,
  }
}

function mapToAvailability(model: AvailabilityModel): Availability {
  return {
    userId: model.companyUserId as number,
    availability: model.availability as number,
  }
}

const KNOWN_TITLES = [
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

function isConsultant(user: SimpleUser) {
  if (!user.title) return false
  const hasKnownTitle = KNOWN_TITLES.includes(user.title)
  const hasLeadTitle = user.title.startsWith('Lead Consultant')
  return hasKnownTitle || hasLeadTitle
}

class UserClient {
  async getUser(userId: number): Promise<SimpleUser> {
    return cacheRequest(`USER-${userId}`, async () => {
      const { data } = await apiClient.getUser(userId)
      return mapToSimpleUser(data)
    })
  }

  async getUserSkills(userId: number): Promise<UserSkill[]> {
    return cacheRequest(`USER-${userId}-SKILLS`, async () => {
      try {
        const { data } = await apiClient.getUserSkills(userId)
        return data.map(mapToUserSkill)
      } catch (e) {
        return []
      }
    })
  }

  async getUsers(): Promise<SimpleUser[]> {
    return cacheRequest('USERS', async () => {
      const { data } = await apiClient.getUsers()
      return data.map(mapToSimpleUser)
    })
  }

  async getAvailability(): Promise<Availability[]> {
    return cacheRequest('AVAILABILITY', async () => {
      const startDate = new Date()
      const endDate = new Date(new Date().setMonth(startDate.getMonth() + 1))
      const { data } = await apiClient.getAvailability(
        startDate.toISOString(),
        endDate.toISOString()
      )
      return data.map(mapToAvailability)
    })
  }

  async getConsultants(): Promise<SimpleUser[]> {
    return cacheRequest('CONSULTANTS', async () => {
      const users = await this.getUsers()
      return users.filter(isConsultant)
    })
  }

  async getAvailableSkills(): Promise<SimpleSkill[]> {
    const consultants = await this.getConsultants()
    const promises = consultants.map(({ userId }) => this.getUserSkills(userId))
    const consultantSkills = await cacheRequest(
      'CONSULTANTS-SKILLS',
      async () => await Promise.all(promises)
    )
    const skills = new Map<number, string>()
    consultantSkills.flat().forEach(({ id, name }) => skills.set(id, name))
    return Array.from(skills)
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => new Intl.Collator().compare(a.name, b.name))
  }

  async getAvailableUsers(): Promise<AvailableUser[]> {
    const consultantsMap = await this.getConsultantsMap()
    const availabilityMap = await this.getAvailabilityMap()
    const availableUsers: AvailableUser[] = []
    availabilityMap.forEach((availability, userId) => {
      const consultant = consultantsMap.get(userId)
      if (consultant) {
        availableUsers.push({ ...consultant, availability })
      }
    })
    return availableUsers
  }

  async getConsultantsMap(): Promise<Map<number, SimpleUser>> {
    const consultants = await this.getConsultants()
    return new Map(consultants.map((user) => [user.userId, user]))
  }

  async getAvailabilityMap(): Promise<Map<number, number>> {
    const availability = await this.getAvailability()
    return new Map(
      availability
        .filter((user) => user.userId && user.availability)
        .map((user) => [user.userId, user.availability])
    )
  }
}

export const userClient = new UserClient()
