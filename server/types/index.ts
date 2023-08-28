export type User = {
  firstName: string
  image: UserImage
  lastName: string
  title?: string
  userId: number
}

export type UserAvailability = {
  availability: number
  userId: number
}

export type Consultant = User & UserAvailability

export type ConsultantAvailability = {
  available: Consultant[]
  unavailable: Consultant[]
  other: Consultant[]
}

export type Skill = {
  favourite: boolean
  id: number
  level: number
  name: string
}

export type UserImage = {
  largeImageUrl: string
  smallImageUrl: string
}

export type SkillWithStats = {
  id: number
  name: string
  stats: SkillStats
}

export type SkillStats = {
  avgLevel: number
  favourites: number
  users: number
}

export type UsersStats = {
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
