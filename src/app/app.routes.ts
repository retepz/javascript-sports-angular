import { Routes } from '@angular/router'
import { SportLeaguesComponent } from '../routes/sport-leagues/sport-leagues.component'

export const routes: Routes = [
  {
    path: 'sports/:sport/leagues',
    component: SportLeaguesComponent,
  },
]
