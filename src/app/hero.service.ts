import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:5002/api/Heroes';  // URL to web api

  constructor(private http: HttpClient) {
    this.getHeroes();
   }

  getHeroes(): Observable<any> {
    return this.http.get(this.heroesUrl).pipe(tap(_ => console.log('fetched')));
  }
}
