import { ButtonThemeColor } from './../../model/data-model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nv-button',
  templateUrl: './nv-button.component.html',
  styleUrls: ['./nv-button.component.scss']
})
export class NvButtonComponent implements OnInit {
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();
  // TODO: There should be an object for button props like Button
  @Input() public label: string = 'Default';
  @Input() public color: ButtonThemeColor = ButtonThemeColor.Basic;
  @Input()  public disableButton:boolean = false;
  @Input()
  disabled: boolean = false;
  public themeColors = ButtonThemeColor;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClick.emit();
  }

}
