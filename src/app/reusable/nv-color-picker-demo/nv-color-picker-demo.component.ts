import { NvUserColor } from './../local-data/view-model';
import { Component, Input, OnInit } from '@angular/core';
import { ViewItem } from '../nv-item-picker-demo/nv-item-picker-demo.component';

@Component({
  selector: 'app-nv-color-picker-demo',
  templateUrl: './nv-color-picker-demo.component.html',
  styleUrls: ['./nv-color-picker-demo.component.scss']
})
export class NvColorPickerDemoComponent implements OnInit {
  @Input() items!: ViewItem<any>[];
  @Input() size!: 'small' | 'medium' | 'large';
  @Input() compactedView!: boolean;
  userColors = NvUserColor;

  constructor() { }

  ngOnInit(): void {
  }

}
