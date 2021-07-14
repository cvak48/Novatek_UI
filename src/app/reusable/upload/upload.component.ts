import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onFileDropped(files: any): void {
    this.prepareFilesList(files);

  }

  fileBrowseHandler(event: any): void {
    this.prepareFilesList(event?.target?.files);
  }

  prepareFilesList(value: any): void {
    const files = value;
    const file = files[0];
     // TODO: Need to be uploaded by doing an http post with the payload instead of log in console
    const payload = new FormData();
    payload.append('data', file);
  }
}
