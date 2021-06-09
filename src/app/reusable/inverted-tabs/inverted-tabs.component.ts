import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-tabs',
  templateUrl: './inverted-tabs.component.html',
  styleUrls: ['./inverted-tabs.component.scss']
})
export class InvertedTabsComponent implements OnInit {

  @Input() tabs:any;

  constructor() { }

  ngOnInit(): void {
  }

}
