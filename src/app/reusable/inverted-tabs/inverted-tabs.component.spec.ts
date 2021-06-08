import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedTabsComponent } from './inverted-tabs.component';

describe('InvertedTabsComponent', () => {
  let component: InvertedTabsComponent;
  let fixture: ComponentFixture<InvertedTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertedTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
