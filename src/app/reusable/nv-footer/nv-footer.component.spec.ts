import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvFooterComponent } from './nv-footer.component';

describe('NvFooterComponent', () => {
  let component: NvFooterComponent;
  let fixture: ComponentFixture<NvFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
