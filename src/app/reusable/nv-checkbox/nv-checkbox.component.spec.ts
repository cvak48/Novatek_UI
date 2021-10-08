import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCheckboxComponent } from './nv-checkbox.component';

describe('NvCheckboxComponent', () => {
  let component: NvCheckboxComponent;
  let fixture: ComponentFixture<NvCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
