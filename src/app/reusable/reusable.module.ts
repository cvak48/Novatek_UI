import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { NvInitialsPipe } from './pipes/nv-initials.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';

const sharedComponents = [
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
    MaterialModule
  ],
  exports: sharedComponents
})
export class ReusableModule { }
