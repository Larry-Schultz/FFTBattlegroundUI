import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchembedComponent } from './twitchembed.component';

describe('TwitchembedComponent', () => {
  let component: TwitchembedComponent;
  let fixture: ComponentFixture<TwitchembedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchembedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchembedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
