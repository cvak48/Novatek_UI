import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderSmallCardComponent } from './nv-placeholder-small-card.component';

describe('NvPlaceholderSmallCardComponent', () => {
  let component: NvPlaceholderSmallCardComponent;
  let fixture: ComponentFixture<NvPlaceholderSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderSmallCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
