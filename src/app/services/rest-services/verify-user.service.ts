import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerifyUserService {
  private url: string = 'http://10.100.40.52:8080/api/User/Isvaliduser';
  private loginUrl: string = 'http://10.100.40.52:8080/api/User/Login';
  constructor(private http: HttpClient) {}

  verifyUser(uName: string, domain: string) {
    return this.http.post(this.url, {
      username: uName,
      domain,
    });
  }

  loginUser(data: any) {
    return this.http.post(this.loginUrl, data);
  }
}
