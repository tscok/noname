import { UserSkill, SkillWithStats } from '../../types'
import { getSum } from './getSum'
import { numSort } from './sort'

export function getSkillStats(skills: UserSkill[]): SkillWithStats {
  const favourites: number[] = []
  const levels: number[] = []

  skills.forEach((skill) => {
    favourites.push(Number(skill.favourite))
    levels.push(skill.level)
  })

  return {
    name: skills[0].name,
    avgLevel: Number((getSum(levels) / levels.length).toFixed(2)),
    favourites: getSum(favourites),
    users: skills.length,
  }
}

export function sortBySkillStats(a: SkillWithStats, b: SkillWithStats): number {
  const A = Object.values(a).filter(Number) as number[]
  const B = Object.values(b).filter(Number) as number[]
  return numSort(getSum(A), getSum(B))
}
