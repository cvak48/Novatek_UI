import { TestBed } from '@angular/core/testing';

import { TokenAppenderInterceptor } from './token-appender.interceptor';

describe('TokenAppenderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenAppenderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenAppenderInterceptor = TestBed.inject(TokenAppenderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
