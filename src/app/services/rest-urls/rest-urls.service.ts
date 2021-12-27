import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestUrlsService {
  forgotPasswordUrl: string = 'api/User/ForgotPassword';
  forgotUsernameUrl: string = 'api/User/ForgotUsername';
  logoutUrl: string = 'api/User/Logout';
}
