import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvEditPanelComponent } from './nv-edit-panel.component';

describe('NvEditPanelComponent', () => {
  let component: NvEditPanelComponent;
  let fixture: ComponentFixture<NvEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvEditPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
