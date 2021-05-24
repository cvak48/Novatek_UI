import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'placeholder-banner',
  templateUrl: './placeholder-banner.component.html',
  styleUrls: ['./placeholder-banner.component.scss']
})
export class PlaceholderBannerComponent implements OnInit {
  @Input() bannerTextData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
