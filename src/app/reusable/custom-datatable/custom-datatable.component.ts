import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
// import {TableColumn} from "./TableColumn";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { TableColumn } from './table-column.model';
import { ThrowStmt } from '@angular/compiler';

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

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() rowActionIcon: string = '';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  apiData: any[] = [];
  constructor() {
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }


  setTableDataSource(data: any) {
    this.apiData = [...data];
    this.tableDataSource = new MatTableDataSource(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    console.log("sort para > ", sortParameters);
    
    // defining name of data property, to sort by, instead of column name
    //  sortParameters.active = this.tableColumns.find((column) =>  column.name === sortParameters.active).dataKey;
    const abc = this.tableColumns.find((column) => {
      
      return (column.name === sortParameters.active) ? column.dataKey.toString() : 'amount'
    } );
    sortParameters.active = abc?.dataKey ?  abc?.dataKey : 'amount'

    // console.log("abc >> ",abc )
    // sortParameters.active = "amount";

    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }

  onPageFired(event: any) {
    console.log(event);
   if ((5 % event.pageIndex) !== 0) {
     console.log('make api call');
     this.apiData.push({
      id: 8,
      name: 'Vikash Gupta',
      date: "03-30-2005",
      email: 'cikash@gmail.com',
      status: 'Completed'
    },
   )
   this.setTableDataSource(this.apiData);
   }
  }

}
