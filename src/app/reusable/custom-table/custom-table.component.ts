import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/main/test/order';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  orders: Order[] = [];
  ordersData: Order[] = [];
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  columns = ['name', 'date', 'email', 'status', 'attachments'];
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 7;
  public labels: any = {
    previousLabel: 'Prev',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
};
  constructor(private dataService: DataService) {
     }

  ngOnInit(): void {
    this.dataService.getTableData()
    .subscribe(data => {
      this.orders = data;
      this.ordersData = data;
      this.count = this.orders.length;
    }); 
  }
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
   this.orders = this.ordersData.filter(order => {
     let hasData = false;
     for (let i=0; i< this.columns.length; i++) {
      if (String((<any>order)[this.columns[i]]).toLowerCase().includes(filterValue)) {
        hasData = true;
        break;
      }
     }
      return hasData? order: '';
    });
    this.count = this.orders.length;
  }

  retrieveTutorials(): void {
    /*const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.tutorialService.getAll(params)
      .subscribe(
        response => {
          const { tutorials, totalItems } = response;
          this.tutorials = tutorials;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });*/
  }

  handlePageChange(event: any): void {
    this.page = event;
   // this.retrieveTutorials();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    //this.retrieveTutorials();
  }

  checkAllCheckBox(ev: any) {
		this.orders.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.orders.every(p => p.checked);
	}
}
