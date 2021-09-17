import { Observable } from 'rxjs';
import { CdkOverlayOrigin, ConnectedPosition, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NvPopupService {

  constructor(private overLay: Overlay) { }

  openRelativePopup(origin: CdkOverlayOrigin,
    overlay: TemplateRef<HTMLElement>, viewContainerRef: ViewContainerRef, close$: Observable<boolean> | undefined): OverlayRef {
    let config = new OverlayConfig();
    // origin , overlay, boolean

    config.positionStrategy = this.overLay.position()
      .flexibleConnectedTo(origin.elementRef)
      .withPositions(this.getPositions())
      .withPush(true);
    config.hasBackdrop = false;
    config.scrollStrategy = this.overLay.scrollStrategies.reposition();

    let overLayRef = this.overLay.create(config);
    // overLayRef.backdropClick().subscribe(() => overLayRef.dispose());
    if (close$) {

      close$.subscribe(() =>
        overLayRef.dispose()
      );
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
      offsetX: 24
    }
      ;
    const bottom: ConnectedPosition = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: -24,
    };

    const left: ConnectedPosition = {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: 24
    };
    return [top, right, bottom, left];
  }

}