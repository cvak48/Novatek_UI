import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderBigCardComponent } from './placeholderBigCard.component';

describe('PlaceholderBigCardComponent', () => {
  let component: PlaceholderBigCardComponent;
  let fixture: ComponentFixture<PlaceholderBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderBigCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
