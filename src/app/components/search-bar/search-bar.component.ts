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
  data: any = [];
  temp: any = {};
  nestedObj: any = {};
  objectKeys = Object.keys;
  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    console.log('t');
    this.apiSrv.getAllData('g')
      .subscribe(value => {
        console.log(value);
        value.map(link => {
          link.data.subscribe(info => {
            this.temp[link.key] = info;
            console.log(this.temp);
            this.data.push({
              key: link.key,
              data: info
            });
          });
        });
    },
      err => {
        console.log(err);
      },
      () => {
        console.log(this.data);
    });
  }
}
