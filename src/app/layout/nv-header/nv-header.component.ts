import { Person } from '../../main/components/demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-header',
  templateUrl: './nv-header.component.html',
  styleUrls: ['./nv-header.component.scss']
})
export class NvHeaderComponent implements OnInit {
  @Input() person!: Person;
  logoSize = {
    width:'160', height:'40'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
