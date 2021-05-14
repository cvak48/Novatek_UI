import { NvDropdownComponent } from './nv-dropdown/nv-dropdown.component';

import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponentModule } from './../layout/layout.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';


const sharedComponents = [
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  SearchComponent,
  NvDropdownComponent,
  
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutComponentModule,
  ],
  exports: sharedComponents
})
export class ReusableModule { }
