import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvUserProfileComponent } from './nv-user-profile.component';

describe('UserProfileComponent', () => {
  let component: NvUserProfileComponent;
  let fixture: ComponentFixture<NvUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
