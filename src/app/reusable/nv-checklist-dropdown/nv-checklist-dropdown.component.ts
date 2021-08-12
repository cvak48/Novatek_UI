import { TodoItemFlatNode, TodoItemNode, ArrowIcon } from './../../model/data-model';
import { TreeViewChecklistService } from './../../services/local-data/tree-view-checklist.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';

import { Observable, onErrorResumeNext, of, from } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-nv-checklist-dropdown',
  templateUrl: './nv-checklist-dropdown.component.html',
  styleUrls: ['./nv-checklist-dropdown.component.scss'],
  providers: [TreeViewChecklistService]
})
export class NvChecklistDropdownComponent implements OnInit {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  // nv
  filteredChecklistItems: TodoItemFlatNode[] = [];
  counter!: number;
  /**
  *  
   */
   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   separatorKeysCodes: number[] = [ENTER, COMMA];
   itemCtrl = new FormControl();
   // menu
   filteredItems!: Observable<string[]>;
   // field
   items: string[] = ['Multiple Select'];
   referenceItems: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
   @ViewChild('itemInput') itemInput!: ElementRef<HTMLInputElement>;
   @ViewChild('auto') matAutocomplete!: MatAutocomplete;
   isArrowDown: boolean = true;
   readonly arrowIcons: ArrowIcon = {
     upward: '../../../assets/icons/ico.arrow.up.svg',
     downward: '../../../assets/icons/ico.arrow.down.svg'
   };
   hasItem = true;



  constructor(private _database: TreeViewChecklistService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.counter = 0;
    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;

    });
    /// chips
    /**
     * AutoComplete as user make query
     */
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      // The Array.slice() method returns a new array
      map((item: string | null) => item ? this._filter(item) : this.referenceItems.slice()));
  }
    /**
     * blur and click eventHandler are responsible for changing the triangle icon direction
     * 
     */
     onBlur(): void {
      this.isArrowDown = true;
      if (this.matAutocomplete.isOpen) {
        this.isArrowDown = true;
      }
    }
    onFieldClick(): void {
      if (this.matAutocomplete.isOpen) {
        this.isArrowDown = false;
      } else {
        this.isArrowDown = true;
      }
    }
  
    add(event: MatChipInputEvent): void {
      // Add fruit only when MatAutocomplete is not open
      // To make sure this does not conflict with OptionSelected Event
      if (!this.matAutocomplete.isOpen) {
  
        const input = event.input;
        const value = event.value;
  
        // Add our fruit
        if ((value || '').trim()) {
          this.items.push(value.trim());
        }
  
        // Reset the input value
        if (input) {
          input.value = '';
        }
        this.itemCtrl.setValue(null);
      }
  
    }
      /**
       * triggered after removing chip
       * add removed chip into filteredItem
       */
    remove(item: string): void {
      const index = this.items.indexOf(item);
      this.filteredItems = this.filteredItems.pipe(map(values => {
        values.push(item);
        return values;
      }));
  
      if (index >= 0) {
        this.items.splice(index, 1);
      }
      if (this.items.length === 0) {
        this.isArrowDown = false;
        this.hasItem = false;
      }
    }
      /**
       * triggered after selecting from filteredList
       */
    selected(event: MatAutocompleteSelectedEvent): void {
      this.items.push(event.option.viewValue);
      /**
       * removing the selected chip from filteredList
       */
      this.filteredItems =  this.filteredItems.pipe(map(values =>
        values.filter(item => item !== event.option.viewValue)));
      this.itemInput.nativeElement.value = '';
      this.itemCtrl.setValue(null);
      if (!this.isArrowDown) {
        this.isArrowDown = true;
      }
      if (this.items.length > 0) {
        this.hasItem = true;
      }
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      const filteredFruits = this.referenceItems.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
      return filteredFruits;
    }

  // end of chips component



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {

    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {

      return this.checklistSelection.isSelected(child);
    });
    // console.log(this.counter);
    

    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));

    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
   
  //  save the items to be used as chips
  this.filteredChecklistItems = this.checklistSelection.selected;
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }



}