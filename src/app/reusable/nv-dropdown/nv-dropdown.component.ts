import { DropdownFieldType, MenuExtensionDirection, StatusColor } from './../../model/data-model';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

/**
* USAGE:
* Note that the parent component need to provide proper container (width and height)
* in some case dropdown menu width should be modified
*/

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss']
})
export class NvDropdownComponent implements OnInit {
  /**
   * the selected item as an output
   */
  @Output() itemSelect = new EventEmitter<any>();
  @Input() items: string[] = ['item1'];
  /**
   * it keeps first "textTrimNumber" number and ignore the rest, adding ... instead.
   */
  @Input() textTrimNumber: number = 2;
  /**
   * the default value shown in the field comes as an input but it will be updated as soon as user select new item
   */
  @Input() selectedItem: string = '';
  /**
   * there are three types: Button, Icon, and Default, which is a simple field.
   */
  @Input() fieldType: DropdownFieldType = DropdownFieldType.Default;
  @Input() extensionDirection: MenuExtensionDirection = MenuExtensionDirection.ToRight;

  /**
   * receives styles base on the status of the field
   */
  @Input() backgroundColor: StatusColor = StatusColor.Default;
  @Input() borderColor: StatusColor = StatusColor.Default;
  @Input() textColor: StatusColor = StatusColor.Default;

  /**
   * disabling the dropdown
   */
  @ViewChild('field') dropDownField!: ElementRef;
  @Input() set isDisable(value: boolean) {
    console.log('Input');
    this._isDisable = value;
    if (this._isDisable) {
      this.backgroundColor = StatusColor.Disabled;
      this.borderColor = StatusColor.Disabled;
      this.textColor = StatusColor.Disabled;

    }
  }
  private _isDisable!: boolean;
  showMenu!: boolean;
  selectedIndex!: number;
  // TODO: need to define type for each of these
  isFirst: boolean = true;
  isArrowDown: boolean = true;
  dropDownFieldType = DropdownFieldType;
  menuExtensionDirection = MenuExtensionDirection;

  constructor() {
    console.log('constructor');
    
  }
  private _removeToggleAtt(): void {
    this.dropDownField.nativeElement.removeAttribute('data-toggle');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // if (this._isDisable) {
    //   this._removeToggleAtt();
    // }
    this.dropDownField.nativeElement.removeAttribute('data-toggle');
  }
  onInputClick(): void {
  }
  onBlur() {
    this.isArrowDown = true;
  }
  /**
   * event handler within which the selected item's index is set and the selected item is emitted as an output
   */
  onItemSelect(index: number): void {
    this.isFirst = false;
    this.selectedIndex = index;
    this.selectedItem = this.items[this.selectedIndex];
    this.itemSelect.emit(this.selectedItem);
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }

  }
}
