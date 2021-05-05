import { DemoPageComponent } from './demo-page/demo-page.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  SearchComponent,
  DemoPageComponent
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: sharedComponents
})
export class ReusableModule { }
