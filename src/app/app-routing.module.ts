import { DemoPageComponent } from './reusable/demo-page/demo-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module')
    .then(m => m.MainModule)
  },
  {
    path: 'demo', component: DemoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
