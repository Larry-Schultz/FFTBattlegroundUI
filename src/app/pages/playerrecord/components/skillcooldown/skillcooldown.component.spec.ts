import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCooldownComponent } from './skillcooldown.component';

describe('SkillcooldownComponent', () => {
  let component: SkillCooldownComponent;
  let fixture: ComponentFixture<SkillCooldownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCooldownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCooldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
