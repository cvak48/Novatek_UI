import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaLoginFooterComponent } from './nova-login-footer.component';

describe('NovaLoginFooterComponent', () => {
  let component: NovaLoginFooterComponent;
  let fixture: ComponentFixture<NovaLoginFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaLoginFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
