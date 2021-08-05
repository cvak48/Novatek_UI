import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPlaceholderListComponent } from './nv-placeholder-list.component';

describe('NvPlaceholderListComponent', () => {
  let component: NvPlaceholderListComponent;
  let fixture: ComponentFixture<NvPlaceholderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPlaceholderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPlaceholderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
