import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {from, Observable, Observer, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {error} from 'util';
import {finalize, toArray} from 'rxjs/operators';
const PARTS = environment.parts;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  outputData: any = [];
  temp: any = {};
  nestedObj: any = {};
  objectKeys = Object.keys;
  PARTS = PARTS;
  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    console.log('t');
    this.apiSrv.getAllData('g')
      .subscribe(value => {
        console.log(value);
        value.forEach(val => {
          val.data.subscribe(res => {
              // console.log(res);
            console.log(value.key);
            this.outputData.push({key: val.key, data: res});
          });
        });
    },
      err => {
        console.log(err);
      },
      () => {console.log('complete');
    });
  }
  removeSymbols(value: string, args?: any): string {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }
}
