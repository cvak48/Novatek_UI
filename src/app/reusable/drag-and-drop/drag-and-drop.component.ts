
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NovaCard } from '../local-data/data-models';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent  {
  
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
  onDragGenerate(): void {

    this.generateLists();
  }
  onAddClick() {
    this.done.push('New One');
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

  generateLists(): void {

  }

}

// https://timdeschryver.dev/blog/exploring-drag-and-drop-with-the-new-angular-material-cdk

//  When the container is the same, it re-orders the items as before. If the container is different,
//  it moves the dragged item to the list where the item is being dropped in