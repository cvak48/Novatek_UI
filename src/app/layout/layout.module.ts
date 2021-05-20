import { ReusableModule } from './../reusable/reusable.module';
import { NvHeaderComponent } from './nv-header/nv-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';
import { NovaSidenavComponent } from './nova-sidenav/nova-sidenav.component';
import { MaterialModule } from '../material.module';
import { NovaLoginFooterComponent } from './nova-login-footer/nova-login-footer.component';


const sharedComponents = [
  NovaFooterComponent,
  NovaSidenavComponent,
  NvHeaderComponent,
  NovaLoginFooterComponent
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MaterialModule,
    ReusableModule
  
  ],
  exports: sharedComponents,
})
export class LayoutComponentModule { }
