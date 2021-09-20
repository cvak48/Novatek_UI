import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvUserListViewComponent } from './nv-user-list-view.component';

describe('UserListViewComponent', () => {
  let component: NvUserListViewComponent;
  let fixture: ComponentFixture<NvUserListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvUserListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvUserListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
