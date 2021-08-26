import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvFeedComponent } from './nv-feed.component';

describe('FeedComponent', () => {
  let component: NvFeedComponent;
  let fixture: ComponentFixture<NvFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
