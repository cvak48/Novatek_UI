import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSidenavComponent } from './nv-sidenav.component';

describe('NvSidenavComponent', () => {
  let component: NvSidenavComponent;
  let fixture: ComponentFixture<NvSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
