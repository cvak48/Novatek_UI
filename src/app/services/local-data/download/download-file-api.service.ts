import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Inspired by: https://www.npmjs.com/package/json-server.
 * run json-server --watch employees.json at json container folder dir
 */
@Injectable({
  providedIn: 'root'
})
export class DownloadFileApiService {

  constructor(private http: HttpClient) { }

  downloadFile(): any {
    const fileUrl = 'http://localhost:3000/Employees';
    return this.http.get(fileUrl, { responseType: 'blob' });
  }

}
