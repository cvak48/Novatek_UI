import { NvUserColor } from './../local-data/view-model';
import { CardType, CardFields, Person } from './../local-data/data-models';
import { Component, Inject } from '@angular/core';
import { ViewItem } from '../nv-item-picker-demo/nv-item-picker-demo.component';

@Component({
  selector: 'app-nv-card',
  templateUrl: './nv-card.component.html',
  styleUrls: ['./nv-card.component.scss']
})
export class NvCardComponent {

  id!: number;
  title!: string;
  type?: CardType;
  fields?: CardFields;
  person: Person = mockProfileMenu();

    // ItemPicker
    items01: ViewItem<string>[] = mockNvItemPicker().items01;
    size: string = mockNvItemPicker().size;
    showImage: boolean = mockNvItemPicker().showImage;
    showTitle: boolean = mockNvItemPicker().showTitle;
    compactedView: boolean = mockNvItemPicker().compactedView;
    // IconPicker
    IconItems: ViewItem<string>[] = mockNvIconPicker().items01;
    IconShowImage: boolean = mockNvIconPicker().showImage;
    IconShowTitle: boolean = mockNvIconPicker().showTitle;
    IconCompactedView: boolean = mockNvIconPicker().compactedView;
    IconSize: string = mockNvIconPicker().size;
      // ColorPicker
  colorItems: ViewItem<string>[] = mockNvColorPicker().items01;
  colorSize: string = mockNvColorPicker().size;
  colorShowImage: boolean = mockNvColorPicker().showImage;
  colorShowTitle: boolean = mockNvColorPicker().showTitle;
  colorCompactedView: boolean = mockNvColorPicker().compactedView;

  constructor() {}

}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
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


