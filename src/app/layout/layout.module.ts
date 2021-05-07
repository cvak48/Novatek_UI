import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';




@NgModule({
  declarations: [
    NovaFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NovaFooterComponent
  ]
})
export class LayoutComponentModule { }
