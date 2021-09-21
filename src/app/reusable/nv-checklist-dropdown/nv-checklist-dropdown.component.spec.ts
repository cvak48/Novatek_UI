import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvChecklistDropdownComponent } from './nv-checklist-dropdown.component';

describe('NvChecklistDropdownComponent', () => {
  let component: NvChecklistDropdownComponent;
  let fixture: ComponentFixture<NvChecklistDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvChecklistDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvChecklistDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
