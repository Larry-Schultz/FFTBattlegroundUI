import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlandDisplayComponent } from './botlanddisplay.component';

describe('BotlanddisplayComponent', () => {
  let component: BotlandDisplayComponent;
  let fixture: ComponentFixture<BotlandDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotlandDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
