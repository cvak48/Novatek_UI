import { Component, Input, OnInit } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { DATE_FORMATS } from '../../../assets/setting';



@Component({
  selector: 'app-nv-data-picker',
  templateUrl: './nv-data-picker.component.html',
  styleUrls: ['./nv-data-picker.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide:  MAT_DATE_LOCALE, useValue: 'de-LU'},
  ]
})
export class NvDataPickerComponent implements OnInit {
  @Input() isDateRangePicker = true;

  constructor(private adapter: DateAdapter<any>) { }

  ngOnInit(): void {
  }

  german(): void {
    this.adapter.setLocale('de-LU');
  }
  spanish(): void {
    this.adapter.setLocale('es-AR');
  }
}
