import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvFieldComponent } from './nv-field.component';

describe('NvFieldComponent', () => { 
  let component: NvFieldComponent;
  let fixture: ComponentFixture<NvFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvFieldComponent ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(NvFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
