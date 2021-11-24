import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { DropdownFieldType } from 'src/app/model/data-model';
import { ApplicationService } from 'src/app/services/application.service';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { NvAttachmentListComponent } from '../nv-attachment-list/nv-attachment-list.component';
import { TableColumn } from '../nv-custom-datatable/table-column.model';
import { Order } from '../test/order';

@Component({
  selector: 'app-nv-table-panel',
  templateUrl: './nv-table-panel.component.html',
  styleUrls: ['./nv-table-panel.component.scss']
})
export class NvTablePanelComponent implements OnInit {
  @Input() panelNum!: string;
  @Output() panelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() close = new EventEmitter();
  showPanel: boolean = false;
  orders: Order[] = [];
  ordersData: Order[] = [];
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 20, 50, 100];
  pageNewSizes = ['5', '10', '20', '50', '100'];
  columns = ['name', 'title', 'position', 'date', 'email', 'status'];
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
    screenReaderCurrentLabel: `You're on page`
  };
  selectedRow: number = -1;
  attachmentList: any = [];


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

  
  dropDownFieldTypePlus = mockPlusDropdown().dropDownFieldType;
  dropdownItemsPlus = mockPlusDropdown().items;
  textTrimNumberPlus = mockPlusDropdown().textTrimNumber;
  selectedUser: any  = [];
  sub = new Subscription();
  saveBtnDisable: boolean = false;
  editBtnDisable: boolean = false;
  constructor(private dataService: DataService,
              private dialog: MatDialog,
              private applicationService: ApplicationService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getTableData()
      .subscribe(data => {
        this.tableTestData = data;
        this.orders = data;
        this.ordersData = data;
        this.count = this.orders.length;
      });
      this.sub.unsubscribe();

      this.applicationService.updatedUserData
           .subscribe(res => {
            let result = this.orders.map(el => el.id == res.id ? {...el, name: res.name} : el);
            this.orders = [... result];
      });

      this.applicationService.newUserData
           .subscribe(res => {
             console.log('new', res)
             if (res.userName) {
              this.orders.splice(0,0,res);
             }
          //  res.id ? this.orders.unshift(res) : '';
           
            this.orders = [... this.orders];
            console.log('orders', this.orders)
      })

      this.applicationService.btnDisabled
      .subscribe(res => {
        this.saveBtnDisable = res ? false: res;
        this.editBtnDisable = res ? false: res;
      })
  }

  buttonClick(): void{
    this.panelClick.emit();
  }

  buttonNewClick(): void{
    this.panelClick.emit();
    this.applicationService.setUserBtnAction('new');
    this.applicationService.setSelectedUserData({});
    this.saveBtnDisable = true;
    this.editBtnDisable = true;
  }

  buttonEditClick(): void{
    this.panelClick.emit();
    this.applicationService.setUserBtnAction('edit');
    this.applicationService.setSelectedUserData(this.selectedUser);
    this.saveBtnDisable = true;
    this.editBtnDisable = true;
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.close.emit();
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

  rowClicked(event: any): void{
    this.sortColumn = event.target.innerText.trim().toLowerCase();
    this.sortPreference = event.target.ariaSort;
  }

  rowImgClicked(event: any): void{
    event.stopPropagation();
  }

  showExtendedRow(index: number): void{
    this.selectedRow = (this.selectedRow == index) ? -1 : index;
  }

  showAttachments(data: any): void{
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(NvAttachmentListComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((email: string) => {
    });*/

    this.sharedService.getGenericDialogRef(NvAttachmentListComponent, data);
  }

  isRowVisibleAllowed(index: number): boolean {
    return this.selectedRow == index;
  }

  selectUser(event: any, userData: any): void{
    if (event.target.checked) {
      this.selectedUser.push(userData);
    } else {
      const filteredUser = this.selectedUser.filter((user: any) => {
        return user.id != userData.id;
      });
      this.selectedUser = [...filteredUser];
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

function mockSiteDropdown(): any {
  const dropdownInputs = {
    items: ['site item 1', 'site item 2'],
    textTrimNumber: 5,
    selectedItemDefault: 'Current Site',
    dropDownFieldType: DropdownFieldType.Input,
  };
  return dropdownInputs;
}

function mockPlusDropdown(): any {
  const dropdownInputs = {
    items: ['Print', 'Copy', 'Disable', 'Import', 'View Audit Trail'],
    textTrimNumber: 3,
    selectedItemDefault: 'Page',
    dropDownFieldType: DropdownFieldType.Button
  };
  return dropdownInputs;
}