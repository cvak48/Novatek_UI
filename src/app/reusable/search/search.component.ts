import { AdvanceFilterPipe } from './../pipes/filters/advance-filter/advance-filter.pipe';
import { FilterAllPipe } from './../pipes/filters/filterAll/filter-all.pipe';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<any[]>();
  @Input() isAdvance: boolean = true;
  @Input() showMenu: boolean = true;
  @Input() readonly list: any = mockAdvanceSearchInput().list;
  @Input() searchableRefList: string[] = mockAdvanceSearchInput().searchableRefList;
  queryFormControl = new FormControl('');
  searchableList: string[] = [];
  inputKeywordLabel: string = '';
  filteredList: any;

  selectedItem!: any;
  selectedIndex!: number;
  arrowUpEventCounter = 0;
  searchIcon = true;
  showMenuToggle = false;
  isFocus = false;
  // TODO: Need to bring click event from parents to make isFocus false and delete blur event
  constructor(private filter: FilterAllPipe, private advanceFilter: AdvanceFilterPipe) {   }


  ngOnInit(): void {
    if(this.isAdvance) {
    this.searchableList = [];
    let isQueryKeyword: boolean = false;
    this.queryFormControl.valueChanges.subscribe( selectedValue => {
      let trimmedInput: string = '  ';
      if(this.queryFormControl.value === '') {
        isQueryKeyword = false;
      }
      if(!isQueryKeyword) {
        this.searchableList = [];
        this.inputKeywordLabel = '';
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
      // choose filter
     this.filteredList = this.chooseFilter(this.isAdvance, this.list, this.searchableList, this.queryFormControl.value );
     if(this.filteredList) {
     this.search.emit(this.filteredList);
      this.search.asObservable().subscribe(list =>
        console.log('outPut' + JSON.stringify(list))
      );
     } else {
       this.search.emit(this.list);
     }
    });
  }
  }
  
  chooseFilter(isAdvance: boolean, list: any, searchableList: any, inputQuery: string ): any {
    // TODO: the list become zero ! 
    list = mockAdvanceSearchInput().list;
    let filteredList: any;
    if(isAdvance) {
      filteredList = this.advanceFilter.transform(list, inputQuery, searchableList);
     return filteredList;
    } else {
      filteredList =  this.filter.transform(list, inputQuery);
      return filteredList;
    }
  }
  onSearchFocus() {
    this.isFocus = true;
    }
  onSearchBlur(event: any) {
    this.isFocus = false;
    event.preventDefault();
    event.stopPropagation();
  }
  onItemSelect(index: number): void {
    this.selectedIndex = index;
    this.selectedItem = this.filteredList[this.selectedIndex];
    this.queryFormControl.setValue(this.selectedItem.name);
    this.searchIcon = false;
    this.isFocus = true;
  }
  onInput(event: any): void {
    const search = event?.target?.value;
    // this.filteredItems = this.filterList(mockItems(), search);
    // TODO:We need change detector tu update html as fast as the variable changes
    this.showMenuToggle = this.filteredList?.length ? true : false;
    // TODO: hide cross-icon by pressing BackSpace.
    this.searchIcon = !search ? true : false;
  }
  onCancelClick(event: any): void {
    this.queryFormControl.setValue('');
    this.filteredList.length = 0;
    this.showMenuToggle = false;
    this.searchIcon = true;
    event.preventDefault();
  }
  onKeyDown(event: any): void {
   // this.showMenuToggle = this.filteredList?.length ? true : false;
    console.log(this.showMenuToggle );
        if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  onKeyUp(event: any): void {
    this.searchIcon = false;
    if (event.key === 'Backspace') {
      if(this.queryFormControl.value === ''){
         this.filteredList.length = 0;
        this.showMenuToggle = false;
        this.searchIcon =true;
         }
    } else if (event.key === 'Escape') {
      this.queryFormControl.setValue('');
      this.searchIcon = true;
    } else if (event.key === 'Enter') {
       this.onItemSelect(this.selectedIndex);
    } else if (event.key === 'Tab') {
      this.onItemSelect(0);
    } else if (event.key === 'ArrowDown') {
      this.arrowUpEventCounter++;
      if (this.arrowUpEventCounter === 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex =
          (this.selectedIndex + 1) % this.filteredList.length;
      }
    } else if (event.key === 'ArrowUp') {
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this.filteredList.length;
      }
      this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;
    }
  }
 
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
      { id: 1, name: 'prashobh', age: '25', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'john@yahoo.com' },
      { id: 2, name: 'Abraham', age:  '35', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'aohn@yahoo.com' }, 
      { id: 3, name: 'Sam', age:      '45', date: 'Mon Dec 20005 1995 00:00:00 GMT-0500', email: 'bohn@yahoo.com' },
      { id: 4, name: 'Anil', age:     '15', date: 'Mon Dec 200005 1995 00:00:00 GMT-0500', email: 'cohn@yahoo.com' },
      { id: 5, name: 'Mariya', age:   '24', date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500', email: 'dohn@yahoo.com' },
      { id: 6, name: 'Crock', age:    '28', date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500',  email: 'eohn@yahoo.com' },
      { id: 7, name: 'Ram', age:      '21', date: 'Mon Dec 29995 1995 00:00:00 GMT-0500', email: 'fohn@yahoo.com' },
    ],
    searchableRefList : ['name', 'age', 'date', 'email']
  }
  return searchInput;
}


