import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NVCommentBoxComponent } from './nv-comment-box.component';

describe('NVCommentBoxComponent', () => {
  let component: NVCommentBoxComponent;
  let fixture: ComponentFixture<NVCommentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVCommentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
