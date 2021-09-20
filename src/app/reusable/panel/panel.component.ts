import { NvStoreService } from './../../services/core-logic/store.service';
import { Message, FieldStatusType } from './../../model/data-model';
import { NvPopupService } from './../../services/shared/nv-pupup.service';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-nova-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  showPanel: boolean = false;
  @ViewChild('origin') origin!: CdkOverlayOrigin;
  // popup message window
  popupStatusType = mockPopupMsg().fieldStatusType;
  popupMsg = mockPopupMsg().message;

  @ViewChild('popupMsgCardRef') popupMsgCardRef!: TemplateRef<HTMLElement>;
  @ViewChild('popupMsgCardRef', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  isCancelClicked: boolean = false;

  constructor(private popupService: NvPopupService, private storeService: NvStoreService) { }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    this.storeService.isPopupWindowCancelClicked$.subscribe(isClicked => {
      this.isCancelClicked = isClicked;
      console.log('hi is closed');
      this.popupService.openRelativePopup(this.origin, this.popupMsgCardRef, this.viewContainerRef, this.isCancelClicked);
    });
   }

  onHeaderClick(): void {
     this.popupService.openRelativePopup(this.origin, this.popupMsgCardRef, this.viewContainerRef, this.isCancelClicked);
  }

}

function mockPopupMsg(): any {
  const message = {
    header: 'was this what you request ?',
    content: 'detail for this prop',
    icon: './../../../assets/icons/circular-cancel.icon.svg',
  } as Message;
  const popupMsgInputs = {
    fieldStatusType: FieldStatusType.Accept,
    message: message,
  };
  return popupMsgInputs;
}
