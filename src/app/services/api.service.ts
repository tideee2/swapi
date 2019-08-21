import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, forkJoin, from, merge, Observable, of} from 'rxjs';
import {PeopleModel, PeopleModelQuery} from '../models/people.model';
import {map, tap, mergeMap, combineAll, toArray, flatMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ajax} from 'rxjs/ajax';

const PARTS = environment.parts;
const paths = environment.paths;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  subject = new BehaviorSubject(null);
  subjectTemp = new BehaviorSubject(null);

  subjectArr: any = {};
  constructor(private http: HttpClient) {
    PARTS.forEach(el => {
      // this.subjectArr.push(new BehaviorSubject(null));
      this.subjectArr[el] = new BehaviorSubject(null);
    });
    console.log(this.subjectArr);
  }

  getAllData(query: string = 'k'): Observable<any> {
    return this.http.get('https://swapi.co/api/?format=json').pipe(
      map(value => {
        console.log(value);
        return Object.keys(value).map(key => {
          return {
            key,
            data: this.getPartData(`${value[key]}?search=${query}`)
          };
        });
      }),
      tap(value => {
          console.log(value);
          value[0].data.subscribe(x => {
            console.log(x.results[0]);
            x.results[0].films.forEach(film => {
              film.subscribe(y => {
                // this.subject.next(y);
              });
            });
          });
        }),
      tap (value => {
        value.forEach(x => {
          // console.log(x);
          x.data.subscribe(y => {
            // console.log(y);
            y.results.forEach(z => {
              console.warn(z);
              for (let i = 0; i < PARTS.length; i++) {
                if (z[PARTS[i]] && z[PARTS[i]] !== []) {
                  z[PARTS[i]].forEach(q => {
                    q.subscribe(w => {
                      // this.subject.next({
                      //   key: x.key,
                      //   type: PARTS[i],
                      //   owner: z.name || z.title,
                      //   data: w
                      // });
                    });
                  });
                }
              }
            });
          });
        });
      })
    );
  }

  getPartData(link: string) {
    return this.http.get(link).pipe(
      map((value: any) => {
        const x = value.results.map(data => {
          for (let i = 0; i < PARTS.length; i++) {
            if (data[PARTS[i]] && data[PARTS[i]] !== []) {
              data[PARTS[i]] = data[PARTS[i]].map(part => {
                return this.getNestedData(part);
              });
            }
          }
          return data;
        });
        return value;
      })
    );
  }
  getNestedData(link: string): Observable<any> {
    return this.http.get(link);
  }
}

export class Test {
  t: string;
}
