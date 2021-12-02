import {
  DropdownFieldType,
  MenuExtensionDirection,
} from 'src/app/model/data-model';
import {
  Person,
  Notification,
  FieldStatusType,
} from './../../../model/data-model';
import { Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { subscribeOn } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nv-user-view',
  templateUrl: './nv-user-view.component.html',
  styleUrls: ['./nv-user-view.component.scss'],
})
export class NvUserViewComponent implements OnInit {
  // TODO: We need to receive data with observable type here as user clicks on a specific row of table
  // Avatar
  person: Person = mockProfileMenu();
  @Input() panelTableHeight: any;
  // field
  fieldStatusType = FieldStatusType.Normal;
  fieldLabel = 'Label';
  // dropDown
  dropdownItems = mockDropdown().items;
  textTrimNumber = mockDropdown().textTrimNumber;
  defaultSelectedItem = mockDropdown().selectedItemDefault;
  dropDownFieldType = mockDropdown().dropDownFieldType;
  dropdownMenuExtensionDir = mockDropdown().menuExtensionDir;
  isDropdownDisable = mockDropdown().isDisable;
  dropdownFieldStatusType = mockDropdown().fieldStatusType;
  // Multiselect dropdown field
  multiselectFieldStatusType = FieldStatusType.Normal;
  multiselectFieldLabel = 'Label';
   constructor() {}
  ngOnInit(): void {}
  onItemSelect(item: any): void {}
  // search output
  onItemsFilter(list: any): void {}
  // Multiselect dropDown selected item
  onMultiselectItemsFilter(item: any): void {}

  onSaveClick(): void { }
  onCancelClick(): void { }
}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}

function mockDropdown(): any {
  const dropdownInputs = {
    items: [
      'item1',
      'item2 which is longer',
      'item3 which is longer and ',
      'item4',
      'item5',
      'item6',
      'item7',
    ],
    itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 3,
    selectedItemDefault: '',
    menuExtensionDir: MenuExtensionDirection.ToLeft,
    dropDownFieldType: DropdownFieldType.Icon,
    fieldStatusType: FieldStatusType.Normal,
    isDisable: false,
  };
  return dropdownInputs;
}
