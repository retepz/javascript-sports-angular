export const allSportTypes = [
  'Football',
  'Basketball',
  'Baseball',
  'Hockey',
] as const
export type SportTypes = (typeof allSportTypes)[number]
