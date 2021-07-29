import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nv-placeholder-Bigcard',
  templateUrl: './nv-placeholderBigCard.component.html',
  styleUrls: ['./nv-placeholderBigCard.component.scss']
})
export class NvPlaceholderBigCardComponent implements OnInit {
  @Input() smallCardData: any
  constructor() { }

  ngOnInit(): void {
  }

}
