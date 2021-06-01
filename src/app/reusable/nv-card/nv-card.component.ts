import { CardType, CardFields, Person } from './../local-data/data-models';
import { Component, Inject } from '@angular/core';

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


