import { Routes } from '@angular/router'
import { allSportTypes } from '@src/types/sport-type'
import { SportLeaguesComponent } from './routes/sport-leagues/sport-leagues.component'
import { LeagueWeekComponent } from './routes/league-week/league-week.component'
import { LeagueWeekEventsComponent } from './routes/league-week-events/league-week-events.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: `sports/${allSportTypes[0]}/leagues`,
    pathMatch: 'full',
  },
  {
    path: 'sports/:sport/leagues',
    component: SportLeaguesComponent,
  },
  {
    path: 'leagues/:leagueType/week',
    component: LeagueWeekComponent,
  },
  {
    path: 'leagues/:leagueType/week/events',
    component: LeagueWeekEventsComponent,
  },
]
