import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[nvSvgColor]'
})
export class NvSvgColorDirective implements OnInit{
  @Input() svgElementId!: string;
  @Input() color!: string;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      const svgDoc = this.element?.nativeElement?.contentDocument;
      const checkMarkElement = svgDoc?.getElementById(`${this.svgElementId}`);
      if (checkMarkElement && this.color) {
        this.renderer.setStyle(checkMarkElement, 'fill', `${this.color}`);
      }
    }, 100);

  }
}
