import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApplicationService {
    selectedUserData: BehaviorSubject<any> = new BehaviorSubject({});
    updatedUserData: BehaviorSubject<any> = new BehaviorSubject({});
    btnClickData: BehaviorSubject<any> = new BehaviorSubject(null);
    constructor() {}

    setSelectedUserData(data: any): void{
        this.selectedUserData.next(data);
    }

    setUpdatedUserData(data: any): void{
        this.updatedUserData.next(data);
    }

    setBtnClickedData(btnData: any): void{
        this.btnClickData.next(btnData);
    }
}