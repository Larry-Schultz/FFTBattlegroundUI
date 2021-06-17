import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBonusComponent } from './classbonus.component';

describe('ClassbonusComponent', () => {
  let component: ClassBonusComponent;
  let fixture: ComponentFixture<ClassBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
