import {
  MenuExtensionDirection,
  FieldStatusType,
  FieldStatusStyle,
  ArrowIcon,
} from './../../model/data-model';
import { DropdownFieldType } from 'src/app/model/data-model';
import { NvFilterPipe } from '../pipes/filters/nv-filter/nv-filter.pipe';
import { NvTrimPipe } from './../pipes/nv-trim/nv-trim.pipe';
import { FormControl } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
} from '@angular/core';
import {
  SVG_ICON_IDS_DIC,
  FIELD_STATUS_COLOR_DIC,
} from './../../../assets/constants';

/**
 * Functionalities:
 * 1: Covers button, simple field (Input) and Icon dropdown => fieldType
 * 2: It can be disabled based on need => isFieldDisable
 * 3: The menu can open from leftToRight and vice versa => MenuExtensionDirection
 * 4: The length of item to be shown after selection is adjustable => textTrimNumber
 * Note:
 * The parent component need to provide proper container (width and height) for dropdown field
 * in some case dropdown menu width should be modified
 * nvSvgColor are nvStyleColor directives are used in html file for changing styles
 */

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss'],
})
export class NvDropdownComponent implements OnInit, AfterViewInit, OnChanges {
  /**
   * The selected item as an output
   */
  @Output() itemSelect = new EventEmitter<string>();
  /**
   * access to html/svg elements
   */
  @ViewChild('inputFieldRef') inputFieldRef!: ElementRef<HTMLElement>;
  @ViewChild('PlusIconRef') PlusIconRef!: ElementRef<HTMLElement>;
  @ViewChild('ButtonRef') ButtonRef!: ElementRef<HTMLElement>;

