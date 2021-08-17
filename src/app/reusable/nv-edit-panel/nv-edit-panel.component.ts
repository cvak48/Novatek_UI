import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-edit-panel',
  templateUrl: './nv-edit-panel.component.html',
  styleUrls: ['./nv-edit-panel.component.scss']
})
export class NvEditPanelComponent implements OnInit {
  showPanel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
