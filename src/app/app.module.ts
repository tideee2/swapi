import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from 'bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/old-page/search-bar/search-bar.component';
import { ResultBoxComponent } from './components/old-page/result-box/result-box.component';
import { ItemComponent } from './components/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import {MaterialModule} from './shared/material.module';
import { MaterialPageComponent } from './components/material-page/material-page.component';
import { OldPageComponent } from './components/old-page/old-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSearchBarComponent } from './components/material-page/material-search-bar/material-search-bar.component';
import { MaterialResultBoxComponent } from './components/material-page/material-result-box/material-result-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultBoxComponent,
    SearchBarComponent,
    ItemComponent,
    MaterialPageComponent,
    OldPageComponent,
    MaterialSearchBarComponent,
    MaterialResultBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
