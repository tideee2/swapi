import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search in swapi.co';
  menuLinks = [
    {
      text: 'material design',
      icon: 'home',
      url: '/material'
    },
    {
      text: 'old design',
      icon: 'book',
      url: '/old'
    },
    {
      text: 'rx',
      icon: 'book',
      url: '/rx'
    }
  ];
}
