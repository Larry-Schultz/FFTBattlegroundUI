import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePageOptionsComponent } from './livepageoptions.component';

describe('LivepageoptionsComponent', () => {
  let component: LivePageOptionsComponent;
  let fixture: ComponentFixture<LivePageOptionsComponent>;

  beforeEach(async(() => {
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
