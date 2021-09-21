import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVLogoComponent } from './nv-logo.component';

describe('NVLogoComponent', () => {
  let component: NVLogoComponent;
  let fixture: ComponentFixture<NVLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
