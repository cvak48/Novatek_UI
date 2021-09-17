import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

interface IStateStore {
  /**
   * Demonstrate how other components need to communicate with this service
   */
    isPopupMsgCardClicked$: Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class StoreContextService implements IStateStore {
  private isPopupMsgCardClickedSubject = new BehaviorSubject<boolean>(false);
  private orgAndPopupWinElmRefSubjectDic!: { [refElementName: string]: BehaviorSubject<any> };

  

  public get isPopupMsgCardClicked$(): Observable<boolean> {
    return this.isPopupMsgCardClickedSubject;
  }

  constructor() {
    this.orgAndPopupWinElmRefSubjectDic = {};
   }
  cancelPopupMsgCard(state: boolean): void {
    this.isPopupMsgCardClickedSubject.next(state);
  }
  addOrgAndPopupWinElmRef(refName: string, elmRef: any): void {
    if (!this.orgAndPopupWinElmRefSubjectDic[refName]) {
      this.orgAndPopupWinElmRefSubjectDic[refName] = new BehaviorSubject(elmRef);
    } else {
      this.orgAndPopupWinElmRefSubjectDic[refName].next(elmRef);
    }
  }
  




}

