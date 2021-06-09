import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public states = [
    { value: 'Alberta' },
    { value: 'Manitoba' },
    { value: 'Nunavut' },
    { value: 'Ontario' },
    { value: 'Quebec' },
    { value: 'Saskatchewan' }
  ]

  public customLogoSize = {
    width:'250',
    height: '50'
  }

  public Domain = [
    { value: 'Doctor' },
    { value: 'Pharma' },
    { value: 'Nurse' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  askPassword() {
    this.showPassword = true;
  }

  authenticateuser() {
    
  }

}
