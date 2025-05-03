import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { allSportTypes } from '@src/types/sport-type'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Sports'
  readonly allSportTypes = allSportTypes
}
