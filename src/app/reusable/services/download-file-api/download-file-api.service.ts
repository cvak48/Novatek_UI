import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileApiService {

  constructor(private http: HttpClient) {}

  //downloadFile(): Observable<any> {
	//return this.http.get('http://localhost:8080/employees/download', {responseType: ResponseContentType.Blob});
  downloadFile(): any {
    const fileUrl = 'http://localhost:3000/Employees';
    //'http://localhost:4200/employees/download'
		return this.http.get(fileUrl, {responseType: 'blob'});
    //return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    //https://angular.io/api/common/http/HttpRequest#responseType
  }

}
