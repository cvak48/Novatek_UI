import { map } from 'rxjs/operators';
import { DropdownFieldType, MenuExtensionDirection, StatusColor, ArrowIcon } from './../../model/data-model';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

/**
* USAGE:
* Note that the parent component need to provide proper container (width and height)
* in some case dropdown menu width should be modified
*/

@Component({
  selector: 'app-nv-dropdown',
  templateUrl: './nv-dropdown.component.html',
  styleUrls: ['./nv-dropdown.component.scss']
})
export class NvDropdownComponent implements OnInit, AfterViewInit {
  /**
   * the selected item as an output
   */
  @Output() itemSelect = new EventEmitter<any>();
  @Input() items: string[] = ['item1'];
  /**
   * it keeps first "textTrimNumber" number and ignore the rest, adding ... instead.
   */
  @Input() textTrimNumber: number = 2;
  /**
   * the default value shown in the field comes as an input but it will be updated as soon as user select new item
   */
  @Input() selectedItem: string = '';
  /**
   * there are three types: Button, Icon, and Default, which is a simple field.
   */
  @Input() fieldType: DropdownFieldType = DropdownFieldType.Default;
  @Input() extensionDirection: MenuExtensionDirection = MenuExtensionDirection.ToRight;

  /**
   * receives styles base on the status of the field
   */
  @Input() backgroundColor: StatusColor = StatusColor.Default;
  @Input() borderColor: StatusColor = StatusColor.Default;
  @Input() textColor: StatusColor = StatusColor.Default;
  /**
   * disabling the dropdown
   */
  @ViewChild('fieldId1') fieldId1!: ElementRef<HTMLElement>;
  @ViewChild('fieldId2') fieldId2!: ElementRef<HTMLObjectElement>;
  @ViewChild('fieldId3') fieldId3!: ElementRef<HTMLElement>;
  @ViewChild('icon') iconId!: ElementRef<HTMLElement>;
  @ViewChild('arrow') arrow!: ElementRef<HTMLObjectElement>;
  @Input() set isFieldDisable(value: boolean) {
    this._isFieldDisable = value;
    if (this._isFieldDisable) {
      this.backgroundColor = StatusColor.Disabled;
      this.borderColor = StatusColor.Disabled;
      this.textColor = StatusColor.Disabled;
    }
  }
  private _isFieldDisable: boolean = true;
  get isFieldDisable(): boolean {
    return this._isFieldDisable;
  }
  showMenu!: boolean;
  selectedIndex!: number;
  // TODO: need to define type for each of these
  isFirst: boolean = true;
  isArrowDown: boolean = true;
  dropDownFieldType = DropdownFieldType;
  menuExtensionDirection = MenuExtensionDirection;
  readonly arrowIcons: ArrowIcon = {
    upward: '../../../assets/icons/ico.arrow.up.svg',
    downward: '../../../assets/icons/ico.arrow.down.svg'
  };
  readonly plusIcon = { icon: './../../../assets/icons/plus-button.icon.svg' };
  constructor() { }
  onSvgClick() {
    console.log('hi svg');
    
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if (this.isFieldDisable) {
     // const svgArrowDoc = this.arrow.nativeElement.contentDocument?.getElementById('ico.arrow.down-2')?.setAttribute('fill', 'green');
      /**
       * Remove toggle to disable the dropdown menu
       */
      if (this.fieldType === this.dropDownFieldType.Default) {
        this.fieldId1.nativeElement.removeAttribute('data-toggle');
      } else if (this.fieldType === this.dropDownFieldType.Button) {
        this.fieldId3.nativeElement.removeAttribute('data-toggle');
      } else if (this.dropDownFieldType.Icon) {
        // this.fieldId2.nativeElement.removeAttribute('data-toggle');
      /**
       *  plus icon color
       */
      // const svgPlusDoc = this.arrow.nativeElement.contentDocument.
      }
      /**
       * Remove icons; triangles
       * they are disabled in html
       */
      const svgPlusDoc = this.fieldId2.nativeElement.contentDocument?.documentElement;
      // const cw = this.fieldId2.nativeElement?.contentWindow?.addEventListener("click", () => {
      //   console.log('hi');
        
      // });


    }





    //const rectElement = svgDoc?.getElementById('Plus_Sign');

    // if (rectElement) {
    // this.renderer.setStyle(rectElement, 'fill', 'green');
    // }
  }

  onInputClick(): void {
  }
  onBlur(): void {
    this.isArrowDown = true;
  }
  /**
   * event handler within which the selected item's index is set and the selected item is emitted as an output
   */
  onItemSelect(index: number): void {
    this.isFirst = false;
    this.selectedIndex = index;
    this.selectedItem = this.items[this.selectedIndex];
    this.itemSelect.emit(this.selectedItem);
    if (!this.isArrowDown) {
      this.isArrowDown = true;
    }

  }
}
