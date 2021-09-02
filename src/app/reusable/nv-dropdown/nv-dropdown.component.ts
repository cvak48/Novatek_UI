import { MenuExtensionDirection, StatusType, StyleType, StatusIconType, SvgIconId, FieldStatus } from './../../model/data-model';
import { DropdownFieldType } from 'src/app/model/data-model';
import { NvFilterPipe } from '../pipes/filters/nv-filter/nv-filter.pipe';
import { NvTrimPipe } from './../pipes/nv-trim/nv-trim.pipe';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { _MatMenuDirectivesModule } from '@angular/material/menu';
import { SVG_ICONS_IDS, FIELD_STATUS_COLOR } from './../../../assets/constants'

/**
 * Title:
 * Functionalities:
 * 1: covers button, simple field (Input) and Icon dropdown => fieldType
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
  styleUrls: ['./nv-dropdown.component.scss'],
})
export class NvDropdownComponent implements OnInit, AfterViewInit {
  /**
   * The selected item as an output
   */
  @Output() itemSelect = new EventEmitter<string>();
  @Input() set items(list: string[]) {
    this._items = list ? list : [];
    // Initializing the menu items
    this.filteredItems = this._items;
  }
  get items(): string[] {
    return this._items;
  }
  private _items!: string[];
  /**
   * It keeps first "textTrimNumber" number and ignore the rest, adding ... instead.
   */
  @Input() textTrimNumber: number = 2;
  /**
   * The default value shown in the field comes as an input but it will be updated as soon as user select new item
   */
  @Input() selectedItem: string = 'Select item';
  /**
   * There are three types: Button, Icon, and Default, which is a simple field.
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
  @Input() set fieldStatusType(type: StatusType) {
    // TODO: initial function
    this._fieldStatusType = type;
    if (this._fieldStatusType && !this.isFieldDisable) {
      this._updateStyles(this._fieldStatusType);
    }
    if (!this._fieldStatusType && !this.isFieldDisable) {
      if (this._fieldStatusType === 0) {
        this._updateStyles(StatusType.Active);
      } else {
        this._updateStyles(StatusType.Normal);
      }
    }

  }
  get fieldStatusType(): StatusType {
    return this._fieldStatusType;
  }
  private _fieldStatusType!: StatusType;

  /**
   * access to html elements
   */
  @ViewChild('inputFieldRef') inputFieldRef!: ElementRef<HTMLElement>;
  @ViewChild('PlusIconRef') PlusIconRef!: ElementRef<HTMLElement>;
  @ViewChild('arrowDownRef') arrowDownRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('questionIconRef') questionIconRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('exclamationIconRef') exclamationIconRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('checkMarkIconRef') checkMarkIconRef!: ElementRef<HTMLObjectElement>;
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
  statusIconType = StatusIconType;
  statusIcon!: StatusIconType;
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
  svgIconsRef!: SvgIconId[];
  statusColors!: FieldStatus[];
  constructor(private renderer: Renderer2, private filter: NvFilterPipe, private nvTextTrim: NvTrimPipe) {
    // ADD INITIALIZE METHOD
    /**
     * Having access to svg icon id to change the style
     */
    this.svgIconsRef = SVG_ICONS_IDS;
    this.statusColors = FIELD_STATUS_COLOR;
  }
  initializeSvgProps(): void { }

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

  }

  ngAfterViewInit(): void {
    /**
     * opening and closing the dropdown menu in case of plus-button TODO: adding object element
     */

    if (this.isFieldDisable) {
      /**
       * Remove toggle to disable the dropdown menu
       */
      if (this.fieldType === this.dropDownFieldType.Input) {
        this.inputFieldRef?.nativeElement.removeAttribute('data-toggle');
        this._changeArrowIconStyleToDisable();
      } else if (this.fieldType === this.dropDownFieldType.Button) {
        this.ButtonRef?.nativeElement.removeAttribute('data-toggle');
        this._changeArrowIconStyleToDisable();
      } else if (this.dropDownFieldType.Icon) {
        this.PlusIconRef?.nativeElement.removeAttribute('data-toggle');
        /**
         *  plus icon color TODO: adding object element
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
     * close the dropdown menu in case of plus-button TODO: adding object element element
     *
     */
  }
  /**
   * update the style based on the received status color type by generating scss class name
   */
  private _updateStyles(type: StatusType): void {
    let status: StatusType;
    this.statusIcon = StatusIconType.Default;
    switch (type) {
      case StatusType.Active:
        status = StatusType.Active;
        break;
      case StatusType.Required:
        status = StatusType.Required;
        break;
      case StatusType.Error:
        status = StatusType.Error;
        this.statusIcon = StatusIconType.Exclamation;
        break;
      case StatusType.Accepted:
        status = StatusType.Accepted;
        this.statusIcon = StatusIconType.CheckMark;
        break;
      case StatusType.Modified:
        status = StatusType.Modified;
        break;
      case StatusType.Disabled:
        status = StatusType.Disabled;
        break;
      case StatusType.Help:
        status = StatusType.Normal;
        this.statusIcon = StatusIconType.Question;
        break;
      default:
        status = StatusType.Normal;
        break;
    }

    if (status) {
      this.styleType = this._populateStyleType(status);
    } else {
      this.styleType = this._populateStyleType(StatusType.Normal);
    }
  }
  private _populateStyleType(selectedStatusType: StatusType): StyleType {
    const styles: StyleType = {
      background: selectedStatusType,
      border: selectedStatusType,
      /**
       * The filed text is not affected by the user except the disabled state
       */
      text: StatusType.Normal
    };
    if (selectedStatusType === StatusType.Disabled) {
      styles.text = selectedStatusType;
    }
    return styles;
  }
  private _changeArrowIconStyleToDisable(): void {
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
