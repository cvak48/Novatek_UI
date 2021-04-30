import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchComponent } from './search/search.component';
import { DemoPageComponent } from './demo-page/demo-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SearchComponent,
    DemoPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SearchComponent,
    DemoPageComponent
  ]
})
export class ReusableModule { }
