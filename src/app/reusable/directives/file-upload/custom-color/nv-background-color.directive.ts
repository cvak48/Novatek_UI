import { StatusColor } from '../../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[nvBackgroundColor]'
})
export class NvBackgroundColorDirective implements OnInit, OnDestroy {
  @Input() color: StatusColor = StatusColor.Default;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'background-' + StatusColor[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'background-' + StatusColor[this.color]);
  }

}
