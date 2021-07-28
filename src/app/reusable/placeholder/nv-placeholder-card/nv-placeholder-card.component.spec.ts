import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderCardComponent } from './nv-placeholder-card.component';

describe('NvPlaceholderCardComponent', () => {
  let component: NvPlaceholderCardComponent;
  let fixture: ComponentFixture<NvPlaceholderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
