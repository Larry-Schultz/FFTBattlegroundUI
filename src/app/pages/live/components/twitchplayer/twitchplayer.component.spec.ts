import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitchPlayerComponent } from './twitchplayer.component';

describe('TwitchplayerComponent', () => {
  let component: TwitchPlayerComponent;
  let fixture: ComponentFixture<TwitchPlayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
