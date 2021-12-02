import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSaveThirdPanelComponent } from './nv-save-third-panel.component';

describe('NvSaveThirdPanelComponent', () => {
  let component: NvSaveThirdPanelComponent;
  let fixture: ComponentFixture<NvSaveThirdPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSaveThirdPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSaveThirdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
