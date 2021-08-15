import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMultiFileUploadComponent } from './nv-multi-file-upload.component';

describe('NvMultiFileUploadComponent', () => {
  let component: NvMultiFileUploadComponent;
  let fixture: ComponentFixture<NvMultiFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvMultiFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvMultiFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
