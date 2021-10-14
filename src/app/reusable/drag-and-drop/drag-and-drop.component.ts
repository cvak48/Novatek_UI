import { CardType, CardFields } from './../local-data/data-models';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragExit, CdkDropList, CdkDrag, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


// TODO: populate cards using dictionary and observables

class NovaCardsRow {
  id: string;
  list: NovaCard[];
  constructor(id: string, list: NovaCard[]) {
    this.id = id;
    this.list = list;
  }
}

class NovaCard {
  id: number;
  title: string;
  type?: CardType;
  fields?: CardFields;
  constructor(id: number, title: string, type?: CardType, fields?: CardFields) {
      this.id = id;
      this.title = title;
      this.type = type!;
      this.fields = fields!;
  }
}

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  widgetRow: (NovaCard | number)[][] = [];
  widgetCardLists: NovaCardsRow[] = [new NovaCardsRow('cdk-drop-list-1', [])];
  novaCardsId: number[] = [];
  isCardGenerated = true;
  readonly sourceCardListId = 'cdk-drop-list-0';
  private readonly maxRowCards = 3;
  // new NovaCard to generate
  // TODO: need a function to generate New Card
  sourceCardList = [new NovaCard(0, 'Drag New Card')];

  constructor() { }
  // enumerate rows and cards as dragging new card
  // fires when card reach other containers
  exited(event: CdkDragExit<NovaCard[]>): void {
    console.log('Exited', event.item.data);
    // sourceList should not be empty
    this.generateNovaCard();
    // manage widget board to see if new row is needed
    this.manageWidgetCardLists(this.widgetCardLists);
  }
  onDragStarted(event: any): void {
    console.log('Started', event.source.data);
    // check if need new row : 1- all rows of populated
  }
  generateNovaCard(): void {
    const id = this.manageNovaCards();
    this.sourceCardList.push(new NovaCard(0, 'Drag New Card'));
  }
  manageNovaCards(): string {
    // TODO:
    return '';
  }

  drop(event: CdkDragDrop<NovaCard[]>): void {

    // check the new NovaCard dropped (id)
    // modify its id
    if (event.previousContainer.id === 'cdk-drop-list-0' && this.isCardGenerated) {
      const listLength = this.novaCardsId.length;
      const newId = listLength;
      event.item.data.id = newId;
      event.item.data.title = 'Drag New Card' + newId;
      this.novaCardsId.push(event.item.data.id);
    }
    if (event?.container.data.length === 3 && event?.previousContainer.id !== 'cdk-drop-list-0') {
      console.log('im not reference');
      const splicedLastCard = event?.container.data.splice(2, 1);
      event?.previousContainer.data.push(splicedLastCard[0]);
    }
    if (event?.previousContainer.id === 'cdk-drop-list-0') {
      this.isCardGenerated = true;
    }
    if (event?.container.data.length === 3 && event?.previousContainer.id === 'cdk-drop-list-0') {
      this.isCardGenerated = false;
    }


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else if (event.container.data.length < 3) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  manageWidgetCardLists(widgetList: NovaCardsRow[]): void {
    let { rowsNumber, rowCardsNumber, CardsNumber, maxCardsNumber } = this.enumerateWidgetAssets(widgetList);

    if (rowsNumber > 0) {
      // isRowNeeded
      // maximum capacity of cards within all rows
      if (CardsNumber >= maxCardsNumber - 1) {
        // new extra row
        this.generateWidgetRow(rowsNumber);
      }
    } else {
      rowsNumber = 0;
      this.generateWidgetRow(rowsNumber);
    }

  }

  generateWidgetRow(rowsNumber: number, currentId?: string, previousId?: string): void {
    // generate rows and widgetMatrix
    // need id and NovaCard to generate rows
    // ask for new id for new row TODO: otherwise use inlet id
    let newId = '';
    newId = this.generateNewRowId(rowsNumber);
    const id = currentId ? currentId : newId;
    if (id) {
      this.widgetCardLists.push(new NovaCardsRow(id, []));
    }
  }
  generateNewRowId(rowsNumber: number): string {
    return `cdk-drop-list-${rowsNumber + 1} `;
  }
  enumerateWidgetAssets(widgetList: NovaCardsRow[], maxRowCards: number = 3):
   { rowsNumber: number, rowCardsNumber: number[], CardsNumber: number, maxCardsNumber: number } {
    let rowsNumb = widgetList.length;
    const rowCardsNumb = [];
    let CardsNumb = 0;
    let maxCardsNumb = 0;
    if (rowsNumb > 0) {
      for (let i = 0; i <= rowsNumb - 1; i++) {
        rowCardsNumb[i] = this.widgetCardLists[i].list.length;
        CardsNumb += rowCardsNumb[i];
      }
      maxCardsNumb = rowsNumb * maxRowCards;
    } else {
      rowsNumb = 0;
    }
    const assets = {
      rowsNumber: rowsNumb,
      rowCardsNumber: rowCardsNumb,
      CardsNumber: CardsNumb,
      maxCardsNumber: maxCardsNumb,
    };
    return assets;
  }


  specialUseCase(drag?: CdkDrag, drop?: CdkDropList): boolean {
    if (drop?.data.length > 3) {
      console.log('Cannot drop you');

      return false;
    }
    return true;
  }

}

