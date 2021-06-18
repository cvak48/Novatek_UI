import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCustomComponentComponent } from './nv-custom-component.component';

describe('NvCustomComponentComponent', () => {
  let component: NvCustomComponentComponent;
  let fixture: ComponentFixture<NvCustomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCustomComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
