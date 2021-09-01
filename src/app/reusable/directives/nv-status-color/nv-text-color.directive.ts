import { StatusType } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvTextColor]'
})
export class NvTextColorDirective {

  @Input() color: StatusType = StatusType.Normal;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'text-' + StatusType[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'text-' + StatusType[this.color]);
  }

}
