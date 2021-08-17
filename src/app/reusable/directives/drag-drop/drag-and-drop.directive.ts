import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class NvDragAndDropDirective {

  @Output() file: EventEmitter<File> = new EventEmitter<File>();

  @HostListener('dragover', ['$event'])
  public onDragOver(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent): void {
    evt.preventDefault();
    evt.stopPropagation();

    const fileToEmit: File | undefined = evt.dataTransfer?.files[0];
    this.file.emit(fileToEmit);
  }
}
