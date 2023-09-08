import { User } from '../../types'

const availabilityFilter = {
  AVAILABLE: 1,
  UNAVAILABLE: 0,
  OTHER: -1,
} as const

export type AvailabilityFilter = 'ALL' | keyof typeof availabilityFilter

export function filterByAvailability(
  consultants: User[],
  filter: AvailabilityFilter
): User[] {
  if (filter === 'ALL') {
    return consultants
  }

  return consultants.filter(
    (consultant) => consultant.availability === availabilityFilter[filter]
  )
}
