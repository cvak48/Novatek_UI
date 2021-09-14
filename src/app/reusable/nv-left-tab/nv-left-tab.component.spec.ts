import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVLeftTabComponent } from './nv-left-tab.component';

describe('NVNVLeftTabComponent', () => {
  let component: NVLeftTabComponent;
  let fixture: ComponentFixture<NVLeftTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVLeftTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVLeftTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
