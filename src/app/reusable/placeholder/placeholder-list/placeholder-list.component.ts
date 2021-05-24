import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-list',
  templateUrl: './placeholder-list.component.html',
  styleUrls: ['./placeholder-list.component.scss']
})
export class PlaceholderListComponent implements OnInit {
@Input() listToShow: any;
  constructor() { }
  
  ngOnInit(): void {
 
  }


}
