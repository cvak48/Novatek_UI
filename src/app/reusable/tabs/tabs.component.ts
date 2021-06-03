import { Component, Input, OnInit } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabs:any;

  @Input() headerPositionInput: MatTabHeaderPosition = 'below';

  constructor() { }

  ngOnInit(): void {
  }

}
