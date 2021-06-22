import { Component, OnInit } from '@angular/core';
// import styles from '../../reusable/theme/base.scss';

@Component({
  selector: 'app-nova-sidenav',
  templateUrl: './nova-sidenav.component.html',
  styleUrls: ['./nova-sidenav.component.scss']
})
export class NovaSidenavComponent implements OnInit {

  public isExpanded:boolean = false;
  public sidenavItems = [
    {icon:'../../../assets/icons/ico.dashboard.svg', name:'Dashboard'},
    {icon:'../../../assets/icons/ico.register.svg', name:'New'},
    {icon:'../../../assets/icons/ico.masterlist.svg', name:'Master List'},
    {icon:'../../../assets/icons/ico.laboperations.svg', name:'Lab Operations'},
    {icon:'../../../assets/icons/ico.workload.svg', name:'Workload'},
    {icon:'../../../assets/icons/ico.testmethodmanagement.svg', name:'Test Method Management'},
    {icon:'../../../assets/icons/ico.inventory.svg', name:'Inventory'},
    {icon:'../../../assets/icons/ico.statisticalanalysis.svg', name:'Statistical Analysis'}
    
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public checkExpand() {
    this.isExpanded = !this.isExpanded;
  }

  public closeSideNav() {
    this.isExpanded = false;
  }

}
