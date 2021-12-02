import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor(private dialog: MatDialog) { }

  getGenericDialogRef<T>(componentRef: new (...args: any[]) => T, data: any, autoFocus?: boolean, customClass? : string): MatDialogRef<T> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.width = "300px"
    dialogConfig.autoFocus = autoFocus ? autoFocus : false;
    dialogConfig.closeOnNavigation = false;
    dialogConfig.data = data;
    dialogConfig.panelClass= customClass && customClass;
    // console.log(componentRef);
    // this.dialogRef = this.dialog;
    return this.dialog.open(componentRef, dialogConfig);
  }
}