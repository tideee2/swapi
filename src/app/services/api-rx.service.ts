import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Config from '../config/app.config';
import {asyncScheduler, forkJoin, from, Observable, of, Subject, timer, zip} from 'rxjs';
import {
  combineAll,
  concatMap,
  map,
  mergeAll,
  mergeMap,
  tap,
  mapTo,
  concatMapTo,
  toArray,
  switchMap,
  finalize,
  timeout, catchError, take
} from 'rxjs/operators';
import {fromFetch} from 'rxjs/fetch';
@Injectable({
  providedIn: 'root'
})
export class ApiRxService {
  data: any;
  films$ = new Subject();
  starships$ = new Subject();

  constructor(private http: HttpClient) { }

  getData() {
    let temp = this.http.get(`${Config.URL}people/1`).pipe(
      map((data: any) => {
        return  forkJoin(
            Object.values(Config.PARTS).filter(key => (data[key] && data[key] !== 0)).map(key => {
              return forkJoin(data[key].map(el => this.http.get(el)));
            })
        );
      })
    ).subscribe(x => {
      console.log(x);
    });
    const obs = this.http.get(`${Config.URL}people/1`).pipe(
      map(x => {
        // console.log(x);
        return x;
      }),
      timeout(15000),
      catchError((err, caught) => {
        return of(err.message);
      }),
      finalize(() => {
        // console.log('finished');
      })
    );
    obs.subscribe(data => {
      console.log(data);
    });
  }
}
