import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchBlockComponent } from './matchblock.component';

describe('MatchblockComponent', () => {
  let component: MatchBlockComponent;
  let fixture: ComponentFixture<MatchBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
