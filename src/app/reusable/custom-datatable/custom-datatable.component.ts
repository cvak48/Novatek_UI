import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
// import {TableColumn} from "./TableColumn";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
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

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  apiData: any[] = [];
  selection = new SelectionModel<any>(true, []);
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
    if(data) {
    this.apiData = [...data];
    this.tableDataSource = new MatTableDataSource(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort): any {
    console.log("sort para > ", sortParameters);
    let abc;
    for(let i =0; i< this.tableColumns.length; i++) {
      if (this.tableColumns[i].name === sortParameters.active) {
        abc = this.tableColumns[i];
      }
      break;
    }
    // defining name of data property, to sort by, instead of column name
    //  sortParameters.active = this.tableColumns.find((column) =>  column.name === sortParameters.active).dataKey;
    /*const abc1 = this.tableColumns.find((column) => { 
      console.log('in column find', column.name , sortParameters.active)
      console.log("in find", column.name === sortParameters.active)
      return (column.name === sortParameters.active) ? column.dataKey.toString() : 'name'
    } );*/
    console.log('column find',abc)
    sortParameters.active = abc?.dataKey ?  abc?.dataKey : 'name'

    // console.log("abc >> ",abc )
    // sortParameters.active = "amount";

    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }

  onPageFired(event: any) {
   if ((this.currentRec <= ((event.pageIndex+1) * event.pageSize)) && this.currentRec <= this.totalRec) {
     for(let i=0; i<5 ; i++) {
      this.currentRec +=1;
      this.apiData.push({
        id: i+5,
        name: 'Vikash Gupta'+i,
        date: "03-30-2005",
        email: 'cikash@gmail.com',
        status: 'Completed'
      },
     )
     }
     
   this.setTableDataSource(this.apiData);
   }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.tableDataSource.data.forEach(row => this.selection.select(row));
  }
   

  logSelection(row: any) {
   console.log(row)
   console.log(!this.selection.isSelected(row))
    //this.selection.selected.forEach(s => console.log(s.name));
  }
}
