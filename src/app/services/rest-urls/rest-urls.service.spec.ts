import { TestBed } from '@angular/core/testing';

import { RestUrlsService } from './rest-urls.service';

describe('RestUrlsService', () => {
  let service: RestUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
