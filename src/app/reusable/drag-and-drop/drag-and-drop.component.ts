import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit, CdkDropList, CdkDrag, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NovaCard } from '../local-data/data-models';

class NovaCardsRow {
  id: string;
  list: NovaCard[];
  constructor(id: string, list: NovaCard[]) {
    this.id = id;
    this.list = list;
  }
}

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  widgetRow: (NovaCard | number)[][] = [];
  // widgetCardLists: NovaCard[][] = [];
  widgetCardLists: NovaCardsRow[] = [new NovaCardsRow('cdk-drop-list-1', [])];
  readonly sourceCardListId = 'cdk-drop-list-0';
  private readonly maxRowCards = 3;
  // new NovaCard to generate
  sourceCardList = [new NovaCard(0, 'Drag New Card')];


  constructor() {

  }

  exited(event: CdkDragExit<NovaCard[]>): void {
    console.log('Exited', event.item.data);
    this.generateNovaCard();
    this.manageWidgetCardLists();
    // this.generateWidgetRow();
  }
  onDragStarted(event: any): void {
    console.log('Started', event.source.data);
    // check if need new row : 1- all rows of populated
  }
  generateNovaCard(): void {
    this.sourceCardList.push(new NovaCard(0, 'Drag New Card'));
  }

  drop(event: CdkDragDrop<NovaCard[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event.previousContainer.element.nativeElement.id);
    console.log(event.container.element.nativeElement.id);

  }


  manageWidgetCardLists(): boolean {
    const rowsNumber = this.widgetCardLists.length;
    const rowCardsNumber = [];
    let CardsNumber = 0;
    let maxCards = 0;
    if (rowsNumber > 0) {
      for (let i = 0; i <= rowsNumber - 1; i++) {
        rowCardsNumber[i] = this.widgetCardLists[i].list.length;
        CardsNumber += rowCardsNumber[i];
      }
      // isRowNeeded
      // maximun capacity of cards within all rows
      maxCards = rowsNumber * this.maxRowCards;
      if (CardsNumber >= maxCards - 1) {
        // new extra row
        // ask for new id for new row
        let newId = '';
        newId = this.generateNewRowId(rowsNumber);
        this.generateWidgetRow(newId);
      } else {

      }


    } else {
      return false;
    }

    return true;
  }
  generateNewRowId( rowsNumber: number): string {
    return `cdk-drop-list-${rowsNumber + 1} `;
  }
  generateWidgetRow(currentId?: string, previousId?: string): void {
    // generate rows and widgetMatrix
    // need id and NovaCard to generate rows
    if (currentId) {
    this.widgetCardLists.push(new NovaCardsRow( currentId, []));
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
    // [novaCard_0, novaCard_1],
    [novaCard_3, novaCard_4],
    [],
  ];
  return novaCardLists;
}

// https://timdeschryver.dev/blog/exploring-drag-and-drop-with-the-new-angular-material-cdk

//  When the container is the same, it re-orders the items as before. If the container is different,
//  it moves the dragged item to the list where the item is being dropped