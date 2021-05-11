import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-nova-data-table',
  templateUrl: './nova-data-table.component.html',
  styleUrls: ['./nova-data-table.component.scss'],
})
export class NovaDataTableComponent implements OnInit {
  @Input('columns') columns: any;
  @Input('dataValue') dataValue: any;
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: any[] = [];
  dataSource: any = [];
  avlAllData: any;

  constructor() {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.EXAMPLE_DATA);
    this.displayedColumns = [...this.columns];
    this.dataSource = this.dataValue;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
