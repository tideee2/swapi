import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, merge, Observable} from 'rxjs';
import {PeopleModel, PeopleModelQuery} from '../models/people.model';
import {map, tap, mergeMap, combineAll, toArray} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(query?: string): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/people/?search=ky').pipe(
        map(value => {
          return {
            ...value.results[0], films: value.results[0].films.map(data => {
              console.log(data);
              return this.http.get(data).pipe(toArray());
            })
          };
       })
    );
  // );
  }
  getAllData(query: string = 'k'): Observable<any> {
    return this.http.get('https://swapi.co/api/?format=json').pipe(
      map(value => {
        console.log(value);
        return Object.keys(value).map(key => {
          return this.http.get(`${value[key]}?search=${query}`);
        });
      })
    );
  }
}

export class Test {
  t: string;
}
