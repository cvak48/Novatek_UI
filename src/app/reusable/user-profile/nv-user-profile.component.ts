import { UserProfileService } from './../../services/local-data/user-profile/user-profile.service';
import {
  Person,
  Notification,
  User,
  MenuExtensionDirection,
  DropdownFieldType,
  FieldStatusType,
} from './../../model/data-model';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApplicationService } from 'src/app/services/application.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nv-user-profile',
  templateUrl: './nv-user-profile.component.html',
  styleUrls: ['./nv-user-profile.component.scss'],
})
export class NvUserProfileComponent implements OnInit {
  // Avatar
  @Input() person!: Person;
  userProfiles!: User[];
  sub = new Subscription();
  personData: any = {};
  userAction: string = 'new';
 
  label!: string;
  dropdownItems = mockDropdown().items;
  defaultSelectedItem = mockDropdown().selectedItemDefault;
  dropDownFieldType = mockDropdown().dropDownFieldType;
  dropdownMenuExtensionDir = mockDropdown().menuExtensionDir;
  dropdownFieldStatusType = mockDropdown().fieldStatusType;
  isDropdownDisable = mockDropdown().isDisable;
  multiselectFieldStatusType = FieldStatusType.Normal;
  multiselectFieldLabel = 'Label';
  imageSelected: any;
  imageSrc: any;
  selecetdFile!: File;
  multiUser: boolean = false;
  multiUserList: any = [];
  firstNameStatus = '';
  lastNameStatus = '';
  userNameStatus = '';
  emailStatus = '';
  sitesStatus = false;
  rolesStatus = false;
  licenseStatus = false;
  labelRed = true;
  hasSiteError = false;
  hasRoleError = false;
  hasLicenseError = false;
  btnDisable:boolean = false;
  @ViewChild('fileDropRef') fileDropRef!: ElementRef<HTMLElement>;
  constructor(
    private _dataService: UserProfileService,
    private applicationService: ApplicationService,
    private dataService: DataService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.sub = this.applicationService.selectedUserData
              .subscribe(res => {
                console.log('selected user', res)
                //  this.personData = res;
                 if (res.length) {
                   if (res.length == 1) {
                    this.multiUser = false;
                    this.getSelectedUserData(res[0].id);
                   } else {
                      this.multiUser = true;
                      this.multiUserList = res;
                   }
                  
                 } else {
                  this.personData = {attachments: [], checked: false, date: "", email: "", id: 0, lastName: "", firstName: "", userName: "",status: "", title:"", position: ""};
                 }
                  
              })
              this._initialize();
    this.applicationService.btnClickData
         .subscribe(res => {
           if (res == 'updateUserData') {
              this.firstNameStatus = this.personData.firstName?.length > 0 ? 'is-normal' : 'is-invalid';
              this.lastNameStatus = this.personData.LastName?.length > 0 ? 'is-normal' : 'is-invalid';
              this.userNameStatus = this.personData.userName?.length > 0 ? 'is-normal' : 'is-invalid';
              this.emailStatus = this.personData.email?.length > 0 ? 'is-normal' : 'is-invalid';
              this.hasSiteError = this.sitesStatus;
              this.hasRoleError = this.rolesStatus;
              this.hasLicenseError = this.licenseStatus;
              this.saveuserData();
              if (this.personData.firstName?.length && this.personData.LastName?.length && 
                this.personData.userName?.length && this.personData.email?.length && 
                 !this.hasSiteError && !this.hasRoleError && !this.hasLicenseError) {
                  console.log('in check cond', this.personData.firstName?.length, this.personData.LastName?.length)
                   this.applicationService.setBtnDisabled(true);
              } else {
                this.applicationService.setBtnDisabled(false);
              
             }
              
           }
         })

    this.applicationService.userBtnAction.subscribe((res) => {
      this.userAction = res;
      this.btnDisable = false;
    });
  }

  getSelectedUserData(id: number): void {
    this.personData = this.dataService.getUserData(id)[0];
  }

  onMultiselectItemsFilter(item: any): void {
    
  }
  /**
   * The img element and input is internally linked with onIconClick event handler;
   * because the input style became hidden and we use menu svg icon instead
   */
  onIconClick(): void {
    // click on input
    this.fileDropRef.nativeElement.click();
  }
  /**
   * event handler; receive just image as the user choose it from local folder
   */
  fileBrowseHandler(event: any): void {
    const files = event?.target?.files;
    this.person.imageUrl = files[0].name;
    this.selecetdFile = event.target.files[0];
    this.imageSelected = this.selecetdFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveuserData(): void {
    if (!this.multiUser && this.personData.id && this.personData.id > 0) {
      this.applicationService.setUpdatedUserData(this.personData);
    } else if (this.personData.id == 0) {
      this.applicationService.setNewUserData(this.personData);
    } else {
      this.multiUserList.map((user: any) => {
        user.title = this.personData.title;
        user.position = this.personData.position;
      });
      console.log('multi', this.multiUserList)
      this.applicationService.setNewUserData(this.multiUserList);
    }
  }

  onFileDropped(files: any): void {
    this.prepareFilesList(files);
  }

  onItemSelect(item: any): void {}

  prepareFilesList(value: any): void {
    const files = value;
    const file = files[0];
    // TODO: Need to be uploaded by doing an http post with the payload instead of log in console
    // TODO: console.log(file.name) alternative for test
    const payload = new FormData();
    payload.append('data', file);
  }

  onClose(): void {
    this.imageSrc = '';
  }

  keyPress(column: string, columnName: string) {
    setTimeout(() => {
      this.updateValidations(column, columnName);
    }, 10);
  }

   updateValidations(column: string, columnName: string) {
      switch(columnName) {
        case 'firstName':
          this.firstNameStatus = column?.length > 0 ? 'is-normal' : 'is-invalid';
          break;
        case 'lastName':
          this.lastNameStatus = column?.length > 0 ? 'is-normal' : 'is-invalid';
          break;
        case 'userName':
          this.userNameStatus = column?.length > 0 ? 'is-normal' : 'is-invalid';
          break;
        case 'email':
          this.emailStatus = column?.length > 0 ? 'is-normal' : 'is-invalid';
          break;
      }
   
  }

  sitesSelected(event: any): void {
    switch(event.name) {
      case 'Sites':
        this.sitesStatus = !event.status;
        break;
      case 'Roles':
        this.rolesStatus = !event.status;
        break;
      case 'Module Licenses':
        this.licenseStatus = !event.status;
        break;
    }
  }

  // TODO: using imageService we need to send the image to the backend
  private _initialize(): void {
    this.person = mockProfileMenu();
    this._dataService.userProfileData$.subscribe(
      (users) => (this.userProfiles = users)
    );
  }
}

function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
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
    itemsNumber: ['1', '2', '3', '4', '5', '11', '22', '33', '44', '55'],
    textTrimNumber: 3,
    selectedItemDefault: '',
    menuExtensionDir: MenuExtensionDirection.ToLeft,
    dropDownFieldType: DropdownFieldType.Icon,
    fieldStatusType: FieldStatusType.Normal,
    isDisable: false,
  };
  return dropdownInputs;
}
