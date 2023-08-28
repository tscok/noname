import { DateTime } from 'luxon'

const TODAY = DateTime.now()

export const useTimespan = (date: DateTime = TODAY) => {
  const from = date.toISODate()
  const to = DateTime.fromISO(`${date.toISODate()}`)
    .plus({ month: 1 })
    .toISODate()

  return [String(from), String(to)]
}
