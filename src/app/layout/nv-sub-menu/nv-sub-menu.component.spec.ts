import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSubMenuComponent } from './nv-sub-menu.component';

describe('NvSubMenuComponent', () => {
  let component: NvSubMenuComponent;
  let fixture: ComponentFixture<NvSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvSubMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
