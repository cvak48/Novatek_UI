import { FormControl } from '@angular/forms';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  title: String;
  list: any;
  searchableRefList: string[];
  queryString!: string;
  queryFormControl = new FormControl('');
  searchableList: string[] = [];
  constructor() {
    console.log('constructor');
    this.title = "Angular advanced search";
    this.list = [
      { name: 'prashobh', age: '25' },
      { name: 'Abraham', age: '35' },
      { name: 'Sam', age: '45' },
      { name: 'Anil', age: '15' },
      { name: 'Mariya', age: '24' },
      { name: 'Crock', age: '28' },
      { name: 'Ram', age: '21' },
    ];
    this.searchableRefList = ['name', 'age'];
  }

  ngOnInit(): void {
    this.queryFormControl.valueChanges.subscribe( selectedValue => {
      let trimmedInput: string = '';
      console.log('ngOnInit value changed');
      this.searchableList = [];
      if(selectedValue && selectedValue.includes(':')) {
      this.searchableList = this.modifySearchableList(selectedValue, this.searchableRefList);
      }
      if( this.searchableList.length === 0 || !this.searchableList ) {
        this.searchableList = this.searchableRefList;
      }
      trimmedInput = trimInputKeyWord(selectedValue, this.searchableList);
       this.queryFormControl.setValue();
    });

  }
  
  onKeyUp(event: any): void {  }
  onKeyDown(event: any): void {  }
  onSearchBlur(event: any): void {  }
  onSearchFocus() {}
  onInput(event: any): void { }

  trimInputKeyWord(input: string, list: string[]): string {
    let newItem: string = '';
    let newInput: string = '';
    // add colon to itemList for comparing
    for(let item of list) {
        newItem = item + ':';
        if(input === newItem) {
        newInput = ' ';
        }
    }
    return newInput;

}

  modifySearchableList(query: string, list: string[]): string[] {
    let keyWordQuery: string = '';

    if (list) {
      // find keyWords like subject
      // check query
      keyWordQuery = query.split(":")[0];
      if (keyWordQuery) {
        // modify searchableList
        for (let item of list) {
          if (keyWordQuery === item) {
            list = [];
            list.push(keyWordQuery);
            console.log('list modified');
          } else {
            // not known keyWordQuery
          }
        }

      } else {
        // no keywordQuery
      }
      return list;

    } else {
      return [];
    }
  }

}
