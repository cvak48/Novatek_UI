import { Component, OnInit } from '@angular/core';

/**
 * The Sidenav component
 *
 * This component will be used toto expand and close the sidenav
 * 
 * List of components can we navigated from sidenav menu
 */
@Component({
  selector: 'app-nv-sidenav',
  templateUrl: './nv-sidenav.component.html',
  styleUrls: ['./nv-sidenav.component.scss']
})
export class NvSidenavComponent implements OnInit {
  /**
  * isExpand variable state will define the sidenav expanded or not
  */
  public isExpanded:boolean = false;
  /**
  * totalNotifications variable will define the number of notifications received to the user
  */
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

  /**
  * Dependency injection will be added into the constructor
  */
  constructor() { }

  /**
  * Methods and variables declrations will be happend on component load
  */
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
