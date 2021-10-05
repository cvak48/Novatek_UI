import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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
  @ViewChild('drawer')
  public drawer!: MatDrawer;
  path : string = '';

  @HostListener('click', ['$event']) clickedInside($event : any) {
    if($event.target.outerHTML.indexOf('hamburger') < 0 && $event.target.outerHTML.indexOf('sidenav-content') < 0
    && $event.target.outerHTML.indexOf('ico.menu.back') < 0){
      this.closeSideNav();
     }
  }
  reason = '';

  close(reason: string) {
    this.reason = reason;
  }

  isFirstLevelIcon: boolean = true;
  isSecondLevelIcon: boolean = false;
  showCloseIcon: boolean = false;
  isHamburger: boolean = false;
  showFirstLevelMenu: boolean = false;
  showSecondLevelMenu: boolean = false;
  showSideNav: boolean = false;

  selectedIndex: number = 0;
  initialHistoryDropDownItems: string[] = [];

  firstLevelSelectedIndex: number = 0;
  showMenu: boolean = false;

  /**
   * Side Menu list items
   */
  firstLevelMenuItems = [
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Dashboard' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Master List' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Dropdown List' },
    {
      icon: '../../../assets/icons/ico.masterlist.svg',
      name: 'System Administation',
    },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Inventory' },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Worklist' },
    {
      icon: '../../../assets/icons/ico.masterlist.svg',
      name: 'Events / Operations',
    },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Usage Logs' },
    {
      icon: '../../../assets/icons/ico.masterlist.svg',
      name: 'Adult Trail/Activity',
    },
    {
      icon: '../../../assets/icons/ico.masterlist.svg',
      name: 'Report Manager',
    },
    { icon: '../../../assets/icons/ico.masterlist.svg', name: 'Analytics' },
  ];

  firstLevelMenu: string = 'History'; //this.firstLevelMenuItems[0].name;

  masterList = [
    {
      name: 'Menu Grouping',
      subItems: [
        { name: 'Equipment Assets' },
        { name: 'Equipment Train' },
        { name: 'Equipment Group' },
      ],
    },
    {
      name: 'Menu Grouping',
      subItems: [{ name: 'Auto ' }, { name: 'Product' }],
    },
    {
      name: 'Menu Grouping',
      subItems: [{ name: 'Protocol' }],
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
      name: '',
      subItems: [
        { name: 'Equipment Assets' },
        { name: 'Equipment Train' },
        { name: 'Equipment Group' },
        { name: 'Auto Claves' },
        { name: 'Product' },
      ],
    },
  ];

  seconndLevelMenuItems = [
    {
      name: '',
      subItems: []
    },
    {
      name: 'Master List',
      subItems: [
        { name: 'Equipment Assets' },
        { name: 'Equipment Train' },
        { name: 'Equipment Group' },
        { name: 'Auto Claves' },
        { name: 'Product' },
        { name: 'Single Use Equipment' },
        { name: 'Protocol' },
        { name: 'Specifications' },
        { name: 'Controlled Areas' },
      ],
    },
    {
      name: '',
      subItems: []
    },
    {
      name: 'System Administration',
      subItems: [
        { name: 'User Management' },
        { name: 'Global Options(Locale,Logo,etc)' },
        { name: 'Site Management' },
        { name: 'Roles Management' },
      ],
    },
    {
      name: 'Inventory',
      subItems: [
        { name: 'Consumables' },
        { name: 'Assets' },
        { name: 'Lot Registrations' },
        { name: 'Sparo Parts' },
        { name: 'Cleaning Agents' },
        { name: 'Single Use Standards' },
      ],
    },
    {
      name: '',
      subItems: []
    },
    {
      name: 'Events/Operations',
      subItems: [
        { name: 'Events List' },
        { name: 'scheduler' },
        { name: 'Deviations' },
      ],
    },
    {
      name: 'Usage Logs',
      subItems: [
        { name: 'Equipment Assets' },
        { name: 'Equipment Train' },
        { name: 'Auto Claves/Part Washers' },
        { name: 'Products' },
      ],
    },
    {
      name: 'Adult Trail/Activity',
      subItems: [
        { name: 'Data Activity Logs' },
        { name: 'Data Adult Trail' },
        { name: 'User Management Adult Trail' },
        { name: 'User Management Activity Log' },
      ],
    },
    {
      name: 'Report Manager',
      subItems: [
        { name: 'Report Selection' },
        { name: 'Filter Management' },
        { name: 'Adhoc Reports(Part2)' },
      ],
    },
    {
      name: 'Analytics',
      subItems: [
        { name: 'Trends' },
        { name: 'Charts/Metrics' },
        { name: 'KPIs' },
      ],
    },
  ];

  person: Person = this.mockProfileMenu();

  // dropDown Menu
  dropdownItemsMenu = this.initialHistoryDropDownItems; //this.getSubMenuItemForDropdown(0);
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
    console.log(item);
    this.dropdownItemsMenu = this.setHistoryDropdownItems(item);
    //this.selectedItemDefaultMenu = item;
    this.selectedIndex = 0;
  }
  onSiteItemSelect(item: string): void {}
  onPlusItemSelect(item: string): void {}

  mockMenuDropdown(): any {
    const dropdownInputs = {
      items: this.initialHistoryDropDownItems, //this.getMenuItemsForDropdown(),
      textTrimNumber: 5,
      selectedItemDefault: 'Dashboard',
      dropDownFieldType: DropdownFieldType.Input,
    };
    return dropdownInputs;
  }

  private getMenuItemsForDropdown() {
    let menuItem: string[] = [];
    this.firstLevelMenuItems.forEach((n) => menuItem.push(n.name));
    return menuItem;
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
    this.showMenu = true;
  }

  openSecondLevelMenu(index: number) {
     if(index === 0 || index === 2 || index === 5){
     return;
     }
    this.firstLevelSelectedIndex = index;
    this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    this.showSecondLevelMenu = true;
    this.showSideNav = true;
    this.isHamburger = false;
    this.showFirstLevelMenu = false;
    this.showCloseIcon = true;
    this.isSecondLevelIcon = true;
    this.isFirstLevelIcon = false;
  }

  selectedSecondLevelMenuItem(index: number, item: any) {
    this.selectedItemDefaultMenu = item.name;
    this.dropdownItemsMenu = this.setHistoryDropdownItems(item.name);
    //this.onMenuItemSelect(item.name);
  }

  setHistoryDropdownItems(item: any) {
    this.initialHistoryDropDownItems.unshift(item);
    const uniqueHistoryDropDownItems = new Set(
      this.initialHistoryDropDownItems
    );
    return Array.from(new Set(this.initialHistoryDropDownItems));
  }

  private getSubMenuItemForDropdown(index: number) {
    let tempArr: string[] = [];
    this.seconndLevelMenuItems[index].subItems.forEach((item) =>
      tempArr.push(item.name)
    );
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
