import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() items!: string[];
  selectedItem!: string;
  selectedIndex!: number;
  arrowUpEventCounter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onItemSelect(index: number): void {
    this.selectedIndex = index;
    this.selectedItem = this.items[this.selectedIndex];
  }
  onKeyDown(event: any): void {
    console.log(event.key);
    // event.preventDefault();
    if (event.key === 'Escape') {
      // this.onHideListStateToggle(true);
    } else if (event.key === 'Enter') {
      this.onItemSelect(this.selectedIndex);
      // this.onHideListStateToggle(true);
    } else if (event.key === 'ArrowDown') {
      // this.onHideListStateToggle(false);
      this.arrowUpEventCounter++;
      if (this.arrowUpEventCounter === 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex =
          (this.selectedIndex + 1) % this.items.length;
      }
    } else if (event.key === 'ArrowUp') {
      // this.onHideListStateToggle(false);
      if (this.selectedIndex <= 0) {
        this.selectedIndex = this.items.length;
      }
      this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
    }

  }
}
