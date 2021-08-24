import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
  isLeftVisible = true;

  showPanel: string = '1';
  constructor() { }

  ngOnInit(): void {
  }

  panelClicked(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='2';
        break;
      case '2':
        this.showPanel='3';
        break;
      case '3':
          this.showPanel='1';
        break;
    }
   // this.showPanel = panel;
    console.log('panel clicked', panel);
    this.isLeftVisible = !this.isLeftVisible
  }

}
