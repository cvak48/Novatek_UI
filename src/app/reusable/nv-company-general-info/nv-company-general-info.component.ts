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
  }

  dragAndDropFile(file: any): void{
  }
}
