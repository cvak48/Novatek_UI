import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NovaCard } from '../local-data/data-models';

// interface NovaCardList {
//   id: number;
//   list: NovaCard[];
// }

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  widgetRow: (NovaCard | number)[][] = [];
  widgetCards: NovaCard[][] = [];
  // new NovaCard to generate
  sourceList = [new NovaCard(0, 'Drag New Card')];


  constructor() {
    this.widgetCards = mockWidgetMatrix();
  }
  generateNovaCard(): void {
    this.sourceList.push(new NovaCard(0, 'Drag New Card'));
  }
  exited(event: CdkDragExit<NovaCard[]>): void {
    console.log('Exited', event.item.data);
    this.generateNovaCard();
  }


  drop(event: CdkDragDrop<NovaCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  specialUseCase(drag?: CdkDrag, drop?: CdkDropList): boolean {
    if (drop?.data.length >= 3) {
      console.log('Cannot drop you');
      return false;
    }
    return true;
  }



}

function mockWidgetMatrix(): NovaCard[][] {
  const novaCard_0: NovaCard = new NovaCard(0, 'Nova Card 0');
  const novaCard_1: NovaCard = new NovaCard(1, 'Nova Card 1');
  const novaCard_2: NovaCard = new NovaCard(2, 'Nova Card 2');
  const novaCard_3: NovaCard = new NovaCard(3, 'Nova Card 3');
  const novaCard_4: NovaCard = new NovaCard(4, 'Nova Card 4');
  const novaCard_5: NovaCard = new NovaCard(5, 'Nova Card 5');

  const novaCardLists: NovaCard[][] = [
    [novaCard_0, novaCard_1],
    [novaCard_3, novaCard_4],
     ];
  return novaCardLists;
}

// https://timdeschryver.dev/blog/exploring-drag-and-drop-with-the-new-angular-material-cdk

//  When the container is the same, it re-orders the items as before. If the container is different,
//  it moves the dragged item to the list where the item is being dropped