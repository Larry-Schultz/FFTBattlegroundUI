import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlandComponent } from './botland.component';

describe('BotlandComponent', () => {
  let component: BotlandComponent;
  let fixture: ComponentFixture<BotlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
