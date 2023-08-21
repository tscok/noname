import { User } from '../../types'

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

export function hasTitle(user: User) {
  if (!user.title) return false
  const hasKnownTitle = KNOWN_TITLES.includes(user.title)
  const hasLeadTitle = user.title.startsWith('Lead Consultant')
  return hasKnownTitle || hasLeadTitle
}
