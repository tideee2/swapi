import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {catchError, finalize, timeout} from 'rxjs/operators';
import * as Config from '../../config/app.config';
import {ResultModel} from '../../models/searchQuery.model';

const PARTS = Config.PARTS;

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss']
})
export class ResultBoxComponent implements OnInit {
  outputData: {key: string, data: ResultModel}[] = [];
  temp: any = {};
  nestedObj: any = {};
  objectKeys = Object.keys;
  PARTS = PARTS;
  isLoading = false;
  isError = false;
  errorMsg = '';
  errorAlert: any = {
    type: 'danger',
    msg: `error`,
    timeout: 0
  };

  constructor(public apiSrv: ApiService) {
    this.apiSrv.searchEvent$.subscribe(query => {
      console.log(query);
      this.startSearch(query);
    });
  }

  ngOnInit() {
  }

  startSearch(query) {
    this.isLoading = true;
    this.isError = false;
    this.outputData = [];
    this.apiSrv.getDataFromQuery(query).pipe(
      timeout(5000),
      catchError(err => {
        console.log(err);
        throw new Error('timelimit error');
        // return  of('timelimit error');
      }),
      finalize(() => {
        this.isLoading = false;
        console.log('stop');
      })
    )
      .subscribe(value => {
          console.log(value);
          // @todo fix this if statement - check string when get error
          if (typeof value !== 'string') {
            value.forEach(val => {
              val.data.subscribe(res => {
                // console.log(res);
                // console.log(value.key);
                this.outputData.push({key: val.key, data: res});
              });
            });
          }
        },
        err => {
          this.isError = true;
          this.errorAlert.msg = err.message;
          this.errorAlert.timeout = 3000;
          console.log(err.message);
        },
        () => {console.log('complete');
        });
  }
  onClosedAlert(errorAlert: HTMLElement) {
    this.isError = false;
  }
  removeSymbols(value: string, args?: any): string {
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }
}
