import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSliderToggleComponent } from './nv-slider-toggle.component';

describe('NvSliderToggleComponent', () => {
  let component: NvSliderToggleComponent;
  let fixture: ComponentFixture<NvSliderToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSliderToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSliderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
