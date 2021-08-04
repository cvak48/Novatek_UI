import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-sub-menu',
  templateUrl: './nv-sub-menu.component.html',
  styleUrls: ['./nv-sub-menu.component.scss']
})
export class NvSubMenuComponent implements OnInit {
  menuItems = ['menu item 1', 'menu item 2'];
  siteItems = ['site item 1', 'site item 2'];
  actionItems = ['action 1', 'action 2'];
  constructor() { }

  ngOnInit(): void {
  }

}
