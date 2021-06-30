import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDatePickerComponent } from './nv-date-picker.component';

describe('NvDatePickerComponent', () => {
  let component: NvDatePickerComponent;
  let fixture: ComponentFixture<NvDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
