import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get('/assets/superheroes.json')
      .pipe(
        delay(2000)
      );
  }
}
