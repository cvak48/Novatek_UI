import { DropdownFieldType } from './../../model/data-model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
   * it keep first "textTrimNumber" number and ignore the rest, adding ... instead.
   */
  @Input() textTrimNumber: number = 2;
  /**
   * the default value shown in the field
   */
  @Input() selectedItem: string = '';
  /**
   * there are three types: Button, Icon, and Default, which is a simple field.
   */
  @Input() fieldType: DropdownFieldType = DropdownFieldType.Default;
  
  showMenu!: boolean;
  selectedIndex!: number;
  isFirst: boolean = true;
  isArrowDown: boolean = true;
  dropDownFieldType = DropdownFieldType;
  constructor() {
    
   }

  ngOnInit(): void {
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
