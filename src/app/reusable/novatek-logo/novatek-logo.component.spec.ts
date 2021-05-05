import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatekLogoComponent } from './novatek-logo.component';

describe('NovatekLogoComponent', () => {
  let component: NovatekLogoComponent;
  let fixture: ComponentFixture<NovatekLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovatekLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatekLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
