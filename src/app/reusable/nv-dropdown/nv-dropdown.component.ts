import { MenuExtensionDirection, StatusColor } from './../../model/data-model';
import { DropdownFieldType } from 'src/app/model/data-model';
import { NvFilterPipe } from './../pipes/filters/filterAll/nv-filter.pipe';
import { NvTrimPipe } from './../pipes/nv-trim/nv-trim.pipe';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { _MatMenuDirectivesModule } from '@angular/material/menu';
/**
 * Title:
 * Functionalities:
 * 1: covers button, simple field (editable) and Icon dropdown => fieldType
 * 2: it can be disabled based on need => isFieldDisable
 * 3: The menu can open from leftToRight and vice versa => MenuExtensionDirection
 * 4: the length of item to be shown after selection is adjustable => textTrimNumber
 * Usage:
 * that the parent component need to provide proper container (width and height)
 * Note:
 * in some case dropdown menu width should be modified
 * Author: Spz 27-08-2021
 */

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss']
})
export class NvDropdownComponent implements OnInit, AfterViewInit {
  /**
   * the selected item as an output
   */
  @Output() itemSelect = new EventEmitter<any>();
  @Input() set items(list: string[]) {
    this._items = list ? list : [];
    this.filteredItems = this._items;
  }
  get items(): string[] {
    return this._items;
  }
  private _items!: string[];
  /**
   * it keeps first "textTrimNumber" number and ignore the rest, adding ... instead.
   */
  @Input() textTrimNumber: number = 2;
  /**
   * the default value shown in the field comes as an input but it will be updated as soon as user select new item
   */
  @Input() selectedItem: string = 'Select ...';
  /**
   * there are three types: Button, Icon, and Default, which is a simple field.
   */
  @Input() fieldType: DropdownFieldType = DropdownFieldType.Input;
  @Input() extensionDirection: MenuExtensionDirection = MenuExtensionDirection.ToRight;
  /**
   * Disable the fields
   * All the styles will be automatically changed
   */
  @Input() isFieldDisable: boolean = false;
  /**
   * set styles base on the status of the field
   * The inputs of directives in html
   */
  @Input() set fieldStatusColor(status: StatusColor) {
    this._fieldStatusColor = status;
    if (this._fieldStatusColor && !this.isFieldDisable) {
      this._updateStyles(this._fieldStatusColor);
    }
  }
  get fieldStatusColor(): StatusColor {
    return this._fieldStatusColor;
  }
  private _fieldStatusColor!: StatusColor;
  /**
   * access to html elements
   */
  @ViewChild('inputFieldRef') inputFieldRef!: ElementRef<HTMLElement>;
  // @ViewChild('PlusIconRef') PlusIconRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('PlusIconRef') PlusIconRef!: ElementRef<HTMLElement>;
  @ViewChild('arrowDownRef') arrowDownRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('ButtonRef') ButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('menu') menu!: ElementRef<HTMLElement>;
  @ViewChild('dropdown') dropdown!: ElementRef<HTMLElement>;

  hideMenu: boolean = false;
  selectedIndex!: number;
  isItemSelected: boolean = false;
  backgroundColor!: StatusColor;
  borderColor!: StatusColor;
  textColor!: StatusColor;
  // TODO: need to define type for each of these
  /**
   * the default style for selectedItem
   */
  isDefaultStyle: boolean = true;
  isArrowDownIcon: boolean = true;
  dropDownFieldType = DropdownFieldType;
  menuExtensionDirection = MenuExtensionDirection;
  // initial value: this.selectedItem
  queryFormControl = new FormControl(`${this.selectedItem}`); // initial value
  filteredItems: string[] = this.items;
  constructor(private renderer: Renderer2, private filter: NvFilterPipe, private nvTextTrim: NvTrimPipe) { }

  ngOnInit(): void {
    /**
     * filtering items in case of input field otherwise it returns items for showing in menu
     */
    if (this.fieldType === this.dropDownFieldType.Input) {
    this.queryFormControl.valueChanges.subscribe(query => {
    /**
     * if the item is selected from menu, it should not be filtered again
     */
      if (this.isItemSelected) {
        this.isItemSelected = false;
      } else {
        this.filteredItems = query ? (this.filter.transform(this.items, query) ? this.filter.transform(this.items, query)
          : this.items.slice()) : this.items.slice();
      }
    });
  }
    if (this.isFieldDisable) {
      /**
       * change the border, background and text color if it is disabled before the view get initialized
       */
      this._updateStyles(StatusColor.Disabled);
    } else if (!this._fieldStatusColor) {
      this._updateStyles(StatusColor.Default);
    }
  }

