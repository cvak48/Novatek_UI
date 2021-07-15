import { Component, OnInit } from '@angular/core';
// import styles from '../../reusable/theme/base.scss';

@Component({
  selector: 'app-nova-sidenav',
  templateUrl: './nova-sidenav.component.html',
  styleUrls: ['./nova-sidenav.component.scss']
})
export class NovaSidenavComponent implements OnInit {

  public isExpanded:boolean = false;
  public totalNotifications: number = 4;
  /**
  * Side Menu list items
  */
  public sidenavItems = [
    {icon:'../../../assets/icons/ico.dashboard.svg', name:'Dashboard'},
    {icon:'../../../assets/icons/ico.register.svg', name:'New'},
    {icon:'../../../assets/icons/ico.masterlist.svg', name:'Master List'},
    {icon:'../../../assets/icons/ico.laboperations.svg', name:'Lab Operations'},
    {icon:'../../../assets/icons/ico.workload.svg', name:'Workload'},
    {icon:'../../../assets/icons/ico.testmethodmanagement.svg', name:'Test Method Management'},
    {icon:'../../../assets/icons/ico.inventory.svg', name:'Inventory'},
    {icon:'../../../assets/icons/ico.statisticalanalysis.svg', name:'Statistical Analysis'},
    {icon:'../../../assets/icons/ico.reports.svg', name:'Reports'},
    {icon:'../../../assets/icons/ico.sysadminadministration.svg', name:'System Administration'}
    
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Expands the side menu, if it is closed
  */
  public checkExpand() {
    this.isExpanded = !this.isExpanded;
  }

  /**
  * Closes the side menu, if it is open
  */
  public closeSideNav() {
    this.isExpanded = false;
  }

}
