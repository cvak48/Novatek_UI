import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  styleUrls: ['./left-tab.component.scss']
})
export class LeftTabComponent implements OnInit {
  @Input() tabs:any;

  constructor() { }

  ngOnInit(): void {
  }

}
