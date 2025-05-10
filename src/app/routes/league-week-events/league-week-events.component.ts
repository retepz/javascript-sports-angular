import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SportLeaguesService } from '../../services/api/sport-leagues-service'
import { injectQuery } from '@tanstack/angular-query-experimental'
import { lastValueFrom } from 'rxjs'
import { LeagueTypes } from '@src/types/league-types'
import { HttpResponse } from '@angular/common/http'
import { SportLeagueEvent } from '@src/types/sport-league-event'
import { LeagueWeekEventItemComponent } from '../../components/league-week-event-item/league-week-event-item.component'
import { LoadingComponent } from '../../components/loading/loading.component'

@Component({
  imports: [LeagueWeekEventItemComponent, LoadingComponent],
  selector: 'league-week-events',
  templateUrl: './league-week-events.component.html',
  styleUrl: './league-week-events.component.css',
})
export class LeagueWeekEventsComponent implements OnInit, OnChanges {
  readonly leagueType = input.required<LeagueTypes>()

  getLeagueEvents = injectQuery(() => ({
    queryKey: ['league', this.leagueType(), 'currentweek', 'events'],
    queryFn: async () => {
      try {
        const result = await lastValueFrom(
          this.sportLeaguesService.getLeagueWeekEvents(this.leagueType()),
        )

        if ((result as HttpResponse<SportLeagueEvent[]>).status === 404) {
          return null
        }

        return (result as SportLeagueEvent[])?.sort((a, b) => {
          if ((a.isLive && b.isLive) || (a.isInFuture && b.isInFuture)) {
            return 0
          }
          if (a.isLive || a.isInFuture) {
            return -1
          }
          return 1
        })
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
    this.title.setTitle(`League Week Events | ${newLeagueType}`)
  }
}
