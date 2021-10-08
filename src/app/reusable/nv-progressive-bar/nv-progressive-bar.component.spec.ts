import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVProgressiveBarComponent } from './nv-progressive-bar.component';

describe('NVProgressiveBarComponent', () => {
  let component: NVProgressiveBarComponent;
  let fixture: ComponentFixture<NVProgressiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVProgressiveBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVProgressiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
