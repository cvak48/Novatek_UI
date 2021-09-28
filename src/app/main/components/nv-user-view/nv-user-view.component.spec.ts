import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvUserViewComponent } from './nv-user-view.component';

describe('NvUserViewComponent', () => {
  let component: NvUserViewComponent;
  let fixture: ComponentFixture<NvUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
