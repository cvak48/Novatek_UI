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
  // issue: the OnChanges does not fire when the input property 
  // is an array/object (here props of person) because Angular uses dirty checking to compare the properties; so here we considered a separate input 
  // for imgUrl. 
  // TODO: applying ngDoCheck as  Ref: https://www.tektutorialshub.com/angular/angular-ngdocheck-life-cycle-hook/
  @Input() imgUrl!: string;
  constructor() {
    this._initialize();
  }
  ngOnChanges(): void {
    if (this.imgUrl) {
      this.person.imageUrl = this.imgUrl;
    }
   }

  ngOnInit(): void {
    console.log(this.person.imageUrl );
    
  }
  private _initialize(): void {
    this._person = {
      name: '',
      imageUrl: '',
    };
  }
}
 