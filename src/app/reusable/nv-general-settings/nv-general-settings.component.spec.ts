import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvGeneralSettingsComponent } from './nv-general-settings.component';

describe('GeneralSettingsComponent', () => {
  let component: NvGeneralSettingsComponent;
  let fixture: ComponentFixture<NvGeneralSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvGeneralSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvGeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
