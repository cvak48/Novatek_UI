import { TestBed } from '@angular/core/testing';

import { TreeViewChecklistService } from './tree-view-checklist.service';

describe('TreeViewChecklistService', () => {
  let service: TreeViewChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeViewChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
