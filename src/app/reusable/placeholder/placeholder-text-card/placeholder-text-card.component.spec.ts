import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderTextCardComponent } from './placeholder-text-card.component';

describe('PlaceholderTextCardComponent', () => {
  let component: PlaceholderTextCardComponent;
  let fixture: ComponentFixture<PlaceholderTextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderTextCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
