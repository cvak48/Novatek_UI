import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDownloadComponent } from './nv-download.component';

describe('NvDownloadComponent', () => {
  let component: NvDownloadComponent;
  let fixture: ComponentFixture<NvDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
