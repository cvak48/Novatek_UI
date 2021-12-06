import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvDialogComponent } from './nv-dialog.component';

describe('NvDialogComponent', () => {
  let component: NvDialogComponent;
  let fixture: ComponentFixture<NvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
