import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApplicationService {
    selectedUserData: BehaviorSubject<any> = new BehaviorSubject({});
    constructor() {}

    setSelectedUserData(data: any): void{
        this.selectedUserData.next(data);
    }
}