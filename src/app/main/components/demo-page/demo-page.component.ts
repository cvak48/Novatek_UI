import { Component, OnInit } from '@angular/core';
import { Notification, Person, DropdownFieldType, ButtonThemeColor, MenuExtensionDirection, FieldStatusType } from './../../../model/data-model';


export enum NvComponent {
  // First: Add the name of your reusable component to this enum
  Search,
  NvPanel,
  MultiSelectDropdown,
  TreeViewDropdown,
  NvLogo,
  Notification,
  Avatar,
  ProfileMenu,
  Header,
  Dropdown,
  LoginDropdown,
  DropToUpload,
  NvCheckBox,
  NvSliderBar,
  NvSliderToggle,
  NvRadioBut,
  NvDatePicker,
  NvTimePicker,
  NvButton
}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.NvPanel;
  public nvComponentType = NvComponent;
  // Second: Provide input data for your reusable component here if needed
  // Search
  items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
  // footer
  // Avatar
  person: Person = mockProfileMenu();
  // search
  isAdvance = mockAdvanceSearchInput().isAdvance;
  showMenu = mockAdvanceSearchInput().showMenu;
  list: any = mockAdvanceSearchInput().list;
  searchableRefList = mockAdvanceSearchInput().searchableRefList;
  // button
  buttonLabel = 'Default';
  themeColor = ButtonThemeColor.Basic;
  // dropDown && StatusColorTest
  dropdownItems = mockDropdown().items;
  textTrimNumber = mockDropdown().textTrimNumber;
  defaultSelectedItem = mockDropdown().selectedItemDefault;
  dropDownFieldType = mockDropdown().dropDownFieldType;
  menuExtensionDir = mockDropdown().menuExtensionDir;
  isDisable = mockDropdown().isDisable;
  fieldStatusType = mockDropdown().fieldStatusType;
  //  LoginDropdown
  loginFieldStatusType = FieldStatusType.Error;
  // checkbox
  checkBoxLabel = 'Im a new Checkbox';
  /**
   * timePicker
   * 12 or 24
   */
  timeFormat: number = 24;
  constructor() { }

  ngOnInit(): void {  }
  public onItemClick(selectedItem: NvComponent): void {
    this.selectedItem = selectedItem;
  }
  // search output
  onItemsFilter(list: any): void {
  }
  // dropDown selected item
  onItemSelect(item: any): void {
  }

}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}

function mockAdvanceSearchInput(): any {
  const searchInput = {
    list: [
      { id: 1, name: 'prashobh', age: '25', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'john@yahoo.com' },
      { id: 2, name: 'Abraham', age: '35', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'aohn@yahoo.com' },
      { id: 3, name: 'Sam', age: '45', date: 'Mon Dec 20005 1995 00:00:00 GMT-0500', email: 'bohn@yahoo.com' },
      { id: 4, name: 'Anil', age: '15', date: 'Mon Dec 200005 1995 00:00:00 GMT-0500', email: 'cohn@yahoo.com' },
      { id: 5, name: 'Mariya', age: '24', date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500', email: 'dohn@yahoo.com' },
      { id: 6, name: 'Crock', age: '28', date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500', email: 'eohn@yahoo.com' },
      { id: 7, name: 'Ram', age: '21', date: 'Mon Dec 29995 1995 00:00:00 GMT-0500', email: 'fohn@yahoo.com' },
    ],
    searchableRefList: ['name', 'age', 'date'],
    isAdvance: true,
    showMenu: true,
  };
  return searchInput;
}

function mockDropdown(): any {
  const dropdownInputs = {
    items: ['item1', 'item2 which is longer', 'item3 which is longer and ', 'item4', 'item5', 'item6', 'item7'],
    itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 1,
    selectedItemDefault: '',
    menuExtensionDir: MenuExtensionDirection.ToRight,
    dropDownFieldType: DropdownFieldType.Input,
    fieldStatusType: FieldStatusType.Error,
    isDisable: true,
  };
  return dropdownInputs;
}
