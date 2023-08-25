import { UserAvailability, Skill, User } from '../../types'
import {
  AvailabilityModel,
  CompanyUserExtendedModel,
  CompanyUserModel,
  CompanyUserSkillModel,
} from '../CinodeApi'

export function mapToUser(
  model: CompanyUserExtendedModel | CompanyUserModel
): User {
  return {
    firstName: model.firstName || 'N/A',
    lastName: model.lastName || 'N/A',
    userId: Number(model.companyUserId),
    title: model.title || undefined,
    image: {
      smallImageUrl: model.image?.url || '',
      largeImageUrl: model.image?.largeImageUrl || '',
    },
  }
}

export function mapToUserSkill(model: CompanyUserSkillModel): Skill {
  return {
    id: Number(model.keyword?.id),
    name: model.keyword?.masterSynonym || 'N/A',
    favourite: Boolean(model.favourite),
    level: Number(model.level),
  }
}

export function mapToAvailability(model: AvailabilityModel): UserAvailability {
  return {
    userId: Number(model.companyUserId),
    availability: Number(model.availability),
  }
}

export function getAvailabilityMap(
  availability: UserAvailability[]
): Map<number, number> {
  return new Map(
    availability.map(({ availability, userId }) => [userId, availability])
  )
}

export function getUsersMap(users: User[]): Map<number, User> {
  return new Map(users.map((user) => [user.userId, user]))
}
