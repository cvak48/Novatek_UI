import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMultiSelectDropdownComponent } from './nv-multiselect-dropdown.component';

describe('NvMultiSelectDropdownComponent', () => {
  let component: NvMultiSelectDropdownComponent;
  let fixture: ComponentFixture<NvMultiSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvMultiSelectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvMultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
