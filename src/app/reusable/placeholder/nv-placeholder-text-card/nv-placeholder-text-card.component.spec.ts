import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderTextCardComponent } from './nv-placeholder-text-card.component';

describe('NvPlaceholderTextCardComponent', () => {
  let component: NvPlaceholderTextCardComponent;
  let fixture: ComponentFixture<NvPlaceholderTextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderTextCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
