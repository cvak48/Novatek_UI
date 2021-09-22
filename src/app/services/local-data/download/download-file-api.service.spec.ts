import { TestBed } from '@angular/core/testing';

import { DownloadFileApiService } from './download-file-api.service';

describe('DownloadFileApiService', () => {
  let service: DownloadFileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadFileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
