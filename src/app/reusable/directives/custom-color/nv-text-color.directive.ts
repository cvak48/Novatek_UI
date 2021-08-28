import { StatusColor } from '../../../model/data-model';
import { Directive, OnInit, OnDestroy, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvTextColor]'
})
export class NvTextColorDirective implements OnInit, OnDestroy {

  @Input() color: StatusColor = StatusColor.Default;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'text-' + StatusColor[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'text-' + StatusColor[this.color]);
  }

}
