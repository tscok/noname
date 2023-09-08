import { User } from '../../types'

const NON_CONSULTANT_TITLES = [
  'api user',
  'business developer',
  'business development manager',
  'cfo',
  'chief sales officer',
  'consultant manager',
  'cpco',
  'cpto',
  'cxo',
  'executive assistant',
  'executive chairman',
  'finance',
  'general manager',
  'global is/it manager',
  'head of contract management',
  'head of marketing',
  'head of office administration',
  'marketing strategist',
  'office administration specialist',
  'po',
  'regional manager svea',
  'ta specialist',
  'ta team lead',
  'talent acquisition specialist',
  'underkonsult',
]

function isNonConsultantTitle(userTitle?: string) {
  if (userTitle === undefined) return true
  const includesTitle = NON_CONSULTANT_TITLES.includes(userTitle)
  const startsWithTitle = NON_CONSULTANT_TITLES.some((title) =>
    userTitle.startsWith(title)
  )
  return includesTitle || startsWithTitle
}

export function hasConsultantTitle(user: User) {
  return !isNonConsultantTitle(user.title?.toLowerCase())
}
