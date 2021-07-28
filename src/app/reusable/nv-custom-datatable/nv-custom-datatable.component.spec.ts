import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCustomDatatableComponent } from './nv-custom-datatable.component';

describe('NvCustomDatatableComponent', () => {
  let component: NvCustomDatatableComponent;
  let fixture: ComponentFixture<NvCustomDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCustomDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCustomDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
