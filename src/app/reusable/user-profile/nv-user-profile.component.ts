import { UserProfileService } from './../../services/local-data/user-profile/user-profile.service';
import { Person, Notification, User } from './../../model/data-model';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-nv-user-profile',
  templateUrl: './nv-user-profile.component.html',
  styleUrls: ['./nv-user-profile.component.scss']
})
export class NvUserProfileComponent implements OnInit {
  // Avatar
  @Input() person!: Person;
  userProfiles!: User[];
  constructor(private _dataService: UserProfileService) { }

  ngOnInit(): void {
    this._initialize();

  }
  onIconClick(): void {

  }
    /**
   * event handler; receive file as the user choose it from local folder
   */
     fileBrowseHandler(event: any): void {
      console.log((event?.target?.files));
          }
  private _initialize(): void {
    this.person = mockProfileMenu();
    this._dataService.userProfileData$.subscribe(users =>
      this.userProfiles = users
    );
  }
}


function mockProfileMenu(): Person {
  const avatarProps = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
    notification: {
      number: 200,
      content: '',
      hasAttachment: false,
    } as Notification,
  } as Person;
  return avatarProps;
}
