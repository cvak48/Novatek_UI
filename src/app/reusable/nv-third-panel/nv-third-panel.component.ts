import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Team } from 'src/app/model/teams-model';

@Component({
  selector: 'app-nv-third-panel',
  templateUrl: './nv-third-panel.component.html',
  styleUrls: ['./nv-third-panel.component.scss'],
})
export class NvThirdPanelComponent implements OnInit {
  name = '';
  placeholder = '';
  nameLabel = 'Name';
  id = '';
  idLabel = 'ID';
  sortPreference: string = 'descending';
  teams: Team[] = [];
  teamsData: Team[] = [];
  showDeleteBtn: boolean = true;
  nameValidation = '';
  idValidation = '';
  button = 'button';
  disableInput = false;
  disableAddButton = false;
  disableEditButton = false;
  sortDir = 1; //1= 'ASE' -1= DSC
  isNameSorted: boolean = false;
  isIdSorted: boolean = false;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  orders: any[] = [];
  ordersData: any[] = [];
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 20, 50, 100];
  pageNewSizes = ['5', '10', '20', '50', '100'];
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 7;
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
  tableTestData: any[] = this.mockSearchComponent().tableTestData;
  isAdvance: boolean = this.mockSearchComponent().isAdvance;
  hideMenu: boolean = this.mockSearchComponent().hideMenu;
  searchableRefList: any[] = this.mockSearchComponent().searchableRefList;
  selectedItemIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.tableTestData = this.oData;
    this.orders = this.oData;
    this.orders.map((data) => {
      if (data.name.length >= 10) {
        data.tooltipText = data.name;
        data.name = data.name.substr(0, 9) + '....';
      } else {
        data.tooltipText = '';
      }
    });
    this.ordersData = this.oData;
    this.count = this.orders.length;
    this.sortArr('name', 'onload');
  }

  buttonClick() {}

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
    event.stopPropagation();
  }

  rowImgClicked(event: any, sortingOrder: string, column: string): void {
    if (sortingOrder === 'descending') {
      this.sortDir = -1;
      this.sortPreference = 'ascending';
    } else {
      this.sortDir = 1;
      this.sortPreference = 'descending';
    }
    this.sortArr(column, 'onClick');
  }

  sortArr(colName: any, event: string) {
    if (event === 'onload') {
      this.orders.sort((a, b) => {
        a = a[colName].toLowerCase();
        b = b[colName].toLowerCase();
        return a.localeCompare(b) * this.sortDir;
      });
      return;
    }

    this.orders.sort((a, b) => {
      if (colName == 'id') {
        this.isNameSorted = false;
        this.isIdSorted = true;
        return this.collator.compare(a[colName], b[colName]) * this.sortDir;
      } else {
        this.isNameSorted = true;
        this.isIdSorted = false;
        a = a[colName].toLowerCase();
        b = b[colName].toLowerCase();
      }
      return a.localeCompare(b) * this.sortDir;
    });
  }

  /**
   *
   * mocking SearchComponent data
   */
  mockSearchComponent() {
    return {
      tableTestData: [],
      isAdvance: true,
      hideMenu: true,
      searchableRefList: ['name', 'id', 'status', 'checked'],
    };
  }

  keyPress() {
    setTimeout(() => {
      this.updateValidations();
    }, 10);
  }

  updateValidations() {
    this.nameValidation = this.name.length > 0 ? 'is-normal' : 'is-invalid';
    this.idValidation = this.id.length > 0 ? 'is-normal' : 'is-invalid';
  }

  add() {
    if (this.name && this.id) {
      let status = 'Completed';
      let ds: any;
      this.orders.forEach((data) => {
        if (
          data.name.toLowerCase() === this.name.toLowerCase() &&
          data.id == this.id
        ) {
          ds = data;
        }
      });
      if (
        ds !== undefined &&
        ds.name.toLowerCase() === this.name.toLowerCase() &&
        ds.id == Number(this.id)
      ) {
        const index = this.orders.findIndex(
          (data) => data.name.toLowerCase() === this.name.toLowerCase()
        );
        this.orders.splice(index, 1);
        status = 'Clicked';
      } else if (ds === undefined) {
        let tooltip = '';
        const tempName = this.name;
        if (this.name.length >= 10) {
          tooltip = tempName;
          this.name = this.name.substr(0, 9) + '....';
        } else {
          tooltip = '';
        }
        ds = {};
        ds.name = this.name;
        ds.id = this.id;
        ds.tooltip = tooltip;
      }
      this.addData(ds, status);
      this.nameValidation = '';
      this.idValidation = '';
    } else if (!this.name && !this.id) {
      this.nameValidation = 'is-invalid';
      this.idValidation = 'is-invalid';
    } else if (!this.id) {
      this.idValidation = 'is-invalid';
    } else if (!this.name) {
      this.nameValidation = 'is-invalid';
    }
  }

  addData(data: any, status: string) {
    this.orders.unshift({
      id: data.id,
      name: data.name,
      status: status,
      checked: false,
      tempStatus: status,
      tooltipText: data.tooltip,
    });
    this.name = '';
    this.id = '';
  }

  edit() {
    if (this.name && this.id) {
      this.orders.splice(this.selectedItemIndex, 1);
      let tooltip = '';
      const tempName = this.name;
      if (this.name.length >= 10) {
        tooltip = tempName;
        this.name = this.name.substr(0, 9) + '....';
      } else {
        tooltip = '';
      }
      this.updateData('Edited', tooltip);
      this.nameValidation = '';
      this.idValidation = '';
      // this.orders[this.selectedItemIndex].name = this.name;
    } else if (!this.name && !this.id) {
      this.nameValidation = 'is-invalid';
      this.idValidation = 'is-invalid';
    } else if (!this.id) {
      this.idValidation = 'is-invalid';
    } else if (!this.name) {
      this.nameValidation = 'is-invalid';
    }
  }

  delete() {
    this.disableInput = false;
    if (this.getCheckedDataCount() >= 2) {
      this.deleteCheckedData();
      return;
    } else if (!this.name) {
      this.deleteCheckedData();
    }
    if (this.name && this.id) {
      this.orders.splice(this.selectedItemIndex, 1);
      let tooltip = '';
      const tempName = this.name;
      if (this.name.length >= 10) {
        tooltip = tempName;
        this.name = this.name.substr(0, 9) + '....';
      } else {
        tooltip = '';
      }
      this.updateData('No', tooltip);
      this.showDeleteBtn = false;
      this.selectedItemIndex = 0;
    }
  }

  deleteCheckedData() {
    this.orders.forEach((item, index) => {
      if (item.checked) {
        this.orders.splice(index, 1);
        this.updateRowData('No', item);
      }
    });
    this.name = '';
    this.id = '';
    this.showDeleteBtn = false;
    this.disableAddButton = false;
    this.disableEditButton = false;
  }

  updateRowData(status: string, rowData: any) {
    this.orders.unshift({
      id: rowData.id,
      name: rowData.name,
      status: status,
      checked: false,
      tempStatus: status,
    });
  }

  undo() {
    this.disableInput = false;
    this.showDeleteBtn = true;
    this.disableAddButton = false;
    this.disableEditButton = false;
    this.name = '';
    this.id = '';
    if (this.name) {
      this.orders[this.selectedItemIndex].status = 'Pending';
      this.orders[this.selectedItemIndex].tempStatus = 'Pending';
    }
    this.orders.forEach((item, index) => {
      if (item.checked) {
        this.orders[index].status = 'Pending';
        this.orders[index].tempStatus = 'Pending';
        this.orders[index].checked = false;
        //this.updateRowData('No', item);
      }
    });
  }

  updateData(status: string, tooltipText: string) {
    this.disableAddButton = false;
    this.orders.unshift({
      id: this.id,
      name: this.name,
      status: status,
      checked: false,
      tempStatus: status,
      tooltipText: tooltipText,
    });
    this.name = '';
    this.id = '';
  }

  checkBoxClicked(data: any, index: number) {
    this.selectedItemIndex = index;
    this.name = ''; // data.name;
    this.id = ''; //data.id;
    this.nameValidation = 'is-normal';
    this.idValidation = 'is-normal';

    if (this.orders[index].status === 'No') {
      this.showDeleteBtn = false;
    } else {
      this.showDeleteBtn = true;
    }
    this.orders.forEach((item) => {
      if (item.status === 'Clicked' && item.checked == false) {
        item.status = 'Pending';
      }
    });
    setTimeout(() => {
      this.disableButtons();
      this.updateStatus(data);
      this.updateDisableInput(data);
    }, 10);
  }

  updateStatus(data: any) {
    if (data.checked == false) {
      this.orders[this.selectedItemIndex].status =
        this.orders[this.selectedItemIndex].tempStatus;
    } else {
      this.orders.map((item) => {
        if (item.checked) {
          item.status = 'Clicked';
        }
      });
    }
  }

  clickedRow(data: any, indexx: number) {
    this.selectedItemIndex = indexx;
    this.name = data.name;
    if (
      this.orders[this.selectedItemIndex].tooltipText != undefined &&
      this.orders[this.selectedItemIndex].tooltipText.length > 0
    ) {
      this.name = this.orders[this.selectedItemIndex].tooltipText;
    } else {
      this.name = data.name;
    }
    this.id = data.id;

    this.nameValidation = 'is-normal';
    this.idValidation = 'is-normal';

    this.disableAddButton = true;
    if (data.status == 'No' || this.getCheckedDataCount() >= 1) {
      this.disableEditButton = true;
    } else {
      this.disableEditButton = false;
    }

    this.orders.forEach((item) => {
      if (item.status === 'Clicked' && !item.checked) {
        item.status = 'Pending';
      }
    });
    if (this.orders[indexx].status === 'No') {
      this.showDeleteBtn = false;
    } else {
      this.showDeleteBtn = true;
    }

    this.orders[indexx].status = 'Clicked';
    console.log(this.orders);
    this.orders.forEach((da, index) => {
      if (indexx !== index && !da.checked) {
        da.status = da.tempStatus;
      }
    });
  }

  private updateSelectedData(data: any) {
    if (data.checked) {
      this.name = '';
      this.id = '';
    } else {
      this.name = data.name;
      this.id = data.id;
    }
  }

  private disableButtons() {
    if (this.orders.every((item) => item.checked === false)) {
      this.disableAddButton = false;
      this.disableEditButton = false;
    } else {
      this.disableAddButton = true;
      this.disableEditButton = true;
    }
  }

  private updateDisableInput(data: any) {
    if (data.checked == true) {
      this.disableInput = true;
    } else {
      this.disableInput = this.getCheckedDataCount() >= 1;
    }
  }

  private getCheckedDataCount() {
    let count = 0;
    this.orders.forEach((item) => {
      if (item.checked) {
        count = count + 1;
      }
    });
    return count;
  }
}
