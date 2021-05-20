import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novatek-logo',
  templateUrl: './novatek-logo.component.html',
  styleUrls: ['./novatek-logo.component.scss']
})
export class NovatekLogoComponent implements OnInit {

  @Input() logosize = {
    width:'', height:''
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
