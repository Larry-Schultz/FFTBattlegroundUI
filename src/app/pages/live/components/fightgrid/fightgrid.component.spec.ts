import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FightGridComponent } from './fightgrid.component';

describe('FightgridComponent', () => {
  let component: FightGridComponent;
  let fixture: ComponentFixture<FightGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FightGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
