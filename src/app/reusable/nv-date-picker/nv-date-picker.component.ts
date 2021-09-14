
import { Component, Input, OnInit } from '@angular/core';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { DATE_FORMATS } from '../../../assets/setting';
/**
 * This component created based on angular material;
 * https://v7.material.angular.io/components/datepicker/api
 */

@Component({
  selector: 'app-nv-date-picker',
  templateUrl: './nv-date-picker.component.html',
  styleUrls: ['./nv-date-picker.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide:  MAT_DATE_LOCALE, useValue: 'de-LU'},
  ]
})
export class NvDatePickerComponent implements OnInit {
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