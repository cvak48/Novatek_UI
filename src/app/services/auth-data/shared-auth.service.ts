import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedAuthService {
  public access_token = new BehaviorSubject<string>('');
  public login_response = new BehaviorSubject(null);
}
