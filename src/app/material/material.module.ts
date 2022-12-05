import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import{MatProgressSpinnerModule}from '@angular/material/progress-spinner';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatMenuModule}from '@angular/material/menu';
import {MatListModule} from '@angular/material/list'
const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule
];


@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
