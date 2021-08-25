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
  @ViewChild('DefaultFieldRef') DefaultFieldRef!: ElementRef<HTMLElement>;
  @ViewChild('PlusIconRef') PlusIconRef!: ElementRef<HTMLObjectElement>;
  @ViewChild('arrowDown') arrowDown!: ElementRef<HTMLObjectElement>;
  @ViewChild('ButtonRef') ButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('menu') menu!: ElementRef<HTMLElement>;
  @ViewChild('dropdown') dropdown!: ElementRef<HTMLElement>;
  @Input() set isFieldDisable(value: boolean) {
    this._isFieldDisable = value;
    if (this._isFieldDisable) {
      this._changeStyleToDisable();
    }
  }
  private _isFieldDisable!: boolean;
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
  constructor(private renderer: Renderer2) { }
  onSvgClick() {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    /**
     * opening and closing the dropdown menu in case of plus-button
     */
    if (this.fieldType === this.dropDownFieldType.Icon) {
      this.PlusIconRef?.nativeElement?.contentWindow?.addEventListener('click', () => {
        const hasShowClass = this.menu?.nativeElement?.classList?.contains('show');
        if (!this.isFieldDisable) {
          if (hasShowClass) {
            this.renderer.removeClass(this.menu?.nativeElement, 'show');
          } else {
            this.renderer.addClass(this.menu?.nativeElement, 'show');
          }
        }

      });

      this.PlusIconRef?.nativeElement?.contentWindow?.addEventListener('blur', () => {
        this.renderer.removeClass(this.menu?.nativeElement, 'show');
      });
    }
    if (this.isFieldDisable) {
      /**
       * Remove toggle to disable the dropdown menu
       */
      const svgTriangleDoc = this.arrowDown?.nativeElement?.contentDocument;
      if (this.fieldType === this.dropDownFieldType.Default) {
        this.DefaultFieldRef?.nativeElement.removeAttribute('data-toggle');
        this._changeTriangleToDisable();
      } else if (this.fieldType === this.dropDownFieldType.Button) {
        this.ButtonRef?.nativeElement.removeAttribute('data-toggle');
        this._changeTriangleToDisable();
      } else if (this.dropDownFieldType.Icon) {
        /**
         * data-toggle does not work in Object element So the click and blur events handle the open and close functionalities
         */
        /**
         *  plus icon color
         */
        setTimeout(() => {
          const svgPlusButtonDoc = this.PlusIconRef?.nativeElement?.contentDocument;
          const plusSign = svgPlusButtonDoc?.getElementById('Plus_Sign');
          const plusBorder = svgPlusButtonDoc?.getElementById('Button_Background');
          const disableColor = '#B5B5B5';
          if (plusSign) {
            this.renderer.setStyle(plusSign, 'fill', disableColor);
          }
          if (plusBorder) {
            this.renderer.setStyle(plusBorder, 'stroke', disableColor);
          }
        }, 100);

      }
      /**
       *
       */
      /**
       * Note: Remove icons; triangles
       * they are disabled in html
       */
    }



  }
  onFieldClick(): void {
    if (this.isArrowDown && !this.isFieldDisable) {
      this.isArrowDown = false;
    } else if (!this.isArrowDown && !this.isFieldDisable) {
      this.isArrowDown = true;
    }
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
    /**
     * close the dropdown menu in case of plus-button
     *
     */

    this.renderer.removeClass(this.menu?.nativeElement, 'show');
  }
  private _changeStyleToDisable(): void {
    this.backgroundColor = StatusColor.Disabled;
    this.borderColor = StatusColor.Disabled;
    this.textColor = StatusColor.Disabled;
  }
  private _changeTriangleToDisable(): void {
    setTimeout(() => {
      const svgTriangleDoc = this.arrowDown?.nativeElement?.contentDocument;
      const arrowSign = svgTriangleDoc?.getElementById('ico.arrow.down-2');
      const disableColor = '#B5B5B5';
      if (arrowSign) {
        this.renderer.setStyle(arrowSign, 'fill', disableColor);
      }
    }, 100);
  }

}
