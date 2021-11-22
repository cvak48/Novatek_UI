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
  showPanel1: boolean = false;
  showPanel2: boolean = false;
  showPanel3: boolean = false;
  showPanel4: boolean = false;
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
    this.showPanel1 = true;
  }

  panelClicked(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='2';
        this.showPanel1 = true;
        this.showPanel2 = true;
        this.isLeftVisible = !this.isLeftVisible
        break;
      case '2':
        this.showPanel='3';
        this.showPanel1 = true;
        this.showPanel2 = true;
        this.showPanel3 = true;
        break;
      case '3':
          this.showPanel='4';
        this.showPanel1 = false;
        this.showPanel2 = true;
        this.showPanel3 = true;
        this.showPanel4 = true;
        break;
      case '4':
          this.showPanel='1';
        this.showPanel1 = true;
        this.showPanel2 = false;
        this.showPanel3 = false;
        this.showPanel4 = false;
        break;
    }
  }

  closePanel(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='0';
        this.isLeftVisible = !this.isLeftVisible
        this.showPanel1 = false;
          this.showPanel2 = false;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '2':
        this.showPanel='1';
        this.showPanel1 = true;
          this.showPanel2 = false;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '3':
          this.showPanel='2';
          this.showPanel1 = true;
          this.showPanel2 = true;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '4':
          this.showPanel='3';
          this.showPanel1 = false;
          this.showPanel2 = true;
          this.showPanel3 = true;
          this.showPanel4 = false;
        break;
    }
  }

}
