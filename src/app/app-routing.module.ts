import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialPageComponent} from './components/material-page/material-page.component';
import {OldPageComponent} from './components/old-page/old-page.component';


const routes: Routes = [
  { path: '', component: MaterialPageComponent},
  { path: 'old', component: OldPageComponent},
  { path: 'material', component: MaterialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
