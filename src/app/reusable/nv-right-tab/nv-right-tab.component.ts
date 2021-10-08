import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-right-tab',
  templateUrl: './nv-right-tab.component.html',
  styleUrls: ['./nv-right-tab.component.scss']
})
export class NVRightTabComponent implements OnInit {

  @Input() tabs:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
