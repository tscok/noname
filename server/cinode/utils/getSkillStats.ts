import { Skill, SkillStats } from '../../types'
import { getSum } from './'

export function getSkillStats(skills: Skill[]): SkillStats {
  const [favourites, levels] = skills.reduce<number[][]>(
    ([prev1, prev2], skill) => [
      [...prev1, Number(skill.favourite)],
      [...prev2, skill.level],
    ],
    [[], []]
  )
  return {
    avgLevel: Number((getSum(levels) / levels.length).toFixed(2)),
    favourites: getSum(favourites),
    users: skills.length,
  }
}
