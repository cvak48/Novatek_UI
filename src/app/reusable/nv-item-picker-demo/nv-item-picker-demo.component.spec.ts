import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvItemPickerDemoComponent } from './nv-item-picker-demo.component';

describe('NvItemPickerDemoComponent', () => {
  let component: NvItemPickerDemoComponent;
  let fixture: ComponentFixture<NvItemPickerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvItemPickerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvItemPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
