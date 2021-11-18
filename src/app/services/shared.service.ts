import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";

@Injectable({providedIn: 'root'})
export class SharedService {
   
    constructor( private dialog: MatDialog) {}

    getGenericDialogRef<T>(componentRef: new (...args: any[]) => T, data: any, autoFocus?: boolean): MatDialogRef<T> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = autoFocus ? autoFocus : false;
        dialogConfig.closeOnNavigation = false;
        dialogConfig.data = data;
        return this.dialog.open(componentRef, dialogConfig);
      }
}