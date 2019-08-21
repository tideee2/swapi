import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  data = [];
  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    console.log('t');
    this.apiSrv.getAllData().subscribe(value => {
      // console.log(value);
      value.map(link => link.subscribe(data => console.log(data)));
    });
    // this.apiSrv.getData().subscribe(value => {
    //   console.log(value);
    //   // value.subscribe(data => console.log(data));
    // });
  }

}
