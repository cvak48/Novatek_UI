import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nv-attachment-list',
  templateUrl: './nv-attachment-list.component.html',
  styleUrls: ['./nv-attachment-list.component.scss']
})
export class NvAttachmentListComponent implements OnInit {
  showPanel: boolean = false;
  attachments: any[] = [];
  columns = ['name', 'type', 'description', 'size'];
  
  sortColumn: string = '';
  sortPreference: string = '';
  constructor(public dialogRef: MatDialogRef<any>,
    
    @Inject(MAT_DIALOG_DATA) public attachment: any[]) { }

  ngOnInit(): void {
    this.attachments = this.attachment;
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.dialogRef.close();
  } 

  rowImgClicked(event: any): void{
    event.stopPropagation();
  }

  rowClicked(event: any): void{
    this.sortColumn = event.target.innerText.trim().toLowerCase();
    this.sortPreference = event.target.ariaSort;
  }
  /**
   * 
   * @param ev 
   * This method is getting executed when user click on check box to mark all checkbox
   */
  checkAllCheckBox(ev: any) {
    this.attachments.forEach(x => x.checked = ev.target.checked)
  }
 /**
   * This method return boolean value which indicates that all checkboxes are checked or not
   */
  isAllCheckBoxChecked() {
    return this.attachments.every(p => p.checked);
  }

  buttonClick(): void{
    
  }

}
