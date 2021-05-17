import { ReusableModule } from './../reusable/reusable.module';
import { NvHeaderComponent } from './nv-header/nv-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';
import { NovaSidenavComponent } from './nova-sidenav/nova-sidenav.component';
import { MaterialModule } from '../material.module';


const sharedComponents = [
  NovaFooterComponent,
  NovaSidenavComponent,
  NvHeaderComponent,
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    ReusableModule

  ],
  exports: sharedComponents,
})
export class LayoutComponentModule { }
