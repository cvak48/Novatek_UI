import { DemoPageComponent } from './../reusable/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReusableModule } from '../reusable/reusable.module';
import { MaterialModule } from '../material.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponentModule } from '../layout';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestComponent,
    DemoPageComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    MaterialModule,
    MainRoutingModule,
    LayoutComponentModule,

  ]
})
export class MainModule { }
