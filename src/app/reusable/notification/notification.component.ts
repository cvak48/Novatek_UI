import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
 @Input() set number(value: number) {
  if (value && value >= 0){
    this._number = value;
  } else {
    // TODO: need to ask Payam.
    this._number = 0;
  }
 }
 get number(): number {
   return this._number;
 }
 private _number!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
