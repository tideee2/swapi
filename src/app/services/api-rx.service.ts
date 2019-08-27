import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Config from '../config/app.config';

import {asyncScheduler, forkJoin, from, interval, merge, Observable, of, Subject, timer, zip} from 'rxjs';
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
  timeout, catchError, take, flatMap, pairwise, subscribeOn, delay, throttleTime
} from 'rxjs/operators';
import {fromFetch} from 'rxjs/fetch';
@Injectable({
  providedIn: 'root'
})
export class ApiRxService {
  data: any;
  films$ = new Subject();
  starships$ = new Subject();
  listData = [];
  constructor(private http: HttpClient) {
  }

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

  test() {
    const getObs$ = this.http.get(`${Config.URL}people/1`);
    const obs$ = merge(getObs$.pipe(
        map(data => {
          this.listData.push(data);
          return {
            main: data
          };
        })
      ),
      getObs$.pipe(
        mergeMap((event: any) => {
          // console.log(event);
          return forkJoin(event.films.map(film => this.http.get(film)));
        }),
        map(data => {
          return {
            films: data
          };
        })
      ),
      getObs$.pipe(
        mergeMap((event: any) => {
          // console.log(event);
          return forkJoin(event.starships.map(starship => this.http.get(starship)));
        }),
        map(data => {
          return {
            starships: data
          };
        })
      )
    ).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );

    console.log(obs$);
    return obs$;
  }

  test2() {
    const query = 'k';
    const query1 = 'k';
    const query2 = 'k';

    // const obs$ = this.http.get(`${Config.URL}?format=json`).pipe(
      // switchMap(event => {
      //   return Object.entries(event).map(part => ({[part[0]]: this.http.get(`${part[1]}?search=${query}`)}));
      // }),
      // map(data => {
      //   return data
      // })
    // )
    const obs$ = this.http.get(`${Config.URL}people/1`)
      .pipe(
        concatMap((changes: any) => {
          console.log(changes);
          return this.http.get(changes.films[0]);
        }),
        map(data => {
          console.log(data);
          return data;
        })
      )
      .subscribe(data => console.log(data));
  }
  test3() {
   const obs1$ = of(1, 7, 20).pipe();
   const obs2$ = of('a', 't', 'd').pipe();
   const obs3$ = merge(obs1$, obs2$).pipe(toArray()
     ).subscribe(data => console.log(data));
  }
}
