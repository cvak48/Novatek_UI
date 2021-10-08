import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvColorPickerDemoComponent } from './nv-color-picker-demo.component';

describe('NvColorPickerDemoComponent', () => {
  let component: NvColorPickerDemoComponent;
  let fixture: ComponentFixture<NvColorPickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvColorPickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvColorPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
