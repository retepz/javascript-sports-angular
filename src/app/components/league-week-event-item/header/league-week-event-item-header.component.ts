import { Component, computed, input } from '@angular/core'
import { SportLeagueEvent } from '@src/types/sport-league-event'

@Component({
  selector: 'league-week-event-item-header',
  templateUrl: './league-week-event-item-header.component.html',
  styleUrl: './league-week-event-item-header.component.css',
})
export class LeagueWeekEventItemHeaderComponent {
  readonly leagueEvent = input.required<SportLeagueEvent>()

  readonly leftHeaderValue = computed(() => {
    const event = this.leagueEvent()
    return event.isLive
      ? event.statusType
      : new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(event.gameTime))
  })

  readonly centerHeaderValue = computed(() => {
    const event = this.leagueEvent()
    return event.isInFuture
      ? new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(event.gameTime))
      : event.isLive
        ? event.downDistance
        : 'Final'
  })

  readonly rightHeaderValue = computed(() => {
    const event = this.leagueEvent()
    return event.broadcastStations.join(', ')
  })
}
