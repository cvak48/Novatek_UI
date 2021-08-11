import { ArrowIcon } from './../../model/data-model';
import { Observable, onErrorResumeNext, of, from } from 'rxjs';
import { AdvanceFilterPipe } from '../pipes/filters/advance-filter/advance-filter.pipe';
import { FilterAllPipe } from '../pipes/filters/filterAll/filter-all.pipe';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
/**
  * USAGE:
  * 
  * 
  * 
  */
@Component({
  selector: 'app-advance-dropdown',
  templateUrl: './advance-dropdown.component.html',
  styleUrls: ['./advance-dropdown.component.scss']
})
export class AdvanceDropdownComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  // menu
  filteredItems!: Observable<string[]>;
  // field
  items: string[] = ['Multiple Select'];
  referenceItems: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('itemInput') itemInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  isArrowDown: boolean = true;
  readonly arrowIcons: ArrowIcon = {
    upward: '../../../assets/icons/ico.arrow.up.svg',
    downward: '../../../assets/icons/ico.arrow.down.svg'
  };
  hasFruit = true;
  /**
   *
   */
  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      // The Array.slice() method returns a new array
      map((item: string | null) => item ? this._filter(item) : this.referenceItems.slice()));
  }
  onBlur(): void {
    this.isArrowDown = true;
    if (this.matAutocomplete.isOpen) {
      this.isArrowDown = true;
    }
  }
  onFieldClick(): void {
    if (this.matAutocomplete.isOpen) {
      this.isArrowDown = false;
    } else {
      this.isArrowDown = true;
    }
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {

      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.items.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.itemCtrl.setValue(null);
    }

  }

  remove(fruit: string): void {
    const index = this.items.indexOf(fruit);
    // 

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    if (this.items.length === 0) {
      this.isArrowDown = false;
      this.hasFruit = false;
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    console.log(event.option.viewValue);
    this.filteredItems.subscribe(
      values => {
        const newList = values.filter(item => item !== event.option.viewValue);
        const obsList = of<string[]>(newList);
        console.log(obsList);
        
        this.filteredItems = obsList;
      }
    );
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }
    if (this.items.length > 0) {
      this.hasFruit = true;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredFruits = this.referenceItems.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    return filteredFruits;
  }

  ngOnInit(): void { }

}
