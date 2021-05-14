import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';
import { NvHeaderComponent } from './nv-header/nv-header.component';
import { ReusableModule } from './../reusable/reusable.module';


const sharedComponents = [
  NovaFooterComponent,
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
