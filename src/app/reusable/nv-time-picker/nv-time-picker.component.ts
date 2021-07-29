import { Component, Inject, InjectionToken, Input, OnInit } from '@angular/core';

export interface ITimePickerSetting {
  isTimePicker: boolean,
  hasToggle: boolean,
  /**
   * 12 | 24
   */
  timeFormats: number,
  fieldSize: 'small' | 'medium',
}
export const TimePicker_Setting = new InjectionToken<ITimePickerSetting>('');

@Component({
  selector: 'app-nv-time-picker',
  templateUrl: './nv-time-picker.component.html',
  styleUrls: ['./nv-time-picker.component.scss']
})
export class NvTimePickerComponent implements OnInit, ITimePickerSetting {
  // TODO: slider for picking time 
  @Input() set timeFormat(value: number) {
    if (value) {
      this._timeFormat = value;
      /*
      * the field's width is set automatically
      * medium size is just 12 timeFormat 
      * small size is 24 timeFormat without toggle
     */
      this.fieldSize = (this.timeFormat === 12) ? 'medium' : 'small';
    } else {
      this._timeFormat = populateTimeSettingDefault().timeFormats;
      this.fieldSize  = (this.timeFormat === 12) ? 'medium' : 'small';
    }
  }
  private _timeFormat!: number;
  get timeFormat(): number {
    return this._timeFormat;
  }
  isTimePicker!: boolean;
  hasToggle!: boolean;
  timeFormats!: number;
  fieldSize!: 'small' | 'medium';

  myDatePickerFrom: any;
  myDatePickerTo: any;
  myDatePicker: any;

  // myTimePicker: any;

  constructor() {
  //  @Inject(TimePicker_Setting) private defaultSetting: ITimePickerSetting
  }

  ngOnInit(): void {
  }

  onTimeChange(value: any): void {
    console.log('timeChange' + value);
  }

}

function populateTimeSettingDefault(): ITimePickerSetting {
  const defaultSetting: ITimePickerSetting = {
    isTimePicker: true,
    hasToggle: false,
    timeFormats: 24,
    fieldSize: 'small',
  }
  return defaultSetting;
}
