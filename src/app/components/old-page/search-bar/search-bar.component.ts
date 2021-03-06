import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ApiService} from './../../../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('searchQuery', {static: false}) searchQuery: ElementRef;
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    console.log('t');
  }

  clickSearch() {
    const query = this.searchQuery.nativeElement.value;
    this.apiSrv.searchEvent$.next(query);
  }
}
