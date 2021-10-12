import { NvTextColorDirective } from './../directives/nv-status-color/nv-text-color.directive';
import { NvStyleColorDirective } from './../directives/nv-status-color/nv-style-color.directive';
import { FieldStatusType, FieldStatusStyle } from '../../model/data-model';
import { FormControl } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  ViewChild,
} from '@angular/core';
import {
  SVG_ICON_IDS_DIC,
  FIELD_STATUS_COLOR_DIC,
} from '../../../assets/constants';
/**
 * Note:
 * The parent component need to provide proper container (width and height) for dropdown field
 * nvSvgColor ( nvStyleColor directives ) are used in html file for changing styles
 */
@Component({
  selector: 'app-nv-field',
  templateUrl: './nv-field.component.html',
  styleUrls: ['./nv-field.component.scss'],
})
export class NvFieldComponent implements OnInit, AfterViewInit, OnChanges {
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
  queryFormControl = new FormControl(null);
  /**
   * Input for nvStyleColor directive
   */
  fieldStyle!: FieldStatusStyle;
  statusType = FieldStatusType;
  labelStatus!: FieldStatusType;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };
  /**
   * References to call directives in the component
   */
  @ViewChild(NvStyleColorDirective) nvStyleColorDirective: any;
  @ViewChild(NvTextColorDirective) nvTextColorDirective: any;
  constructor() {
    this._initialize();
  }
  ngOnChanges(): void {}

  ngOnInit(): void {
    this._populatePropsWithInput();
  }

  ngAfterViewInit(): void {}
  /**
   * Call directive here to reset the style
   */
  onFieldClick(): void {
    this._resetStyle();
    // TODO: the directive in the html does not get updated as we update its input in the component with as an event get triggered
    // so here we call directive to call its method
    this.nvStyleColorDirective.ngOnDestroy();
    this.nvTextColorDirective.ngOnDestroy();
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
      // The label is not affected by status instead we use labelStatus
      text: FieldStatusType.Normal,
    };
    this.labelStatus = statusType;
    if (type === FieldStatusType.Required) {
      this.labelStatus = FieldStatusType.Error;
    }
    this.fieldStyle = style;
  }
  private _resetStyle(): void {
    this.fieldStatusType = FieldStatusType.Normal;
  }
  /**
   * If the user does not pass input
   */
  private _initialize(): void {
    this._initializeSvgIconStyles();
    this.fieldStatusType = FieldStatusType.Normal;
    this.labelStatus = FieldStatusType.Normal;
    // default value
    this.queryFormControl.setValue(null);
  }
  private _populatePropsWithInput(): void {
    // this item is populated in it's setter
    // default value
    this.queryFormControl.setValue(null);
  }
  /**
   * Importing svg icon id and status colors to change the color of svg Icon
   */
  private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
}
