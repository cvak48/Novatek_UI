import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nv-table-panel',
  templateUrl: './nv-table-panel.component.html',
  styleUrls: ['./nv-table-panel.component.scss']
})
export class NvTablePanelComponent implements OnInit {
  @Input() panelNum!: string;
  @Output() panelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() close = new EventEmitter();
  
  dropdownDefault = '5';
  showPanel: boolean = false;
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [5, 10, 20, 50, 100];
  pageNewSizes = ['5', '10', '20', '50', '100'];
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 7;
  public labels: any = {
    previousLabel: '❮',
    nextLabel: '❯',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

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

}
