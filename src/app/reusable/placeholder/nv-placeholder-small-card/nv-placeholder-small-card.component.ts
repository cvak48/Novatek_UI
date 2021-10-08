import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-placeholder-small-card',
  templateUrl: './nv-placeholder-small-card.component.html',
  styleUrls: ['./nv-placeholder-small-card.component.scss']
})
export class NvPlaceholderSmallCardComponent implements OnInit {
  @Input() textToShow: any;
  constructor() { }

  ngOnInit(): void {
  }

}
