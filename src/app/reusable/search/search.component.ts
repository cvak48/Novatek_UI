import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() items: string[] = [];
  filteredItems: string[] = [];
  selectedItem!: string;
  selectedIndex!: number;
  arrowUpEventCounter = 0;
  searchIcon = true;
  showMenu = false;
  filteredList!: string[];
  selectedItemFormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  onItemSelect(index: number): void {
    this.selectedIndex = index;
    this.selectedItem = this.filteredItems[this.selectedIndex];
    this.selectedItemFormControl.setValue(this.selectedItem);
    this.searchIcon = false;
  }
  onInput(event: any): void {
    const search = event?.target?.value;
    this.filteredItems = this.filterList(mockItems(), search);
    this.showMenu = this.filteredItems?.length ? true : false;
    // TODO: hide cross-icon by pressing BackSpace.
    this.searchIcon = !search ? true : false;
  }
  onCancelClick(event: any): void {
    this.selectedItemFormControl.setValue('');
    this.filteredItems.length = 0;
    this.showMenu = false;
    this.searchIcon = true;
    event.preventDefault();
  }
  onKeyUp(event: any): void {
    this.searchIcon = false;
    if (event.key === 'Escape') {
    } else if (event.key === 'Enter') {
       this.onItemSelect(this.selectedIndex);
      event.target.value = event.target.value.replace(/\n/g,'');
    } else if (event.key === 'Tab') {
      this.onItemSelect(0);
    } else if (event.key === 'ArrowDown') {
      this.arrowUpEventCounter++;
      if (this.arrowUpEventCounter === 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex =
          (this.selectedIndex + 1) % this.filteredItems.length;
      }
    } else if (event.key === 'ArrowUp') {
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this.filteredItems.length;
      }
      this.selectedIndex = (this.selectedIndex - 1) % this.filteredItems.length;
    }

  }

  filterList(items: string[], value: string): string[] {
    const referenceList = items;
    if (value) {
      const term = value.toLowerCase();
      return referenceList.filter(item => item.toLowerCase().startsWith(term));
    } else {
      return [];
    }
  }
}

function mockItems(): string[] {
  const items = ['Tablet', 'Desktop', 'Mouse', 'Alex', 'Sarah', 'Slack'];
  return items;
}
