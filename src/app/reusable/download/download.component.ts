import { DownloadFileApiService } from './../services/download-file-api/download-file-api.service';
import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

//https://roytuts.com/download-file-from-server-using-angular/
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private fileService: DownloadFileApiService) { }

  ngOnInit(): void {
  }
  download() {
    this.fileService.downloadFile().pipe(catchError(this.handleError)).subscribe((response: any) => {
      //expecting the file of JSON type.
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      //create a URL that will open the file in browser in new window 
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      // Save as option but it may not work for Angular 11.
      window.location.href = response.url;
      // uses ready-made FileSaver module that will open the file with Save as option
      fileSaver.saveAs(blob, 'employees.json');
      console.info('File downloaded successfully')
    });
  }


  handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }


}
