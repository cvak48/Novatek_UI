import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrls: ['./ratting.component.scss']
})
export class RattingComponent implements OnInit {

  @Input() type: string = '';

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countStar(star: number) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
