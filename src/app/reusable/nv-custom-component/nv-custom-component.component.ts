import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nv-custom-component',
  templateUrl: './nv-custom-component.component.html',
  styleUrls: ['./nv-custom-component.component.scss']
})
export class NvCustomComponentComponent implements OnInit {
// checkBox
checked = false;
indeterminate = false;
labelPosition: 'before' | 'after' = 'after';
disabled = false;
// slider
autoTicks = false;
// disabled = false;
invert = false;
max = 100;
min = 0;
showTicks = false;
step = 1;
thumbLabel = false;
value = 0;
vertical = false;
tickInterval = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }



}
