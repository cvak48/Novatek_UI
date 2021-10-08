import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvIconPickerDemoComponent } from './nv-icon-picker-demo.component';

describe('NvIconPickerDemoComponent', () => {
  let component: NvIconPickerDemoComponent;
  let fixture: ComponentFixture<NvIconPickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvIconPickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvIconPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
