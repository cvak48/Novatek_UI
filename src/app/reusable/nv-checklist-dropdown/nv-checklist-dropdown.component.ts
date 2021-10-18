import { SVG_ICON_IDS_DIC, FIELD_STATUS_COLOR_DIC } from 'src/assets/constants';
import { NvTextColorDirective } from './../directives/nv-status-color/nv-text-color.directive';
import { NvStyleColorDirective } from './../directives/nv-status-color/nv-style-color.directive';
import { FormControl } from '@angular/forms';
import {
  TodoItemFlatNode,
  TodoItemNode,
  ArrowIcon,
  FieldStatusType,
  FieldStatusStyle,
} from './../../model/data-model';
import { TreeViewChecklistService } from '../../services/local-data/tree-view-checklist/tree-view-checklist.service';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Observable, of } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NvFilterPipe } from '../pipes/filters/nv-filter/nv-filter.pipe';
/**
 * This component is generated based on Angular material
 * https://v7.material.angular.io/components/tree/api
 * https://stackoverflow.com/questions/50611686/how-to-filter-a-mat-tree-component-angular-material-6-0-1
 */
// TODO: the arrow icon need to be fixed
//  when we filter by input query the result items in menu need to be open
//  when we delete a chip the corresponding check box need to be uncheck
// the dstance between menu and field should be updated
@Component({
  selector: 'app-nv-checklist-dropdown',
  templateUrl: './nv-checklist-dropdown.component.html',
  styleUrls: ['./nv-checklist-dropdown.component.scss'],
  providers: [TreeViewChecklistService],
})
export class NvChecklistDropdownComponent implements OnInit, AfterViewInit {

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
  checklistSelection = new SelectionModel<TodoItemFlatNode>(
    true /* multiple */
  );

  // nv
  counter!: number;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // menu
  filteredItems!: Observable<string[]>;
  // field
  items: string[] = [];
  referenceItems: string[] = ['Apple'];
  @ViewChild('itemInput') itemInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('default') defaultDropdown!: ElementRef<HTMLElement>;
  isArrowDown: boolean = true;
  readonly arrowIcons: ArrowIcon = {
    upward: '../../../assets/icons/ico.arrow.up.svg',
    downward: '../../../assets/icons/ico.arrow.down.svg',
  };
  hasItem = false;
  // field
  isFieldFocused: boolean = false;
  //
  itemCtrl = new FormControl();
  dataSourceRef!: TodoItemNode[];
  /**
   * Input for nvStyleColor directive
   */

  @Input() label!: string;
  /**
   * Sets styles base on the status of the field
   * The inputs of directives in html
   */
  @Input() set fieldStatusType(type: FieldStatusType) {
    this._fieldStatusType = type;
    this._setStyles(this.fieldStatusType);
  }
  get fieldStatusType(): FieldStatusType {
    return this._fieldStatusType;
  }
  private _fieldStatusType!: FieldStatusType;
  fieldStyle!: FieldStatusStyle;
  statusType = FieldStatusType;
  labelStatus!: FieldStatusType;
  isFieldDisable!: boolean;
  svgIconIdsDic!: { [name: string]: string };
  fieldStatusColorDic!: { [name: string]: string };
  /**
   * References to call directives in the component
   */
  @ViewChild(NvStyleColorDirective) nvStyleColorDirective: any;
  @ViewChild(NvTextColorDirective) nvTextColorDirective: any;

