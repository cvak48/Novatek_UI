import { ElementRef } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-nv-slider-common-panel',
  templateUrl: './nv-slider-common-panel.component.html',
  styleUrls: ['./nv-slider-common-panel.component.scss']
})
export class NvSliderCommonPanelComponent implements OnInit {
  @Input() panelTableHeight: any;
  @Input() panelNum!: string;
  @Input() panelTitle!: string;
  @Input() panelSaveBtn!: string;
  @Output() panelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() close = new EventEmitter();
  showPanel: boolean = false;
  btnDisable: boolean = false;
  

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.userBtnAction.subscribe((res) => {
      this.btnDisable = false;
    });
  
  }

  saveButtonClick(): void{
    this.panelSaveBtn ? this.applicationService.setBtnClickedData(this.panelSaveBtn) : null;
    this.applicationService.btnDisabled
        .subscribe(res => {
          console.log('btn', res)
          this.btnDisable = res;
        })
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
