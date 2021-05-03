import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PanelComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PanelComponent
  ]
})
export class ReusableModule { }
