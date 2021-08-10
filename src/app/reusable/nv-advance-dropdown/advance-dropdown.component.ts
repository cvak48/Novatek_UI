import { Observable } from 'rxjs';
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
  fruitCtrl = new FormControl();
  filteredFruits!: Observable<string[]>;
  fruits: string[] = ['Select'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;


  /**
   *
   */
  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      // The Array.slice() method returns a new array
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredFruits = this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    return filteredFruits;
  }

  ngOnInit(): void {  }

}
