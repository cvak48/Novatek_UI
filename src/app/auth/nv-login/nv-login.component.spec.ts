import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVLoginComponent } from './nv-login.component';

describe('NVLoginComponent', () => {
  let component: NVLoginComponent;
  let fixture: ComponentFixture<NVLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
