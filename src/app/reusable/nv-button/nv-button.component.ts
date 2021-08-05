import { ButtonType, ButtonThemeColor } from './../../model/data-model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-nv-button',
  templateUrl: './nv-button.component.html',
  styleUrls: ['./nv-button.component.scss']
})
export class NvButtonComponent implements OnInit {
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();
  @Input() public label: string = 'Default';
  @Input() public type: ButtonType = ButtonType.Stroked;
  @Input() public color: ButtonThemeColor = ButtonThemeColor.Basic;
  public buttonTypes = ButtonType;
  public themeColors = ButtonThemeColor;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClick.emit();
  }

}
