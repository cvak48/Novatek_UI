import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-nv-slider-panel',
  templateUrl: './nv-slider-panel.component.html',
  styleUrls: ['./nv-slider-panel.component.scss']
})
export class NvSliderPanelComponent implements OnInit {
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
