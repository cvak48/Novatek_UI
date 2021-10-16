import { NvUserColor } from './../../local-data/view-model';
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[nvBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input() color!: NvUserColor;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, ('background-' + NvUserColor[this.color]));
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, ('background-' + NvUserColor[this.color]));
  }

}
