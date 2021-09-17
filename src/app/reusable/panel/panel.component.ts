import { NvPopupService } from './../../services/shared/nv-pupup.service';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nova-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  showPanel: boolean = false;
  @ViewChild('origin')  origin!: CdkOverlayOrigin;
  constructor(private popupService: NvPopupService) { }

  ngOnInit(): void {
  }

  onHeaderClick(): void {
    // click to open popup message card
    this.popupService.openRelativePopup(this.origin);
  }

}
