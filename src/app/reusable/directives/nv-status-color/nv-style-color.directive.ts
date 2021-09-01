import { StyleType, StatusType } from './../../../model/data-model';
import { Directive, Input, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nvStyleColor]'
})
export class NvStyleColorDirective implements OnInit, OnDestroy {
  @Input() styleType!: StyleType;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    console.log('dir >' + this.styleType);
    if (this.styleType?.background) {
      this.renderer.addClass(this.element.nativeElement, 'background-' + StatusType[this.styleType.background]);
    }
    if (this.styleType?.border) {
      this.renderer.addClass(this.element.nativeElement, 'border-' + StatusType[this.styleType.border]);
    }
    if (this.styleType?.text) {
      this.renderer.addClass(this.element.nativeElement, 'text-' + StatusType[this.styleType.text]);
    }

  }

  ngOnDestroy(): void {
    if (this.styleType?.background) {
      this.renderer.removeClass(this.element.nativeElement, 'background-' + StatusType[this.styleType.background]);
    }
    if (this.styleType?.border) {
      this.renderer.removeClass(this.element.nativeElement, 'border-' + StatusType[this.styleType.border]);
    }
    if (this.styleType?.text) {
      this.renderer.removeClass(this.element.nativeElement, 'text-' + StatusType[this.styleType.text]);
    }
  }

}
