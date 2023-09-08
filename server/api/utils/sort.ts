export function numSort(n1: number, n2: number): number {
  if (n1 === n2) return 0
  return n1 > n2 ? 1 : -1
}
