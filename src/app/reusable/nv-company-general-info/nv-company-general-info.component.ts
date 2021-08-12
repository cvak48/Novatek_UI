import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-company-general-info',
  templateUrl: './nv-company-general-info.component.html',
  styleUrls: ['./nv-company-general-info.component.scss']
})
export class NvCompanyGeneralInfoComponent implements OnInit {
  file!: File;
  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event: any): void{
    console.log('in upload', event.target.files[0].name);
  }

  dragAndDropFile(file: any): void{
    console.log('in drag', file.name);
  }
}
