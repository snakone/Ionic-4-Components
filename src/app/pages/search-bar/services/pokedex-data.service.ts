import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokedexDataService {

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<any> {
    return this.http.get('https://pokemon-sun-moon.herokuapp.com/pokedex');
  }
}
