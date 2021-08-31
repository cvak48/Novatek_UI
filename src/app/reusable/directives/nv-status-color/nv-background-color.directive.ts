import { StatusColor } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[nvBackgroundColor]'
})
export class NvBackgroundColorDirective {

  @Input() color!: StatusColor;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    console.log('dir >' + this.color);
    
    this.renderer.addClass(this.element.nativeElement, 'background-' + StatusColor[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'background-' + StatusColor[this.color]);
  }

}
