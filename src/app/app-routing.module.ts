import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**
  * On application load it will navigate to the Auth module
  */
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  /**
  * When user directly pointing out the dashboard or some other pages it will navigate to main module
  */
  {
    path: 'main',
    loadChildren: () => import('./main/main.module')
    .then(m => m.MainModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
