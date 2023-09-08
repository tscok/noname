export type UserId = number

export type User = {
  availability?: number
  fullName: string
  image: UserImage
  skills?: UserSkill[]
  title: string
  userId: UserId
}

export type UserAvailability = {
  availability: number
  userId: UserId
}

export type Skill = {
  id: number
  name: string
}

export type UserSkill = Skill & {
  favourite: boolean
  level: number
  userId: UserId
}

export type SkillWithStats = {
  name: string
  avgLevel: number
  favourites: number
  users: number
}

export type UserImage = {
  largeImageUrl: string
  smallImageUrl: string
}

export type UserStatistics = {
  available: {
    rawValue: number
    percentage: number
  }
  unavailable: {
    rawValue: number
    percentage: number
  }
  other: {
    rawValue: number
    percentage: number
  }
  total: number
}
