import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-notification-icon',
  templateUrl: './nv-notification-icon.component.html',
  styleUrls: ['./nv-notification-icon.component.scss'],
})
export class NvNotificationIconComponent implements OnInit {
  @Input() set number(value: number | string) {
    if (value && value >= 0) {
      if (value >= 100) {
        this._number = 99 + '+';
      } else {
        this._number = value;
      }
    } else {
      this._number = 0;
    }
  }
  get number(): number | string {
    return this._number;
  }
  private _number!: number | string;
  constructor() {}

  ngOnInit(): void {}
}
