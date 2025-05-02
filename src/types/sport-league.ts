import type { LeagueTypes } from './league-types'

export interface SportLeague {
  id: string
  leagueType: LeagueTypes
  shortName: null | string
  displayName: string
  name: string
  abbreviation: string
  logos: string[]
}
