import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/map';

@Injectable()
export class ScoreServiceService {

  constructor(private http: Http) { }
  
  retrieveScores(username: string): Observable<User> {
      return this.http.get(`https://api.github.com/users/${ username }`)
        .map(response => response.json());
    }

}
