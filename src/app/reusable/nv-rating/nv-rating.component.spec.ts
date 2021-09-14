import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVRatingComponent } from './nv-rating.component';

describe('NVRatingComponent', () => {
  let component: NVRatingComponent;
  let fixture: ComponentFixture<NVRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
