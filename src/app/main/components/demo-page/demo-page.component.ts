import { NvUserColor } from './../../../reusable/local-data/view-model';
import { ViewItem } from './../../../reusable/nv-item-picker-demo/nv-item-picker-demo.component';

import { Component, OnInit  } from '@angular/core';
import {
  Notification,
  Person,
  DropdownFieldType,
  ButtonThemeColor,
  MenuExtensionDirection,
  FieldStatusType,
} from './../../../model/data-model';

export enum NvComponent {
  // First: Add the name of your reusable component to this enum
  FrontendSearch,
  Search,
  MultiSelectDropdown,
  TreeViewDropdown,
  NvLogo,
  Notification,
  Avatar,
  NvProfileMenu,
  NvProfile,
  Header,
  Dropdown,
  DragDrop,
  Panel,
  DropToUpload,
  Card,
  ItemPickerDemo,
  IconPickerDemo,
  ColorPickerDemo,
  NvCheckBox,
  NvSliderBar,
  NvSliderToggle,
  NvRadioBut,
  NvDatePicker,
  NvButton,
  NvDownload,
  NvTimePicker,
  NvField,
}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.FrontendSearch;
  public nvComponentType = NvComponent;
  // Second: Provide input data for your reusable component here if needed
  // Search
  items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
  // footer
  // Avatar
  person: Person = mockProfileMenu();
  // ItemPicker
  items01: ViewItem<string>[] = mockNvItemPicker().items01;
  size: string = mockNvItemPicker().size;
  showImage: boolean = mockNvItemPicker().showImage;
  showTitle: boolean = mockNvItemPicker().showTitle;
  compactedView: boolean = mockNvItemPicker().compactedView;
  // IconPicker
  iconItems: ViewItem<string>[] = mockNvIconPicker().items01;
  iconShowImage: boolean = mockNvIconPicker().showImage;
  iconShowTitle: boolean = mockNvIconPicker().showTitle;
  iconCompactedView: boolean = mockNvIconPicker().compactedView;
  iconSize: string = mockNvIconPicker().size;
  // ColorPicker
  colorItems: ViewItem<string>[] = mockNvColorPicker().items01;
  colorSize: string = mockNvColorPicker().size;
  colorShowImage: boolean = mockNvColorPicker().showImage;
  colorShowTitle: boolean = mockNvColorPicker().showTitle;
  colorCompactedView: boolean = mockNvColorPicker().compactedView;

  // search
  isAdvance = mockAdvanceSearchInput().isAdvance;
  showMenu = mockAdvanceSearchInput().showMenu;
  list: any = mockAdvanceSearchInput().list;
  searchableRefList = mockAdvanceSearchInput().searchableRefList;
  // frontend search
  hideFrontEndSearchMenu: boolean = false;
  frontendFilteredList!: string[];
  // button
  buttonLabel = 'Default';
  themeColor = ButtonThemeColor.Basic;
  // dropDown && StatusColorTest
  dropdownItems = mockDropdown().items;
  textTrimNumber = mockDropdown().textTrimNumber;
  defaultSelectedItem = mockDropdown().selectedItemDefault;
  dropDownFieldType = mockDropdown().dropDownFieldType;
  dropdownMenuExtensionDir = mockDropdown().menuExtensionDir;
  isDropdownDisable = mockDropdown().isDisable;
  dropdownFieldStatusType = mockDropdown().fieldStatusType;
  //  LoginDropdown
  loginFieldStatusType = FieldStatusType.Error;
  // checkbox
  checkBoxLabel = 'Im a new Checkbox';
  // field
  fieldStatusType = FieldStatusType.Error;
  fieldLabel = 'Label';
  // Multiselect dropdown field
  multiselectFieldStatusType = FieldStatusType.Accept;
  multiselectFieldLabel = 'Label';
  // Tree View dropdown
  treeViewFieldStatusType = FieldStatusType.Accept;
  treeViewFieldLabel = 'Label';
  /**
   * timePicker
   * 12 or 24
   */
  timeFormat: number = 24;
  constructor() {}

  ngOnInit(): void {}
  public onItemClick(selectedItem: NvComponent): void {
    this.selectedItem = selectedItem;
  }
  // search output
  onItemsFilter(list: any): void {}
  // front end search
  onFrontSearchFieldQuery(query: string): void {
    this.frontendFilteredList = ['new 1', 'new 2', 'new 3'];
  }
  // dropDown selected item
  onItemSelect(item: any): void {}
  // Multiselect dropDown selected item
  onMultiselectItemsFilter(item: any): void {}
  onTreeViewItemsFilter(item: any): void {}
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

