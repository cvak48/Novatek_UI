import {
  Message,
  FieldStatusType,
  FieldStatusStyle,
} from './../../model/data-model';
import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FIELD_STATUS_COLOR_DIC, SVG_ICON_IDS_DIC } from 'src/assets/constants';

@Component({
  selector: 'app-nv-popup-message',
  templateUrl: './nv-popup-message.component.html',
  styleUrls: ['./nv-popup-message.component.scss'],
})
export class NvPopupMessageComponent implements OnInit, AfterViewInit {
  @Output() cancelClick = new EventEmitter<boolean>(false);
  @Input() message!: Message;
  /**
   * Sets styles base on the status of the field
   * The inputs of directives in html
   */
  @Input() set statusType(type: FieldStatusType) {
    this._fieldStatusType = type;
    this._setStyles(this.statusType);
  }
  get statusType(): FieldStatusType {
    return this._fieldStatusType;
  }
  private _fieldStatusType!: FieldStatusType;
  fieldStyleType!: FieldStatusStyle;
  svgIconStatusColor!: string;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };
  showPopupMsgCard: boolean = true;

  constructor() {
    this._initializeSvgIconStyles();
    this._initializeMessage();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  onCancelClick(): void {
    this.cancelClick.emit(true);
  }
  private _initializeMessage(): void {
    this.message = {
      header: 'was this what you request?',
      content: 'detail for this prop',
      icon: './../../../assets/icons/circular-cancel.icon.svg',
    };
  }

  /**
   * Importing svg icon id and status colors to change the color of svg Icon
   */
  private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
  private _setStyles(type: FieldStatusType): void {
    let statusType = FieldStatusType.Normal;
    if (type) {
      statusType = type;
    }
    if (type === 0) {
      statusType = FieldStatusType.Active;
    }
    if (!type && type !== 0) {
      statusType = FieldStatusType.Normal;
    }
    /**
     * setting style based on status type; style is input for directive nv-style-color directive
     * these styles are used to create style class name using enum type; the style classes are located in base.scss
     * The filed text is not affected by the user except the disabled state
     */
    const style: FieldStatusStyle = {
      border: statusType,
      background: statusType,
      text: statusType,
    };
    this.fieldStyleType = style;
    /**
     * changing the svg color
     * TODO: the colors are hard coded
     */
    switch (statusType) {
      case FieldStatusType.Accept:
        this.svgIconStatusColor = this.fieldStatusColorDic.accept;
        break;
      case FieldStatusType.Error:
        this.svgIconStatusColor = this.fieldStatusColorDic.error;
        break;
      case FieldStatusType.Help:
        this.svgIconStatusColor = this.fieldStatusColorDic.help;
        break;
      case FieldStatusType.Disabled:
        this.svgIconStatusColor = this.fieldStatusColorDic.disable;
        break;
      default:
        break;
    }
  }
}
