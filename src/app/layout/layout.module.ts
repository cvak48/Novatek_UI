import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFooterComponent } from './nova-footer/nova-footer.component';
import { NovaSidenavComponent } from './nova-sidenav/nova-sidenav.component';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    NovaFooterComponent,
    NovaSidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NovaFooterComponent,
    NovaSidenavComponent
  ]
})
export class LayoutComponentModule { }
