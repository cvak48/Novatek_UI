
import { Component, OnInit } from '@angular/core';
import { DropdownFieldType } from 'src/app/model/data-model';

@Component({
  selector: 'app-nv-sub-menu',
  templateUrl: './nv-sub-menu.component.html',
  styleUrls: ['./nv-sub-menu.component.scss']
})
export class NvSubMenuComponent implements OnInit {
  menuItems = ['menu item 1', 'menu item 2'];
  siteItems = ['site item 1', 'site item 2'];
  actionItems = ['action 1', 'action 2'];
    // dropDown Menu
    dropdownItemsMenu = mockMenuDropdown().items;
    textTrimNumberMenu = mockMenuDropdown().textTrimNumber;
    selectedItemDefaultMenu = mockMenuDropdown().selectedItemDefault;
    dropDownFieldTypeMenu = mockMenuDropdown().dropDownFieldType;
    // dropDown Site
    dropdownItemsSite = mockSiteDropdown().items;
    textTrimNumberSite = mockSiteDropdown().textTrimNumber;
    selectedItemDefaultSite = mockSiteDropdown().selectedItemDefault;
    dropDownFieldTypeSite = mockSiteDropdown().dropDownFieldType;
    // dropDown Plus
    dropdownItemsPlus = mockPlusDropdown().items;
    textTrimNumberPlus = mockPlusDropdown().textTrimNumber;
    selectedItemDefaultPlus = mockPlusDropdown().selectedItemDefault;
    dropDownFieldTypePlus = mockPlusDropdown().dropDownFieldType;
    isRightToLeft = mockPlusDropdown().isRightToLeft;
  constructor() { }

  ngOnInit(): void {
  }

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

}


function mockMenuDropdown(): any {
  const dropdownInputs = {
    items: ['menu item 1', 'menu item 2'],
    textTrimNumber: 5,
    selectedItemDefault: 'Level 2 Menu Name ',
    dropDownFieldType: DropdownFieldType.Default,
  };
  return dropdownInputs;
}

function mockSiteDropdown(): any {
  const dropdownInputs = {
    items: ['site item 1', 'site item 2'],
    textTrimNumber: 5,
    selectedItemDefault: 'Current Site',
    dropDownFieldType: DropdownFieldType.Default,
  };
  return dropdownInputs;
}

function mockPlusDropdown(): any {
  const dropdownInputs = {
    items: ['action 1', 'action 2'],
    textTrimNumber: 3,
    selectedItemDefault: 'Page',
    dropDownFieldType: DropdownFieldType.Icon,
    // isRightToLeft: true,
  };
  return dropdownInputs;
}
