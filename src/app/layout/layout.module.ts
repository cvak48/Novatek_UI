import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';
import { ReusableModule } from '../reusable/reusable.module';




@NgModule({
  declarations: [
    NovaFooterComponent,
  ],
  imports: [
    CommonModule,
    ReusableModule
  ],
  exports: [
    NovaFooterComponent
  ]
})
export class LayoutComponentModule { }
