import { Component, OnInit, Output,EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'nova-login-footer',
  templateUrl: './nova-login-footer.component.html',
  styleUrls: ['./nova-login-footer.component.scss']
})
export class NovaLoginFooterComponent implements OnInit, AfterViewInit {
  @Output() langTxt = new EventEmitter();
  flagIcon = '../../../assets/icons/ico.flag.svg';
  @ViewChild('navBarFooter', {static: false, read: ElementRef}) public navBarFooter!: ElementRef<any>;
//   public Domain =[
//     {item: 'English'},
//     {item: 'French'}
// ]
public Domain =[
  'English',
  'French',
  'Chinese'
]
public selectedItems = 'English';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var navBarFooter = this.navBarFooter.nativeElement.offsetHeight;
    sessionStorage.setItem('navBarFooter', '56');
  }

  onChange(value:string) {
    this.selectedItems = value; 
    this.langTxt.emit(this.selectedItems);
}


}
