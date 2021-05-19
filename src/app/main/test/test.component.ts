import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/reusable/custom-datatable/table-column.model';
import {CurrencyPipe, DecimalPipe, PercentPipe} from "@angular/common";
import {Sort} from "@angular/material/sort";
import { Order } from './order';
import * as moment from 'moment';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [CurrencyPipe, DecimalPipe, PercentPipe]
})
export class TestComponent implements OnInit {

  orders: Order[] = [];
  ordersTableColumns: TableColumn[] = [];

  constructor(private currencyPipe: CurrencyPipe,
              private decimalPipe: DecimalPipe,
              private percentPipe: PercentPipe) {
  }

  ngOnInit(): void {
    this.initializeColumns();
    this.orders = this.getOrders();
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
    ];
  }

  getOrders(): any[] {
    return [
      {
        id: 1,
        name: 'John Liiki',
        date: moment("12-25-1995", "MM-DD-YYYY"),
        email: 'john@yahoo.com',
        status: 'No'
      },
      {
        id: 2,
        name: 'Rock',
        date: moment("06-13-1999", "MM-DD-YYYY"),
        email: 'rock@gmail.com',
        status: 'Past Due'
      },
      {
        id: 3,
        name: 'Tom Cruise',
        date: moment("04-27-2001", "MM-DD-YYYY"),
        email: 'tomcruise@yahoo.com',
        status: 'Pending'
      },
      {
        id: 4,
        name: 'Sumit Gupta',
        date: moment("03-30-2005", "MM-DD-YYYY"),
        email: 'sumit@gmail.com',
        status: 'Completed'
      },
      {
        id: 5,
        name: 'Nicole Kidman',
        date: moment("02-22-2007", "MM-DD-YYYY"),
        email: 'nicole@redifmail.com',
        status: 'Yes'
      }
    ];
  }
}
