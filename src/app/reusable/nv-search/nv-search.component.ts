import { NvAdvanceFilterPipe } from '../pipes/filters/nv-advance-filter/nv-advance-filter.pipe';
import { NvFilterPipe } from '../pipes/filters/nv-filter/nv-filter.pipe';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
 /**
  * USAGE:
  * Note that the parent component need to provide proper container (set width and height);
  * This component receives a list and provide filteredItems
  * items so the parent is responsible for providing input data (list);
  */

@Component({
  selector: 'app-search',
  templateUrl: './nv-search.component.html',
  styleUrls: ['./nv-search.component.scss']
})
export class NvSearchComponent implements OnInit {
  @Output() filteredItems = new EventEmitter<any[]>();
  @Input() isAdvance = true;
  /**
   * In some case we do not need the menu popping up like table.
   */
  @Input() hideMenu = false;
  @Input() set list(list: any) {
    if (list && list?.length > 0) {
      this._list = list;
    } else {
      this._list = mockAdvanceSearchInput().list;
    }
  }
  /**
   * An Array of strings for filtering purpose; they can be all or part of the keys of input object
   */
  @Input() set searchableRefList(list: string[]) {
    if (list && list?.length > 0) {
      this._searchableRefList = list;
    } else {
      this._searchableRefList = mockAdvanceSearchInput().searchableRefList;
    }
  }
  private _list: any;
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
  /**
   * there are two filter applied with pipe; the advance is going to use the key as filter parameter (searchableList)
   */
  constructor(private filter: NvFilterPipe, private advanceFilter: NvAdvanceFilterPipe) { }

  ngOnInit(): void {
    let isQueryKeyword: boolean = false;
    let trimmedInput: string;
    /**
     * The logic is implemented as the user start typing his query
     */
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
        // modify searchableList; specific filter key
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
  /**
   * selecting item from pop up menu containing the filtered items
   */
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
    if (this.queryFormControl.value.length) {
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

  }
  /**
   * Managing different keywords inputted by user
   */
  onKeyUp(event: any): void {
    this.searchIcon = false;
    if (event.key === 'Backspace') {
      if (this.queryFormControl.value === '') {
        if (this.filteredList) {
          //  this.filteredList.length = 0;
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
  /**
   * preparing input query to be able to compare with searchableList's keys
   * in order to find out if he used filter (from searchable list) for search
   */
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
  /**
   * find specific keyword user inputted first as filter (searchableRefList items)
   */
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
/**
 * if the user does not provide input data; for test purposes only
 */
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


