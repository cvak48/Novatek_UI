import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-placeholder-list',
  templateUrl: './nv-placeholder-list.component.html',
  styleUrls: ['./nv-placeholder-list.component.scss']
})
export class NvPlaceholderListComponent implements OnInit {
@Input() listToShow: any;
  constructor() { }
  
  ngOnInit(): void {
 
  }


}
