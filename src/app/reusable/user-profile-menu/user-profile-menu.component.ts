import { Person } from 'src/app/model/data-model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseHttpService } from 'src/app/services/common-http/base-http.service';
import { RestUrlsService } from 'src/app/services/rest-urls/rest-urls.service';
import { SharedAuthService } from 'src/app/services/auth-data/shared-auth.service';

@Component({
  selector: 'app-nv-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
})
export class UserProfileMenuComponent implements OnInit {
  @Input() set person(value: Person) {
    if (value) {
      this._person = value;
    }
  }
  get person(): Person {
    return this._person;
  }
  private _person!: Person;
  constructor(
    public router: Router,
    private http: BaseHttpService,
    private urls: RestUrlsService,
    private authData: SharedAuthService
  ) {}

  ngOnInit(): void {}

  logoutAndNavigate() {
    this.router.navigate(['login']);
    this.http
      .basePost(this.urls.logoutUrl, {
        UserId: 1,
      })
      .subscribe((res) => {
        this.authData.access_token.next('');
        this.authData.login_response.next(null);
      });
  }
}
