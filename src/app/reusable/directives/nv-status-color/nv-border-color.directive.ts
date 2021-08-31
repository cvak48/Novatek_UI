import { StatusType } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvBorderColor]'
})
export class NvBorderColorDirective {

  @Input() color: StatusType = StatusType.Default;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'border-' + StatusType[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'border-' + StatusType[this.color]);
  }

}
