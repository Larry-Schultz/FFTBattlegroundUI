import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightImageComponent } from './fightimage.component';

describe('FightimageComponent', () => {
  let component: FightImageComponent;
  let fixture: ComponentFixture<FightImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
