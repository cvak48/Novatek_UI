import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NVRightTabComponent } from './nv-right-tab.component';


describe('NvRightTabComponent', () => {
  let component: NVRightTabComponent;
  let fixture: ComponentFixture<NVRightTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NVRightTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NVRightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
