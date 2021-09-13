import { TestBed } from '@angular/core/testing';

import { NvIconService } from './nv-icon.service';

describe('NvIconService', () => {
  let service: NvIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
