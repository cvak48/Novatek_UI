import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-upload',
  templateUrl: './nv-upload.component.html',
  styleUrls: ['./nv-upload.component.scss']
})
export class NvUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * event handler; receive file as the user drop it
   */
  onFileDropped(files: any): void {
    this.prepareFilesList(files);
  }
  /**
   * event handler; receive file as the user choose it from local folder
   */
  fileBrowseHandler(event: any): void {
    this.prepareFilesList(event?.target?.files);
  }
/**
 * prepare file format and even can sent it towards backend (TODO)
 */
  prepareFilesList(value: any): void {
    const files = value;
    const file = files[0];
     // TODO: Need to be uploaded by doing an http post with the payload instead of log in console
    // TODO: console.log(file.name) alternative for test
    const payload = new FormData();
    payload.append('data', file);
  }
}
