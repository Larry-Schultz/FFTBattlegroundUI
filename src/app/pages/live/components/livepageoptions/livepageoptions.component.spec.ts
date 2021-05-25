import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LivePageOptionsComponent } from './livepageoptions.component';

describe('LivepageoptionsComponent', () => {
  let component: LivePageOptionsComponent;
  let fixture: ComponentFixture<LivePageOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePageOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