function mockNvItemPicker(): any {
  const evPickerProps = {
    items01: [
      { id: 1, title: 'In Progress', color: NvUserColor.StateColor01, detail: '', imageUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png', data: '' },
      { id: 2, title: 'To Do', color: NvUserColor.StateColor02, detail: '', imageUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png', data: '' },
      { id: 3, title: 'Done', color: NvUserColor.StateColor03, detail: '', imageUrl: '', data: ' ' }] as ViewItem<string>[],
      size: 'medium',
      showImage: false,
      showTitle: true,
      compactedView: false,
  };
  return evPickerProps;
}

function mockNvIconPicker(): any {
  const srcTask: string = '../../../assets/icons/ico.task.svg';
  const srcRep: string = '../../../assets/icons/ico.report.svg';
  const evPickerProps = {
    items01: [
      { id: 1, title: 'Report', color: NvUserColor.StateColor01, detail: '', imageUrl: srcRep, data: '' },
      { id: 2, title: 'Task', color: NvUserColor.StateColor01, detail: '', imageUrl: srcTask, data: '' }],
      size: 'large',
      showImage: true,
      showTitle: false,
      compactedView: true,
  };
  return evPickerProps;
}

function mockNvColorPicker(): any {
  const evPickerProps = {
    items01: [
      { id: 1, title: '', color: NvUserColor.PriorityColor01, detail: '', imageUrl: '', data: '' },
      { id: 2, title: '', color: NvUserColor.PriorityColor02, detail: '', imageUrl: '', data: '' },
      { id: 3, title: '', color: NvUserColor.PriorityColor03, detail: '', imageUrl: '', data: '' },
      { id: 4, title: '', color: NvUserColor.PriorityColor04, detail: '', imageUrl: '', data: ' ' }],
    size: 'large',
    showImage: true,
    showTitle: false,
    compactedView: true,
  };
  return evPickerProps;
}


function mockAdvanceSearchInput(): any {
  const searchInput = {
    list: [
      {
        id: 1,
        name: 'prashobh',
        age: '25',
        date: 'Mon Dec 2005 1995 00:00:00 GMT-0500',
        email: 'john@yahoo.com',
      },
      {
        id: 2,
        name: 'Abraham',
        age: '35',
        date: 'Mon Dec 2005 1995 00:00:00 GMT-0500',
        email: 'aohn@yahoo.com',
      },
      {
        id: 3,
        name: 'Sam',
        age: '45',
        date: 'Mon Dec 20005 1995 00:00:00 GMT-0500',
        email: 'bohn@yahoo.com',
      },
      {
        id: 4,
        name: 'Anil',
        age: '15',
        date: 'Mon Dec 200005 1995 00:00:00 GMT-0500',
        email: 'cohn@yahoo.com',
      },
      {
        id: 5,
        name: 'Mariya',
        age: '24',
        date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500',
        email: 'dohn@yahoo.com',
      },
      {
        id: 6,
        name: 'Crock',
        age: '28',
        date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500',
        email: 'eohn@yahoo.com',
      },
      {
        id: 7,
        name: 'Ram',
        age: '21',
        date: 'Mon Dec 29995 1995 00:00:00 GMT-0500',
        email: 'fohn@yahoo.com',
      },
    ],
    searchableRefList: ['name', 'age', 'date'],
    isAdvance: true,
    showMenu: true,
  };
  return searchInput;
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
    menuExtensionDir: MenuExtensionDirection.ToRight,
    dropDownFieldType: DropdownFieldType.Input,
    fieldStatusType: FieldStatusType.Normal,
    isDisable: false,
  };
  return dropdownInputs;
}
