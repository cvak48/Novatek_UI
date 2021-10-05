import { Person, Notification, FieldStatusType } from './../../../model/data-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-user-view',
  templateUrl: './nv-user-view.component.html',
  styleUrls: ['./nv-user-view.component.scss']
})
export class NvUserViewComponent implements OnInit {
  // Avatar
  person: Person = mockProfileMenu();
    // field
    fieldStatusType = FieldStatusType.Error;
    fieldLabel = 'Label';
  constructor() { }
  ngOnInit(): void {  }
  onItemSelect(item: any): void {}
}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}
