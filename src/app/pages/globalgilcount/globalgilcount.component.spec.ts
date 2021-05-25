import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalGilCountComponent } from './globalgilcount.component';

describe('GlobalgilcountComponent', () => {
  let component: GlobalGilCountComponent;
  let fixture: ComponentFixture<GlobalGilCountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalGilCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGilCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
