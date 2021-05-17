import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  showPanel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
