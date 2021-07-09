import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-data-picker',
  templateUrl: './nv-data-picker.component.html',
  styleUrls: ['./nv-data-picker.component.scss']
})
export class NvDataPickerComponent implements OnInit {
  @Input() isDateRangePicker = true;
  @Input() size: 'single' | 'range' = 'range';

  constructor() { }

  ngOnInit(): void {
  }

}
