import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuExtensionDirection, DropdownFieldType, FieldStatusType } from 'src/app/model/data-model';

@Component({
  selector: 'app-nv-save-third-panel',
  templateUrl: './nv-save-third-panel.component.html',
  styleUrls: ['./nv-save-third-panel.component.scss']
})
export class NvSaveThirdPanelComponent implements OnInit {
  dropdownItems = mockDropdown().items;
  defaultSelectedItem = mockDropdown().selectedItemDefault;
  dropDownFieldType = mockDropdown().dropDownFieldType;
  dropdownMenuExtensionDir = mockDropdown().menuExtensionDir;
  dropdownFieldStatusType = mockDropdown().fieldStatusType;
  isDropdownDisable = mockDropdown().isDisable;
  textTrimNumber = mockDropdown().textTrimNumber;

  reason: string = '';
  password: string = '';
  reasonValidation = '';
  passwordValidation = '';

  showPanel: boolean = false;

  constructor(public dialogRef: MatDialogRef<any>,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  closePanel() {
    this.showPanel = !this.showPanel;
    this.dialogRef.close(false);
  }

  buttonClick() {
    // this.showPanel = !this.showPanel;
    if (!this.reason && !this.password) {
      this.reasonValidation = 'is-invalid';
      this.passwordValidation = 'is-invalid';
    } else if (!this.reason) {
      this.reasonValidation = 'is-invalid';
    } else if (!this.password) {
      this.passwordValidation = 'is-invalid';
    } else {
      this.dialogRef.close(true);
    }
  }

  onItemSelect(event: any) {
    console.log(event);
    this.reason = event;
    this.reasonValidation = 'is-normal';
  }

  keyPress(column: string) {
    setTimeout(() => {
      this.updateValidations(column);
    }, 10);
  }

  private updateValidations(column: string) {
    if (column == 'reason') {
      this.reasonValidation = this.reason.length > 0 ? 'is-normal' : 'is-invalid';
    } else if (column == 'password') {
      this.passwordValidation =
        this.password.toString().length > 0 ? 'is-normal' : 'is-invalid';
    }
  }

}

function mockDropdown(): any {
  const dropdownInputs = {
    items: [
      'item1',
      'item2 which is longer',
      'item3 which is longer and ',
      'item4',
      'item5',
      'item6',
      'item7',
    ],
    // itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 100000,
    selectedItemDefault: 'Select a Reason',
    menuExtensionDir: MenuExtensionDirection.ToLeft,
    dropDownFieldType: DropdownFieldType.Input,
    fieldStatusType: FieldStatusType.Normal,
    isDisable: false,
  };
  return dropdownInputs;
}
