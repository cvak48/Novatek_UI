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
import { SideNavComponent } from './side-nav/side-nav.component';
import { NovatekLogoComponent } from './novatek-logo/novatek-logo.component';
import { PanelComponent } from './panel/panel.component';
import { TextAreaComponent } from './text-area/text-area.component';

import { MatTableModule } from '@angular/material/table';
import { CustomDatatableComponent } from './custom-datatable/custom-datatable.component';


import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DataPropertyGetterPipe } from './custom-datatable/data-property-getter-pipe/data-property-getter.pipe';
import { PlaceholdersComponent } from './placeholders/placeholders.component';


const sharedComponents = [
  FooterComponent,
  SideNavComponent,
  NovatekLogoComponent,
  CustomDatatableComponent,
  DataPropertyGetterPipe,
  PanelComponent,
  SearchComponent,
  TextAreaComponent,
  PlaceholdersComponent,
  NotificationComponent,
  UserProfileMenuComponent,
  NvInitialsPipe,
  PanelComponent,
  SearchComponent,
  TextAreaComponent,
  NvDropdownComponent,
  AvatarComponent
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
