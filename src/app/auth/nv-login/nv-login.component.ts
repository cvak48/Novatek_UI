import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropdownFieldType } from 'src/app/model/data-model';
import { fadeInAndOut } from '../../../assets/trigger';
@Component({
  selector: 'app-login',
  templateUrl: './nv-login.component.html',
  styleUrls: ['./nv-login.component.scss'],
  animations: [
    // The following are pre-built triggers - Use these to add animations with the least work
    fadeInAndOut,
  ],
})
export class NVLoginComponent implements OnInit {
  isResendSubmitted = false;
  isEmailInvalid = false;
  showSubmitBtn = false;
  showNextBtn = true;
  showResendBtn = false;
  showLoginBtn = false;
  showLoginTxt = true;
  showPasswordTxt = false;
  showForgotUsrnameTxt = false;
  showForgotPasswordTxt = false;
  showConfirmationTxt = false;

  public variableList: any = {
    selectedNumber: 2,
    count: 1,
    usernamePlaceholder: 'Enter Username',
    usernameLabel: 'Username',
    next: 'Next',
    login: 'Login',
    resend: 'Resend',
    submit: 'Submit',
    stateTxt: 'Select Site',
    domainTxt: 'Select Domain',
    cancel: 'Cancel',
    confirmationText: 'Confirmation',
    cardHeading: 'User Login',
    forgotUserName: 'Forgot Username',
    passwordPlaceholder: 'Enter Password',
    forgotPassword: 'Forgot Password',
    passwordLabel: 'Password',
    isValid: 'is-valid',
    isInValid: 'is-invalid',
    emailLabel: 'E-mail',
    emailPlaceholder: 'Enter Your E-mail',
    confirmEmailLabel: 'Confirm-Email',
    confirmEmailPlaceholder: 'Confirm-Email',
    showPassword: false,
    confirmation: false,
    passwordDetails: false,
    hideLogin: false,
    confirmEmailNotMatch: false,
    customLogoSize: {
      width: '200',
      height: '50',
    },
  };

  // dropDown Menu
  dropdownItemsMenu = this.mockMenuDropdown().items;
  textTrimNumberMenu = this.mockMenuDropdown().textTrimNumber;
  selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
  dropDownFieldTypeMenu = this.mockMenuDropdown().dropDownFieldType;

