import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Title } from '@angular/platform-browser'
import {
  SportLeaguesResponse,
  SportLeaguesService,
} from '../../services/api/sport-leagues-service'
import { Observable } from 'rxjs'
import { SportTypes } from '@src/types/sport-type'
import { AsyncPipe } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'sport-leagues',
  templateUrl: './sport-leagues.component.html',
  styleUrl: './sport-leagues.component.css',
})
export class SportLeaguesComponent implements OnInit, OnChanges {
  @Input() sport!: SportTypes
  getLeaguesResponse!: Observable<SportLeaguesResponse>
  private sportLeaguesService = inject(SportLeaguesService)

  constructor(private title: Title) {}

  ngOnChanges(changes: SimpleChanges): void {
    const newSportChange = changes['sport']
    if (newSportChange?.currentValue !== newSportChange?.previousValue) {
      this.setTitle(newSportChange.currentValue)
      this.getLeaguesResponse = this.sportLeaguesService.getLeagues(
        newSportChange.currentValue,
      )
    }
  }

  ngOnInit(): void {
    this.setTitle(this.sport)
    this.getLeaguesResponse = this.sportLeaguesService.getLeagues(this.sport)
  }

  private setTitle(newSport: string) {
    this.title.setTitle(`Leagues | ${newSport}`)
  }
}
