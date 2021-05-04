import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';

var sharedSomponents = [
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent
]

@NgModule({
  declarations: sharedSomponents,
  imports: [
    CommonModule
  ],
  exports: sharedSomponents
})
export class ReusableModule { }
