import { NvUserColor } from './../local-data/view-model';
import { Component, Input, OnInit } from '@angular/core';
import { ViewItem } from '../nv-item-picker-demo/nv-item-picker-demo.component';

@Component({
  selector: 'app-nv-icon-picker-demo',
  templateUrl: './nv-icon-picker-demo.component.html',
  styleUrls: ['./nv-icon-picker-demo.component.scss']
})
export class NvIconPickerDemoComponent implements OnInit {

  @Input() items!: ViewItem<any>[];
  @Input() size!: 'small' | 'medium' | 'large';
  @Input() showTitle!: boolean;
  @Input() compactedView!: boolean;
  userColors = NvUserColor;

  constructor() { }

  ngOnInit(): void {
  }

}
