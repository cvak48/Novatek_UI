import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDropdownComponent } from './advance-dropdown.component';

describe('SearchComponent', () => {
  let component: AdvanceDropdownComponent;
  let fixture: ComponentFixture<AdvanceDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
