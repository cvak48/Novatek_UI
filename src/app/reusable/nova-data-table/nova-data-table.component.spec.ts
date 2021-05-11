import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDataTableComponent } from './nova-data-table.component';

describe('NovaDataTableComponent', () => {
  let component: NovaDataTableComponent;
  let fixture: ComponentFixture<NovaDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
