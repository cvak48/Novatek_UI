import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderBannerComponent } from './nv-placeholder-banner.component';

describe('NvPlaceholderBannerComponent', () => {
  let component: NvPlaceholderBannerComponent;
  let fixture: ComponentFixture<NvPlaceholderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
