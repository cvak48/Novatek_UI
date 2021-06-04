import { NvUserColor } from './../../../reusable/local-data/view-model';
import { Component, OnInit } from '@angular/core';
import { ViewItem } from 'src/app/reusable/nv-item-picker-demo/nv-item-picker-demo.component';

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
  NovaLogo,
  Notification,
  Avatar,
  ProfileMenu,
  Header,
  Dropdown,
  DragDrop,
  Panel,
  DropToUpload,
  Card,
  ItemPickerDemo,
  IconPickerDemo,
  ColorPickerDemo

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.IconPickerDemo;
  public nvComponentType = NvComponent;
   // Second: Provide input data for your reusable component here if needed
   // Search
   items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
   // footer
   // Avatar
   person: Person = mockProfileMenu();
  // ItemPicker
  items01: ViewItem<string>[] = mockNvItemPicker().items01;
  size: string = mockNvItemPicker().size;
  showImage: boolean = mockNvItemPicker().showImage;
  showTitle: boolean = mockNvItemPicker().showTitle;
  compactedView: boolean = mockNvItemPicker().compactedView;
  // IconPicker
  iconItems: ViewItem<string>[] = mockNvIconPicker().items01;
  iconShowImage: boolean = mockNvIconPicker().showImage;
  iconShowTitle: boolean = mockNvIconPicker().showTitle;
  iconCompactedView: boolean = mockNvIconPicker().compactedView;
  iconSize: string = mockNvIconPicker().size;
  // ColorPicker
  colorItems: ViewItem<string>[] = mockNvColorPicker().items01;
  colorSize: string = mockNvColorPicker().size;
  colorShowImage: boolean = mockNvColorPicker().showImage;
  colorShowTitle: boolean = mockNvColorPicker().showTitle;
  colorCompactedView: boolean = mockNvColorPicker().compactedView;

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

function mockNvItemPicker(): any {
  const evPickerProps = {
    items01: [
      { id: 1, title: 'In Progress', color: NvUserColor.StateColor01, detail: '', imageUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png', data: '' },
      { id: 2, title: 'To Do', color: NvUserColor.StateColor02, detail: '', imageUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png', data: '' },
      { id: 3, title: 'Done', color: NvUserColor.StateColor03, detail: '', imageUrl: '', data: ' ' }] as ViewItem<string>[],
      size: 'medium',
      showImage: false,
      showTitle: true,
      compactedView: false,
  };
  return evPickerProps;
}

function mockNvIconPicker(): any {
  const srcTask: string = '../../../assets/icons/ico.task.svg';
  const srcRep: string = '../../../assets/icons/ico.report.svg';
  const evPickerProps = {
    items01: [
      { id: 1, title: 'Report', color: NvUserColor.StateColor01, detail: '', imageUrl: srcRep, data: '' },
      { id: 2, title: 'Task', color: NvUserColor.StateColor01, detail: '', imageUrl: srcTask, data: '' }],
      size: 'large',
      showImage: true,
      showTitle: false,
      compactedView: true,
  };
  return evPickerProps;
}

function mockNvColorPicker(): any {
  const evPickerProps = {
    items01: [
      { id: 1, title: '', color: NvUserColor.PriorityColor01, detail: '', imageUrl: '', data: '' },
      { id: 2, title: '', color: NvUserColor.PriorityColor02, detail: '', imageUrl: '', data: '' },
      { id: 3, title: '', color: NvUserColor.PriorityColor03, detail: '', imageUrl: '', data: '' },
      { id: 4, title: '', color: NvUserColor.PriorityColor04, detail: '', imageUrl: '', data: ' ' }],
    size: 'large',
    showImage: true,
    showTitle: false,
    compactedView: true,
  };
  return evPickerProps;
}


