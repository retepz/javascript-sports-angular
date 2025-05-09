import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SportLeaguesService } from '../../services/api/sport-leagues-service'
import { RouterLink } from '@angular/router'
import { injectQuery } from '@tanstack/angular-query-experimental'
import { lastValueFrom } from 'rxjs'
import { LeagueTypes } from '@src/types/league-types'
import { HttpResponse } from '@angular/common/http'
import { LeagueWeek } from '@src/types/league-week'

@Component({
  imports: [RouterLink],
  selector: 'league-week',
  templateUrl: './league-week.component.html',
  styleUrl: './league-week.component.css',
})
export class LeagueWeekComponent implements OnInit, OnChanges {
  readonly leagueType = input.required<LeagueTypes>()

  getLeagueWeek = injectQuery(() => ({
    queryKey: ['league', this.leagueType(), 'currentweek'],
    queryFn: async () => {
      try {
        const result = await lastValueFrom(
          this.sportLeaguesService.getLeagueWeek(this.leagueType()),
        )

        if ((result as HttpResponse<LeagueWeek>).status === 404) {
          return null
        }

        return result as LeagueWeek
      } catch {
        return null
      }
    },
    retry: 1,
  }))

  constructor(
    private title: Title,
    private sportLeaguesService: SportLeaguesService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const newLeagueTypeChange = changes['leagueType']
    if (
      newLeagueTypeChange?.currentValue !== newLeagueTypeChange?.previousValue
    ) {
      this.setTitle(newLeagueTypeChange.currentValue)
    }
  }

  ngOnInit(): void {
    this.setTitle(this.leagueType())
  }

  private setTitle(newLeagueType: string) {
    this.title.setTitle(`League Week | ${newLeagueType}`)
  }
}
