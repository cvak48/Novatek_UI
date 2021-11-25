import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApplicationService {
    userBtnAction: BehaviorSubject<any> = new BehaviorSubject('new');
    selectedUserData: BehaviorSubject<any> = new BehaviorSubject({});
    updatedUserData: BehaviorSubject<any> = new BehaviorSubject({});
    newUserData: BehaviorSubject<any> = new BehaviorSubject({});
    btnClickData: BehaviorSubject<any> = new BehaviorSubject(null);
    btnDisabled: BehaviorSubject<any> = new BehaviorSubject(true);
    constructor() {}

    setSelectedUserData(data: any): void{
        this.selectedUserData.next(data);
    }

    setUpdatedUserData(data: any): void{
        this.updatedUserData.next(data);
    }

    setNewUserData(data: any): void{
        this.newUserData.next(data);
    }

    setBtnClickedData(btnData: any): void{
        this.btnClickData.next(btnData);
    }

    setUserBtnAction(btnAction: string): void{
        this.userBtnAction.next(btnAction);
    }

    setBtnDisabled(status: boolean): void{
        this.btnDisabled.next(status);
    }
}