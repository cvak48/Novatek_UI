import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSliderCommonPanelComponent } from './nv-slider-common-panel.component';

describe('NvSliderPanelComponent', () => {
  let component: NvSliderCommonPanelComponent;
  let fixture: ComponentFixture<NvSliderCommonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSliderCommonPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSliderCommonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
