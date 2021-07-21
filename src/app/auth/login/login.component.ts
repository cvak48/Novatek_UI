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
    width:'200',
    height: '50'
  }

  public Domain = [
    'Doctor',
    'Pharma',
    'Nurse'
  ]
  constructor() { }

  /**
  * Life cycle hook of Angular
  */
  ngOnInit(): void {
  }

  /**
  * showPassword vairable state to shows the password feild
  */
  askPassword() {
    this.showPassword = true;
  }

  // Auth the user
  authenticateuser() {
    
  }

  onStateSelect(e:any) {

  }

}
