import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-checkbox',
  templateUrl: './nv-checkbox.component.html',
  styleUrls: ['./nv-checkbox.component.scss']
})
export class NvCheckboxComponent implements OnInit {
  @Input() label: string = 'Im a checkbox';
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
