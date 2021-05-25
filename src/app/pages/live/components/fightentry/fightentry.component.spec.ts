import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FightEntryComponent } from './fightentry.component';

describe('FightentryComponent', () => {
  let component: FightEntryComponent;
  let fixture: ComponentFixture<FightEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
