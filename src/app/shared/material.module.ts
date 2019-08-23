import {NgModule} from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
