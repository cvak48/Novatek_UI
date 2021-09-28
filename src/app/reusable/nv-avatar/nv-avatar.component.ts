import { Person } from './../../model/data-model';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-avatar',
  templateUrl: './nv-avatar.component.html',
  styleUrls: ['./nv-avatar.component.scss'],
})
export class NvAvatarComponent implements OnInit, OnChanges {
  private _person!: Person;
  @Input() set person(value: Person) {
    this._person.name = value?.name ? value.name : 'NN';
    this._person.imageUrl = value?.imageUrl ? value.imageUrl : '';
  }
  get person(): Person {
    return this._person;
  }
  constructor() {
    this._initialize();
  }
  ngOnChanges(): void {

    console.log('hi avatar');
   }

  ngOnInit(): void {}
  private _initialize(): void {
    this._person = {
      name: '',
      imageUrl: '',
    };
  }
}
