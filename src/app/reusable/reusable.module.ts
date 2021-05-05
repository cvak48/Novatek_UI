import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchComponent } from './search/search.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SearchComponent,
    DemoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
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
