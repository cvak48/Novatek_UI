import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.scss']
})
export class RightTabComponent implements OnInit {

  @Input() tabs:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
