import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderBannerComponent } from './placeholder-banner.component';

describe('PlaceholderBannerComponent', () => {
  let component: PlaceholderBannerComponent;
  let fixture: ComponentFixture<PlaceholderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
