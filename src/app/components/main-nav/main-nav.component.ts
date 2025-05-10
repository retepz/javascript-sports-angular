import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { allSportTypes } from '@src/types/sport-type'

const toggleNavKey = 'ToggleNav'
@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
})
export class MainNavComponent implements OnInit {
  readonly allSportTypes = allSportTypes
  show = false

  ngOnInit(): void {
    const showFromStorage = localStorage.getItem(toggleNavKey)
    this.show = showFromStorage === null || showFromStorage === 'true'
  }

  handleNavToggle() {
    this.show = !this.show
    localStorage.setItem(toggleNavKey, `${this.show}`)
  }
}
