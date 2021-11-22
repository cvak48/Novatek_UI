import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NvFrontendSearchComponent } from './nv-search-front.component';

describe('NvSearchComponent', () => {
  let component: NvFrontendSearchComponent;
  let fixture: ComponentFixture<NvFrontendSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvFrontendSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvFrontendSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
