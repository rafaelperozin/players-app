import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://demo0881859.mockable.io/players'

  constructor(private _http: HttpClient) { }

  getPlayer() {
    return this._http.get<Player[]>(this.apiUrl);
  }
}
