import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvUploadComponent } from './nv-upload.component';

describe('NvUploadComponent', () => {
  let component: NvUploadComponent;
  let fixture: ComponentFixture<NvUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
