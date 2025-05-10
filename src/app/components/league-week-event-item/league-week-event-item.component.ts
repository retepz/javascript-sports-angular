import { Component, input } from '@angular/core'
import { SportLeagueEvent } from '@src/types/sport-league-event'
import { LeagueWeekEventItemHeaderComponent } from './header/league-week-event-item-header.component'
import { EventItemTeamsContainerComponent } from './teams-container/event-item-teams-container.component'
import { EventItemTeamComponent } from './team/event-item-team.component'

@Component({
  imports: [
    LeagueWeekEventItemHeaderComponent,
    EventItemTeamsContainerComponent,
    EventItemTeamComponent,
  ],
  selector: 'league-week-event-item',
  templateUrl: './league-week-event-item.component.html',
  styleUrl: './league-week-event-item.component.css',
})
export class LeagueWeekEventItemComponent {
  readonly leagueEvent = input.required<SportLeagueEvent>()
}
