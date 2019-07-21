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
  private URL = 'https://demo0881859.mockable.io/players';

  constructor(private http: Http) {}
  
  getPlayer(): Observable<Player[]> {
    return this.http.get(this.URL)
      .pipe(map((response: Response) => response.json()))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
