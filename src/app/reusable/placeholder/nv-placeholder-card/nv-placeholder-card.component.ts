import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-placeholder-card',
  templateUrl: './nv-placeholder-card.component.html',
  styleUrls: ['./nv-placeholder-card.component.scss']
})
export class NvPlaceholderCardComponent implements OnInit {
 @Input() textToShow: any;
  constructor() { }

  ngOnInit(): void {
  }

}
