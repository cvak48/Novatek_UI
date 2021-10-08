import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nv-slider-panel',
  templateUrl: './nv-slider-panel.component.html',
  styleUrls: ['./nv-slider-panel.component.scss']
})
export class NvSliderPanelComponent implements OnInit {
  @Input() panelNum!: string;
  @Output() panelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() close = new EventEmitter();
  showPanel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void{
    this.panelClick.emit();
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.close.emit();
  } 

  onItemsFilter(data: any): any {
   
  }

}
