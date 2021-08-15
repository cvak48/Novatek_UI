import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-multi-file-upload',
  templateUrl: './nv-multi-file-upload.component.html',
  styleUrls: ['./nv-multi-file-upload.component.scss']
})
export class NvMultiFileUploadComponent implements OnInit {
  fileToUpload: any = {};
  showUploadedFiles: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(event: any, fileNumber: string) {
    this.showUploadedFiles = false;
    this.fileToUpload['file'+fileNumber] = event.target.files[0];
}

uploadFiles(): void{
  this.showUploadedFiles = true;
}
}
