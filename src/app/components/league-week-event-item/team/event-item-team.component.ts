import { Component, computed, input } from '@angular/core'
import { SportCompetitor } from '@src/types/sport-competitor'

@Component({
  imports: [],
  selector: 'event-item-team',
  templateUrl: './event-item-team.component.html',
  styleUrl: './event-item-team.component.css',
})
export class EventItemTeamComponent {
  readonly isFirst = input.required<boolean>()
  readonly team = input.required<SportCompetitor>()

  readonly containerClass = computed(() => {
    const baseClass = 'event-item-team-container'
    if (this.isFirst()) {
      return `${baseClass} ${baseClass}-first`
    }

    return `${baseClass} ${baseClass}-second`
  })

  readonly containerDynamicStyle = computed(() => {
    return `background-color: #${this.team().color}`
  })

  readonly teamInfoClass = computed(() => {
    const baseClass = 'event-item-team-info'
    if (this.isFirst()) {
      return `${baseClass} ${baseClass}-first`
    }

    return `${baseClass} ${baseClass}-second`
  })

  readonly homeAwayClass = computed(() => {
    const baseClass = 'event-item-team-home-away'
    if (this.isFirst()) {
      return `${baseClass}-first`
    }

    return `${baseClass}-second`
  })

  readonly homeAwayText = computed(() => {
    return this.team().isHome ? 'Home' : 'Away'
  })
}
