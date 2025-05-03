import { Routes } from '@angular/router'
import { allSportTypes } from '@src/types/sport-type'
import { SportLeaguesComponent } from './routes/sport-leagues/sport-leagues.component'

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
]
