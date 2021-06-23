import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  @Input() isAdvance: boolean = false;
  @Input() list: any = mockAdvanceSearchInput().list;
  @Input() searchableRefList: string[] = mockAdvanceSearchInput().searchableRefList;

  queryFormControl = new FormControl('');
  searchableList: string[] = [];
  inputKeywordLabel: string = 'All field';
  constructor() { }

  ngOnInit(): void {
    if(this.isAdvance) {
    this.searchableList = [];
    let isQueryKeyword: boolean = false;
    this.queryFormControl.valueChanges.subscribe( selectedValue => {
      let trimmedInput: string = '  ';
      console.log('ngOnInit value changed');
      if(this.queryFormControl.value === '') {
        isQueryKeyword = false;
      }
      if(!isQueryKeyword) {
        this.searchableList = [];
        this.inputKeywordLabel = 'All field';
      }
      // modify searchableList; specific search item
      if( selectedValue.includes(':')) {
      this.searchableList = this.modifySearchableList(selectedValue, this.searchableRefList);
      if (this.searchableList && this.searchableList.length > 0) {
        isQueryKeyword = true;
      }
      }
      // make searchableList as default; search all area
      if( this.searchableList.length === 0 || !this.searchableList ) {
        this.searchableList = this.searchableRefList;
        isQueryKeyword = false;

      }
      // trim keyWord from input; specific area
      if( this.searchableList && selectedValue.includes(':')) {
        trimmedInput = this.trimInputKeyWord(selectedValue, this.searchableList);
      }

      if(trimmedInput === ' ') {
       this.queryFormControl.setValue(trimmedInput);
      }
    });
  }
  }
  
  onKeyUp(event: any): void { }
  onKeyDown(event: any): void { }
  onSearchBlur(event: any): void { }
  onSearchFocus(): void {}
  onInput(event: any): void { }

  trimInputKeyWord(input: string, list: string[]): string {
    let newItem: string = '';
    let newInput: string = '';
    // add colon to itemList for comparing
    for(let item of list) {
        newItem = item + ':';
        if(input === newItem) {
        newInput = ' ';
        } else {
          // not found
          newInput = input;
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
            this.inputKeywordLabel = query.split(':')[0] + ':';
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

function mockAdvanceSearchInput(): any {
  const searchInput = {
    list: [
      { name: 'prashobh', age: '25' },
      { name: 'Abraham', age: '35' },
      { name: 'Sam', age: '45' },
      { name: 'Anil', age: '15' },
      { name: 'Mariya', age: '24' },
      { name: 'Crock', age: '28' },
      { name: 'Ram', age: '21' },
    ],
    searchableRefList : ['name', 'age']
  }
  return searchInput;
}
