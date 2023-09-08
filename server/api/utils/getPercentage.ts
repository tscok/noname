export function getPercentage(part: number, total: number) {
  return {
    rawValue: part,
    percentage: Math.round((part / total) * 100),
  }
}
