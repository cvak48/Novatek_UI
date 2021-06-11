import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  title:String;
  list:any;
  searchableList: any;
  queryString!: string;
  constructor() {
    
    this.title = "Angular advanced search";
    this.list = [
   {name:'prashobh',age:'25'},
   {name:'Abraham' ,age:'35'},
   {name:'Sam'     ,age:'45'},
   {name:'Anil'    ,age:'15'},
   {name:'Mariya'  ,age:'24'},
   {name:'Crock'   ,age:'28'},
   {name:'Ram'     ,age:'21'},
   ];
   this.searchableList = ['name','age'];  
   }

  ngOnInit(): void {
  }

}
