import { StatusColor } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvBorderColor]'
})
export class NvBorderColorDirective {

  @Input() color: StatusColor = StatusColor.Default;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'border-' + StatusColor[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'border-' + StatusColor[this.color]);
  }

}
