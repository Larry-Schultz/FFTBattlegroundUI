import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotlandTableComponent } from './botlandtable.component';

describe('BotlandtableComponent', () => {
  let component: BotlandTableComponent;
  let fixture: ComponentFixture<BotlandTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotlandTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotlandTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
