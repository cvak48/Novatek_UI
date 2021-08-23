import { Directive, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[nvSvgDecorator]'
})
export class SvgDecoratorDirective implements AfterViewInit {
  @Input() isDisable!: boolean;
  constructor(private renderer: Renderer2, private element: ElementRef<HTMLObjectElement>) { }


  @HostListener('click') onClick(): void {
    console.log('hi');
    
    // const svgPlusDoc = this.element.nativeElement.contentDocument?.documentElement;
    // svgPlusDoc?.setAttribute('data-toggle', 'dropdown');
    // this.element.nativeElement.contentDocument?.documentElement.setAttributeNS('http://www.w3.org/2000/svg', 'data-toggle', 'dropdown');
   }

  ngAfterViewInit(): void {
    const svgPlusDoc = this.element.nativeElement.contentDocument?.documentElement;
    svgPlusDoc?.setAttribute('data-toggle', 'dropdown');
    this.element.nativeElement.contentDocument?.documentElement.setAttributeNS('http://www.w3.org/2000/svg', 'data-toggle', 'dropdown');

    const cw = this.element.nativeElement?.contentWindow?.addEventListener("click", () => {
      console.log('hi');
      svgPlusDoc?.setAttribute('data-toggle', 'dropdown');
      this.element.nativeElement.contentDocument?.documentElement.setAttributeNS('http://www.w3.org/2000/svg', 'data-toggle', 'dropdown');
    });
    if (this.isDisable) {
    /**
     * Remove toggle to disable the dropdown menu
     */
      // this.element.nativeElement.removeAttribute('data-toggle');

    /**
     * directive logic ico.arrow.down
     */
      const doc: Document | null = this.element.nativeElement.contentDocument;
    // const rectElement = svgDoc?.getElementById('Plus_Sign');
    // const rectElement = this.element.nativeElement.contentDocument?.getElementById('Plus_Sign');

    // if (rectElement) {
    //   this.renderer.setStyle(rectElement, 'fill', 'green');
    // }
    

    

    // this.element.nativeElement.style.display = 'none';
    // this.renderer.setStyle(this.element, 'display', 'none' );


  }
  }

}
