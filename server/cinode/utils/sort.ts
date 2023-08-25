import { SkillWithStats } from '../../types'
import { getSum } from './getSum'

export function numSort(n1: number, n2: number): number {
  if (n1 === n2) return 0
  return n1 > n2 ? 1 : -1
}

export function sortByStats(a: SkillWithStats, b: SkillWithStats): number {
  return numSort(getSum(Object.values(a.stats)), getSum(Object.values(b.stats)))
}
