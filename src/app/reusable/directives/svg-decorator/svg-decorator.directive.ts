import { Directive, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[nvSvgDecorator]'
})
export class SvgDecoratorDirective implements AfterViewInit {
   // TODO: The style manipulation should be carried out in this directive
  @Input() isDisable!: boolean;
  constructor(private renderer: Renderer2, private element: ElementRef<HTMLObjectElement>) { }

  @HostListener('click') onClick(): void {       }

  ngAfterViewInit(): void {  }

}
