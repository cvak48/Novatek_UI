import { FieldStatusStyle, FieldStatusType } from './../../../model/data-model';
import { Directive, Input, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nvStyleColor]'
})
export class NvStyleColorDirective implements OnInit, OnDestroy {
  @Input() style!: FieldStatusStyle;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    console.log('dir >' + this.style);
    if (this.style?.background) {
      this.renderer.addClass(this.element.nativeElement, 'background-' + FieldStatusType[this.style.background]);
    }
    if (this.style?.border) {
      this.renderer.addClass(this.element.nativeElement, 'border-' + FieldStatusType[this.style.border]);
    }
    if (this.style?.text) {
      this.renderer.addClass(this.element.nativeElement, 'text-' + FieldStatusType[this.style.text]);
    }

  }

  ngOnDestroy(): void {
    if (this.style?.background) {
      this.renderer.removeClass(this.element.nativeElement, 'background-' + FieldStatusType[this.style.background]);
    }
    if (this.style?.border) {
      this.renderer.removeClass(this.element.nativeElement, 'border-' + FieldStatusType[this.style.border]);
    }
    if (this.style?.text) {
      this.renderer.removeClass(this.element.nativeElement, 'text-' + FieldStatusType[this.style.text]);
    }
  }

}
