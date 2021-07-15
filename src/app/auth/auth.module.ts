import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { ReusableModule } from '../reusable/reusable.module';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../layout';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReusableModule,
    LayoutComponentModule,
    RouterModule.forChild([
      /**
      * On application load, when user navigated to auth module it will point the login page
      */
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ])
  ]
})
export class AuthModule { }
