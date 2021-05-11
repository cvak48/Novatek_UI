import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../demo-page/demo-page.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
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
