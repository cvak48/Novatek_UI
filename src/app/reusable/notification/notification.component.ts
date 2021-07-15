import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() set number(value: number | string) {
    if (value && value >= 0) {
      if (value >= 100) {
        this._number = 99 + '+';
      } else {
        this._number = value;
      }
    } else {
      // TODO: need to ask Payam.
      this._number = 0;
    }
  }
  get number(): number | string {
    return this._number;
  }
  private _number!: number | string;
  constructor() { }

  ngOnInit(): void {
  }

}
