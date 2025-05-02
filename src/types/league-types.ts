export const allLeagueTypes = [
  'None',
  'NFL',
  'CollegeFootball',
  'CollegeBasketball',
  'NBA',
  'NHL',
  'CFL',
  'XFL',
  'UFL',
  'MLB',
  'NBAGLeague',
  'WNBA',
] as const
export type LeagueTypes = (typeof allLeagueTypes)[number]
