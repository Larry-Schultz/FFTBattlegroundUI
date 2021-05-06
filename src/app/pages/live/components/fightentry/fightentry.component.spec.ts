import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightEntryComponent } from './fightentry.component';

describe('FightentryComponent', () => {
  let component: FightEntryComponent;
  let fixture: ComponentFixture<FightEntryComponent>;

  beforeEach(async(() => {
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
