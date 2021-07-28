import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nv-placeholder-banner',
  templateUrl: './nv-placeholder-banner.component.html',
  styleUrls: ['./nv-placeholder-banner.component.scss']
})
export class NvPlaceholderBannerComponent implements OnInit {
  @Input() bannerTextData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
