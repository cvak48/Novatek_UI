import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-footer',
  templateUrl: './nova-footer.component.html',
  styleUrls: ['./nova-footer.component.scss']
})
export class NovaFooterComponent implements OnInit {
  flagIcon = "../../../assets/icons/ico.flag.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
