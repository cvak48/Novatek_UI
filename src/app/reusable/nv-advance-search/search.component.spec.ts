import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: AdvanceSearchComponent;
  let fixture: ComponentFixture<AdvanceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
