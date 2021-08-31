import { StatusType } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvBackgroundColor]'
})
export class NvBackgroundColorDirective {

  @Input() color!: any;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    console.log('dir >' + this.color);
    this.renderer.addClass(this.element.nativeElement, 'background-' + StatusType[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'background-' + StatusType[this.color]);
  }

}
