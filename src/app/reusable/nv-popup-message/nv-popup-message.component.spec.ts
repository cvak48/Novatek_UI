import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPopupMessageComponent } from './nv-popup-message.component';

describe('NvPopupMessageComponent', () => {
  let component: NvPopupMessageComponent;
  let fixture: ComponentFixture<NvPopupMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPopupMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
