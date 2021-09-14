import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-left-tab',
  templateUrl: './nv-left-tab.component.html',
  styleUrls: ['./nv-left-tab.component.scss']
})
export class NVLeftTabComponent implements OnInit {
  @Input() tabs:any;

  constructor() { }

  ngOnInit(): void {
  }

}
