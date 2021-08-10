import { Component, OnInit, Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'nova-login-footer',
  templateUrl: './nova-login-footer.component.html',
  styleUrls: ['./nova-login-footer.component.scss']
})
export class NovaLoginFooterComponent implements OnInit {
  @Output() langTxt = new EventEmitter();
  flagIcon = '../../../assets/icons/ico.flag.svg';
  public Domain =[
    {item: 'English'},
    {item: 'French'}
]
public selectedItem = 'English';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value:string) {
    this.selectedItem = value; 
    this.langTxt.emit(this.selectedItem);
}


}
