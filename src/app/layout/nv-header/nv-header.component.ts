import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/data-model';

@Component({
  selector: 'app-nv-header',
  templateUrl: './nv-header.component.html',
  styleUrls: ['./nv-header.component.scss']
})
export class NvHeaderComponent implements OnInit {
  @Input() person!: Person;
  logoSize = {
    width:'160', height:'40'
  };
     // search
   isAdvance =  mockAdvanceSearchInput().isAdvance;
   hideMenu =  mockAdvanceSearchInput().hideMenu;
   list: any = mockAdvanceSearchInput().list;
   searchableRefList =  mockAdvanceSearchInput().searchableRefList;
  constructor() { }

  ngOnInit(): void {
  }
  onItemsFilter(list: any): void {
    console.log(list);
  }
}


function mockAdvanceSearchInput(): any {
  const searchInput = {
    list: [
      { id: 1, name: 'prashobh', age: '25', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'john@yahoo.com' },
      { id: 2, name: 'Abraham',  age: '35', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'aohn@yahoo.com' },
      { id: 3, name: 'Sam',      age: '45', date: 'Mon Dec 20005 1995 00:00:00 GMT-0500', email: 'bohn@yahoo.com' },
      { id: 4, name: 'Anil',     age: '15', date: 'Mon Dec 200005 1995 00:00:00 GMT-0500', email: 'cohn@yahoo.com' },
      { id: 5, name: 'Mariya',   age: '24', date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500', email: 'dohn@yahoo.com' },
      { id: 6, name: 'Crock',    age: '28', date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500', email: 'eohn@yahoo.com' },
      { id: 7, name: 'Ram',      age: '21', date: 'Mon Dec 29995 1995 00:00:00 GMT-0500', email: 'fohn@yahoo.com' },
    ],
    searchableRefList: ['name', 'age', 'date'],
    isAdvance: true,
    hideMenu: false,
  };
  return searchInput;
}
