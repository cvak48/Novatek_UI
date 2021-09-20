import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

interface IStateStore {
  /**
   * Demonstrate how other components need to communicate with this service
   */
    isPopupWindowCancelClicked$: Observable<boolean>;
    isPopupWindowCalled$: Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class NvStoreService implements IStateStore {
  private isPopupWindowCancelClickSubject = new BehaviorSubject<boolean>(false);
  public get isPopupWindowCancelClicked$(): Observable<boolean> {
    return this.isPopupWindowCancelClickSubject.asObservable();
  }
  private isPopupWindowCalledSubject = new Subject<boolean>();
  public get isPopupWindowCalled$(): Observable<boolean> {
    return this.isPopupWindowCalledSubject.asObservable();
  }
  constructor() {   }
  closePopupWindow(state: boolean): void {
    this.isPopupWindowCancelClickSubject.next(state);
  }
  /**
   * call for popupWindow References
   */
  callPopupWindow(state: boolean): void {
    this.isPopupWindowCalledSubject.next(state);
  }

}

