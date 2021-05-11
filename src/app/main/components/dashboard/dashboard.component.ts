import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/services/common-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columns: any[] = ['id', 'name', 'year', 'salary', 'gender'];

  // TODO: replace this with real data from your application
  EXAMPLE_DATA = [
  {id: 1, name: 'Hydrogen', year: '1290', salary: 12030, gender: 'male'},
  {id: 2, name: 'Helium', year: '1295', salary: 12060, gender: 'Female'},
  {id: 3, name: 'Lithium', year: '1293', salary: 12010, gender: 'Female'},
  {id: 4, name: 'Beryllium', year: '1294', salary: 12040, gender: 'male'},
  {id: 5, name: 'Boron', year: '1293', salary: 12300, gender: 'male'},
  
];

  constructor() {
   }

  ngOnInit(): void {
  }

}