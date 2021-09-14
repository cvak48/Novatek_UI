import { Component, Input, OnInit } from '@angular/core';
/**
 * Inspired by: https://www.freakyjolly.com/angular-material-109-datepicker-timepicker-tutorial/
 * & https://openbase.com/js/ngx-material-timepicker/documentation
 */

@Component({
  selector: 'app-nv-time-picker',
  templateUrl: './nv-time-picker.component.html',
  styleUrls: ['./nv-time-picker.component.scss'],
})
export class NvTimePickerComponent implements OnInit {
  // TODO: slider for picking time
  @Input() set timeFormat(value: number) {
    if (value) {
      /**
       * timePicker
       * 12 or 24
       */
      this._timeFormat = value;
      /**
       * the field's width is set automatically
       * medium size is just 12 timeFormat
       * small size is 24 timeFormat without toggle
       */
      this.fieldSize = this.timeFormat === 12 ? 'medium' : 'small';
    } else {
      this._timeFormat = 24;
      this.fieldSize = 'small';
    }
  }
  private _timeFormat!: number;
  get timeFormat(): number {
    return this._timeFormat;
  }
  timeFormats!: number;
  fieldSize!: 'small' | 'medium';

  constructor() {}

  ngOnInit(): void {}

  onTimeChange(value: any): void {}
}
