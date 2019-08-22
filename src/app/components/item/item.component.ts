import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
import {ResultModel} from '../../models/searchQuery.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() link: string;
  @Input() obs: Observable<any>;
  data: ResultModel = null;
  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    this.obs.subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
