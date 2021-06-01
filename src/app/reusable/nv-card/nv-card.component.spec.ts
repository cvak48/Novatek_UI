import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCardComponent } from './nv-card.component';

describe('NvCardComponent', () => {
  let component: NvCardComponent;
  let fixture: ComponentFixture<NvCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
