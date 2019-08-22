import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ResultModel, SearchQueryModel} from '../models/searchQuery.model';
import {UrlModel} from '../models/url.model';
import * as Config from '../config/app.config';

const PARTS = Config.PARTS;
const paths = Config.PATHS;
const URL = Config.URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchEvent$ = new Subject();

  subjectArr: any = {};

  constructor(private http: HttpClient) {
    PARTS.forEach(el => {
      // this.subjectArr.push(new BehaviorSubject(null));
      this.subjectArr[el] = new BehaviorSubject(null);
    });
    console.log(this.subjectArr);
  }

  getUrls(): Observable<UrlModel> {
    return this.http.get<UrlModel>(`${Config.URL}?format=json`);
  }

  getDataFromQuery(query: string = 'k'): Observable<{key: string, data: any}[]> {
    return this.getUrls().pipe(
      catchError(err => {
        console.log(err);
        return  of('timelimit error');
      }),
      map(value => {
        return Object.keys(value).map(key => {
          // console.warn(this.getPartData(`${value[key]}?search=${query}`));
          return {
            key,
            data: this.getPartData(`${value[key]}?search=${query}`)
          };
        });
      }));
  }

  getPartData(link: string): Observable<any> {
    return this.http.get<SearchQueryModel[]>(link).pipe(
      map((value: any) => {
        const x = value.results.map(data => {
          for (const part of PARTS) {
            if (data[part] && data[part] !== []) {
              data[part] = data[part].map(val => {
                return this.getDataFromLink(val);
              });
          }}
          return data;
        });
        return value;
      })
    );
  }
  getDataFromLink(link: string): Observable<ResultModel> {
    return this.http.get<ResultModel>(link);
  }
}
