import { Component, OnInit } from '@angular/core';

export enum NvComponent {
  // First: Add the name of your reusable component to this enum
  Search,
  NovaLogo

}

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  public selectedItem: NvComponent = NvComponent.Search;
  public nvComponentType = NvComponent;
   // Second: Provide input data for your reusable component here if needed
   // Search
   items: string[] = ['Tablet', 'Phone', 'Laptop', 'Keyboard'];
   // footer
  constructor() { }

  ngOnInit(): void {
  }
  public onItemClick(selectedItem: NvComponent): void {
    this.selectedItem = selectedItem;
  }
}