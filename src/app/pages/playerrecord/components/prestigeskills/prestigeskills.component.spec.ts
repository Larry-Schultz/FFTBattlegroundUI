import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestigeSkillsComponent } from './prestigeskills.component';

describe('PrestigeskillsComponent', () => {
  let component: PrestigeSkillsComponent;
  let fixture: ComponentFixture<PrestigeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestigeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestigeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
