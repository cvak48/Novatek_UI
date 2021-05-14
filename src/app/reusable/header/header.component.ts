import { Notification, Person } from '../../main/components/demo-page/demo-page.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() person!: Person;
  constructor() { }

  ngOnInit(): void {
  }

}

