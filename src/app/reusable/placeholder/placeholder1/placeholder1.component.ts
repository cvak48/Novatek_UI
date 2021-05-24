import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder1',
  templateUrl: './placeholder1.component.html',
  styleUrls: ['./placeholder1.component.scss']
})
export class Placeholder1Component implements OnInit {
  @Input() smallCardData: any
  constructor() { }

  ngOnInit(): void {
  }

}
