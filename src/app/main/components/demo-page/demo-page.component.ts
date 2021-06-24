import { NvCustomComponent } from './../../../reusable/nv-custom-component/nv-custom-component.component';

import { Component, OnInit } from '@angular/core';

export interface Person {
id: number;
name: string;
imageUrl: string;
notification?: Notification;
}
export interface Notification {
  number?: number | any;
  content?: string;
  hasAttachment?: boolean;
}
export enum NvComponent {
  // First: Add the name of your reusable component to this enum
  Search,
  AdvancedSearch,
  NovaLogo,
  Notification,
  Avatar,
  ProfileMenu,
  Header,
  Dropdown,
  DropToUpload,
  NvCheckBox,
  NvSliderBar,
  NvSliderToggle,
  NvRadioBut,
}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.Search;
  public nvComponentType = NvComponent;
   // Second: Provide input data for your reusable component here if needed
   // Search
   items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
   // footer
   // Avatar
   person: Person = mockProfileMenu();
   //CustomComponent
   nvCheckBox = NvCustomComponent.CheckBox;
   nvSliderBar = NvCustomComponent.SliderBar;
   nvSliderToggle = NvCustomComponent.SlidToggle;
   nvRadioBut = NvCustomComponent.RadioButton;
  constructor() { }

  ngOnInit(): void {
  }
  public onItemClick(selectedItem: NvComponent): void {
    this.selectedItem = selectedItem;
  }
}

function mockProfileMenu(): Person {
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