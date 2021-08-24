import { Component, Input, OnInit, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nv-input',
  templateUrl: './nv-input.component.html',
  styleUrls: ['./nv-input.component.scss']
})
export class NvInputComponent implements OnInit {
  
  @Input()  public inputType: string = 'text';
  @Input()  public inputPlaceHolder: string = 'Enter Input';
  @Input()  public disableInput:boolean = false;
  @Input()  public label:string = 'Username';
  @Input()  public secondaryLabel:string = '';
  @Input()  public status:string = '';
  @Input()  public sharedVar:string = '';

  @Output() public eventName = new EventEmitter<string>();
  @Output() public sharedVarChange = new EventEmitter();

  public errorLabel:string = 'is-notValid';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChange) {
    if(this.status == 'is-valid') {
      this.errorLabel = '';
    }
  }

  emitEvent(value:string) {
    this.eventName.emit(value);
  }

  change(value:string) {
    this.sharedVarChange.emit(value);
  }

}
