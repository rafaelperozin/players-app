import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";

import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = 'http://localhost:3000/api/players?limit=66&offset=0';

  constructor(private http: Http) { }
  
  getPlayer(): Observable<Player[]> {
    return this.http.get(this.URL)
      .pipe(map((response: Response) => response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPlayersFiltered(searchTerm: string): Observable<Player[]> {
    this.URL = 'http://localhost:3000/api/players?limit=66&offset=0&search=' + searchTerm;
    return this.http.get(this.URL)
      .pipe(map((response: Response) => response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  };
}
