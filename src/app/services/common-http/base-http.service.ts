import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  baseUrl: string = 'http://10.100.40.52:8080/';
  constructor(private http: HttpClient) {}

  baseGet = (url: string, params?: any) =>
    this.http.get(this.baseUrl + url, { params: params });

  basePost = (url: string, body: any, params?: any) =>
    this.http.post(this.baseUrl + url, body, { params: params });
}
