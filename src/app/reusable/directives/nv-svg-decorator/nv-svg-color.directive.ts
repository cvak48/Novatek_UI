import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[nvSvgColor]'
})
export class NvSvgColorDirective implements OnInit{
  /**
   * conditional directive
   */
  @Input() isDirectiveEnable: boolean = true;
  /**
   * when we have svg id as a reference to svg element and desired color, we can change the color
   */
  @Input() svgElementId!: string;
  @Input() color!: string;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    if (this.isDirectiveEnable) {
      this._setStyle();
    }

  }
  /**
   * when we have svg id as a reference to svg element and desired color, we can change the color
   */
  private _setStyle(): void {
    setTimeout(() => {
      const svgDoc = this.element?.nativeElement?.contentDocument;
      const checkMarkElement = svgDoc?.getElementById(`${this.svgElementId}`);
      if (checkMarkElement && this.color) {
        this.renderer.setStyle(checkMarkElement, 'fill', `${this.color}`);
      }
    }, 50);
  }
}
