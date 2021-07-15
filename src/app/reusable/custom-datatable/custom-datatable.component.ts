import { FilterAllPipe } from './../pipes/filters/filterAll/filter-all.pipe';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import {TableColumn} from "./TableColumn";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { TableColumn } from './table-column.model';
import { ThrowStmt } from '@angular/compiler';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.scss']
})
export class CustomDatatableComponent implements OnInit, AfterViewInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[] = [];

  @ViewChild(MatPaginator, { static: false })
  matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  matSort!: MatSort;
  totalRec = 26;
  currentRec = 5;

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
  isAdvance: boolean   = mockSearchComponent().isAdvance ;
  hideMenu: boolean    = mockSearchComponent().hideMenu ;
  searchableRefList: any[] = mockSearchComponent().searchableRefList ;

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    if (data) {
    this.tableTestData = data;
    this.setTableDataSource(data);
    } else {
      this.tableTestData = []
    }
  }

  apiData: any[] = [];
  selection = new SelectionModel<any>(true, []);
  constructor() {  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }
  }

  /**
   * This method is required in order to make pagination work with *ngIf
   */
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }

/**
 * 
 * @param data 
 * This method set the data to material table datasource
 */
  setTableDataSource(data: any) {
    if (data) {
      this.apiData = [...data];
      this.tableDataSource = new MatTableDataSource(data);
      this.tableDataSource.paginator = this.matPaginator;
      this.tableDataSource.sort = this.matSort;
    }
  }

  /**
   * 
   * @param data 
   * This method is user to provide filtered data to table
   */
  onItemsFilter(data: any): any {
      if (data) {
      this.setTableDataSource(data);
    }
  }

  /**
   * 
   * @param sortParameters 
   * This method is used to apply sorting on all columns in table
   */
  sortTable(sortParameters: Sort): any {
    let abc;
    for (let i = 0; i < this.tableColumns.length; i++) {
      if (this.tableColumns[i].name === sortParameters.active) {
        abc = this.tableColumns[i];
      }
      break;
    }
    sortParameters.active = abc?.dataKey ? abc?.dataKey : 'name'
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }

  /**
   * 
   * @param event 
   * This method is executed when user moves to any page using pagination
   */
  onPageFired(event: any) {
    if ((this.currentRec <= ((event.pageIndex + 1) * event.pageSize)) && this.currentRec <= this.totalRec) {
      for (let i = 0; i < 5; i++) {
        this.currentRec += 1;
        this.apiData.push({
          id: i + 5,
          name: 'Vikash Gupta' + i,
          date: "03-30-2005",
          email: 'cikash@gmail.com',
          status: 'Completed'
        },
        )
      }

      this.setTableDataSource(this.apiData);
    }
  }

  /**
   * 
   * This method gives boolen value to know that all checkboxes are checked or not
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * 
   * This method is executed hen user click on checkbox in table heading row
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableDataSource.data.forEach(row => this.selection.select(row));
  }


  logSelection(row: any) {
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
    searchableRefList: ['name','date', 'email', 'status', 'checked'],
  }
  return inputData;
}
