import { MenuExtensionDirection, StatusType, StyleType } from './../../model/data-model';
import { DropdownFieldType } from 'src/app/model/data-model';
import { NvFilterPipe } from './../pipes/filters/filterAll/nv-filter.pipe';
import { NvTrimPipe } from './../pipes/nv-trim/nv-trim.pipe';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
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
export class NvDropdownComponent implements OnInit, AfterViewInit, OnChanges {
  /**
   * the selected item as an output
   */
  @Output() itemSelect = new EventEmitter<string>();
  @Input() set items(list: string[]) {
    this._items = list ? list : [];
    // initializing the menu items
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
  @Input() set isFieldDisable(isDisable: boolean) {
    this._isFieldDisable = isDisable;
    if (this._isFieldDisable) {
      this._updateStyles(StatusType.Disabled);
    }

  }
  get isFieldDisable(): boolean {
    return this._isFieldDisable;
  }
  private _isFieldDisable!: boolean;
  /**
   * set styles base on the status of the field
   * The inputs of directives in html
   */
  @Input() fieldStatusColor!: StatusType;
  // this._fieldStatusColor = status;
  // console.log('INPUT');
  // if (this._fieldStatusColor && !this.isFieldDisable) {
  //   this._updateStyles(this._fieldStatusColor);
  // }
  // if (!this._fieldStatusColor && !this.isFieldDisable) {
  //   this._updateStyles(StatusColor.Default);
  // }


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
  backgroundColor!: StatusType;
  borderColor!: StatusType;
  textColor!: StatusType;
  styleType!: StyleType;
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log('fieldStatusColor OnChange >' + this.fieldStatusColor);
  }

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
    console.log('fieldStatusColor OnInit >' + this.fieldStatusColor);
    if (this.fieldStatusColor && !this.isFieldDisable) {
      this._updateStyles(this.fieldStatusColor);
    }
    if (!this.fieldStatusColor && !this.isFieldDisable) {
      this._updateStyles(StatusType.Default);
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
    this.isItemSelected = true;
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
  private _updateStyles(type: StatusType): void {
    let statusType: StatusType;
    switch (type) {
      case StatusType.Active:
        statusType = StatusType.Active;
        break;
      case StatusType.Required:
        statusType = StatusType.Required;
        break;
      case StatusType.Accepted:
        statusType = StatusType.Accepted;
        break;
      case StatusType.Error:
        statusType = StatusType.Error;
        break;
      case StatusType.Accepted:
        statusType = StatusType.Accepted;
        break;
      case StatusType.Modified:
        statusType = StatusType.Modified;
        break;
      case StatusType.Disabled:
        statusType = StatusType.Disabled;
        break;
      default:
        statusType = StatusType.Default;
        console.log('Default' + this.backgroundColor);
        break;
    }
    this.backgroundColor = statusType;
    this.borderColor = statusType;
    this.textColor = StatusType.Default;
    if (statusType === StatusType.Disabled) {
      this.textColor = statusType;
    }
  }
  private _populateStyleType(statusType: StatusType): StyleType {
    const styles: StyleType = {
      background: statusType,
      border: statusType,
      text: StatusType.Default
    };
    if (statusType === StatusType.Disabled) {
      styles.text = statusType;
    }

    return styles;
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
