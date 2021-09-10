import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvAvatarComponent } from './nv-avatar.component';

describe('NvAvatarComponent', () => {
  let component: NvAvatarComponent;
  let fixture: ComponentFixture<NvAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