  ngAfterViewInit(): void {
    /**
     * opening and closing the dropdown menu in case of plus-button TODO: adding object
     */

    if (this.isFieldDisable) {
      /**
       * Remove toggle to disable the dropdown menu
       */
      if (this.fieldType === this.dropDownFieldType.Input) {
        this.inputFieldRef?.nativeElement.removeAttribute('data-toggle');
        this._changeTriangleStyleToDisable();
      } else if (this.fieldType === this.dropDownFieldType.Button) {
        this.ButtonRef?.nativeElement.removeAttribute('data-toggle');
        this._changeTriangleStyleToDisable();
      } else if (this.dropDownFieldType.Icon) {
        this.PlusIconRef?.nativeElement.removeAttribute('data-toggle');
        /**
         *  plus icon color TODO: adding object
         */
        /**
         * data-toggle does not work in Object element So the click and blur events handle the open and close functionalities
         */
      }
      /**
       * Note: Remove icons; triangles
       * they are disabled in html
       */
    }



  }

  onFieldClick(): void {
    if (this.isArrowDownIcon && !this.isFieldDisable) {
      this.isArrowDownIcon = false;
    } else if (!this.isArrowDownIcon && !this.isFieldDisable) {
      this.isArrowDownIcon = true;
    }

    if (this.filteredItems.length === 0) {
      this.hideMenu = true;
    } else {
      this.hideMenu = false;
    }

  }

  onBlur(): void {
    this.isArrowDownIcon = true;
  }
  /**
   * event handler within which the selected item's index is set and the selected item is emitted as an output
   */
  onItemSelect(index: number): void {
    this.isDefaultStyle = false;
    this.selectedIndex = index;
    this.isItemSelected  = true;
    this.selectedItem = this.filteredItems[this.selectedIndex];
    this.filteredItems = this.items;
    if (this.fieldType === DropdownFieldType.Input) {
      const trimmedValue = this.nvTextTrim.transform(this.selectedItem, this.textTrimNumber);
      this.queryFormControl.setValue(trimmedValue);
      this.selectedItem = trimmedValue;
    }
    this.itemSelect.emit(this.selectedItem);
    if (!this.isArrowDownIcon) {
      this.isArrowDownIcon = true;
    }
    /**
     * close the dropdown menu in case of plus-button TODO: adding object
     *
     */
  }
  /**
   * update the style based on the received status color type by generating scss class name
   */
  private _updateStyles(type: StatusColor): void {
    let statusType: StatusColor;
    switch (type) {
      case StatusColor.Active:
        statusType = StatusColor.Active;
        break;
      case StatusColor.Required:
        statusType = StatusColor.Required;
        break;
      case StatusColor.Accepted:
        statusType = StatusColor.Accepted;
        break;
      case StatusColor.Error:
        statusType = StatusColor.Error;
        break;
      case StatusColor.Accepted:
        statusType = StatusColor.Accepted;
        break;
      case StatusColor.Modified:
        statusType = StatusColor.Modified;
        break;
      case StatusColor.Disabled:
        statusType = StatusColor.Disabled;
        break;
      default:
        statusType = StatusColor.Default;
        break;
    }
    this.backgroundColor = statusType;
    this.borderColor = statusType;
    this.textColor = StatusColor.Default;
    if (statusType === StatusColor.Disabled) {
      this.textColor = statusType;
    }
  }
  private _changeTriangleStyleToDisable(): void {
    setTimeout(() => {
      const svgTriangleDoc = this.arrowDownRef?.nativeElement?.contentDocument;
      const arrowSign = svgTriangleDoc?.getElementById('ico.arrow.down-2');
      const disableColor = '#B5B5B5';
      if (arrowSign) {
        this.renderer.setStyle(arrowSign, 'fill', disableColor);
      }
    }, 100);
  }

}
