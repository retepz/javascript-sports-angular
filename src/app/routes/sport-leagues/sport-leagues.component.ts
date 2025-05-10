import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SportLeaguesService } from '../../services/api/sport-leagues-service'
import { SportTypes } from '@src/types/sport-type'
import { RouterLink } from '@angular/router'
import { injectQuery } from '@tanstack/angular-query-experimental'
import { lastValueFrom } from 'rxjs'
import { LoadingComponent } from '../../components/loading/loading.component'

@Component({
  imports: [RouterLink, LoadingComponent],
  selector: 'sport-leagues',
  templateUrl: './sport-leagues.component.html',
  styleUrl: './sport-leagues.component.css',
})
export class SportLeaguesComponent implements OnInit, OnChanges {
  readonly sport = input.required<SportTypes>()

  getLeagues = injectQuery(() => ({
    queryKey: ['sports', this.sport(), 'leagues'],
    queryFn: () => {
      return lastValueFrom(this.sportLeaguesService.getLeagues(this.sport()))
    },
    retry: 1,
  }))

  constructor(
    private title: Title,
    private sportLeaguesService: SportLeaguesService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const newSportChange = changes['sport']
    if (newSportChange?.currentValue !== newSportChange?.previousValue) {
      this.setTitle(newSportChange.currentValue)
    }
  }

  ngOnInit(): void {
    this.setTitle(this.sport())
  }

  private setTitle(newSport: string) {
    this.title.setTitle(`Leagues | ${newSport}`)
  }
}
