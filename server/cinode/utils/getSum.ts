export function getSum(numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n, 0)
}
