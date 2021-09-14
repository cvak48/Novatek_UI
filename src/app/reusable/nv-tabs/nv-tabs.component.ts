import { Component, Input, OnInit } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';

@Component({
  selector: 'app-nv-tabs',
  templateUrl: './nv-tabs.component.html',
  styleUrls: ['./nv-tabs.component.scss']
})
export class NVTabsComponent implements OnInit {

  @Input() tabs:any;

  @Input() headerPositionInput: MatTabHeaderPosition = 'below';

  constructor() { }

  ngOnInit(): void {
    console.log(this.tabs);
  }

}
