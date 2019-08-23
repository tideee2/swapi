import { Component, OnInit } from '@angular/core';
import {ApiRxService} from '../../services/api-rx.service';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

  constructor(private rxSrv: ApiRxService) { }

  ngOnInit() {
    this.rxSrv.getData();
  }

}
