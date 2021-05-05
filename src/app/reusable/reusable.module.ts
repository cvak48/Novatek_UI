import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';


var sharedSomponents = [
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  DataTableComponent
]

@NgModule({
  declarations: sharedSomponents,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: sharedSomponents
})
export class ReusableModule { }
