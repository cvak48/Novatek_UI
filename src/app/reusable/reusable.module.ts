import { NvCardComponent } from './nv-card/nv-card.component';
import { BackgroundColorDirective } from './directives/background-color/background-color.directive';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { UploadComponent } from './upload/upload.component';
import { NvFileUploadDirective } from './directives/file-upload/nv-file-upload.directive';
import { NvDropdownComponent } from './nv-dropdown/nv-dropdown.component';
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
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';
import { PanelComponent } from './panel/panel.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

const sharedComponents = [
  NvInitialsPipe,
  NvFileUploadDirective,
  BackgroundColorDirective,
  FooterComponent,
  NovatekLogoComponent,
  AvatarComponent,
  NotificationComponent,
  UserProfileMenuComponent,
  PanelComponent,
  SearchComponent,
  CommentBoxComponent,
  TextAreaComponent,
  NvDropdownComponent,
  DragAndDropComponent,
  UploadComponent,
  NvCardComponent,



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
