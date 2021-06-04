import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder-Bigcard',
  templateUrl: './placeholderBigCard.component.html',
  styleUrls: ['./placeholderBigCard.component.scss']
})
export class PlaceholderBigCardComponent implements OnInit {
  @Input() smallCardData: any
  constructor() { }

  ngOnInit(): void {
  }

}
