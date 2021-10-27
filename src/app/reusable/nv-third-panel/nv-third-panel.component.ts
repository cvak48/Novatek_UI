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
  //columns = ['Name', 'ID'];
  sortColumn: string = '';
  sortPreference: string = '';
  teams: Team[] = [];
  teamsData: Team[] = [];
  showAddEditBtns: boolean = true;
  showDeleteBtn: boolean = true;
  nameValidation = '';
  idValidation = '';

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
    this.orders.map(data => {
      if(data.name.length >= 10){
        data.tooltipText = data.name;
        data.name = data.name.substr(0,9) + '....';
      }else {
        data.tooltipText = '';
      }
    });
    this.ordersData = this.oData;
    this.count = this.orders.length;
    // this.teams.push({name: "John", id:'123', status: "true", checked: true});
    // this.teams.push({name: "Tom", id:'345', status: "true", checked: true});
    // this.teamsData.push({name: "Ram", id:'123', status: "true", checked: true});
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
    this.updateShowAddEditBtns();
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

  add() {
    if (this.name && this.id) {
      let status = 'Completed';
      let ds = this.orders.find(
        (data) => data.name.toLowerCase() === this.name.toLowerCase()
      );
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
        ds = {};
        ds.name = this.name;
        ds.id = this.id;
      }
      this.addData(ds, status);
      this.nameValidation= '';
      this.idValidation= '';
    }else if(!this.name && !this.id){
      this.nameValidation= 'is-invalid';
      this.idValidation = 'is-invalid';
    }else if(!this.id){
      this.idValidation = 'is-invalid';
    }else if(!this.name){
      this.nameValidation = 'is-invalid';
    }
  }

  addData(data: any, status: string) {
    this.orders.unshift({
      id: data.id,
      name: data.name,
      status: status,
      checked: false,
      isUpdated: true
    });
    this.name = '';
    this.id = '';
  }

  edit() {
    if (this.name && this.id) {
     // let tooltip = '';
      const tempName = this.name;
      this.orders.splice(this.selectedItemIndex, 1);
      // if(this.name.length >= 10){
      //   tooltip = tempName;
      //   this.name = this.name.substr(0,9) + '....';
      // }else {
      //   tooltip = '';
      // }
      this.updateData('Edited');
      this.nameValidation= '';
      this.idValidation= '';
      // this.orders[this.selectedItemIndex].name = this.name;
    }else if(!this.name && !this.id){
      this.nameValidation= 'is-invalid';
      this.idValidation = 'is-invalid';
    }else if(!this.id){
      this.idValidation = 'is-invalid';
    }else if(!this.name){
      this.nameValidation = 'is-invalid';
    }
  }

  delete() {
    if (this.getCheckedDataCount() >= 2) {
      this.deleteCheckedData();
      return;
    }else if(!this.name) {
      this.deleteCheckedData();
    }
    if (this.name && this.id) {
      this.orders.splice(this.selectedItemIndex, 1);
      this.updateData('No');
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
  }

  updateRowData(status: string, rowData: any) {
    this.orders.unshift({
      id: rowData.id,
      name: rowData.name,
      status: status,
      checked: false,
      isUpdated: true
    });
  }

  undo() {
    this.showDeleteBtn = true;
    this.showAddEditBtns = true;
    this.name = '';
    this.id = '';
    //if(this.name){
    this.orders[this.selectedItemIndex].status = 'Pending';
    //}
    this.orders.forEach((item, index) => {
      if (item.checked) {
        this.orders[index].status = 'Pending';
        this.orders[index].checked = false;
        //this.updateRowData('No', item);
      }
    });
  }

  updateData(status: string) {
    this.orders.unshift({
      id: this.id,
      name: this.name,
      status: status,
      checked: false,
      isUpdated: true
    });
    this.name = '';
    this.id = '';
  }

  checkBoxClicked(data: any, index: number){
    this.selectedItemIndex = index;
    this.name = data.name;
    this.id = data.id;

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
      this.updateShowAddEditBtns();
      this.updateStatus(data);
    }, 10);
  }

  updateStatus(data: any){
    if(this.orders[this.selectedItemIndex].status !== 'No' &&
    this.orders[this.selectedItemIndex].status !== 'Edited' &&
    this.orders[this.selectedItemIndex].status !== 'Completed'){
      if(data.checked){
        this.orders[this.selectedItemIndex].status = 'Clicked';
      }else{
        this.orders[this.selectedItemIndex].status = 'Pending';
        this.id = '';
        this.name = '';
      }
    }
  }

  clickedRow(data: any, index: number) {

    this.selectedItemIndex = index;
    this.name = data.name;
    this.id = data.id;

    this.orders.forEach((item) => {
      if (item.status === 'Clicked' && item.checked == false) {
        item.status = 'Pending';
      }
    });
    if (this.orders[index].status === 'No') {
      this.showDeleteBtn = false;
    } else {
      this.showDeleteBtn = true;
    }
    if (
      this.orders[index].status !== 'No' &&
      this.orders[index].status !== 'Edited' &&
      this.orders[index].status !== 'Completed'
    ) {
      this.orders[index].status = 'Clicked';
    }
    
    setTimeout(() => {
      this.updateShowAddEditBtns();
      //this.updateSelectedData(data);
    }, 10);
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

  private updateShowAddEditBtns() {
    if (this.getCheckedDataCount() >= 2) {
      this.showAddEditBtns = false;
    } else {
      this.showAddEditBtns = true;
    }
  }

  getCheckedDataCount() {
    let count = 0;
    this.orders.forEach((item) => {
      if (item.checked) {
        count = count + 1;
      }
    });
    return count;
  }
}
