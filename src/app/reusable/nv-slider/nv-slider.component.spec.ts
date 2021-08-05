import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSliderComponent } from './nv-slider.component';

describe('NvSliderComponent', () => {
  let component: NvSliderComponent;
  let fixture: ComponentFixture<NvSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
