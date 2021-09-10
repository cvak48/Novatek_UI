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
import { NVRatingComponent } from './nv-rating/nv-rating.component';
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
import { NVLogoComponent } from './nv-logo/nv-logo.component';
import { PanelComponent } from './panel/panel.component';
import { NVTextAreaComponent } from './nv-text-area/nv-text-area.component';
import { NVCommentBoxComponent } from './nv-comment-box/nv-comment-box.component';
import { NVTabsComponent } from './nv-tabs/nv-tabs.component';
import { TabWrapper } from './nv-tabs/nv-tabs-wrapper.component';
import { NVInvertedTabsComponent } from './nv-inverted-tabs/nv-inverted-tabs.component';
import { NVLeftTabComponent } from './nv-left-tab/nv-left-tab.component';
import { NVRightTabComponent } from './nv-right-tab/nv-right-tab.component';
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
import { NVProgressiveBarComponent } from './nv-progressive-bar/nv-progressive-bar.component';
import { NvInputComponent } from './nv-input/nv-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


const sharedComponents = [
  NvInitialsPipe,
  AdvanceFilterPipe,
  FilterAllPipe,
  NvTrimPipe,
  NvFileUploadDirective,
  NvFooterComponent,
  NVLogoComponent,
  NvCustomDatatableComponent,
  DataPropertyGetterPipe,
  PanelComponent,
  SearchComponent,
  NVTextAreaComponent,
  AvatarComponent,
  NotificationComponent,
  UserProfileMenuComponent,
  PanelComponent,
  SearchComponent,
  NVCommentBoxComponent,
  NVTextAreaComponent,
  NvDropdownComponent,
  UploadComponent,
  TestComponent,
  NVTabsComponent,
  TabWrapper,
  NVInvertedTabsComponent,
  NVLeftTabComponent,
  NVRightTabComponent,
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
  NVRatingComponent,
  NvPlaceholderTextCardComponent,
  NvPlaceholderSmallCardComponent,
  NvCustomTableComponent,
  NVProgressiveBarComponent,
  NvDataPickerComponent,
  NvButtonComponent,
  NvInputComponent
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
