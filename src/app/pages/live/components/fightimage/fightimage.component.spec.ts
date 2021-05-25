import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FightImageComponent } from './fightimage.component';

describe('FightimageComponent', () => {
  let component: FightImageComponent;
  let fixture: ComponentFixture<FightImageComponent>;

  beforeEach(waitForAsync(() => {
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
