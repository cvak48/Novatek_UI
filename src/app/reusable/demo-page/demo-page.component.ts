import { Component, OnInit } from '@angular/core';

export interface Person {
id: number;
name: string;
imageUrl: string;
notification: Notification;
}
export interface Notification {
  number: number;
  content: string;
  hasAttachment: boolean;
}
export enum NvComponent {
  // First: Add the name of your reusable component to this enum
  Search,
  NovaLogo,
  Avatar,
  Header,
  Footer

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.Avatar;
  public nvComponentType = NvComponent;
   // Second: Provide input data for your reusable component here if needed
   // Search
   items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
   // footer
   // Avatar
   person: Person = mockAvatar();
  constructor() { }

  ngOnInit(): void {
  }
  public onItemClick(selectedItem: NvComponent): void {
    this.selectedItem = selectedItem;
  }
}

function mockAvatar(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 20,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}