import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSliderPanelComponent } from './nv-slider-panel.component';

describe('NvSliderPanelComponent', () => {
  let component: NvSliderPanelComponent;
  let fixture: ComponentFixture<NvSliderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSliderPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSliderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
