import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NVLoginComponent } from './nv-login/nv-login.component';
import { MaterialModule } from '../material.module';
import { ReusableModule } from '../reusable/reusable.module';
import { RouterModule } from '@angular/router';
import { LayoutComponentModule } from '../layout';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);

  //return new TranslateHttpLoader(httpClient, 
    //environment.feServerUrl + '/assets/i18n/', '.json'); 
}
@NgModule({
  declarations: [
    NVLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReusableModule,
    LayoutComponentModule,
    HttpClientModule,
    RouterModule.forChild([
      /**
      * On application load, when user navigated to auth module it will point the login page
      */
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: NVLoginComponent }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class AuthModule { }
