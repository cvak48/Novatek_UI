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
    // const svgDoc: Document | null = this.element.nativeElement.contentDocument;

    // const rectElement = svgDoc?.getElementById('Plus_Sign');
    const rectElement = this.element.nativeElement.contentDocument?.getElementById('Plus_Sign');

    if (rectElement) {
      this.renderer.setStyle(rectElement, 'fill', 'green');
    }

    this.element.nativeElement.removeAttribute('data-toggle');
    // this.element.nativeElement.style.display = 'none';
    // this.renderer.setStyle(this.element, 'display', 'none' );

  }

}
