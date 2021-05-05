import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReusableModule } from '../reusable/reusable.module';
import { MaterialModule } from '../material.module';
import { MainRoutingModule } from './main-routing.module';
import { LayoutComponentModule } from '../layout';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    MaterialModule,
    MainRoutingModule,
    LayoutComponentModule   
  ]
})
export class MainModule { }
