import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-slider-toggle',
  templateUrl: './nv-slider-toggle.component.html',
  styleUrls: ['./nv-slider-toggle.component.scss']
})
export class NvSliderToggleComponent implements OnInit {
  checked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
