import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCompanyGeneralInfoComponent } from './nv-company-general-info.component';

describe('NvCompanyGeneralInfoComponent', () => {
  let component: NvCompanyGeneralInfoComponent;
  let fixture: ComponentFixture<NvCompanyGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCompanyGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCompanyGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
