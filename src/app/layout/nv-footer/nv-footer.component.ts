import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-footer',
  templateUrl: './nv-footer.component.html',
  styleUrls: ['./nv-footer.component.scss']
})
export class NvFooterComponent implements OnInit {
  flagIcon = "../../../assets/icons/ico.flag.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
