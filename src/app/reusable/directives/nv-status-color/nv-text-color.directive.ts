import { FieldStatusType } from './../../../model/data-model';
import { Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[nvTextColor]'
})
export class NvTextColorDirective implements OnInit, OnDestroy {
  /**
   * changes the color of text based on dynamic class selector generated using FieldStatusType enum
   */
  @Input() color: FieldStatusType = FieldStatusType.Normal;
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'text-' + FieldStatusType[this.color]);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.element.nativeElement, 'text-' + FieldStatusType[this.color]);
  }

}
