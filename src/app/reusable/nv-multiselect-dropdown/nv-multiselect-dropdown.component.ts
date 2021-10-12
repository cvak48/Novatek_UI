import { NvTextColorDirective } from './../directives/nv-status-color/nv-text-color.directive';
import { NvStyleColorDirective } from './../directives/nv-status-color/nv-style-color.directive';
import { FieldStatusType, FieldStatusStyle } from './../../model/data-model';
import { ArrowIcon } from '../../model/data-model';
import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { SVG_ICON_IDS_DIC, FIELD_STATUS_COLOR_DIC } from 'src/assets/constants';
/**
 * This component is generated based on Angular material
 * https://v6.material.angular.io/components/chips/api
 */
@Component({
  selector: 'app-nv-multiselect-dropdown',
  templateUrl: './nv-multiselect-dropdown.component.html',
  styleUrls: ['./nv-multiselect-dropdown.component.scss'],
})
export class NvMultiSelectDropdownComponent implements OnInit {
  /**
   * the selected item as an output
   */
  @Output() itemSelect = new EventEmitter<any>();
  // TODO: The arrow need to shift to the right out of the field

  @Input() referenceItems: string[] = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
  ];
  @Input() label!: string;
  /**
   * Sets styles base on the status of the field
   * The inputs of directives in html
   */
  @Input() set fieldStatusType(type: FieldStatusType) {
    this._fieldStatusType = type;
    this._setStyles(this.fieldStatusType);
  }
  get fieldStatusType(): FieldStatusType {
    return this._fieldStatusType;
  }
  private _fieldStatusType!: FieldStatusType;
/**
 * Input for nvStyleColor directive
 */
  fieldStyle!: FieldStatusStyle;
  statusType = FieldStatusType;
  labelStatus!: FieldStatusType;
  isFieldDisable!: boolean;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };
  /**
* References to call directives in the component
*/
  @ViewChild(NvStyleColorDirective) nvStyleColorDirective: any;
  @ViewChild(NvTextColorDirective) nvTextColorDirective: any;
  @ViewChild('itemInput') itemInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  // menu
  filteredItems!: Observable<string[]>;
  // field
  // TODO: What is the default

  items: string[] = [];
  isArrowDown: boolean = true;
  readonly arrowIcons: ArrowIcon = {
    upward: '../../../assets/icons/ico.arrow.up.svg',
    downward: '../../../assets/icons/ico.arrow.down.svg',
  };
  hasItem = false;
  constructor() {
    this._initialize();
    /**
     * AutoComplete as user make query
     */
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) =>
        item ? this._filter(item) : this.referenceItems.slice()
      )
    );
  }
  ngOnInit(): void { }
  /**
   * blur and click eventHandler are responsible for changing the triangle icon direction
   */
  onBlur(): void {
    if (this.matAutocomplete.isOpen) {
      this.isArrowDown = true;
    }
  }
  onFieldClick(): void {
    if (this.matAutocomplete.isOpen) {
      this.isArrowDown = false;
    } else {
      this.isArrowDown = true;
    }
    // TODO: the directive in the html does not get updated as we update its input in the component with as an event get triggered
    // so here we call directive to call its method
    this.nvStyleColorDirective.ngOnDestroy();
    this.nvTextColorDirective.ngOnDestroy();
  }

  add(event: MatChipInputEvent): void {
    /**
     * Add item only when MatAutocomplete is not open
     * To make sure this does not conflict with OptionSelected Event
     */
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      /**
       * Add our item
       */
      if ((value || '').trim()) {
        this.items.unshift(value.trim());
      }
      /**
       * Reset the input value
       */
      if (input) {
        input.value = '';
      }
      this.itemCtrl.setValue(null);
    }
  }
  /**
   * Triggered after removing chip
   * add removed chip into filteredItem
   */
  remove(item: string): void {
    const index = this.items.indexOf(item);
    this.filteredItems = this.filteredItems.pipe(
      map((values) => {
        values.unshift(item);
        return values;
      })
    );

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    if (this.items.length === 0) {
      this.isArrowDown = false;
      this.hasItem = false;
    }
  }
  /**
   * Triggered after selecting from filteredList
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedItem = event.option?.viewValue;
    this.items.push(selectedItem);
    /**
     * sends selectedItem as an output
     */
    this.itemSelect.emit(selectedItem);
    /**
     * removing the selected chip from filteredList
     */
    this.filteredItems = this.filteredItems.pipe(
      map((values) => values.filter((item) => item !== selectedItem))
    );
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }
    if (this.items.length > 0) {
      this.hasItem = true;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredItems = this.referenceItems.filter(
      (item) => item.toLowerCase().indexOf(filterValue) === 0
    );
    return filteredItems;
  }

  /**
   * update the style based on the received status color type;
   * generating scss class name
   */
  private _setStyles(type: FieldStatusType): void {
    let statusType = FieldStatusType.Normal;
    if (!!type) {
      statusType = type;
    } else if (type === 0) {
      statusType = FieldStatusType.Active;
    }
    /**
     * setting style based on status type; style is input for directive nv-style-color directive
     * these styles are used to create style class name using enum type; the style classes are located in base.scss
     */
    let style: FieldStatusStyle = {
      border: statusType,
      background: statusType,
      // The label is not affected by status and  we use labelStatus for that purpose
      text: FieldStatusType.Normal,
    };
    this.labelStatus = statusType;
    if (type === FieldStatusType.Disabled) {
      this.isFieldDisable = true;
    } else {
      this.isFieldDisable = false;
    }
    if (type === FieldStatusType.Required) {
      this.labelStatus = FieldStatusType.Error;
    }
    this.fieldStyle = style;
  }

  private _initialize(): void {
    this._initializeSvgIconStyles();
    this.fieldStatusType = FieldStatusType.Normal;
    this.labelStatus = FieldStatusType.Normal;
    this.isFieldDisable = false;
  }
/**
 * Importing svg icon id and status colors to change the color of svg Icon
 */
  private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
}
