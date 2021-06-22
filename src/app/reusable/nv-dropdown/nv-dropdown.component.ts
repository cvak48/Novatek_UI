import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss']
})
export class NvDropdownComponent implements OnInit {
  @Input() items: string[] = ['item1', 'item2 which is longer', 'item3 item2 which is longer and longer', 'item4', 'item5', 'item6', 'item7'];
  showMenu!: boolean;
  selectedItem: string = 'Select item';
  selectedIndex!: number;
  isFirst: boolean = true;
  isArrowDown: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onInputClick(): void {

  }

  onItemSelect(index: number): void {
    this.isFirst = false;
    this.selectedIndex = index;
    this.selectedItem = this.items[this.selectedIndex];
  }
}
