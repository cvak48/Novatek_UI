import { Message } from './../../model/data-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-popup-message',
  templateUrl: './nv-popup-message.component.html',
  styleUrls: ['./nv-popup-message.component.scss']
})
export class NvPopupMessageComponent implements OnInit {
  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
    this._initializeMessage();
  }

 private _initializeMessage(): void {
      this.message.header = ' was this what you request?';
      this.message.content = 'detail for this prop';
  }

}
