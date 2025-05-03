import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { SportLeague } from '@src/types/sport-league'
import { SportTypes } from '@src/types/sport-type'
import environment from '../../../environment'

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
}
