import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBonusComponent } from './skillbonus.component';

describe('SkillbonusComponent', () => {
  let component: SkillBonusComponent;
  let fixture: ComponentFixture<SkillBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
