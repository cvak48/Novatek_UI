import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderBigCardComponent } from './nv-placeholderBigCard.component';

describe('NvPlaceholderBigCardComponent', () => {
  let component: NvPlaceholderBigCardComponent;
  let fixture: ComponentFixture<NvPlaceholderBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderBigCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
