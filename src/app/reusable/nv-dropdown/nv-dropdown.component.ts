import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

/**
* USAGE:
* Note that the parent component need to provide proper container
* in some case dropdown menu width should be modified
*/

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss']
})
export class NvDropdownComponent implements OnInit {
  @Output() itemChange = new EventEmitter<any>();
  // TODO: By clicking on main page the arrow should change.
  @Input() items: string[] = ['item1'];
  @Input() textTrimNumber: number = 1;
  @Input() selectedItem: string = 'Select dropdown item';
  showMenu!: boolean;
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
    this.itemChange.emit(this.selectedItem);
  }
}
