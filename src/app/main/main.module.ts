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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NvUserViewComponent } from './components/nv-user-view/nv-user-view.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DemoPageComponent,
    NvMenuComponent,
    NvUserListViewComponent,
    NvUserViewComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    MaterialModule,
    MainRoutingModule,
    LayoutComponentModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports:[]
})
export class MainModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
