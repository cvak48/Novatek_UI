import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvHeaderComponent } from './nv-header.component';

describe('NvHeaderComponent', () => {
  let component: NvHeaderComponent;
  let fixture: ComponentFixture<NvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
