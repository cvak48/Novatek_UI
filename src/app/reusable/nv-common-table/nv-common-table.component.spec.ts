import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCommonTableComponent } from './nv-common-table.component';

describe('NvCommonTableComponent', () => {
  let component: NvCommonTableComponent;
  let fixture: ComponentFixture<NvCommonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCommonTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCommonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
