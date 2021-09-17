import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nova-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() title: string = '';
  @Output() close = new EventEmitter();
  showPanel: boolean = false;
  panelTitle: string = '';
  constructor() { }

  ngOnInit(): void {
    this.panelTitle = this.title ? this.title : 'Panel Table'
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.close.emit();
  } 
}
