import { NvTrimPipe } from './pipes/nv-trim/nv-trim.pipe';
import { RattingComponent } from './ratting/ratting.component';
import { NvCustomComponentComponent } from './nv-custom-component/nv-custom-component.component';
import { UploadComponent } from './upload/upload.component';
import { NvFileUploadDirective } from './directives/file-upload/nv-file-upload.directive';
import { NvDropdownComponent } from './nv-dropdown/nv-dropdown.component';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { NvInitialsPipe } from './pipes/nv-initials/nv-initials.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';
import { PanelComponent } from './panel/panel.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabWrapper } from './tabs/tabs-wrapper.component';
import { InvertedTabsComponent } from './inverted-tabs/inverted-tabs.component';
import { LeftTabComponent } from './left-tab/left-tab.component';
import { RightTabComponent } from './right-tab/right-tab.component';
import { FeedComponent } from './feed/feed.component';
import { PlaceholderCardComponent } from './placeholder/placeholder-card/placeholder-card.component';
import { PlaceholderListComponent } from './placeholder/placeholder-list/placeholder-list.component';
import { PlaceholderBannerComponent } from './placeholder/placeholder-banner/placeholder-banner.component';
import { PlaceholderBigCardComponent } from './placeholder/placeholderBigCard/placeholderBigCard.component';
import { MatTableModule } from '@angular/material/table';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DataPropertyGetterPipe } from './custom-datatable/data-property-getter-pipe/data-property-getter.pipe';
import { TestComponent } from '../main/test/test.component';
import { ProgressiveBarComponent } from './progressive-bar/progressive-bar.component';


const sharedComponents = [
  NvInitialsPipe,
  NvTrimPipe,
  NvFileUploadDirective,
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  CustomDatatableComponent,
  DataPropertyGetterPipe,
  PanelComponent,
  SearchComponent,
  TextAreaComponent,
  AvatarComponent,
  NotificationComponent,
  UserProfileMenuComponent,
  PanelComponent,
  SearchComponent,
  CommentBoxComponent,
  TextAreaComponent,
  NvDropdownComponent,
  UploadComponent,
  TestComponent,
  TabsComponent,
  TabWrapper,
  InvertedTabsComponent,
  LeftTabComponent,
  RightTabComponent,
  FeedComponent,
  PlaceholderCardComponent,
  PlaceholderListComponent,
  PlaceholderBannerComponent,
  PlaceholderBigCardComponent,
  NvCustomComponentComponent,
  UploadComponent,
  RattingComponent,
  ProgressiveBarComponent
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: sharedComponents
})
export class ReusableModule { }
