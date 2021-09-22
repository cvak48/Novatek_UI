import { DownloadFileApiService } from './../../services/local-data/download/download-file-api.service';


import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
/**
 * Inspired by: https://roytuts.com/download-file-from-server-using-angular/
 */

@Component({
  selector: 'app-nv-download',
  templateUrl: './nv-download.component.html',
  styleUrls: ['./nv-download.component.scss']
})
export class NvDownloadComponent implements OnInit {

  constructor(private fileService: DownloadFileApiService) { }

  ngOnInit(): void {
  }
  downloadFile(): void {
    this.fileService.downloadFile().pipe(catchError(this.handleError)).subscribe((response: any) => {
      // expecting the file of JSON type.
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      // create a URL that will open the file in browser in new window 
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      // Save as option but it may not work for Angular 11.
      // window.location.href = response.url;
      // uses ready-made FileSaver module that will open the file with Save as option
      fileSaver.saveAs(blob, 'employees.json');
      // TODO: see the res console.info('File downloaded successfully');
    });
  }


  handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }


}

