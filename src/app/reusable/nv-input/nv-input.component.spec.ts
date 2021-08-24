import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvInputComponent } from './nv-input.component';

describe('NvInputComponent', () => {
  let component: NvInputComponent;
  let fixture: ComponentFixture<NvInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
