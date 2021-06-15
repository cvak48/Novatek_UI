import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSmallCardComponent } from './placeholder-small-card.component';

describe('PlaceholderSmallCardComponent', () => {
  let component: PlaceholderSmallCardComponent;
  let fixture: ComponentFixture<PlaceholderSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderSmallCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
