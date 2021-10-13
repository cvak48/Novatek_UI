import { NvAdvanceFilterPipe } from '../pipes/filters/nv-advance-filter/nv-advance-filter.pipe';
import { NvFilterPipe } from '../pipes/filters/nv-filter/nv-filter.pipe';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * USAGE:
 * Note that the parent component need to provide proper container (set width and height);
 * This component receives a list and provide filteredItems
 * items so the parent is responsible for providing input data (list);
 */

@Component({
  selector: 'app-nv-search-frontend',
  templateUrl: './nv-search-front.component.html',
  styleUrls: ['./nv-search-front.component.scss'],
})
export class NvFrontendSearchComponent implements OnInit {
  @Output() query = new EventEmitter<string>();
  /**
   * In some case we do not need the menu popping up like table.
   */
  @Input() hideMenu = false;
  @Input() set filteredItems(list: string[]) {
    if (list && list?.length > 0) {
      this._filteredItems = list;
    } else {
      this._filteredItems = [];
      this.hideMenu = true;
    }
  }
  get filteredItems(): string[] {
    return this._filteredItems;
  }
  private _filteredItems!: string[];
  queryFormControl = new FormControl('');
  selectedItem!: string;
  selectedIndex!: number;
  arrowUpEventCounter = 0;
  searchIcon = true;
  showMenuToggle = false;
  isFocus = false;

  constructor(  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('returned' + this.filteredItems);
  }

  ngOnInit(): void {
    this.queryFormControl.valueChanges.subscribe(query => {
      if (!!query) {
        this.query.emit(query);
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
    if (this._filteredItems) {
      this.selectedIndex = index;
      this.selectedItem = this._filteredItems[this.selectedIndex];
      this.queryFormControl.setValue(this.selectedItem);
    }
    this.showMenuToggle = false;
    this.searchIcon = false;
    this.isFocus = true;
  }
  onInput(event: any): void {
    const search = event?.target?.value;
    // TODO:We need change detector tu update html as fast as the variable changes
    if (this._filteredItems?.length !== 0) {
      this.showMenuToggle = true;
    } else {
      this.showMenuToggle = false;
    }
    this.searchIcon = !search ? true : false;
  }
  onCancelClick(event: any): void {
    this.queryFormControl.setValue('');
    if (this._filteredItems) {
      this._filteredItems.length = 0;
    }
    this.showMenuToggle = false;
    this.searchIcon = true;
    event.preventDefault();
  }
  onSettingClick(): void {}
  onKeyDown(event: any): void {
    if (this.queryFormControl.value?.length) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
      if (event.key === 'Backspace') {
        if (this.queryFormControl.value === '') {
          if (this._filteredItems) {
            this._filteredItems.length = 0;
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
      if (this.queryFormControl?.value === '') {
        if (this._filteredItems) {
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
          (this.selectedIndex + 1) % this._filteredItems.length;
      }
    } else if (event.key === 'ArrowUp') {
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this._filteredItems.length;
      }
      this.selectedIndex = (this.selectedIndex - 1) % this._filteredItems.length;
    }
  }

}

