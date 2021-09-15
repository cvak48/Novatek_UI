import { TestBed } from '@angular/core/testing';

import { NvPopupService } from './nv-pupup.service';

describe('NvPupupService', () => {
  let service: NvPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
