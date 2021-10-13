import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-third-panel',
  templateUrl: './nv-third-panel.component.html',
  styleUrls: ['./nv-third-panel.component.scss']
})
export class NvThirdPanelComponent implements OnInit {

  name ='';
  placeholder = '';
  nameLabel = 'Name';
  id = '';
  idLabel = 'ID';

  constructor() { }

  ngOnInit(): void {
  }

}
