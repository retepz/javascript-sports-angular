import { HttpClient, HttpResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { SportLeague } from '@src/types/sport-league'
import { SportTypes } from '@src/types/sport-type'
import environment from '../../../environment'
import { LeagueTypes } from '@src/types/league-types'
import { LeagueWeek } from '@src/types/league-week'
import { SportLeagueEvent } from '@src/types/sport-league-event'

export interface SportLeaguesResponse {
  leagues: SportLeague[]
}

@Injectable({ providedIn: 'root' })
export class SportLeaguesService {
  private http = inject(HttpClient)

  getLeagues(sport: SportTypes) {
    return this.http.get<SportLeaguesResponse>(
      `${environment.api}/api/sports/${sport}/leagues`,
    )
  }

  getLeagueWeek(leagueType: LeagueTypes) {
    return this.http.get<LeagueWeek | HttpResponse<LeagueWeek>>(
      `${environment.api}/api/leagues/${leagueType}/season/currentweek`,
    )
  }

  getLeagueWeekEvents(leagueType: LeagueTypes) {
    return this.http.get<SportLeagueEvent[] | HttpResponse<SportLeagueEvent[]>>(
      `${environment.api}/api/leagues/${leagueType}/season/currentweek/events`,
    )
  }
}
