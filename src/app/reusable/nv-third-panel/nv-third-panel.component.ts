import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Team } from 'src/app/model/teams-model';

const Status = {
  NO_CHANGE: 0,
  EDIT: 1,
  NEW: 2,
  DELETE: 4,
  CLICKED: 8,
} as const;

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
  disableInput = false;
  disableAddButton = false;
  disableEditButton = false;
  sortDir = 1; //1= 'ASE' -1= DSC
  isNameSorted: boolean = false;
  isIdSorted: boolean = false;
  //collator used for number sorting
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });
  selectedItemIndex: number = 0; // using to get the current selected item in a table

  orders: any[] = [];
  ordersData: any[] = [];
  count = 0;
  @Input() columns: string[] = [];
  @Input() oData: any;
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  // searching table data
  tableSearchData: any[] = this.mockSearchComponent().tableSearchData;
  isAdvance: boolean = this.mockSearchComponent().isAdvance;
  hideMenu: boolean = this.mockSearchComponent().hideMenu;
  searchableRefList: any[] = this.mockSearchComponent().searchableRefList;

  constructor() { }

  ngOnInit(): void {
    // setting search data for table
    this.tableSearchData = this.oData;
    this.ordersData = this.oData;
    this.orders = this.oData;

    //as tooltip data not coming from backend, so tweaked here
    this.orders.map((data) => {
      if (data.name.length >= 10) {
        data.tooltipText = data.name;
        data.name = data.name.substr(0, 9) + '....';
      } else {
        data.tooltipText = '';
      }
    });

    this.count = this.orders.length;
    this.sortArr('name', 'onload'); // as onload sorted on name & underline shouldn't be there
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

  sortImgClicked(sortingOrder: string, column: string): void {
    if (sortingOrder === 'descending') {
      this.sortDir = -1;
      this.sortPreference = 'ascending'; // used to show sort img up
    } else {
      this.sortDir = 1;
      this.sortPreference = 'descending'; // used to show sort img down
    }
    this.sortArr(column, 'onClick');
  }

  private sortArr(colName: any, event: string) {
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
      tableSearchData: [],
      isAdvance: true,
      hideMenu: true,
      searchableRefList: ['name', 'id', 'status', 'checked'],
    };
  }

  //used this function to update name & id field validations
  keyPress(column: string) {
    setTimeout(() => {
      this.updateValidations(column);
    }, 10);
  }

  private updateValidations(column: string) {
    if (column == 'name') {
      this.nameValidation = this.name.length > 0 ? 'is-normal' : 'is-invalid';
    } else if (column == 'id') {
      this.idValidation =
        this.id.toString().length > 0 ? 'is-normal' : 'is-invalid';
    }
  }

  //when ever user clicks add button, it will invoke
  add() {
    if (this.name && this.id) {
      this.addData(this.checkEnteredData());
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

  addData(data: any) {
    this.orders.push({
      id: data.id,
      name: data.name,
      status: data.status,
      checked: false,
      tempStatus: data.status,
      tooltipText: data.tooltip,
    });
    this.sortArr('name', 'onClick');
    this.scrollToUpdatedData();
    this.name = '';
    this.id = '';
  }

  //scroll to currently updated data
  onScrollToGeofence(onScrollToGeofence: number) {
    if (onScrollToGeofence >= 0) {
      document.querySelector('#team' + onScrollToGeofence)?.scrollIntoView();
    }
  }

  //when ever user clicks edit button, it will invoke
  edit() {

    if (this.name && this.id && this.orders.filter(item => item.name.toLowerCase() == this.name.toLowerCase() && item.id == this.id).length > 0) {

      alert('item is already existed')

    } else if (this.name && this.id) {
      //For updating proper status for multiple edits tweaking this
      let status;
      if (
        this.orders[this.selectedItemIndex].tempStatus == 1 ||
        this.orders[this.selectedItemIndex].tempStatus == 3
      ) {
        status = this.orders[this.selectedItemIndex].tempStatus;
      } else {
        status = this.orders[this.selectedItemIndex].tempStatus + Status.EDIT;
      }
      this.updateData(status, this.getTooltip());
      this.sortArr('name', 'onClick');
      this.scrollToUpdatedData();
    } else if (!this.name && !this.id) {
      this.nameValidation = 'is-invalid';
      this.idValidation = 'is-invalid';
    } else if (!this.id) {
      this.idValidation = 'is-invalid';
    } else if (!this.name) {
      this.nameValidation = 'is-invalid';
    }
  }

  //when ever user clicks delete button, it will invoke
  delete() {
    this.disableInput = false;
    // calling this whenever user checks more than 2 check boxes
    if (this.getCheckedDataCount() >= 2) {
      this.deleteCheckedData();
      return;
    } else if (!this.name) {
      // calling this whenever user checks only 1 check box
      this.deleteCheckedData();
    }
    //if user selected 1 row then executing below code
    if (this.name && this.id) {
      let tooltip = this.getTooltip();
      this.updateData(
        this.orders[this.selectedItemIndex].tempStatus + Status.DELETE,
        tooltip
      ); // deleting selected row data
      this.showDeleteBtn = false; // to show undo button
      this.selectedItemIndex = 0;
    }
  }

  //deleting the data whatever checked
  private deleteCheckedData() {
    this.orders.forEach((item, index) => {
      if (item.checked) {
        this.orders[index].status =
          this.orders[index].tempStatus + Status.DELETE;
        this.orders[index].checked = false;
        this.orders[index].tempStatus =
          this.orders[index].tempStatus + Status.DELETE;
      } else {
        this.orders[index].status = this.orders[index].tempStatus;
      }
    });
    this.name = '';
    this.id = '';
    this.showDeleteBtn = false;
    this.disableAddButton = false;
    this.disableEditButton = false;
  }

  //when ever user clicks undo button, it will invoke
  undo() {
    this.disableInput = false;
    this.showDeleteBtn = true;
    this.disableAddButton = false;
    this.disableEditButton = false;


    if ((this.orders.filter(itm => itm.tempStatus == Status.DELETE && itm.checked)).length > 1) {
      //undo checked data
      this.orders.forEach((item, index) => {
        if (item.checked) {
          if (this.orders[index].tempStatus >= Status.DELETE) {
            this.orders[index].status = this.orders[index].tempStatus - Status.DELETE;
            this.orders[index].tempStatus = this.orders[index].status;
          } else if(this.orders[index].status == Status.CLICKED) {
            this.orders[index].status = Status.NO_CHANGE;
          }
          this.orders[index].checked = false;
        }
      });
    } else {
      this.orders[this.selectedItemIndex].status = this.orders[this.selectedItemIndex].tempStatus - Status.DELETE;
      this.orders[this.selectedItemIndex].tempStatus = this.orders[this.selectedItemIndex].status;
      this.name = '';
      this.id = '';
      this.orders[this.selectedItemIndex].checked = false;
    }

  }

  //whenever user clicks on check box invoking this
  checkBoxClicked(data: any, index: number) {
    this.selectedItemIndex = index;
    this.name = '';
    this.id = '';
    this.nameValidation = 'is-normal';
    this.idValidation = 'is-normal';
    //this.showDeleteBtn = this.orders[index].status != Status.DELETE;

    if ((this.orders.filter(itm => itm.checked)).length > 1) {
      if ((this.orders.filter(itm => itm.tempStatus == Status.DELETE && itm.checked)).length > 0) {
        this.showDeleteBtn = false;
      } else {
        this.showDeleteBtn = true;
      }
    } else {
      this.updateShowDeleteButton(index);
    }

    /*  this.orders.forEach((item) => {
        if (item.status == Status.CLICKED && item.checked == false) {
          item.status = Status.NO_CHANGE;
        }
      }); */

    setTimeout(() => {
      this.disableButtons();
      this.updateStatus(data);
      this.updateDisableInput(data);
    }, 10);
  }

  //when ever user clicks on a row, invoking this
  clickedRow(data: any, indexx: number) {
    this.selectedItemIndex = indexx;
    this.updateName(data);
    this.id = data.id;
    this.nameValidation = 'is-normal';
    this.idValidation = 'is-normal';
    this.updateDisableButtons(data);
    this.updateRowStatus();
    if (
      this.orders[indexx].status != Status.DELETE &&
      this.orders[indexx].status != 5 &&
      this.orders[indexx].status != 6 &&
      this.orders[indexx].status != 7
    ) {
      this.showDeleteBtn = true;
    } else {
      this.showDeleteBtn = false;
    }
    //this.showDeleteBtn =this.orders[indexx].status != 'No';
    this.orders[indexx].status = Status.CLICKED;
    this.orders.forEach((da, index) => {
      if (indexx !== index && !da.checked) {
        da.status = da.tempStatus;
      }
    });
  }

  //updating name for tooltip
  private updateName(data: any) {
    this.name = data.name;
    if (
      this.orders[this.selectedItemIndex].tooltipText != undefined &&
      this.orders[this.selectedItemIndex].tooltipText.length > 0
    ) {
      this.name = this.orders[this.selectedItemIndex].tooltipText;
    } else {
      this.name = data.name;
    }
  }

  //add & edit disable buttons
  private updateDisableButtons(data: any) {
    this.disableAddButton = true;
    if (data.status == Status.DELETE || this.getCheckedDataCount() >= 1) {
      this.disableEditButton = true;
    } else {
      this.disableEditButton = false;
    }
  }

  //updating row status
  private updateRowStatus() {
    this.orders.forEach((item) => {
      if (item.status == Status.CLICKED && !item.checked) {
        item.status = Status.NO_CHANGE;
      }
    });
  }

  //updating table data as per user changes
  private updateData(status: number, tooltipText: string) {
    this.disableAddButton = false;
    this.orders[this.selectedItemIndex].name = this.name;
    this.orders[this.selectedItemIndex].id = this.id;
    this.orders[this.selectedItemIndex].status = status;
    this.orders[this.selectedItemIndex].checked = false;
    this.orders[this.selectedItemIndex].tempStatus = status;
    this.orders[this.selectedItemIndex].tooltipText = tooltipText;
    this.name = '';
    this.id = '';
  }

  //disabling add or edit buttons
  private disableButtons() {
    if (this.orders.every((item) => item.checked === false)) {
      this.disableAddButton = false;
      this.disableEditButton = false;
    } else {
      this.disableAddButton = true;
      this.disableEditButton = true;
    }
  }

  //disabling name & id user fields
  private updateDisableInput(data: any) {
    if (data.checked == true) {
      this.disableInput = true;
    } else {
      this.disableInput = this.getCheckedDataCount() >= 1;
    }
  }

  //checked data showing in blue color
  private updateStatus(data: any) {
    if (data.checked == false) {
      this.orders[this.selectedItemIndex].status =
        this.orders[this.selectedItemIndex].tempStatus;
    } else {
      this.orders.map((item) => {
        if (item.checked) {
          item.status = Status.CLICKED;
        }
      });
    }
  }

  //gets the count of checked boxes
  private getCheckedDataCount() {
    let count = 0;
    this.orders.forEach((item) => {
      if (item.checked) {
        count = count + 1;
      }
    });
    return count;
  }

  //updating the tooltip for name field
  private getTooltip() {
    let tooltip = '';
    const tempName = this.name;
    if (this.name.length >= 10) {
      tooltip = tempName;
      this.name = this.name.substr(0, 9) + '....';
    }
    return tooltip;
  }

  //scrolling to the selected index
  private scrollToUpdatedData() {
    let selectedIndex = 0;
    this.orders.forEach((data, index) => {
      if (
        data.name.toLowerCase() === this.name.toLowerCase() &&
        data.id == this.id
      ) {
        selectedIndex = index;
      }
    });
    setTimeout(() => {
      this.onScrollToGeofence(selectedIndex);
    }, 100);
  }

  //updating to show Delete or Undo button
  private updateShowDeleteButton(index: number) {
    if (
      this.orders[index].status != Status.DELETE &&
      this.orders[index].status != 5 &&
      this.orders[index].status != 6 &&
      this.orders[index].status != 7
    ) {
      this.showDeleteBtn = true;
    } else {
      this.showDeleteBtn = false;
    }
  }

  //getting user data if already exists
  private checkEnteredData() {
    let userData: any;
    this.orders.forEach((data) => {
      if (
        data.name.toLowerCase() === this.name.toLowerCase() &&
        data.id == this.id
      ) {
        userData = data;
      }
    });
    if (
      userData !== undefined &&
      userData.name.toLowerCase() === this.name.toLowerCase() &&
      userData.id == Number(this.id)
    ) {
      const index = this.orders.findIndex(
        (data) => data.name.toLowerCase() === this.name.toLowerCase()
      );
      this.orders.splice(index, 1);
      userData.status = Status.CLICKED;
      // status = Status.CLICKED;
      return userData;
    } else if (userData === undefined) {
      let tooltip = this.getTooltip();
      userData = {};
      userData.name = this.name;
      userData.id = this.id;
      userData.tooltip = tooltip;
      userData.status = Status.NEW;
      //status = Status.NEW;
      return userData;
    }
  }
}
