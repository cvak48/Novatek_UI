import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAndOut } from '../../../assets/trigger';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    // The following are pre-built triggers - Use these to add animations with the least work
    fadeInAndOut
  ]

})
export class LoginComponent implements OnInit {

  public variableList = {
    selectedNumber: 2,
    count:0,
    usernamePlaceholder: 'Enter Username',
    Next: 'Next',
    Login: 'Login',
    stateTxt: 'Select Site',
    domainTxt: 'Select Domain',
    btnText: 'Next',
    cardHeading: 'User Login',
    forgotUserName: 'Forgot Username',
    passwordPlaceholder: 'Enter Password',
    forgotPassword: 'Forgot Password',
    passwordLabel: 'Password',
    isValid: 'is-valid',
    isInValid: 'is-invalid',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter Email',
    confirmEmailLabel: 'Confirm-Email',
    confirmEmailPlaceholder: 'Confirm-Email',
    confirmEmailInput: '',
    emailInput: '',
    userNameInput: '',
    noValidation: '',
    confirmEmailValidation: '',
    emailValidation: '',
    showPassword: false,
    confirmation: false,
    passwordDetails: false,
    hideLogin: false,
    confirmEmailNotMatch: false,
    customLogoSize: {
        width: '200',
        height: '50'
    },
    Domain :[
        'Doctor',
        'Pharma',
        'Nurse'
    ]
};

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR']);
    translate.setDefaultLang('en-US');
    console.log(this.translate.instant('userName'));
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');
  }

  /**
  * Life cycle hook of Angular
  */
  ngOnInit(): void {
  }

  /**
  * @param text receives the button name in string formate
  * 
  * Based on the button name received in the click event functionality will change
  */
  btnClick(text: string) {
    switch (text) {
      case 'Next':
        if (this.variableList.userNameInput.length > 0) {
          this.variableList.noValidation = this.variableList.isValid;
          this.variableList.showPassword = true;
          this.variableList.btnText = this.variableList.Login;
          this.variableList.confirmation = false;
          this.variableList.passwordDetails = true;
          this.variableList.cardHeading = this.variableList.passwordPlaceholder;
        } else {
          this.variableList.noValidation = this.variableList.isInValid;
        }
        break;
      case 'Reset':
        if(this.variableList.emailInput.length>0 && this.variableList.emailInput.includes('@')) {
          this.variableList.btnText = 'Resend';
          this.recoveryConfirmation();
        } else {
          this.variableList.emailValidation = this.variableList.isInValid;
        }

        break;
      case 'Sent':
        this.emailValidation();

        break;
      case 'Login':

        break;
        break;
      case 'Resend':
        this.variableList.count = this.variableList.count+1;

        break;
      default:
        this.cancelClick();        
        this.variableList.cardHeading = 'User Login';
        break;
    }
  }

  /**
  * email validation will check whether user gave the valid email or not
  * 
  * If user gave the valid email then it will check if email and email confirmation are same
  */
  public emailValidation() {
    if (this.variableList.emailInput.length > 0 && this.variableList.confirmEmailInput.length > 0 && this.variableList.emailInput.includes('@') && this.variableList.confirmEmailInput.includes('@')) {
      this.variableList.emailValidation = '';
      this.variableList.confirmEmailValidation = '';
      if (this.variableList.emailInput == this.variableList.confirmEmailInput) {
        this.recoveryConfirmation();
      } else {
        this.variableList.confirmEmailValidation = this.variableList.isInValid;
        this.variableList.confirmEmailNotMatch = true;
      }
    } else {
      if (this.variableList.emailInput.length == 0 || !this.variableList.emailInput.includes('@')) {
        this.variableList.emailValidation = this.variableList.isInValid;
      } else {
        this.variableList.emailValidation = '';
      }
      if (this.variableList.confirmEmailInput.length == 0 || !this.variableList.confirmEmailInput.includes('@')) {
        this.variableList.confirmEmailValidation = this.variableList.isInValid;
      }
    }
  }

  /**
  * @Param text will receive the input of forgotpassword or forgotusername
  * 
  * based on the input received by the method user will be navigated
  */
  public forgotDetails(text: string) {
    this.variableList.hideLogin = true;
    switch (text) {
      case 'Forgot Password':
        this.variableList.btnText = 'Reset';
        this.variableList.cardHeading = this.variableList.forgotPassword;
        this.variableList.showPassword = true;
        break;

      default:
        this.variableList.btnText = 'Sent';
        this.variableList.cardHeading = this.variableList.forgotUserName;
        this.variableList.showPassword = true;
        break;
    }
  }

  /**
  * when user click on reset or sent this method will be triggered
  */

  public recoveryConfirmation() {
    this.variableList.cardHeading = 'Confirmation';
    this.variableList.confirmation = true;
    this.variableList.btnText = 'Resend';
    this.variableList.showPassword = false;
  }

   /**
  * when user click on the login or cancel then we will reset all the variables to starting stage.
  */
  public cancelClick() {
    this.variableList.showPassword = false;
    this.variableList.hideLogin = false;
    this.variableList.passwordDetails = false;
    this.variableList.btnText = 'Next';
    this.variableList.confirmation = false;
    this.variableList.cardHeading = "User Login";
    this.variableList.emailValidation = '';
    this.variableList.confirmEmailValidation = '';
    this.variableList.confirmEmailNotMatch = false;
    this.variableList.confirmEmailInput = '';
    this.variableList.emailInput = '';
    this.variableList.count = 0;
    this.variableList.userNameInput = '';
    this.variableList.noValidation = '';
  }

  public changeLang(event: string) {
    if (event == 'French') {
      this.translate.use('fr-FR');
    } else {
      this.translate.use('en-US');
    }
  }

}
