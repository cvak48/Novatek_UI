import { NvStoreService } from './../core-logic/store.service';

import { CdkOverlayOrigin, ConnectedPosition, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 *  inspired by :
 *  https://www.decodedfrontend.io/angular-cdk-overlay-module/
 *  https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea
 *  https://www.decodedfrontend.io/angular-cdk-overlay-module/
 *  https://codinglatte.com/posts/angular/reusable-modal-overlay-using-angular-cdk-overlay/
 *  https://stackblitz.com/edit/overlay-demo?file=app%2Fapp.component.ts
 */

@Injectable({
  providedIn: 'root',

})
export class NvPopupService {

  constructor(private overLay: Overlay) {
  }
  openRelativePopup(origin: CdkOverlayOrigin, overlay: TemplateRef<HTMLElement>, viewContainerRef: ViewContainerRef,
                    close: boolean): OverlayRef {
    let config = new OverlayConfig();
    config.positionStrategy = this.overLay.position()
      .flexibleConnectedTo(origin.elementRef)
      .withPositions(this.getPositions())
      .withPush(true);
    config.hasBackdrop = true;
    config.scrollStrategy = this.overLay.scrollStrategies.reposition();
    let overLayRef = this.overLay.create(config);
     overLayRef.backdropClick().subscribe(() => overLayRef.dispose());
    // if (close$) {
    //   close$.subscribe(() =>
    //     overLayRef.dispose()
    //   );
    // }
    if (close) {
        // overLayRef.dispose();
    }
    overLayRef.attach(new TemplatePortal(overlay, viewContainerRef));
    return overLayRef;
  }
  private getPositions(): ConnectedPosition[] {
    const top: ConnectedPosition = {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -24,
    };

    const right: ConnectedPosition = {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
      offsetX: 50
    };
    const bottom: ConnectedPosition = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: -150,
    };

    const left: ConnectedPosition = {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: -50
    };
    return [bottom];
  }

}