import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvTablePanelComponent } from './nv-table-panel.component';

describe('NvTablePanelComponent', () => {
  let component: NvTablePanelComponent;
  let fixture: ComponentFixture<NvTablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvTablePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvTablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
