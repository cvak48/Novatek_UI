import { Message } from './../../model/data-model';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FIELD_STATUS_COLOR_DIC, SVG_ICON_IDS_DIC } from 'src/assets/constants';

@Component({
  selector: 'app-nv-popup-message',
  templateUrl: './nv-popup-message.component.html',
  styleUrls: ['./nv-popup-message.component.scss']
})
export class NvPopupMessageComponent implements OnInit {
  @Input() message!: Message;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };

  constructor() {
    this._initializeSvgIconStyles();
    this._initializeMessage();
  }

  ngOnInit(): void {  }

 private _initializeMessage(): void {
      this.message = {
        header: 'was this what you request?',
        content: 'detail for this prop',
        icon: './../../../assets/icons/circular-cancel.icon.svg'
      };
    }

  /**
   * Importing svg icon id and status colors to change the color of svg Icon
   */
   private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
}
