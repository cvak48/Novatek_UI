import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nova-login-footer',
  templateUrl: './nova-login-footer.component.html',
  styleUrls: ['./nova-login-footer.component.scss']
})
export class NovaLoginFooterComponent implements OnInit {
  flagIcon = '../../../assets/icons/ico.flag.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
