import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-nv-common-table',
  templateUrl: './nv-common-table.component.html',
  styleUrls: ['./nv-common-table.component.scss']
})
export class NvCommonTableComponent implements OnInit {
  orders: any[] = [];
  ordersData: any[] = [];
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 20, 50, 100];
  pageNewSizes = ['5', '10', '20', '50', '100'];
  //columns = ['name', 'date', 'email', 'status', 'attachments'];
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 7;
  sortColumn: string = '';
  sortPreference: string = '';
  public labels: any = {
    previousLabel: '❮',
    nextLabel: '❯',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`,
  };
  @Input() columns: string[] = [];
  @Input() oData: any;

  @Input() rowActionIcon: string = '';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  // search
  tableTestData: any[] = mockSearchComponent().tableTestData;
  isAdvance: boolean = mockSearchComponent().isAdvance;
  hideMenu: boolean = mockSearchComponent().hideMenu;
  searchableRefList: any[] = mockSearchComponent().searchableRefList;
  // dropDown
  textTrimNumber = mockDropdown().textTrimNumber;
  selectedItemDefault = mockDropdown().selectedItemDefault;

  constructor() { }

  ngOnInit(): void {
    this.tableTestData = this.oData;
    this.orders = this.oData;
    this.ordersData = this.oData;
    this.count = this.orders.length;
  }

/**
   *
   * @param event
   * This method is getting executed when user enter any value in search box
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.orders = this.ordersData.filter((order) => {
      let hasData = false;
      for (let i = 0; i < this.columns.length; i++) {
        if (
          String((<any>order)[this.columns[i]])
            .toLowerCase()
            .includes(filterValue)
        ) {
          hasData = true;
          break;
        }
      }
      return hasData ? order : '';
    });
    this.count = this.orders.length;
  }

  /**
   *
   * @param event
   * This method is getting executed when user moves to any page using pagination
   * dropDown selected item
   */
  onItemSelect(item: string): void {
    if (item) {
      console.log('selectedItem >>>> ' + +item);
      this.page = +item;
    }
  }

  /**
   *
   * @param event
   * This method is getting executed when user moves to any page using pagination
   */
  handlePageChange(event: any): void {
    this.page = event;
  }

  /**
   *
   * @param event
   * This method is getting executed when user changes page size using Ites per page option
   */
  handlePageSizeChange(value: any): void {
    this.pageSize = value;
    this.page = 1;
  }

  /**
   *
   * @param ev
   * This method is getting executed when user click on check box to mark all checkbox
   */
  checkAllCheckBox(ev: any) {
    this.orders.forEach((x) => (x.checked = ev.target.checked));
  }

  /**
   * This method return boolean value which indicates that all checkboxes are checked or not
   */
  isAllCheckBoxChecked() {
    return this.orders.every((p) => p.checked);
  }

  /**
   *
   * @param data
   * This method is user to provide filtered data to table
   */
  onItemsFilter(data: any): any {
    if (data) {
      this.orders = data;
      this.ordersData = data;
      this.count = this.orders.length;
    }
  }

  rowClicked(event: any): void {
    this.sortColumn = event.target.innerText.trim().toLowerCase();
    this.sortPreference = event.target.ariaSort;
    console.log('event', event.target, event.target.ariaSort);
  }

  rowImgClicked(event: any): void {
    event.stopPropagation();
  }
}

/**
 *
 * This function gives object properties which are used for configuration in table
 */
function mockSearchComponent() {
  const inputData = {
    tableTestData: [],
    isAdvance: true,
    hideMenu: true,
    searchableRefList: ['name', 'date', 'email', 'status', 'checked'],
  };
  return inputData;
}

function mockDropdown(): any {
  const dropdownInputs = {
    items: [
      'item1',
      'item2 which is longer',
      'item3  which is longer and longer than item2',
      'item4',
      'item5',
      'item6',
      'item7',
    ],
    itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 1,
    selectedItemDefault: '',
  };
  return dropdownInputs;
}

