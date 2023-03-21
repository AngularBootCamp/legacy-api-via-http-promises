import { Component } from '@angular/core';

import { StarshipApi } from './StarshipApi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  starships: any[] = [];

  constructor(api: StarshipApi) {
    api
      .loadStarships()
      .then((ships: any) => (this.starships = ships))
      .catch(_err => (this.starships = []));
  }
}
