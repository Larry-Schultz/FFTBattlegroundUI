import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalGilCountTabComponent } from './globalgilcounttab.component';

describe('GlobalgilcounttabComponent', () => {
  let component: GlobalGilCountTabComponent;
  let fixture: ComponentFixture<GlobalGilCountTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalGilCountTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGilCountTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
