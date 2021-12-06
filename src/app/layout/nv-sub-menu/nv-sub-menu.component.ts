
import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DropdownFieldType } from 'src/app/model/data-model';

@Component({
  selector: 'app-nv-sub-menu',
  templateUrl: './nv-sub-menu.component.html',
  styleUrls: ['./nv-sub-menu.component.scss']
})
export class NvSubMenuComponent implements OnInit, AfterViewInit {
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

  @ViewChild('middleMenu', {static: false, read: ElementRef}) public middleMenu!: ElementRef<any>;

  constructor() {}
  // element = (<HTMLInputElement>document.getElementById("middleMenu")).clientHeight;

  ngOnInit(): void {
    // console.log("element >> ", this.element)
  }

  ngAfterViewInit() {
    var middleMenuheight = this.middleMenu.nativeElement.offsetHeight;
    sessionStorage.setItem('middleMenu', middleMenuheight);
  }


  /**
   * DropDowns event handlers
   */
  onMenuItemSelect(item: string): void {
  }
  onSiteItemSelect(item: string): void {
  }
  onPlusItemSelect(item: string): void {
  }

}


function mockMenuDropdown(): any {
  const dropdownInputs = {
    items: ['menu item 1', 'menu item 2'],
    textTrimNumber: 5,
    selectedItemDefault: 'Level 2 Menu Name ',
    dropDownFieldType: DropdownFieldType.Input,
  };
  return dropdownInputs;
}

function mockSiteDropdown(): any {
  const dropdownInputs = {
    items: ['site item 1', 'site item 2'],
    textTrimNumber: 5,
    selectedItemDefault: 'Current Site',
    dropDownFieldType: DropdownFieldType.Input,
  };
  return dropdownInputs;
}

function mockPlusDropdown(): any {
  const dropdownInputs = {
    items: ['action 1', 'action 2'],
    textTrimNumber: 3,
    selectedItemDefault: 'Page',
    dropDownFieldType: DropdownFieldType.Icon
  };
  return dropdownInputs;
}
