import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-list',
  templateUrl: './placeholder-list.component.html',
  styleUrls: ['./placeholder-list.component.scss']
})
export class PlaceholderListComponent implements OnInit {

  constructor() { }
  obj: any;

  ngOnInit(): void {
  this.obj  = [
      {
        "element" : "Timesheet"
      },
      {
        "element" : "Timesheet"
      }
  ];

  console.log("Obj", this.obj);
  
   
  }

}
