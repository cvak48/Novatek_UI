import { Person, Notification } from './../../model/data-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-user-profile',
  templateUrl: './nv-user-profile.component.html',
  styleUrls: ['./nv-user-profile.component.scss']
})
export class NvUserProfileComponent implements OnInit {
  // Avatar
  @Input() person!: Person;
  constructor() { }

  ngOnInit(): void {
    this._initializeComp();
  }
  onIconClick(): void {
    
  }
private _initializeComp(): void {
this.person = mockProfileMenu();
}
}


function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}
