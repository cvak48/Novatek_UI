import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDropdownComponent } from './nv-dropdown.component';

describe('NvDropdownComponent', () => {
  let component: NvDropdownComponent;
  let fixture: ComponentFixture<NvDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDropdownComponent ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(NvDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
