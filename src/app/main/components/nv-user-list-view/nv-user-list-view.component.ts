import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Order } from 'src/app/reusable/test/order';
import { ApplicationService } from 'src/app/services/application.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'nv-app-user-list-view',
  templateUrl: './nv-user-list-view.component.html',
  styleUrls: ['./nv-user-list-view.component.scss']
})
export class NvUserListViewComponent implements OnInit {
  isLeftVisible = true;
  orders: Order[] = [];
  showPanel: string = '1';
  columns: string[] = ['name', 'date', 'email'];
  sub = new Subscription();
  title: string = '';
  constructor(private dataService: DataService,
              private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getData().subscribe((data) => { 
      this.orders = data;
    });
    this.sub.unsubscribe();
    this.applicationService.userBtnAction
           .subscribe(res => {
              this.title = (res == 'new' ? 'New User' : 'Edit User') ;
           });
  }

  panelClicked(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='2';
        this.isLeftVisible = !this.isLeftVisible
        break;
      case '2':
        this.showPanel='3';
        break;
      case '3':
          this.showPanel='1';
        break;
    }
  }

  closePanel(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='0';
        this.isLeftVisible = !this.isLeftVisible
        break;
      case '2':
        this.showPanel='1';
        break;
      case '3':
          this.showPanel='2';
        break;
    }
  }

}
