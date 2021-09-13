import { NvTimePickerComponent } from './nv-time-picker/nv-time-picker.component';
import { NvChecklistDropdownComponent } from './nv-checklist-dropdown/nv-checklist-dropdown.component';
import { NvMultiSelectDropdownComponent } from './nv-multiselect-dropdown/nv-multiselect-dropdown.component';
import { NvDatePickerComponent } from './nv-date-picker/nv-date-picker.component';
import { NvAvatarComponent } from './nv-avatar/nv-avatar.component';
import { NvUploadComponent } from './nv-upload/nv-upload.component';

import { NvSvgColorDirective } from './directives/nv-svg-decorator/nv-svg-color.directive';
import { NvDropdownComponent } from './nv-dropdown/nv-dropdown.component';
import { NvStyleColorDirective } from './directives/nv-status-color/nv-style-color.directive';
import { NvSliderToggleComponent } from './nv-slider-toggle/nv-slider-toggle.component';
import { NvSliderRadioButtonComponent } from './nv-slider-radio-button/nv-slider-radio-button.component';
import { NvSliderComponent } from './nv-slider-bar/nv-slider-bar.component';
import { NvCheckboxComponent } from './nv-checkbox/nv-checkbox.component';

import { NvTrimPipe } from './pipes/nv-trim/nv-trim.pipe';
import { NvButtonComponent } from './nv-button/nv-button.component';
import { NvFilterPipe } from './pipes/filters/nv-filter/nv-filter.pipe';
import { NvAdvanceFilterPipe } from './pipes/filters/nv-advance-filter/nv-advance-filter.pipe';
import { NvInitialsPipe } from './pipes/nv-initials/nv-initials.pipe';
import { RattingComponent } from './ratting/ratting.component';
import { NvFileUploadDirective } from './directives/file-upload/nv-file-upload.directive';
import { UserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { NvNotificationIconComponent } from './nv-notification-icon/nv-notification-icon.component';
import { NvSearchComponent } from './nv-search/nv-search.component';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DataPropertyGetterPipe } from './pipes/data-property-getter-pipe/data-property-getter.pipe';
import { TestComponent } from './test/test.component';
import { NvPlaceholderTextCardComponent } from './placeholder/nv-placeholder-text-card/nv-placeholder-text-card.component';
import { NvPlaceholderSmallCardComponent } from './placeholder/nv-placeholder-small-card/nv-placeholder-small-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NvCustomTableComponent } from './nv-custom-table/nv-custom-table.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProgressiveBarComponent } from './progressive-bar/progressive-bar.component';
import { NvInputComponent } from './nv-input/nv-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NvTextColorDirective } from './directives/nv-status-color/nv-text-color.directive';



const sharedComponents = [
  NvInitialsPipe,
  NvAdvanceFilterPipe,
  NvFilterPipe,
  NvTrimPipe,
  NvFileUploadDirective,
  NvStyleColorDirective,
  NvTextColorDirective,
  NvSvgColorDirective,
  NovatekLogoComponent,
  NvCustomDatatableComponent,
  NvDatePickerComponent,
  DataPropertyGetterPipe,
  PanelComponent,
  NvMultiSelectDropdownComponent,
  NvChecklistDropdownComponent,
  TextAreaComponent,
  NvNotificationIconComponent,
  UserProfileMenuComponent,
  PanelComponent,
  NvSearchComponent,
  CommentBoxComponent,
  NvDropdownComponent,
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
  RattingComponent,
  NvPlaceholderTextCardComponent,
  NvPlaceholderSmallCardComponent,
  NvCustomTableComponent,
  ProgressiveBarComponent,
  NvButtonComponent,
  NvInputComponent,
  NvAvatarComponent,
  NvUploadComponent,
  NvTimePickerComponent,
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
  providers: [NvFilterPipe, NvAdvanceFilterPipe, NvTrimPipe ]
})
export class ReusableModule { }
