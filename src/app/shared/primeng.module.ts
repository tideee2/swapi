import {NgModule} from '@angular/core';
import {OrganizationChartModule} from 'primeng/organizationchart';


@NgModule({
  imports: [
    OrganizationChartModule
  ],
  exports: [
    OrganizationChartModule
  ]
})
export class PrimengModule {}
