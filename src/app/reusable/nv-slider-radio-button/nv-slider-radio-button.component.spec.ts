import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSliderRadioButtonComponent } from './nv-slider-radio-button.component';

describe('NvSliderRadioButtonComponent', () => {
  let component: NvSliderRadioButtonComponent;
  let fixture: ComponentFixture<NvSliderRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSliderRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSliderRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
