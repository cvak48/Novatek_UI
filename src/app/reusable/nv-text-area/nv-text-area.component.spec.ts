import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVTextAreaComponent } from './nv-text-area.component';

describe('NVTextAreaComponent', () => {
  let component: NVTextAreaComponent;
  let fixture: ComponentFixture<NVTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
