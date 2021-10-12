import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvAttachmentListComponent } from './nv-attachment-list.component';

describe('NvAttachmentListComponent', () => {
  let component: NvAttachmentListComponent;
  let fixture: ComponentFixture<NvAttachmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvAttachmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvAttachmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
