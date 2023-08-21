export type User = {
  firstName: string
  image: UserImage
  lastName: string
  title?: string
  userId: number
}

export type Consultant = User & {
  availability: number
  skills?: Skill[]
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

export type EnhancedSkill = Pick<Skill, 'id' | 'name'> & {
  popularity: number
}

export type Availability = {
  availability: number
  userId: number
}

export type UsersStats = {
  available: number
  total: number
}
