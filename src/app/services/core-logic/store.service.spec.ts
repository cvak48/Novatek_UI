import { TestBed } from '@angular/core/testing';

import { NvStoreService } from './store.service';

describe('StoreContextService', () => {
  let service: NvStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NvStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
