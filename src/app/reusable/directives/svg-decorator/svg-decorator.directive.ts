import { Directive, Input, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nvSvgDecorator]'
})
export class SvgDecoratorDirective implements AfterViewInit {
  @Input() isDisable!: boolean;
  constructor(private renderer: Renderer2, private element: ElementRef<HTMLObjectElement>) { }

  ngAfterViewInit(): void {
    if (this.isDisable) {

    }
    /**
     * directive logic ico.arrow.down
     */
    const svgDoc = this.element.nativeElement.contentDocument;

    const rectElement = svgDoc?.getElementById('Plus_Sign');

    if (rectElement) {
      console.log(rectElement);
      rectElement.setAttribute('class', 'svg-color');
      // this.renderer.addClass(rectElement, 'svg-color');

      // this.renderer.setStyle(rectElement, 'fill', 'green');
    }

  }

}
