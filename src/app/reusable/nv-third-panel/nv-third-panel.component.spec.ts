import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvThirdPanelComponent } from './nv-third-panel.component';

describe('NvThirdPanelComponent', () => {
  let component: NvThirdPanelComponent;
  let fixture: ComponentFixture<NvThirdPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvThirdPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvThirdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
