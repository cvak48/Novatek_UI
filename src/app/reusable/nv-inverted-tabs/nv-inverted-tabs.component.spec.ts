import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVInvertedTabsComponent } from './nv-inverted-tabs.component';

describe('NVInvertedTabsComponent', () => {
  let component: NVInvertedTabsComponent;
  let fixture: ComponentFixture<NVInvertedTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVInvertedTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVInvertedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