  @Input() items!: string[];
  /**
   * It keeps first "textTrimNumber" number and ignore the rest, adding . . . instead.
   */
  @Input() textTrimNumber!: number;
  /**
   * The default value shown in the field comes as an input but it will be updated as soon as user select new item
   */
  @Input() selectedItem!: string;
  /**
   * There are three types: Button, Icon, and Default, which is a simple field.
   */
  @Input() fieldType!: DropdownFieldType;
  @Input() extensionDirection!: MenuExtensionDirection;
  /**
   * Disables the fields
   * All the styles will be automatically changed
   */
  @Input() isFieldDisable!: boolean;
  /**
   * Sets styles base on the status of the field
   * The inputs of directives in html
   * If isFieldDisable is true, the styles will be updated upon it
   */
  @Input() set fieldStatusType(type: FieldStatusType) {
    console.log(type);
    console.log(this.isFieldDisable);
    this._fieldStatusType = type;
    this._setStyles(this.fieldStatusType, this.isFieldDisable);
    if (type == this.statusType.Error) {
      this.fieldStatusColorDic.error = 'red';
    }
  }
  get fieldStatusType(): FieldStatusType {
    return this._fieldStatusType;
  }
  private _fieldStatusType!: FieldStatusType;
  hideMenu!: boolean;
  @Input() selectedIndexx!: number;
  selectedIndex!: number;
  isItemSelected!: boolean;
  /**
   * the default style for selectedItem
   */
  isDefaultStyle!: boolean;
  isArrowDownIcon!: boolean;
  dropDownFieldType = DropdownFieldType;
  arrowIcons!: ArrowIcon;
  menuExtensionDirection = MenuExtensionDirection;
  queryFormControl = new FormControl(null);
  filteredItems!: string[];
  /**
   * Input for nvStyleColor directive
   */
  fieldStyle!: FieldStatusStyle;
  statusType = FieldStatusType;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };
  constructor(private filter: NvFilterPipe, private nvTextTrim: NvTrimPipe) {
    this._initializeDropdownProps();
  }
  ngOnChanges(): void {
    this._populateDropdownPropsWithInput();
    this.filteredItems = this.items;
    this.selectedIndex = this.selectedIndexx;
  }

  ngOnInit(): void {
    this._populateDropdownPropsWithInput();
    this._filterInputQuery();
  }
  private _filterInputQuery(): void {
    /**
     * filtering items in case of input field otherwise it returns items for showing in menu
     */
    if (this.fieldType === this.dropDownFieldType.Input) {
      this.queryFormControl.valueChanges.subscribe((query) => {
        /**
         * if the item is selected from menu, it should not be filtered again
         */
        if (this.isItemSelected) {
          this.isItemSelected = false;
        } else {
          this.filteredItems = query
            ? this.filter.transform(this.items, query)
              ? this.filter.transform(this.items, query)
              : this.items.slice()
            : this.items.slice();
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.isFieldDisable) {
      this._disableDropdownMenu();
    }
  }

  private _disableDropdownMenu(): void {
    /**
     * Remove toggle to disable the dropdown menu
     */
    if (this.fieldType === this.dropDownFieldType.Input) {
      this.inputFieldRef?.nativeElement.removeAttribute('data-toggle');
      // this._changeArrowIconStyleToDisable();
    } else if (this.fieldType === this.dropDownFieldType.Button) {
      this.ButtonRef?.nativeElement.removeAttribute('data-toggle');
      // this._changeArrowIconStyleToDisable();
    } else if (this.dropDownFieldType.Icon) {
      this.PlusIconRef?.nativeElement.removeAttribute('data-toggle');
      /**
       * data-toggle does not work in Object element So the click and blur events handle the open and close functionalities
       */
    }
  }

  onFieldClick(): void {
    if (this.isArrowDownIcon && !this.isFieldDisable) {
      this.isArrowDownIcon = false;
    } else if (!this.isArrowDownIcon && !this.isFieldDisable) {
      this.isArrowDownIcon = true;
    }

    if (this.filteredItems?.length === 0) {
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
      const trimmedValue = this.nvTextTrim.transform(
        this.selectedItem,
        this.textTrimNumber
      );
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
   * update the style based on the received status color type;
   * generating scss class name
   */
  private _setStyles(type: FieldStatusType, isDisable: boolean): void {
    let statusType = FieldStatusType.Normal;

    if (!isDisable) {
      if (type) {
        statusType = type;
      }
      if (type === 0) {
        statusType = FieldStatusType.Active;
      }
      if (!type && type !== 0) {
        statusType = FieldStatusType.Normal;
      }
    } else {
      statusType = FieldStatusType.Disabled;
    }
    /**
     * setting style based on status type; style is input for directive nv-style-color directive
     * these styles are used to create style class name using enum type; the style classes are located in base.scss
     * The filed text is not affected by the user except the disabled state
     */
    const style: FieldStatusStyle = {
      border: statusType,
      background: statusType,
      /**
       * The filed text is not affected by the user except the disabled state
       */
      text: FieldStatusType.Normal,
    };
    this.fieldStyle = style;
    if (statusType === FieldStatusType.Disabled) {
      this.fieldStyle.text = statusType;
    }
  }
  /**
   * If the user does not pass input
   */
  private _initializeDropdownProps(): void {
    this._initializeSvgIconStyles();
    this.textTrimNumber = 2;
    this.fieldType = DropdownFieldType.Input;
    this.fieldStatusType = FieldStatusType.Normal;
    this.isFieldDisable = false;
    this.extensionDirection = MenuExtensionDirection.ToRight;
    this.hideMenu = false;
    this.isItemSelected = false;
    this.isDefaultStyle = true;
    this.isArrowDownIcon = true;
    this.filteredItems = [];
    this.items = [];
    // default value
    this.queryFormControl.setValue(null);
    this.arrowIcons = {
      upward: '../../../assets/icons/ico.arrow.up.svg',
      downward: '../../../assets/icons/ico.arrow.down.svg',
    };
  }
  private _populateDropdownPropsWithInput(): void {
    // this item is populate in it's setter
    this.filteredItems = this.items;
    // default value
    this.queryFormControl.setValue(this.selectedItem);
  }
  /**
   * Importing svg icon id and status colors to change the color of svg Icon
   */
  private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
}
