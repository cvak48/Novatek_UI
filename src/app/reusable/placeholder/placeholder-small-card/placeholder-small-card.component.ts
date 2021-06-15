import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-small-card',
  templateUrl: './placeholder-small-card.component.html',
  styleUrls: ['./placeholder-small-card.component.scss']
})
export class PlaceholderSmallCardComponent implements OnInit {
  @Input() textToShow: any;
  constructor() { }

  ngOnInit(): void {
  }

}
