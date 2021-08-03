import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReusableModule } from '../reusable/reusable.module';
import { MaterialModule } from '../material.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponentModule } from '../layout';
import { NvSubMenuComponent } from './components/nv-sub-menu/nv-sub-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DemoPageComponent,
    NvSubMenuComponent,
  ],
  imports: [
    CommonModule,
    ReusableModule,
    MaterialModule,
    MainRoutingModule,
    LayoutComponentModule,
  ],
  exports:[]
})
export class MainModule { }
