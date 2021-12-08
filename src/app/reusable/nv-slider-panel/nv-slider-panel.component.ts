import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { SharedService } from 'src/app/services/shared.service';
import { NvDialogComponent } from '../nv-dialog/nv-dialog.component';
import { NvSaveThirdPanelComponent } from '../nv-save-third-panel/nv-save-third-panel.component';

@Component({
  selector: 'app-nv-slider-panel',
  templateUrl: './nv-slider-panel.component.html',
  styleUrls: ['./nv-slider-panel.component.scss']
})
export class NvSliderPanelComponent implements OnInit {
  @Input() panelNum!: string;
  @Input() panelTitle!: string;
  @Input() panelSaveBtn!: string;
  @Input() panelTableHeight!: any;
  @Output() panelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() close = new EventEmitter();
  showPanel: boolean = false;
  btnDisable: boolean = false;
  constructor(private applicationService: ApplicationService, private sharedService: SharedService) { }
  
  

  ngOnInit(): void {
    this.applicationService.userBtnAction.subscribe((res) => {
      this.btnDisable = false;
    });
  }

  saveButtonClick(): void{
    const dialogRef = this.sharedService.getGenericDialogRef(NvSaveThirdPanelComponent, null, false, 'saveTeamsPanel');
   /*  this.panelSaveBtn ? this.applicationService.setBtnClickedData(this.panelSaveBtn) : null;
    this.applicationService.btnDisabled
        .subscribe(res => {
          console.log('btn', res)
          this.btnDisable = res;
        }) */
  }

  buttonClick(): void {
    this.panelClick.emit();
  }

  closePanel() {
    const data = {
      title: 'You will use your changes',
      message: 'You are closing the window without saving. You will loose your changes. Click Ok to discard your changes or Cancel to return the session'
    }
    const dialogRef = this.sharedService.getGenericDialogRef(NvDialogComponent, data);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.showPanel = !this.showPanel;
        this.close.emit();
      }
    });

  }

  onItemsFilter(data: any): any {

  }

}
