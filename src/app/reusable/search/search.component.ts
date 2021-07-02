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
  @Output() filteredItems = new EventEmitter<any[]>();
  @Input() isAdvance = true;
  @Input() hideMenu = false;
  @Input() set list(list: any) {
    if (list && list?.length > 0) {
      this._list = list;
    } else {
      this._list = mockAdvanceSearchInput().list;
    }
  }
  private _list: any;
  @Input() set searchableRefList(list: string[]) {
    if (list && list?.length > 0) {
      this._searchableRefList = list;
    } else {
      this._searchableRefList = mockAdvanceSearchInput().searchableRefList;
    }
  }
  private _searchableRefList: any;
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
  constructor(private filter: FilterAllPipe, private advanceFilter: AdvanceFilterPipe) { }

  ngOnInit(): void {

    let isQueryKeyword: boolean = false;
    let trimmedInput: string
    this.queryFormControl.valueChanges.subscribe(selectedValue => {
       
      if (this.queryFormControl.value === '') {
        if (this.filteredList) {
          this.filteredList.length = 0;
        }
        isQueryKeyword = false;
      }
      if (this.isAdvance) {
        trimmedInput = '  ';

        if (!isQueryKeyword) {
          this.searchableList = [];
          this.inputKeywordLabel = '';
        }
        // modify searchableList; specific search item
        if (selectedValue.includes(':')) {
          this.searchableList = this.modifySearchableList(selectedValue, this._searchableRefList);
          if (this.searchableList.length > 0) {
            isQueryKeyword = true;
          }
        }
        // make searchableList as default; search all area
        if (this.searchableList.length === 0 || !this.searchableList) {
          this.searchableList = this._searchableRefList;
          isQueryKeyword = false;

        }
        // trim keyWord from input; specific area like name:
        if (this.searchableList && selectedValue.includes(':')) {
          trimmedInput = this.trimInputKeyWord(selectedValue, this.searchableList);
        }

        if (trimmedInput === ' ') {
          this.queryFormControl.setValue(trimmedInput);
        }

        this.filteredList = this.advanceFilter?.transform(this._list, this.queryFormControl.value, this.searchableList)?.map((item: any) => item);
      } else {
      // simple filter
      this.filteredList = this.filter?.transform(this._list, this.queryFormControl.value)?.map((item: any) => item);
      }
      if (this.filteredList) {
        this.showMenuToggle = true;
        this.filteredItems.emit(this.filteredList);
        this.filteredItems.asObservable().subscribe(list =>
          console.log('outPut' + JSON.stringify(list))
        );
      } else {
        this.showMenuToggle = false;
        this.filteredItems.emit(this.list);
      }
    });


  }


  onSearchFocus(event: any) {
    this.isFocus = true;
    event.preventDefault();
    event.stopPropagation();
  }
  onSearchBlur(event: any) {
    this.isFocus = false;
    event.preventDefault();
    event.stopPropagation();
  }
  onItemSelect(index: number): void {
    if (this.filteredList) {
      this.selectedIndex = index;
      this.selectedItem = this.filteredList[this.selectedIndex];
      this.queryFormControl.setValue(this.selectedItem?.name);
    }
    this.showMenuToggle = false;
    this.searchIcon = false;
    this.isFocus = true;
  }
  onInput(event: any): void {
    const search = event?.target?.value;
    // TODO:We need change detector tu update html as fast as the variable changes
    if (this.filteredList?.length !== 0) {
      this.showMenuToggle = true;
    } else {
      this.showMenuToggle = false;
    }
    // TODO: hide cross-icon by pressing BackSpace.
    this.searchIcon = !search ? true : false;
  }
  onCancelClick(event: any): void {
    this.queryFormControl.setValue('');
    if (this.filteredList) {
      this.filteredList.length = 0;
    }
    this.showMenuToggle = false;
    this.searchIcon = true;
    event.preventDefault();
  }
  onSettingClick(): void {
  }
  onKeyDown(event: any): void {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
    if (event.key === 'Backspace') {
      if (this.queryFormControl.value === '') {
        if (this.filteredList) {
          this.filteredList.length = 0;
        }
        this.showMenuToggle = false;
      }
    }
  }

  onKeyUp(event: any): void {
    this.searchIcon = false;
    if (event.key === 'Backspace') {
      if (this.queryFormControl.value === '') {
        if (this.filteredList) {
          this.filteredList.length = 0;
        }
        this.showMenuToggle = false;
        this.searchIcon = true;
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
    for (let item of list) {
      newItem = item + ':';
      if (input === newItem) {
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
        for (const item of list) {
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
      { id: 2, name: 'Abraham', age: '35', date: 'Mon Dec 2005 1995 00:00:00 GMT-0500', email: 'aohn@yahoo.com' },
      { id: 3, name: 'Sam', age: '45', date: 'Mon Dec 20005 1995 00:00:00 GMT-0500', email: 'bohn@yahoo.com' },
      { id: 4, name: 'Anil', age: '15', date: 'Mon Dec 200005 1995 00:00:00 GMT-0500', email: 'cohn@yahoo.com' },
      { id: 5, name: 'Mariya', age: '24', date: 'Mon Dec 2000005 1995 00:00:00 GMT-0500', email: 'dohn@yahoo.com' },
      { id: 6, name: 'Crock', age: '28', date: 'Mon Dec 200000005 1995 00:00:00 GMT-0500', email: 'eohn@yahoo.com' },
      { id: 7, name: 'Ram', age: '21', date: 'Mon Dec 29995 1995 00:00:00 GMT-0500', email: 'fohn@yahoo.com' },
    ],
    searchableRefList: ['name', 'age', 'date', 'email']
  }
  return searchInput;
}


