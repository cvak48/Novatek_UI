import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public states = [
    'Alberta',
    'Manitoba',
    'Nunavut',
    'Ontario',
    'Quebec',
    'Saskatchewan'
  ]

  public customLogoSize = {
    width: '200',
    height: '50'
  }

  public Domain = [
    'Doctor',
    'Pharma',
    'Nurse'
  ]

  public Next: string = 'Next';
  public Login: string = 'Login';
  public selectedNumber: number = 2;
  public stateTxt: string = 'Select Site';
  public domainTxt: string = 'Select Domain';
  public hideLogin: boolean = false;
  public btnText: string = 'Next';
  public cardHeading: string = 'User Login';
  public confirmation: boolean = false;
  public passwordDetails: boolean = false;

  constructor() { }

  /**
  * Life cycle hook of Angular
  */
  ngOnInit(): void {
  }

  /**
  * showPassword vairable state to shows the password feild
  */
  btnClick(text: string) {
    switch (text) {
      case 'Next':
        this.showPassword = true;
        this.btnText = 'Login';
        this.confirmation = false;
        this.passwordDetails = true;
        break;
      case 'Reset':
        this.recoveryConfirmation();
        this.btnText = 'Resend';

        break;
      case 'Sent':
        this.recoveryConfirmation();

        break;
      case 'Login':

        break;
        break;
      case 'Resend':

        break;
      default:
        this.cancleClick();
        this.cardHeading = 'User Login';
        break;
    }
  }

  public forgotDetails(text: string) {
    this.hideLogin = true;
    switch (text) {
      case 'password':
        this.btnText = 'Reset';
        this.cardHeading = 'Forgot Password';
        this.showPassword = true;
        break;

      default:
        this.btnText = 'Sent';
        this.cardHeading = 'Forgot Username';
        this.showPassword = true;
        break;
    }
  }

  public recoveryConfirmation() {
    this.cardHeading = 'Confirmation';
    this.confirmation = true;
    this.btnText = 'Resend';
    this.showPassword = false;
  }

  public cancleClick() {
    this.showPassword = false;
    this.hideLogin = false;
    this.passwordDetails = false;
    this.btnText = 'Next';
    this.confirmation = false;
    this.cardHeading = "User Login"
  }

}
