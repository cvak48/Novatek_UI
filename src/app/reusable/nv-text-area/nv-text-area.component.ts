import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-text-area',
  templateUrl: './nv-text-area.component.html',
  styleUrls: ['./nv-text-area.component.scss']
})
export class NVTextAreaComponent implements OnInit {

  @Input() textareaLabel: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
