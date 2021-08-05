import { NvSliderToggleComponent } from './nv-slider-toggle/nv-slider-toggle.component';
import { NvSliderRadioButtonComponent } from './nv-slider-radio-button/nv-slider-radio-button.component';
import { NvSliderComponent } from './nv-slider/nv-slider.component';
import { NvCheckboxComponent } from './nv-checkbox/nv-checkbox.component';
import { NvDataPickerComponent } from './nv-data-picker/nv-data-picker.component';
import { NvTrimPipe } from './pipes/nv-trim/nv-trim.pipe';
import { NvButtonComponent } from './nv-button/nv-button.component';
import { FilterAllPipe } from './pipes/filters/filterAll/filter-all.pipe';
import { AdvanceFilterPipe } from './pipes/filters/advance-filter/advance-filter.pipe';
import { NvInitialsPipe } from './pipes/nv-initials/nv-initials.pipe';
import { RattingComponent } from './ratting/ratting.component';
import { UploadComponent } from './upload/upload.component';
import { NvFileUploadDirective } from './directives/file-upload/nv-file-upload.directive';
import { NvDropdownComponent } from './nv-dropdown/nv-dropdown.component';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvFooterComponent } from './nv-footer/nv-footer.component';
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
import { NvPlaceholderCardComponent } from './placeholder/nv-placeholder-card/nv-placeholder-card.component';
import { NvPlaceholderListComponent } from './placeholder/nv-placeholder-list/nv-placeholder-list.component';
import { NvPlaceholderBannerComponent } from './placeholder/nv-placeholder-banner/nv-placeholder-banner.component';
import { NvPlaceholderBigCardComponent } from './placeholder/nv-placeholderBigCard/nv-placeholderBigCard.component';
import { MatTableModule } from '@angular/material/table';
import { NvCustomDatatableComponent } from './nv-custom-datatable/nv-custom-datatable.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DataPropertyGetterPipe } from './pipes/data-property-getter-pipe/data-property-getter.pipe';
import { TestComponent } from './test/test.component';
import { NvPlaceholderTextCardComponent } from './placeholder/nv-placeholder-text-card/nv-placeholder-text-card.component';
import { NvPlaceholderSmallCardComponent } from './placeholder/nv-placeholder-small-card/nv-placeholder-small-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NvCustomTableComponent } from './nv-custom-table/nv-custom-table.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProgressiveBarComponent } from './progressive-bar/progressive-bar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


const sharedComponents = [
  NvInitialsPipe,
  AdvanceFilterPipe,
  FilterAllPipe,
  NvTrimPipe,
  NvFileUploadDirective,
  NvFooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  NvCustomDatatableComponent,
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
  NvPlaceholderCardComponent,
  NvPlaceholderListComponent,
  NvPlaceholderBannerComponent,
  NvPlaceholderBigCardComponent,
  NvCheckboxComponent,
  NvSliderComponent,
  NvSliderRadioButtonComponent,
  NvSliderToggleComponent,
  UploadComponent,
  RattingComponent,
  NvPlaceholderTextCardComponent,
  NvPlaceholderSmallCardComponent,
  NvCustomTableComponent,
  ProgressiveBarComponent,
  NvDataPickerComponent,
  NvButtonComponent
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
    MatCheckboxModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: sharedComponents,
  providers: [FilterAllPipe, AdvanceFilterPipe ]
})
export class ReusableModule { }
