import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCustomTableComponent } from './nv-custom-table.component';

describe('NvCustomTableComponent', () => {
  let component: NvCustomTableComponent;
  let fixture: ComponentFixture<NvCustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCustomTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
