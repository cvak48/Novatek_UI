import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/data-model';

const USER_PROFILE_DATA = [
  {
    'uniqueID': '1',
    'name': 'Joy Kunze',
    'jobPosition': 'QA Manager',
    'userName': 'UKunze',
    'passwordExpiryDate': "12-25-1995",
    'accountExpiryDate': "12-25-1995",
    'lastLogin': "12-25-1995",
  },
  {
    'uniqueID': '2',
    'name': 'Joy2 Kunze2',
    'jobPosition': 'Developer',
    'userName': 'UKunze2',
    'passwordExpiryDate': "12-20-1995",
    'accountExpiryDate': "12-29-1995",
    'lastLogin': "12-24-1995",
  },
];



@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileDataSubject = new BehaviorSubject<User[]>([]);

  constructor() {
    this._initialize();
   }
  get userProfileData$(): Observable<User[]> {
    return this.userProfileDataSubject.asObservable();
  }
 private _initialize(): void {
    this.userProfileDataSubject.next(USER_PROFILE_DATA);
  }
}
