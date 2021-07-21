import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Order } from 'src/app/main/test/order';
import { DataService } from 'src/app/services/data.service';
import { TableColumn } from '../custom-datatable/table-column.model';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  orders: Order[] = [];
  ordersData: Order[] = [];
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  pageNewSizes = ['1', '2', '3'];
  columns = ['name', 'date', 'email', 'status', 'attachments'];
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 7;
  public labels: any = {
    previousLabel: '❮',
    nextLabel: '❯',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];


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

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    if (data) {
      this.tableTestData = data;
      this.orders = data;
      this.ordersData = data;
      this.count = this.orders.length;
    } else {
      this.tableTestData = []
    }
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getTableData()
      .subscribe(data => {
        this.tableTestData = data;
        this.orders = data;
        this.ordersData = data;
        this.count = this.orders.length;
      });
  }

  /**
   * 
   * @param searchTitle 
   * @param page 
   * @param pageSize 
   * This method creates a object which will be used to fetch data with filtered values.
   */
  getRequestParams(searchTitle: any, page: any, pageSize: any): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params['title'] = searchTitle;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }

    return params;
  }

  /**
   * 
   * @param event 
   * This method is getting executed when user enter any value in search box
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.orders = this.ordersData.filter(order => {
      let hasData = false;
      for (let i = 0; i < this.columns.length; i++) {
        if (String((<any>order)[this.columns[i]]).toLowerCase().includes(filterValue)) {
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

  retrieveTutorials(): void {
    /*const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.tutorialService.getAll(params)
      .subscribe(
        response => {
          const { tutorials, totalItems } = response;
          this.tutorials = tutorials;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });*/
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
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

  /**
   * 
   * @param ev 
   * This method is getting executed when user click on check box to mark all checkbox
   */
  checkAllCheckBox(ev: any) {
    this.orders.forEach(x => x.checked = ev.target.checked)
  }

  /**
   * This method return boolean value which indicates that all checkboxes are checked or not
   */
  isAllCheckBoxChecked() {
    return this.orders.every(p => p.checked);
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
  }
  return inputData;
}

function mockDropdown(): any {
  const dropdownInputs = {
    items: ['item1', 'item2 which is longer', 'item3  which is longer and longer than item2', 'item4', 'item5', 'item6', 'item7'],
    itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 1,
    selectedItemDefault: '',
  };
  return dropdownInputs;
}