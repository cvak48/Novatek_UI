import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-nv-text-area',
  templateUrl: './nv-text-area.component.html',
  styleUrls: ['./nv-text-area.component.scss']
})
export class NVTextAreaComponent implements OnInit {

  @Input() public inputPlaceHolder: string = 'Enter Input';
  @Input() public disableInput: boolean = false;
  @Input() public textareaLabel: string = 'Username';
  @Input() public secondaryLabel: string = '';
  @Input() public status: string = '';
  @Input() public sharedVar: string = '';

  @Output() public eventName = new EventEmitter<string>();
  @Output() public sharedVarChange = new EventEmitter();

  public errorLabel: string = 'is-notValid';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChange) {
    if (this.status == 'is-valid') {
      this.errorLabel = '';
    }
  }

  emitEvent(value: string) {
    this.eventName.emit(value);
  }

  change(value: string) {
    this.sharedVarChange.emit(value);
  }

}
