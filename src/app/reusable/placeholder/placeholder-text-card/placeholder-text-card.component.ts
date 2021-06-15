import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-text-card',
  templateUrl: './placeholder-text-card.component.html',
  styleUrls: ['./placeholder-text-card.component.scss']
})
export class PlaceholderTextCardComponent implements OnInit {
  @Input() textData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
