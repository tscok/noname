import { UserAvailability, UserSkill, User } from '../../types'
import {
  AvailabilityModel,
  CompanyUserExtendedModel,
  CompanyUserSkillModel,
} from '../cinode/CinodeApi'

export function mapToUser(model: CompanyUserExtendedModel): User {
  return {
    fullName: `${model.firstName} ${model.lastName}`,
    userId: Number(model.companyUserId),
    title: model.title || 'N/A',
    image: {
      smallImageUrl: model.image?.url || '',
      largeImageUrl: model.image?.largeImageUrl || '',
    },
  }
}

export function mapToUserSkill(userId: number) {
  return (model: CompanyUserSkillModel): UserSkill => ({
    id: Number(model.keyword?.id),
    name: model.keyword?.masterSynonym || 'N/A',
    favourite: Boolean(model.favourite),
    level: Number(model.level),
    userId,
  })
}

export function mapToAvailability(model: AvailabilityModel): UserAvailability {
  return {
    userId: Number(model.companyUserId),
    availability: Number(model.availability),
  }
}
