import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-rating',
  templateUrl: './nv-rating.component.html',
  styleUrls: ['./nv-rating.component.scss']
})
export class NVRatingComponent implements OnInit {

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
