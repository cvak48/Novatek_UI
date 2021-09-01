import { Directive, OnInit, OnDestroy, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[nvSvgDecorator]'
})
export class NvSvgDecoratorDirective implements OnInit, OnDestroy {
  @Input() color!: string;
  constructor(private renderer: Renderer2, private element: ElementRef) { }
  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
