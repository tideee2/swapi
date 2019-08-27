import { Component, OnInit } from '@angular/core';
import {ApiRxService} from '../../services/api-rx.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {
  data: TreeNode[] = [{
    label: '',
    children: []
  }];
  constructor(private rxSrv: ApiRxService) { }

  ngOnInit() {
    this.getData1();
    // this.getData2();
    // this.rxSrv.test3();
  }

  getData1() {
    this.rxSrv.test().subscribe((value: any) => {
      console.log(value);
      if (value.main) {
        this.data[0].label = value.main.name;
      }
      if (value.films) {
        this.data[0].children.push(
          {
            label: 'films',
            children: value.films.map(film => ({label: film.title, type: 'leaf'})),
          }
        );
      }
      if (value.starships) {
        this.data[0].children.push(
          {
            label: 'starships',
            children: value.starships.map(starship => ({label: starship.name, type: 'leaf'})),
          }
        );
      }
      console.log(this.data);
    });
  }

  getData2() {
    this.rxSrv.test2();
  }
}
