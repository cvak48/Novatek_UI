import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-card',
  templateUrl: './placeholder-card.component.html',
  styleUrls: ['./placeholder-card.component.scss']
})
export class PlaceholderCardComponent implements OnInit {
 @Input() textToShow: any;
  constructor() { }

  ngOnInit(): void {
  }

}