  public emptyVariableList = {
    confirmEmailInput: '',
    emailInput: '',
    userNameInput: '',
    noValidation: '',
    confirmEmailValidation: '',
    emailValidation: '',
  };

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR', 'zh-CN']);
    translate.setDefaultLang('en-US');
  }

  /**
   * Life cycle hook of Angular
   */
  ngOnInit(): void {}

  /**
   * @param text receives the button name in string formate
   *
   * Based on the button name received in the click event functionality will change
   */
  btnClick(text: string) {
    switch (text) {
      case 'Next':
      case 'Prochaine':
      case '下一个':
        if (this.emptyVariableList.userNameInput.length > 0) {
          this.variableList.noValidation = this.variableList.isValid;
          this.variableList.showPassword = true;
          this.variableList.confirmation = false;
          this.variableList.passwordDetails = true;
          this.showSubmitBtn = false;
          this.showResendBtn = false;
          this.showNextBtn = false;
          this.showLoginBtn = true;
          this.showLoginTxt = false;
          this.showPasswordTxt = true;
          this.showForgotUsrnameTxt = false;
          this.showForgotPasswordTxt = false;
          this.showConfirmationTxt = false;
          //this.variableList.cardHeading = this.variableList.passwordPlaceholder; -- don't delete
        } else {
          this.variableList.noValidation = this.variableList.isInValid;
        }
        break;
      case 'Submit':
      case 'nous':
      case '提交':
        this.emailValidation();
        break;
      case 'Login':
      case 'Connexion':
      case '登录':
        break;
      case 'Resend':
      case 'Renvoyer':
      case '重发':
        this.showResendBtn = true;
        this.variableList.count = this.variableList.count + 1;
        if (this.variableList.count > 1) {
          this.isResendSubmitted = true;
        } else {
          this.isResendSubmitted = false;
        }
        break;
      default:
        this.cancelClick();
        //this.variableList.cardHeading = 'User Login';
        this.showLoginTxt = true;
        this.showPasswordTxt = false;
        this.showForgotUsrnameTxt = false;
        this.showForgotPasswordTxt = false;
        this.showConfirmationTxt = false;
        break;
    }
  }

  /**
   * email validation will check whether user gave the valid email or not
   *
   * If user gave the valid email then it will check if email and email confirmation are same
   */
  public emailValidation() {
    if (
      this.emptyVariableList.emailInput.length > 0 &&
      this.emptyVariableList.emailInput.includes('@')
    ) {
      this.variableList.emailValidation = '';
      this.variableList.confirmEmailValidation = '';
      this.isEmailInvalid = false;
      this.recoveryConfirmation();
    } else {
      this.variableList.emailValidation = this.variableList.isInValid;
      this.isEmailInvalid = true;
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
      case 'Mot de passe oublié':
        this.showSubmitBtn = true;
        this.showNextBtn = false;
        this.showResendBtn = false;
        this.showLoginBtn = false;
        this.variableList.showPassword = true;
        this.showLoginTxt = false;
        this.showPasswordTxt = false;
        this.showForgotUsrnameTxt = false;
        this.showForgotPasswordTxt = true;
        this.showConfirmationTxt = false;
        break;
      // using Forgot Username as default case
      default:
        this.showSubmitBtn = true;
        this.showNextBtn = false;
        this.showResendBtn = false;
        this.showLoginBtn = false;
        this.showLoginTxt = false;
        this.showPasswordTxt = false;
        this.showForgotUsrnameTxt = true;
        this.showForgotPasswordTxt = false;
        this.showConfirmationTxt = false;
        this.variableList.showPassword = true;
        break;
    }
  }

  /**
   * when user click on reset or sent this method will be triggered
   */

  public recoveryConfirmation() {
    this.showLoginTxt = false;
    this.showPasswordTxt = false;
    this.showForgotUsrnameTxt = false;
    this.showForgotPasswordTxt = false;
    this.showConfirmationTxt = true;
    this.variableList.confirmation = true;
    this.showSubmitBtn = false;
    this.showResendBtn = true;
    this.showNextBtn = false;
    this.showLoginBtn = false;
    this.variableList.showPassword = false;
  }

  /**
   * when user click on the login or cancel then we will reset all the variables to starting stage.
   */
  public cancelClick() {
    this.showSubmitBtn = false;
    this.showNextBtn = true;
    this.showResendBtn = false;
    this.showLoginBtn = false;
    this.variableList.showPassword = false;
    this.isResendSubmitted = false;
    this.variableList.hideLogin = false;
    this.variableList.passwordDetails = false;
    this.showLoginTxt = true;
    this.showPasswordTxt = false;
    this.showForgotUsrnameTxt = false;
    this.showForgotPasswordTxt = false;
    this.showConfirmationTxt = false;
    this.variableList.confirmation = false;
    this.variableList.emailValidation = '';
    this.variableList.confirmEmailValidation = '';
    this.isEmailInvalid = false;
    this.variableList.confirmEmailNotMatch = false;
    this.variableList.confirmEmailInput = '';
    this.variableList.emailInput = '';
    this.variableList.count = 1;
    this.emptyVariableList.userNameInput = '';
    this.variableList.noValidation = '';
  }

  public changeLang(event: string) {
    
    if (event == 'French') {
      this.translate.use('fr-FR');
      this.transilateVar();
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    } else if (event == 'Chinese') {
      this.translate.use('zh-CN');
      this.transilateVar();
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    } else {
      this.translate.use('en-US');
      this.transilateVar();
      this.selectedItemDefaultMenu = this.mockMenuDropdown().selectedItemDefault;
    }
  }

  private transilateVar() {
    for (var key of Object.keys(this.variableList)) {
      if (typeof this.variableList[key] !== 'number') {
        if (this.variableList[key].length > 0) {
          this.transilateLang(key);
        }
      }
    }
  }

  private transilateLang(key: string) {
    this.translate.get(key).subscribe((res) => {
      this.variableList[key] = res;
    });
  }

  onDomainChange(item: string): void {
  }

  mockMenuDropdown(): any {
    const dropdownInputs = {
      items: ['Doctor', 'Pharma', 'Nurse'],
      textTrimNumber: 2, //5
      selectedItemDefault: this.variableList.domainTxt, //'Select Domain',
      dropDownFieldType: DropdownFieldType.Default,
    };
    return dropdownInputs;
  }

  login() {
  }
}
