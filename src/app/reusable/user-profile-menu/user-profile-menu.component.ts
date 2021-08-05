import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/data-model';

@Component({
  selector: 'app-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss']
})
export class UserProfileMenuComponent implements OnInit {
  @Input() set person(value: Person) {
    if (value) {
      this._person = value;
    }
  }
  get person(): Person {
    return this._person;
  }
  private _person!: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
