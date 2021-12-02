import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nv-dialog',
  templateUrl: './nv-dialog.component.html',
  styleUrls: ['./nv-dialog.component.scss']
})
export class NvDialogComponent implements OnInit {
  showPanel: boolean = false;
  constructor(public dialogRef: MatDialogRef<any>,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.dialogRef.close(false);
  } 

  buttonClick() {
    this.showPanel = !this.showPanel;
    this.dialogRef.close(true);
  }

}
