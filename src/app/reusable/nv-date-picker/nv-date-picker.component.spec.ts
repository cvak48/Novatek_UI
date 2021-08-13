import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDataPickerComponent } from './nv-date-picker.component';

describe('NvDataPickerComponent', () => {
  let component: NvDataPickerComponent;
  let fixture: ComponentFixture<NvDataPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDataPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvDataPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
