import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvNotificationIconComponent } from './nv-notification-icon.component';

describe('NotificationComponent', () => {
  let component: NvNotificationIconComponent;
  let fixture: ComponentFixture<NvNotificationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvNotificationIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvNotificationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
