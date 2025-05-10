import { Component, input } from '@angular/core'
import { SportLeagueEvent } from '@src/types/sport-league-event'

@Component({
  imports: [],
  selector: 'event-item-teams-container',
  templateUrl: './event-item-teams-container.component.html',
  styleUrl: './event-item-teams-container.component.css',
})
export class EventItemTeamsContainerComponent {
  readonly leagueEvent = input.required<SportLeagueEvent>()
}
