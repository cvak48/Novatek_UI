import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../demo-page/demo-page.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() set person(value: Person) {
    this.person.id = value?.id;
    this.person.name = value?.name;
    this.person.imageUrl = value?.imageUrl;
    this.person.notification = value?.notification;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
