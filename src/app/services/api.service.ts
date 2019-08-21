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
      }));
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