  @ViewChild('default') inputFieldRef!: ElementRef<HTMLElement>;
  constructor(
    private _database: TreeViewChecklistService,
    private filter: NvFilterPipe
  ) {
    this._initialize();
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.counter = 0;
    _database.dataChange.subscribe((data) => {
      // console.log('data' + JSON.stringify(data));
      this.dataSource.data = data;
      // for filter
      this.dataSourceRef = data;
    });
    // As soon as user make query, we need to filter the data
    this.itemCtrl.valueChanges.subscribe((query) => {
      this.dataSource.data = this._filterDataSource(query);
    });
  }
  /**
   * filter the input query
   */
  _filterDataSource(query: string): TodoItemNode[] {
    if (query && query !== '') {
      const filteredItems = this.filter.transform(this.dataSource.data, query);
      this.dataSource.data = filteredItems
        ? filteredItems.length !== 0
          ? filteredItems
          : this.dataSourceRef
        : this.dataSourceRef;
    } else if (query === '') {
      this.dataSource.data = this.dataSourceRef;
    }
    return this.dataSource.data;
  }
  /**
   * blur and click eventHandler are responsible for changing the triangle icon direction
   *
   */
  onBlur(): void {
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }
    this.isFieldFocused = false;
  }
  onFieldClick(): void {
    // TODO: the directive in the html does not get updated as we update its input in the component with as an event get triggered
    // so here we call directive to call its method
    this.nvStyleColorDirective.ngOnDestroy();
    this.nvTextColorDirective.ngOnDestroy();

  }
  onFormClick(): void {
    // focus
    this.isFieldFocused = true;
    // to change the arrow icon direction
    if (this.isArrowDown && !this.isFieldDisable) {
      this.isArrowDown = false;
    } else if (!this.isArrowDown && !this.isFieldDisable) {
      this.isArrowDown = true;
    }
  }
  /**
   * triggered after removing chip
   *
   */
  remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    if (this.items.length === 0) {
      this.isArrowDown = false;
      this.hasItem = false;
    }
  }
  ngAfterViewInit(): void {
    if (this.isFieldDisable) {
      this._disableDropdownMenu();
    }
  }
  private _disableDropdownMenu(): void {
    /**
     * Remove toggle to disable the dropdown menu
     */
    this.inputFieldRef?.nativeElement.removeAttribute('data-toggle');
  }
  /**
   * update the style based on the received status color type;
   * generating scss class name
   */
  private _setStyles(type: FieldStatusType): void {
    let statusType = FieldStatusType.Normal;
    if (!!type) {
      statusType = type;
    } else if (type === 0) {
      statusType = FieldStatusType.Active;
    }
    /**
     * setting style based on status type; style is input for directive nv-style-color directive
     * these styles are used to create style class name using enum type; the style classes are located in base.scss
     */
    let style: FieldStatusStyle = {
      border: statusType,
      background: statusType,
      // The label is not affected by status and  we use labelStatus for that purpose
      text: FieldStatusType.Normal,
    };
    this.labelStatus = statusType;
    if (type === FieldStatusType.Disabled) {
      this.isFieldDisable = true;
    } else {
      this.isFieldDisable = false;
    }
    if (type === FieldStatusType.Required) {
      this.labelStatus = FieldStatusType.Error;
    }
    this.fieldStyle = style;
  }
  private _initialize(): void {
    this._initializeSvgIconStyles();
    this.fieldStatusType = FieldStatusType.Normal;
    this.labelStatus = FieldStatusType.Normal;
    this.isFieldDisable = false;
  }
  /**
   * Importing svg icon id and status colors to change the color of svg Icon
   */
  private _initializeSvgIconStyles(): void {
    this.svgIconIdsDic = SVG_ICON_IDS_DIC;
    this.fieldStatusColorDic = FIELD_STATUS_COLOR_DIC;
  }
  // end of chips component

  ngOnInit(): void { }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.item === '';
  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });

    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
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
    descendants.forEach((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);

    //  save the children items to be used as chips
    this.filteredItems = this._toChips(this.checklistSelection.selected);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
    //  save the children items to be used as chips
    //TODO: need to be deleted
    this.filteredItems = this._toChips(this.checklistSelection.selected);
    // this.selected();

  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
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

  /**
   * transfer from checklist items to chips
   * convert them into Observable List
   */

  private _toChips(list: TodoItemFlatNode[]): Observable<string[]> {
    let newList: string[] = [];
    list.forEach((value) => newList.push(value.item));
    this.selected(newList);
    return of(newList);
  }

  /**
   * triggered after selecting from filteredList
   */
  selected(checkedItems: string[]): void {
    this.items = checkedItems ? checkedItems : [];
    const itemsLength = this.items.length;
    /**
     * removing the selected chip from filteredList
     */
    this.itemInput.nativeElement.value = '';
    // this.itemCtrl.setValue(null);
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }
    if (itemsLength === 0) {
      this.hasItem = false;
    } else if (itemsLength > 0) {
      this.hasItem = true;
    }
  }
}
