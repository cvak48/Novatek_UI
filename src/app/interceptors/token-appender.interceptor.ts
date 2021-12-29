import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedAuthService } from '../services/auth-data/shared-auth.service';

@Injectable()
export class TokenAppenderInterceptor implements HttpInterceptor {
  token: string = '';
  constructor(private auth_data: SharedAuthService) {
    this.auth_data.access_token.subscribe((res: string) => (this.token = res));
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('toekn', this.token);
    if (this.token) {
      const token_req = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.token}`),
      });
      // request.headers.append('Authorization', `Bearer ${this.token}`);
      console.log(token_req.headers);
      return next.handle(token_req);
    }
    return next.handle(request);
  }
}
