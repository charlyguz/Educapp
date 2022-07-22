export const differenceInMinutes = (date1: Date, date2: Date) => {
  const diffMs = date1.getTime() - date2.getTime()

  return Math.round(((diffMs % 86_400_000) % 3_600_000) / 60_000)
}
