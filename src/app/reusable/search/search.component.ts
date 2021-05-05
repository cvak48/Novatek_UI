import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() items: string[] = [];
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
    this.selectedItem = this.items[this.selectedIndex];
    this.selectedItemFormControl.setValue(this.selectedItem);
    this.searchIcon = false;
  }
  onInput(event: any): void {
    const search = event?.target?.value;
    this.items = this.filterList(mockItems(), search);
    this.showMenu = this.items?.length ? true : false;
    // TODO: hide cross-icon by pressing BackSpace.
    this.searchIcon = !search ? true : false;
  }
  onCancelClick(event: any): void {
    this.selectedItemFormControl.setValue('');
    event.preventDefault();
    this.searchIcon = true;
  }
  onKeyDown(event: any): void {
    this.searchIcon = false;
    if (event.key === 'Escape') {
    } else if (event.key === 'Enter') {
      this.onItemSelect(this.selectedIndex);
      event.preventDefault();
    } else if (event.key === 'Tab') {
      this.onItemSelect(0);
    } else if (event.key === 'ArrowDown') {
      this.arrowUpEventCounter++;
      if (this.arrowUpEventCounter === 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex =
          (this.selectedIndex + 1) % this.items.length;
      }
    } else if (event.key === 'ArrowUp') {
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this.items.length;
      }
      this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
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
