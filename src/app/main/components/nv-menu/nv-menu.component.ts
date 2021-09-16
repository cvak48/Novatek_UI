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

  firstLevelMenu: string = 'Menu Item L1';

  showL12: boolean = true;
  showL22: boolean = false;
  showL32: boolean = false;

  /**
   * Side Menu list items
   */
  sidenavItems = [
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L1' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L2' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L3' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Menu Item L4' },
  ];

  itemsL12 = [
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item Level2 1st item' },
        { name: 'Menu Item Level2 2nd item' },
        { name: 'Menu Item Level2 3rd item' },
        { name: 'Menu Item Level2 4th item' },
        { name: 'Menu Item Level2 5th item' },
        { name: 'Menu Item Level2 6th item' },
      ],
    },
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item Level21 1st item' },
        { name: 'Menu Item Level21 2nd item' },
        { name: 'Menu Item Level21 3rd item' },
        { name: 'Menu Item Level21 4th item' },
        { name: 'Menu Item Level21 5th item' },
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

  itemsL22 = [
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item L22 item' },
        { name: 'Menu Item L22 item' },
        { name: 'Menu Item L22 item' },
      ],
    },
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item Level21 1st item' },
        { name: 'Menu Item Level21 2nd item' },
        { name: 'Menu Item Level21 3rd item' },
        { name: 'Menu Item Level21 4th item' },
        { name: 'Menu Item Level21 5th item' },
      ],
    },
  ];

  itemsL32 = [
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Menu Item L32' },
        { name: 'Menu Item L32' },
        { name: 'Menu Item L32' },
      ],
    },
  ];

  selectedItem = '';

  person: Person = this.mockProfileMenu();
  menuItems = ['menu item 1', 'menu item 2'];
  siteItems = ['site item 1', 'site item 2'];
  actionItems = ['action 1', 'action 2'];
  // dropDown Menu
  dropdownItemsMenu = this.getSubMenuItemFOrDropdown(this.itemsL12);
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
      items: ['Menu Item L12', 'Menu Item L12', 'Menu Item L12'],
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
    if (selectedItem.name.indexOf('L1') > 1) {
      this.showL12 = true;
      this.showL22 = false;
      this.showL32 = false;
      this.firstLevelMenu = 'Menu Item L1';
      this.dropdownItemsMenu = this.getSubMenuItemFOrDropdown(this.itemsL12);
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    } else if (selectedItem.name.indexOf('L2') > 1) {
      this.showL12 = false;
      this.showL22 = true;
      this.showL32 = false;
      this.firstLevelMenu = 'Menu Item L2';
      this.dropdownItemsMenu = this.getSubMenuItemFOrDropdown(this.itemsL22);
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    } else if (selectedItem.name.indexOf('L3') > 1) {
      this.showL12 = false;
      this.showL22 = false;
      this.showL32 = true;
      this.firstLevelMenu = 'Menu Item L3';
      this.dropdownItemsMenu = this.getSubMenuItemFOrDropdown(this.itemsL32);
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    }
    this.showSecondLevelMenu = true;
    this.showSideNav = true;
    this.isHamburger = false;
    this.showFirstLevelMenu = false;
    this.showCloseIcon = true;
    this.isSecondLevelIcon = true;
    this.isFirstLevelIcon = false;
    this.selectedItem = selectedItem;
  }

  private getSubMenuItemFOrDropdown(items:any) {
    let tempArr: string[] = [];
    items.forEach((s: { subItems: any[]; }) => {
      s.subItems.forEach((n) => tempArr.push(n.name));
    });
    return tempArr;
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
