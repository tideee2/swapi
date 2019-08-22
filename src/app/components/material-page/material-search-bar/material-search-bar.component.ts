import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-material-search-bar',
  templateUrl: './material-search-bar.component.html',
  styleUrls: ['./material-search-bar.component.scss']
})
export class MaterialSearchBarComponent implements OnInit {

  @ViewChild('searchQuery', {static: false}) searchQuery: ElementRef;
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
  }

  clickSearch() {
    console.log('qq');
    const query = this.searchQuery.nativeElement.value;
    this.apiSrv.searchEvent$.next(query);
  }

}
