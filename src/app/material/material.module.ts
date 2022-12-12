import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import{MatProgressSpinnerModule}from '@angular/material/progress-spinner';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatMenuModule}from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  FontAwesomeModule,
  MatCardModule,
  NgxPaginationModule,
  MatTableModule,
 
];


@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
