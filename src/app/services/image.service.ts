import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<any> {
    // TODO: Observable<Response>
    const formData = new FormData();
    const url = '';

    formData.append('image', image);

    return this.http.post(url, formData);
  }
}
