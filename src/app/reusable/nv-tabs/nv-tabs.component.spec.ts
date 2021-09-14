import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVTabsComponent } from './nv-tabs.component';

describe('NVTabsComponent', () => {
  let component: NVTabsComponent;
  let fixture: ComponentFixture<NVTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
