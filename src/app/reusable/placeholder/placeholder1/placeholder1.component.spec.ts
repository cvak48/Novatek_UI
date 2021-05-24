import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Placeholder1Component } from './placeholder1.component';

describe('Placeholder1Component', () => {
  let component: Placeholder1Component;
  let fixture: ComponentFixture<Placeholder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Placeholder1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Placeholder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
