import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponentModule } from './../layout/layout.module';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';
import { TextAreaComponent } from './text-area/text-area.component';

import { MatTableModule } from '@angular/material/table';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';


import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DataPropertyGetterPipe } from './custom-datatable/data-property-getter-pipe/data-property-getter.pipe';


const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  CustomDatatableComponent,
  DataPropertyGetterPipe,
  TextAreaComponent,
  SearchComponent,
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MatTableModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutComponentModule,
  ],
  exports: sharedComponents
})
export class ReusableModule { }
