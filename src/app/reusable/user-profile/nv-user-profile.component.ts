import { UserProfileService } from './../../services/local-data/user-profile/user-profile.service';
import { Person, Notification, User } from './../../model/data-model';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApplicationService } from 'src/app/services/application.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

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
  @ViewChild('fileDropRef') fileDropRef!: ElementRef<HTMLElement>;
  constructor(private _dataService: UserProfileService,
    private applicationService: ApplicationService,
    private dataService: DataService) {}
  ngOnInit(): void {
    this.sub = this.applicationService.selectedUserData
              .subscribe(res => {
                //  this.personData = res;
                console.log(res)
                  this.getSelectedUserData(res.id);
              })
              this._initialize();
  }

  getSelectedUserData(id: number): void{
    this.personData = this.dataService.getUserData(id)[0];
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
    console.log(files);
    this.person.imageUrl = files[0].name;
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
