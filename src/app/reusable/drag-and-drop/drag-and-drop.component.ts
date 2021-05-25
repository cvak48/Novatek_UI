import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NovaCard } from '../local-data/data-models';

interface NovaCardList<T> {
  id: number;
  name: string;
  list: NovaCard<T>[];
}

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

  sourceList = ['Drag New Card'];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep1',
    'Fall asleep2',
    'Fall asleep3',
    'Fall asleep4',
    'Fall asleep5',
    'Fall asleep6',
    'Fall asleep7',
    'Fall asleep8',
    'Fall asleep9',
  ];

  InProgress = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    // 'Check e-mail',
    // 'Walk dog'
  ];
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    // 'Check e-mail',
    // 'Walk dog'
  ];

  generateNovaCard(): void {
    if (this.sourceList.length > 0) {
    } else {
      this.sourceList.push('Drag New Card');
    }
  }
  exited(event: CdkDragExit<string[]>): void {
    console.log('Exited', event.item.data);
    this.generateNovaCard();
  }


  drop(event: CdkDragDrop<string[]>) {
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
    if (drop?.data.length >= 7) {
      console.log("Can't drop you because there aren't enough items in 'Active'");
      return false;
    }
    return true;
  }



}

function mockNovaCardLists(): NovaCardList<any>[] {
  const novaCard_0: NovaCard<any> = new NovaCard(0, 'Nova Card 0');
  const novaCard_1: NovaCard<any> = new NovaCard(1, 'Nova Card 1');
  const novaCard_2: NovaCard<any> = new NovaCard(2, 'Nova Card 2');
  const novaCard_3: NovaCard<any> = new NovaCard(3, 'Nova Card 3');
  const novaCard_4: NovaCard<any> = new NovaCard(4, 'Nova Card 4');
  const novaCard_5: NovaCard<any> = new NovaCard(5, 'Nova Card 5');

  const novaCardLists: NovaCardList<any>[] = [
    { id: 0, name: 'novaList_0', list: [novaCard_0, novaCard_1, novaCard_2] },
    { id: 1, name: 'novaList_1', list: [novaCard_3, novaCard_4,] },
    { id: 1, name: 'novaList_2', list: [] }
  ];
  return novaCardLists;
}

// https://timdeschryver.dev/blog/exploring-drag-and-drop-with-the-new-angular-material-cdk

//  When the container is the same, it re-orders the items as before. If the container is different,
//  it moves the dragged item to the list where the item is being dropped 