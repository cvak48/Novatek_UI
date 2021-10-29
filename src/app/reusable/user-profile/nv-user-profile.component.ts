import { UserProfileService } from './../../services/local-data/user-profile/user-profile.service';
import { Person, Notification, User, MenuExtensionDirection, DropdownFieldType, FieldStatusType } from './../../model/data-model';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApplicationService } from 'src/app/services/application.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DropItemType } from '../nv-upload/nv-upload.component';
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
  dropItemType = DropItemType;
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
  @ViewChild('fileDropRef') fileDropRef!: ElementRef<HTMLElement>;
  constructor(private _dataService: UserProfileService,
    private applicationService: ApplicationService,
    private dataService: DataService,
    private http: HttpClient) {}
  ngOnInit(): void {
    this.sub = this.applicationService.selectedUserData
              .subscribe(res => {
                //  this.personData = res;
                 if (res.id) {
                  this.getSelectedUserData(res.id);
                 } else {
                  this.personData = {attachments: [], checked: true, date: "", email: "", id: 0, name: "",status: ""};
                 }
                  
              })
              this._initialize();
    this.applicationService.btnClickData
         .subscribe(res => {
           if (res == 'updateUserData') {
              this.saveuserData();
           }
         })

      this.applicationService.userBtnAction
           .subscribe(res => {
              this.userAction = res;
           });
  }

  getSelectedUserData(id: number): void{
    this.personData = this.dataService.getUserData(id)[0];
  }
  
  onMultiselectItemsFilter(item: any): void {}
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

  saveuserData(): void{
    if (this.personData.id > 0) {
      this.applicationService.setUpdatedUserData(this.personData);
    } else {
      this.applicationService.setNewUserData(this.personData);
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