import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import environment from '../../environment'
import { SportLeague } from '@src/types/sport-league'
import { SportTypes } from '@src/types/sport-type'

export interface SportLeaguesResponse {
  leagues: SportLeague[]
}

@Injectable({ providedIn: 'root' })
export class SportLeaguesService {
  private http = inject(HttpClient)

  getLeagues(sport: SportTypes): Observable<SportLeaguesResponse> {
    return this.http.get<SportLeaguesResponse>(
      `${environment.api}/api/sports/${sport}/leagues`,
    )
  }
}
