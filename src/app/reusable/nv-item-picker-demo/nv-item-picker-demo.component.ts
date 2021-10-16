import { NvUserColor } from './../local-data/view-model';
import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

export interface ViewItem<T> {
  id: number;
  title: string;
  detail: string;
  imageUrl: string;
  color: NvUserColor;
  data: T;
}

@Component({
  selector: 'app-nv-item-picker-demo',
  templateUrl: './nv-item-picker-demo.component.html',
  styleUrls: ['./nv-item-picker-demo.component.scss']
})
export class NvItemPickerDemoComponent implements OnInit,  OnChanges {

  @Input() items!: ViewItem<any>[];
  @Input() menuItemTemplate!: TemplateRef<any>;
  @Input() selectedItemTemplate!: TemplateRef<any>;
  @Input() showTitle!: boolean;
  @Input() showImage!: boolean;
  @Input() compactedView!: boolean;
  @Input() size!: 'small' | 'medium' | 'large';

  selectedItem!: ViewItem<any>;
  selectedIndex!: number;
  hiddenDropDown = true;
  userColors = NvUserColor;
  arrowUpEventCounter = 0;
  constructor() {
    console.log('constructor');
   }
  ngOnInit(): void {
    console.log('onInitChanges');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges: ' + this.items);
  }

  onSelectBoxClick(): void {
    this.hiddenDropDown = false;
  }
  onItemSelect(index: number): void {
    this.selectedIndex = index;
    this.selectedItem = this.items[this.selectedIndex];
    this.hiddenDropDown = true;
  }
  onHideListStateToggle(state: boolean): void {
    this.hiddenDropDown = state;
  }

  onKeyDown(event: any): void {
    console.log(event.key);
    event.preventDefault();
    if (!this.hiddenDropDown) {
      if (event.key === 'Escape') {
        this.onHideListStateToggle(true);
      } else if (event.key === 'Enter') {
        this.onItemSelect(this.selectedIndex);
        this.onHideListStateToggle(true);
      } else if (event.key === 'ArrowDown') {
        this.onHideListStateToggle(false);
        this.arrowUpEventCounter++;
        if (this.arrowUpEventCounter === 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex =
            (this.selectedIndex + 1) % this.items.length;
        }
      } else if (event.key === 'ArrowUp') {
        this.onHideListStateToggle(false);
        if (this.selectedIndex <= 0) {
          this.selectedIndex = this.items.length;
        }
        this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
      }
    }
  }


}
