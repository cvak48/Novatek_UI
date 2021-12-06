import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.scss']
})
export class SliderViewComponent implements OnInit {
  @ViewChild('panelDivHeight', {static: false, read: ElementRef}) public panelDivHeight!: ElementRef<any>;
  title: string = '';
  isLeftVisible = true;
  showPanel: string = '1';
  showPanel1: boolean = false;
  showPanel2: boolean = false;
  showPanel3: boolean = false;
  showPanel4: boolean = false;
  public screenHeight: any;
  headerTop: any;
  middleMenu: any;
  navBarFooter: any;
  extraHeight: any;
  panelTableHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.showPanel1 = true;

    this.headerTop = sessionStorage.getItem('headerTop');
    this.middleMenu = sessionStorage.getItem('middleMenu');
    this.navBarFooter = 56;
    this.extraHeight = (+this.headerTop) + (+this.middleMenu) + (+this.navBarFooter) + 77;

    this.screenHeight = +window.innerHeight;
    console.log('screenHeight', this.screenHeight)
    console.log('headerTop >> ',sessionStorage.getItem('headerTop'));
    console.log('middleMenu >> ',sessionStorage.getItem('middleMenu'));
    console.log('navBarFooter >> ',56);
    console.log('extraHeight >> ', this.extraHeight);
    this.panelTableHeight = this.screenHeight - this.extraHeight;
    console.log('panelTableHeight >>> ', this.panelTableHeight)
    // this.panelDivHeight = this.panelTableHeight;
  }
  panelClicked(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='2';
        this.showPanel1 = true;
        this.showPanel2 = true;
        this.isLeftVisible = !this.isLeftVisible
        break;
      case '2':
        this.showPanel='3';
        this.showPanel1 = true;
        this.showPanel2 = true;
        this.showPanel3 = true;
        break;
      case '3':
          this.showPanel='4';
        this.showPanel1 = false;
        this.showPanel2 = true;
        this.showPanel3 = true;
        this.showPanel4 = true;
        break;
      case '4':
          this.showPanel='1';
        this.showPanel1 = true;
        this.showPanel2 = false;
        this.showPanel3 = false;
        this.showPanel4 = false;
        break;
    }
  }

  closePanel(panel: string): void{
    switch(panel){
      case '1':
        this.showPanel='0';
        this.isLeftVisible = !this.isLeftVisible
        this.showPanel1 = false;
          this.showPanel2 = false;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '2':
        this.showPanel='1';
        this.showPanel1 = true;
          this.showPanel2 = false;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '3':
          this.showPanel='2';
          this.showPanel1 = true;
          this.showPanel2 = true;
          this.showPanel3 = false;
          this.showPanel4 = false;
        break;
      case '4':
          this.showPanel='3';
          this.showPanel1 = true;
          this.showPanel2 = true;
          this.showPanel3 = true;
          this.showPanel4 = false;
        break;
    }
  }

}
