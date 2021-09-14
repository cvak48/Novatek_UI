import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-inverted-tabs',
  templateUrl: './nv-inverted-tabs.component.html',
  styleUrls: ['./nv-inverted-tabs.component.scss']
})
export class NVInvertedTabsComponent implements OnInit {

  @Input() tabs:any;

  constructor() { }

  ngOnInit(): void {
  }

}
