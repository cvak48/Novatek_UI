import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReusableModule } from '../reusable/reusable.module';
import { MaterialModule } from '../material.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponentModule } from '../layout';
import { NvMenuComponent } from './components/nv-menu/nv-menu.component';
import { NvUserListViewComponent } from './components/nv-user-list-view/nv-user-list-view.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DemoPageComponent,
    NvMenuComponent,
    NvUserListViewComponent
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
