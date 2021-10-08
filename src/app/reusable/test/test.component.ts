import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/reusable/nv-custom-datatable/table-column.model';
import {CurrencyPipe, DecimalPipe, PercentPipe} from "@angular/common";
import {Sort} from "@angular/material/sort";
import { Order } from './order';
import * as moment from 'moment';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [CurrencyPipe, DecimalPipe, PercentPipe]
})
export class TestComponent implements OnInit,OnDestroy {

  orders: Order[] = [];
  ordersTableColumns: TableColumn[] = [];
  dataSub: Subscription = new Subscription;
  constructor(private currencyPipe: CurrencyPipe,
              private decimalPipe: DecimalPipe,
              private percentPipe: PercentPipe,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.initializeColumns();
    this.dataSub = this.dataService.getTableData()
      .subscribe(data => {
        this.orders = data;
      }); 
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction == 'asc') {
     return this.orders = this.orders.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
    } else if (sortParameters.direction === 'desc') {
     return this.orders = this.orders.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
    } else {
      return this.orders = this.getOrders();
    }
  }

  removeOrder(order: Order) {
    this.orders = this.orders.filter(item => item.id !== order.id)
  }

  initializeColumns(): void {
    this.ordersTableColumns = [
      {
        name: 'Select',
        dataKey: 'select',
        position: 'left',
        isSortable: false
      },
      {
        name: 'Name',
        dataKey: 'name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Date',
        dataKey: 'date',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Email',
        dataKey: 'email',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Status',
        dataKey: 'status',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Attachments',
        dataKey: 'attachments',
        position: 'left',
        isSortable: true
      },
    ];
  }

  getOrders(): any[] {
    return [
      {
        id: 1,
        name: 'John Liiki',
        date: moment("12-25-1995", "MM-DD-YYYY"),
        email: 'john@yahoo.com',
        status: 'No',
        attachments: [{
          name: 'file1'
        }]
      },
      {
        id: 2,
        name: 'Rock',
        date: moment("06-13-1999", "MM-DD-YYYY"),
        email: 'rock@gmail.com',
        status: 'Past Due',
        attachments: [{
          name: 'file1'
        },
        {
          name: 'file2'
        }]
      },
      {
        id: 3,
        name: 'Tom Cruise',
        date: moment("04-27-2001", "MM-DD-YYYY"),
        email: 'tomcruise@yahoo.com',
        status: 'Pending',
        attachments: [{
          name: 'file1'
        },
       ]
      },
      {
        id: 4,
        name: 'Sumit Gupta',
        date: moment("03-30-2005", "MM-DD-YYYY"),
        email: 'sumit@gmail.com',
        status: 'Completed',
        attachments: [{
          name: 'file1'
        },
        {
          name: 'file2'
        }]
      },
      {
        id: 5,
        name: 'Nicole Kidman',
        date: moment("02-22-2007", "MM-DD-YYYY"),
        email: 'nicole@redifmail.com',
        status: 'Yes',
        attachments: [{
          name: 'file1'
        },
        {
          name: 'file2'
        }]
      }
    ];
  }
}
