import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-date-time-picker',
  templateUrl: './nv-date-time-picker.component.html',
  styleUrls: ['./nv-date-time-picker.component.scss']
})
export class NvDateTimePickerComponent implements OnInit {
  myDatePickerFrom: any;
  myDatePickerTo: any;
  myDatePicker: any;

  myTimePicker: any;

  constructor() { }

  ngOnInit(): void {
  }

}
