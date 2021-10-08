import { ReusableModule } from './../reusable/reusable.module';
import { NvHeaderComponent } from './nv-header/nv-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvFooterComponent } from './nv-footer/nv-footer.component';
import { NvSidenavComponent } from './nv-sidenav/nv-sidenav.component';
import { MaterialModule } from '../material.module';
import { NovaLoginFooterComponent } from './nova-login-footer/nova-login-footer.component';
import { FormsModule } from '@angular/forms';
import { NvSubMenuComponent } from './nv-sub-menu/nv-sub-menu.component';


const sharedComponents = [
  NvFooterComponent,
  NvSidenavComponent,
  NvHeaderComponent,
  NovaLoginFooterComponent,
  NvSubMenuComponent
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MaterialModule,
    ReusableModule,
    FormsModule
    
  ],
  exports: sharedComponents,
})
export class LayoutComponentModule { }
