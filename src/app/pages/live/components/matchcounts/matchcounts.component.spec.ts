import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchCountsComponent } from './matchcounts.component';

describe('MatchcountsComponent', () => {
  let component: MatchCountsComponent;
  let fixture: ComponentFixture<MatchCountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
