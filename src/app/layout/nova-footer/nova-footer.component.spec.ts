import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaFooterComponent } from './nova-footer.component';

describe('NovaFooterComponent', () => {
  let component: NovaFooterComponent;
  let fixture: ComponentFixture<NovaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
