import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvTimePickerComponent } from './nv-time-picker.component';

describe('NvTimePickerComponent', () => {
  let component: NvTimePickerComponent;
  let fixture: ComponentFixture<NvTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvTimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
