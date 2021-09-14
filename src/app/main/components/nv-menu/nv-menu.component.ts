import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  DropdownFieldType,
  Notification,
  Person,
} from 'src/app/model/data-model';

@Component({
  selector: 'app-nv-menu',
  templateUrl: './nv-menu.component.html',
  styleUrls: ['./nv-menu.component.scss'],
})
export class NvMenuComponent implements OnInit {
  isFirstLevelIcon: boolean = true;
  isSecondLevelIcon: boolean = false;
  showCloseIcon: boolean = false;
  isHamburger: boolean = false;
  showFirstLevelMenu: boolean = false;
  showSecondLevelMenu: boolean = false;
  showSideNav: boolean = false;

  /**
   * Side Menu list items
   */
  sidenavItems = [
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
  ];

  items = [
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
      ],
    },
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
      ],
    },
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
        { name: 'Menu Item L2' },
      ],
    },
  ];

  selectedItem = '';

  person: Person = this.mockProfileMenu();
  menuItems = ['menu item 1', 'menu item 2'];
  siteItems = ['site item 1', 'site item 2'];
  actionItems = ['action 1', 'action 2'];
  // dropDown Menu
  dropdownItemsMenu = this.mockMenuDropdown().items;
  textTrimNumberMenu = this.mockMenuDropdown().textTrimNumber;
  selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
  dropDownFieldTypeMenu = this.mockMenuDropdown().dropDownFieldType;
  // dropDown Site
  dropdownItemsSite = this.mockSiteDropdown().items;
  textTrimNumberSite = this.mockSiteDropdown().textTrimNumber;
  selectedItemDefaultSite = this.mockSiteDropdown().selectedItemDefault;
  dropDownFieldTypeSite = this.mockSiteDropdown().dropDownFieldType;
  // dropDown Plus
  dropdownItemsPlus = this.mockPlusDropdown().items;
  textTrimNumberPlus = this.mockPlusDropdown().textTrimNumber;
  selectedItemDefaultPlus = this.mockPlusDropdown().selectedItemDefault;
  dropDownFieldTypePlus = this.mockPlusDropdown().dropDownFieldType;
  isRightToLeft = this.mockPlusDropdown().isRightToLeft;

  constructor() {}

  ngOnInit(): void {}

  /**
   * DropDowns event handlers
   */
  onMenuItemSelect(item: string): void {
    console.log('selectedMenuItem >>>> ' + +item);
  }
  onSiteItemSelect(item: string): void {
    console.log('selectedSiteItem >>>> ' + +item);
  }
  onPlusItemSelect(item: string): void {
    console.log('selectedPlusItem >>>> ' + +item);
  }

  mockMenuDropdown(): any {
    const dropdownInputs = {
      items: ['menu item 1', 'menu item 2'],
      textTrimNumber: 5,
      selectedItemDefault: 'Level 2 Menu Name ',
      dropDownFieldType: DropdownFieldType.Input,
    };
    return dropdownInputs;
  }

  mockSiteDropdown(): any {
    const dropdownInputs = {
      items: ['site item 1', 'site item 2'],
      textTrimNumber: 5,
      selectedItemDefault: 'Current Site',
      dropDownFieldType: DropdownFieldType.Input,
    };
    return dropdownInputs;
  }

  mockPlusDropdown(): any {
    const dropdownInputs = {
      items: ['action 1', 'action 2'],
      textTrimNumber: 3,
      selectedItemDefault: 'Page',
      dropDownFieldType: DropdownFieldType.Icon,
      // isRightToLeft: true,
    };
    return dropdownInputs;
  }

  mockProfileMenu(): Person {
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

  openFirstLevelMenu() {
    this.isHamburger = true;
    this.isFirstLevelIcon = false;
    this.isSecondLevelIcon = false;
    this.showSecondLevelMenu = false;
    this.showFirstLevelMenu = true;
    this.showSideNav = true;
    this.showCloseIcon = true;
  }

  openSecondLevelMenu(selectedItem: any) {
    this.showSecondLevelMenu = true;
    this.showSideNav = true;
    this.isHamburger = false;
    this.showFirstLevelMenu = false;
    this.showCloseIcon = true;
    this.isSecondLevelIcon = true;
    this.isFirstLevelIcon = false;
    console.log(selectedItem);
    this.selectedItem = selectedItem;
  }

  closeSideNav() {
    this.isFirstLevelIcon = true;
    this.showCloseIcon = false;
    this.isSecondLevelIcon = false;
    this.showSideNav = false;
    this.isHamburger = false;
    this.showFirstLevelMenu = false;
    this.showSecondLevelMenu = false;
  }
}
