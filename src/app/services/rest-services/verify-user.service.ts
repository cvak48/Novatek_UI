import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerifyUserService {
  private url: string = 'http://10.100.40.52:8080/api/User/Isvaliduser';
  constructor(private http: HttpClient) {}

  verifyUser(uName: string) {
    return this.http.post(this.url, {
      username: uName,
    });
  }
}
