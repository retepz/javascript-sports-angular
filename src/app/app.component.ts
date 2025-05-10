import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { allSportTypes } from '@src/types/sport-type'
import { MainNavComponent } from './components/main-nav/main-nav.component'
import { MainHeaderComponent } from './components/main-header/main-header.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavComponent, MainHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Sports'
  readonly allSportTypes = allSportTypes
}
