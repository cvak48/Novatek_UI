import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() title: string = '';
  showPanel: boolean = false;
  panelTitle: string = '';
  constructor() { }

  ngOnInit(): void {
    this.panelTitle = this.title ? this.title : 'Panel Table'
  }

}
