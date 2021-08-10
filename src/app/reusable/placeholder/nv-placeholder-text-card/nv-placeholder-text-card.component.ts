import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-placeholder-text-card',
  templateUrl: './nv-placeholder-text-card.component.html',
  styleUrls: ['./nv-placeholder-text-card.component.scss']
})
export class NvPlaceholderTextCardComponent implements OnInit {
  @Input() textData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
