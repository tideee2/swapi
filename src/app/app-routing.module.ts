import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialPageComponent} from './components/material-page/material-page.component';
import {OldPageComponent} from './components/old-page/old-page.component';
import {RxComponent} from './components/rx/rx.component';


const routes: Routes = [
  { path: '', component: MaterialPageComponent},
  { path: 'old', component: OldPageComponent},
  { path: 'material', component: MaterialPageComponent},
  { path: 'rx', component: RxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
