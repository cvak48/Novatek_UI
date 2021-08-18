import { StatusColor } from '../../../../model/data-model';
import { Directive, Renderer2, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[nvBorderColor]'
})
export class NvBorderColorDirective implements OnInit, OnDestroy {

  @Input() color: StatusColor = StatusColor.Default;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'border-' + StatusColor[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'border-' + StatusColor[this.color]);
  }

}
