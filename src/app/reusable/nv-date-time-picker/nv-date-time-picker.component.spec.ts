import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDateTimePickerComponent } from './nv-date-time-picker.component';

describe('NvDateTimePickerComponent', () => {
  let component: NvDateTimePickerComponent;
  let fixture: ComponentFixture<NvDateTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDateTimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
