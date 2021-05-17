import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSidenavComponent } from './nova-sidenav.component';

describe('NovaSidenavComponent', () => {
  let component: NovaSidenavComponent;
  let fixture: ComponentFixture<NovaSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
