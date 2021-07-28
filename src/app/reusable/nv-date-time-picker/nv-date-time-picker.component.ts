import { Component, Input, OnInit } from '@angular/core';
  /**
  * large size field has both toggle and 12 format
  * medium size is just 12 timeFormat without toggle
  * small size is 24 timeFormat without toggle
 */
export interface TimePickerSetting {
  isTimePicker: boolean,
  hasToggle: boolean,
  timeFormat: '12' | '24',
  fieldSize: 'small' | 'medium' | 'large',
}

@Component({
  selector: 'app-nv-date-time-picker',
  templateUrl: './nv-date-time-picker.component.html',
  styleUrls: ['./nv-date-time-picker.component.scss']
})
export class NvDateTimePickerComponent implements OnInit, TimePickerSetting {
  @Input() set timePickerSetting(value: TimePickerSetting) {
    if(value) {

    } else {
      
    }

  }

  timePickerSettingDefault!: TimePickerSetting;
  isTimePicker!: boolean;
  hasToggle!: boolean;
  timeFormat!: '12' | '24';
  fieldSize!: 'small' | 'medium' | 'large';

  myDatePickerFrom: any;
  myDatePickerTo: any;
  myDatePicker: any;

  // myTimePicker: any;

  constructor() { }


  ngOnInit(): void {
  }

  onTimeChange(value: any): void {
    console.log('timeChange' + value);
    

  }

}

function populateTimeSettingDefault(): TimePickerSetting {
  const defaultSetting = {
    isTimePicker: true,
    hasToggle: false,
    timeFormat: '12',
    fieldSize: 'medium',
  }
}
