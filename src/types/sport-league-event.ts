import { SportCompetitor } from './sport-competitor'

export interface SportLeagueEvent {
  id: string
  firstTeam: SportCompetitor
  secondTeam: SportCompetitor
  gameTime: string
  statusType: string
  downDistance: string
  isFinished: string
  isInFuture: string
  isLive: string
  broadcastStations: string[]
}
