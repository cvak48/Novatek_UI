import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { NvInitialsPipe } from './pipes/nv-initials.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponentModule } from './../layout/layout.module';
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
  AvatarComponent,
  NotificationComponent,
  UserProfileMenuComponent,
  NvInitialsPipe
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutComponentModule,
  ],
  exports: sharedComponents
})
export class ReusableModule { }
