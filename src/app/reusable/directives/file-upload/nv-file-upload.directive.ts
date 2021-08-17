import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNvFileUpload]'
})
export class NvFileUploadDirective {

  @HostBinding('style.background-color') public background = '#fff';
  @HostBinding('style.opacity') public opacity = '1';
  @Output() fileDropped = new EventEmitter<any>();

  constructor() { } 

  @HostListener('dragover', ['$event']) onDragOver(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragover');
    this.background = '#C9E2F5';
    this.opacity = '0.8';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragLeave');
    this.background = '#fff';
    this.opacity = '1';
  }

  @HostListener('drop', ['$event']) onFieldDrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('drop');
    this.background = '#f5fcff';
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
